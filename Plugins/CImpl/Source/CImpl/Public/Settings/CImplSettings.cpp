// Copyright Studio Sai. All Rights Reserved.
#include "Settings/CImplSettings.h"
#include "CImpl.h"

// Cached
#pragma region

namespace NCImplSettings
{
	namespace NCached
	{
		namespace Str
		{
		}
	}
}

#pragma endregion Cached

UCImplSettings::UCImplSettings(const FObjectInitializer& ObjectInitializer) : 
	Super(ObjectInitializer),
	// Input
	MenuMainInputMap(),
	GameInputMap(),
	LocalPlayerActions(),
	// Events
	ApplicationQuitEvent(),
	LocalPlayerEvents(),
	// ConsoleCommand
	ConsoleCommand()
{
}

#if WITH_EDITOR

void UCImplSettings::PostEditChangeChainProperty(FPropertyChangedChainEvent& e)
{
	const FName PropertyName	   = (e.Property != NULL) ? e.Property->GetFName() : NAME_None;
	const FName MemberPropertyName = (e.MemberProperty != NULL) ? e.MemberProperty->GetFName() : NAME_None;

	Super::PostEditChangeChainProperty(e);
}

#endif // #if WITH_EDITOR