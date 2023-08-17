// Copyright Studio Sai, LLC. All Rights Reserved.
#pragma once
#include "CsEditor.h"

DECLARE_LOG_CATEGORY_EXTERN(LogCImplEditor, Log, All);

class FCImplEditor : public FCsEditor
{
private:

	typedef FCsEditor Super;

public:

	/* This will get called when the editor loads the module */
	virtual void StartupModule() override;

	/* This will get called when the editor unloads the module */
	virtual void ShutdownModule() override;
};