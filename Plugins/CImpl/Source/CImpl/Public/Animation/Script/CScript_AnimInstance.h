// Copyright Studio Sai. All Rights Reserved.
#pragma once
#include "Animation/CsAnimInstance.h"
// Log
#include "Utility/CsLog.h"

#include "CScript_AnimInstance.generated.h"

// Delegates
#pragma region

class UAnimInstance;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FCScriptAnimInstance_OnBeginDestroy, UAnimInstance*, AnimInstance);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FCScriptAnimInstance_OnNativeUpdate, UAnimInstance*, AnimInstance, float, DeltaSeconds);

#pragma endregion Delegates

USTRUCT(BlueprintType)
struct CIMPL_API FCScriptAnimInstance_ScriptInfo
{
	GENERATED_USTRUCT_BODY()

	/** Whether the Script at Entry Path should Run or not. */
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "CImpl|Anim|Instance|Script")
	bool bEnable;

	/** Whether or not to Reload the Script at Entry Path.
		NOTE: 
		- This is only used for Editor Preview.
		- bEnable must be TRUE. 
		- EntryPath must be VALID (NOT empty)*/
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "CImpl|Anim|Instance|Script")
	bool bReload;

	/** The 'Entry' point (aka starting file) to Run.
		This should be a starting Script file for Editor Preview. */
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "CImpl|Anim|Instance|Script")
	FString EntryPath;

	/** The Script file associated to the Script Class that will controlling (via a wrapper)
		the AnimInstance. 
		NOTE: This will be used after the AnimInstance is set and another script uses the
			  ClassPath to instantiate the wrapper to "control" the AnimInstance. */
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "CImpl|Anim|Instance|Script")
	FString ClassPath;

public:

	FCScriptAnimInstance_ScriptInfo() :
		bEnable(false),
		bReload(false),
		EntryPath(),
		ClassPath()
	{
	}

	bool IsValid(const FString& Context, void(*Log)(const FString&) = &FCsLog::Warning) const;
};

class APawn;
class AActor;
class UAnimSequence;

UCLASS()
class CIMPL_API UCScript_AnimInstance : public UCsAnimInstance
{
	GENERATED_UCLASS_BODY()

// UObject Interface
#pragma region
protected:

	virtual void BeginDestroy() override;

#pragma endregion UObject Interface

public:

	UPROPERTY(BlueprintAssignable)
	FCScriptAnimInstance_OnBeginDestroy OnBeginDestroy_ScriptEvent;

// UAnimInstance Interface
#pragma region
public:

	/** Init */
	virtual void NativeInitializeAnimation() override;

	/** Tick */
	virtual void NativeUpdateAnimation(float DeltaSeconds) override;

	UPROPERTY(BlueprintCallable)
	FCScriptAnimInstance_OnNativeUpdate OnNativeUpdate_ScriptEvent;

#pragma endregion UAnimInstance Interface

// UCsAnimInstance Interface
#pragma region

	// Manager Singleton
#pragma region
protected:

	virtual void ConstructManagerSingletonActor() override;

#pragma endregion Manager Singleton

	// Setup
#pragma region
protected:

	virtual void SetupInGameSimulation() override;

#pragma endregion Setup

#pragma endregion UCsAnimInterface Interface

// Manager Singleton
#pragma region
protected:

	void SetupSingletons();

	void ShutdownSingletons();

#pragma endregion Manager Singleton

// Script
#pragma region
public:
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Script")
	FCScriptAnimInstance_ScriptInfo ScriptInfo;

	UFUNCTION(BlueprintCallable, meta = (AutoCreateRefTerm = "Context"))
	bool ScriptInfo_IsValid(const FString& Context) const
	{
		return ScriptInfo.IsValid(Context);
	}

private:

	FGuid ScriptId;

	TCsBool_Ref ScriptInfo_bEnableHandle;

	void OnTick_Handle_ScriptInfo_bEnable();

	void EnableScript();
	void DisableScript();

	TCsBool_Ref ScriptInfo_bReloadHandle;

	void OnTick_Handle_ScriptInfo_bReload();

	void ReloadScript();

#pragma endregion Script

// Variables
#pragma region
public:
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Variables")
	TMap<FName, bool> BoolByNameMap;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Variables")
	TMap<FName, int32> IntByNameMap;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Variables")
	TMap<FName, float> FloatByNameMap;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Variables", meta = (DisplayName = "Vector3d by Name Map"))
	TMap<FName, FVector> Vector3dByNameMap;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Variables", meta = (DisplayName = "Rotator3d by Name Map"))
	TMap<FName, FRotator> Rotator3dByNameMap;

	TMap<FName, UAnimSequence*> SequenceByNameMap;

	TMap<FName, UBlendSpace1D*> BlendSpace1DByNameMap;

public:

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (AutoCreateRefTerm = "Name,Value"))
	void SetBoolByName(const FName& Name, const bool& Value);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	bool GetBoolByName(const FName& Name);

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (AutoCreateRefTerm = "Name,Value"))
	void SetIntByName(const FName& Name, const int32& Value);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	int32 GetIntByName(const FName& Name);

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (AutoCreateRefTerm = "Name,Value"))
	void SetFloatByName(const FName& Name, const float& Value);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	float GetFloatByName(const FName& Name);

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (DisplayName = "Set Vector3d by Name", AutoCreateRefTerm = "Name,Value"))
	void SetVector3dByName(const FName& Name, const FVector& Value);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (DisplayName = "Get Vector3d by Name", BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	FVector GetVector3dByName(const FName& Name);

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (DisplayName = "Set Rotator3d by Name", AutoCreateRefTerm = "Name,Value"))
	void SetRotator3dByName(const FName& Name, const FRotator& Value);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (DisplayName = "Get Rotator3d by Name", BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	FRotator GetRotator3dByName(const FName& Name);

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (AutoCreateRefTerm = "Name"))
	void SetSequenceByName(const FName& Name, UAnimSequence* Seq);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	UAnimSequence* GetSequenceByName(const FName& Name);

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (AutoCreateRefTerm = "Name"))
	void SetBlendSpace1DByName(const FName& Name, UBlendSpace1D* Seq);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	UBlendSpace1D* GetBlendSpace1DByName(const FName& Name);

#pragma endregion Variables
};