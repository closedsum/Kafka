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