// Copyright Studio Sai. All Rights Reserved.
#include "Settings/CTypes_ImplSettings.h"

// Library
#include "Coordinators/GameEvent/CsLibrary_Coordinator_GameEvent.h"
#include "Library/CsLibrary_Valid.h"
// Settings
#include "Settings/CImplSettings.h"

// FCSettings_ConsoleCommand
#pragma region

bool FCSettings_ConsoleCommand::IsValidChecked(const FString& Context) const
{
	// Check OpenEvent is Valid
	check(EMCsGameEvent::Get().IsValidEnumChecked(Context, OpenEvent));
	return true;
}

void FCSettings_ConsoleCommand::BroadcastEventChecked(const FString& Context, UObject* WorldContext)
{
	check(IsValidChecked(Context));

	typedef NCsGameEvent::NCoordinator::FLibrary GameEventCoordinatorLibrary;

	const FECsGameEventCoordinatorGroup& Group = NCsGameEventCoordinatorGroup::None;

	GameEventCoordinatorLibrary::BroadcastGameEventChecked(Context, WorldContext, Group, OpenEvent);
}

#pragma endregion FCSettings_ConsoleCommand

// FCLocalPlayerActions
#pragma region

bool FCLocalPlayerActions::IsValidChecked(const FString& Context) const
{
	// Move
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsInputAction, Move)

	// Check all Actions are unique
	TSet<FECsInputAction> Actions;
	Actions.Add(Move);

	const int32 Count = 1;

	checkf(Actions.Num() == Count, TEXT("%s: All Actions are NOT Unique."), *Context);

	return true;
}

#pragma endregion FCLocalPlayerActions

// FCLocalPlayerEvents
#pragma region

/*static*/ const FCLocalPlayerEvents& FCLocalPlayerEvents::Get()
{
	return GetMutableDefault<UCImplSettings>()->LocalPlayerEvents;
}

bool FCLocalPlayerEvents::IsValidChecked(const FString& Context) const
{
// Forward | Back

	// MoveForwardBack
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, MoveForwardBack)
	// StartMoveForward
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StartMoveForward)
	// StopMoveForward
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StopMoveForward)
	// StartMoveBack
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StartMoveBack)
	// StopMoveBack
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StopMoveBack)

// Left | Right

	// MoveLeftRight
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, MoveLeftRight)
	// StartMoveLeft
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StartMoveLeft)
	// StopMoveLeft
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StopMoveLeft)
	// StartMoveRight
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StartMoveRight)
	// StopMoveRight
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StopMoveRight)

// Look

	// LookUpDown
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, LookUpDown)
	// LookLeftRight
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, LookLeftRight)

// Jump

	// StartJump
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StartJump)
	// StopJump
	CS_IS_ENUM_STRUCT_VALID_CHECKED(EMCsGameEvent, StopJump)

	// Check all Events are unique
	static TSet<FECsGameEvent> Events;
	Events.Reset();
	// Forward | Back
	Events.Add(MoveForwardBack);
	Events.Add(StartMoveForward);
	Events.Add(StopMoveForward);
	Events.Add(StartMoveBack);
	Events.Add(StopMoveBack);
	// Left | Right
	Events.Add(MoveLeftRight);
	Events.Add(StartMoveLeft);
	Events.Add(StopMoveLeft);
	Events.Add(StartMoveRight);
	Events.Add(StopMoveRight);
	// Look
	Events.Add(LookUpDown);
	Events.Add(LookLeftRight);
	// Jump
	Events.Add(StartJump);
	Events.Add(StopJump);

	const int32 Count = 14;

	checkf(Events.Num() == Count, TEXT("%s: All Events are NOT Unique."), *Context);

	return true;
}

void FCLocalPlayerEvents::BroadcastEventChecked(const FString& Context, UObject* WorldContext, const int32& PlayerIndex, const EEvent& Type, const float& Value /*=0.0f*/, const FVector3f& Location /*=FVector3f::ZeroVector*/) const
{
	CS_IS_INT_GREATER_THAN_OR_EQUAL_CHECKED(PlayerIndex, 0)

	checkf(PlayerIndex <= 1, TEXT("%s: Currently only PlayerIndex in the range [0, 1] is Valid."), *Context);

	const FECsGameEvent& Event = GetEventChecked(Context, Type);

	const FECsGameEventCoordinatorGroup& Group = PlayerIndex == 0 ? NCsGameEventCoordinatorGroup::ManagerInput0 : NCsGameEventCoordinatorGroup::ManagerInput1;

	typedef NCsGameEvent::NCoordinator::FLibrary GameEventCoordinatorLibrary;

	GameEventCoordinatorLibrary::BroadcastGameEventChecked(Context, WorldContext, Group, Event, Value, Location);
}

#pragma endregion FCLocalPlayerEvents