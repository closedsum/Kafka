// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Interfaces
#include "UObject/Interface.h"

#include "CGetData_GamePlay_Override.generated.h"

// FCData_GamePlay_Override
#pragma region

USTRUCT(BlueprintType)
struct CIMPL_API FCData_GamePlay_Override
{
	GENERATED_USTRUCT_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	bool bOverride;

	FCData_GamePlay_Override() :
		bOverride(false)
	{
	}

	bool IsValidChecked(const FString& Context) const;
	bool IsValid(const FString& Context, void(*Log)(const FString&) = nullptr) const;
};

#pragma endregion FCData_GamePlay_Override

UINTERFACE(BlueprintType)
class CIMPL_API UCGetData_GamePlay_Override : public UInterface
{
	GENERATED_UINTERFACE_BODY()
};

/**
*/
class CIMPL_API ICGetData_GamePlay_Override
{
	GENERATED_IINTERFACE_BODY()

public:

	virtual const FCData_GamePlay_Override& GetData_GamePlay_Override() const = 0;
};