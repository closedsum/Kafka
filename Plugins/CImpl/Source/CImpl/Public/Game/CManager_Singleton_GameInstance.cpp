// Copyright 2017-2023 Closed Sum Games, LLC. All Rights Reserved.
#include "Game/CManager_Singleton_GameInstance.h"
#include "CImpl.h"

UCManager_Singleton_GameInstance::UCManager_Singleton_GameInstance(const FObjectInitializer& ObjectInitializer) : 
	Super(ObjectInitializer),
	Coordinator_ConsoleCommand(nullptr),
	Manager_UnitTest(nullptr),
	Manager_Time(nullptr),
	CoroutineScheduler(nullptr),
	Manager_Load(nullptr),
	Manager_Runnable(nullptr),
	Manager_Data(nullptr),
	Coordinator_GameEvent(nullptr),
	//Manager_Menu(nullptr),
	Manager_Level(nullptr),
	//Manager_Fade(nullptr),
	Manager_Javascript(nullptr)//,
	//Manager_PlayerProfile(nullptr),
	//Manager_Save(nullptr)
{
}