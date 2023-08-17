// Copyright Studio Sai, LLC. All Rights Reserved.

using UnrealBuildTool;

public class CImplEditor : ModuleRules
{
    public CImplEditor(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        bLegacyPublicIncludePaths = false;
        bUseUnity = false;

        PublicDependencyModuleNames.AddRange(
                new string[] {
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
                    "Core",
                    "CoreUObject",
                    "Engine",
                    "AssetRegistry",
                    "UnrealEd",
                    "AssetTools",
                    "ContentBrowser",
                    "BlueprintGraph",
                    "Slate",
                    "PropertyEditor",
                    "GraphEditor",
                    "EditorStyle",
                    "CsCore",
                    "CsEditor",
                    "CsDmgEditor",
                    "CsJs",
                    "CImpl",
                }
            );

            PrivateDependencyModuleNames.AddRange(
                new string[] {
                    "Slate",
                    "SlateCore",
                    "PropertyEditor"
                }
            );
        }
    }
}