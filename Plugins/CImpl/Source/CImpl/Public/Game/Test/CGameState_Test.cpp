// Copyright Studio Sai. All Rights Reserved.
#include "Game/Test/CGameState_Test.h"
#include "CImpl.h"

// Coroutine
#include "Coroutine/CsCoroutineScheduler.h"
// Library
#include "Coroutine/CsLibrary_CoroutineScheduler.h"
#include "Managers/Time/CsLibrary_Manager_Time.h"
//#include "Managers/Fade/CsLibrary_Manager_Fade.h"
#include "Managers/CsLibrary_Manager_Javascript.h"
#include "Library/CsLibrary_Common.h"
#include "Level/CsLibrary_Level.h"
// Settings
#include "Settings/CImplSettings.h"
// Singleton
#include "Game/Test/CManager_Singleton_GameState_Test.h"
// Managers
#include "Managers/Time/CsManager_Time.h"
#include "Managers/Data/CsManager_Data.h"
#include "Managers/Level/CsManager_Level.h"
#include "Managers/Input/CsManager_Input.h"
#include "Managers/FX/Actor/CsManager_FX.h"
#include "Managers/Sound/CsManager_Sound.h"
#include "Managers/Trace/CsManager_Trace.h"
//#include "Managers/UserWidget/CsManager_UserWidget.h"
#include "Managers/StaticMesh/CsManager_StaticMeshActor.h"
#include "Managers/SkeletalMesh/CsManager_SkeletalMeshActor.h"
#include "Managers/Damage/CsManager_Damage.h"
#include "Managers/CsManager_Javascript.h"
// Interface
#include "Managers/Time/Script/CsScriptUpdate.h"
// Game
#include "Game/CGameInstance.h"
#include "Game/Play/CGamePlayImpl.h"
// Level
#include "Level/CsLevelScriptActor.h"
#include "Level/CsGetLevelPayload.h"
// Script
#include "Script/CsGetScriptInfo.h"

// Cached
#pragma region

namespace NCGameStateTest
{
	namespace NCached
	{
		namespace Str
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, SetupAndRunScripts);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, SetupAndRunScripts_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, Startup);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, Startup_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, LoadLevelPayload);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, OnLoadLevelPayloadComplete);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, SetupSingletons);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, SetupSingletons_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, ExitGame);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(ACGameState_Test, ExitGame_Internal);
		}

		namespace Name
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(ACGameState_Test, SetupAndRunScripts_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(ACGameState_Test, Startup_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(ACGameState_Test, SetupSingletons_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(ACGameState_Test, ExitGame_Internal);
		}
	}
}

#pragma endregion Cached

ACGameState_Test::ACGameState_Test(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer),
	// ICsStartPlay
	bHasStartedPlay(false),
	OnActorSpawnedDelegate(),
	OnActorSpawnedDelegateHandle(),
	ObjectsQueuedForStartPlay(),
	// Manager_Singleton
	Manager_Singleton(nullptr),
	bSetupSingletons(false),
	// Startup
	StartupState(EStartup::None),
	// Update
	UpdateObjects(),
	// Shutdown
	OnShutdown_ScriptEvent(),
	// Exit
	bFinishedExitGame(false)
{
	PrimaryActorTick.bCanEverTick = true;
	PrimaryActorTick.bStartWithTickEnabled = true;
}

// UObject Interface
#pragma region

void ACGameState_Test::BeginDestroy()
{
	Super::BeginDestroy();

	if (GetWorld())
	{
		GetWorld()->RemoveOnActorSpawnedHandler(OnActorSpawnedDelegateHandle);
	}

	Shutdown();
}

#pragma endregion UObject Interface

// AActor Interface
#pragma region 

void ACGameState_Test::BeginPlay()
{
	Super::BeginPlay();

	OnActorSpawnedDelegate.BindUObject(this, &ACGameState_Test::OnActorSpawned);

	OnActorSpawnedDelegateHandle = GetWorld()->AddOnActorSpawnedHandler(OnActorSpawnedDelegate);

	GamePlayImpl = NewObject<UCGamePlayImpl>(this);
	GamePlayImpl->RegisterComponent();

	if (GamePlayImpl->GetClass()->ImplementsInterface(UCsStartPlay::StaticClass()))
		ObjectsQueuedForStartPlay.Add(GamePlayImpl);

	Startup();
}

void ACGameState_Test::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);

	UGameInstance* GameInstance = GetGameInstance();
	
	// Update Time
	UCsManager_Time* Manager_Time = UCsManager_Time::Get(GameInstance);

	const FECsUpdateGroup& Group = NCsUpdateGroup::GameState;

		// If Paused, Exit
	if (Manager_Time->IsPaused(Group))
		return;

	Manager_Time->Update(Group, DeltaSeconds);

	const FCsDeltaTime& DeltaTime = Manager_Time->GetScaledDeltaTime(Group);

	// Update CoroutineScheduler
	UCsCoroutineScheduler::Get(GameInstance)->Update(Group, DeltaTime);

	GamePlayImpl->Update(DeltaTime);

	if (StartupState != EStartup::Complete)
		return;
	
	UCsManager_Trace::Get(this)->Update(DeltaTime);
	UCsManager_Sound::Get(this)->Update(DeltaTime);
	UCsManager_FX::Get(this)->Update(DeltaTime);
	UCsManager_StaticMeshActor::Get(this)->Update(DeltaTime);
	UCsManager_SkeletalMeshActor::Get(this)->Update(DeltaTime);

	// Update UpdateObjects with DeltaTime
	for (FCsUpdate& UpdateObject : UpdateObjects)
	{
		UpdateObject.Update(DeltaTime);
	}

	OnUpdate_ScriptEvent.Broadcast(DeltaTime);
}

#pragma endregion AActor Interface

// AGameStateBase Interface
#pragma region

void ACGameState_Test::SeamlessTravelTransitionCheckpoint(bool bToTransitionMap)
{
	Super::SeamlessTravelTransitionCheckpoint(bToTransitionMap);

	Shutdown();
}

#pragma endregion AGameStateBase Interface

// ICsStartPlay
#pragma region

void ACGameState_Test::StartPlay()
{
	using namespace NCGameStateTest::NCached;

	checkf(!bHasStartedPlay, TEXT("ACGameState_Test::StartPlay: StartPlay has already been called."));

	UWorld* World = GetWorld();

	for (TActorIterator<AActor> Itr(World); Itr; ++Itr)
	{
		AActor* A = *Itr;

		// Check is Valid and NOT getting destroyed
		if (!IsValid(A))
			continue;

		// Check NOT the GameState
		if (A == this)
			continue;

		OnActorSpawned(A);
	}

	// Any Queued Objects implementing the interface: ICsStartPlay, should call StartPlay
	for (TWeakObjectPtr<UObject>& Object : ObjectsQueuedForStartPlay)
	{
		UObject* O = Object.IsValid() ? Object.Get() : nullptr;

		if (!IsValid(O))
			continue;

		// ICsStartPlay
		if (ICsStartPlay* Interface = Cast<ICsStartPlay>(O))
		{
			if (!Interface->HasStartedPlay())
			{
				Interface->StartPlay();
			}
		}
	}
	ObjectsQueuedForStartPlay.Reset();

	bHasStartedPlay = true;
}

#pragma endregion ICsStartPlay

void ACGameState_Test::OnActorSpawned(AActor* Actor)
{
	// ICsStartPlay
	if (Actor->GetClass()->ImplementsInterface(UCsStartPlay::StaticClass()))
	{
		bool ShouldAddOrStart = true;

		if (ShouldAddOrStart)
		{
			if (bHasStartedPlay)
			{
				if (ICsStartPlay* Interface = Cast<ICsStartPlay>(Actor))
				{
					Interface->StartPlay();
				}
			}
			else
			{
				ObjectsQueuedForStartPlay.Add(Actor);
			}
		}
	}
	// ICsUpdate
	if (Actor->GetClass()->ImplementsInterface(UCsUpdate::StaticClass()))
	{
		bool ShouldAdd = true;

		// ICsFXActorPooled objects get Update through UCsManager_FX
		if (Actor->GetClass()->ImplementsInterface(UCsFXActorPooled::StaticClass()))
			ShouldAdd = false;
		// ICsSoundPooled objects get Update through UCsManager_Sound
		if (Actor->GetClass()->ImplementsInterface(UCsSoundPooled::StaticClass()))
			ShouldAdd = false;
		// ICsStaticMeshActor objects Update through UCsManager_StaticMeshActor
		if (Actor->GetClass()->ImplementsInterface(UCsStaticMeshActor::StaticClass()))
			ShouldAdd = false;
		// ICsSkeletalMeshActor objects Update through UCsManager_SkeletalMeshActor
		if (Actor->GetClass()->ImplementsInterface(UCsSkeletalMeshActor::StaticClass()))
			ShouldAdd = false;

		if (ShouldAdd)
		{
			UpdateObjects.AddDefaulted();
			FCsUpdate& Last = UpdateObjects.Last();

			Last.SetObject(Actor);

			if (Last.IsScript())
				Last.Script_Update_Impl.BindStatic(&ICsScriptUpdate::Execute_Script_Update);
		}
	}
}

// Manager Singleton
#pragma region

void ACGameState_Test::ConstructManagerSingleton()
{
	Manager_Singleton = NewObject<UCManager_Singleton_GameState_Test>(GetGameInstance(), UCManager_Singleton_GameState_Test::StaticClass());
}

void ACGameState_Test::SetupSingletons()
{
	using namespace NCGameStateTest::NCached;	

	const FString& Context = Str::SetupSingletons;

	typedef NCsCoroutine::NScheduler::FLibrary CoroutineSchedulerLibrary;
	typedef NCsCoroutine::NPayload::FImpl PayloadType;

	UCsCoroutineScheduler* Scheduler   = CoroutineSchedulerLibrary::GetChecked(Context, this);
	const FECsUpdateGroup& UpdateGroup = NCsUpdateGroup::GameState;
	PayloadType* Payload			   = CoroutineSchedulerLibrary::AllocatePayloadChecked(Context, this, UpdateGroup);

	typedef ACGameState_Test ClassType;
	#define COROUTINE SetupSingletons_Internal

	Payload->Init<ClassType>(Context, this, &ClassType::COROUTINE, this, UpdateGroup, Str::COROUTINE, Name::COROUTINE);

	#undef COROUTINE

	CoroutineSchedulerLibrary::StartChecked(Context, this, Payload);
}

char ACGameState_Test::SetupSingletons_Internal(FCsRoutine* R)
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::SetupSingletons_Internal;

	CS_COROUTINE_BEGIN(R);

	ConstructManagerSingleton();

	// Wait until Manager_Sound has been Initialized
	UCsManager_Sound::Init(this, UCsManager_Sound::StaticClass(), GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Sound::HasInitialized(this));
	
	UCsManager_Sound::Get(this)->BindToOnPause(NCsUpdateGroup::GameState);

	// Wait until Manager_FX has been Initialized
	UCsManager_FX::Init(this, UCsManager_FX::StaticClass(), GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_FX::HasInitialized(this));

	UCsManager_FX::Get(this)->BindToOnPause(NCsUpdateGroup::GameState);

	// Wait until Manager_Trace has been Initialized
	UCsManager_Trace::Init(this, UCsManager_Trace::StaticClass(), GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Trace::HasInitialized(this));

	// Wait until Manager_UserWidget has been Initialized
	//UCsManager_UserWidget::Init(this, UCsManager_UserWidget::StaticClass(), GetGameInstance());

	//CS_COROUTINE_WAIT_UNTIL(R, UCsManager_UserWidget::HasInitialized(this));

	// Wait until Manager_StaticMeshActor has been Initialized
	UCsManager_StaticMeshActor::Init(this, UCsManager_StaticMeshActor::StaticClass(), GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_StaticMeshActor::HasInitialized(this));

	// Wait until Manager_SkeletalMeshActor has been Initialized
	UCsManager_SkeletalMeshActor::Init(this, UCsManager_SkeletalMeshActor::StaticClass(), GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_SkeletalMeshActor::HasInitialized(this));

	// Wait until Manager_Damage has been Initialized
	UCsManager_Damage::Init(this, UCsManager_Damage::StaticClass(), GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Damage::HasInitialized(this));

	bSetupSingletons = true;

	StartupState = EStartup::SetupSingletonsComplete;

	CS_COROUTINE_END(R);
}

void ACGameState_Test::ShutdownSingletons()
{
	if (Manager_Singleton)
	{
		UCsManager_Sound::Shutdown(this);
		UCsManager_FX::Shutdown(this);
		UCsManager_Trace::Shutdown(this);
		//UCsManager_UserWidget::Shutdown(this);
		UCsManager_StaticMeshActor::Shutdown(this);
		UCsManager_SkeletalMeshActor::Shutdown(this);
		UCsManager_Damage::Shutdown(this);

		Manager_Singleton->MarkAsGarbage();
		Manager_Singleton = nullptr;
	}
}

void ACGameState_Test::OnBeginDestroy_ShutdownSingletons()
{
	ShutdownSingletons();
}

#pragma endregion Manager Singleton

// Script
#pragma region

void ACGameState_Test::SetupAndRunScripts()
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::SetupAndRunScripts;

	UCGameInstance* GameInstance = Cast<UCGameInstance>(GetGameInstance());

	if (!GameInstance->IsPIE())
	{
		StartupState = EStartup::SetupAndRunScriptsComplete;
		return;
	}

	typedef NCsLevel::NPersistent::FLibrary LevelLibrary;

	ICsGetScriptInfo* GetScriptInfo = LevelLibrary::GetSafeSetupData<ICsGetScriptInfo>(this);

	if (!GetScriptInfo)
	{
		StartupState = EStartup::SetupAndRunScriptsComplete;
		return;
	}

	const FCsScriptInfo& Info = GetScriptInfo->GetScriptInfo();

	if (!Info.IsValid(Context))
	{
		StartupState = EStartup::SetupAndRunScriptsComplete;
		return;
	}

	typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

	UObject* ContextRoot					  = JavascriptManagerLibrary::GetEngineContextRoot();
	UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::Get(ContextRoot);

	Manager_Javascript->SetWorldContext(GetWorld());
	Manager_Javascript->SetupCallbacks();
	Manager_Javascript->SetScriptInfo(Info);
	Manager_Javascript->ConditionalCreateScriptObject();

	typedef NCsCoroutine::NScheduler::FLibrary CoroutineSchedulerLibrary;
	typedef NCsCoroutine::NPayload::FImpl PayloadType;

	UCsCoroutineScheduler* Scheduler   = CoroutineSchedulerLibrary::GetChecked(Context, this);
	const FECsUpdateGroup& UpdateGroup = NCsUpdateGroup::GameState;
	PayloadType* Payload			   = CoroutineSchedulerLibrary::AllocatePayloadChecked(Context, this, UpdateGroup);

	typedef ACGameState_Test ClassType;
	#define COROUTINE SetupAndRunScripts_Internal

	Payload->Init<ClassType>(Context, this, &ClassType::COROUTINE, this, UpdateGroup, Str::COROUTINE, Name::COROUTINE);

	#undef COROUTINE

	CoroutineSchedulerLibrary::StartChecked(Context, this, Payload);
}

char ACGameState_Test::SetupAndRunScripts_Internal(FCsRoutine* R)
{	
	typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

	UObject* ContextRoot = JavascriptManagerLibrary::GetEngineContextRoot();

	UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::Get(ContextRoot);

	CS_COROUTINE_BEGIN(R);
	
	Manager_Javascript->SetupScriptObjects(GetGameInstance());

	CS_COROUTINE_WAIT_UNTIL(R, Manager_Javascript->IsSetupScriptObjectsComplete());

	Manager_Javascript->RunScripts();

	StartupState = EStartup::SetupAndRunScriptsComplete;

	CS_COROUTINE_END(R);
}

#pragma endregion Script

// Startup 
#pragma region

void ACGameState_Test::Startup()
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::Startup;

	typedef NCsCoroutine::NScheduler::FLibrary CoroutineSchedulerLibrary;
	typedef NCsCoroutine::NPayload::FImpl PayloadType;

	UCsCoroutineScheduler* Scheduler   = CoroutineSchedulerLibrary::GetChecked(Context, this);
	const FECsUpdateGroup& UpdateGroup = NCsUpdateGroup::GameState;
	PayloadType* Payload			   = CoroutineSchedulerLibrary::AllocatePayloadChecked(Context, this, UpdateGroup);

	typedef ACGameState_Test ClassType;
	#define COROUTINE Startup_Internal

	Payload->Init<ClassType>(Context, this, &ClassType::COROUTINE, this, UpdateGroup, Str::COROUTINE, Name::COROUTINE);

	#undef COROUTINE

	CoroutineSchedulerLibrary::StartChecked(Context, this, Payload);
}

char ACGameState_Test::Startup_Internal(FCsRoutine* R)
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::Startup_Internal;

	UCGameInstance* GameInstance = Cast<UCGameInstance>(GetGameInstance());

	CS_COROUTINE_BEGIN(R);

	// Bind delegates for Time related events
	{
		typedef NCsTime::NManager::FLibrary TimeManagerLibrary;

		const FECsUpdateGroup& Group = NCsUpdateGroup::GameState;
		FDelegateHandle Handle		 = UCsManager_Time::Get(GameInstance)->GetOnPause_Event(Group).AddUObject(this, &ACGameState_Test::Pause);

		OnPauseHandleByGroupMap.Add(Group, Handle);
	}

	// Set Black
	/*typedef NCsFade::NManager::FLibrary FadeManagerLibrary;
	typedef NCsFade::FParams FadeParamsType;

	{
		FadeParamsType Params;
		Params.From = FLinearColor::Black;
		Params.To = FLinearColor::Black;
		Params.Time = 0.0f;

		FadeManagerLibrary::SafeFade(this, Params);
	}*/

	// Wait until Persistent Level is loaded
	UCsManager_Level::Get(GameInstance)->Check_FinishedLoadingPersistentLevel();

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Level::Get(GameInstance)->HasFinishedLoadingPersistentLevel());

	StartupState = EStartup::FinishedLoadingPersistentLevel;

	CS_COROUTINE_WAIT_UNTIL(R, GameInstance->HasFinishedTransition());

	//FadeManagerLibrary::ClearFadeChecked(Context, this);

	// Wait until Level Payload is loaded
	// TODO: Make optional in Test
	LoadLevelPayload();

	CS_COROUTINE_WAIT_UNTIL(R, StartupState == EStartup::LoadLevelPayloadComplete)

	// Populate Enums

	// Wait until Setup Singletons is complete
	SetupSingletons();

	CS_COROUTINE_WAIT_UNTIL(R, StartupState == EStartup::SetupSingletonsComplete);

	SetupAndRunScripts();

	CS_COROUTINE_WAIT_UNTIL(R, StartupState == EStartup::SetupAndRunScriptsComplete);

	StartPlay();

	StartupState = EStartup::Complete;

	CS_COROUTINE_END(R);
}

void ACGameState_Test::LoadLevelPayload()
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::LoadLevelPayload;

	typedef NCsLevel::NPersistent::FLibrary LevelLibrary;

	ICsGetLevelPayload* GetLevelPayload = LevelLibrary::GetSafeSetupData<ICsGetLevelPayload>(Context, this);

	if (!GetLevelPayload)
	{
		StartupState = EStartup::LoadLevelPayloadComplete;
		return;
	}

	const FName LevelName = LevelLibrary::GetSafeFName(Context, this);

	if (LevelName == NAME_None)
	{
		StartupState = EStartup::LoadLevelPayloadComplete;
		return;
	}

	UGameInstance* GameInstance = GetGameInstance();

	// TODO: Add IsValidChecked and IsValid to FCsPayload
	const FCsPayload& Payload = GetLevelPayload->GetLevelPayload();

	UCsManager_Data::Get(GameInstance)->AddPayload(LevelName, Payload);

	UCsManager_Data::FOnAsyncLoadPayloadComplete Delegate = UCsManager_Data::FOnAsyncLoadPayloadComplete::CreateUObject(this, &ACGameState_Test::OnLoadLevelPayloadComplete);

	UCsManager_Data::Get(GameInstance)->AsyncLoadPayload(LevelName, Delegate);
}

void ACGameState_Test::OnLoadLevelPayloadComplete(bool WasSuccessful, const FName& PayloadName)
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::OnLoadLevelPayloadComplete;

	checkf(WasSuccessful, TEXT("%s: Failed to load Payload: %s"), *Context, *(PayloadName.ToString()));

	typedef NCsLevel::NPersistent::FLibrary LevelLibrary;

	const FName LevelName = LevelLibrary::GetFNameChecked(Context, this);

	checkf(PayloadName == LevelName, TEXT("%s: Wrong Payload loaded. Payload != Level (%s != %s)."), *Context, *(PayloadName.ToString()), *(LevelName.ToString()));

	StartupState = EStartup::LoadLevelPayloadComplete;
}

#pragma endregion Startup

// Pause
#pragma region

void ACGameState_Test::Pause(const FECsUpdateGroup& Group, bool bPaused)
{
}

#pragma endregion Pause

// GamePlay
#pragma region

void ACGameState_Test::SetGamePlayImpl(TSubclassOf<UCGamePlayImpl> ImplClass)
{
	checkf(ImplClass.Get(), TEXT("ACGameState_Test::SetGamePlayImpl: ImplClass is NULL."));

	GamePlayImpl->UnregisterComponent();
	GamePlayImpl->MarkAsGarbage();

	GamePlayImpl = NewObject<UCGamePlayImpl>(this, ImplClass);

	checkf(GamePlayImpl, TEXT("ACGameState_Test::SetGamePlayImpl: Failed to create GamePlayImpl from Class: %s."), *(ImplClass.Get()->GetName()));

	GamePlayImpl->RegisterComponent();

	if (bHasStartedPlay)
	{
		if (GamePlayImpl->GetClass()->ImplementsInterface(UCsStartPlay::StaticClass()))
		{
			if (ICsStartPlay* Interface = Cast<ICsStartPlay>(GamePlayImpl))
			{
				Interface->StartPlay();
			}
		}
	}
	else
	{
		ObjectsQueuedForStartPlay.Add(GamePlayImpl);
	}
}

#pragma endregion GamePlay

// Shutdown
#pragma region

void ACGameState_Test::Shutdown()
{
	// Shutdown Javascript Entry Point
#if WITH_EDITOR
	{
		/*
		typedef NCsJs::NManager::FLibrary JavascriptManagerLibrary;

		if (UObject* ContextRoot = JavascriptManagerLibrary::GetEngineContextRoot())
		//if (UObject* ContextRoot = JavascriptManagerLibrary::GetSafeContextRoot(this))
		{
			if (UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::GetSafe(ContextRoot))
			{
				// TODO: Look into ending script
				//		 or 
				//		 Broadcast a message to the script
				//Manager_Javascript->ShutdownGameStateEntryPoint();
			}
		}
		*/
	}
#endif // #if WITH_EDITOR

	ShutdownSingletons();

	// Unbind delegates for Time related events
	{
		typedef NCsTime::NManager::FLibrary TimeManagerLibrary;

		if (UCsManager_Time* Manager_Time = TimeManagerLibrary::GetSafe(this))
		{
			// Pause
			for (const TPair<FECsUpdateGroup, FDelegateHandle>& Pair : OnPauseHandleByGroupMap)
			{
				const FECsUpdateGroup& Group  = Pair.Key;
				const FDelegateHandle& Handle = Pair.Value;

				Manager_Time->RemoveOnPause(Group, Handle);
			}
		}
		OnPauseHandleByGroupMap.Reset();
	}
}

#pragma endregion Shutdown

// Exit
#pragma region

void ACGameState_Test::OnQueueExitGame()
{
	ExitGame();
}

void ACGameState_Test::ExitGame()
{
	using namespace NCGameStateTest::NCached;

	const FString& Context = Str::ExitGame;

	typedef NCsCoroutine::NScheduler::FLibrary CoroutineSchedulerLibrary;
	typedef NCsCoroutine::NPayload::FImpl PayloadType;
	
	UCsCoroutineScheduler* Scheduler   = CoroutineSchedulerLibrary::GetChecked(Context, this);
	const FECsUpdateGroup& UpdateGroup = NCsUpdateGroup::GameInstance;
	PayloadType* Payload			   = CoroutineSchedulerLibrary::AllocatePayloadChecked(Context, this, UpdateGroup);

	typedef ACGameState_Test ClassType;
	#define COROUTINE ExitGame_Internal

	Payload->Init<ClassType>(Context, this, &ClassType::COROUTINE, this, UpdateGroup, Str::COROUTINE, Name::COROUTINE);

	#undef COROUTINE

	bFinishedExitGame = false;

	CoroutineSchedulerLibrary::StartChecked(Context, this, Payload);
}

char ACGameState_Test::ExitGame_Internal(FCsRoutine* R)
{
	CS_COROUTINE_BEGIN(R);

	// TODO: Disable Input

	// Queue deallocating all fx
	UCsManager_FX::Get(this)->Pause(NCsUpdateGroup::GameState, false);
	UCsManager_FX::Get(this)->QueueDeallocateAll();

	// Wait until all the fx have been properly deallocated
	do
	{
		{
			// Force update on Manager FX
			UCsManager_FX::Get(this)->Update(R->DeltaTime);

			CS_COROUTINE_YIELD(R);
		}
	} while (UCsManager_FX::Get(this)->IsAnyAllocated());

	bFinishedExitGame = true;

	CS_COROUTINE_END(R);
}

#pragma endregion Exit