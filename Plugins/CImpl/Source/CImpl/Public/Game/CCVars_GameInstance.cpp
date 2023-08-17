// Copyright Studio Sai. All Rights Reserved.
#include "Game/CCVars_GameInstance.h"

TAutoConsoleVariable<int32> CCVarLogGameStartup(
	TEXT("log.game.startup"),
	0,
	TEXT("Log Game Startup."),
	ECVF_SetByConsole
);

// CVarLog
#pragma region

namespace NCsCVarLog
{
	CIMPL_API CS_CREATE_ENUM_STRUCT_CUSTOM(LogGameStartup, "Log Game Startup");

	namespace Map
	{
		CIMPL_API CS_ADD_TO_CVAR_MAP(LogGameStartup, CCVarLogGameStartup);
	}
}

#pragma endregion CVarLog

// ScopedGroup
#pragma region

namespace NCsScopedGroup
{
	namespace Map
	{
	}
}

#pragma endregion ScopedGroup