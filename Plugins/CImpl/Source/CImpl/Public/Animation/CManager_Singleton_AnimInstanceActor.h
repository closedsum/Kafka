// Copyright Studio Sai All Rights Reserved.
#pragma once
#include "Managers/Singleton/CsManager_Singleton_Actor.h"

#include "CManager_Singleton_AnimInstanceActor.generated.h"

class UCsManager_Singleton;

UCLASS()
class CIMPL_API ACManager_Singleton_AnimInstanceActor : public ACsManager_Singleton_Actor
{
	GENERATED_UCLASS_BODY()

// Manager Singleton
#pragma region
protected:

	virtual void SetupSingletons() override;

	virtual void ShutdownSingletons() override;

#pragma endregion Manager Singleton
};