// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Engine/LevelScriptActor.h"
// Interfaces
#include "Start/CsStartPlay.h"
#include "Managers/Time/CsUpdate.h"
#include "Level/Data/Setup/CsGetLevelSetupData.h"
// Data
#include "Level/Data/Setup/CData_Level_SetupImpl.h" 

#include "CLevelScriptActor.generated.h"

UCLASS()
class CIMPL_API ACLevelScriptActor : public ALevelScriptActor,
									 public ICsStartPlay,
									 public ICsUpdate,
									 public ICsGetLevelSetupData
{
	GENERATED_UCLASS_BODY()

// ICsStartPlay
#pragma region
public:

	void StartPlay();

protected:

	bool bHasStartedPlay;

public:

	FORCEINLINE bool HasStartedPlay() const { return bHasStartedPlay; }

#pragma endregion ICsStartPlay

// StartPlay
#pragma region
public:

	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "StartPlay"))
	void ReceiveStartPlay();

#pragma endregion StartPlay

// ICsUpdate
#pragma region
public:

	void Update(const FCsDeltaTime& DeltaTime);

#pragma endregion ICsUpdate

// Update
#pragma region
public:

	UFUNCTION(BlueprintImplementableEvent)
	void ReceiveUpdate(const FCsDeltaTime& DeltaTime);

#pragma endregion Update

public:
	
	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	TSubclassOf<UCData_Level_SetupImpl> LevelSetupData;

// ICsGetLevelSetupData
#pragma region
public:

	FORCEINLINE ICsData_Level_Setup* GetLevelSetupData() const { return Cast<ICsData_Level_Setup>(LevelSetupData.GetDefaultObject()); }

#pragma endregion ICsGetLevelSetupData
};