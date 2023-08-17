// Copyright Studio Sai. All Rights Reserved.
#include "Game/Play/CGamePlayImpl.h"
#include "CImpl.h"

// CVar
#include "CsCVars.h"
// Coroutine
#include "Coroutine/CsCoroutineScheduler.h"
// Library
#include "Managers/Time/CsLibrary_Manager_Time.h"
#include "Coroutine/CsLibrary_CoroutineScheduler.h"
#include "Game/Play/Data/CLibrary_Data_GamePlay.h"
//#include "Game/CLibrary_GameState.h"
//#include "Player/CLibrary_Player.h"
// Game
//#include "Game/CGameState.h"
// Player
//#include "Player/CPlayerPawn.h"

// Cached
#pragma region

namespace NCGamePlayImpl
{
	namespace NCached
	{
		namespace Str
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGamePlayImpl, Init);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGamePlayImpl, HandlePlayerDeathToPostMatch);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGamePlayImpl, HandlePlayerDeathToPostMatch_Internal);
		}

		namespace Name
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGamePlayImpl, HandlePlayerDeathToPostMatch_Internal);
		}
	}
}

#pragma endregion Cached

UCGamePlayImpl::UCGamePlayImpl(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer),
	// ICsStartPlay
	bHasStartedPlay(false),
	// StartPlay
	bOverride_StartPlay(false),
	bReceiveStartPlay(false),
	// ICGamePlay
	bOverride_Start(false),
	Override_StartImpl(),
	bOverride_End(false),
	// GamePlay_Event
	OnIntroComplete_Start_Event(),
	// Data
	Data(nullptr),
	Type(),
	bOverride_Init(false),
	Override_InitImpl(),
	// Update
	bOverride_Update(false),
	bReceiveUpdate(false),
	// State
	CurrentState(EState::Inactive)
{
}

// ICsStartPlay
#pragma region

void UCGamePlayImpl::StartPlay()
{
#if WITH_EDITOR
	if (bOverride_StartPlay)
	{
		if (CS_CVAR_LOG_IS_SHOWING(LogOverrideFunctions))
		{
			UE_LOG(LogCImpl, Warning, TEXT("UCGamePlayImpl::StartPlay: OVERRIDDEN for %s."), *(GetName()));
		}

		Override_StartPlay();

		bHasStartedPlay = true;
		return;
	}
#endif // #if WITH_EDITOR

	if (bReceiveStartPlay)
		ReceiveStartPlay();
	bHasStartedPlay = true;
}

#pragma endregion ICsStartPlay

// ICGamePlay
#pragma region

void UCGamePlayImpl::Start()
{
#if WITH_EDITOR
	if (bOverride_Start)
	{
		if (CS_CVAR_LOG_IS_SHOWING(LogOverrideFunctions))
		{
			UE_LOG(LogCImpl, Warning, TEXT("UCGamePlayImpl::Start: OVERRIDDEN for %s."), *(GetName()));
		}

		// TODO: FUTURE: Add checks to see if either Override_Start or OverrideStartImpl are bound.

		Override_Start();
		Override_StartImpl.Broadcast();
		return;
	}
#endif // #if WITH_EDITOR

	ReceiveStart();
}

void UCGamePlayImpl::End()
{
}

#pragma endregion ICGamePlay

void UCGamePlayImpl::Init(const FName& TypeName)
{
	using namespace NCGamePlayImpl::NCached;

	const FString& Context = Str::Init;

	typedef NCGame::NPlay::NData::FLibrary GamePlayDataLibrary;

	Data = GamePlayDataLibrary::GetChecked(Context, this, TypeName);

	Type = EMCGamePlay::Get().GetEnum(TypeName);

	// Bind delegates
	//typedef NCPlayer::FLibrary PlayerLibrary;

	//ACPlayerPawn* Player = PlayerLibrary::GetChecked(Context, this, CS_FIRST);

	//Player->OnDeath_Event.AddUObject(this, &UCGamePlayImpl::OnPlayerDeath);
	//Player->OnDeathComplete_Event.AddUObject(this, &UCGamePlayImpl::OnPlayerDeathComplete);

	CurrentState = EState::Active;

#if WITH_EDITOR
	if (bOverride_Init)
	{
		if (CS_CVAR_LOG_IS_SHOWING(LogOverrideFunctions))
		{
			UE_LOG(LogCImpl, Warning, TEXT("UCGamePlayImpl::Init: OVERRIDDEN for %s."), *(GetName()));
		}

		// TODO: FUTURE: Add checks to see if OverrideInitImpl is bound.

		Override_InitImpl.Broadcast(TypeName);
		return;
	}
#endif // #if WITH_EDITOR
}

// Update
#pragma region

void UCGamePlayImpl::Update(const FCsDeltaTime& DeltaTime)
{
#if WITH_EDITOR
	if (bOverride_Update)
	{
		if (CS_CVAR_LOG_IS_SHOWING(LogOverrideFunctions))
		{
			UE_LOG(LogCImpl, Warning, TEXT("UCGamePlayImpl::Update: OVERRIDDEN for %s."), *(GetName()));
		}

		Override_Update(DeltaTime);
		return;
	}
#endif // #if WITH_EDITOR

	if (bReceiveUpdate)
		ReceiveUpdate(DeltaTime);
}

#pragma endregion Update

// Player
#pragma region

/*
void UCGamePlayImpl::OnPlayerDeath(ACPlayerPawn* Player)
{
	CurrentState = EState::PlayerDeath;

	HandlePlayerDeathToPostMatch();
}

void UCGamePlayImpl::OnPlayerDeathComplete(ACPlayerPawn* Player)
{
	CurrentState = EState::PlayerDeathComplete;
}
*/

void UCGamePlayImpl::HandlePlayerDeathToPostMatch()
{
	using namespace NCGamePlayImpl::NCached;

	const FString& Context = Str::HandlePlayerDeathToPostMatch;

	typedef NCsCoroutine::NScheduler::FLibrary CoroutineSchedulerLibrary;
	typedef NCsCoroutine::NPayload::FImpl PayloadType;

	UCsCoroutineScheduler* Scheduler	= CoroutineSchedulerLibrary::GetChecked(Context, this);
	const FECsUpdateGroup& UpdateGroup  = NCsUpdateGroup::GameState;
	PayloadType* Payload				= CoroutineSchedulerLibrary::AllocatePayloadChecked(Context, this, UpdateGroup);

	typedef UCGamePlayImpl ClassType;
	#define COROUTINE HandlePlayerDeathToPostMatch_Internal

	Payload->Init<ClassType>(Context, this, &ClassType::COROUTINE, this, UpdateGroup, Str::COROUTINE, Name::COROUTINE);

	#undef COROUTINE

	CoroutineSchedulerLibrary::StartChecked(Context, this, Payload);
}

char UCGamePlayImpl::HandlePlayerDeathToPostMatch_Internal(FCsRoutine* R)
{
	using namespace NCGamePlayImpl::NCached;

	const FString& Context = Str::HandlePlayerDeathToPostMatch_Internal;

	CS_COROUTINE_BEGIN(R);

	// TODO: TEMP: Add temp time to wait
	// TOOD: FUTURE: Need to make sure all characters that are queued to be deallocated have been deallocated.

	CS_COROUTINE_WAIT_UNTIL(R, R->ElapsedTime.Time > 1.0f);

	// Wait until Player Death is Complete
	CS_COROUTINE_WAIT_UNTIL(R, CurrentState == EState::PlayerDeathComplete);

	// Start EndMatch
	{
		//typedef NCGameState::FLibrary GameStateLibrary;

		//ACGameState* GameState = GameStateLibrary::GetChecked(Context, this);

		//GameState->HandleEndMatch();
	}

	CurrentState = EState::PostMatch;

	CS_COROUTINE_END(R);
}

#pragma endregion Player