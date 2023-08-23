// Copyright Studio Sai. All Rights Reserved.
#include "Animation/CManager_Singleton_AnimInstance.h"
#include "CImpl.h"

UCManager_Singleton_AnimInstance::UCManager_Singleton_AnimInstance(const FObjectInitializer& ObjectInitializer) :
	Super(ObjectInitializer),
	Manager_FX(nullptr),
	Manager_Sound(nullptr)
{
}