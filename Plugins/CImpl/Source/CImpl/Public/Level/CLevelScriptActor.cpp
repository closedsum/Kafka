// Copyright Studio Sai. All Rights Reserved.
#include "Level/CLevelScriptActor.h"
#include "CImpl.h"

ACLevelScriptActor::ACLevelScriptActor(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer),
	LevelSetupData(nullptr)
{
}

// ICsStartPlay
#pragma region

void ACLevelScriptActor::StartPlay()
{
	ReceiveStartPlay();
}

#pragma endregion ICsStartPlay

// ICsUpdate
#pragma region

void ACLevelScriptActor::Update(const FCsDeltaTime& DeltaTime)
{
	ReceiveUpdate(DeltaTime);
}

#pragma endregion ICsUpdate