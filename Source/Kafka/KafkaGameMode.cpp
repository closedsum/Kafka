// Copyright Epic Games, Inc. All Rights Reserved.

#include "KafkaGameMode.h"
#include "KafkaCharacter.h"
#include "UObject/ConstructorHelpers.h"

AKafkaGameMode::AKafkaGameMode()
{
	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnBPClass(TEXT("/Game/ThirdPerson/Blueprints/BP_ThirdPersonCharacter"));
	if (PlayerPawnBPClass.Class != NULL)
	{
		DefaultPawnClass = PlayerPawnBPClass.Class;
	}
}
