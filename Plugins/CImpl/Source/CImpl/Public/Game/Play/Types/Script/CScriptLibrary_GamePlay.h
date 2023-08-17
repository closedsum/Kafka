// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "UObject/Object.h"
// Types
#include "Game/Play/Types/CTypes_GamePlay.h"

#include "CScriptLibrary_GamePlay.generated.h"

UCLASS()
class CIMPL_API UCScriptLibrary_GamePlay : public UObject
{
	GENERATED_UCLASS_BODY()

// Enum
#pragma region
public:

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play", meta = (AutoCreateRefTerm = "Name,DisplayName"))
	static FECGamePlay Create(const FString& Name, const FString& DisplayName);

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play", meta = (AutoCreateRefTerm = "Name"))
	static FECGamePlay Get(const FString& Name);

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play", meta = (AutoCreateRefTerm = "Index"))
	static FECGamePlay GetByIndex(const int32& Index);

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play", meta = (AutoCreateRefTerm = "Enum"))
	static FString ToString(const FECGamePlay& Enum);

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play")
	static uint8 GetCount();

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play")
	static void GetAll(TArray<FECGamePlay>& OutTypes);

	UFUNCTION(BlueprintPure, Category = "CImpl|Library|Game|Play", meta = (AutoCreateRefTerm = "Name"))
	static FECGamePlay GetMax();

	UFUNCTION(BlueprintPure, meta = (DisplayName = "Equal (GamePlay)", CompactNodeTitle = "==", ScriptMethod = "Equals", Keywords = "== equal"), Category = "CsCore|Library|GamePlay")
	static bool EqualEqual(const FECGamePlay& A, const FECGamePlay& B);

#pragma endregion Enum
};