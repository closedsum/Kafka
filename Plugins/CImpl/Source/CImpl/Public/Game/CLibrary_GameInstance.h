// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Log
#include "Utility/CLog.h"

class UCGameInstance;
class UObject;

namespace NCGameInstance
{
	class CIMPL_API FLibrary final
	{
	// Get
	#pragma region
	public:

		/**
		* Get GameInstance from ContextObject.
		* 
		* @param Context		The calling context.
		* @param ContextObject	Object that contains a reference to a World (GetWorld() is Valid)
		*						of
		*						A reference to the GameInstance.
		* return				GameInstance
		*/
		static UCGameInstance* GetChecked(const FString& Context, const UObject* ContextObject);

		/**
		* Safely get GameInstance from WorldContext.
		* 
		* @param Context		The calling context.
		* @param WorldContext	Object that contains a reference to a World (GetWorld() is Valid)
		*						of
		*						A reference to the GameInstance.
		* @param Log
		* return				GameInstance
		*/
		static UCGameInstance* GetSafe(const FString& Context, const UObject* ContextObject, void(*Log)(const FString&) = &FCLog::Warning);

		/**
		* Safely get GameInstance from ContextObject.
		*
		* @param ContextObject	Object that contains a reference to a World (GetWorld() is Valid)
		*						of
		*						A reference to the GameInstance.
		* return				GameInstance
		*/
		static UCGameInstance* GetSafe(const UObject* ContextObject);

	#pragma endregion Get
	
	public:

		static bool HasPerformedTransitionChecked(const FString& Context, const UObject* ContextObject);
	};
}