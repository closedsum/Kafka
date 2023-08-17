// Copyright Studio Sai. All Rights Reserved.
#include "Game/Test/CManager_Singleton_GameState_Test.h"
#include "CImpl.h"

UCManager_Singleton_GameState_Test::UCManager_Singleton_GameState_Test(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer),
	Manager_Sound(nullptr),
	Manager_FX(nullptr),
	Manager_Trace(nullptr),
	//Manager_UserWidget(nullptr),
	Manager_StaticMeshActor(nullptr),
	Manager_SkeletalMeshActor(nullptr),
	Manager_Damage(nullptr)
{
}