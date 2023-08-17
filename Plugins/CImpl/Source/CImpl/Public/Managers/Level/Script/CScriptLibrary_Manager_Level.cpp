// Copyright Studio Sai. All Rights Reserved.

#include "Managers/Level/Script/CScriptLibrary_Manager_Level.h"
#include "CImpl.h"

// Types
#include "Types/CsTypes_Macro.h"
// Library
#include "Managers/Level/CLibrary_Manager_Level.h"

// Cached
#pragma region

namespace NCScriptLibraryManagerLevel
{
	namespace NCached
	{
		namespace Str
		{
			// Get
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCScriptLibrary_Manager_Level, Get);
		}
	}
}

#pragma endregion Cached

UCScriptLibrary_Manager_Level::UCScriptLibrary_Manager_Level(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
}

// Get
#pragma region

UCManager_Level* UCScriptLibrary_Manager_Level::Get(const FString& Context, const UObject* WorldContextObject)
{
	using namespace NCScriptLibraryManagerLevel::NCached;

	const FString& Ctxt = Context.IsEmpty() ? Str::Get : Context;

	typedef NCLevel::NManager::FLibrary LevelManagerLibrary;

	return LevelManagerLibrary::GetSafe(Ctxt, WorldContextObject);
}

#pragma endregion Get