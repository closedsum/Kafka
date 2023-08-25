/// <reference path="../../../../Cs/custom_typings/Cs.ts">/>
// ; typing info for auto-completion in Visual Studio Code
// Player
/// <reference path="../../../../CImpl/Player/Types/Types_Player.ts">/>

"use strict"

// Core
/** @type {FJsCore} */
var FJsCore = require("Cs/Core.js");
// Library
var NJsCommon = require('Cs/Library/Library_Common.js');

// "typedefs" - class
/** @type {CommonLibrary} */
var CommonLibrary = NJsCommon.FLibrary;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObject = CommonLibrary.IsValidObject;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsFunction = CommonLibrary.IsFunction;

// Constants
const INDEX_NONE = -1;

// Globals
/** @type {FJsCABP_Player_Frank_Warrior_Core} */
var Core = null;
/** @type {string} */
var ClassName = "FJsCABP_Player_Frank_Warrior";

/** @type {FJsCABP_Player_Frank_Warrior} */
var self = null;
/** @type {FJsCABP_Player_Frank_Warrior} */
var ClassType = null;

module.exports = class FJsCABP_Player_Frank_Warrior
{
    constructor()
    {
        /** @type {CScript_AnimInstance} */this.Ptr = null;

    // Owner

        /** @type {Character} */        this.OwnerAsCharacter = null;
        /** @type {CameraComponent} */  this.CameraComponent = null;

    // Data

        /** */ this.Data = null;
        /** */ this.AnimSetData = null;

        /** @type {Vector} */   this.Velocity = new Vector({X: 0.0, Y: 0.0, Z: 0.0});
        /** @type {Vector} */   this.MoveDirection = new Vector({X: 0.0, Y: 0.0, Z: 0.0});
        /** @type {number} */   this.GroundSpeed = 0.0;
        /** @type {boolean} */  this.bMove = false;
        /** @type {number} */   this.ForwardBack = 0.0;
        /** @type {number} */   this.LeftRight = 0.0;
        /** @type {boolean} */  this.bFalling = false;

        /** @type {Vector} */   this.LookForward2D = new Vector({X: 0.0, Y: 0.0, Z: 0.0});

        this.NativeUpdate_fn = this.NativeUpdate_Internal;
    }

    Init(core, ptr)
    {
        let context = ClassName = ".Init";

        self = this;
        ClassType = FJsCABP_Player_Test_01;

        Core = core;
        IsValidObjectChecked(context, Core);

        this.Ptr = ptr;
        IsValidObjectChecked(context, this.Ptr);

        // Function re-assignment based on World
        let WorldLibrary = CsScriptLibrary_World;

        if (WorldLibrary.IsPlayInEditorPreview(Core.GetWorld()))
        {
            this.NativeUpdate_fn = this.NativeUpdate_Internal_PlayInEditorPreview;
        }

        // Bind to events
        this.Ptr.OnNativeUpdate_ScriptEvent.Add(ClassType.NativeUpdate);

        // Owner
        let p                 = this.Ptr.TryGetPawnOwner();
        this.OwnerAsCharacter = Character.C(p);

        if (IsValidObject(this.OwnerAsCharacter))
        {
            let ActorLibrary = CsScriptLibrary_Actor;

            this.CameraComponent = CameraComponent.C(ActorLibrary.GetComponentByTag(context, this.Ptr, "FollowCamera"));
            IsValidObjectChecked(context, this.CameraComponent);
        }

        // Apply Data

        // TODO: check data is valid
        this.Ptr.SetBlendSpace1DByName('WalkRunBlendSpace', this.AnimSetData.GetWalkRunBlendSpace());
        this.Ptr.SetSequenceByName('IdleAnim', this.AnimSetData.GetIdleAnim());
        this.Ptr.SetSequenceByName('JumpAnim', this.AnimSetData.GetJumpAnim());
        this.Ptr.SetSequenceByName('FallAnim', this.AnimSetData.GetFallAnim());
        this.Ptr.SetSequenceByName('LandAnim', this.AnimSetData.GetLandAnim());
    }

    SetData(data)
    {
        this.Data = data;
    }

    SetAnimSetData(data)
    {
        this.AnimSetData = data;
    }

    Shutdown()
    {
        if (IsValidObject(this.Ptr) &&
            IsFunction(this.Ptr.OnNativeUpdate_ScriptEvent))
        {
            this.Ptr.OnNativeUpdate_ScriptEvent.Remove(ClassType.NativeUpdate);
        }

        this.Ptr = null;
    }

    static NativeUpdate(animInstance /*CScript_AnimInstance*/, deltaSeconds /*number*/)
    {
        if (self.Ptr === animInstance)
           self.NativeUpdate_fn(deltaSeconds);
    }

    NativeUpdate_Internal(deltaSeconds /*number*/)
    {
        /** @type {CharacterMovementComponent} */
        let mc = this.OwnerAsCharacter.GetMovementComponent();

        // Velocity
        this.Velocity = mc.Velocity;
        this.GroundSpeed = Vector.VSizeXY(this.Velocity);

        this.Ptr.SetFloatByName('GroundSpeed', this.GroundSpeed);

        // Direction
        let MathLibrary = CsScriptLibrary_Math;

        this.MoveDirection = Vector.Vector_Normal2D(this.Velocity, 0.0);

        /** @type {MinimalViewInfo} */
        let mvi = this.CameraComponent.GetCameraView(0.0);
        this.LookForward2D = MathLibrary.Rotator3d_Forward3d_OnlyYaw(mvi.Rotation);
        this.LookRight2D = MathLibrary.Rotator3d_Right3d_OnlyYaw(mvi.Rotation);

            // Forward | Back
        {
            let percent = 0.0;

            /** @type {NJsCPlayer.NMovement.FInfo} */
            let info = this.Data.GetMovementInfo();

            if (this.GroundSpeed >= info.GetRunSpeed())
                percent = 1.0;
            else
                percent = KismetMathLibrary.Clamp(this.GroundSpeed / info.GetMaxWalkSpeed(), 0.0, 1.0);

            let dot = Vector.Dot_VectorVector(this.LookForward2D, this.MoveDirection);

            this.ForwardBack = Math.sign(dot) * percent;
        }
            // Left | Right
        {

        }
        
        // Move
        const GROUND_SPEED_THRESHOLD = 3.0;

        let a = mc.GetCurrentAcceleration();

        this.bMove = (this.GroundSpeed > GROUND_SPEED_THRESHOLD) && Vector.NotEqual_VectorVector(a, this.Velocity, 0.0);
        this.Ptr.SetBoolByName('bMove', this.bMove);

        // bFalling
        this.bFalling = mc.IsFalling();
        this.Ptr.SetBoolByName('bFalling', this.bFalling);
    }

    NativeUpdate_Internal_PlayInEditorPreview(deltaSeconds /*number*/)
    {
        // Velocity
        this.Velocity = this.Ptr.GetVector3dByName('Velocity');
        this.GroundSpeed = Vector.VSizeXY(this.Velocity);

        this.Ptr.SetFloatByName('GroundSpeed', this.GroundSpeed);

        // bMove
        const GROUND_SPEED_THRESHOLD = 3.0;

        this.bMove = this.GroundSpeed > GROUND_SPEED_THRESHOLD;
        this.Ptr.SetBoolByName('bMove', this.bMove);

        // bFalling
    }
};