// Copyright Studio Sai. All Rights Reserved.
#include "Game/CLibrary_GameInstance.h"
#include "CImpl.h"

// Library
#include "Game/CsLibrary_GameInstance.h"
#include "Library/CsLibrary_Valid.h"
// Game
#include "Game/CGameInstance.h"

namespace NCGameInstance
{
	// Get
	#pragma region

	UCGameInstance* FLibrary::GetChecked(const FString& Context, const UObject* ContextObject)
	{
		typedef NCsGameInstance::FLibrary GameInstanceLibrary;
		
		return GameInstanceLibrary::GetChecked<UCGameInstance>(Context, ContextObject);
	}

	UCGameInstance* FLibrary::GetSafe(const FString& Context, const UObject* ContextObject, void(*Log)(const FString&) /*=&FsLog::Warning*/)
	{
		typedef NCsGameInstance::FLibrary GameInstanceLibrary;

		return GameInstanceLibrary::GetSafe<UCGameInstance>(Context, ContextObject, Log);
	}

	UCGameInstance* FLibrary::GetSafe(const UObject* ContextObject)
	{
		typedef NCsGameInstance::FLibrary GameInstanceLibrary;

		return GameInstanceLibrary::GetSafe<UCGameInstance>(ContextObject);
	}

	#pragma endregion Get

	bool FLibrary::HasPerformedTransitionChecked(const FString& Context, const UObject* ContextObject)
	{
		return GetChecked(Context, ContextObject)->GetHasPerformedTransition();
	}
}