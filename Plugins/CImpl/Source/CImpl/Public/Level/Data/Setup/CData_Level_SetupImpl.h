// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "UObject/Object.h"
// Interfaces
#include "Level/Data/Setup/CsData_Level_Setup.h"
#include "Level/CsGetLevelPayload.h"
//#include "Level/CGetLevelDataType.h"
//#include "Game/Play/CGetGamePlayType.h"
#include "Script/CsGetScriptInfo.h"
//#include "Managers/UserWidget/CsGetSettingsManagerUserWidget.h"

#include "CData_Level_SetupImpl.generated.h"

// Inner
#pragma region

USTRUCT(BlueprintType)
struct CIMPL_API FCData_Level_SetupImpl_Inner
{
	GENERATED_USTRUCT_BODY()

public:


// ICsGetLevelPayload

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Level|Data")
	FCsPayload Payload;

// ICGetLevelDataType

	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Level|Data")
	//FECLevelData LevelData;

// ICGetGamePlayType

	/** GamePlay to use in PIE when the Game does NOT launch from Entry. */
	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Level|Data")
	//FECGamePlay GamePlayType;

// ICsGetScriptInfo

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Level|Data")
	FCsScriptInfo ScriptInfo;

// ICsGetSettingsManagerUserWidget
	
	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Level|Data")
	//FCsSettings_Manager_UserWidget Manager_UserWidget;

	FCData_Level_SetupImpl_Inner() :
		// ICsGetLevelPayload
		Payload(),
		// ICLevelDataType
		//LevelData(),
		// ICGetGamePlayType
		//GamePlayType(),
		// ICsGetScriptEntryPointInfo
		ScriptInfo()
		// ICsGetSettingsManagerUserWidget
		//Manager_UserWidget(),
	{
	}
};

#pragma endregion Inner

struct FCsInterfaceMap;

/**
* Data for a Level Setup
* 
* Implements the interfaces:
*  ICsData_Level_Setup
*  ICsGetLevelPayload
*  ICsGetScriptInfo
*/
UCLASS(BlueprintType, Blueprintable)
class CIMPL_API UCData_Level_SetupImpl : public UObject,
										 public ICsData_Level_Setup,
										 public ICsGetLevelPayload,
										 public ICsGetScriptInfo
{
	GENERATED_UCLASS_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	FCData_Level_SetupImpl_Inner Inner;

// ICsGetLevelPayload
#pragma region
public:

	FORCEINLINE const FCsPayload& GetLevelPayload() const { return Inner.Payload; }

#pragma endregion ICsGetLevelPayload

// ICGetLevelDataType
#pragma region
public:

	//FORCEINLINE const FECLevelData& GetLevelDataType() const { return Inner.LevelData; }

#pragma endregion ICGetLevelDataType
	
// ICGetGamePlayType
#pragma region
public:

	/**
	* Get the GamePlay to use in PIE when the Game does NOT launch from Entry.
	* 
	* return GamePlay type.
	*/
	//FORCEINLINE const FECGamePlay& GetGamePlayType() const { return Inner.GamePlayType; }

#pragma endregion ICGetGamePlayType

// ICsGetScriptInfo
#pragma region
public:

	FORCEINLINE const FCsScriptInfo& GetScriptInfo() const { return Inner.ScriptInfo; }

#pragma endregion ICsGetScriptInfo

// ICsGetSettingsManagerUserWidget
#pragma region
public:

	//FORCEINLINE const FCsSettings_Manager_UserWidget& GetSettingsManagerUserWidget() const { return Inner.Manager_UserWidget; }

#pragma endregion ICsGetSettingsManagerUserWidget
};