// Copyright Studio Sai. All Rights Reserved.
#include "Animation/Script/CScript_AnimInstance.h"
#include "CImpl.h"

// Library
	// Common
#include "Library/CsLibrary_Valid.h"
// Event
#include "Animation/Event/CsAnimation_Event.h"

#if WITH_EDITOR
// Library
#include "Managers/CsLibrary_Manager_Javascript.h"
	// Common
#include "Library/CsLibrary_World.h"
// Singleton
//#include "Animation/CManager_Singleton_AnimInstanceActor.h"
// Managers
#include "Managers/CsManager_Javascript.h"
#include "Managers/FX/Actor/CsManager_FX.h"
#include "Managers/Sound/CsManager_Sound.h"
// Interfaces
#include "Object/CsGetCreatedObjects.h"
// Engine
#include "Engine/Engine.h"
#endif // #if WITH_EDITOR

bool FCScriptAnimInstance_ScriptInfo::IsValid(const FString& Context, void(*Log)(const FString&)/*=&FCsLog::Warning*/) const
{
	if (bEnable)
	{
		CS_IS_STRING_EMPTY(EntryPath)
	}
	return true;
}

namespace NCScriptAnimInstance
{
	namespace NCached
	{
		namespace Str
		{
			// UObject Interface
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, BeginDestroy);
			// UAnimInstance Interface
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, NativeInitializeAnimation);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, NativeUpdateAnimation);
			// Script
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, EnableScript);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, DisableScript);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, ReloadScript);
		}
	}
}

UCScript_AnimInstance::UCScript_AnimInstance(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer),
	// Script
	ScriptInfo(),
	// Variables()
	BoolByNameMap(),
	IntByNameMap(),
	FloatByNameMap(),
	Vector3dByNameMap(),
	Rotator3dByNameMap(),
	SequenceByNameMap()
{
	ScriptInfo_bEnableHandle.Set(&ScriptInfo.bEnable);
	ScriptInfo_bReloadHandle.Set(&ScriptInfo.bReload);
}

// UObject Interface
#pragma region

void UCScript_AnimInstance::BeginDestroy()
{
	using namespace NCScriptAnimInstance::NCached;

	const FString& Context = Str::BeginDestroy;

	OnBeginDestroy_ScriptEvent.Broadcast(this);

	Super::BeginDestroy();

	ShutdownSingletons();

	// Destroy any Objects that were created only in Editor
#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorPreview(GetWorld()) ||
		WorldLibrary::IsPlayInEditor(GetWorld()))
	{
		typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

		if (UCsManager_Javascript* Manager_Javascript = JavascriptManagerLibrary::GetSafe(Context, GEngine, nullptr))
		{
			Manager_Javascript->EditorScriptImpl.Shutdown(this);
		}

		//ClearCreatedObjects();
	}
#endif // #if WITH_EDITOR
}

#pragma endregion UObject Interface

// UAnimInstance Interface
#pragma region

// Init
void UCScript_AnimInstance::NativeInitializeAnimation()
{
	using namespace NCScriptAnimInstance::NCached;

	const FString& Context = Str::NativeUpdateAnimation;

	Super::NativeInitializeAnimation();

#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorPreview(GetWorld()))
	{
		if (ICsAnimation_Event* Animation_Event = Cast<ICsAnimation_Event>(GEngine))
		{
			Animation_Event->GetOnInit_Event().Broadcast(this);
			Animation_Event->GetOnInit_ScriptEvent().Broadcast(this);
		}

		if (ScriptInfo.bEnable &&
			ScriptInfo.IsValid(Context))
		{
			typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

			UCsManager_Javascript* Manager_Javascript = JavascriptManagerLibrary::GetChecked(Context, GEngine);

			Manager_Javascript->EditorScriptImpl.Shutdown(this);
			ScriptId = Manager_Javascript->EditorScriptImpl.CreateAndRun(this, ScriptInfo.EntryPath);
		}
	}
#endif // #if WITH_EDITOR
}

// Tick
void UCScript_AnimInstance::NativeUpdateAnimation(float DeltaSeconds)
{
	using namespace NCScriptAnimInstance::NCached;

	const FString& Context = Str::NativeUpdateAnimation;

	Super::NativeUpdateAnimation(DeltaSeconds);
	
#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorPreview(GetWorld()))
	{
		OnTick_Handle_ScriptInfo_bEnable();
		OnTick_Handle_ScriptInfo_bReload();
	}
#endif // #if WITH_EDITOR

	OnNativeUpdate_ScriptEvent.Broadcast(this, DeltaSeconds);
}

#pragma endregion UAnimInstance Interface

// UCsAnimInstance Interface
#pragma region

	// Manager Singleton
#pragma region

void UCScript_AnimInstance::ConstructManagerSingletonActor()
{
#if WITH_EDITOR
	/*if (!Manager_Singleton_Actor)
	{
		ClearCreatedObjects();

		Manager_Singleton_Actor = GetWorld()->SpawnActor<ACManager_Singleton_AnimInstanceActor>(ACManager_Singleton_AnimInstanceActor::StaticClass());

		ICsGetCreatedObjects* GetCreatedObjects = Cast<ICsGetCreatedObjects>(GEngine);

		typedef NCsObject::NCreate::FCreated CreatedObjectsType;

		CreatedObjectsType* CreatedObjects = GetCreatedObjects->GetCreatedObjects();

		CreatedObjects->Add(Manager_Singleton_Actor, GetWorld());
	}*/
#endif // #if WITH_EDITOR
}

#pragma endregion Manager Singleton

	// Setup
#pragma region

void UCScript_AnimInstance::SetupInGameSimulation()
{
	Super::SetupInGameSimulation();

	SetupSingletons();
	//Load_Data();
}

#pragma endregion Setup

#pragma endregion UCsAnimInstance Interface

// Manager Singleton
#pragma region

void UCScript_AnimInstance::SetupSingletons()
{
	ConstructManagerSingletonActor();
}

void UCScript_AnimInstance::ShutdownSingletons()
{
#if WITH_EDITOR
	if (Manager_Singleton_Actor)
	{
		//Manager_Singleton_Actor->MarkAsGarbage();
		//Manager_Singleton_Actor = nullptr;
	}
#endif // #if WITH_EDITOR
}

#pragma endregion Manager Singleton

// Script
#pragma region

void UCScript_AnimInstance::OnTick_Handle_ScriptInfo_bEnable()
{
	ScriptInfo_bEnableHandle.UpdateIsDirty();

	if (ScriptInfo_bEnableHandle.HasChanged())
	{
		if (ScriptInfo.bEnable)
		{
			EnableScript();

			ScriptInfo_bEnableHandle = true;
		}
		else
		{
			DisableScript();

			ScriptInfo_bEnableHandle = false;
		}
		ScriptInfo_bEnableHandle.Clear();
	}
}

void UCScript_AnimInstance::EnableScript()
{
	using namespace NCScriptAnimInstance::NCached;

	const FString& Context = Str::EnableScript;

#if WITH_EDITOR
	if (ScriptInfo.bEnable &&
		ScriptInfo.IsValid(Context))
	{
		typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

		UCsManager_Javascript* Manager_Javascript = JavascriptManagerLibrary::GetChecked(Context, GEngine);

		Manager_Javascript->EditorScriptImpl.Shutdown(this);
		ScriptId = Manager_Javascript->EditorScriptImpl.CreateAndRun(this, ScriptInfo.EntryPath);
	}
#endif // #if WITH_EDITOR
}

void UCScript_AnimInstance::DisableScript()
{
	using namespace NCScriptAnimInstance::NCached;

	const FString& Context = Str::DisableScript;

#if WITH_EDITOR
	typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

	UCsManager_Javascript* Manager_Javascript = JavascriptManagerLibrary::GetChecked(Context, GEngine);

	Manager_Javascript->EditorScriptImpl.Shutdown(this);
#endif // #if WITH_EDITOR
}

void UCScript_AnimInstance::OnTick_Handle_ScriptInfo_bReload()
{
	ScriptInfo_bReloadHandle.UpdateIsDirty();

	if (ScriptInfo_bReloadHandle.HasChanged())
	{
		if (ScriptInfo.bReload)
		{
			ReloadScript();

			ScriptInfo_bReloadHandle = false;
			ScriptInfo_bReloadHandle.Clear();
		}
	}
}

void UCScript_AnimInstance::ReloadScript()
{
	using namespace NCScriptAnimInstance::NCached;

	const FString& Context = Str::ReloadScript;

#if WITH_EDITOR
	if (ScriptInfo.bEnable &&
		ScriptInfo.IsValid(Context))
	{
		typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

		UCsManager_Javascript* Manager_Javascript = JavascriptManagerLibrary::GetChecked(Context, GEngine);

		Manager_Javascript->EditorScriptImpl.Reload(ScriptId, ScriptInfo.Path);
	}
#endif // #if WITH_EDITOR
}

#pragma endregion Script

// Variables
#pragma region

void UCScript_AnimInstance::SetBoolByName(const FName& Name, const bool& Value)
{
	BoolByNameMap.FindOrAdd(Name) = Value;
}

bool UCScript_AnimInstance::GetBoolByName(const FName& Name)
{
#if WITH_EDITOR
	if (bool* ValuePtr = BoolByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::GetBoolByName: No Bool Value associated with Name: %s."), *(Name.ToString()));
	return false;
#endif // #if WITH_EDITOR
	return BoolByNameMap[Name];
}

void UCScript_AnimInstance::SetIntByName(const FName& Name, const int32& Value)
{
	IntByNameMap.FindOrAdd(Name) = Value;
}

int32 UCScript_AnimInstance::GetIntByName(const FName& Name)
{
#if WITH_EDITOR
	if (int32* ValuePtr = IntByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::GetIntByName: No Int Value associated with Name: %s."), *(Name.ToString()));
	return 0;
#endif // #if WITH_EDITOR
	return IntByNameMap[Name];
}

void UCScript_AnimInstance::SetFloatByName(const FName& Name, const float& Value)
{
	FloatByNameMap.FindOrAdd(Name) = Value;
}

float UCScript_AnimInstance::GetFloatByName(const FName& Name)
{
#if WITH_EDITOR
	if (float* ValuePtr = FloatByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::GetFloatByName: No Float Value associated with Name: %s."), *(Name.ToString()));
	return 0.0f;
#endif // #if WITH_EDITOR
	return FloatByNameMap[Name];
}

void UCScript_AnimInstance::SetVector3dByName(const FName& Name, const FVector& Value)
{
	Vector3dByNameMap.FindOrAdd(Name) = Value;
}

FVector UCScript_AnimInstance::GetVector3dByName(const FName& Name)
{
#if WITH_EDITOR
	if (FVector* ValuePtr = Vector3dByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::GetVector3dByName: No Vector3d Value associated with Name: %s."), *(Name.ToString()));
	return FVector::ZeroVector;
#endif // #if WITH_EDITOR
	return Vector3dByNameMap[Name];
}

void UCScript_AnimInstance::SetRotator3dByName(const FName& Name, const FRotator& Value)
{
	Rotator3dByNameMap.FindOrAdd(Name) = Value;
}

FRotator UCScript_AnimInstance::GetRotator3dByName(const FName& Name)
{
#if WITH_EDITOR
	if (FRotator* ValuePtr = Rotator3dByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::GetVector3dByName: No Rotator3d Value associated with Name: %s."), *(Name.ToString()));
	return FRotator::ZeroRotator;
#endif // #if WITH_EDITOR
	return Rotator3dByNameMap[Name];
}

void UCScript_AnimInstance::SetSequenceByName(const FName& Name, UAnimSequence* Seq)
{
	SequenceByNameMap.FindOrAdd(Name) = Seq;
}

UAnimSequence* UCScript_AnimInstance::GetSequenceByName(const FName& Name)
{
#if WITH_EDITOR
	if (UAnimSequence** ValuePtr = SequenceByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::SequenceByNameMap: No AnimSequence associated with Name: %s."), *(Name.ToString()));
	return nullptr;
#endif // #if WITH_EDITOR
	return SequenceByNameMap[Name];
}

void UCScript_AnimInstance::SetBlendSpace1DByName(const FName& Name, UBlendSpace1D* Blend)
{
	BlendSpace1DByNameMap.FindOrAdd(Name) = Blend;
}

UBlendSpace1D* UCScript_AnimInstance::GetBlendSpace1DByName(const FName& Name)
{
#if WITH_EDITOR
	if (UBlendSpace1D** ValuePtr = BlendSpace1DByNameMap.Find(Name))
		return *ValuePtr;
	UE_LOG(LogCImpl, Warning, TEXT("UCScript_AnimInstance::GetBlendSpace1DByName: No BlendSpace1D associated with Name: %s."), *(Name.ToString()));
	return nullptr;
#endif // #if WITH_EDITOR
	return BlendSpace1DByNameMap[Name];
}

#pragma endregion Variables