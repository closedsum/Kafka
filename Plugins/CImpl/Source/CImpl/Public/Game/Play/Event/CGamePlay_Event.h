// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Interfaces
#include "UObject/Interface.h"

#include "CGamePlay_Event.generated.h"

UINTERFACE(Blueprintable)
class CIMPL_API UCGamePlay_Event : public UInterface
{
	GENERATED_UINTERFACE_BODY()
};

class ICGamePlay;

class CIMPL_API ICGamePlay_Event
{
	GENERATED_IINTERFACE_BODY()

public:

	DECLARE_MULTICAST_DELEGATE_OneParam(FOnIntroComplete_Start, ICGamePlay* /*GamePlay*/);

	virtual FOnIntroComplete_Start& GetOnIntroComplete_Start_Event() = 0;
};