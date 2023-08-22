/// <reference path="../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

// Player
/// <reference path="../../../CImpl/Player/Types/Types_Player.ts">/>

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Types
var PlayerTypes = require('CImpl/Player/Types/Types_Player.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;
var FunctionLibrary = NJsFunction.FLibrary;

// "typedefs" - class
    // Player
/** @type {NJsCPlayer.NOrientation.FInfo} */
var OrientationInfoType = PlayerTypes.NOrientation.FInfo;
/** @type {NJsCPlayer.NMovement.FInfo} */
var MovementInfoType = PlayerTypes.NMovement.FInfo;
/** @type {NJsCPlayer.NCamera.FInfo} */
var CameraInfoType = PlayerTypes.NCamera.FInfo;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsValidObject = CommonLibrary.IsValidObject;
var IsClassChecked = CommonLibrary.IsClassChecked;

// Globals
/** @type {FJsCore} */
var Core = null;

var ClassName = "NJsCPlayer.NData.NDefault.FImpl"

module.exports = class NJsCPlayer
{
    static NData = class NamespaceData
    {
        static NDefault = class Default
        {
            static FImpl = class Impl
            {
                static FInner = class Inner
                {
                    constructor()
                    {
                        // Orientation
                        /** @type {NJsCPlayer.NOrientation.FInfo} */
                        this.OrientationInfo = new OrientationInfoType();
                        // Movement
                        /** @type {NJsCPlayer.NMovement.FInfo} */
                        this.MovementInfo = new MovementInfoType();    
                        // Camera
                        /** @type {NJsCPlayer.NCamera.FInfo} */
                        this.CameraInfo = new CameraInfoType();

                    }

                    Load()
                    {
                    }
                }

                constructor()
                {
                    /** @type {NJsCPlayer.NData.NDefault.FImpl.FInner} */
                    this.Inner = new NJsCPlayer.NData.NDefault.FImpl.FInner();
                }

                /*NJsCPlayer.NOrientation.FInfo*/   GetOrientationInfo() { return this.Inner.OrientationInfo; }
                /*NJsCPlayer.NMovement.FInfo*/      GetMovementInfo() { return this.Inner.MovementInfo; }

                // Camera

                /*NJsCPlayer.NCamera.FInfo*/    GetCameraInfo() { return this.Inner.CameraInfo; }

                /**
                * @param {string}       context
                * @returns {boolean} 
                */
                /*boolean*/ IsValidChecked(context /*string*/)
                {
                    this.GetOrientationInfo().IsValidChecked(context);
                    this.GetMovementInfo().IsValidChecked(context);
                    // Camera
                    this.GetCameraInfo().IsValidChecked(context);
                    return true;
                }

                Load()
                {
                    this.Inner.Load();
                }
            } 
        }
    }
};