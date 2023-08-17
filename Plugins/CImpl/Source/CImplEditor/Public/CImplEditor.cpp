// Copyright Studio Sai, LLC. All Rights Reserved.
#include "CImplEditor.h"

#include "GraphEditor/CsDamageGraphPanelPinFactory.h"
//#include "GraphEditor/CImplGraphPanelPinFactory.h"

DEFINE_LOG_CATEGORY(LogCImplEditor);

#define LOCTEXT_NAMESPACE "FCImplEditor"

void FCImplEditor::StartupModule()
{
	Super::StartupModule();

	// DamagePanelGraphPinFactory
	{
		TSharedPtr<FCsDamagePanelGraphPinFactory> PanelGraphPinFactory = MakeShareable(new FCsDamagePanelGraphPinFactory());
		FEdGraphUtilities::RegisterVisualPinFactory(PanelGraphPinFactory);
	}
	// CImplPanelGraphPinFactory
	{
		//TSharedPtr<FCImplPanelGraphPinFactory> PanelGraphPinFactory = MakeShareable(new FCImplPanelGraphPinFactory());
		//FEdGraphUtilities::RegisterVisualPinFactory(PanelGraphPinFactory);
	}
}

void FCImplEditor::ShutdownModule()
{
	Super::ShutdownModule();
}

#undef LOCTEXT_NAMESPACE

IMPLEMENT_GAME_MODULE(FCImplEditor, CImplEditor);