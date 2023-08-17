// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Interfaces
#include "UObject/Interface.h"

#include "CGetGamePlay.generated.h"

UINTERFACE(BlueprintType)
class CIMPL_API UCGetGamePlay : public UInterface
{
	GENERATED_UINTERFACE_BODY()
};

class ICGamePlay;

/**
*
*/
class CIMPL_API ICGetGamePlay
{
	GENERATED_IINTERFACE_BODY()

public:

	/**
	*/
	virtual ICGamePlay* GetGamePlay() const = 0;
};