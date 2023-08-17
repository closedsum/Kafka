// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Managers/Singleton/CsManager_Singleton.h"
// Get Singleton
#include "Managers/Time/CsGetManagerTime.h"
#include "Coroutine/CsGetCoroutineScheduler.h"
#include "Managers/CsGetManagerJavascript.h"

#include "CManager_Singleton_EdEngine.generated.h"

class UCsManager_Time;
class UCsCoroutineScheduler;
class UCsManager_Javascript; 

UCLASS()
class CIMPLEDITOR_API UCManager_Singleton_EdEngine : public UCsManager_Singleton,
													 public ICsGetManagerTime,
													 public ICsGetCoroutineScheduler,
													 public ICsGetManagerJavascript
{
	GENERATED_UCLASS_BODY()

// ICsGetManagerTime
#pragma region
protected:

	UPROPERTY()
	UCsManager_Time* Manager_Time;

public:

	FORCEINLINE UCsManager_Time* GetManager_Time() const { return Manager_Time; }
	FORCEINLINE void SetManager_Time(UCsManager_Time* InManager) { Manager_Time = InManager; }

#pragma endregion ICsGetManagerTime

// ICsGetCoroutineScheduler
#pragma region
protected:

	UPROPERTY()
	UCsCoroutineScheduler* CoroutineScheduler;

public:

	FORCEINLINE UCsCoroutineScheduler* GetCoroutineScheduler() const { return CoroutineScheduler; }
	FORCEINLINE void SetCoroutineScheduler(UCsCoroutineScheduler* InScheduler) { CoroutineScheduler = InScheduler; }

#pragma endregion ICsGetCoroutineScheduler

// ICsGetManagerJavascript
#pragma region
protected:

	UPROPERTY()
	UCsManager_Javascript* Manager_Javascript;

public:

	FORCEINLINE UCsManager_Javascript* GetManager_Javascript() const { return Manager_Javascript; }
	FORCEINLINE void SetManager_Javascript(UCsManager_Javascript* InManager) { Manager_Javascript = InManager; }

#pragma endregion ICsGetManagerJavascript
};