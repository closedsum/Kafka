// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class Kafka : ModuleRules
{
	public Kafka(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
		bLegacyPublicIncludePaths = false;
		bUseUnity = false;

		PublicDependencyModuleNames.AddRange(
			new string[] { 
				"Core", 
				"CoreUObject", 
				"Engine", 
				"InputCore", 
				"EnhancedInput" 
			}
		);
	}
}
