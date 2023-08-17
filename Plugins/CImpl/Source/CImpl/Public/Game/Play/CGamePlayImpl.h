// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "Components/ActorComponent.h"
// Interfaces
#include "Start/CsStartPlay.h"
#include "Game/Play/CGamePlay.h"
#include "Game/Play/Event/CGamePlay_Event.h"
// Types
#include "Managers/Time/CsTypes_Time.h"
#include "Game/Play/Types/CTypes_GamePlay.h"

#include "CGamePlayImpl.generated.h"

// Delegates
#pragma region

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FCGamePlayImpl_Override_Start);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FCGamePlayImpl_Override_Init, const FName&, TypeName);

#pragma endregion Delegates

// NCGame::NPlay::NData::IData
CS_FWD_DECLARE_STRUCT_NAMESPACE_3(NCGame, NPlay, NData, IData)

//class ACPlayerPawn;
struct FCsRoutine;

UCLASS()
class CIMPL_API UCGamePlayImpl : public UActorComponent,
								 public ICsStartPlay,
								 public ICGamePlay,
								 public ICGamePlay_Event
{
	GENERATED_UCLASS_BODY()

#define DataType NCGame::NPlay::NData::IData

// ICsStartPlay
#pragma region
public:

	void StartPlay();

protected:

	bool bHasStartedPlay;

public:

	FORCEINLINE bool HasStartedPlay() const { return bHasStartedPlay; }

#pragma endregion ICsStartPlay

// StartPlay
#pragma region
protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay|StartPlay", meta = (AllowPrivateAccess = "true"))
	bool bOverride_StartPlay;

public:

	UFUNCTION(BlueprintImplementableEvent)
	void Override_StartPlay();

protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay|StartPlay", meta = (AllowPrivateAccess = "true"))
	bool bReceiveStartPlay;

public:

	UFUNCTION(BlueprintImplementableEvent)
	void ReceiveStartPlay();

#pragma endregion StartPlay

// ICGamePlay
#pragma region
public:

	FORCEINLINE DataType* GetData() const { return Data; }

	virtual void Start();

	virtual void End();

#pragma endregion ICGamePlay

// GamePlay
#pragma region
protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay", meta = (AllowPrivateAccess = "true"))
	bool bOverride_Start;

public:

	UFUNCTION(BlueprintImplementableEvent)
	void Override_Start();

	UPROPERTY(BlueprintAssignable)
	FCGamePlayImpl_Override_Start Override_StartImpl;

public:

	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "Start"))
	void ReceiveStart();

protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay", meta = (AllowPrivateAccess = "true"))
	bool bOverride_End;

#pragma endregion GamePlay

// ICGamePlay_Event
#pragma region
public:

	FORCEINLINE ICGamePlay_Event::FOnIntroComplete_Start& GetOnIntroComplete_Start_Event() { return OnIntroComplete_Start_Event; }

#pragma endregion ICGamePlay_Event

// GamePlay_Event
#pragma region
protected:

	ICGamePlay_Event::FOnIntroComplete_Start OnIntroComplete_Start_Event;

public:

	UFUNCTION(BlueprintCallable, Category = "CImpl|GamePlay|Event")
	void Broadcast_IntroComplete_Start()
	{
		OnIntroComplete_Start_Event.Broadcast(this);
	}

#pragma endregion GamePlay_Event

// Data
#pragma region
protected:

	DataType* Data;

#pragma endregion Data

protected:

	UPROPERTY(BlueprintReadOnly, Category = "GamePlay", meta = (AllowPrivateAccess = "true"))
	FECGamePlay Type;

public:

	virtual void Init(const FName& TypeName);
	
protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay", meta = (AllowPrivateAccess = "true"))
	bool bOverride_Init;

public:

	UPROPERTY(BlueprintAssignable)
	FCGamePlayImpl_Override_Init Override_InitImpl;

// Update
#pragma region
public:

	virtual void Update(const FCsDeltaTime& DeltaTime);

protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay|Update", meta = (AllowPrivateAccess = "true"))
	bool bOverride_Update;

public:

	UFUNCTION(BlueprintImplementableEvent)
	void Override_Update(const FCsDeltaTime& DeltaTime);

protected:

	UPROPERTY(BlueprintReadWrite, Category = "GamePlay|Update", meta = (AllowPrivateAccess = "true"))
	bool bReceiveUpdate;

public:

	UFUNCTION(BlueprintImplementableEvent)
	void ReceiveUpdate(const FCsDeltaTime& DeltaTime);

#pragma endregion Update

// State
#pragma region
public:

// TODO: Later move to EnumStruct

	enum class EState : uint8
	{
		Inactive,
		Active,
		PlayerDeath,
		PlayerDeathComplete,
		PostMatch
	};

	EState CurrentState;

#pragma endregion State

// Player
#pragma region
protected:

	//virtual void OnPlayerDeath(ACPlayerPawn* Player);
	//void OnPlayerDeathComplete(ACPlayerPawn* Player);

	void HandlePlayerDeathToPostMatch();
	char HandlePlayerDeathToPostMatch_Internal(FCsRoutine* R);

#pragma endregion Player

#undef DataType
};