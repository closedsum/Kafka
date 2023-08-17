// Copyright 2017-2023 Closed Sum Games, LLC. All Rights Reserved.
#include "Game/CGameInstance.h"
#include "CImpl.h"

// CVar
#include "Game/CCVars_GameInstance.h"
// Coroutine
#include "Coroutine/CsCoroutineScheduler.h"
// Types
//#include "Managers/Menu/CTypes_Menu.h"
// Library
//#include "Managers/Fade/CsLibrary_Manager_Fade.h"
#include "Managers/Input/CsLibrary_Manager_Input.h"
#include "ConsoleCommand/CsLibrary_ConsoleCommand.h"
	// Data
#include "Data/CsLibrary_DataRootSet.h"
#include "Data/CLibrary_DataRootSet.h"
//#include "Game/CLibrary_GameState.h"
	// UI
//#include "UI/Menu/Main/Game/CLibrary_GameState_MenuMain.h"
#include "Level/CsLibrary_Level.h"
// Singleton
#include "Game/CManager_Singleton_GameInstance.h"
// Settings
#include "GameMapsSettings.h"
#include "Settings/CImplSettings.h"
// Managers
#include "Managers/Time/CsManager_Time.h"
#include "Managers/Data/CsManager_Data.h"
//#include "Managers/Menu/CsManager_Menu.h"
#include "Managers/Level/CsManager_Level.h"
//#include "Managers/Menu/CManager_Menu.h"
#include "Managers/Level/CManager_Level.h"
//#include "Managers/Fade/CsManager_Fade.h"
#include "Managers/CsManager_Javascript.h"
//#include "Managers/PlayerProfile/CsManager_PlayerProfile.h"
//#include "Managers/Save/CManager_Save.h"
// Coordinators
#include "Coordinators/GameEvent/CsCoordinator_GameEvent.h"
// Data
#include "Data/CsGetDataRootSet.h"
// Player
//#include "Managers/PlayerProfile/CsPlayerProfile.h"
// Engine
#include "HardwareInfo.h"
#include "Engine/Engine.h"

#if WITH_EDITOR

#include "Editor.h"
#endif // #if WITH_EDITOR

// Cached
#pragma region

namespace NCGameInstance
{
	namespace NCached
	{
		namespace Str
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, Init);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, ExitGame_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, Startup_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, StartPlatformServices_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, StartAsyncLoadStartupPayload);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, SafeAsyncLoadStartupPayload);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, MenuMain_To_Play_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, Play_To_MenuMain_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, SameMap_To_SameMap_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, MenuMain_To_Hub_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, Hub_To_Level);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_STRING(UCGameInstance, Hub_To_Level_Internal);
		}

		namespace Name
		{
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, Startup_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, StartPlatformServices_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, MenuMain_To_Play_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, Play_To_MenuMain_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, SameMap_To_SameMap_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, MenuMain_To_Hub_Internal);
			CS_DEFINE_CACHED_FUNCTION_NAME_AS_NAME(UCGameInstance, Hub_To_Level_Internal);
		}
	}
}
#pragma endregion Cached

UCGameInstance::UCGameInstance(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer),
	// Startup
	StartupState(EStartup::None),
	OnFinishedLoadingStartupPayload_ScriptEvent(),
	OnStartupPayloadCompleted_Event(),
	bFinishedStartup(false),
	// Transition
	bHasPerformedTransition(false)
{
}

// UGameInstance Interface
#pragma region

void UCGameInstance::Init()
{
	Super::Init();

	using namespace NCGameInstance::NCached;

	const FString& Context = Str::Init;

	UCsManager_Data::Init(this);
	//UCsManager_Menu::Init(this, UCManager_Menu::StaticClass());
	UCsManager_Level::Init(this, UCManager_Level::StaticClass());
	//UCsManager_Fade::Init(this, UCsManager_Fade::StaticClass());
	UCsManager_Javascript::Init(this);
	//UCsManager_PlayerProfile::Init(this);
	//UCsManager_Save::Init(this, UCManager_Save::StaticClass());

	//UCManager_Save::Get<UCManager_Save>(this)->SetupDelegateBindings();

	// Events
	{
		UCImplSettings* ModuleSettings = GetMutableDefault<UCImplSettings>();

		checkf(EMCsGameEvent::Get().IsValidEnum(ModuleSettings->ApplicationQuitEvent), TEXT("UCGameInstance::Init: UCImplSettings.ApplicationQuitEvent: %s is NOT Valid."), ModuleSettings->ApplicationQuitEvent.ToChar());
	}
	// Bind OnProcessGameEventInfo
	{
		typedef UCsCoordinator_GameEvent::FOnProcessGameEventInfo DelegateType;

		const FECsGameEventCoordinatorGroup& Group = NCsGameEventCoordinatorGroup::GameInstance;

		DelegateType& Delegate = UCsCoordinator_GameEvent::Get(this)->GetOnProcessGameEventInfo_Event(Group);
		Delegate.AddUObject(this, &UCGameInstance::OnProcessGameEventInfo);
	}

	Startup();
}

void UCGameInstance::Shutdown()
{
	Super::Shutdown();

	UCsManager_Data::Shutdown(this);
	//UCsManager_Menu::Shutdown(this);
	UCsManager_Level::Shutdown(this);
	//UCsManager_Fade::Shutdown(this);
	//UCsManager_PlayerProfile::Shutdown(this);
	//UCsManager_Save::Shutdown(this);
}

#pragma endregion UGameInstance Interface

// UCsGameInstance Interface
#pragma region

	// Tick
#pragma region

bool UCGameInstance::Tick(float DeltaSeconds)
{
	if (!Super::Tick(DeltaSeconds))
		return false;

	// Get DeltaTime
	UCsManager_Time* Manager_Time = UCsManager_Time::Get(this);

	const FECsUpdateGroup& Group  = NCsUpdateGroup::GameInstance;
	const FCsDeltaTime& DeltaTime = Manager_Time->GetScaledDeltaTime(Group);

	//UCsManager_Save::Get(this)->Update(DeltaTime);
	//UCsManager_Menu::Get(this)->Update(DeltaSeconds);
	return true;
}

#pragma endregion Tick

	// Exit
#pragma region

bool UCGameInstance::CanExitGame()
{
	//typedef NCGameState::FLibrary GameStateLibrary;

	//return GameStateLibrary::SafeHasFinishedExitGame(this);
	return true;
}

char UCGameInstance::ExitGame_Internal(FCsRoutine* R)
{
	using namespace NCGameInstance::NCached;

	const FString& Context = Str::ExitGame_Internal;

	CS_COROUTINE_BEGIN(R);

	CS_COROUTINE_WAIT_UNTIL(R, CanExitGame());

	//typedef NCsFade::NManager::FLibrary FadeManagerLibrary;
	//typedef NCsFade::FParams FadeParamsType;

	//// Set Black
	//{
	//	FadeParamsType Params;
	//	Params.From = FLinearColor::Black;
	//	Params.To = FLinearColor::Black;
	//	Params.Time = 0.0f;

	//	FadeManagerLibrary::SafeFade(this, Params);
	//}

	// Start Transition to Exit Map
	{
		typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

		const FCsDataRootSet& DataRootSet = DataRootSetLibrary::GetChecked(Context, this);
		const FSoftObjectPath& ExitMap	  = DataRootSet.ExitMap;
		const FString URL				  = ExitMap.GetLongPackageName();

		typedef UCsManager_Level::FChangeMapParams ChangeMapParamsType;

		ChangeMapParamsType Params;
		Params.Map = URL;

		// TODO: Have a transition map per transition "type"
		UCsManager_Level::Get(this)->ChangeMap(Params);
	}

	// Wait until the Exit Map has loaded
	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Level::Get(this)->HasChangeMapCompleted());

#if WITH_EDITOR
	if (IsStandaloneFromEditor())
		FPlatformMisc::RequestExit(false);
	else
		GEditor->RequestEndPlayMap();
#elif (PLATFORM_LINUX && UE_BUILD_SHIPPING)
	FPlatformMisc::RequestExit(true);
#else
	FPlatformMisc::RequestExit(false);
#endif // #if WITH_EDITOR

	CS_COROUTINE_END(R);
}

#pragma endregion Exit

	// Managers
#pragma region

void UCGameInstance::ConstructManagerSingleton()
{
	Manager_Singleton = NewObject<UCManager_Singleton_GameInstance>(this, UCManager_Singleton_GameInstance::StaticClass());
}

#pragma endregion Managers

#pragma endregion UCsGameInstance Interface

// Startup
#pragma region

void UCGameInstance::Startup()
{
	using namespace NCGameInstance::NCached;

	const FECsUpdateGroup& UpdateGroup = NCsUpdateGroup::GameInstance;
	UCsCoroutineScheduler* Scheduler   = UCsCoroutineScheduler::Get(this);

	typedef NCsCoroutine::NPayload::FImpl PayloadType;

	PayloadType* Payload = Scheduler->AllocatePayload(UpdateGroup);

	#define COROUTINE Startup_Internal

	Payload->CoroutineImpl.BindUObject(this, &UCGameInstance::Startup_Internal);
	Payload->StartTime = UCsManager_Time::Get(this)->GetTime(UpdateGroup);
	Payload->Owner.SetObject(this);
	Payload->SetName(Str::COROUTINE);
	Payload->SetFName(Name::COROUTINE);

	#undef COROUTINE

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("UCGameInstance::Startup: Starting Startup."));
	}
#endif // #if !UE_BUILD_SHIPPING

	Scheduler->Start(Payload);
}

char UCGameInstance::Startup_Internal(FCsRoutine* R)
{
	using namespace NCGameInstance::NCached;

	const FString& Context = Str::Startup_Internal;

	CS_COROUTINE_BEGIN(R);

	// Wait until the World is VALID
	CS_COROUTINE_WAIT_UNTIL(R, GetWorld());

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: World is VALID."), *Context);
	}
#endif // #if !UE_BUILD_SHIPPING

	// For StandaloneFromEditor, wait for OnStart
#if WITH_EDITOR
	if (IsStandaloneFromEditor())
	{
		CS_COROUTINE_WAIT_UNTIL(R, HasOnStart());
	}
#endif // #if WITH_EDITOR

	// Start Platform Services
	//StartPlatformServices();

	//CS_COROUTINE_WAIT_UNTIL(R, StartupState == EStartup::FinishedSetupPlatformServices);

	// TODO: FUTURE: Need to check for Linux and NOT Steam Deck
#if PLATFORM_WINDOWS
	//SetupScreenResolution();
#endif // PLATFORM_WINDOWS

	// Wait until Entry level is loaded
	{
#if WITH_EDITOR
		if (IsPIE() || IsStandaloneFromEditor())
		{
			UCsManager_Level::Get(this)->Check_FinishedLoadingPersistentLevel(FString());
		}
		else
#endif // #if WITH_EDITOR
		{
			typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

			const FCsDataRootSet& DataRootSet = DataRootSetLibrary::GetChecked(Context, this);
			const FSoftObjectPath& EntryMap	  = DataRootSet.EntryMap;

			checkf(EntryMap.IsValid(), TEXT("%s: UDeveloperSettings.EntryMap: %s is NOT Valid."), *(EntryMap.GetLongPackageName()));

			UCsManager_Level::Get(this)->Check_FinishedLoadingPersistentLevel(EntryMap.GetLongPackageName());
		}
	}

	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Level::Get(this)->HasFinishedLoadingPersistentLevel());

	// Create Fade Widget
	/*typedef NCsFade::NManager::FLibrary FadeManagerLibrary;

	FadeManagerLibrary::CreateFadeWidget(Context, this);*/

	// For PIE, check if current map is EntryMap
#if WITH_EDITOR
	if (IsPIE() || IsStandaloneFromEditor())
	{
		if (!IsPersistentLevel_Entry(Context))
		{
			if (IsPersistentLevel_Main(Context))
			{
				CurrentState = EState::MenuMain;
			}
			else
			{
				CurrentState = EState::Play;
			}
		}
		else
		{
			bHasStartedFromEntry = true;
		}
	}
#else
	bHasStartedFromEntry = true;
#endif // #if WITH_EDITOR

	StartupState = EStartup::FinishedLoadingEntryLevel;

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Entry Level is loaded."), *Context);
	}
#endif // #if !UE_BUILD_SHIPPING

	// Wait until GameState is VALID
	CS_COROUTINE_WAIT_UNTIL(R, GetWorld()->GetGameState());

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: GameState is VALID."), *Context);
	}
#endif // #if !UE_BUILD_SHIPPING

	// Start Async Loading
	StartAsyncLoadStartupPayload();

	// Wait until Base Content is loaded
	CS_COROUTINE_WAIT_UNTIL(R, StartupState == EStartup::FinishedLoadingStartUpPayload);

	OnFinishedLoadingStartupPayload_ScriptEvent.Broadcast();

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Startup Payload has been loaded."), *Context);
	}
#endif // #if !UE_BUILD_SHIPPING

	OnStartupPayloadCompleted_Event.Broadcast();

	// For PIE, if NOT Entry map, EXIT
#if WITH_EDITOR
	if (IsPIE() || IsStandaloneFromEditor())
	{
		if (!IsPersistentLevel_Entry(Context))
		{
			bFinishedTransition = true;

			//UCsManager_Fade::Get(this)->ClearFade();

			CS_COROUTINE_EXIT(R);
		}
	}
#endif // #if WITH_EDITOR

	// Wait until finished Startup
	CS_COROUTINE_WAIT_UNTIL(R, bFinishedStartup);

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Start Up is finished."), *Context);
	}
#endif // #if !UE_BUILD_SHIPPING

	// Transition to Main
	{
		UGameMapsSettings* MapsSettings = GetMutableDefault<UGameMapsSettings>();

		typedef NCsDataRootSet::FLibrary DataRootSetLibrary;

		const FCsDataRootSet& DataRootSet = DataRootSetLibrary::GetChecked(Context, this);

		MapsSettings->TransitionMap = DataRootSet.TransitionEntryToMainMap;

		const FSoftObjectPath& MainMap = DataRootSet.MainMap;
		const FString URL			   = MainMap.GetLongPackageName();

#if !UE_BUILD_SHIPPING
		if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
		{
			UE_LOG(LogCImpl, Warning, TEXT("%s: Transition to Main Map: %s."), *Context, *URL);
		}
#endif // #if !UE_BUILD_SHIPPING

		GetWorld()->ServerTravel(URL);
		UCsManager_Level::Get(this)->Check_FinishedLoadingPersistentLevel(URL);
	}

	// Wait until the Main Map is loaded
	CS_COROUTINE_WAIT_UNTIL(R, UCsManager_Level::Get(this)->HasFinishedLoadingPersistentLevel());

	bFinishedTransition = true;

	CurrentState = EState::MenuMain;

#if !UE_BUILD_SHIPPING
	if (CS_CVAR_LOG_IS_SHOWING(LogGameStartup))
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Finished loading Main Map."), *Context);
	}
#endif // #if !UE_BUILD_SHIPPING

	CS_COROUTINE_END(R);
}

//void UCGameInstance::StartPlatformServices()
//{
//	using namespace NCGameInstance::NCached;
//
//	const FECsUpdateGroup& UpdateGroup = NCsUpdateGroup::GameInstance;
//	UCsCoroutineScheduler* Scheduler   = UCsCoroutineScheduler::Get(this);
//
//	typedef NCsCoroutine::NPayload::FImpl PayloadType;
//
//	PayloadType* Payload = Scheduler->AllocatePayload(UpdateGroup);
//
//	#define COROUTINE StartPlatformServices_Internal
//
//	Payload->CoroutineImpl.BindUObject(this, &UCGameInstance::COROUTINE);
//	Payload->StartTime = UCsManager_Time::Get(this)->GetTime(UpdateGroup);
//	Payload->Owner.SetObject(this);
//	Payload->SetName(Str::COROUTINE);
//	Payload->SetFName(Name::COROUTINE);
//
//	#undef COROUTINE
//
//	Scheduler->Start(Payload);
//}
//
//char UCGameInstance::StartPlatformServices_Internal(FCsRoutine* R)
//{
//	CS_COROUTINE_BEGIN(R);
//
//	// Wait until there is a World
//	CS_COROUTINE_WAIT_UNTIL(R, GetWorld());
//
//	// Wait until there is a Local Player
//	CS_COROUTINE_WAIT_UNTIL(R, GetLocalPlayers().Num() > CS_EMPTY && GetLocalPlayers()[CS_EMPTY]);
//
//	{
//		ULocalPlayer* LocalPlayer = GetLocalPlayers()[CS_EMPTY];
//
//		UCsManager_PlayerProfile* Manager_PlayerProfile = UCsManager_PlayerProfile::Get(this);
//
//		// Profile
//		UCsPlayerProfile* Profile = Manager_PlayerProfile->CreateProfile(ECsPlayerProfile::Profile1);
//		Profile->SetCurrentWorld(GetWorld());
//		Profile->SetLocalPlayer(LocalPlayer);
//		Profile->Init();
//
//		Manager_PlayerProfile->SetCurrentActiveProfile(ECsPlayerProfile::Profile1);
//
//		// Achievement
//		//URsManager_Achievement* Manager_Achievement = URsManager_Achievement::Get(this);
//
//		//Manager_Achievement->SetLocalPlayer(LocalPlayer);
//		//Manager_Achievement->Start();
//
//		// Save
//		UCsManager_Save* Manager_Save = UCsManager_Save::Get(this);
//
//		Manager_Save->SetLocalPlayer(LocalPlayer);
//		Manager_Save->Start();
//	}
//
//	StartupState = EStartup::FinishedSetupPlatformServices;
//
//	CS_COROUTINE_END(R);
//}

//void UCGameInstance::SetupScreenResolution()
//{
//#if WITH_EDITOR
//	if (IsPIE() && IsStandaloneMobileFromEditor())
//		return;
//	if (IsPIE() && !IsStandaloneFromEditor())
//		return;
//#endif // #if WITH_EDITOR
//
//	// TODO: FUTURE: See if there is any way to get resolutions for Vulkan
//	const FString RHIInfo = FHardwareInfo::GetHardwareInfo(NAME_RHI);
//
//	if (RHIInfo == TEXT("Vulkan"))
//		return;
//
//	UCManager_Save* Manager_Save = UCsManager_Save::Get<UCManager_Save>(this);
//
//	FCCommonSave& CommonSave = Manager_Save->GetCommonSave(ECsSave::Save1);
//
//	// TODO: Add / or Option to disable in Editor
//
//	if (!CommonSave.HasBeenEverSaved())
//	{
//		FCCommonSave_Options_Video& VideoSave = CommonSave.Options.Video;
//
//		// Set Fullscreen and Resolution to the max resolution
//		// Get all valid resolutions
//		TArray<FIntPoint> ScreenResolutions;
//		UKismetSystemLibrary::GetSupportedFullscreenResolutions(ScreenResolutions);
//
//		const int32 Count = ScreenResolutions.Num();
//
//		TArray<FCsScreenResolution> Resolutions;
//		Resolutions.Reset(Count);
//
//		// For now, only use 16/9 aspect ratios
//		static const float ASPECT_RATIO_16_9 = 1.777778f;
//		static const float TOLERANCE		 = 0.001f;
//
//		bool ResolutionFound = false;
//
//		for (int32 I = 0; I < Count; ++I)
//		{		
//			const int32& Width		= ScreenResolutions[I].X;
//			const int32& Height		= ScreenResolutions[I].Y;
//			const float AspectRatio = (float)Width/(float)Height;
//
//			if (FMath::Abs(ASPECT_RATIO_16_9 - AspectRatio) > TOLERANCE)
//				continue;
//
//			Resolutions.AddDefaulted();
//
//			FCsScreenResolution& Resolution = Resolutions[Resolutions.Num() - 1];
//
//			Resolution.Width = Width;
//			Resolution.Height = Height;
//
//			if (VideoSave.Resolution.Width == Width &&
//				VideoSave.Resolution.Height == Height)
//			{
//				ResolutionFound = true;
//			}
//		}
//
//		if (!ResolutionFound)
//		{
//			VideoSave.bFullscreen = true;
//			VideoSave.Resolution  = Resolutions.Last();
//		}
//
//		Manager_Save->Write(ECsPlayerProfile::Common, ECsSave::Save1);
//	}
//
//	const FCCommonSave_Options_Video& VideoSave = CommonSave.Options.Video;
//
//	const FString FullscreenOption		  = VideoSave.bFullscreen ? TEXT("f") : TEXT("w");
//	const FCsScreenResolution& Resolution = VideoSave.Resolution;
//	const FString Command				  = TEXT("r.setRes ") + Resolution.ToConsoleString() + FullscreenOption;
//
//	typedef NCsConsoleCommand::NLibrary::FLibrary ConsoleCommandLibrary;
//
//	ConsoleCommandLibrary::Exec(this, Command);
//}

bool UCGameInstance::IsPersistentLevel_Entry(const FString& Context)
{
	typedef NCsDataRootSet::FLibrary DataRootSetLibrary;
	typedef FCsDataRootSet::EMap MapType;

	const FCsDataRootSet& DataRootSet = DataRootSetLibrary::GetChecked(Context, this);

	return DataRootSet.IsPersistentLevel(this, MapType::Entry);
}

bool UCGameInstance::IsPersistentLevel_Main(const FString& Context)
{
	typedef NCsDataRootSet::FLibrary DataRootSetLibrary;
	typedef FCsDataRootSet::EMap MapType;

	const FCsDataRootSet& DataRootSet = DataRootSetLibrary::GetChecked(Context, this);

	return DataRootSet.IsPersistentLevel(this, MapType::Main);
}

void UCGameInstance::StartAsyncLoadStartupPayload()
{
	using namespace NCGameInstance::NCached;

	const FString& Context = Str::StartAsyncLoadStartupPayload;

	// For PIE, check if current map is EntryMap
#if WITH_EDITOR
	if (IsPIE() || IsStandaloneFromEditor())
	{
		if (!IsPersistentLevel_Entry(Context))
		{
			SafeAsyncLoadStartupPayload();
			return;
		}
	}
#endif // #if WITH_EDITOR

	UCsManager_Data* Manager_Data     = UCsManager_Data::Get(this);
	UObject* DataRootSetObject	      = Manager_Data->DataRootSet.GetObject();
	ICsGetDataRootSet* GetDataRootSet = Manager_Data->DataRootSet.Get();
	const FCsDataRootSet& DataRootSet = GetDataRootSet->GetCsDataRootSet();

	checkf(DataRootSet.StartupPayload != NAME_None, TEXT("%s: %s->GetCsDataRootSet().StartupPayload: None is NOT Valid."), *Context, *(DataRootSetObject->GetName()));

	Manager_Data->AsyncLoadPayload(DataRootSet.StartupPayload, UCsManager_Data::FOnAsyncLoadPayloadComplete::CreateUObject(this, &UCGameInstance::OnAsyncLoadStartupPayloadCompleted));
}

void UCGameInstance::SafeAsyncLoadStartupPayload()
{
	using namespace NCGameInstance::NCached;

	const FString& Context = Str::SafeAsyncLoadStartupPayload;

	UCsManager_Data* Manager_Data = UCsManager_Data::Get(this);
	UObject* DataRootSetObject	  = Manager_Data->DataRootSet.GetObject();

	if (!DataRootSetObject)
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: Failed to get DataRootSet from Manager_Data."), *Context);

		StartupState = EStartup::FinishedLoadingStartUpPayload;
		return;
	}

	ICsGetDataRootSet* GetDataRootSet = Manager_Data->DataRootSet.Get();

	if (!GetDataRootSet)
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: DataRootSet: %s with Class: %s does NOT implement the interface: ICsGetDataRootSet."), *Context, *(DataRootSetObject->GetName()), *(DataRootSetObject->GetClass()->GetName()));
		
		StartupState = EStartup::FinishedLoadingStartUpPayload;
		return;
	}

	const FCsDataRootSet& DataRootSet = GetDataRootSet->GetCsDataRootSet();

	if (DataRootSet.StartupPayload == NAME_None)
	{
		UE_LOG(LogCImpl, Warning, TEXT("%s: %s->GetCsDataRootSet().StartupPayload: None is NOT Valid."), *Context, *(DataRootSetObject->GetName()));

		StartupState = EStartup::FinishedLoadingStartUpPayload;
		return;
	}
	Manager_Data->AsyncLoadPayload(DataRootSet.StartupPayload, UCsManager_Data::FOnAsyncLoadPayloadComplete::CreateUObject(this, &UCGameInstance::OnAsyncLoadStartupPayloadCompleted));
}

void UCGameInstance::OnAsyncLoadStartupPayloadCompleted(bool WasSuccessful, const FName& PayloadName)
{
	checkf(WasSuccessful, TEXT("UCGameInstance::OnAsyncLoadStartupPayloadCompleted: Payload: %s did not load successfully."), *(PayloadName.ToString()));

	StartupState = EStartup::FinishedLoadingStartUpPayload;
}

bool UCGameInstance::HasFinishedLoadingStartupPayload() const
{
	return StartupState == EStartup::FinishedLoadingStartUpPayload;
}

void UCGameInstance::SetFinishedStartup()
{
	bFinishedStartup = true;
}

#pragma endregion Startup

// Events
#pragma region

void UCGameInstance::OnProcessGameEventInfo(const FECsGameEventCoordinatorGroup& Group, const FCsGameEventInfo& Info)
{
	const FECsGameEvent& Event = Info.Event;

	UCImplSettings* ModuleSettings = GetMutableDefault<UCImplSettings>();

	// Application Quit
	if (Event == ModuleSettings->ApplicationQuitEvent)
	{
		QueueExitGame();
	}
}

#pragma endregion Events

// Transition
#pragma region

void UCGameInstance::OnTransition_ShutdownScriptEntryPoint()
{
#if WITH_EDITOR

	// NOTE: FUTURE: Need to check the Engine type that used
	if (IsStandaloneMobileFromEditor())
		return;

	UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::Get(GEngine);

	const FCsScriptEntryPointInfo& Info = Manager_Javascript->GetEntryPointInfo();

	if (Info.bEnable)
	{
		Manager_Javascript->AdditionalSetupEntryPoint_Impl.Unbind();
		Manager_Javascript->IsAdditionalSetupEntryPointComplete_Impl.Unbind();

		Manager_Javascript->ShutdownEntryPoint();
	}
	
#endif // #if WITH_EDITOR
}

void UCGameInstance::OnTransition_CreateScriptEntryPoint()
{
#if WITH_EDITOR

	// NOTE: FUTURE: Need to check the Engine type that used
	if (IsStandaloneMobileFromEditor())
		return;

	UCsManager_Javascript* Manager_Javascript = UCsManager_Javascript::Get(GEngine);

	const FCsScriptEntryPointInfo& Info = Manager_Javascript->GetEntryPointInfo();

	if (Info.bEnable)
	{
		Manager_Javascript->CreateEntryPoint();
	}

#endif // #if WITH_EDITOR
}

#pragma endregion Transition