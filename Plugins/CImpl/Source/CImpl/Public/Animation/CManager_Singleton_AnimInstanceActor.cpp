// Copyright Studio Sai. All Rights Reserved.
#include "Animation/CManager_Singleton_AnimInstanceActor.h"
#include "CImpl.h"

// Singleton
#include "Animation/CManager_Singleton_AnimInstance.h"
// Managers
#include "Managers/FX/Actor/CsManager_FX.h"
#include "Managers/Sound/CsManager_Sound.h"
// Engine
#include "Engine/Engine.h"

ACManager_Singleton_AnimInstanceActor::ACManager_Singleton_AnimInstanceActor(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer)
{
}

// Manager Singleton
#pragma region

void ACManager_Singleton_AnimInstanceActor::SetupSingletons()
{
	Manager_Singleton = NewObject<UCManager_Singleton_AnimInstance>(this, UCManager_Singleton_AnimInstance::StaticClass());

	UCsManager_FX::Init(this, UCsManager_FX::StaticClass(), GEngine);
	UCsManager_Sound::Init(this, UCsManager_Sound::StaticClass(), GEngine);
}

void ACManager_Singleton_AnimInstanceActor::ShutdownSingletons()
{
	if (Manager_Singleton)
	{
		UCsManager_FX::Get(this)->MarkAsGarbage();
		UCsManager_FX::Shutdown(this);
		UCsManager_Sound::Get(this)->MarkAsGarbage();
		UCsManager_Sound::Shutdown(this);

		Manager_Singleton->MarkAsGarbage();
		Manager_Singleton = nullptr;
	}
}

#pragma endregion Manager Singleton