/// <reference path="../../Cs/Core.ts">/>
// Game
/// <reference path="../../Maps/Hub/Game/Play/GamePlay_Hub.ts">/>
// ; typing info for auto-completion in Visual Studio Code

// require('Maps/Hub/Game/Play/GamePlay_Hub.js');

declare class FJsP_Hub_Core extends FJsCore {
    GamePlayImpl_Wrapper: NJsCGame.NPlay.FHub;
    PlayerPawn_Wrapper: NJsCPlayerPawn.FWrapper;
    Shutdown(): void;
    GetGamePlayImpl_Wrapper(): NJsCGame.NPlay.FHub;
    GetPlayerPawn_Wrapper(): NJsCPlayerPawn.FWrapper;
}