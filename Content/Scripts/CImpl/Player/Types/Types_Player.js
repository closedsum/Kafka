// Copyright 2017-2023 Closed Sum Games, LLC. All Rights Reserved.
// MIT License: https://opensource.org/license/mit/
// Free for use and distribution: https://github.com/closedsum/core

/// <reference path="../../../typings/ue.d.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library

// Types
var SkeletalMeshTypes = require('Cs/Types/Types_SkeletalMesh.js');
var MaterialTypes = require('Cs/Material/Types_Material.js');
var AnimTypes = require('Cs/Animation/Types_Anim.js');

// "typedefs" - class

// "typedefs" - class
/** @type {NJsTypes.FSkeletalMesh} */
var FSkeletalMesh = SkeletalMeshTypes.FSkeletalMesh;
/** @type {NJsTypes.FTArrayMaterialInterface} */
var FTArrayMaterialInterface = MaterialTypes.FTArrayMaterialInterface;
/** @type {NJsTypes.FAnimBlueprint} */
var FAnimBlueprint = AnimTypes.FAnimBlueprint;
/** @type {NJsTypes.FAnimSequence} */
var FAnimSequence = AnimTypes.FAnimSequence;
/** @type {NJsTypes.FBlendSpace1D} */
var FBlendSpace1D = AnimTypes.FBlendSpace1D;

module.exports = class NJsCPlayer
{
    // Orientation
    static NOrientation = class NamespaceOrientation
    {
        static FInfo = class Info
        {
            constructor()
            {
                /** @type {boolean} */ this.bUseControllerRotationPitch = false;
                /** @type {boolean} */ this.bUseControllerRotationYaw = false;
                /** @type {boolean} */ this.bUseControllerRotationRoll = false;
            }

            /*boolean*/ UseControllerRotationPitch()    { return this.bUseControllerRotationPitch; }
            /*boolean*/ UseControllerRotationYaw()      { return this.bUseControllerRotationYaw; }
            /*boolean*/ UseControllerRotationRoll()     { return this.bUseControllerRotationRoll; }

            /**
             * @param {string}      context 
             * @returns {boolean}
             */
            /*boolean*/ IsValidChecked(context /*string*/)
            {
                return true;
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

                /** @type {number} */ this.RunSpeed = 1000.0;
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

            /*number*/  GetRunSpeed()                       { return this.RunSpeed; }

            /**
             * @param {string}      context 
             * @returns {boolean}
             */
            /*boolean*/ IsValidChecked(context /*string*/)
            {
                return true;
            }
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
            /*Rotator*/         GetRotation()   { return this.Rotation; }       

            /**
            * @param {string}       context
            * @returns {boolean} 
            */
            /*boolean*/ IsValidChecked(context /*string*/)
            {
                this.Mesh.IsValidChecked(context);
                return true;
            }

            Load()
            {
                let context = "NJsCPlayer.NMesh.FInfo";

                let SkeletalMeshLibrary = CsScriptLibrary_SkeletalMesh;

                let mesh = SkeletalMeshLibrary.LoadByStringPath(context, this.Mesh.Path);
                //IsValidObjectChecked(context, mesh);

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

            /**
             * @param {string}      context 
             * @returns {boolean}
             */
            /*boolean*/ IsValidChecked(context /*string*/)
            {
                this.Materials.IsValidChecked(context);
                return true;
            }

            Load()
            {
                let context = "NJsCPlayer.NMaterial.FInfo";

                let MaterialLibrary = CsScriptLibrary_Material;

                let result = MaterialLibrary.LoadByStringPaths(context, this.Materials.Paths);
                //check(result.$);

                this.Materials.Set(result.OutMaterials);
            }
        }
    }

    // Anim

    static NAnim  = class NamespaceAnim
    {
        static FInfo = class Info
        {
            constructor()
            {
                /** @type {NJsTypes.FAnimBlueprint} */  this.AnimBlueprint = new FAnimBlueprint();
                /** @type {NJsTypes.FBlendSpace1D} */   this.WalkRunBlendSpace = new FBlendSpace1D();
                /** @type {NJsTypes.FAnimSequence} */   this.IdleAnim = new FAnimSequence();
                /** @type {NJsTypes.FAnimSequence} */   this.JumpAnim = new FAnimSequence();
                /** @type {NJsTypes.FAnimSequence} */   this.FallAnim = new FAnimSequence();
                /** @type {NJsTypes.FAnimSequence} */   this.LandAnim = new FAnimSequence();
            }

            /*AnimBlueprintGeneratedClass*/ GetAnimClass()          { return this.AnimBlueprint.Get(); }
            /*BlendSpace1D*/                GetWalkRunBlendSpace()  { return this.WalkRunBlendSpace.Get(); }
            /*AnimSequence*/                GetIdleAnim()           { return this.IdleAnim.Get(); }
            /*AnimSequence*/                GetJumpAnim()           { return this.JumpAnim.Get(); }
            /*AnimSequence*/                GetFallAnim()           { return this.FallAnim.Get(); }
             /*AnimSequence*/               GetLandAnim()           { return this.LandAnim.Get(); }

            /**
             * @param {string}      context 
             * @returns {boolean}
             */
            /*boolean*/ IsValidChecked(context /*string*/)
            {
                this.AnimBlueprint.IsValidChecked(context);
                this.WalkRunBlendSpace.IsValidChecked(context);
                this.IdleAnim.IsValidChecked(context);
                this.JumpAnim.IsValidChecked(context);
                this.FallAnim.IsValidChecked(context);
                this.LandAnim.IsValidChecked(context);
                return true;
            }

            Load()
            {
                let context = "NJsCPlayer.NAnim.FInfo";

                let AnimInstanceLibrary = CsScriptLibrary_AnimInstance;

                /** @type {AnimBlueprintGeneratedClass} */
                let ac = AnimInstanceLibrary.LoadAndGetGeneratedClassByStringPath(context, this.AnimBlueprint.Path);
                this.AnimBlueprint.Set(ac);

                let BlendSpaceLibrary = CsScriptLibrary_BlendSpace;

                let bs = BlendSpaceLibrary.Load1DByStringPath(context, this.WalkRunBlendSpace.Path);
                this.WalkRunBlendSpace.Set(bs);

                let AnimSequenceLibrary = CsScriptLibrary_AnimSequence;

                let a = AnimSequenceLibrary.LoadByStringPath(context, this.IdleAnim.Path);
                this.IdleAnim.Set(a);
                a = AnimSequenceLibrary.LoadByStringPath(context, this.JumpAnim.Path);
                this.JumpAnim.Set(a);
                a = AnimSequenceLibrary.LoadByStringPath(context, this.FallAnim.Path);
                this.FallAnim.Set(a);
                a = AnimSequenceLibrary.LoadByStringPath(context, this.LandAnim.Path);
                this.LandAnim.Set(a);
            }
        }
    }

    // Camera
    static NCamera = class NamespaceCamera
    {
        static NBoom = class NamespaceBoom
        {
            static FInfo = class Info
            {
                constructor()
                {
                    /** @type {number} */   this.TargetArmLength = 400.0;
                    /** @type {boolean} */  this.bUsePawnControlRotation = true;
                }

                /*number*/  GetTargetArmLength()        { return this.TargetArmLength; }
                /*boolean*/ UsePawnControlRotation()    { return this.bUsePawnControlRotation; }

                /**
                * @param {string}      context 
                * @returns {boolean}
                */
                /*boolean*/ IsValidChecked(context /*string*/)
                {
                    return true;
                }
            }
        }

        static NFollow = class NamespaceFollow
        {
            static FInfo = class Info
            {
                constructor()
                {
                    /** @type {string} */   this.SocketName = "SpringEndpoint";
                    /** @type {boolean} */  this.bUsePawnControlRotation = false;
                }

                /*string*/  GetSocketName()             { return this.SocketName; }
                /*boolean*/ UsePawnControlRotation()    { return this.bUsePawnControlRotation; }

                /**
                * @param {string}      context 
                * @returns {boolean}
                */
                /*boolean*/ IsValidChecked(context /*string*/)
                {
                    return true;
                }
            }
        }

        static FInfo = class Info
        {
            constructor()
            {
                /** @type {NJsCPlayer.NCamera.NBoom.FInfo} */   this.BoomInfo = new NJsCPlayer.NCamera.NBoom.FInfo();
                /** @type {NJsCPlayer.NCamera.NFollow.FInfo} */ this.FollowInfo = new NJsCPlayer.NCamera.NFollow.FInfo();
            }

            /*NJsCPlayer.NCamera.NBoom.FInfo*/      GetBoomInfo()   { return this.BoomInfo; }
            /*NJsCPlayer.NCamera.NFollow.FInfo*/    GetFollowInfo() { return this.FollowInfo; }

            /**
             * @param {string}      context 
             * @returns {boolean}
             */
            /*boolean*/ IsValidChecked(context /*string*/)
            {
                this.GetBoomInfo().IsValidChecked(context);
                this.GetFollowInfo().IsValidChecked(context);
                return true;
            }
        }
    }
};