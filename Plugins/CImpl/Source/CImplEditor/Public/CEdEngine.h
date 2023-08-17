#pragma once
#include "CsEdEngine.h"
// Interface
#include "Editor/Bind/CsBindToPrePIEEnded.h"

#include "CEdEngine.generated.h"

class UWorld;

UCLASS()
class CIMPLEDITOR_API UCEdEngine : public UCsEdEngine,
								   public ICsBindToPrePIEEnded
{
public:
	GENERATED_BODY()

// UEngine Interface
#pragma region
public:

	virtual void Init(IEngineLoop* InEngineLoop) override;
	virtual void PreExit() override;
	virtual void Tick(float DeltaSeconds, bool bIdleMode) override;
	
#pragma endregion UEngine Interface

// UCsEdEngine Interface
#pragma region

	// Managers
#pragma region
protected:

	virtual void ConstructManagerSingleton() override;

#pragma endregion Managers

	// PIE
#pragma region
public:

	virtual void OnEndPIE(bool IsSimulating) override;

	virtual void OnEndPlayMapPIE(bool IsSimulating) override;

#pragma endregion PIE

#pragma endregion UCsEdEngine Interface

// FExec Interface
#pragma region
public:

	virtual bool Exec(UWorld* InWorld, const TCHAR* Cmd, FOutputDevice& Ar = *GLog) override;

#pragma endregion FExec Interface

// ICsBindToPreEndPIE
#pragma region
public:

	void BindToPrePIEEnded(UObject* Object);

#pragma endregion ICsBindToPreEndPIE
};