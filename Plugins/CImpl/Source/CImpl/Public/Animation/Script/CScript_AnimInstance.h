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

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "CImpl|Anim|Instance|Script")
	bool bEnable;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "CImpl|Anim|Instance|Script")
	FString Path;

public:

	FCScriptAnimInstance_ScriptInfo() :
		bEnable(false),
		Path()
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

#pragma endregion Script

// Variables
#pragma region
private:
	
	TMap<FName, bool> BoolByNameMap;
	TMap<FName, int32> IntByNameMap;
	TMap<FName, float> FloatByNameMap;
	TMap<FName, UAnimSequence*> SequenceByNameMap;

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

	UFUNCTION(BlueprintCallable, Category = "CImpl|Anim|Instance|Script", meta = (AutoCreateRefTerm = "Name"))
	void SetSequenceByName(const FName& Name, UAnimSequence* Seq);

	UFUNCTION(BlueprintPure, Category = "CImpl|Anim|Instance|Script", meta = (BlueprintThreadSafe, AutoCreateRefTerm = "Name"))
	UAnimSequence* GetSequenceByName(const FName& Name);

#pragma endregion Variables
};