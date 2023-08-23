/// <reference path="../../../Cs/custom_typings/Cs.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Core
/** @type {FJsCore} */
var FJsCore = require("Cs/Core.js");
// Library
var NJsCommon = require('Cs/Library/Library_Common.js');

// "typedefs" - class
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObject = CommonLibrary.IsValidObject;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsFunction = CommonLibrary.IsFunction;

// Constants
const INDEX_NONE = -1;

// Globals
/** @type {FJsCABP_Player_Test_01_Core} */
var Core = null;
/** @type {string} */
var ClassName = "FJsCABP_Player_Test_01";

/** @type {FJsCABP_Player_Test_01} */
var self = null;
/** @type {FJsCABP_Player_Test_01} */
var ClassType = null;

module.exports = class FJsCABP_Player_Test_01
{
    constructor()
    {
        /** @type {CScript_AnimInstance} */this.Ptr = null;

        /** */ this.Data = null;

        /** @type {Vector} */   this.Velocity = new Vector({X: 0.0, Y: 0.0, Z: 0.0});
        /** @type {number} */   this.GroundSpeed = 0.0;
        /** @type {boolean} */  this.bMove = false;
        /** @type {boolean} */  this.bFalling = false;

        this.NativeUpdate_fn = this.NativeUpdate_Internal;
    }

    Init(core, ptr)
    {
        let context = ClassName = ".Init";

        self = this;
        ClassType = FJsCABP_Player_Test_01;

        Core = core;
        IsValidObjectChecked(context, Core);

        this.Ptr = ptr;
        IsValidObjectChecked(context, this.Ptr);

        // Function re-assignment based on World
        let WorldLibrary = CsScriptLibrary_World;

        if (WorldLibrary.IsPlayInEditorPreview(Core.GetWorld()))
        {
            this.NativeUpdate_fn = this.NativeUpdate_Internal_PlayInEditorPreview;
        }

        // Bind to events
        this.Ptr.OnNativeUpdate_ScriptEvent.Add(ClassType.NativeUpdate);

        this.Ptr.SetBlendSpace1DByName('WalkRunBlendSpace', this.Data.GetWalkRunBlendSpace());
        this.Ptr.SetSequenceByName('IdleAnim', this.Data.GetIdleAnim());
        this.Ptr.SetSequenceByName('JumpAnim', this.Data.GetJumpAnim());
        this.Ptr.SetSequenceByName('FallAnim', this.Data.GetFallAnim());
        this.Ptr.SetSequenceByName('LandAnim', this.Data.GetLandAnim());
    }

    SetData(data)
    {
        this.Data = data;
    }

    Shutdown()
    {
        if (IsValidObject(this.Ptr) &&
            IsFunction(this.Ptr.OnNativeUpdate_ScriptEvent))
        {
            this.Ptr.OnNativeUpdate_ScriptEvent.Remove(ClassType.NativeUpdate);
        }

        this.Ptr = null;
    }

    static NativeUpdate(animInstance /*CScript_AnimInstance*/, deltaSeconds /*number*/)
    {
        if (self.Ptr === animInstance)
           self.NativeUpdate_fn(deltaSeconds);
    }

    NativeUpdate_Internal(deltaSeconds /*number*/)
    {
    }

    NativeUpdate_Internal_PlayInEditorPreview(deltaSeconds /*number*/)
    {
        // Velocity
        this.Velocity = this.Ptr.GetVector3dByName('Velocity');
        this.GroundSpeed = Vector.VSizeXY(this.Velocity);

        this.Ptr.SetFloatByName('GroundSpeed', this.GroundSpeed);

        // bMove
        const GROUND_SPEED_THRESHOLD = 3.0;

        this.bMove = this.GroundSpeed > GROUND_SPEED_THRESHOLD;
        this.Ptr.SetBoolByName('bMove', this.bMove);

        // bFalling
    }
};