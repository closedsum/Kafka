/// <reference path="../../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Data
var NJsCPlayer = require('CImpl/Player/Data/Data_PlayerImpl.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - class
/** @type {NJsCPlayer.NData.FImpl} */
var DataImplType = NJsCPlayer.NData.FImpl;

// "typedefs" - functions
var check = CommonLibrary.check;

// Globals

module.exports = class NJsCPlayer
{
    static NData = class NamespaceData
    {
        static NInstance = class NamespaceInstance
        {
            static FDefault = class Default
            {
                static /*string*/ GetName() { return "NJsCPlayer.NData.NInstance.FDefault"; }

                static /*{NJsCPlayer.NData.FImpl}*/ Construct()
                {
                    let data = new DataImplType();
                    let inner = data.Inner;
                    // Orientation
                    {
                        let info = inner.OrientationInfo;

                        info.bUseControllerRotationPitch = false;
                        info.bUseControllerRotationYaw = false;
                        info.bUseControllerRotationRoll = false;
                    }
                    // Movement
                    {
                        let info = inner.MovementInfo;

                        
                    }
                    // Visual - TODO: Move to separate Data
                    {
                        // Mesh
                        {
                            let info = inner.MeshInfo;

                            info.Mesh.Path = '/Game/Characters/Mannequins/Meshes/SKM_Quinn_Simple.SKM_Quinn_Simple';
                        }
                        // Material
                        {
                            let info = inner.MaterialInfo;

                            info.Materials.Paths.push('/Game/Characters/Mannequins/Materials/Instances/Quinn/MI_Quinn_01.MI_Quinn_01');
                            info.Materials.Paths.push('/Game/Characters/Mannequins/Materials/Instances/Quinn/MI_Quinn_02.MI_Quinn_02');
                        }
                    }
                    return data;
                }
            }
        }  
    }
};