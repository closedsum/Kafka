// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "UObject/Object.h"

#include "CScriptLibrary_Manager_Level.generated.h"

class UCManager_Level;

UCLASS()
class CIMPL_API UCScriptLibrary_Manager_Level : public UObject
{
	GENERATED_UCLASS_BODY()

// Get
#pragma region
public:

	/**
	* Get the reference to UCManager_Level from a WorldContext.
	*
	* @param Context		The calling context.
	* @param WorldContext	Object that contains a reference to a World (GetWorld() is Valid).
	* return				UCManager_Level.
	*/
	UFUNCTION(BlueprintCallable, Category = "CImpl|Library|Manager|Level", meta = (WorldContext = "WorldContextObject", AutoCreateRefTerm = "Context"))
	static UCManager_Level* Get(const FString& Context, const UObject* WorldContextObject);

#pragma endregion Get
};