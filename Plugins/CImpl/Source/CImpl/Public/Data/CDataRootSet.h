// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Log
#include "Utility/CLog.h"
// Engine
#include "Engine/DataTable.h"

#include "CDataRootSet.generated.h"

// FCDataRootSet_Sound
#pragma region

class USoundMix;
class USoundClass;

USTRUCT(BlueprintType)
struct CIMPL_API FCDataRootSet_Sound
{
	GENERATED_USTRUCT_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	USoundMix* MasterSoundMix;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	USoundClass* MasterSoundClass;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	USoundClass* MusicSoundClass;

	FCDataRootSet_Sound() :
		MasterSoundMix(nullptr),
		MasterSoundClass(nullptr),
		MusicSoundClass(nullptr)
	{
	}

	bool IsValidChecked(const FString& Context) const;

	enum class EMix : uint8 
	{
		Master
	};

	enum class EClass : uint8
	{
		Master,
		Music
	};

	#define MixType FCDataRootSet_Sound::EMix
	#define ClassType FCDataRootSet_Sound::EClass

	void SetAndPushMixClassOverrideChecked(const FString& Context, const UObject* WorldContext, const MixType& SoundMix, const ClassType& SoundClass, const float& Volume = 1.0f, const float& Pitch = 1.0f, const float& FadeInTime = 1.0f, bool bApplyToChildren = true) const;
	
	void SetVolumeChecked(const FString& Context, const UObject* WorldContext, const MixType& SoundMix, const ClassType& SoundClass, const float& Volume) const;

	void MuteChecked(const FString& Context, const UObject* WorldContext, const MixType& SoundMix, const ClassType& SoundClass) const;

	#undef MixType
	#undef ClassType

private:

	FORCEINLINE void __Nothing() const {}
};

#pragma endregion FCDataRootSet_Sound

class UUserWidget;
class UDataTable;
class UObject;
class UScriptStruct;

USTRUCT(BlueprintType)
struct CIMPL_API FCDataRootSet
{
	GENERATED_USTRUCT_BODY()

public:

	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	//SubclassOf<UUserWidget> StartupWidget;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet", meta = (AllowedClasses = "/Script/Engine.World"))
	FSoftObjectPath GameMap;
	
	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	//FCDataRootSet_Level Level;

	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	//FCDataRootSet_UI UI;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	FCDataRootSet_Sound Sound;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet")
	TSoftObjectPtr<UDataTable> GamePlays;

// FX

	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet", meta = (DisplayName = "FX Systems"))
	//TSoftObjectPtr<UDataTable> FXSystems;
	//
	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet", meta = (DisplayName = "FX Custom Script Classes"))
	//TSoftObjectPtr<UDataTable> FXCustomScriptClasses;

	//UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|DataRootSet", meta = (DisplayName = "FX Custom Scripts"))
	//TSoftObjectPtr<UDataTable> FXCustomScripts;

	FCDataRootSet() :
		//StartupWidget(nullptr),
		GameMap(),
		//Level(),
		//UI(),
		Sound(),
		GamePlays(nullptr)//,
		//FXSystems(nullptr),
		//FXCustomScriptClasses(nullptr),
		//FXCustomScripts(nullptr)
	{
	}

	enum class EMember : uint8
	{
		GamePlays//,
		//Levels,
	// FX
		//FXSystems,
		//FXCustomScriptClasses,
		//FXCustomScripts,
	};

	bool IsValidChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const;

	const TSoftObjectPtr<UDataTable>& GetDataTableSoftObjectChecked(const FString& Context, const EMember& MemberType) const;

	bool GetSafeDataTableSoftObject(const FString& Context, const EMember& MemberType, TSoftObjectPtr<UDataTable>& OutSoftObject, void(*Log)(const FString&) = &FCLog::Warning) const;

	UDataTable* GetSafeDataTable(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const;

	UDataTable* GetDataTableChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const;

	UDataTable* GetDataTableChecked(const FString& Context, const EMember& MemberType) const;

	template<typename RowStructType>
	RowStructType* GetSafeDataTableRow(const FString& Context, const UObject* WorldContext, const EMember& MemberType, const FName& RowName, void(*Log)(const FString&)) const
	{
		if (UDataTable* DataTable = GetSafeDataTable(Context, WorldContext, MemberType))
		{
			if (RowStructType* RowPtr = DataTable->FindRow<RowStructType>(RowName, Context))
			{
				return RowPtr;
			}
			else
			{
	#if !UE_BUILD_SHIPPING
				if (Log)
					Log(FString::Printf(TEXT("%s: Failed to find Row: %s from DataTable: %s."), *Context, *(RowName.ToString()), *(DataTable->GetName())));
	#endif // #if !UE_BUILD_SHIPPING
			}
		}
		return nullptr;
	}

	template<typename RowStructType>
	RowStructType* GetDataTableRowChecked(const FString& Context, const EMember& MemberType, const FName& RowName) const
	{
		UDataTable* DataTable = GetDataTableChecked(Context, MemberType);
		RowStructType* RowPtr = DataTable->FindRow<RowStructType>(RowName, Context);

		checkf(RowPtr, TEXT("%s: Failed to find Row: %s from DataTable: %s."), *Context, *(RowName.ToString()), *(DataTable->GetName()));

		return RowPtr;
	}

	uint8* GetDataTableRowChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType, const FName& RowName) const;

	uint8* GetDataTableRowChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType, const UScriptStruct* RowStruct, const FName& RowName) const;

	uint8* GetDataTableRowChecked(const FString& Context, const EMember& MemberType, const FName& RowName) const;

	uint8* GetDataTableRowChecked(const FString& Context, const EMember& MemberType, const UScriptStruct* RowStruct, const FName& RowName) const;

	UDataTable* LoadDataTableAndAllRowsChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const;

	UDataTable* LoadDataTableAndAllRowsChecked(const FString& Context, const EMember& MemberType) const;
};