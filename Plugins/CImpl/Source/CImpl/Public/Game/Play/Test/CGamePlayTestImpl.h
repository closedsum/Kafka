// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "Game/Play/CGamePlayImpl.h"
// Types
#include "Types/CsTypes_Macro.h"
#include "Coroutine/CsRoutineHandle.h"

#include "CGamePlayTestImpl.generated.h"

/**
* Gameplay implementation for testing
*/
UCLASS()
class CIMPL_API UCGamePlayTestImpl : public UCGamePlayImpl
{
	GENERATED_UCLASS_BODY()

// UCGamePlayImpl Interface
#pragma region
public:

	// ICGamePlay
#pragma region
public:

	virtual void Start() override;

	virtual void End() override;
	
#pragma endregion ICGamePlay

public:

	virtual void Init(const FName& TypeName) override;

	// Update
#pragma region
public:

	virtual void Update(const FCsDeltaTime& DeltaTime) override;

#pragma endregion Update

#pragma endregion UCGamePlayImpl Interface
};