/// <reference path="../../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
// Types
var PlayerTypes = require('CImpl/Player/Types/Types_Player.js');

// "typedefs" - library
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - class
/** @type {NJsCPlayer.NMesh.FInfo} */
var MeshInfoType = PlayerTypes.NMesh.FInfo;
/** @type {NJsCPlayer.NMaterial.FInfo} */
var MaterialInfoType = PlayerTypes.NMaterial.FInfo;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;

// Globals

var ClassName = "NJsCPlayer.NData.NSkin.NDefault.FImpl"

module.exports = class NJsCPlayer
{
    static NData = class NamespaceData
    {
        static NSkin = class NamespaceSkin
        {
            static NDefault = class NamespaceDefault
            {
                static FImpl = class Impl
                {
                    static FInner = class Inner
                    {
                        constructor()
                        {
                            // Mesh
                            /** @type {NJsCPlayer.NMesh.FInfo} */
                            this.MeshInfo = new MeshInfoType();
                            // Material
                            /** @type {NJsCPlayer.NMaterial.FInfo} */
                            this.MaterialInfo = new MaterialInfoType();
                        }

                        Load()
                        {
                            this.MeshInfo.Load();
                            this.MaterialInfo.Load();
                        }
                    }

                    constructor()
                    {
                        /** @type {NJsCPlayer.NData.NSkin.NDefault.FImpl.FInner} */
                        this.Inner = new NJsCPlayer.NData.NSkin.NDefault.FImpl.FInner();
                    }

                    /*SkeletalMesh*/ GetMesh() { return this.Inner.MeshInfo.Mesh.Get(); }
                    
                    /*MaterialInterface[]*/ GetMaterials() { return this.Inner.MaterialInfo.Materials.Get(); }

                    /*NJsCPlayer.NMesh.FInfo*/       GetMeshInfo()       { return this.Inner.MeshInfo; }
                    /*NJsCPlayer.NMaterial.FInfo*/   GetMaterialInfo()   { return this.Inner.MaterialInfo; }

                    /**
                    * @param {string}       context
                    * @returns {boolean} 
                    */
                    /*boolean*/ IsValidChecked(context /*string*/)
                    {
                        this.GetMeshInfo().IsValidChecked(context);
                        this.GetMaterialInfo().IsValidChecked(context);
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
};