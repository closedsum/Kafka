// Copyright Studio Sai. All Rights Reserved.
#include "Managers/Level/CManager_Level.h"
#include "CImpl.h"

// Types
#include "Types/CsTypes_Macro.h"

// Cached
#pragma region

namespace NCManagerLevel
{
	namespace NCached
	{
		namespace Str
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCManager_Level, GameState_Initialize);
		}

		namespace Name
		{

		}
	}
}

#pragma endregion Cached

UCManager_Level::UCManager_Level(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
}

// UCManager_Level Interface
#pragma region

	// Singleton
#pragma region

void UCManager_Level::CleanUp()
{
	Super::CleanUp();
}

#pragma endregion Singleton

#pragma endregion UCManager_Level Interface

void UCManager_Level::GameState_Initialize()
{
	using namespace NCManagerLevel::NCached;

	const FString& Context = Str::GameState_Initialize;
}

// Update
#pragma region

void UCManager_Level::Update(const FCsDeltaTime& DeltaTime)
{

}

void UCManager_Level::RenderUpdate(const FCsDeltaTime& DeltaTime)
{
}

#pragma endregion Update