// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Data/CsDataRootSetImpl.h"
// Interfaces
#include "Data/CGetDataRootSet.h"
//#include "Data/CsUIGetDataRootSet.h"
#include "Data/CsDmgGetDataRootSet.h"

#include "CDataRootSetImpl.generated.h"

UCLASS(Blueprintable)
class CIMPL_API UCDataRootSetImpl : public UCsDataRootSetImpl,
									public ICGetDataRootSet,
									//public ICsUIGetDataRootSet,
									public ICsDmgGetDataRootSet
{
	GENERATED_UCLASS_BODY()

public:

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Root", meta = (DisplayName = "C: DataRootSet"))
	FCDataRootSet CImpl_DataRootSet;

// ICGetDataRootSet
#pragma region
public:

	FORCEINLINE const FCDataRootSet& GetCDataRootSet() const { return CImpl_DataRootSet; }

#pragma endregion ICGetDataRootSet

public:

	//UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Root", meta = (DisplayName = "UserInterface: DataRootSet"))
	//FCsUIDataRootSet UserInterface_DataRootSet;

// ICsUIGetDataRootSet
#pragma region
public:

	//FORCEINLINE const FCsUIDataRootSet& GetCsUIDataRootSet() const { return UserInterface_DataRootSet; }

#pragma endregion ICsUIGetDataRootSet

public:

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Root", meta = (DisplayName = "Damage: DataRootSet"))
	FCsDmgDataRootSet Damage_DataRootSet;

// ICsDmgGetDataRootSet
#pragma region
public:

	FORCEINLINE const FCsDmgDataRootSet& GetCsDmgDataRootSet() const { return Damage_DataRootSet; }

#pragma endregion ICsDmgGetDataRootSet
};