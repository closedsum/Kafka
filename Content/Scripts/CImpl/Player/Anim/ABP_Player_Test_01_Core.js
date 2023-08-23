/// <reference path="../../../Cs/custom_typings/Cs.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Core
/** @type {FJsCore} */
var FJsCore = require("Cs/Core.js");
// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Player
/** @type{NJsCPlayer.FPawn} */
var PlayerPawnType = require('CImpl/Player/PlayerPawn.js');

// "typedefs" - class
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;
/** @type {FunctionLibrary} */
var FunctionLibrary = NJsFunction.FLibrary;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObject = CommonLibrary.IsValidObject;

module.exports = class FJsCABP_Player_TEst_01_Core extends FJsCore
{
    constructor()
    {
        super();
    }

    Init()
    {
        super.Init();

        // Setup Managers
    }

    Shutdown()
    {
        super.Shutdown();
    }
};