// Copyright Studio Sai. All Rights Reserved.
#include "Game/Play/Types/Script/CScriptLibrary_GamePlay.h"
#include "CImpl.h"

// Library
#include "Library/CsLibrary_Enum.h"

// Cached
#pragma region

namespace NCScriptLibraryGamePlay
{
	namespace NCached
	{
		namespace Str
		{
			const FString FECGamePlay= TEXT("FECGamePlay");
			const FString Create = TEXT("Create");
			const FString Get = TEXT("Get");
			const FString GetByIndex = TEXT("GetByIndex");
		}
	}
}

#pragma endregion Cached

UCScriptLibrary_GamePlay::UCScriptLibrary_GamePlay(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
}

// Enum
#pragma region

#define EnumMapType EMCGamePlay
#define EnumType FECGamePlay

EnumType UCScriptLibrary_GamePlay::Create(const FString& Name, const FString& DisplayName)
{
	using namespace NCScriptLibraryGamePlay::NCached;

	const FString& Context = Str::Create;

	typedef NCsEnum::FLibrary EnumLibrary;

	return EnumLibrary::CreateSafe<EnumMapType, EnumType>(Context, Name, DisplayName);
}

EnumType UCScriptLibrary_GamePlay::Get(const FString& Name)
{
	using namespace NCScriptLibraryGamePlay::NCached;

	const FString& Context = Str::Get;

	typedef NCsEnum::FLibrary EnumLibrary;

	return EnumLibrary::GetSafe<EnumMapType, EnumType>(Context, Str::EnumType, Name);
}

EnumType UCScriptLibrary_GamePlay::GetByIndex(const int32& Index)
{
	using namespace NCScriptLibraryGamePlay::NCached;

	const FString& Context = Str::GetByIndex;

	typedef NCsEnum::FLibrary EnumLibrary;

	return EnumLibrary::GetSafeByIndex<EnumMapType, EnumType>(Context, Str::EnumType, Index);
}

FString UCScriptLibrary_GamePlay::ToString(const EnumType& Enum)
{
	return Enum.ToString();
}

uint8 UCScriptLibrary_GamePlay::GetCount()
{
	return EnumMapType::Get().Num();
}

void UCScriptLibrary_GamePlay::GetAll(TArray<EnumType>& OutTypes)
{
	typedef NCsEnum::FLibrary EnumLibrary;

	EnumLibrary::GetAll<EnumMapType, EnumType>(OutTypes);
}

EnumType UCScriptLibrary_GamePlay::GetMax()
{
	return EnumMapType::Get().GetMAX();
}

bool UCScriptLibrary_GamePlay::EqualEqual(const EnumType& A, const EnumType& B)
{
	return A == B;
}

#undef EnumMapType
#undef EnumType

#pragma endregion Enum