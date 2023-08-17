// Copyright Studio Sai. All Rights Reserved.
#pragma once
// Input
#include "Managers/Input/Action/CsInputAction.h"
// GameEvent
#include "Managers/Input/GameEvent/CsGameEvent.h"

#include "CTypes_ImplSettings.generated.h"

// FCSettings_ConsoleCommand
#pragma region

USTRUCT(BlueprintType)
struct CIMPL_API FCSettings_ConsoleCommand
{
	GENERATED_USTRUCT_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent OpenEvent;

	FCSettings_ConsoleCommand() :
		OpenEvent()
	{
	}

	bool IsValidChecked(const FString& Context) const;

	void BroadcastEventChecked(const FString& Context, UObject* WorldContext);
};

#pragma endregion FCSettings_ConsoleCommand

// FCLocalPlayerActions
#pragma region

USTRUCT(BlueprintType)
struct CIMPL_API FCLocalPlayerActions
{
	GENERATED_USTRUCT_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsInputAction Move;

	FCLocalPlayerActions() :
		Move()
	{
	}

	bool IsValidChecked(const FString& Context) const;
};

#pragma endregion FCLocalPlayerActions

// FCLocalPlayerEvents
#pragma region

USTRUCT(BlueprintType)
struct CIMPL_API FCLocalPlayerEvents
{
	GENERATED_USTRUCT_BODY()

public:

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent MoveForwardBack;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StartMoveForward;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StopMoveForward;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StartMoveBack;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StopMoveBack;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent MoveLeftRight;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StartMoveLeft;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StopMoveLeft;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StartMoveRight;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StopMoveRight;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent LookUpDown;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent LookLeftRight;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StartJump;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "CImpl|Settings")
	FECsGameEvent StopJump;

	FCLocalPlayerEvents() :
		MoveForwardBack(),
		StartMoveForward(),
		StopMoveForward(),
		StartMoveBack(),
		StopMoveBack(),
		MoveLeftRight(),
		StartMoveLeft(),
		StopMoveLeft(),
		StartMoveRight(),
		StopMoveRight(),
		LookUpDown(),
		LookLeftRight(),
		StartJump(),
		StopJump()
	{
	}

	static const FCLocalPlayerEvents& Get();

	bool IsValidChecked(const FString& Context) const;

	enum class EEvent : uint8
	{
		MoveForwardBack,
		StartMoveForward,
		StopMoveForward,
		StartMoveBack,
		StopMoveBack,
		MoveLeftRight,
		StartMoveLeft,
		StopMoveLeft,
		StartMoveRight,
		StopMoveRight,
		LookUpDown,
		LookLeftRight,
		StartJump,
		StopJump
	};

	FORCEINLINE const FECsGameEvent& GetEventChecked(const FString& Context, const EEvent& Type) const
	{
		if (Type == EEvent::MoveForwardBack)
			return MoveForwardBack;
		if (Type == EEvent::MoveLeftRight)
			return MoveLeftRight;

		checkf(0, TEXT("%s: No Event associated with Type."), *Context);
		return MoveForwardBack;
	}

	void BroadcastEventChecked(const FString& Context, UObject* WorldContext, const int32& PlayerIndex, const EEvent& Type, const float& Value = 0.0f, const FVector3f& Location = FVector3f::ZeroVector) const;
};

#pragma endregion FCLocalPlayerEvents