// Copyright Studio Sai. All Rights Reserved.
#include "CManager_Singleton_EdEngine.h"
#include "CImplEditor.h"

UCManager_Singleton_EdEngine::UCManager_Singleton_EdEngine(const FObjectInitializer& ObjectInitializer) : 
	Super(ObjectInitializer),
	Manager_Time(nullptr),
	CoroutineScheduler(nullptr),
	Manager_Javascript(nullptr)
{
}