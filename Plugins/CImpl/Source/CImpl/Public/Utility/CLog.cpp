// Copyright Studio Sai. All Rights Reserved.
#include "Utility/CLog.h"
#include "CImpl.h"

void FCLog::Warning(const FString& Str)
{
	UE_LOG(LogCImpl, Warning, TEXT("%s"), *Str);
}
