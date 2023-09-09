// Copyright Studio Sai. All Rights Reserved.
#include "Game/Play/Types/CTypes_GamePlay.h"
#include "CImpl.h"

// Library
#include "Data/CsLibrary_Data.h"
// Utility
#include "Utility/CLog.h"
#include "Utility/CPopulateEnumMapFromSettings.h"
// Data
#include "Game/Play/Data/CData_GamePlay.h"

// GamePlay
#pragma region

namespace NCGamePlay
{
	namespace NCached
	{
		namespace Str
		{
			const FString GamePlay = TEXT("GamePlay");
		}

		namespace Name
		{
			const FName GamePlays = FName("GamePlays");
		}
	}

	void FromDataTable(const FString& Context, UObject* ContextRoot)
	{
		using namespace NCGamePlay::NCached;

		typedef FCPopulateEnumMapFromSettings::FFromDataTable::FPayload PayloadType;

		PayloadType Payload;
		Payload.ContextRoot				 = ContextRoot;
		Payload.DataTableName			 = Name::GamePlays;
		Payload.EnumName				 = Str::GamePlay;
		Payload.Create					 = &Create;
		Payload.CreateCustom			 = &CreateCustom;
		Payload.IsValidEnum				 = &IsValidEnum;
		Payload.IsValidEnumByDisplayName = &IsValidEnumByDisplayName;
		Payload.Log						 = &FCLog::Warning;
	}

	void PopulateEnumMapFromSettings(const FString& Context, UObject* ContextRoot)
	{
		EMCGamePlay::Get().ClearUserDefinedEnums();

		FromDataTable(Context, ContextRoot);
	}
}

#pragma endregion GamePlay

// FCData_GamePlayPtr
#pragma region

#define DataType NCGame::NPlay::NData::IData

DataType* FCData_GamePlayPtr::GetChecked(const FString& Context) const
{
	const FSoftObjectPath& Path = Data.ToSoftObjectPath();

	checkf(Path.IsValid(), TEXT("%s: Data is NULL. No Path set."), *Context);

	checkf(Data_Internal, TEXT("%s: Data has NOT been loaded @ %s."), *Context, *(Path.ToString()));

	typedef NCsData::FLibrary DataLibrary;

	return DataLibrary::GetChecked<DataType>(Context, Data_Internal);
}

DataType* FCData_GamePlayPtr::GetSafe(const FString& Context) const
{
	const FSoftObjectPath& Path = Data.ToSoftObjectPath();

	if (!Path.IsValid())
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Data is NULL. No Path set."), *Context);
		return nullptr;
	}

	if (!Data_Internal)
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Data has NOT been loaded @ %s."), *Context, *(Path.ToString()));
		return nullptr;
	}

	typedef NCsData::FLibrary DataLibrary;

	return DataLibrary::GetSafe<DataType>(Context, Data_Internal);
}

DataType* FCData_GamePlayPtr::SafeLoad(const FString& Context)
{
	const FSoftObjectPath& Path = Data.ToSoftObjectPath();

	if (!Path.IsValid())
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Data is NULL. No Path set."), *Context);
		return nullptr;
	}

	if (!Data_Internal)
	{
		Data_Class = Data.LoadSynchronous();

		if (Data_Class)
		{
			Data_Internal = Data_Class->GetDefaultObject();

			if (!Data_Internal)
			{
				UE_LOG(LogCImpl, Warning, TEXT("%s: Failed to get DefaultObject for Data @ Path: %s with Class: %s."), *Context, *(Path.ToString()), *(Data_Class->GetName()));
				return nullptr;
			}
		}
		else
		{
			UE_LOG(LogCImpl, Warning, TEXT("%s: Failed to load Data @ Path: %s."), *Context, *(Path.ToString()));
			return nullptr;
		}
	}

	typedef NCsData::FLibrary DataLibrary;

	return DataLibrary::SafeLoad<DataType>(Context, Data_Internal);
}

#undef DataType

#pragma endregion FCData_GamePlayPtr