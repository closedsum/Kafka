// Copyright Studio Sai. All Rights Reserved.
#include "Data/CLibrary_DataRootSet.h"

// Library
#include "Data/CsLibrary_DataRootSet.h"
// Data
#include "Data/CGetDataRootSet.h"
#include "Data/CDataRootSet.h"

namespace NCDataRootSet
{
	const FCDataRootSet* FLibrary::GetSafe(const FString& Context, const UObject* WorldContext)
	{
		return NCsDataRootSet::FLibrary::GetSafe<FCDataRootSet, ICGetDataRootSet, &ICGetDataRootSet::GetCDataRootSet>(Context, WorldContext, &FCLog::Warning);
	}

	const FCDataRootSet& FLibrary::GetChecked(const FString& Context, const UGameInstance* GameInstance)
	{
		return NCsDataRootSet::FLibrary::GetChecked<FCDataRootSet, ICGetDataRootSet, &ICGetDataRootSet::GetCDataRootSet>(Context, GameInstance);
	}

	const FCDataRootSet& FLibrary::GetChecked(const FString& Context, const UObject* WorldContext)
	{
		return NCsDataRootSet::FLibrary::GetChecked<FCDataRootSet, ICGetDataRootSet, &ICGetDataRootSet::GetCDataRootSet>(Context, WorldContext);
	}

	#define MemberType FCDataRootSet::EMember

	UDataTable* FLibrary::GetSafeDataTable(const FString& Context, const UObject* WorldContext, const MemberType& Member)
	{
		if (const FCDataRootSet* DataRootSet = GetSafe(Context, WorldContext))
			return DataRootSet->GetSafeDataTable(Context, WorldContext, Member);
		return nullptr;
	}

	UDataTable* FLibrary::GetDataTableChecked(const FString& Context, const UObject* WorldContext, const MemberType& Member)
	{
		const FCDataRootSet& DataRootSet = GetChecked(Context, WorldContext);

		return DataRootSet.GetDataTableChecked(Context, WorldContext, Member);
	}

	const TSoftObjectPtr<UDataTable>& FLibrary::GetDataTableSoftObjectChecked(const FString& Context, const UObject* WorldContext, const MemberType& Member)
	{
		const FCDataRootSet& DataRootSet = GetChecked(Context, WorldContext);

		return DataRootSet.GetDataTableSoftObjectChecked(Context, Member);
	}

	uint8* FLibrary::GetDataTableRowChecked(const FString& Context, const UObject* WorldContext, const MemberType& Member, const FName& RowName)
	{
		const FCDataRootSet& DataRootSet = GetChecked(Context, WorldContext);

		return DataRootSet.GetDataTableRowChecked(Context, WorldContext, Member, RowName);
	}

	uint8* FLibrary::GetDataTableRowChecked(const FString& Context, const UObject* WorldContext, const MemberType& Member, const UScriptStruct* RowStruct, const FName& RowName)
	{
		const FCDataRootSet& DataRootSet = GetChecked(Context, WorldContext);

		return DataRootSet.GetDataTableRowChecked(Context, WorldContext, Member, RowStruct, RowName);
	}

	bool FLibrary::GetSafeDataTablePath(const FString& Context, const UObject* WorldContext, const MemberType& Member, FString& OutPath, void(*Log)(const FString&) /*=&FCLog::Warning*/)
	{
		if (const FCDataRootSet* DataRootSet = GetSafe(Context, WorldContext))
		{
			TSoftObjectPtr<UDataTable> SoftObject;
			if (DataRootSet->GetSafeDataTableSoftObject(Context, Member, SoftObject, Log))
			{
				OutPath = SoftObject.ToString();
				int32 Index = INDEX_NONE;
				OutPath.FindLastChar('.', Index);
				OutPath = OutPath.Left(Index);
				return true;
			}
		}
		return false;
	}

	UDataTable* FLibrary::LoadDataTableAndAllRowsChecked(const FString& Context, const UObject* WorldContext, const MemberType& Member)
	{
		return GetChecked(Context, WorldContext).LoadDataTableAndAllRowsChecked(Context, WorldContext, Member);
	}

	#undef MemberType
}