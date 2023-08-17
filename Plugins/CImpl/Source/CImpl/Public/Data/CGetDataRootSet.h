// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "UObject/Interface.h"
// Types
#include "Data/CDataRootSet.h"

#include "CGetDataRootSet.generated.h"

UINTERFACE(BlueprintType)
class CIMPL_API UCGetDataRootSet : public UInterface
{
	GENERATED_UINTERFACE_BODY()
};

class CIMPL_API ICGetDataRootSet
{
	GENERATED_IINTERFACE_BODY()

public:

	/**
	*
	*
	* return
	*/
	virtual const FCDataRootSet& GetCDataRootSet() const = 0;
};