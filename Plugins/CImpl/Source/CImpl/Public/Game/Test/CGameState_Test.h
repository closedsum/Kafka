// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "GameFramework/GameState.h"
// Interfaces
#include "Managers/Singleton/CsGetManagerSingleton.h"
#include "Start/CsStartPlay.h"
// Types
#include "Managers/Time/CsUpdate.h"
#include "Managers/Time/CsTypes_Update.h"

#include "CGameState_Test.generated.h"

// Delegates
#pragma region

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FCGameStateTest_OnUpdate, const FCsDeltaTime&, DeltaTime);
DECLARE_DYNAMIC_MULTICAST_DELEGATE(FCGameStateTest_OnShutdown);

#pragma endregion Delegates

class UCsManager_Singleton;
struct FCsRoutine;
class UUserWidget;
class UCGamePlayImpl;

UCLASS(hidecategories = (Object, Actor, Replication, Rendering, Input, "Actor Tick", "LOD", "Cooking"))
class CIMPL_API ACGameState_Test : public AGameState,
								   public ICsGetManagerSingleton,
								   public ICsStartPlay
{
	GENERATED_UCLASS_BODY()

// UObject Interface
#pragma region
public:

	virtual void BeginDestroy() override;

#pragma endregion UObject Interface

// AActor Interface
#pragma region
protected:

	virtual void BeginPlay() override;

public:

	virtual void Tick(float DeltaSeconds) override;

#pragma endregion AActor Interface

// AGameStateBase Interface
#pragma region
public:

	virtual void SeamlessTravelTransitionCheckpoint(bool bToTransitionMap) override;

#pragma endregion AGameStateBase Interface

// ICsGetManagerSingleton
#pragma region
public:

	FORCEINLINE UCsManager_Singleton* GetManager_Singleton() const
	{
		return Manager_Singleton;
	}

#pragma endregion ICsGetManagerSingleton

// ICsStartPlay
#pragma region
public:

	void StartPlay();

protected:

	bool bHasStartedPlay;

public:

	FORCEINLINE bool HasStartedPlay() const { return bHasStartedPlay; }

#pragma endregion ICsStartPlay

protected:

	FOnActorSpawned::FDelegate OnActorSpawnedDelegate;
	FDelegateHandle OnActorSpawnedDelegateHandle;

	void OnActorSpawned(AActor* Actor);

	TArray<TWeakObjectPtr<UObject>> ObjectsQueuedForStartPlay;

// Manager Singleton
#pragma region
protected:

	UPROPERTY()
	UCsManager_Singleton* Manager_Singleton;

	virtual void ConstructManagerSingleton();

	bool bSetupSingletons;

	void SetupSingletons();
	char SetupSingletons_Internal(FCsRoutine* R);

	void ShutdownSingletons();

	void OnBeginDestroy_ShutdownSingletons();

#pragma endregion Manager Singleton

// Script
#pragma region
protected:

	void SetupAndRunScripts();
	char SetupAndRunScripts_Internal(FCsRoutine* R);

#pragma endregion Script

// Startup
#pragma region
protected:

	enum class EStartup
	{
		None,
		FinishedLoadingPersistentLevel,
		LoadLevelPayloadComplete,
		SetupSingletonsComplete,
		SetupAndRunScriptsComplete,
		Complete
	};

	EStartup StartupState;

public:

	FORCEINLINE void SetStartupState(const EStartup& State){ StartupState = State; }

protected:

	void Startup();
	char Startup_Internal(FCsRoutine* R);

	void LoadLevelPayload();
	void OnLoadLevelPayloadComplete(bool WasSuccessful, const FName& PayloadName);

#pragma endregion Startup

// Update
#pragma region
public:

	TArray<FCsUpdate> UpdateObjects;

	UPROPERTY(BlueprintAssignable)
	FCGameStateTest_OnUpdate OnUpdate_ScriptEvent;

#pragma endregion Update

// Pause
#pragma region
protected:

	TMap<FECsUpdateGroup, FDelegateHandle> OnPauseHandleByGroupMap;

	void Pause(const FECsUpdateGroup& Group, bool bPaused);

#pragma endregion Pause

// GamePlay
#pragma region
protected:

	UPROPERTY(BlueprintReadOnly, meta = (AllowPrivateAccess = "true"))
	UCGamePlayImpl* GamePlayImpl;

public:

	UFUNCTION(BlueprintPure, Category = "GameState|GamePlay")
	FORCEINLINE UCGamePlayImpl* GetGamePlayImpl() const { return GamePlayImpl; }

	UFUNCTION(BlueprintCallable, Category = "GameState|GamePlay")
	void SetGamePlayImpl(TSubclassOf<UCGamePlayImpl> ImplClass);

#pragma endregion GamePlay

// Shutdown
#pragma region
public:

	void Shutdown();

	UPROPERTY(BlueprintAssignable)
	FCGameStateTest_OnShutdown OnShutdown_ScriptEvent;

#pragma endregion Shutdown

// Exit
#pragma region
private:

	void OnQueueExitGame();

	bool bFinishedExitGame;

public:

	FORCEINLINE bool HasFinishedExitGame() const { return bFinishedExitGame; }

private:

	void ExitGame();
	char ExitGame_Internal(FCsRoutine* R);

#pragma endregion Exit
};