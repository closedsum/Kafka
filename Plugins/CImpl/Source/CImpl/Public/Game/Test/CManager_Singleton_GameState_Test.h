// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Managers/Singleton/CsManager_Singleton.h"
// Get Singleton
#include "Managers/Sound/CsGetManagerSound.h"
#include "Managers/FX/Actor/CsGetManagerFX.h"
#include "Managers/Trace/CsGetManagerTrace.h"
//#include "Managers/UserWidget/CsGetManagerUserWidget.h"
#include "Managers/StaticMesh/CsGetManagerStaticMeshActor.h"
#include "Managers/SkeletalMesh/CsGetManagerSkeletalMeshActor.h"
#include "Managers/Damage/CsGetManagerDamage.h"

#include "CManager_Singleton_GameState_Test.generated.h"

class UCsManager_Sound;
class UCsManager_FX;
class UCsManager_Trace;
//class UCsManager_UserWidget;
class UCsManager_StaticMeshActor;
class UCsManager_SkeletalMeshActor;
class UCsManager_Damage;

UCLASS()
class CIMPL_API UCManager_Singleton_GameState_Test : public UCsManager_Singleton,
													 public ICsGetManagerSound,
													 public ICsGetManagerFX,
													 public ICsGetManagerTrace,
													 //public ICsGetManagerUserWidget,
													 public ICsGetManagerStaticMeshActor,
													 public ICsGetManagerSkeletalMeshActor,
													 public ICsGetManagerDamage
{
	GENERATED_UCLASS_BODY()

// ICsGetManagerSound
#pragma region
protected:

	UPROPERTY()
	UCsManager_Sound* Manager_Sound;

public:

	FORCEINLINE UCsManager_Sound* GetManager_Sound() const { return Manager_Sound; }
	FORCEINLINE void SetManager_Sound(UCsManager_Sound* InManager) { Manager_Sound = InManager; }

#pragma endregion ICsGetManagerSound

// ICsGetManagerFX
#pragma region
protected:

	UPROPERTY()
	UCsManager_FX* Manager_FX;

public:

	FORCEINLINE UCsManager_FX* GetManager_FX() const { return Manager_FX; }
	FORCEINLINE void SetManager_FX(UCsManager_FX* InManager) { Manager_FX = InManager; }

#pragma endregion ICsGetManagerFX

// ICsGetManagerTrace
#pragma region
protected:

	UPROPERTY()
	UCsManager_Trace* Manager_Trace;

public:

	FORCEINLINE UCsManager_Trace* GetManager_Trace() const { return Manager_Trace; }
	FORCEINLINE void SetManager_Trace(UCsManager_Trace* InManager) { Manager_Trace = InManager; }

#pragma endregion ICsGetManagerTrace

// ICsGetManagerUserWidget
#pragma region
//protected:
//
//	UPROPERTY()
//	UCsManager_UserWidget* Manager_UserWidget;
//
//public:
//
//	FORCEINLINE UCsManager_UserWidget* GetManager_UserWidget() const { return Manager_UserWidget; }
//	FORCEINLINE void SetManager_UserWidget(UCsManager_UserWidget* InManager) { Manager_UserWidget = InManager; }

#pragma endregion ICsGetManagerUserWidget


// ICsGetManagerStaticMeshActor
#pragma region
protected:

	UPROPERTY()
	UCsManager_StaticMeshActor* Manager_StaticMeshActor;

public:

	FORCEINLINE UCsManager_StaticMeshActor* GetManager_StaticMeshActor() const { return Manager_StaticMeshActor; }
	FORCEINLINE void SetManager_StaticMeshActor(UCsManager_StaticMeshActor* InManager) { Manager_StaticMeshActor = InManager; }

#pragma endregion ICsGetManagerStaticMeshActor

// ICsGetManagerSkeletalMeshActor
#pragma region
protected:

	UPROPERTY()
	UCsManager_SkeletalMeshActor* Manager_SkeletalMeshActor;

public:

	FORCEINLINE UCsManager_SkeletalMeshActor* GetManager_SkeletalMeshActor() const { return Manager_SkeletalMeshActor; }
	FORCEINLINE void SetManager_SkeletalMeshActor(UCsManager_SkeletalMeshActor* InManager) { Manager_SkeletalMeshActor = InManager; }

#pragma endregion ICsGetManagerSkeletalMeshActor

// ICsGetManagerDamage
#pragma region
protected:

	UPROPERTY()
	UCsManager_Damage* Manager_Damage;

public:

	FORCEINLINE UCsManager_Damage* GetManager_Damage() const { return Manager_Damage; }
	FORCEINLINE void SetManager_Damage(UCsManager_Damage* InManager) { Manager_Damage = InManager; }

#pragma endregion ICsGetManagerDamage
};