// Copyright Studio Sai. All rights reserved.
#pragma once
// Log
#include "Utility/CLog.h"

class UObject;
class UCManager_Level;

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
					extern CIMPL_API const FString GetSafe;
				}
			}
		}

		struct CIMPL_API FLibrary final
		{
		// Get
		#pragma region
		public:

			/**
			* Get the reference to UCManager_Level from a ContextObject.
			*
			* @param Context		The calling context.
			* @param ContextObject	Object that contains a reference to a World (GetWorld() is Valid).
			*						or
			*						A reference to the GameInstance.
			* return				UCManager_Level.
			*/
			static UCManager_Level* GetChecked(const FString& Context, const UObject* ContextObject);

			/**
			* Safely get the reference to UCManager_Level from a ContextObject.
			*
			* @param Context		The calling context.
			* @param ContextObject	Object that contains a reference to a World (GetWorld() is Valid).
			*						or
			*						A reference to the GameInstance.
			* @param Log
			* return				UCManager_Level.
			*/
			static UCManager_Level* GetSafe(const FString& Context, const UObject* ContextObject, void(*Log)(const FString&) = &FCLog::Warning);

			/**
			* Safely get the reference to UCManager_Level from a ContextObject.
			*
			* @param ContextObject	Object that contains a reference to a World (GetWorld() is Valid).
			*						or
			*						A reference to the GameInstance.
			* return				UCManager_Level.
			*/
			static UCManager_Level* GetSafe(const UObject* ContextObject);

		#pragma endregion Get
		};
	}
}