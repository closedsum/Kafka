/// <reference path="../../../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Data
var NJsCPlayer = require('CImpl/Player/Skin/Data/Data_Player_Skin_DefaultImpl.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - class
/** @type {NJsCPlayer.NData.NSkin.NDefault.FImpl} */
var DataImplType = NJsCPlayer.NData.NSkin.NDefault.FImpl;

// "typedefs" - functions
var check = CommonLibrary.check;

// Globals

module.exports = class NJsCPlayer
{
    static NData = class NamespaceData
    {
        static NSkin = class NamespaceSkin
        {
            static NDefault = class NamespaceDefault
            {
                static NImpl = class NamespaceImpl
                {
                    static FInstance = class Instance
                    {
                        static /*string*/ GetName() { return "NJsCPlayer.NData.NSkin.NDefault.NImpl.FInstance"; }

                        static /*{NJsCPlayer.NData.NDefault.FImpl}*/ Construct()
                        {
                            let data = new DataImplType();
                            let inner = data.Inner;
                            // Mesh
                            {
                                let info = inner.MeshInfo;

                                info.Mesh.Path = '/Game/Characters/Mannequins/Meshes/SKM_Quinn_Simple.SKM_Quinn_Simple';

                                info.Location = new Vector.C({X: 0.0, Y: 0.0, Z: 0.0});
                                info.Rotation = new Rotator.C({Pitch: 0.0, Yaw: -90.0, Roll: 0.0});
                            }
                            // Material
                            {
                                let info = inner.MaterialInfo;

                                info.Materials.Paths.push('/Game/Characters/Mannequins/Materials/Instances/Quinn/MI_Quinn_01.MI_Quinn_01');
                                info.Materials.Paths.push('/Game/Characters/Mannequins/Materials/Instances/Quinn/MI_Quinn_02.MI_Quinn_02');
                            }
                            return data;
                        }
                    }
                }
            }
        }  
    }
};