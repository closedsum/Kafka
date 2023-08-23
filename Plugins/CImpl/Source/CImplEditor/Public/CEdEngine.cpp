#include "CEdEngine.h"
#include "CImplEditor.h"

// Library
#include "Library/CsLibrary_Blueprint.h"
#include "Library/CsLibrary_String.h"
// Managers
#include "Managers/CsManager_Javascript.h"
// Settings
#include "Settings/CsDeveloperSettings.h"
// Singleton
#include "CManager_Singleton_EdEngine.h"
// Game
//#include "Game/CGameState.h"
// Customizations
#include "DetailCustomizations/CsDamageRegisterDetailCustomization.h"
//#include "DetailCustomizations/CImplRegisterDetailCustomization.h"
// Editor
#include "PackageTools.h"
#include "Toolkits/AssetEditorToolkit.h"

namespace NCEdEngine
{
	namespace NCached
	{
		namespace Str
		{
		}
	}
}

// UEngine Interface
#pragma region

void UCEdEngine::Init(IEngineLoop* InEngineLoop)
{
	Super::Init(InEngineLoop);

	FCsDamageRegisterDetailCustomization::Register();
	//FCImplRegisterDetailCustomization::Register();

	UCsManager_Javascript::Init(this);
	UCsManager_Javascript::Get(this)->CreateEntryPoint();

	UCsDeveloperSettings* Settings = GetMutableDefault<UCsDeveloperSettings>();

	if (Settings->bOnEditorStartup_LoadDataRootSet)
	{
		Settings->PopulateAll(ECsPlatform::Windows);
	}

	// ICsAsset_Event
	GEditor->GetEditorSubsystem<UAssetEditorSubsystem>()->OnAssetOpenedInEditor().AddUObject(this, &UCEdEngine::OnAssetOpenedInEditor);
	GEditor->GetEditorSubsystem<UAssetEditorSubsystem>()->OnAssetEditorRequestClose().AddUObject(this, &UCEdEngine::OnAssetEditorRequestClose);
}

void UCEdEngine::PreExit()
{
	Super::PreExit();

	UCsManager_Javascript::Shutdown(this);
}

void UCEdEngine::Tick(float DeltaSeconds, bool bIdleMode)
{
	Super::Tick(DeltaSeconds, bIdleMode);

	const int32 Count = OpenedAssets.Num();

	// HACK: Capture event for when an Asset Editor is closed for an Asset
	//		 Event OnAssetEditorRequestClose() from UAssetEditorSubsystem doesn't seem to always be called
	//		 depending on the Editor.
	for (int32 I = Count - 1; I >= 0; --I)
	{
		UObject* Asset = OpenedAssets[I];

		TArray<IAssetEditorInstance*> Instances = GEditor->GetEditorSubsystem<UAssetEditorSubsystem>()->FindEditorsForAsset(Asset);

		if (Instances.Num() == CS_EMPTY)
		{
			OnAssetEditorRequestClose(Asset, EAssetEditorCloseReason::CloseAllEditorsForAsset);
			OpenedAssets.RemoveAt(I, 1, false);
		}
	}
}

#pragma endregion UEngine Interface

// UCsEdEngine Interface
#pragma region

	// Managers
#pragma region

void UCEdEngine::ConstructManagerSingleton()
{
	Manager_Singleton = NewObject<UCManager_Singleton_EdEngine>(this, UCManager_Singleton_EdEngine::StaticClass());
}

#pragma endregion Managers

	// PIE
#pragma region

void UCEdEngine::OnEndPIE(bool IsSimulating)
{
	Super::OnEndPIE(IsSimulating);

	// Scripts
	{
		UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::Get(this);

		// Entry Point
		{
			const FCsScriptEntryPointInfo& Info = Manager_Javascript->GetEntryPointInfo();

			if (Info.bEnable)
			{
				Manager_Javascript->AdditionalSetupEntryPoint_Impl.Unbind();
				Manager_Javascript->IsAdditionalSetupEntryPointComplete_Impl.Unbind();

				if (Info.bRecompileAllOnPIEExit)
				{
					Manager_Javascript->ShutdownEntryPoint();
				}
			}
		}
		// Scripts
		{
			const FCsScriptInfo& Info = Manager_Javascript->GetScriptInfo();

			if (Info.bRecompileAllOnPIEExit)
			{
				Manager_Javascript->AdditionalSetupScriptObjects_Impl.Unbind();
				Manager_Javascript->IsAdditionalSetupScriptObjectsComplete_Impl.Unbind();

				Manager_Javascript->ShutdownScripts();
			}
		}
	}
}

void UCEdEngine::OnEndPlayMapPIE(bool IsSimulating)
{
	Super::OnEndPlayMapPIE(IsSimulating);

	// Script EntryPoint
	{
		UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::Get(this);

		// Entry Point
		{
			const FCsScriptEntryPointInfo& Info = Manager_Javascript->GetEntryPointInfo();

			if (Info.bEnable)
			{
				if (Info.bRecompileAllOnPIEExit)
				{
					Manager_Javascript->CreateEntryPoint();
				}
			}
		}
		// Scripts
		{
			const FCsScriptInfo& Info = Manager_Javascript->GetScriptInfo();

			bool AnyEnabled = false;

			for (const FCsScript_FileInfo& FileInfo : Info.FileInfos)
			{
				AnyEnabled |= FileInfo.bEnable;
			}

			if (AnyEnabled &&
				Info.bRecompileAllOnPIEExit)
			{
				Manager_Javascript->CreateScriptObjects();
			}
		}
	}
}

#pragma endregion PIE

#pragma endregion UCsEdEngine Interface

// FExec Interface
#pragma region

bool UCEdEngine::Exec(UWorld* InWorld, const TCHAR* Stream, FOutputDevice& Ar)
{
	if (Super::Exec(InWorld, Stream, Ar))
		return true;
	return true;
}

#pragma endregion FExec Interface

// ICsBindToPrePIEEnded
#pragma region

void UCEdEngine::BindToPrePIEEnded(UObject* Object)
{
	//if (ACGameState* GameState = Cast<ACGameState>(Object))
	//{
	//	FEditorDelegates::PrePIEEnded.AddUObject(GameState, &ACGameState::OnPrePIEEnded);
	//}
}

#pragma endregion ICsBindToPrePIEEnded

void UCEdEngine::OnAssetOpenedInEditor(UObject* Asset, IAssetEditorInstance* EditorInstance)
{
	bool AddAsset = true;

	for (UObject* O : OpenedAssets)
	{
		if (O == Asset)
			AddAsset = false;
	}

	if (AddAsset)
		OpenedAssets.Add(Asset);
}

void UCEdEngine::OnAssetEditorRequestClose(UObject* Asset, EAssetEditorCloseReason Reason)
{
	typedef NCsAsset::NEditor::NClose::EReason ReasonType;

	AssetEditor_OnRequest_Close_Event.Broadcast(Asset, (ReasonType)Reason);
	AssetEditor_OnRequest_Close_ScriptEvent.Broadcast(Asset, (ECsAssetEditorCloseReason)Reason);
}