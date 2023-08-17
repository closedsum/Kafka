// Copyright Studio Sai. All Rights Reserved.
#pragma once

#include "Managers/Singleton/CsManager_Singleton.h"
// Get Singleton
#include "Coordinators/ConsoleCommand/CsGetCoordinatorConsoleCommand.h"
#include "Managers/UnitTest/CsGetManagerUnitTest.h"
#include "Managers/Time/CsGetManagerTime.h"
#include "Coroutine/CsGetCoroutineScheduler.h"
#include "Managers/Load/CsGetManagerLoad.h"
#include "Managers/Runnable/CsGetManagerRunnable.h"
#include "Managers/Data/CsGetManagerData.h"
#include "Coordinators/GameEvent/CsGetCoordinatorGameEvent.h"
//#include "Managers/Menu/CsGetManagerMenu.h"
#include "Managers/Level/CsGetManagerLevel.h"
//#include "Managers/Fade/CsGetManagerFade.h"
//#include "Managers/PlayerProfile/CsGetManagerPlayerProfile.h"
//#include "Managers/Save/CsGetManagerSave.h"
#include "Managers/CsGetManagerJavascript.h"

#include "CManager_Singleton_GameInstance.generated.h"

class UCsCoordinator_ConsoleCommand;
class UCsManager_UnitTest;
class UCsManager_Time;
class UCsCoroutineScheduler;
class UCsManager_Load;
class UCsManager_Runnable;
class UCsManager_Data;
class UCsCoordinator_GameEvent;
//class UCsManager_Menu;
class UCsManager_Level;
//class UCsManager_Fade;
class UCsManager_Javascript;
//class UCsManager_PlayerProfile;
//class UCsManager_Save;

UCLASS()
class CIMPL_API UCManager_Singleton_GameInstance : public UCsManager_Singleton,
												   public ICsGetCoordinatorConsoleCommand,
												   public ICsGetManagerUnitTest,
												   public ICsGetManagerTime,
												   public ICsGetCoroutineScheduler,
												   public ICsGetManagerLoad,
												   public ICsGetManagerRunnable,
												   public ICsGetManagerData,
												   public ICsGetCoordinatorGameEvent,
												   //public ICsGetManagerMenu,
												   public ICsGetManagerLevel,
												   //public ICsGetManagerFade,
												   public ICsGetManagerJavascript//,
												   //public ICsGetManagerPlayerProfile,
												   //public ICsGetManagerSave
{
	GENERATED_UCLASS_BODY()

// ICsGetCoordinatorConsoleCommand
#pragma region
protected:

	UPROPERTY()
	UCsCoordinator_ConsoleCommand* Coordinator_ConsoleCommand;

public:

	FORCEINLINE UCsCoordinator_ConsoleCommand* GetCoordinator_ConsoleCommand() const { return Coordinator_ConsoleCommand; }
	FORCEINLINE void SetCoordinator_ConsoleCommand(UCsCoordinator_ConsoleCommand* InCoordinator) { Coordinator_ConsoleCommand = InCoordinator; }

#pragma endregion ICsGetCoordinatorConsoleCommand

// ICsGetManagerUnitTest
#pragma region
protected:

	UPROPERTY()
	UCsManager_UnitTest* Manager_UnitTest;

public:

	FORCEINLINE UCsManager_UnitTest* GetManager_UnitTest() const { return Manager_UnitTest; }
	FORCEINLINE void SetManager_UnitTest(UCsManager_UnitTest* InManager) { Manager_UnitTest = InManager; }

#pragma endregion ICsGetManagerUnitTest

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

// ICsGetManagerLoad
#pragma region
protected:

	UPROPERTY()
	UCsManager_Load* Manager_Load;

public:

	FORCEINLINE UCsManager_Load* GetManager_Load() const { return Manager_Load; }
	FORCEINLINE void SetManager_Load(UCsManager_Load* InManager) { Manager_Load = InManager; }

#pragma endregion ICsGetManagerLoad

// ICsGetManagerRunnable
#pragma region
protected:

	UPROPERTY()
	UCsManager_Runnable* Manager_Runnable;

public:

	FORCEINLINE UCsManager_Runnable* GetManager_Runnable() const { return Manager_Runnable; }
	FORCEINLINE void SetManager_Runnable(UCsManager_Runnable* InManager) { Manager_Runnable = InManager; }

#pragma endregion ICsGetManagerRunnable

// ICsGetManagerData
#pragma region
protected:

	UPROPERTY()
	UCsManager_Data* Manager_Data;

public:

	FORCEINLINE UCsManager_Data* GetManager_Data() const { return Manager_Data; }
	FORCEINLINE void SetManager_Data(UCsManager_Data* InManager) { Manager_Data = InManager; }

#pragma endregion ICsGetManagerData

// ICsGetCoordinatorGameEvent
#pragma region
protected:

	UPROPERTY()
	UCsCoordinator_GameEvent* Coordinator_GameEvent;

public:

	FORCEINLINE UCsCoordinator_GameEvent* GetCoordinator_GameEvent() const { return Coordinator_GameEvent; }
	FORCEINLINE void SetCoordinator_GameEvent(UCsCoordinator_GameEvent* InCoordinator) { Coordinator_GameEvent = InCoordinator; }

#pragma endregion ICsGetCoordinatorGameEvent

// ICsGetManagerMenu
#pragma region
//protected:
//
//	UPROPERTY()
//	UCsManager_Menu* Manager_Menu;
//
//public:
//
//	FORCEINLINE UCsManager_Menu* GetManager_Menu() const { return Manager_Menu; }
//	FORCEINLINE void SetManager_Menu(UCsManager_Menu* InManager) { Manager_Menu = InManager; }

#pragma endregion ICsGetManagerMenu

// ICsGetManagerLevel
#pragma region
protected:

	UPROPERTY()
	UCsManager_Level* Manager_Level;

public:

	FORCEINLINE UCsManager_Level* GetManager_Level() const { return Manager_Level; }
	FORCEINLINE void SetManager_Level(UCsManager_Level* InManager) { Manager_Level = InManager; }

#pragma endregion ICsGetManagerLevel

// ICsGetManagerFade
#pragma region
//protected:
//
//	UPROPERTY()
//	UCsManager_Fade* Manager_Fade;
//
//public:
//
//	FORCEINLINE UCsManager_Fade* GetManager_Fade() const { return Manager_Fade; }
//	FORCEINLINE void SetManager_Fade(UCsManager_Fade* InManager) { Manager_Fade = InManager; }

#pragma endregion ICsGetManagerFade

// ICsGetManagerJavascript
#pragma region
protected:

	UPROPERTY()
	UCsManager_Javascript* Manager_Javascript;

public:

	FORCEINLINE UCsManager_Javascript* GetManager_Javascript() const { return Manager_Javascript; }
	FORCEINLINE void SetManager_Javascript(UCsManager_Javascript* InManager) { Manager_Javascript = InManager; }

#pragma endregion ICsGetManagerJavascript

// ICsGetManagerPlayerProfile
#pragma region
//protected:
//
//	UPROPERTY()
//	UCsManager_PlayerProfile* Manager_PlayerProfile;
//
//public:
//
//	FORCEINLINE UCsManager_PlayerProfile* GetManager_PlayerProfile() const { return Manager_PlayerProfile; }
//	FORCEINLINE void SetManager_PlayerProfile(UCsManager_PlayerProfile* InManager) { Manager_PlayerProfile = InManager; }

#pragma endregion ICsGetManagerPlayerProfile

// ICsGetManagerSave
#pragma region
//protected:
//
//	UPROPERTY()
//	UCsManager_Save* Manager_Save;
//
//public:
//
//	FORCEINLINE UCsManager_Save* GetManager_Save() const { return Manager_Save; }
//	FORCEINLINE void SetManager_Save(UCsManager_Save* InManager) { Manager_Save = InManager; }

#pragma endregion ICsGetManagerSave
};