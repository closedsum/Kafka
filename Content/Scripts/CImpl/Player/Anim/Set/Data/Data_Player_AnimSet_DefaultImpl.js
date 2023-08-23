/// <reference path="../../../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
// Types
var PlayerTypes = require('CImpl/Player/Types/Types_Player.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - class
/** @type {NJsCPlayer.NAnim.FInfo} */
var AnimInfoType = PlayerTypes.NAnim.FInfo;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;

// Globals

var ClassName = "NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl"

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
                    static FImpl = class Impl
                    {
                        static FInner = class Inner
                        {
                            constructor()
                            {
                                /** @type {NJsCPlayer.NAnim.FInfo} */
                                this.AnimInfo = new AnimInfoType();
                            }

                            Load()
                            {
                                this.AnimInfo.Load();
                            }
                        }

                        constructor()
                        {
                            /** @type {NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl.FInner} */
                            this.Inner = new NJsCPlayer.NData.NAnim.NSet.NDefault.FImpl.FInner();
                        }

                        /*AnimBlueprintGeneratedClass*/ GetAnimClass()          { return this.Inner.AnimInfo.GetAnimClass(); }
                        /*BlendSpace1D*/                GetWalkRunBlendSpace()  { return this.Inner.AnimInfo.GetWalkRunBlendSpace(); }
                        /*AnimSequence*/                GetIdleAnim()           { return this.Inner.AnimInfo.GetIdleAnim(); }
                        /*AnimSequence*/                GetJumpAnim()           { return this.Inner.AnimInfo.GetJumpAnim(); }
                        /*AnimSequence*/                GetFallAnim()           { return this.Inner.AnimInfo.GetFallAnim(); }
                        /*AnimSequence*/                GetLandAnim()           { return this.Inner.AnimInfo.GetLandAnim(); }

                        /*NJsCPlayer.NAnim.FInfo*/      GetAnimInfo()   { return this.Inner.AnimInfo; }

                        /**
                        * @param {string}       context
                        * @returns {boolean} 
                        */
                        /*boolean*/ IsValidChecked(context /*string*/)
                        {
                            this.GetAnimInfo().IsValidChecked(context);
                            return true;
                        }

                        Load()
                        {
                            this.Inner.Load();
                        }
                    }
                }
            }
        }
    }
};