/// <reference path="../../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Data
var NJsCPlayer = require('CImpl/Player/Data/Data_Player_DefaultImpl.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - class
/** @type {NJsCPlayer.NData.NDefault.FImpl} */
var DataImplType = NJsCPlayer.NData.NDefault.FImpl;

// "typedefs" - functions
var check = CommonLibrary.check;

// Globals

module.exports = class NJsCPlayer
{
    static NData = class NamespaceData
    {
        static NDefault = class NamespaceDefault
        {
            static NImpl = class NamespaceImpl
            {
                static FInstance = class Instance
                {
                    static /*string*/ GetName() { return "NJsCPlayer.NData.NDefault.NImpl.FInstance"; }

                    static /*{NJsCPlayer.NData.NDefault.FImpl}*/ Construct()
                    {
                        let data = new DataImplType();
                        let inner = data.Inner;
                        // Orientation
                        {
                            let info = inner.OrientationInfo;

                            info.bUseControllerRotationPitch = false;
                            info.bUseControllerRotationYaw = true;
                            info.bUseControllerRotationRoll = false;
                        }
                        // Movement
                        {
                            let info = inner.MovementInfo;

                            info.bOrientRotationToMovement = true; 
                            info.RotationRate = new Rotator.C({Pitch: 0.0, Yaw: 500.0, Roll: 0.0});
                            info.JumpZVelocity = 700.0;
                            info.AirControl = 0.35;
                            info.MaxWalkSpeed = 500.0;
                            info.MinAnalogWalkSpeed = 20.0;
                            info.BrakingDecelerationWalking = 2000.0;
                            info.GravityScale = 1.5;
                            info.MaxAcceleration = 1500.0;
                            info.BrakingFrictionFactor = 1.0;
                            info.bUseSeparateBrakingFriction = true;

                            info.RunSpeed = 1000.0;
                        }
                        // Camera
                        {
                            let info = inner.CameraInfo;

                            info.BoomInfo.TargetArmLength = 400.0;
                            info.BoomInfo.bUsePawnControlRotation = true;

                            info.FollowInfo.SocketName = "SpringEndpoint";
                            info.FollowInfo.bUsePawnControlRotation = false;
                        }
                        return data;
                    }
                }
            }
        }  
    }
};