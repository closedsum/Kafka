// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "Managers/Level/CsManager_Level.h"
// Types
#include "Managers/Time/CsTypes_Time.h"

#include "CManager_Level.generated.h"

UCLASS(transient)
class CIMPL_API UCManager_Level : public UCsManager_Level
{
	GENERATED_UCLASS_BODY()

// UCManager_Level Interface
#pragma region

	// Singleton
#pragma region
protected:

	virtual void CleanUp() override;

#pragma endregion Singleton

#pragma endregion UCManager_Level Interface

public:

	void GameState_Initialize();

// Update
#pragma region
public:

	void Update(const FCsDeltaTime& DeltaTime);

	void RenderUpdate(const FCsDeltaTime& DeltaTime);

#pragma endregion Update
};