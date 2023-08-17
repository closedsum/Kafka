// Copyright Studio Sai. All Rights Reserved.
#pragma once

class UObject;

struct FCDataRootSet;

/**
* Utility class to help populate a EnumStructMap. Called internally by the 
* namespace associated with the appropriate EnumStruct.
*/
struct CIMPL_API FCPopulateEnumMapFromSettings final
{
public:

	static const FCDataRootSet* GetDataRootSet(const FString& Context, UObject* ContextRoot);
	static const FCDataRootSet* GetDataRootSet(const FString& Context, UObject* ContextRoot, UObject*& DataRootSetImpl);
};