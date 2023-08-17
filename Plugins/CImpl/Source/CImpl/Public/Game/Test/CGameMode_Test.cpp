// Copyright Studio Sai. All Rights Reserved.
#include "Game/Test/CGameMode_Test.h"
#include "CImpl.h"

// Game
#include "Game/Test/CGameState_Test.h"
// Player
#include "Player/CPlayerController.h"

ACGameMode_Test::ACGameMode_Test(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	//DefaultPawnClass = ADefaultPawn::StaticClass();
	PlayerControllerClass = ACPlayerController::StaticClass();
	//PlayerStateClass = APlayerState::StaticClass();
	GameStateClass = ACGameState_Test::StaticClass();
	//HUDClass = AHUD::StaticClass();
	//GameSessionClass = AGameSession::StaticClass();
	//SpectatorClass = ASpectatorPawn::StaticClass();
	//ReplaySpectatorPlayerControllerClass = APlayerController::StaticClass();
	//ServerStatReplicatorClass = AServerStatReplicator::StaticClass();
#if !WITH_EDITOR
	bUseSeamlessTravel = true;
#endif // #if !WITH_EDITOR
}