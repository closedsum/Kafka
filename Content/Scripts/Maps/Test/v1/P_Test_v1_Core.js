/// <reference path="../../../Cs/custom_typings/Cs.ts">/>
// Game
/// <reference path="Game/Play/GamePlay_Hub.ts">/>
// Player
/// <reference path="../../CImpl/Player/PlayerPawn_Wrapper.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Core
/** @type {FJsCore} */
var FJsCore = require("Cs/Core.js");
// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');

// "typedefs" - class
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;
/** @type {FunctionLibrary} */
var FunctionLibrary = NJsFunction.FLibrary;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObject = CommonLibrary.IsValidObject;

module.exports = class FJsP_Hub_Core extends FJsCore
{
    constructor()
    {
        super();

        /** @type {NJsCGame.NPlay.FHub} */
       // this.GamePlayImpl_Wrapper = null;
        /** @type {NJsCPlayerPawn.FWrapper} */
        //this.PlayerPawn_Wrapper = null;
    }

    Shutdown()
    {
        //this.PlayerPawn_Wrapper.Shutdown();
        //this.GamePlayImpl_Wrapper.Shutdown();

        super.Shutdown();
    }

    /**
    * @returns {NJsCGame.NPlay.FHub}
    */
    ///*NJsCGame.NPlay.FHub*/ GetGamePlayImpl_Wrapper() { return this.GamePlayImpl_Wrapper; }

    /**
    * @returns {NJsCPlayerPawn.FWrapper} 
    */
    ///*NJsCPlayerPawn.FWrapper*/ GetPlayerPawn_Wrapper() { return this.PlayerPawn_Wrapper; }
};