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
// Data
var NJsCPlayer = require('CImpl/Player/Anim/Set/Data/Instance/Data_Player_AnimSet_DefaultImpl_Inst.js');
// Anim
var AnimInstanceType = require('CImpl/Player/Anim/ABP_Player_Test_01.js');


// "typedefs" - classes
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;
    // Data
/** @type {NJsCPlayer.NData.NAnim.NSet.NDefault.NImpl.FInstance} */
var Data_Player_AnimSet = NJsCPlayer.NData.NAnim.NSet.NDefault.NImpl.FInstance;

// "typedefs" - functions
var checkf = CommonLibrary.checkf;
var IsNullObject = CommonLibrary.IsNullObject;
var IsValidObject = CommonLibrary.IsValidObject;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsClass = CommonLibrary.IsClass;
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

    let ObjectLibrary = CsScriptLibrary_Object;

    // Setup Core
    Core.ScriptOuter = ScriptOuter;
    Core.ScriptOuterId = IsValidObject(ScriptOuter) ? ObjectLibrary.Object_GetUniqueID(context, ScriptOuter) : INDEX_NONE;
    //Core.GameInstance = GameInstance;
    Core.Manager_Time = Manager_Time;
    //Core.Coordinator_GameEvent = Coordinator_GameEvent;
    Core.World = World;
    Core.Manager_Javascript = Manager_Javascript;
    //Core.GameState = GameState;
    //Core.PlayerController = PlayerController;
    //Core.PlayerState = PlayerState;
    //Core.PlayerPawn = PlayerPawn;
    Core.Script.Index = Manager_Javascript.CurrentEditorScriptIndex;
    Core.Script.Id    = Manager_Javascript.CurrentEditorScriptId;

    Core.Init();
    CompileClasses();

    CreateAndLoadData();

    // Delegates

        // Bind to startup related events

        // Bind to shutdown related events
    Manager_Javascript.EditorScript_OnShutdown_ScriptEvent.Add(OnShutdown);

    let ac = CScript_AnimInstance.C(Core.GetScriptOuter());
    ac.OnBeginDestroy_ScriptEvent.Add(OnBeginDestroy);

    let edEngine = CEdEngine.C(GEngine);
    if (edEngine !== null)
    {
        edEngine.AnimationEvent_OnInit_ScriptEvent.Add(AnimationEvent_OnInit);
        edEngine.AssetEditor_OnRequest_Close_ScriptEvent.Add(AssetEditor_OnRequest_Close);
    }

    // TODO: Check World to see if the AnimInstance sould be found from the Player;

    // AnimInstance
    {
        let ai = new AnimInstanceType();

        // TODO: Check data is Valid
        let manager_data = Core.GetScript().GetManager_Data();
        
        let animSetData = manager_data.GetData(Data_Player_AnimSet.GetName());

        ai.SetData(animSetData)
        ai.Init(Core, ac);

        Core.GetScript().AddObject(ai);
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

function AnimationEvent_OnInit(animInstance)
{
    let context = FileShortName + ".AnimationEvent_OnInit";
    console.log(context);
    
    CheckAndTryShutdown(context, animInstance);
}

function AssetEditor_OnRequest_Close(asset, reason)
{
    let context = FileShortName + ".AssetEditor_OnRequest_Close";
    console.log(context);

    let bp = Blueprint.C(asset);

    if (IsValidObject(bp))
    {  
        let BlueprintLibrary = CsScriptLibrary_Blueprint;

        let bgc = BlueprintLibrary.GetGeneratedClass(context, bp);

        if (IsClass(bgc) &&
            IsValidObject(bgc.GetDefaultObject()))
        {
            CheckAndTryShutdown(context, bgc.GetDefaultObject());
        }
    }
}

function OnBeginDestroy(animInstance)
{
    let context = FileShortName + ".OnBeginDestroy";
    console.log(context);
    
    CheckAndTryShutdown(context, animInstance);
}

function CheckAndTryShutdown(context, o)
{
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
            let idb = ObjectLibrary.DOb_GetUniqueID(context, o);

            if (ida === idb)
            {
                Shutdown();
            }
        }
    }
}

function OnShutdown(id)
{
    let context = FileShortName + ".OnShutdown";
    console.log(context);

    if (IsValidObject(Core) &&
        Guid.EqualEqual_GuidGuid(Core.GetScript().GetId(), id))
    {        
        Shutdown();
    }
}

function Shutdown()
{
    console.log("Shutdown: " + FileShortName);
    
    if (Manager_Time !== null)
        Manager_Time.OnUpdate_ScriptEvent.Remove(OnUpdate);

    if (Manager_Javascript !== null)
        Manager_Javascript.EditorScript_OnShutdown_ScriptEvent.Remove(OnShutdown);

    let ObjectLibrary = CsScriptLibrary_Object;

    let ac = Core.GetScriptOuter();

    if (!ObjectLibrary.IsNullOrPendingKill(ac))
        ac.OnBeginDestroy_ScriptEvent.Remove(OnBeginDestroy);

    let edEngine = CEdEngine.C(GEngine);
    if (edEngine !== null)
    {
        edEngine.AnimationEvent_OnInit_ScriptEvent.Remove(AnimationEvent_OnInit);
        edEngine.AssetEditor_OnRequest_Close_ScriptEvent.Remove(AssetEditor_OnRequest_Close);
    }

    Core.Shutdown();
    Core = null;
}

function CleanUp()
{
    console.log("Clean Up");
}