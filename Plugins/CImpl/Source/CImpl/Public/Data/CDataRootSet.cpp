// Copyright Studio Sai. All Rights Reserved.
#include "Data/CDataRootSet.h"
#include "CImpl.h"

// Types
#include "Types/CsTypes_Macro.h"
// Library
#include "Data/CsLibrary_DataRootSet.h"
	// Common
#include "Level/CsLibrary_Level.h"
#include "Managers/Sound/CsLibrary_Sound.h"
#include "Library/CsLibrary_Valid.h"
// DataTable
#include "Engine/DataTable.h"

#if WITH_EDITOR
// Library
	// Common
#include "Library/CsLibrary_World.h"
#include "Library/Load/CsLibrary_Load.h"
#endif // #if WITH_EDITOR

// Cached
#pragma region

namespace NCDataRootSet
{
	namespace NCached
	{
		namespace Str
		{
			CS_DEFINE_CACHED_STRING(GetCDataRootSet, "GetCDataRootSet()");

			CS_DEFINE_CACHED_STRING(GamePlays, "GamePlays");
			//CS_DEFINE_CACHED_STRING(Levels, "Level.Datas");
		// FX
			//CS_DEFINE_CACHED_STRING(FXSystems, "FXSystems");
			//CS_DEFINE_CACHED_STRING(FXCustomScriptClasses, "FXCustomScriptClasses");
			//CS_DEFINE_CACHED_STRING(FXCustomScripts, "FXCustomScripts");
		}

		namespace Name
		{
			CS_DEFINE_CACHED_NAME(GamePlays, "GamePlays");
		}
	}
}

#pragma endregion Cached

// FCDataRootSet_Sound
#pragma region

bool FCDataRootSet_Sound::IsValidChecked(const FString& Context) const
{
	// Check MasterSoundMix is Valid
	CS_IS_PTR_NULL_CHECKED(MasterSoundMix)
	// Check MasterSoundClass is Valid
	CS_IS_PTR_NULL_CHECKED(MasterSoundClass)
	// Check MusicSoundClass is Valid
	CS_IS_PTR_NULL_CHECKED(MusicSoundClass)
	return true;
}

#define MixType FCDataRootSet_Sound::EMix
#define ClassType FCDataRootSet_Sound::EClass

void FCDataRootSet_Sound::SetAndPushMixClassOverrideChecked(const FString& Context, const UObject* WorldContext, const MixType& SoundMix, const ClassType& SoundClass, const float& Volume /*=1.0f*/, const float& Pitch /*=1.0f*/, const float& FadeInTime /*=1.0f*/, bool bApplyToChildren /*=true*/) const
{
	check(IsValidChecked(Context));

	USoundMix* Mix = nullptr;
	
	if (SoundMix == MixType::Master)
		Mix = MasterSoundMix;

	USoundClass* Class = nullptr;

	if (SoundClass == ClassType::Master)
		Class = MasterSoundClass;
	else
	if (SoundClass == ClassType::Music)
		Class = MusicSoundClass;

	typedef NCsSound::FLibrary SoundLibrary;

	SoundLibrary::SetAndPushMixClassOverrideChecked(Context, WorldContext, Mix, Class, Volume, Pitch, FadeInTime, bApplyToChildren);
}

void FCDataRootSet_Sound::SetVolumeChecked(const FString& Context, const UObject* WorldContext, const MixType& SoundMix, const ClassType& SoundClass, const float& Volume) const
{
	SetAndPushMixClassOverrideChecked(Context, WorldContext, SoundMix, SoundClass, Volume);
}

void FCDataRootSet_Sound::MuteChecked(const FString& Context, const UObject* WorldContext, const MixType& SoundMix, const ClassType& SoundClass) const
{
	SetAndPushMixClassOverrideChecked(Context, WorldContext, SoundMix, SoundClass, 0.0f);
}

#undef MixType
#undef ClassType

#pragma endregion FCDataRootSet_Sound

#define MemberType FCDataRootSet::EMember
MemberType FCDataRootSet::GetMember(const FName& MemberName)
{
	using namespace NCDataRootSet::NCached;

	if (MemberName == Name::GamePlays)
		return MemberType::GamePlays;
	return MemberType::GamePlays;
}
#undef MemberType

bool FCDataRootSet::IsValidChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const
{
	using namespace NCDataRootSet::NCached;

	//CS_IS_VALID_CHECKED(Level);
	//CS_IS_VALID_CHECKED(UI);

	#define CS_TEMP_CHECK(Member) if (MemberType == EMember::Member) \
	{ \
		checkf(Member.ToSoftObjectPath().IsValid(), TEXT("%s: %s.%s.%s is NOT Valid."), *Context, *(WorldContext->GetName(), *Str::GetCDataRootSet, *Str::Member)); \
	}

	// GamePlays
	CS_TEMP_CHECK(GamePlays)
// FX
	// FXSystems
	//CS_TEMP_CHECK(FXSystems)
	// FXCustomScriptClasses
	//CS_TEMP_CHECK(FXCustomScriptClasses)
	// FXCustomScripts
	//CS_TEMP_CHECK(FXCustomScripts)

	#undef CS_TEMP_CHECK

	return true;
}

const TSoftObjectPtr<UDataTable>& FCDataRootSet::GetDataTableSoftObjectChecked(const FString& Context, const EMember& MemberType) const
{
	#define CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(Member) if (MemberType == EMember::Member) \
		return Member;

	// GamePlays
	CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(GamePlays)
// FX
	// FXSystems
	//CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(FXSystems)
	// FXCustomScriptClasses
	//CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(FXCustomScriptClasses)
	// FXCustomScripts
	//CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(FXCustomScripts)

	#undef CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED

	checkf(0, TEXT("%s: Failed to get DataTable SoftObject for MemberType."), *Context);
	return GamePlays;
}

bool FCDataRootSet::GetSafeDataTableSoftObject(const FString& Context, const EMember& MemberType, TSoftObjectPtr<UDataTable>& OutSoftObject, void(*Log)(const FString&) /*=&FCLog::Warning*/) const
{
	#define CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(Member) if (MemberType == EMember::Member) \
		{ \
			OutSoftObject = Member; \
			return true; \
		}

	// GamePlays
	CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(GamePlays)
// FX
	// FXSystems
	//CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(FXSystems)
	// FXCustomScriptClasses
	//CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(FXCustomScriptClasses)
	// FXCustomScripts
	//CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED(FXCustomScripts)

	#undef CS_TEMP_GET_DATA_TABLE_SOFT_OBJECT_CHECKED

	CS_CONDITIONAL_LOG(FString::Printf(TEXT("%s: Failed to get DataTable SoftObject for MemberType."), *Context));
	return false;
}

UDataTable* FCDataRootSet::GetSafeDataTable(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const
{
	using namespace NCDataRootSet::NCached;

	typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

	#define CS_TEMP_GET_SAFE_DATA_TABLE(Member) if (MemberType == EMember::Member) \
		return DataRootSetLibrary::GetSafeDataTable(Context, WorldContext, Str::GetCDataRootSet, Member, Str::Member);

	// GamePlays
	CS_TEMP_GET_SAFE_DATA_TABLE(GamePlays)
// FX
	// FXSystems
	//CS_TEMP_GET_SAFE_DATA_TABLE(FXSystems)
	// FXCustomScriptClasses
	//CS_TEMP_GET_SAFE_DATA_TABLE(FXCustomScriptClasses)
	// FXCustomScripts
	//CS_TEMP_GET_SAFE_DATA_TABLE(FXCustomScripts)

	#undef CS_TEMP_GET_SAFE_DATA_TABLE

	UE_LOG(LogCImpl, Warning, TEXT("%s: Failed to get DataTable for MemberType."), *Context);
	return nullptr;
}

UDataTable* FCDataRootSet::GetDataTableChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const
{
#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorOrEditorPreview(WorldContext))
	{
		return GetDataTableChecked(Context, MemberType);
	}
#endif // #if WITH_EDITOR

	typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

	return DataRootSetLibrary::GetDataTableChecked(Context, WorldContext, GetDataTableSoftObjectChecked(Context, MemberType));
}

UDataTable* FCDataRootSet::GetDataTableChecked(const FString& Context, const EMember& MemberType) const
{
	const TSoftObjectPtr<UDataTable>& SoftObject = GetDataTableSoftObjectChecked(Context, MemberType);
	UDataTable* DT								 = SoftObject.LoadSynchronous();

	checkf(DT, TEXT("%s: Failed to Load DataTalbe at %s."), *Context, *(SoftObject.ToString()));
	return DT;
} 

uint8* FCDataRootSet::GetDataTableRowChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType, const FName& RowName) const
{
#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorOrEditorPreview(WorldContext))
	{
		return GetDataTableRowChecked(Context, MemberType, RowName);
	}
#endif // #if WITH_EDITOR

	typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

	return DataRootSetLibrary::GetDataTableRowChecked(Context, WorldContext, GetDataTableSoftObjectChecked(Context, MemberType), RowName);
}

uint8* FCDataRootSet::GetDataTableRowChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType, const UScriptStruct* RowStruct, const FName& RowName) const
{
#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorOrEditorPreview(WorldContext))
	{
		return GetDataTableRowChecked(Context, MemberType, RowStruct, RowName);
	}
#endif // #if WITH_EDITOR

	typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

	return DataRootSetLibrary::GetDataTableRowChecked(Context, WorldContext, GetDataTableSoftObjectChecked(Context, MemberType), RowStruct, RowName);
}

uint8* FCDataRootSet::GetDataTableRowChecked(const FString& Context, const EMember& MemberType, const FName& RowName) const
{
	UDataTable* DT = GetDataTableChecked(Context, MemberType);

#if WITH_EDITOR
	UCsLibrary_Load::LoadDataTableRowChecked(Context, DT, RowName, NCsLoadFlags::All, NCsLoadCodes::All);
#endif // #if WITH_EDITOR

	const TMap<FName, uint8*>& RowMap = DT->GetRowMap();

	for (const TPair<FName, uint8*>& Pair : RowMap)
	{
		const FName& Name = Pair.Key;
		uint8* RowPtr	  = Pair.Value;

		if (Name == RowName)
			return RowPtr;
	}
	checkf(0, TEXT("Failed to find Row with Name: %s from DataTable: %s."), *Context, *(RowName.ToString()), *(DT->GetName()));
	return nullptr;
}

uint8* FCDataRootSet::GetDataTableRowChecked(const FString& Context, const EMember& MemberType, const UScriptStruct* RowStruct, const FName& RowName) const
{
	UDataTable* DT = GetDataTableChecked(Context, MemberType);

#if WITH_EDITOR
	UCsLibrary_Load::LoadDataTableRowChecked(Context, DT, RowName, NCsLoadFlags::All, NCsLoadCodes::All);
#endif // #if WITH_EDITOR

	CS_IS_PTR_NULL_CHECKED(RowStruct)

	checkf(DT->GetRowStruct() == RowStruct, TEXT("%s: DataTable: %s RowStruct: %s != %s."), *Context, *(DT->GetName()), *(DT->GetRowStruct()->GetName()), *(RowStruct->GetName()));

	const TMap<FName, uint8*>& RowMap = DT->GetRowMap();

	for (const TPair<FName, uint8*>& Pair : RowMap)
	{
		const FName& Name = Pair.Key;
		uint8* RowPtr = Pair.Value;

		if (Name == RowName)
			return RowPtr;
	}
	checkf(0, TEXT("Failed to find Row with Name: %s from DataTable: %s."), *Context, *(RowName.ToString()), *(DT->GetName()));
	return nullptr;
}

UDataTable* FCDataRootSet::LoadDataTableAndAllRowsChecked(const FString& Context, const UObject* WorldContext, const EMember& MemberType) const
{
#if WITH_EDITOR
	typedef NCsWorld::FLibrary WorldLibrary;

	if (WorldLibrary::IsPlayInEditorOrEditorPreview(WorldContext))
	{
		return LoadDataTableAndAllRowsChecked(Context, MemberType);
	}
#endif // #if WITH_EDITOR

	UDataTable* DT = GetDataTableChecked(Context, MemberType);

#if WITH_EDITOR
	// NOTE: HACK: Really all the rows should have be async loaded by a different method
	UCsLibrary_Load::LoadDataTable(DT, NCsLoadFlags::All, NCsLoadCodes::All);
#endif // #if WITH_EDITOR
	return DT;
}

UDataTable* FCDataRootSet::LoadDataTableAndAllRowsChecked(const FString& Context, const EMember& MemberType) const
{
	UDataTable* DT = GetDataTableChecked(Context, MemberType);

#if WITH_EDITOR
	UCsLibrary_Load::LoadDataTable(DT, NCsLoadFlags::All, NCsLoadCodes::All);
#endif // #if WITH_EDITOR
	return DT;
}