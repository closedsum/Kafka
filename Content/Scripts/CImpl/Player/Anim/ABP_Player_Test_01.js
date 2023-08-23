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

        // Bind to events
        this.Ptr.OnNativeUpdate_ScriptEvent.Add(ClassType.NativeUpdate);
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
           self.NativeUpdate_Internal(deltaSeconds);
    }

    NativeUpdate_Internal(deltaSeconds /*number*/)
    {
        let c = this.Ptr.GetOwningComponent()
    }
};