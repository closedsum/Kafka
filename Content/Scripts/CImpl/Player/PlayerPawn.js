/// <reference path="../../CImpl/custom_typings/CImpl.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

// Library
var NJsCommon = require('Cs/Library/Library_Common.js');
var NJsFunction = require('Cs/Library/Library_Function.js');
var NJsMath = require('Cs/Library/Library_Math.js');
// Types
var FJsMask = require('Cs/Types/Mask.js');

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
/** @type {NJsCPlayer.FPawn.EDirection} */
var DirectionType = null;

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
            StartMoveLeft:      GameEventLibrary.Get("StartMoveLeft"),
            StopMoveLeft:       GameEventLibrary.Get("StopMoveLeft"),
            StartMoveRight:     GameEventLibrary.Get("StartMoveRight"),
            StopMoveRight:      GameEventLibrary.Get("StopMoveRight"),
            LookUpDown:         GameEventLibrary.Get("LookUpDown"),
            LookLeftRight:      GameEventLibrary.Get("LookLeftRight")
        }

        static EDirection = 
        {
            Forward:    { Value: 0, Mask: 1 << 0},
            Back:       { Value: 1, Mask: 1 << 1},
            Left:       { Value: 2, Mask: 1 << 2},
            Right:      { Value: 3, Mask: 1 << 3}
        }

        constructor()
        {
            /** @type{Character} */ this.Ptr = null;
         
            // Component

            /** @type{SpringArmComponent} */ this.CameraBoom = null;
            /** @type{CameraComponent} */ this.FollowCamera = null;

            // Look

            // Movement

            /** @type{FJsMask} */ this.MoveDirectionMask = new FJsMask();
            /** @type{number[]} */ this.MoveDirectionAmounts = [];

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
            DirectionType = NJsCPlayer.FPawn.EDirection;

            IsValidObjectChecked(context, core);
            Core = core;

            IsValidObjectChecked(context, ptr);
            this.Ptr = ptr;

            this.MoveDirectionAmounts[DirectionType.Forward.Value] = 0.0;
            this.MoveDirectionAmounts[DirectionType.Back.Value] = 0.0;
            this.MoveDirectionAmounts[DirectionType.Left.Value] = 0.0;
            this.MoveDirectionAmounts[DirectionType.Right.Value] = 0.0;

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
            this.Ptr.CharacterMovement.RotationRate = new Rotator.C({Pitch: 0.0, Yaw: 500.0, Roll: 0.0});

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
            // typedefs
            let Evt_EqEq = GameEventLibrary.EqualEqual;

            let event = info.Event;
            
            // Look
            
                // NOTE: For now "Resolve" Look immediately

                // LookUpDown
            if (Evt_EqEq(event, GameEventType.LookUpDown))
            {
                this.Ptr.AddControllerPitchInput(-info.Value);
            }
                // LookLeftRight
            if (Evt_EqEq(event, GameEventType.LookLeftRight))
            {
                this.Ptr.AddControllerYawInput(info.Value);
            }

            // Movement

                // Forward  - StartMoveForward | StopMoveForward
                // Back     - StartMoveBack | StopMoveBack
                // Left     - StartMoveLeft | StopMoveLeft
                // Right    - StartMoveRight | StopMoveRight
            if (Evt_EqEq(event, GameEventType.StartMoveForward) ||
                Evt_EqEq(event, GameEventType.StopMoveForward) ||
                Evt_EqEq(event, GameEventType.StartMoveBack) ||
                Evt_EqEq(event, GameEventType.StopMoveBack) ||
                Evt_EqEq(event, GameEventType.StartMoveLeft) ||
                Evt_EqEq(event, GameEventType.StopMoveLeft) ||
                Evt_EqEq(event, GameEventType.StartMoveRight) ||
                Evt_EqEq(event, GameEventType.StopMoveRight))
            {
                this.QueuedMoveEvents.push(info);
            }
        }

        ResolveMovement()
        {
            let context = ClassName + ".ResolveMovement";

            // typedefs
            let Evt_EqEq = GameEventLibrary.EqualEqual;

            let forward_firstPressed = false;
            let back_firstPressed = false;
            let left_firstPressed = false;
            let right_firstPressed = false;

            let forward_amount = 0.0;
            let right_amount = 0.0;

            for (let info of this.QueuedMoveEvents)
            {
                let event = info.Event;
                
            // Forward

                // StartMoveForward
                if (Evt_EqEq(event, GameEventType.StartMoveForward))
                {
                    this.MoveDirectionMask.Set(DirectionType.Forward.Mask);

                    forward_firstPressed = true;
                    this.MoveDirectionAmounts[DirectionType.Forward.Value] = info.Value;
                }
                // StopMoveForward
                if (Evt_EqEq(event, GameEventType.StopMoveForward))
                {
                    this.MoveDirectionMask.Clear(DirectionType.Forward.Mask);

                    this.MoveDirectionAmounts[DirectionType.Forward.Value] = 0.0;
                }

            // Back

                // StartMoveBack
                if (Evt_EqEq(event, GameEventType.StartMoveBack))
                {
                    this.MoveDirectionMask.Set(DirectionType.Back.Mask);

                    back_firstPressed = true;
                    this.MoveDirectionAmounts[DirectionType.Back.Value] = info.Value;
                }
                // StopMoveBack
                if (Evt_EqEq(event, GameEventType.StopMoveBack))
                {
                    this.MoveDirectionMask.Clear(DirectionType.Back.Mask);

                    this.MoveDirectionAmounts[DirectionType.Back.Value] = 0.0;
                }

            // Left

                // StartMoveLeft
                if (Evt_EqEq(event, GameEventType.StartMoveLeft))
                {
                    this.MoveDirectionMask.Set(DirectionType.Left.Mask);

                    left_firstPressed = true;
                    this.MoveDirectionAmounts[DirectionType.Left.Value] = info.Value;
                }
                // StopMoveLeft
                if (Evt_EqEq(event, GameEventType.StopMoveLeft))
                {
                    this.MoveDirectionMask.Clear(DirectionType.Left.Mask);

                    this.MoveDirectionAmounts[DirectionType.Left.Value] = 0.0;
                }

            // Right

                // StartMoveRight
                if (Evt_EqEq(event, GameEventType.StartMoveRight))
                {
                    this.MoveDirectionMask.Set(DirectionType.Right.Mask);

                    right_firstPressed = true;
                    this.MoveDirectionAmounts[DirectionType.Right.Value] = info.Value;
                }
                // StopMoveRight
                if (Evt_EqEq(event, GameEventType.StopMoveRight))
                {
                    this.MoveDirectionMask.Clear(DirectionType.Right.Mask);

                    this.MoveDirectionAmounts[DirectionType.Right.Value] = 0.0;
                }
            }

            // Forward | Back
            //  Forward takes precedent over Back

            

            if (this.MoveDirectionMask.Test(DirectionType.Forward.Mask))
            {
                forward_amount = this.MoveDirectionAmounts[DirectionType.Forward.Value];

                if (forward_firstPressed)
                {
                    // Do Nothing
                }
                else
                if (back_firstPressed)
                {
                    forward_amount = this.MoveDirectionAmounts[DirectionType.Back.Value];
                }
            }
            else
            if (this.MoveDirectionMask.Test(DirectionType.Back.Mask))
            {
                forward_amount = this.MoveDirectionAmounts[DirectionType.Back.Value];
            }
            else
            {
                //this.MoveDirectionAmounts[DirectionType.Forward.Value] = 0.0;
                //this.MoveDirectionAmounts[DirectionType.Back.Value] = 0.0;
            }

            // Left | Right
            //  Right takes precedent over Left

            

            if (this.MoveDirectionMask.Test(DirectionType.Right.Mask))
            {
                right_amount = this.MoveDirectionAmounts[DirectionType.Right.Value];

                if (right_firstPressed)
                {  
                    // Do Nothing
                }
                else
                if (left_firstPressed)
                {
                    right_amount = this.MoveDirectionAmounts[DirectionType.Left.Value];
                }
            }
            else
            if (this.MoveDirectionMask.Test(DirectionType.Left.Mask))
            {
                right_amount = this.MoveDirectionAmounts[DirectionType.Left.Value];
            }
            else
            {
               // this.MoveDirectionAmounts[DirectionType.Left.Value] = 0.0;
                //this.MoveDirectionAmounts[DirectionType.Right.Value] = 0.0;
            }
            
            let MathLibrary = CsScriptLibrary_Math;

            /** @type{Controller} */ let c = this.Ptr.GetController();
            let rotation = c.GetControlRotation();

            //let forward = MathLibrary.Rotator3d_Forward3d_OnlyYaw(rotation);
            let forward = MathLibrary.RotationMatrix44d_UnitAxis_OnlyYaw(rotation, EAxis.X);
            //let right = MathLibrary.Rotator3d_Right3d_OnlyYaw(rotation);
            let right = MathLibrary.RotationMatrix44d_UnitAxis_OnlyYaw(rotation, EAxis.Y);

            if (this.MoveDirectionMask.AnySet())
            {
                this.Ptr.AddMovementInput(forward, forward_amount);
                this.Ptr.AddMovementInput(right, right_amount);
            }

            this.QueuedMoveEvents = [];
        }
    }
};