/// <reference path="../../../CImpl/custom_typings/CImpl.ts">/>
/// <reference path="P_Test_v1_Core.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

var FJsCCore = require('Maps/Test/v1/P_Test_v1_Core.js');
// Coroutine
var FJsCoroutineScheduler = require('Cs/Coroutine/CoroutineScheduler.js');
// Types
var Types_Coroutine = require('Cs/Coroutine/Types_Coroutine.js');
// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Game
//var NJsCGame1 = require('Maps/Hub/Game/Play/GamePlay_Hub.js');
// Player
//var NJsCPlayerPawn1 = require('CImpl/Player/PlayerPawn_Wrapper.js');

// "typedefs" - classes
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;
/** @type {FunctionLibrary} */
var FunctionLibrary = NJsFunction.FLibrary;
/** @type {NJsCGame.NPlay.FHub} */
//var GamePlayImplWrapperType = NJsCGame1.NPlay.FHub;
/** @type {NJsCPlayerPawn.FWrapper} */
//var PlayerPawnWrapperType = NJsCPlayerPawn1.FWrapper;

// "typedefs" - functions
var checkf = CommonLibrary.checkf;
var IsNullObject = CommonLibrary.IsNullObject;
var IsValidObject = CommonLibrary.IsValidObject;

// Globals
/** @type {FJsP_Test_v1_Core} */
var Core = new FJsCCore();

function compile(source) 
{
    return require('uclass')()(global,source)
}

function main()
{
    console.log("Entry Point - P_Test_v1");

    let context = "Entry Point - P_Test_v1";

    // Create Coroutine Scheduler
    var CoroutineScheduler = new FJsCoroutineScheduler();

    Core.CoroutineScheduler = CoroutineScheduler;
    // Add hook to native Update
    Manager_Time.OnUpdate_ScriptEvent.Add(OnUpdate);

    // Setup Core
    Core.GameInstance = GameInstance;
    Core.Manager_Time = Manager_Time;
    Core.Coordinator_GameEvent = Coordinator_GameEvent;
    Core.World = World;
    Core.GameState = GameState;
    Core.PlayerController = PlayerController;
    Core.PlayerState = PlayerState;
    //Core.PlayerPawn = PlayerPawn;

    //Core.GamePlayImpl_Wrapper = new GamePlayImplWrapperType();

    CompileClasses();

    //Core.PlayerPawn_Wrapper = new PlayerPawnWrapperType();

    //let gs = CGameState.C(GameState);

    // Delegates

        // Bind to startup related events
    //gs.OnCreateGamePlayImpl_ScriptEvent.Add(OnCreateGamePlayImpl);
    //gs.OnCreateAndOrSetPlayer_ScriptEvent.Add(OnCreateAndOrSetPlayer);

    //PlayerPawn.OnStartUp_Complete_ScriptEvent.Add(PlayerPawn_OnStartUp_Complete);

        // Bind to shutdown related events
    let edEngine = CsEdEngine.C(GEngine);
    if (edEngine !== null)
        edEngine.OnEndPIE_Last_ScriptEvent.Add(OnEndPIE);

    //gs.OnShutdown_ScriptEvent.Add(OnShutdown);
}

main();

function CompileClasses()
{
    let uc = null;
}

function OnUpdate(group, deltaTime)
{
    Core.CoroutineScheduler.Update(group, deltaTime);
}

function OnCreateGamePlayImpl(gamePlayImpl)
{
    Core.GamePlayImpl_Wrapper.Init(Core, gamePlayImpl);
}

function OnCreateAndOrSetPlayer(playerPawn)
{
    Core.PlayerPawn = playerPawn;
}

function PlayerPawn_OnStartUp_Complete(playerPawn)
{
    Core.PlayerPawn_Wrapper.Init(Core, playerPawn);
}

function OnEndPIE(IsSimulating)
{
    Shutdown();
}

function OnShutdown()
{
    Shutdown();
}

function Shutdown()
{
    console.log("Shutdown: P_Hub");
    
    let edEngine = CsEdEngine.C(GEngine);
    if (edEngine !== null)
        edEngine.OnEndPIE_Last_ScriptEvent.Remove(OnEndPIE);

    Core.Shutdown();
    Core = null;
}

function CleanUp()
{
    console.log("Clean Up");
    
    //MyGameState.DoPerformCleanUpOnEditorJavascriptFile = false;
    //MyGameState.IsRunningEditorJavascriptFile          = false;
}

// bootstrap to initiate live-reloading dev env.
/*
try {
    module.exports = () => {
        let cleanup = null

        // wait for map to be loaded.
        process.nextTick(() => cleanup = main());

        // live-reloadable function should return its cleanup function
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('Mbo/EntryPoint_Game')
}
*/
