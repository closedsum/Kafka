// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Managers/Singleton/CsManager_Singleton.h"
// Get Singleton
#include "Managers/FX/Actor/CsGetManagerFX.h"
#include "Managers/Sound/CsGetManagerSound.h"

#include "CManager_Singleton_AnimInstance.generated.h"

class UCsManager_FX;
class UCsManager_Sound;

UCLASS()
class CIMPL_API UCManager_Singleton_AnimInstance : public UCsManager_Singleton,
												   public ICsGetManagerFX,
												   public ICsGetManagerSound

{
	GENERATED_UCLASS_BODY()

// ICsGetManagerFX
#pragma region
protected:

	UPROPERTY()
	UCsManager_FX* Manager_FX;

public:

	FORCEINLINE UCsManager_FX* GetManager_FX() const { return Manager_FX; }
	FORCEINLINE void SetManager_FX(UCsManager_FX* InManager) { Manager_FX = InManager; }

#pragma endregion ICsGetManagerFX

// ICsGetManagerSound
#pragma region
protected:

	UPROPERTY()
	UCsManager_Sound* Manager_Sound;

public:

	FORCEINLINE UCsManager_Sound* GetManager_Sound() const { return Manager_Sound; }
	FORCEINLINE void SetManager_Sound(UCsManager_Sound* InManager) { Manager_Sound = InManager; }

#pragma endregion ICsGetManagerSound
};