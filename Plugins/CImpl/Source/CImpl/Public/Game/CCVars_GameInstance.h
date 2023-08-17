// Copyright Studio Sai. All Rights Reserved.
#include "CsCVars.h"

#pragma once

extern CIMPL_API TAutoConsoleVariable<int32> CCVarLogGameStartup;

// CVarLog
#pragma region

namespace NCsCVarLog
{
	extern CIMPL_API const Type LogGameStartup;

	namespace Map
	{
		extern CIMPL_API CS_DECLARE_ADD_TO_CVAR_MAP(LogGameStartup);
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