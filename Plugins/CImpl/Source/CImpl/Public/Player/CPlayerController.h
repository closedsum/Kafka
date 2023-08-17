// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "GameFramework/PlayerController.h"
// Interfaces
#include "Managers/Input/CsGetManagerInput.h"
// Types
#include "Managers/Input/CsTypes_Input.h"

#include "CPlayerController.generated.h"

class UCsManager_Input;

UCLASS()
class CIMPL_API ACPlayerController : public APlayerController,
									 public ICsGetManagerInput
{
	GENERATED_UCLASS_BODY()

// AActor Interface
#pragma region
public:

	virtual void Destroyed() override;

#pragma endregion AActor Interface

// ICsGetManagerInput
#pragma region
public:

	UFUNCTION(BlueprintPure, Category = "CPlayerController|Input")
	FORCEINLINE UCsManager_Input* GetManager_Input() const
	{
		return Manager_Input;
	}

	FORCEINLINE void SetManager_Input(UCsManager_Input* InManager)
	{
		Manager_Input = InManager;
	}

#pragma endregion ICsGetManagerInput

// Input
#pragma region
public:

	UPROPERTY()
	UCsManager_Input* Manager_Input;

	virtual void PreProcessInput(const float DeltaTime, const bool bGamePaused);

	virtual void PostProcessInput(const float DeltaTime, const bool bGamePaused);

	virtual void InitInputSystem() override;

	// Mouse
#pragma region
public:

	void ShowMouseCursor();

#pragma endregion Mouse

#pragma endregion Input
};