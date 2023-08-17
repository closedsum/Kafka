// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "Game/CsGameInstance.h"
// Types
#include "Coordinators/GameEvent/CsTypes_Coordinator_GameEvent.h"
// GameEvent
#include "Managers/Input/GameEvent/CsGameEvent.h"

#include "CGameInstance.generated.h"

// Delegates
#pragma region

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FCGameInstance_OnFinishedLoadingStartupPayload);

#pragma endregion Delegates

struct FCsRoutine;

UCLASS(config = Game)
class CIMPL_API UCGameInstance : public UCsGameInstance
{
	GENERATED_UCLASS_BODY()

// UGameInstance Interface
public:

	virtual void Init() override;
	virtual void Shutdown() override;

#pragma endregion UGameInstance Interface

// UCsGameInstance Interface
#pragma region

	// Tick
#pragma region
protected:

	virtual bool Tick(float DeltaSeconds) override;

#pragma endregion Tick

	// Exit
#pragma region
protected:

	virtual bool CanExitGame() override;

	virtual char ExitGame_Internal(FCsRoutine* R) override;

#pragma endregion Exit

	// Managers
#pragma region
protected:

	virtual void ConstructManagerSingleton() override;

#pragma endregion Managers

#pragma endregion UCsGameInstance Interface

// Startup
#pragma region
private:

	enum class EStartup : uint8
	{
		None,
		FinishedLoadingPersistentLevel,
		FinishedSetupPlatformServices,
		FinishedLoadingEntryLevel,
		FinishedLoadingStartUpPayload,
		ECGameInstanceStartupState_MAX
	};

	EStartup StartupState;

	void Startup();
	char Startup_Internal(FCsRoutine* R);

	//void StartPlatformServices();
	//char StartPlatformServices_Internal(FCsRoutine* R);

	//void SetupScreenResolution();

	bool IsPersistentLevel_Entry(const FString& Context);
	bool IsPersistentLevel_Main(const FString& Context);

	void StartAsyncLoadStartupPayload();

	void SafeAsyncLoadStartupPayload();

	void OnAsyncLoadStartupPayloadCompleted(bool WasSuccessful, const FName& PayloadName);

public:

	UPROPERTY(BlueprintAssignable, Category = "Startup")
	FCGameInstance_OnFinishedLoadingStartupPayload OnFinishedLoadingStartupPayload_ScriptEvent;

	UFUNCTION(BlueprintPure, Category = "Startup")
	bool HasFinishedLoadingStartupPayload() const;

	DECLARE_MULTICAST_DELEGATE(FOnStartupPlayoadCompleted);

	FOnStartupPlayoadCompleted OnStartupPayloadCompleted_Event;

protected:

	bool bFinishedStartup;

public:

	UFUNCTION(BlueprintCallable, Category = "Startup")
	void SetFinishedStartup();

#pragma endregion Startup

// Events
#pragma region
protected:

	void OnProcessGameEventInfo(const FECsGameEventCoordinatorGroup& Group, const FCsGameEventInfo& Info);

#pragma endregion Events

// Transition
#pragma region
public:

	//TODO: Put in Manager_Game?

	enum class EState : uint8
	{
		None,
		Transition,
		MenuMain,
		Play,
		Hub
	};

private:

	EState CurrentState;

public:

	FORCEINLINE const EState& GetCurrentState() const { return CurrentState; }

private:

	bool bHasPerformedTransition;

public:

	FORCEINLINE const bool& GetHasPerformedTransition() const { return bHasPerformedTransition; }

private:

	FName CurrentGamePlayName;

public:

	FORCEINLINE const FName& GetCurrentGamePlayName() const { return CurrentGamePlayName; }

	void OnTransition_ShutdownScriptEntryPoint();
	void OnTransition_CreateScriptEntryPoint();

#pragma endregion Transition
};