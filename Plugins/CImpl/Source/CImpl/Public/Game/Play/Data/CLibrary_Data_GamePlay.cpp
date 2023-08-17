// Copyright Studio Sai. All Rights Reserved.
#include "Game/Play/Data/CLibrary_Data_GamePlay.h"

// Types
#include "Game/Play/Types/CTypes_GamePlay.h"
// Library
#include "Data/CLibrary_DataRootSet.h"
#include "Game/CsLibrary_GameState.h"
//#include "Game/CLibrary_GameState.h"
#include "Library/CsLibrary_Valid.h"
// Game
#include "Game/Play/CGetGamePlay.h"
#include "Game/Play/CGamePlay.h"
//#include "Game/Play/Handler/CGamePlay_DataHandler.h"

#if WITH_EDITOR
// Library
#include "Game/CsLibrary_GameInstance.h"
#include "Level/CsLibrary_Level.h"
// Game
#include "Game/Play/Data/CGetData_GamePlay_Override.h"
// Level
#include "Engine/LevelScriptActor.h"
#endif // #if WITH_EDITOR

namespace NCGame
{
	namespace NPlay
	{
		namespace NData
		{
			#define DataType NCGame::NPlay::NData::IData

			FString FLibrary::PrintObjectAndClass(const DataType* Data)
			{
				if (UObject* O = Data->_getUObject())
					return FString::Printf(TEXT("Object: %s with Class: %s"), *(O->GetName()), *(O->GetClass()->GetName()));
				return FString::Printf(TEXT("%s (Non-UObject)"), *(Data->GetInterfaceMap()->GetRootName().ToString()));
			}

			FString FLibrary::PrintDataAndClass(const DataType* Data)
			{
				if (UObject* O = Data->_getUObject())
					return FString::Printf(TEXT("Data: %s with Class: %s"), *(O->GetName()), *(O->GetClass()->GetName()));
				return FString::Printf(TEXT("%s (Non-UObject)"), *(Data->GetInterfaceMap()->GetRootName().ToString()));
			}

			bool FLibrary::IsValidChecked(const FString& Context, const DataType* Data)
			{
				CS_IS_PTR_NULL_CHECKED(Data)
				return true;
			}

			bool FLibrary::IsValid(const FString& Context, const DataType* Data, void(*Log)(const FString&) /*=&FCLog::Warning*/)
			{
				CS_IS_PTR_NULL(Data)
				return true;
			}

			DataType* FLibrary::GetChecked(const FString& Context, const UObject* WorldContext, const FName& DataName)
			{
				/*#define DataHandlerType NCsData::NManager::NHandler::TData
				typedef NCGameState::FLibrary GameStateLibrary;
				typedef NCGame::NPlay::NData::FInterfaceMap DataInterfaceMapType;

				DataHandlerType<DataType, FCData_GamePlayPtr, DataInterfaceMapType>* DataHandler = GameStateLibrary::GetGamePlayDataHandlerChecked(Context, WorldContext);

				#undef DataHandlerType

				DataType* Data = DataHandler->GetDataChecked(Context, DataName);

				check(IsValidChecked(Context, Data));

				return Data;*/
				return nullptr;
			}

			DataType* FLibrary::GetSafe(const FString& Context, const UObject* WorldContext, const FName& DataName, void(*Log)(const FString&) /*=&FCLog::Warning*/)
			{
				/*#define DataHandlerType NCsData::NManager::NHandler::TData
				typedef NCGameState::FLibrary GameStateLibrary;
				typedef NCGame::NPlay::NData::FInterfaceMap DataInterfaceMapType;

				DataHandlerType<DataType, FCData_GamePlayPtr, DataInterfaceMapType>* DataHandler = GameStateLibrary::GetSafeGamePlayDataHandler(Context, WorldContext, Log);

				#undef DataHandlerType

				if (DataHandler)
				{
					DataType* Data = DataHandler->GetSafeData(Context, DataName, Log);

					if (!IsValid(Context, Data, Log))
						return nullptr;

					return Data;
				}*/
				return nullptr;
			}

			DataType* FLibrary::GetSafe(const FString& Context, const UObject* WorldContext, const FECGamePlay& Type, void(*Log)(const FString&) /*=&FCLog::Warning*/)
			{
				CS_IS_ENUM_STRUCT_VALID_RET_NULL(EMCGamePlay, FECGamePlay, Type)
			
				return GetSafe(Context, WorldContext, Type.GetFName(), Log);
			}

			UObject* FLibrary::GetSafeDataAsUObject(const FString& Context, const UObject* WorldContext, const FECGamePlay& Type, void(*Log)(const FString&) /*=&FCLog::Warning*/)
			{
				if (DataType* Data = GetSafe(Context, WorldContext, Type, Log))
				{
					UObject* O = Data->_getUObject();

					if (!O)
					{
						CS_CONDITIONAL_LOG(FString::Printf(TEXT("%s: %s is rooted in a UObject."), *Context, *PrintDataAndClass(Data)));
					}
					return O;
				}
				return nullptr;
			}

			#undef DataType
		}
	}
}