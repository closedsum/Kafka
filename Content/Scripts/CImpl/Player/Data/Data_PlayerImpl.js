/// <reference path="../../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
// Types
var SkeletalMeshTypes = require('Cs/Types/Types_SkeletalMesh.js');
var MaterialTypes = require('Cs/Material/Types_Material.js');

// "typedefs" - library
var GameEventLibrary = CsScriptLibrary_GameEvent;

// "typedefs" - class
var CommonLibrary = NJsCommon.FLibrary;
var FunctionLibrary = NJsFunction.FLibrary;
/** @type {NJsTypes.FSkeletalMesh} */
var FSkeletalMesh = SkeletalMeshTypes.FSkeletalMesh;
/** @type {NJsTypes.FTArrayMaterialInterface} */
var FTArrayMaterialInterface = MaterialTypes.FTArrayMaterialInterface;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsValidObject = CommonLibrary.IsValidObject;
var IsClassChecked = CommonLibrary.IsClassChecked;

// Globals
/** @type {FJsCore} */
var Core = null;

var ClassName = "NJsCPlayer.NData.FImpl"

module.exports = class NJsCPlayer
{
    // Orientation
    static NOrientation = class NamepsaceOrientation
    {
        static FInfo = class Info
        {
            constructor()
            {
                /** @type {boolean} */ this.bUseControllerRotationPitch = false;
                /** @type {boolean} */ this.bUseControllerRotationYaw = false;
                /** @type {boolean} */ this.bUseControllerRotationRoll = false;
            }
        }
    }

    // Movement
    static NMovement = class NamespaceMovement
    {
        static FInfo = class Info
        {
            constructor()
            {
                // Character moves in the direction of input...
                /** @type {boolean} */ this.bOrientRotationToMovement = true; 
                 // ...at this rotation rate
                /** @type {Rotator} */ this.RotationRate = new Rotator.C({Pitch: 0.0, Yaw: 500.0, Roll: 0.0});

                /** @type {number} */ this.JumpZVelocity = 700.0;
                /** @type {number} */ this.AirControl = 0.35;
                /** @type {number} */ this.MaxWalkSpeed = 500.0;
                /** @type {number} */ this.MinAnalogWalkSpeed = 20.0;
                /** @type {number} */ this.BrakingDecelerationWalking = 2000.0;
                /** @type {number} */ this.GravityScale = 1.5;
                /** @type {number} */ this.MaxAcceleration = 1500.0;
                /** @type {number} */ this.BrakingFrictionFactor = 1.0;
                /** @type {boolean} */ this.bUseSeparateBrakingFriction = true;
            }

            /*boolean*/ ShouldOrientRotationToMovement()    { return this.bOrientRotationToMovement; }
            /*Rotator*/ GetRotationRate()                   { return this.RotationRate; }
            /*number*/  GetJumpZVelocity()                  { return this.JumpZVelocity; }
            /*number*/  GetAirControl()                     { return this.AirControl; }
            /*number*/  GetMaxWalkSpeed()                   { return this.MaxWalkSpeed; }
            /*number*/  GetMinAnalogWalkSpeed()             { return this.MinAnalogWalkSpeed; }
            /*number*/  GetBrakingDecelerationWalking()     { return this.BrakingDecelerationWalking; }
            /*number*/  GetGravityScale()                   { return this.GravityScale; }
            /*number*/  GetMaxAcceleration()                { return this.MaxAcceleration; }
            /*number*/  GetBrakingFrictionFactor()          { return this.BrakingFrictionFactor; }
            /*number*/  UseSeparateBrakingFriction()        { return this.bUseSeparateBrakingFriction; }
        }
    }

    // Visual: TODO: put in separate data
    static NMesh = class NamespaceMesh
    {
        static FInfo = class Info
        {
            constructor()
            {
                /** @type {NJsTypes.FSkeletalMesh} */ this.Mesh = new FSkeletalMesh();      
                // Relative Location
                /** @type {Vector} */ this.Location = new Vector.C({X: 0.0, Y:0.0, Z:0.0});
                // Relative Rotation
                /** @type {Rotator} */ this.Rotation = new Rotator.C({Pitch: 0.0, Yaw: 0.0, Roll: 0.0});
            }

            /*SkeletalMesh*/    GetMesh()       { return this.Mesh.Mesh_Internal; }
            /*Vector*/          GetLocation()   { return this.Location; }
            /*Rotator*/         Getrotation()   { return this.Rotation; }       

            Load()
            {
                let context = "NJsCPlayer.NMesh.FInfo";

                let SkeletalMeshLibrary = CsScriptLibrary_SkeletalMesh;

                let mesh = SkeletalMeshLibrary.LoadByStringPath(context, this.Mesh.Path);
                IsValidObjectChecked(context, mesh);

                this.Mesh.Set(mesh);
            }

            // GetPathsByDependencyGroup()
        }
    }

    static NMaterial = class NamespaceMaterial
    {
        static FInfo = class Info
        {
            constructor()
            {
                /** @type {NJsTypes.FTArrayMaterialInterface} */ this.Materials = new FTArrayMaterialInterface();
            }

            /*MaterialInterface[]*/ GetMaterials()  { return this.Materials.Materials_Internal; }

            Load()
            {
                let context = "NJsCPlayer.NMaterial.FInfo";

                let MaterialLibrary = CsScriptLibrary_Material;

                let result = MaterialLibrary.LoadByStringPaths(context, this.Materials.Paths);
                check(result.$);

                // TODO: array checks
                this.Materials.Set(result.OutMaterials);
            }
        }
    }

    // Anim: TODO: put in separate data

    static NData = class NamespaceData
    {
        static FImpl = class Impl
        {
            static FInner = class Inner
            {
                constructor()
                {
                    // Orientation
                    /** @type {NJsCPlayer.NOrientation.FInfo} */
                    this.OrientationInfo = new NJsCPlayer.NOrientation.FInfo();
                    // Movement
                    /** @type {NJsCPlayer.NMovement.FInfo} */
                    this.MovementInfo = new NJsCPlayer.NMovement.FInfo();
                    // Visual - TODO: Move to Separate Data
                    /** @type {NJsCPlayer.Mesh.FInfo} */
                    this.MeshInfo = new NJsCPlayer.NMesh.FInfo();
                    /** @type {NJsCPlayer.Material.FInfo} */
                    this.MaterialInfo = new NJsCPlayer.NMaterial.FInfo();
                }

                Load()
                {
                    this.MeshInfo.Load();
                    this.MaterialInfo.Load();
                }
            }

            constructor()
            {
                /** @type {NJsCPlayer.NData.FImpl.FInner} */
                this.Inner = new NJsCPlayer.NData.FImpl.FInner();
            }

            Load()
            {
                this.Inner.Load();
            }
        }  
    }
};