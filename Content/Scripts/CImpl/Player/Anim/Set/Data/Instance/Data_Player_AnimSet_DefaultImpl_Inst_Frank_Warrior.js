/// <reference path="../../../../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Data
var NJsCPlayer = require('CImpl/Player/Anim/Set/Data/Data_Player_AnimSet_DefaultImpl.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - class
/** @type {NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl} */
var DataImplType = NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl;

// "typedefs" - functions
var check = CommonLibrary.check;

// Globals

module.exports = class NJsCPlayer
{
    static NData = class NamespaceData
    {
        static NAnim = class NamespaceAnim
        {
            static NSet = class NamespaceSet
            {
                static NDefault = class NamespaceDefault
                {
                    static NImpl = class NamespaceImpl
                    {
                        static NInstance = class NamespaceInstance
                        {
                            static FFrank_Warrior = class Frank_Warrior
                            {
                                static /*string*/ GetName() { return "NJsCPlayer.NData.NAnim.NSet.NDefault.NImpl.NInstance.FFrank_Warrior"; }

                                static /*{NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl}*/ Construct()
                                {
                                    let data = new DataImplType();
                                    let inner = data.Inner;
                                    
                                    // Anim
                                    {
                                        let info = inner.AnimInfo;

                                        info.AnimBlueprint.Path = '/Game/Core/Player/Anim/Frank_Warrior/ABP_Player_Frank_Warrior.ABP_Player_Frank_Warrior';
                                        info.WalkRunBlendSpace.Path = '/Game/Characters/Mannequins/Animations/Manny/BS_MM_WalkRun.BS_MM_WalkRun';
                                        info.IdleAnim.Path = '/Game/Characters/Mannequins/Animations/Manny/MM_Idle.MM_Idle';
                                        info.JumpAnim.Path = '/Game/Characters/Mannequins/Animations/Manny/MM_Jump.MM_Jump';
                                        info.FallAnim.Path = '/Game/Characters/Mannequins/Animations/Manny/MM_Fall_Loop.MM_Fall_Loop';
                                        info.LandAnim.Path = '/Game/Characters/Mannequins/Animations/Manny/MM_Land.MM_Land';
                                    }
                                    return data;
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
};