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
                    static NInstance = class namespaceInstance
                    {
                        static FFrank_Warrior = class Frank_Warrior
                        {
                            static /*string*/ GetName() { return "NJsCPlayer.NData.NSkin.NDefault.NImpl.NInstance.FFrank_Warrior"; }

                            static /*{NJsCPlayer.NData.NSkin.NDefault.FImpl}*/ Construct()
                            {
                                let data = new DataImplType();
                                let inner = data.Inner;
                                // Mesh
                                {
                                    let info = inner.MeshInfo;

                                    info.Mesh.Path = '/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Skeletal_Meshes/SK_Frank_RPG_Warrior.SK_Frank_RPG_Warrior';

                                    info.Location = new Vector.C({X: 0.0, Y: 0.0, Z: 0.0});
                                    info.Rotation = new Rotator.C({Pitch: 0.0, Yaw: -90.0, Roll: 0.0});
                                }
                                // Material
                                {
                                    let info = inner.MaterialInfo;

                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_Body.M_Frank_Warrior_Body');
                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_Body_Face.M_Frank_Warrior_Body_Face');
                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_Sword.M_Frank_Warrior_Sword');
                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_Glow.M_Frank_Warrior_Glow');
                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_Shield.M_Frank_Warrior_Shield');
                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_Body_Parts.M_Frank_Warrior_Body_Parts');
                                    info.Materials.Paths.push('/Game/Packs/Anim/FrankClimax/Frank_Slash_Pack/Frank_Warrior/Materials/M_Frank_Warrior_FX_Slash.M_Frank_Warrior_FX_Slash');
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