// Copyright Studio Sai. All Rights Reserved.
#include "Utility/CPopulateEnumMapFromSettings.h"

// Data
#include "Data/CGetDataRootSet.h"
// Utility
#include "Utility/CsPopulateEnumMapFromSettings.h"

const FCDataRootSet* FCPopulateEnumMapFromSettings::GetDataRootSet(const FString& Context, UObject* ContextRoot)
{
	return FCsPopulateEnumMapFromSettings::GetDataRootSet<FCDataRootSet, ICGetDataRootSet, &ICGetDataRootSet::GetCDataRootSet>(Context, ContextRoot);
}

const FCDataRootSet* FCPopulateEnumMapFromSettings::GetDataRootSet(const FString& Context, UObject* ContextRoot, UObject*& OutDataRootSetImpl)
{
	return FCsPopulateEnumMapFromSettings::GetDataRootSet<FCDataRootSet, ICGetDataRootSet, &ICGetDataRootSet::GetCDataRootSet>(Context, ContextRoot, OutDataRootSetImpl);
}

#define PayloadType FCPopulateEnumMapFromSettings::FFromDataTable::FPayload
void FCPopulateEnumMapFromSettings::FromDataTable(const FString& Context, PayloadType& Payload)
{
#undef PayloadType

	const FCDataRootSet* DataRootSet = GetDataRootSet(Context, Payload.ContextRoot);

	if (!DataRootSet)
		return;

	typedef FCsPopulateEnumMapFromSettings::FFromDataTable::FPayload PayloadType;
	PayloadType P;

	P.ContextRoot			= Payload.ContextRoot;
	P.DataTableSoftObject	= DataRootSet->GetDataTableSoftObjectChecked(Context, Payload.DataTableName);
	P.EnumName				= Payload.EnumName;
	P.Create				= Payload.Create;
	P.CreateCustom			= Payload.CreateCustom;
	P.IsValidEnum			= Payload.IsValidEnum;
	P.IsValidEnumByDisplayName = Payload.IsValidEnumByDisplayName;
	P.Log					= Payload.Log;

	FCsPopulateEnumMapFromSettings::FromDataTable(Context, P);
}