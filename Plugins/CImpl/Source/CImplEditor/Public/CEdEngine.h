#pragma once
#include "CsEdEngine.h"
// Interface
#include "Editor/Bind/CsBindToPrePIEEnded.h"
#include "Asset/Event/CsAsset_Event.h"
// Editor
#include "Subsystems/AssetEditorSubsystem.h"

#include "CEdEngine.generated.h"

class UWorld;

UCLASS()
class CIMPLEDITOR_API UCEdEngine : public UCsEdEngine,
								   public ICsBindToPrePIEEnded,
								   public ICsAsset_Event

{
public:
	GENERATED_BODY()

// UEngine Interface
#pragma region
public:

	virtual void Init(IEngineLoop* InEngineLoop) override;
	virtual void PreExit() override;
	virtual void Tick(float DeltaSeconds, bool bIdleMode) override;
	
#pragma endregion UEngine Interface

// UCsEdEngine Interface
#pragma region

	// Managers
#pragma region
protected:

	virtual void ConstructManagerSingleton() override;

#pragma endregion Managers

	// PIE
#pragma region
public:

	virtual void OnEndPIE(bool IsSimulating) override;

	virtual void OnEndPlayMapPIE(bool IsSimulating) override;

#pragma endregion PIE

#pragma endregion UCsEdEngine Interface

// FExec Interface
#pragma region
public:

	virtual bool Exec(UWorld* InWorld, const TCHAR* Cmd, FOutputDevice& Ar = *GLog) override;

#pragma endregion FExec Interface

// ICsBindToPreEndPIE
#pragma region
public:

	void BindToPrePIEEnded(UObject* Object);

#pragma endregion ICsBindToPreEndPIE

// ICsAsset_Event
#pragma region
public:

	FORCEINLINE ICsAsset_Event::FOnOpenedInEditor& GetAsset_OpenedInEditor_Event() { return Asset_OnOpenedInEditor_Event; }
	FORCEINLINE ICsAsset_Event::FOnRequest_Close& GetAssetEditor_OnRequest_Close_Event() { return AssetEditor_OnRequest_Close_Event; }
	FORCEINLINE FCsAssetEditor_OnRequest_Close& GetAssetEditor_OnRequest_Close_ScriptEvent() { return AssetEditor_OnRequest_Close_ScriptEvent; }

#pragma endregion ICsAsset_Event

public:

	ICsAsset_Event::FOnOpenedInEditor Asset_OnOpenedInEditor_Event;

	ICsAsset_Event::FOnRequest_Close AssetEditor_OnRequest_Close_Event;

	UPROPERTY(BlueprintAssignable)
	FCsAssetEditor_OnRequest_Close AssetEditor_OnRequest_Close_ScriptEvent;	

private:

	void OnAssetOpenedInEditor(UObject* Asset, IAssetEditorInstance* EditorInstance);
	void OnAssetEditorRequestClose(UObject* Asset, EAssetEditorCloseReason Reason);

	TArray<UObject*> OpenedAssets;
};