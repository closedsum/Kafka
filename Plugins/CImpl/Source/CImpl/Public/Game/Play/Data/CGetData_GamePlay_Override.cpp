// Copyright Studio Sai. All Rights Reserved.
#include "Game/Play/Data/CGetData_GamePlay_Override.h"

// Library
#include "Library/CsLibrary_Valid.h"

// FCData_GamePlay_Override
#pragma region

bool FCData_GamePlay_Override::IsValidChecked(const FString& Context) const
{
	if (!bOverride)
		return true;
	return true;
}

bool FCData_GamePlay_Override::IsValid(const FString& Context, void(*Log)(const FString&) /*= nullptr*/) const
{
	if (!bOverride)
		return true;
	return true;
}

#pragma endregion FCData_GamePlay_Override

UCGetData_GamePlay_Override::UCGetData_GamePlay_Override(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer)
{
}