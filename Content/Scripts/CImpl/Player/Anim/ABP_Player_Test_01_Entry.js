/// <reference path="../../../CImpl/custom_typings/CImpl.ts">/>
/// <reference path="ABP_Player_Test_01_Core.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

var FJsCCore = require('CImpl/Player/Anim/ABP_Player_Test_01_Core.js');
// Coroutine
var FJsCoroutineScheduler = require('Cs/Coroutine/CoroutineScheduler.js');
// Types
var Types_Coroutine = require('Cs/Coroutine/Types_Coroutine.js');
// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');

// "typedefs" - classes
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - functions
var checkf = CommonLibrary.checkf;
var IsNullObject = CommonLibrary.IsNullObject;
var IsValidObject = CommonLibrary.IsValidObject;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsIntChecked = CommonLibrary.IsIntChecked;

// Constants
const INDEX_NONE = -1;

// Globals
var FileShortName = "ABP_Player_Test_01_Entry";
/** @type {FJsCABP_Player_Test_01_Core} */
var Core = new FJsCCore();

function compile(source) 
{
    return require('uclass')()(global,source)
}

function main()
{
    let context = "Entry Point - " + FileShortName;
    console.log(context);

    purge_modules();
    gc();

    // Create Coroutine Scheduler
    var CoroutineScheduler = new FJsCoroutineScheduler();

    Core.CoroutineScheduler = CoroutineScheduler;
    // Add hook to native Update
    Manager_Time.OnUpdate_ScriptEvent.Add(OnUpdate);

    // Setup Core
    Core.ScriptOuter = ScriptOuter;
    //Core.GameInstance = GameInstance;
    Core.Manager_Time = Manager_Time;
    //Core.Coordinator_GameEvent = Coordinator_GameEvent;
    Core.World = World;
    Core.Manager_Javascript = Manager_Javascript;
    //Core.GameState = GameState;
    //Core.PlayerController = PlayerController;
    //Core.PlayerState = PlayerState;
    //Core.PlayerPawn = PlayerPawn;

    Core.Init();
    CompileClasses();

    //CreateAndLoadData();

    // Delegates

        // Bind to startup related events

        // Bind to shutdown related events
    let ac = CScript_AnimInstance.C(Core.GetScriptOuter());
    ac.OnBeginDestroy_ScriptEvent.Add(OnBeginDestroy);

    let edEngine = CsEdEngine.C(GEngine);
    if (edEngine !== null)
        edEngine.AnimationEvent_OnInit_ScriptEvent.Add(AnimationEvent_OnInit);
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
}

function OnUpdate(group, deltaTime)
{
    Core.CoroutineScheduler.Update(group, deltaTime);
}

function AnimationEvent_OnInit(animInstance)
{
    let context = FileShortName + ".AnimationEvent_OnInit";
    console.log(context);
    
    if (IsValidObject(Core))
    {
        let ObjectLibrary = CsScriptLibrary_Object;

        if (ObjectLibrary.IsNullOrPendingKill(Core.GetScriptOuter()))
        {
            Shutdown();
        }
        else
        {
            let ida = ObjectLibrary.DOb_GetUniqueID(context, Core.GetScriptOuter());
            let idb = ObjectLibrary.DOb_GetUniqueID(context, animInstance);

            if (ida === idb)
            {
                Shutdown();
            }
        }
    }
}

function OnBeginDestroy(animInstance)
{
    let context = FileShortName + ".OnBeginDestroy";
    console.log(context);
    
    if (IsValidObject(Core))
    {
        let ObjectLibrary = CsScriptLibrary_Object;

        if (ObjectLibrary.IsNullOrPendingKill(Core.GetScriptOuter()))
        {
            Shutdown();
        }
        else
        {
            let ida = ObjectLibrary.DOb_GetUniqueID(context, Core.GetScriptOuter());
            let idb = ObjectLibrary.DOb_GetUniqueID(context, animInstance);

            if (ida === idb)
            {
                Shutdown();
            }
        }
    }
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

    let ObjectLibrary = CsScriptLibrary_Object;

    let ac = Core.GetScriptOuter();

    if (!ObjectLibrary.IsNullOrPendingKill(ac))
        ac.OnBeginDestroy_ScriptEvent.Remove(OnBeginDestroy);

    let edEngine = CsEdEngine.C(GEngine);
    if (edEngine !== null)
        edEngine.AnimationEvent_OnInit_ScriptEvent.Remove(AnimationEvent_OnInit);

    Core.Shutdown();
    Core = null;
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
