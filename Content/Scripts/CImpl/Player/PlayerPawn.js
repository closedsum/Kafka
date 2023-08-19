/// <reference path="../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
var NJsMath = require('Cs/Library/Library_Math.js');

// "typedefs" - library
var GameEventLibrary = CsScriptLibrary_GameEvent;

// "typedefs" - class
var CommonLibrary = NJsCommon.FLibrary;
var FunctionLibrary = NJsFunction.FLibrary;

// "typedefs" - functions
var check = CommonLibrary.check;
var IsValidObjectChecked = CommonLibrary.IsValidObjectChecked;
var IsValidObject = CommonLibrary.IsValidObject;
var IsClassChecked = CommonLibrary.IsClassChecked;
    // Math
var BitFlag_Test = NJsMath.FLibrary.BitFlag_Test;
var BitFlag_Set = NJsMath.FLibrary.BitFlag_Set;
var BitFlag_Clear = NJsMath.FLibrary.BitFlag_Clear;

// Globals
/** @type {FJsCore} */
var Core = null;
/** @type {FJsCPlayer.FPawn} */
var self = null;
/** @type {NJsCPlayer.FPawn} */
var ClassType = null;
/** @type {NJsCPlayer.FPawn.EGameEvent} */
var GameEventType = null;
/** @type {NJsCPlayer.FPawn.EMoveForwardBack} */
var MoveForwardBackMaskType = null;

var ClassName = "NJsCPlayer.FPawn"

module.exports = class NJsCPlayer
{
    static FPawn = class PawnClass
    {
        static EGameEvent =
        {
            StartMoveForward:   GameEventLibrary.Get("StartMoveForward"),
            StopMoveForward:    GameEventLibrary.Get("StopMoveForward"),
            StartMoveBack:      GameEventLibrary.Get("StartMoveBack"),
            StopMoveBack:       GameEventLibrary.Get("StopMoveBack"),
            LookUpDown:         GameEventLibrary.Get("LookUpDown"),
            LookLeftRight:      GameEventLibrary.Get("LookLeftRight")
        }

        static EMoveForwardBack = 
        {
            Forward:    1 << 0,
            Back:       1 << 1
        }

        constructor()
        {
            /** @type{Character} */ this.Ptr = null;
         
            // Component

            /** @type{SpringArmComponent} */ this.CameraBoom = null;
            /** @type{CameraComponent} */ this.FollowCamera = null;

            // Look

            // Movement

            /** @type{boolean}*/ this.bMoveForwardBack = false;
            /** @type{number} */ this.MoveForwardBackMask = 0;
            /** @type{number} */ this.MoveForwardBackDirection = 0;
            /** @type{CsGameEventInfo[]}*/ this.QueuedMoveEvents = [];

        }

        FirstInit()
        {
            let context = ClassName + ".FirstInit";

            // Spawn Components
            let ComponentLibrary = CsScriptLibrary_Component;

            // Camera Boom
            {
                // Create a camera boom (pulls in towards the player if there is a collision)
                this.CameraBoom = ComponentLibrary.CreateAndRegister_SpringArmComponent(context, this.Ptr, "CameraBoom");
                IsValidObjectChecked(context, this.CameraBoom);
                this.CameraBoom.K2_AttachToComponent(this.Ptr.RootComponent);
                // The camera follows at this distance behind the character	
                this.CameraBoom.TargetArmLength = 400.0;
                // Rotate the arm based on the controller
                this.CameraBoom.bUsePawnControlRotation = true;
            }
            // Follow Camera
            {
                this.FollowCamera = ComponentLibrary.CreateAndRegister_CameraComponent(context, this.Ptr, "FollowCamera");
                IsValidObjectChecked(context, this.CameraBoom);
                // Attach the camera to the end of the boom and let the boom adjust to match the controller orientation
                this.FollowCamera.K2_AttachToComponent(this.CameraBoom, "SpringEndpoint");
                // Camera does not rotate relative to arm
                this.FollowCamera.bUsePawnControlRotation = false;
            }

            // Have Player Controller possess Pawn
            let PlayerControllerLibrary = CsScriptLibrary_PlayerController;

            /** @type{PlayerController}*/ let pc = PlayerControllerLibrary.GetFirstLocal(context, Core.GetWorld());

            pc.Possess(this.Ptr);

            // Input
            let InputManagerLibary = CsScriptLibrary_Manager_Input;
            let InputActionMapLibrary = CsScriptLibrary_InputActionMap;

            InputManagerLibary.SetFirstInputActionMap(context, Core.GetWorld(), InputActionMapLibrary.Get("Game"));
        }

        Init(core, ptr, isReload)
        {
            let context = ClassName + ".Init";

            self = this;
            ClassType = NJsCPlayer.FPawn;
            GameEventType = NJsCPlayer.FPawn.EGameEvent;
            MoveForwardBackMaskType = NJsCPlayer.FPawn.EMoveForwardBack;

            IsValidObjectChecked(context, core);
            Core = core;

            IsValidObjectChecked(context, ptr);
            this.Ptr = ptr;

            if (!isReload)
                this.FirstInit();

            // Collision
            this.Ptr.CapsuleComponent.SetCapsuleSize(35.0, 90.0, true);

            // Rotation

                // Don't rotate when the controller rotates. Let that just affect the camera.
            this.Ptr.bUseControllerRotationPitch = false;
            this.Ptr.bUseControllerRotationYaw = false;
            this.Ptr.bUseControllerRotationRoll = false;

            // Movement

                // Character moves in the direction of input...
            this.Ptr.CharacterMovement.bOrientRotationToMovement = true; 
                // ...at this rotation rate
            this.Ptr.CharacterMovement.RotationRate = new Rotator({Pitch: 0.0, Yaw: 500.0, Roll: 0.0});

            // Note: For faster iteration times these variables, and many more, can be tweaked in the Character Blueprint
            // instead of recompiling to adjust them
            this.Ptr.CharacterMovement.JumpZVelocity = 700.0;
            this.Ptr.CharacterMovement.AirControl = 0.35;
            this.Ptr.CharacterMovement.MaxWalkSpeed = 500.0;
            this.Ptr.CharacterMovement.MinAnalogWalkSpeed = 20.0;
            this.Ptr.CharacterMovement.BrakingDecelerationWalking = 2000.0;

            this.Ptr.CharacterMovement.GravityScale = 1.5;
            this.Ptr.CharacterMovement.MaxAcceleration = 1500.0;
            this.Ptr.CharacterMovement.BrakingFrictionFactor = 1.0;
            this.Ptr.CharacterMovement.bUseSeparateBrakingFriction = true;

            // Set Mesh
            {
                let SkeletalMeshLibrary = CsScriptLibrary_SkeletalMesh;

                let path = '/Game/Characters/Mannequins/Meshes/SKM_Quinn_Simple.SKM_Quinn_Simple';
                let sm = SkeletalMeshLibrary.LoadByStringPath(context, path);
                IsValidObjectChecked(context, sm);

                this.Ptr.Mesh.SetSkeletalMeshAsset(sm);

                let location = new Vector.C({X: 0.0, Y: 0.0, Z: 0.0});
                location.Z = -this.Ptr.CapsuleComponent.GetScaledCapsuleHalfHeight();
                let rotation = new Rotator.C({Pitch: 0.0, Yaw: -90.0, Roll: 0.0});

                this.Ptr.Mesh.K2_SetRelativeLocationAndRotation(location, rotation);
            }
            // Set Animation
            {
                let AnimInstanceLibrary = CsScriptLibrary_AnimInstance;

                let path = '/Game/Characters/Mannequins/Animations/ABP_Quinn.ABP_Quinn';
                let ac = AnimInstanceLibrary.LoadAndGetGeneratedClassByStringPath(context, path);
                IsClassChecked(context, ac);

                this.Ptr.Mesh.SetAnimClass(ac);
            }

            // Teleport to start location
            {
                let location = new Vector.C({X: 1000.0, Y: 0.0, Z: 100.0});
                //location.Z += this.Ptr.CapsuleComponent.GetScaledCapsuleHalfHeight();
                //location.Z += 1.0;

                let rotation = new Rotator.C({Pitch: 0.0, Yaw: 0.0, Roll: 0.0});

                let result = this.Ptr.K2_TeleportTo(location, rotation);
            }

            // Bind delegates

            Core.GetGameState().OnUpdate_ScriptEvent.Add(ClassType.Update);
            Core.GetCoordinator_GameEvent().OnProcessGameEventInfo_ManagerInput0_ScriptEvent.Add(ClassType.OnProcessGameEventInfo);
        }

        Shutdown()
        {
            if (IsValidObject(Core))
            {
                Core.GetGameState().OnUpdate_ScriptEvent.Remove(ClassType.Update);
                Core.GetCoordinator_GameEvent().OnProcessGameEventInfo_ManagerInput0_ScriptEvent.Remove(ClassType.OnProcessGameEventInfo);
            }
        }

        OnPreReloadScript(index)
        {
        }

        static Update(deltaTime /*FCsDeltaTime*/)
        {
            self.Update_Internal(deltaTime);
        }

        Update_Internal(deltaTime /*FCsDeltaTime*/)
        {
            this.ResolveMovement();
        }

        static OnProcessGameEventInfo(group /*FECsGameEventCoordinatorGroup*/, info /*FCsGameEventInfo*/)
        {
            self.OnProcessGameEventInfo_Internal(group, info);
        }

        OnProcessGameEventInfo_Internal(group /*ECsGameEventCoordinatorGroup*/, info /*CsGameEventInfo*/)
        {
            let event = info.Event;
            
            // Look
            
                // NOTE: For now "Resolve" Look immediately

                // LookUpDown
            if (GameEventLibrary.EqualEqual(event, GameEventType.LookUpDown))
            {
                this.Ptr.AddControllerPitchInput(-info.Value);
            }
                // LookLeftRight
            if (GameEventLibrary.EqualEqual(event, GameEventType.LookLeftRight))
            {
                this.Ptr.AddControllerYawInput(info.Value);
            }

            // Movement

                // StartMoveForward | StopMoveForward
                // StartMoveBack | StopMoveBack
            if (GameEventLibrary.EqualEqual(event, GameEventType.StartMoveForward) ||
                GameEventLibrary.EqualEqual(event, GameEventType.StopMoveForward) ||
                GameEventLibrary.EqualEqual(event, GameEventType.StartMoveBack) ||
                GameEventLibrary.EqualEqual(event, GameEventType.StopMoveBack))
            {
                this.QueuedMoveEvents.push(info);
            }
        }

        ResolveMovement()
        {
            // Forward takes precedent over Back

            let moveForward_firstPressed = false;
            let moveForward_amount = 0.0;

            let moveBack_firstPressed = false;
            let moveBack_amount = 0.0;

            for (let info of this.QueuedMoveEvents)
            {
                let event = info.Event;
                
            // Forward

                // StartMoveForward
                if (GameEventLibrary.EqualEqual(event, GameEventType.StartMoveForward))
                {
                    this.MoveForwardBackMask = BitFlag_Set(this.MoveForwardBackMask, MoveForwardBackMaskType.Forward);

                    moveForward_firstPressed = true;
                    moveForward_amount = info.Value;
                }
                // StopMoveForward
                if (GameEventLibrary.EqualEqual(event, GameEventType.StopMoveForward))
                {
                    this.MoveForwardBackMask = BitFlag_Clear(this.MoveForwardBackMask, MoveForwardBackMaskType.Forward);
                }

            // Back

                // StartMoveBack
                if (GameEventLibrary.EqualEqual(event, GameEventType.StartMoveBack))
                {
                    this.MoveForwardBackMask = BitFlag_Set(this.MoveForwardBackMask, MoveForwardBackMaskType.Back);

                    moveBack_firstPressed = true;
                    moveBack_amount = info.Value;
                }
                // StopMoveBack
                if (GameEventLibrary.EqualEqual(event, GameEventType.StopMoveBack))
                {
                    this.MoveForwardBackMask = BitFlag_Clear(this.MoveForwardBackMask, MoveForwardBackMaskType.Back);
                }
            }

            if (BitFlag_Test(this.MoveForwardBackMask, MoveForwardBackMaskType.Forward))
            {
                this.MoveForwardBackDirection = 1.0;

                if (moveForward_firstPressed)
                {
                    // Do Nothing
                }
                else
                if (moveBack_firstPressed)
                {
                    this.MoveForwardBackDirection = -1.0;
                }
            }
            else
            if (BitFlag_Test(this.MoveForwardBackMask, MoveForwardBackMaskType.Back))
            {
                this.MoveForwardBackDirection = -1.0;
            }

            if (this.MoveForwardBackMask > 0)
            {
                let MathLibrary = CsScriptLibrary_Math;

                /** @type{Controller} */ let c = this.Ptr.GetController();
                let rotation = c.GetControlRotation();

                let forward = MathLibrary.Rotator3d_Forward3d_OnlyYaw(rotation);

                let value = 1.0;
                let scalar = this.MoveForwardBackDirection * value;

                this.Ptr.AddMovementInput(forward, scalar);
            }

            this.QueuedMoveEvents = [];
        }
    }
};