// Copyright 2017-2023 Closed Sum Games, LLC. All Rights Reserved.
// MIT License: https://opensource.org/license/mit/
// Free for use and distribution: https://github.com/closedsum/core

/// <reference path="../../../typings/ue.d.ts">/>

// Types
/// <reference path="../../../Cs/Types/Types_SkeletalMesh.ts">/>
/// <reference path="../../../Cs/Material/Types_Material.ts">/>
/// <reference path="../../../Cs/Animation/Types_Anim.ts">/>

// require('CImpl/Player/Types/Types_Player.js');

declare namespace NJsCPlayer {
    // Orientation
    namespace NOrientation {
        class FInfo {
            bUseControllerRotationPitch: boolean;
            bUseControllerRotationYaw: boolean;
            bUseControllerRotationRoll: boolean;
            UseControllerRotationPitch(): boolean;
            UseControllerRotationYaw(): boolean;
            UseControllerRotationRoll(): boolean;
            IsValidChecked(context: string): boolean;
        }
    }
    // Movement
    namespace NMovement {
        class FInfo {
            bOrientRotationToMovement: boolean; 
            RotationRate: Rotator;
            JumpZVelocity: number;
            AirControl: number;
            MaxWalkSpeed: number;
            MinAnalogWalkSpeed: number;
            BrakingDecelerationWalking: number;
            GravityScale: number;
            MaxAcceleration: number;
            BrakingFrictionFactor: number;
            bUseSeparateBrakingFriction: boolean; 
            ShouldOrientRotationToMovement(): boolean; 
            GetRotationRate(): Rotator;
            GetJumpZVelocity(): number;
            GetAirControl(): number;
            GetMaxWalkSpeed(): number;
            GetMinAnalogWalkSpeed(): number;
            GetBrakingDecelerationWalking(): number;
            GetGravityScale(): number;
            GetMaxAcceleration(): number;
            GetBrakingFrictionFactor(): number;
            UseSeparateBrakingFriction(): boolean; 
            IsValidChecked(context: string): boolean;
        }
    }
    // Visual

        // Mesh
    namespace NMesh {
        class FInfo {
            Mesh: NJsTypes.FSkeletalMesh;     
            Location: Vector;
            Rotation: Rotator;
            GetMesh(): NJsTypes.FSkeletalMesh; 
            GetLocation(): Vector;
            GetRotation(): Rotator;   
            IsValidChecked(context: string): boolean;
            Load() : void;
        }
    }
        // Material
    namespace NMaterial {
        class FInfo {
            Materials: NJsTypes.FTArrayMaterialInterface;
            GetMaterials(): MaterialInterface[];
            IsValidChecked(context: string): boolean;
            Load() : void;
        }
    }

    // Anim
    namespace NAnim {
        class FInfo {
            AnimBlueprint: NJsTypes.FAnimBlueprint
            GetAnimClass(): AnimBlueprintGeneratedClass;
            IsValidChecked(context: string): boolean;
            Load() : void;
        }
    }

    // Camera

        // Boom
    namespace NCamera {
        namespace NBoom {
            class FInfo {
                TargetArmLength: number;
                bUsePawnControlRotation: boolean;
                GetTargetArmLength(): number;
                UsePawnControlRotation(): boolean;
                IsValidChecked(context: string): boolean;
            }
        }
    }
        // Follow
    namespace NCamera {
        namespace NFollow {
            class FInfo {
                SocketName: string;
                bUsePawnControlRotation: boolean;
                GetSocketName(): string;
                UsePawnControlRotation(): boolean;
                IsValidChecked(context: string): boolean;
            }
        }
    }

        // Info
    namespace NCamera {  
        class FInfo {
            BoomInfo: NJsCPlayer.NCamera.NBoom.FInfo;
            FollowInfo: NJsCPlayer.NCamera.NFollow.FInfo;
            GetBoomInfo(): NJsCPlayer.NCamera.NBoom.FInfo;
            GetFollowInfo(): NJsCPlayer.NCamera.NFollow.FInfo;
            IsValidChecked(context: string): boolean;
        }
    }
}