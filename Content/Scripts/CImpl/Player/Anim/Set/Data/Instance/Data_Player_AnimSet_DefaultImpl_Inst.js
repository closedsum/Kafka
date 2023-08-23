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
                        static FInstance = class Instance
                        {
                            static /*string*/ GetName() { return "NJsCPlayer.NData.NAnim.NSet.NDefault.NImpl.FInstance"; }

                            static /*{NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl}*/ Construct()
                            {
                                let data = new DataImplType();
                                let inner = data.Inner;
                                
                                // Anim
                                {
                                    let info = inner.AnimInfo;

                                    info.AnimBlueprint.Path = '/Game/Characters/Mannequins/Animations/ABP_Quinn.ABP_Quinn';
                                }
                                return data;
                            }
                        }
                    }
                }
            }
        }  
    }
};