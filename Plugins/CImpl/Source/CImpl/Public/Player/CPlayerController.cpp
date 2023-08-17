// Copyright Studio Sai. All Rights Reserved.
#include "Player/CPlayerController.h"
#include "CImpl.h"

// Managers
#include "Managers/Input/CsManager_Input.h"
// Coordinators
#include "Coordinators/GameEvent/CsCoordinator_GameEvent.h"
// Player
#include "Engine/LocalPlayer.h"

ACPlayerController::ACPlayerController(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	bShowMouseCursor	   = false;
	bEnableClickEvents	   = true;
	bEnableMouseOverEvents = true;
}

// AActor Interface
#pragma region

void ACPlayerController::Destroyed()
{
	Super::Destroyed();

	if (IsValid(Manager_Input))
	{
		Manager_Input->UnregisterComponent();
		Manager_Input->MarkAsGarbage();

		Manager_Input = nullptr;
	}
}

#pragma endregion AActor Interface

// Input
#pragma region

void ACPlayerController::PreProcessInput(const float DeltaTime, const bool bGamePaused)
{
	Super::PreProcessInput(DeltaTime, bGamePaused);

	Manager_Input->PreProcessInput(DeltaTime, bGamePaused);
}

void ACPlayerController::PostProcessInput(const float DeltaTime, const bool bGamePaused)
{
	Super::PostProcessInput(DeltaTime, bGamePaused);

	Manager_Input->PostProcessInput(DeltaTime, bGamePaused);
}

void ACPlayerController::InitInputSystem()
{
	Super::InitInputSystem();

	if (!Manager_Input)
	{
		SetManager_Input(NewObject<UCsManager_Input>(this));
		Manager_Input->RegisterComponent();

		UCsCoordinator_GameEvent* Coordinator_GameEvent = UCsCoordinator_GameEvent::Get(GetWorld()->GetGameInstance());

		// If LocalPlayer, route to the appropriate group.
		// NOTE: Only support 2 players for now.
		if (ULocalPlayer* LocalPlayer = Cast<ULocalPlayer>(Player))
		{
			const int32 Id = LocalPlayer->GetControllerId();

			// FIRST | ManagerInput0
			if (Id == 0)
			{
				Manager_Input->OnGameEventInfo_Event.AddUObject(Coordinator_GameEvent, &UCsCoordinator_GameEvent::OnGameEventInfo_ManagerInput0);
				Manager_Input->OnPostProcessInput_Event.AddUObject(Coordinator_GameEvent, &UCsCoordinator_GameEvent::OnPostProcessInput_ManagerInput0);
			}
			// SECOND | ManagerInput1
			else
			if (Id == 1)
			{
				Manager_Input->OnGameEventInfo_Event.AddUObject(Coordinator_GameEvent, &UCsCoordinator_GameEvent::OnGameEventInfo_ManagerInput1);
				Manager_Input->OnPostProcessInput_Event.AddUObject(Coordinator_GameEvent, &UCsCoordinator_GameEvent::OnPostProcessInput_ManagerInput1);
			}
			else
			{
				checkf(0, TEXT("ACPlayerController::InitInputSystem: PlayerController: %s with ControllerId: %d is currently NOT supported."), *(GetName()), Id)
			}
		}
		// If a NET connection, for now just route to ManagerInput0.
		// TODO: See if this needs to be handled properly 
		else
		{
			Manager_Input->OnGameEventInfo_Event.AddUObject(Coordinator_GameEvent, &UCsCoordinator_GameEvent::OnGameEventInfo_ManagerInput0);
			Manager_Input->OnPostProcessInput_Event.AddUObject(Coordinator_GameEvent, &UCsCoordinator_GameEvent::OnPostProcessInput_ManagerInput0);
		}
	}
}

	// Mouse
#pragma region

void ACPlayerController::ShowMouseCursor()
{
	bShowMouseCursor = true;
}

#pragma endregion Mouse

#pragma endregion Input