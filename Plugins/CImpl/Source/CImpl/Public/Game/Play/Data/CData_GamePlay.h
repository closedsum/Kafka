// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Interfaces
#include "Containers/CsGetInterfaceMap.h"

#include "CData_GamePlay.generated.h"

namespace NCGame
{
	namespace NPlay
	{
		namespace NData
		{
			/**
			*/
			struct CIMPL_API IData : public ICsGetInterfaceMap
			{
			public:

				static const FName Name;

			public:
			};
		}
	}
}

UINTERFACE(BlueprintType)
class CIMPL_API UCData_GamePlay : public UCsGetInterfaceMap
{
	GENERATED_UINTERFACE_BODY()
};

/**
*/
class CIMPL_API ICData_GamePlay : public ICsGetInterfaceMap
{
	GENERATED_IINTERFACE_BODY()

public:

	static const FName Name;

public:
};