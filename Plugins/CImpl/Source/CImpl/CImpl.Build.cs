// Copyright 2017-2022 Closed Sum Games, LLC. All Rights Reserved.

using UnrealBuildTool;

public class CImpl : ModuleRules
{
    public CImpl(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        bLegacyPublicIncludePaths = false;
        bUseUnity = false;

        PublicDependencyModuleNames.AddRange(
                new string[] {
                    "Core",
                    "CoreUObject",
                    "Engine",
                    "AssetRegistry",
                    "DeveloperSettings",
                    "EngineSettings",
                    "PhysicsCore",
                    "UMG",
                    "Json",
                    "JsonUtilities",
                    "InputCore",
                    "Niagara",
                    "CsCore",
                    "CsJs",
                    "CsDmg",
                }
            );

        PrivateDependencyModuleNames.AddRange(
            new string[] {
            }
        );

        if (Target.Type == TargetType.Editor)
        {
            PublicDependencyModuleNames.AddRange(
                new string[] {
                    "UnrealEd"
                }
            );

            PrivateDependencyModuleNames.AddRange(
                new string[] {
                }
            );
        }
    }
}