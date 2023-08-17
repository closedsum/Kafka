// Copyright Studio Sai. All Rights Reserved.
#include "Game/Play/Test/CGamePlayTestImpl.h"
#include "CImpl.h"

// Interfaces
#include "Managers/Time/CsUpdate.h"

// Cached
#pragma region

namespace NCGamePlayTestImpl
{
	namespace NCached
	{
		namespace Str
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGamePlay01Impl, End);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGamePlay01Impl, Init);
		}

		namespace Name
		{
		}
	}
}

#pragma endregion Cached

UCGamePlayTestImpl::UCGamePlayTestImpl(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
}

// UCGamePlayImpl Interface
#pragma region

	// ICGamePlay
#pragma region

void UCGamePlayTestImpl::Start()
{
#if WITH_EDITOR
	if (bOverride_Start)
	{
		Super::Start();
		return;
	}
#endif // #if WITH_EDITOR

	Super::Start();
}

void UCGamePlayTestImpl::End()
{
	using namespace NCGamePlayTestImpl::NCached;

	const FString& Context = Str::End;

	Super::End();
}

#pragma endregion ICGamePlay

void UCGamePlayTestImpl::Init(const FName& TypeName)
{
	using namespace NCGamePlayTestImpl::NCached;

	const FString& Context = Str::Init;

	Super::Init(TypeName);

#if WITH_EDITOR
	if (bOverride_Init)
		return;
#endif // #if WITH_EDITOR
}

	// Update
#pragma region

void UCGamePlayTestImpl::Update(const FCsDeltaTime& DeltaTime)
{
#if WITH_EDITOR
	if (bOverride_Update)
	{
		Super::Update(DeltaTime);
		return;
	}
#endif // #if WITH_EDITOR

	Super::Update(DeltaTime);
}

#pragma endregion Update

#pragma endregion UCGamePlayImpl Interface