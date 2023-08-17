// Copyright Studio Sai. All rights reserved.
#include "Managers/Level/CLibrary_Manager_Level.h"
#include "CImpl.h"

// Types
#include "Types/CsTypes_Macro.h"
// Library
#include "Managers/Level/CsLibrary_Manager_Level.h"
// Managers
#include "Managers/Level/CManager_Level.h"

namespace NCLevel
{
	namespace NManager
	{
		namespace NLibrary
		{
			namespace NCached
			{
				namespace Str
				{
					CIMPL_API CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(NCLevel::NManager::FLibrary, GetSafe);
				}
			}
		}

		// Get
		#pragma region

		UCManager_Level* FLibrary::GetChecked(const FString& Context, const UObject* ContextObject)
		{
			typedef NCsLevel::NManager::FLibrary LevelManagerLibrary;

			return LevelManagerLibrary::GetChecked<UCManager_Level>(Context, ContextObject);
		}

		UCManager_Level* FLibrary::GetSafe(const FString& Context, const UObject* ContextObject, void(*Log)(const FString&) /*= &FCLog::Warning*/)
		{
			typedef NCsLevel::NManager::FLibrary LevelManagerLibrary;

			return LevelManagerLibrary::GetSafe<UCManager_Level>(Context, ContextObject, Log);
		}

		UCManager_Level* FLibrary::GetSafe(const UObject* ContextObject)
		{
			using namespace NCLevel::NManager::NLibrary::NCached;

			const FString& Context = Str::GetSafe;

			return GetSafe(Context, ContextObject, nullptr);
		}

		#pragma endregion Get
	}
}