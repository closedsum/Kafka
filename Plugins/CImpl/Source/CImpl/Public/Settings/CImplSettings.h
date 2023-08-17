// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Engine/DeveloperSettings.h"
// Types
#include "Settings/CsTypes_Settings.h"
#include "Settings/CTypes_ImplSettings.h"
#include "Managers/Input/Action/CsInputActionMap.h"
// GameEvent
#include "Managers/Input/GameEvent/CsGameEvent.h"

#include "CImplSettings.generated.h"

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

UCLASS(config = Game, defaultconfig, meta = (DisplayName = "C Implementation Settings"))
class CIMPL_API UCImplSettings : public UDeveloperSettings
{
	GENERATED_UCLASS_BODY()

public:

// Enum
#pragma region
public:

	template<typename EnumType>
	const TArray<FCsSettings_Enum>& GetSettingsEnum() const;

	template<typename EnumType>
	const FString& GetSettingsEnumPath() const;

#pragma endregion Enum

// Input
#pragma region
public:

	UPROPERTY(config, EditAnywhere, BlueprintReadOnly, Category = "Settings|Input")
	FECsInputActionMap MenuMainInputMap;

	UPROPERTY(config, EditAnywhere, BlueprintReadOnly, Category = "Settings|Input")
	FECsInputActionMap GameInputMap;

	UPROPERTY(config, EditAnywhere, BlueprintReadOnly, Category = "Settings|Input")
	FCLocalPlayerActions LocalPlayerActions;

#pragma endregion Input

// Events
#pragma region
public:

	UPROPERTY(config, EditAnywhere, BlueprintReadOnly, Category = "Settings|Events")
	FECsGameEvent ApplicationQuitEvent;

	UPROPERTY(config, EditAnywhere, BlueprintReadOnly, Category = "Settings|Events")
	FCLocalPlayerEvents LocalPlayerEvents;

#pragma endregion Events

// ConsoleCommand
#pragma region
public:

	UPROPERTY(config, EditAnywhere, BlueprintReadOnly, Category = "Settings")
	FCSettings_ConsoleCommand ConsoleCommand;

#pragma endregion ConsoleCommand

// Unit Test
#pragma region
public:

#pragma endregion Unit Test

// Editor
#pragma region
public:

#if WITH_EDITOR

	virtual void PostEditChangeChainProperty(FPropertyChangedChainEvent& e) override;

#endif // #if WITH_EDITOR

#pragma endregion Editor
};