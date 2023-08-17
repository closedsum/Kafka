// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Interfaces
#include "UObject/Interface.h"
// Types
#include "Types/CsTypes_Macro.h"

#include "CGamePlay.generated.h"

// NCGame::NPlay::NData::IData
CS_FWD_DECLARE_STRUCT_NAMESPACE_3(NCGame, NPlay, NData, IData)

UINTERFACE(Blueprintable)
class CIMPL_API UCGamePlay : public UInterface
{
	GENERATED_UINTERFACE_BODY()
};

class CIMPL_API ICGamePlay
{
	GENERATED_IINTERFACE_BODY()

#define DataType NCGame::NPlay::NData::IData

		virtual DataType* GetData() const = 0;

		virtual void Start() = 0;

		virtual void End() = 0;

#undef DataType
};