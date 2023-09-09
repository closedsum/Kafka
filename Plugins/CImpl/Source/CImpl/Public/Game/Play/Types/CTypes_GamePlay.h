// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Types
#include "Types/Enum/CsEnum_uint8.h"
#include "Types/Enum/CsEnumStructMap.h"
// DataTable
#include "Engine/DataTable.h"

#include "CTypes_GamePlay.generated.h"

// GamePlay
#pragma region

USTRUCT(BlueprintType)
struct CIMPL_API FECGamePlay : public FECsEnum_uint8
{
	GENERATED_USTRUCT_BODY()

	CS_ENUM_UINT8_BODY(FECGamePlay)
};

CS_DEFINE_ENUM_UINT8_GET_TYPE_HASH(FECGamePlay)

struct CIMPL_API EMCGamePlay : public TCsEnumStructMap<FECGamePlay, uint8>
{
	CS_ENUM_STRUCT_MAP_BODY(EMCGamePlay, FECGamePlay, uint8)
};

namespace NCGamePlay
{
	typedef EMCGamePlay EnumMapType;
	typedef FECGamePlay Type;

	FORCEINLINE void Create(const FString& Name, const bool& UserDefinedEnum) { EnumMapType::Get().Create(Name, UserDefinedEnum); }
	FORCEINLINE void CreateCustom(const FString& Name, const FString& DisplayName, const bool& UserDefinedEnum) { EnumMapType::Get().Create(Name, DisplayName, UserDefinedEnum); }
	FORCEINLINE bool IsValidEnum(const FString& Name) { return EnumMapType::Get().IsValidEnum(Name); }
	FORCEINLINE bool IsValidEnumByDisplayName(const FString& DisplayName) { return EnumMapType::Get().IsValidEnumByDisplayName(DisplayName); }

	CIMPL_API void FromDataTable(const FString& Context, UObject* ContextRoot);

	CIMPL_API void PopulateEnumMapFromSettings(const FString& Context, UObject* ContextRoot);
}

#pragma endregion GamePlay

// FCGamePlayPtr
#pragma region

class UObject;
class UClass;

USTRUCT(BlueprintType)
struct CIMPL_API FCGamePlayPtr
{
	GENERATED_USTRUCT_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly, meta = (MustImplement = "/Script.CImpl.CGamePlay"))
	TSoftClassPtr<UObject> GamePlay;

	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	int32 GamePlay_LoadFlags;

	UPROPERTY(Transient, BlueprintReadOnly)
	UObject* GamePlay_Internal;

	UPROPERTY(Transient, BlueprintReadOnly)
	UClass* GamePlay_Class;

	FCGamePlayPtr() :
		GamePlay(nullptr),
		GamePlay_LoadFlags(0),
		GamePlay_Internal(nullptr),
		GamePlay_Class(nullptr)
	{
	}

	FORCEINLINE UObject* Get() const { return GamePlay_Internal; }

	template<typename T>
	FORCEINLINE T* Get() const { return Cast<T>(Get()); }

	/**
	* Get the Hard reference to the GamePlay object.
	*
	* @param Context	The calling context.
	* return			GamePlay
	*/
	FORCEINLINE UObject* GetChecked(const FString& Context) const
	{
		checkf(GamePlay.ToSoftObjectPath().IsValid(), TEXT("%s: GamePlay is NULL."), *Context);

		checkf(GamePlay_Internal, TEXT("%s: GamePlay has NOT been loaded from Path @ %s."), *Context, *(GamePlay.ToSoftObjectPath().ToString()));

		return GamePlay_Internal;
	}

	/**
	* Get the Hard reference to the GamePlay object.
	*
	* return GamePlay
	*/
	FORCEINLINE UObject* GetChecked() const
	{
		checkf(GamePlay.ToSoftObjectPath().IsValid(), TEXT("FCGamePlayPtr::GetChecked: GamePlay is NULL."));

		checkf(GamePlay_Internal, TEXT("FCGamePlayPtr::GetChecked: GamePlay has NOT been loaded from Path @ %s."), *(GamePlay.ToSoftObjectPath().ToString()));

		return GamePlay_Internal;
	}

	/**
	* Safely get the Hard reference to the GamePlay object.
	*
	* @param Context	The calling context.
	* return			GamePlay
	*/
	FORCEINLINE UObject* GetSafe(const FString& Context, void(*Log)(const FString&) = nullptr) const
	{
		if (!GamePlay.ToSoftObjectPath().IsValid())
		{
			CS_CONDITIONAL_LOG(FString::Printf(TEXT("%s: GamePlay is NULL."), *Context));
			return nullptr;
		}

		if (GamePlay_Internal)
		{
			CS_CONDITIONAL_LOG(FString::Printf(TEXT("%s: GamePlay has NOT been loaded from Path @ %s."), *Context, *(GamePlay.ToSoftObjectPath().ToString())));
		}
		return GamePlay_Internal;
	}

	/**
	* Safely get the Hard reference to the GamePlay object.
	*
	* return GamePlay
	*/
	FORCEINLINE UObject* GetSafe() const
	{
		if (!GamePlay.ToSoftObjectPath().IsValid())
			return nullptr;
		return GamePlay_Internal;
	}

	FORCEINLINE UClass* GetClass() const { return GamePlay_Class; }

	/**
	* Get the Hard reference to the GamePlay class.
	*
	* @param Context	The calling context.
	* return			GamePlay
	*/
	FORCEINLINE UClass* GetClassChecked(const FString& Context) const
	{
		checkf(GamePlay.ToSoftObjectPath().IsValid(), TEXT("%s: GamePlay is NULL."), *Context);

		checkf(GamePlay_Class, TEXT("%s: GamePlay has NOT been loaded from Path @ %s."), *Context, *(GamePlay.ToSoftObjectPath().ToString()));

		return GamePlay_Class;
	}

	/**
	* Get the Hard reference to the GamePlay class.
	*
	* return GamePlay
	*/
	FORCEINLINE UClass* GetClassChecked() const
	{
		checkf(GamePlay.ToSoftObjectPath().IsValid(), TEXT("FCGamePlayPtr::GetClassChecked: GamePlay is NULL."));

		checkf(GamePlay_Class, TEXT("FCGamePlayPtr::GetClassChecked: GamePlay has NOT been loaded from Path @ %s."), *(GamePlay.ToSoftObjectPath().ToString()));

		return GamePlay_Class;
	}
};

#pragma endregion FCBlockPtr

// FCData_GamePlayPtr
#pragma region

class UObject;

// NCGame::NPlay::NData::IData
CS_FWD_DECLARE_STRUCT_NAMESPACE_3(NCGame, NPlay, NData, IData)

USTRUCT(BlueprintType)
struct CIMPL_API FCData_GamePlayPtr
{
	GENERATED_USTRUCT_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly, meta = (MustImplement = "/Script.CImpl.CData_GamePlay"))
	TSoftClassPtr<UObject> Data;

	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	int32 Data_LoadFlags;

	UPROPERTY(Transient, BlueprintReadOnly)
	UObject* Data_Internal;

	UPROPERTY(Transient, BlueprintReadOnly)
	UClass* Data_Class;

	FCData_GamePlayPtr() :
		Data(nullptr),
		Data_LoadFlags(0),
		Data_Internal(nullptr),
		Data_Class(nullptr)
	{
	}

	FORCEINLINE UObject* Get() const { return Data_Internal; }

	template<typename T>
	FORCEINLINE T* Get() const { return Cast<T>(Get()); }

#define DataType NCGame::NPlay::NData::IData

	DataType* GetChecked(const FString& Context) const;

	DataType* GetSafe(const FString& Context) const;

	DataType* SafeLoad(const FString& Context);

#undef DataType

	FORCEINLINE UClass* GetClass() const { return Data_Class; }
};

#pragma endregion FCData_GamePlayPtr

// FCGamePlayEntry
#pragma region

/**
*/
USTRUCT(BlueprintType)
struct CIMPL_API FCGamePlayEntry : public FTableRowBase
{
	GENERATED_USTRUCT_BODY()

	/** The enum (FECGamePlay) name for the GamePlay. */
	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	FString Name;

	/** The enum (FECGamePlay) display name for the GamePlay. */
	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	FString DisplayName;

	/** Soft Reference to a class that implements the interface: ICGamePlay. */
	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	FCGamePlayPtr Class;

	/** Soft Reference to a data of type: ICData_GamePlay. */
	UPROPERTY(EditAnywhere, BlueprintReadOnly)
	FCData_GamePlayPtr Data;

	FCGamePlayEntry() :
		Name(),
		DisplayName(), 
		Class(),
		Data()
	{
	}
};

#pragma endregion FCGamePlayEntry