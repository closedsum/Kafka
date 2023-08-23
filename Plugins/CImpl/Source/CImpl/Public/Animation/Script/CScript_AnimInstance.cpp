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
		CS_IS_STRING_EMPTY(Path)
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
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, NativeInitializeAnimation);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScript_AnimInstance, NativeUpdateAnimation);
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
	SequenceByNameMap()
{
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

		UCsManager_Javascript* Manager_Javascript = JavascriptManagerLibrary::GetChecked(Context, GEngine);

		Manager_Javascript->EditorScriptImpl.Shutdown(this);

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
			Manager_Javascript->EditorScriptImpl.CreateAndRun(this, ScriptInfo.Path);
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

#pragma endregion Variables