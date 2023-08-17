// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Containers
#include "Containers/CsLibrary_InterfaceMap.h"
// Data
#include "Game/Play/Data/CData_GamePlay.h"
// Types
#include "Game/Play/Types/CTypes_GamePlay.h"
// Log
#include "Utility/CLog.h"

namespace NCGame
{
	namespace NPlay
	{
		namespace NData
		{
		#define DataType NCGame::NPlay::NData::IData

			/**
			*/
			struct CIMPL_API FLibrary : public NCsInterfaceMap::TLibrary<DataType>
			{
				/**
				* 
				* 
				* @param Data	Object that implements the interface: DataType (NCGame::NPlay::NData::IData).
				* return
				*/
				static FString PrintObjectAndClass(const DataType* Data);

				/**
				*
				*
				* @param Data	Object that implements the interface: DataType (NCGame::NPlay::NData::IData).
				* return
				*/
				static FString PrintDataAndClass(const DataType* Data);

				/**
				* 
				* 
				* @param Context	The calling context.
				* @param Data		Object that implements the interface: DataType (NCGame::NPlay::NData::IData).
				* return
				*/
				static bool IsValidChecked(const FString& Context, const DataType* Data);

				/**
				*
				*
				* @param Context	The calling context.
				* @param Data		Object that implements the interface: DataType (NCGame::NPlay::NData::IData).
				* @param Log		(optional)
				* return
				*/
				static bool IsValid(const FString& Context, const DataType* Data, void(*Log)(const FString&) = &FCLog::Warning);

				/**
				* Get Data that implements interface: DataType (NCGame::NPlay::NData::IData) from the
				* Manager_Data via WorldContext.
				*
				* @param Context		The calling context.
				* @param WorldContext	Object that contains a reference to a World (GetWorld() is Valid).
				* @param DataName		Name of the Data.
				* return				Data that implements the interface: DataType (NCGame::NPlay::NData::IData).
				*/
				static DataType* GetChecked(const FString& Context, const UObject* WorldContext, const FName& DataName);

				/**
				* Get Data that implements interface: DataType (NCGame::NPlay::NData::IDatas) from the
				* Manager_Data via WorldContext.
				*
				* @param Context		The calling context.
				* @param WorldContext	Object that contains a reference to a World (GetWorld() is Valid).
				* @param DataName		Name of the Data.
				* @param Log			(optional)
				* return				Data that implements the interface: DataType (NCGame::NPlay::NData::IData).
				*/
				static DataType* GetSafe(const FString& Context, const UObject* WorldContext, const FName& DataName, void(*Log)(const FString&) = &FCLog::Warning);

				/**
				* Get Data that implements interface: DataType (NCGame::NPlay::NData::IDatas) from the
				* Manager_Data via WorldContext.
				*
				* @param Context		The calling context.
				* @param WorldContext	Object that contains a reference to a World (GetWorld() is Valid).
				* @param Type			Game Play type.
				* @param Log			(optional)
				* return				Data that implements the interface: DataType (NCGame::NPlay::NData::IData).
				*/
				static DataType* GetSafe(const FString& Context, const UObject* WorldContext, const FECGamePlay& Type, void(*Log)(const FString&) = &FCLog::Warning);

				/**
				* Safely Get the Data as UObject (implements interface: DataType (NCGame::NPlay::NData::IData)) associated with Type.
				*
				* @param Context		The calling context.
				* @param WorldContext	Object that contains a reference to a World (GetWorld() is Valid).
				* @param Type			Game Play type.
				* @param Log			(optional)
				* return				Data that implements the interface: DataType (NCGame::NPlay::NData::IData).
				*/
				static UObject* GetSafeDataAsUObject(const FString& Context, const UObject* WorldContext, const FECGamePlay& Type, void(*Log)(const FString&) = &FCLog::Warning);
			};

		#undef DataType
		}
	}
}