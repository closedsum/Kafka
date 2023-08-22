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
var NJsCPlayer = require('CImpl/Player/PlayerPawn.js');
// Data
    // Player
var NJsCPlayer1 = require('CImpl/Player/Data/Instance/Data_Player_DefaultImpl_Inst.js');
var NJsCPlayer2 = require('CImpl/Player/Skin/Data/Instance/Data_Player_Skin_DefaultImpl_Inst.js');
var NJsCPlayer3 = require('CImpl/Player/Anim/Set/Data/Instance/Data_Player_AnimSet_DefaultImpl_Inst.js');

// "typedefs" - classes
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;
/** @type {NJsCPlayer.FPawn} */
var PlayerPawnType = NJsCPlayer.FPawn;
    // Data
/** @type {NJsCPlayer.NData.NDefault.NImpl.FInstance} */
var Data_Player = NJsCPlayer1.NData.NDefault.NImpl.FInstance;
/** @type {NJsCPlayer.NData.NSkin.NDefault.NImpl.FInstance} */
var Data_Player_Skin = NJsCPlayer2.NData.NSkin.NDefault.NImpl.FInstance;
/** @type {NJsCPlayer.NData.NAnim.NSet.NDefault.NImpl.FInstance} */
var Data_Player_AnimSet = NJsCPlayer3.NData.NAnim.NSet.NDefault.NImpl.FInstance;

// "typedefs" - functions
var checkf = CommonLibrary.checkf;
var IsNullObject = CommonLibrary.IsNullObject;
var IsValidObject = CommonLibrary.IsValidObject;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsIntChecked = CommonLibrary.IsIntChecked;

// Constants
const INDEX_NONE = -1;

// Globals
var FileShortName = "P_Test_v1";
/** @type {FJsP_Test_v1_Core} */
var Core = new FJsCCore();
/** @type {number} */
var ScriptIndex = -1;

function compile(source) 
{
    return require('uclass')()(global,source)
}

function main()
{
    let context = "Entry Point - " + FileShortName;
    console.log(context);

    let isScriptReload = Manager_Javascript.IsScriptReload();

    if (isScriptReload)
    {
        purge_modules();
        gc();
    }

    ScriptIndex = Manager_Javascript.GetCurrentScriptIndex();
    IsIntChecked(context, ScriptIndex);

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
    Core.Manager_Javascript = Manager_Javascript;
    Core.GameState = GameState;
    Core.PlayerController = PlayerController;
    Core.PlayerState = PlayerState;
    //Core.PlayerPawn = PlayerPawn;
    Core.Script.Index = ScriptIndex;

    Core.Init();
    
    //Core.GamePlayImpl_Wrapper = new GamePlayImplWrapperType();

    CompileClasses();

    //Core.PlayerPawn_Wrapper = new PlayerPawnWrapperType();

    //let gs = CGameState.C(GameState);

    CreateAndLoadData();

    // Delegates

        // Bind to startup related events
    //gs.OnCreateGamePlayImpl_ScriptEvent.Add(OnCreateGamePlayImpl);
    //gs.OnCreateAndOrSetPlayer_ScriptEvent.Add(OnCreateAndOrSetPlayer);

    //PlayerPawn.OnStartUp_Complete_ScriptEvent.Add(PlayerPawn_OnStartUp_Complete);

        // Bind to shutdown related events
    let edEngine = CsEdEngine.C(GEngine);
    if (edEngine !== null)
        edEngine.OnEndPIE_Last_ScriptEvent.Add(OnEndPIE);

        // Bind to reload events
    Manager_Javascript.OnPreReloadScript_ScriptEvent.Add(OnPreReloadScript);

    //gs.OnShutdown_ScriptEvent.Add(OnShutdown);

    if (!isScriptReload)
        FirstInit();

    // Player
    {
        let CharacterLibrary = CsScriptLibrary_Character

        let tags = [];
        tags.push("script-" + ScriptIndex);
        tags.push("player");
        tags.push("pawn");
        
        let c = CharacterLibrary.GetByTags(context, Core.GetWorld(), tags);
        IsValidObjectChecked(context, c);

        Core.PlayerPawn = c;

        /** @type{NJsCPlayer.FPawn} */ let pp = new PlayerPawnType();

        let manager_data = Core.GetScript().GetManager_Data();

        // TODO: Check data is Valid

        let data = manager_data.GetData(Data_Player.GetName());
        pp.SetData(data);

        let skinData = manager_data.GetData(Data_Player_Skin.GetName());
        pp.SetSkinData(skinData);

        let animSetData = manager_data.GetData(Data_Player_AnimSet.GetName());
        pp.SetAnimSetData(animSetData);
        
        pp.Init(Core, Core.GetPlayerPawn(), isScriptReload);

        Core.PlayerPawnWrapper = pp;
    }
}

main();

function GetExcuteFilePath() { return 'Maps/Test/v1/P_Test_v1.js'; }

function CompileClasses()
{
    let uc = null;
}

function CreateAndLoadData()
{
    let context = FileShortName + ".CreateAndLoadData";
    //console.log(context);

    let manager_data = Core.GetScript().GetManager_Data();

    // Create
    {
        // Player
        {
            manager_data.AddData(Data_Player.GetName(), Data_Player.Construct());
            manager_data.AddData(Data_Player_Skin.GetName(), Data_Player_Skin.Construct());
            manager_data.AddData(Data_Player_AnimSet.GetName(), Data_Player_AnimSet.Construct());
        }
    }
    // Load
    manager_data.LoadAll();
}

function OnUpdate(group, deltaTime)
{
    Core.CoroutineScheduler.Update(group, deltaTime);
}

function FirstInit()
{
    let context = FileShortName + ".FirstInit";
    //console.log(context);

    let CharacterLibrary = CsScriptLibrary_Character;

    /** @type{Character}*/ let c = CharacterLibrary.Spawn(context, Core.GetWorld());
    
    let tags = [];
    tags.push("script-" + ScriptIndex);
    tags.push("player");
    tags.push("pawn");

    c.Tags = tags;
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
    console.log("Shutdown: " + FileShortName);
    
    if (Manager_Time !== null)
        Manager_Time.OnUpdate_ScriptEvent.Remove(OnUpdate);

    let edEngine = CsEdEngine.C(GEngine);
    if (edEngine !== null)
        edEngine.OnEndPIE_Last_ScriptEvent.Remove(OnEndPIE);

    if (Manager_Javascript !== null)
        Manager_Javascript.OnPreReloadScript_ScriptEvent.Remove(OnPreReloadScript);

    Core.Shutdown();
    Core = null;
}

function OnPreReloadScript(index)
{
    if (ScriptIndex == index)
    {
        console.log("OnPreReloadScript: " + FileShortName);

        Core.OnPreReloadScript(index);
        Shutdown();
    }
}

function CleanUp()
{
    console.log("Clean Up");
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
