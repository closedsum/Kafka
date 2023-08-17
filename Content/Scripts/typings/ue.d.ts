/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
/// <reference path="_part_3_ue.d.ts">/>
/// <reference path="_part_4_ue.d.ts">/>
declare class ConvertToPolygonsToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ConvertToPolygonsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsToolBuilder;
	static GetDefaultObject(): ConvertToPolygonsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsToolBuilder;
	static C(Other: UObject | any): ConvertToPolygonsToolBuilder;
}

declare type EConvertToPolygonsMode = 'FaceNormalDeviation' | 'FindPolygons' | 'FromUVIslands' | 'FromNormalSeams' | 'FromConnectedTris' | 'FromFurthestPointSampling' | 'CopyFromLayer' | 'EConvertToPolygonsMode_MAX';
declare var EConvertToPolygonsMode : { FaceNormalDeviation:'FaceNormalDeviation',FindPolygons:'FindPolygons',FromUVIslands:'FromUVIslands',FromNormalSeams:'FromNormalSeams',FromConnectedTris:'FromConnectedTris',FromFurthestPointSampling:'FromFurthestPointSampling',CopyFromLayer:'CopyFromLayer',EConvertToPolygonsMode_MAX:'EConvertToPolygonsMode_MAX', };
declare class ConvertToPolygonsToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EConvertToPolygonsMode;
	AngleTolerance: number;
	NumPoints: number;
	bSplitExisting: boolean;
	bNormalWeighted: boolean;
	NormalWeighting: number;
	QuadAdjacencyWeight: number;
	QuadMetricClamp: number;
	QuadSearchRounds: number;
	bRespectUVSeams: boolean;
	bRespectHardNormals: boolean;
	MinGroupSize: number;
	bCalculateNormals: boolean;
	bShowGroupColors: boolean;
	static Load(ResourceName: string): ConvertToPolygonsToolProperties;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsToolProperties;
	static GetDefaultObject(): ConvertToPolygonsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsToolProperties;
	static C(Other: UObject | any): ConvertToPolygonsToolProperties;
}

declare class OutputPolygroupLayerProperties extends InteractiveToolPropertySet { 
	GroupLayer: string;
	OptionsList: string[];
	bShowNewLayerName: boolean;
	NewLayerName: string;
	static Load(ResourceName: string): OutputPolygroupLayerProperties;
	static Find(Outer: UObject, ResourceName: string): OutputPolygroupLayerProperties;
	static GetDefaultObject(): OutputPolygroupLayerProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OutputPolygroupLayerProperties;
	GetGroupOptionsList(): string[];
	static C(Other: UObject | any): OutputPolygroupLayerProperties;
}

declare class ConvertToPolygonsTool extends SingleSelectionMeshEditingTool { 
	Settings: ConvertToPolygonsToolProperties;
	CopyFromLayerProperties: PolygroupLayersProperties;
	OutputProperties: OutputPolygroupLayerProperties;
	PreviewCompute: MeshOpPreviewWithBackgroundCompute;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): ConvertToPolygonsTool;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsTool;
	static GetDefaultObject(): ConvertToPolygonsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsTool;
	static C(Other: UObject | any): ConvertToPolygonsTool;
}

declare class ConvertToPolygonsOperatorFactory extends UObject { 
	ConvertToPolygonsTool: ConvertToPolygonsTool;
	static Load(ResourceName: string): ConvertToPolygonsOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsOperatorFactory;
	static GetDefaultObject(): ConvertToPolygonsOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsOperatorFactory;
	static C(Other: UObject | any): ConvertToPolygonsOperatorFactory;
}

declare class CubeGridToolBuilder extends InteractiveToolWithToolTargetsBuilder { 
	static Load(ResourceName: string): CubeGridToolBuilder;
	static Find(Outer: UObject, ResourceName: string): CubeGridToolBuilder;
	static GetDefaultObject(): CubeGridToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridToolBuilder;
	static C(Other: UObject | any): CubeGridToolBuilder;
}

declare type ECubeGridToolFaceSelectionMode = 'OutsideBasedOnNormal' | 'InsideBasedOnNormal' | 'OutsideBasedOnViewRay' | 'InsideBasedOnViewRay' | 'ECubeGridToolFaceSelectionMode_MAX';
declare var ECubeGridToolFaceSelectionMode : { OutsideBasedOnNormal:'OutsideBasedOnNormal',InsideBasedOnNormal:'InsideBasedOnNormal',OutsideBasedOnViewRay:'OutsideBasedOnViewRay',InsideBasedOnViewRay:'InsideBasedOnViewRay',ECubeGridToolFaceSelectionMode_MAX:'ECubeGridToolFaceSelectionMode_MAX', };
declare class CubeGridToolProperties extends InteractiveToolPropertySet { 
	GridFrameOrigin: Vector;
	GridFrameOrientation: Rotator;
	bShowGizmo: boolean;
	GridPower: number;
	CurrentBlockSize: number;
	BlocksPerStep: number;
	bPowerOfTwoBlockSizes: boolean;
	BlockBaseSize: number;
	bCrosswiseDiagonal: boolean;
	bKeepSideGroups: boolean;
	PlaneTolerance: number;
	bHitUnrelatedGeometry: boolean;
	bHitGridGroundPlaneIfCloser: boolean;
	FaceSelectionMode: ECubeGridToolFaceSelectionMode;
	ToggleCornerMode: string;
	PushPull: string;
	ResizeGrid: string;
	SlideSelection: string;
	FlipSelection: string;
	GridGizmo: string;
	QuickShiftGizmo: string;
	AlignGizmo: string;
	bInCornerMode: boolean;
	bAllowedToEditGrid: boolean;
	static Load(ResourceName: string): CubeGridToolProperties;
	static Find(Outer: UObject, ResourceName: string): CubeGridToolProperties;
	static GetDefaultObject(): CubeGridToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridToolProperties;
	static C(Other: UObject | any): CubeGridToolProperties;
}

declare class CubeGridToolActions extends InteractiveToolPropertySet { 
	GridSourceActor: Actor;
	static Load(ResourceName: string): CubeGridToolActions;
	static Find(Outer: UObject, ResourceName: string): CubeGridToolActions;
	static GetDefaultObject(): CubeGridToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridToolActions;
	SlideForward(): void;
	SlideBack(): void;
	ResetGridFromActor(): void;
	Push(): void;
	Pull(): void;
	Flip(): void;
	CornerMode(): void;
	static C(Other: UObject | any): CubeGridToolActions;
}

declare class CubeGridDuringActivityActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): CubeGridDuringActivityActions;
	static Find(Outer: UObject, ResourceName: string): CubeGridDuringActivityActions;
	static GetDefaultObject(): CubeGridDuringActivityActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridDuringActivityActions;
	Done(): void;
	Cancel(): void;
	static C(Other: UObject | any): CubeGridDuringActivityActions;
}

declare class CubeGridTool extends InteractiveTool { 
	GridGizmo: CombinedTransformGizmo;
	GridGizmoAlignmentMechanic: DragAlignmentMechanic;
	GridGizmoTransformProxy: TransformProxy;
	LineSets: PreviewGeometry;
	ClickDragBehavior: ClickDragInputBehavior;
	HoverBehavior: MouseHoverBehavior;
	CtrlMiddleClickBehavior: LocalSingleClickInputBehavior;
	MiddleClickDragBehavior: LocalClickDragInputBehavior;
	Settings: CubeGridToolProperties;
	ToolActions: CubeGridToolActions;
	DuringActivityActions: CubeGridDuringActivityActions;
	MaterialProperties: NewMeshMaterialProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Target: ToolTarget;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): CubeGridTool;
	static Find(Outer: UObject, ResourceName: string): CubeGridTool;
	static GetDefaultObject(): CubeGridTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridTool;
	static C(Other: UObject | any): CubeGridTool;
}

declare class DeformMeshPolygonsToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): DeformMeshPolygonsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DeformMeshPolygonsToolBuilder;
	static GetDefaultObject(): DeformMeshPolygonsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeformMeshPolygonsToolBuilder;
	static C(Other: UObject | any): DeformMeshPolygonsToolBuilder;
}

declare type EGroupTopologyDeformationStrategy = 'Linear' | 'Laplacian' | 'EGroupTopologyDeformationStrategy_MAX';
declare var EGroupTopologyDeformationStrategy : { Linear:'Linear',Laplacian:'Laplacian',EGroupTopologyDeformationStrategy_MAX:'EGroupTopologyDeformationStrategy_MAX', };
declare type EQuickTransformerMode = 'AxisTranslation' | 'AxisRotation' | 'EQuickTransformerMode_MAX';
declare var EQuickTransformerMode : { AxisTranslation:'AxisTranslation',AxisRotation:'AxisRotation',EQuickTransformerMode_MAX:'EQuickTransformerMode_MAX', };
declare type EWeightScheme = 'Uniform' | 'Umbrella' | 'Valence' | 'MeanValue' | 'Cotangent' | 'ClampedCotangent' | 'IDTCotangent' | 'EWeightScheme_MAX';
declare var EWeightScheme : { Uniform:'Uniform',Umbrella:'Umbrella',Valence:'Valence',MeanValue:'MeanValue',Cotangent:'Cotangent',ClampedCotangent:'ClampedCotangent',IDTCotangent:'IDTCotangent',EWeightScheme_MAX:'EWeightScheme_MAX', };
declare class DeformMeshPolygonsTransformProperties extends InteractiveToolPropertySet { 
	DeformationStrategy: EGroupTopologyDeformationStrategy;
	TransformMode: EQuickTransformerMode;
	bSelectFaces: boolean;
	bSelectEdges: boolean;
	bSelectVertices: boolean;
	bShowWireframe: boolean;
	SelectedWeightScheme: EWeightScheme;
	HandleWeight: number;
	bPostFixHandles: boolean;
	static Load(ResourceName: string): DeformMeshPolygonsTransformProperties;
	static Find(Outer: UObject, ResourceName: string): DeformMeshPolygonsTransformProperties;
	static GetDefaultObject(): DeformMeshPolygonsTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeformMeshPolygonsTransformProperties;
	static C(Other: UObject | any): DeformMeshPolygonsTransformProperties;
}

declare class DeformMeshPolygonsTool extends MeshSurfacePointTool { 
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	TransformProps: DeformMeshPolygonsTransformProperties;
	static Load(ResourceName: string): DeformMeshPolygonsTool;
	static Find(Outer: UObject, ResourceName: string): DeformMeshPolygonsTool;
	static GetDefaultObject(): DeformMeshPolygonsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeformMeshPolygonsTool;
	static C(Other: UObject | any): DeformMeshPolygonsTool;
}

declare type EDisplaceMeshToolDisplaceType = 'Constant' | 'DisplacementMap' | 'RandomNoise' | 'PerlinNoise' | 'SineWave' | 'EDisplaceMeshToolDisplaceType_MAX';
declare var EDisplaceMeshToolDisplaceType : { Constant:'Constant',DisplacementMap:'DisplacementMap',RandomNoise:'RandomNoise',PerlinNoise:'PerlinNoise',SineWave:'SineWave',EDisplaceMeshToolDisplaceType_MAX:'EDisplaceMeshToolDisplaceType_MAX', };
declare type EDisplaceMeshToolSubdivisionType = 'Flat' | 'PNTriangles' | 'EDisplaceMeshToolSubdivisionType_MAX';
declare var EDisplaceMeshToolSubdivisionType : { Flat:'Flat',PNTriangles:'PNTriangles',EDisplaceMeshToolSubdivisionType_MAX:'EDisplaceMeshToolSubdivisionType_MAX', };
declare class DisplaceMeshCommonProperties extends InteractiveToolPropertySet { 
	DisplacementType: EDisplaceMeshToolDisplaceType;
	DisplaceIntensity: number;
	RandomSeed: number;
	SubdivisionType: EDisplaceMeshToolSubdivisionType;
	Subdivisions: number;
	WeightMap: string;
	WeightMapsList: string[];
	bInvertWeightMap: boolean;
	bShowWireframe: boolean;
	bDisableSizeWarning: boolean;
	static Load(ResourceName: string): DisplaceMeshCommonProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshCommonProperties;
	static GetDefaultObject(): DisplaceMeshCommonProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshCommonProperties;
	GetWeightMapsFunc(): string[];
	static C(Other: UObject | any): DisplaceMeshCommonProperties;
}

declare type EDisplaceMeshToolTriangleSelectionType = 'None' | 'Material' | 'EDisplaceMeshToolTriangleSelectionType_MAX';
declare var EDisplaceMeshToolTriangleSelectionType : { None:'None',Material:'Material',EDisplaceMeshToolTriangleSelectionType_MAX:'EDisplaceMeshToolTriangleSelectionType_MAX', };
declare class SelectiveTessellationProperties extends InteractiveToolPropertySet { 
	SelectionType: EDisplaceMeshToolTriangleSelectionType;
	ActiveMaterial: string;
	MaterialIDList: string[];
	static Load(ResourceName: string): SelectiveTessellationProperties;
	static Find(Outer: UObject, ResourceName: string): SelectiveTessellationProperties;
	static GetDefaultObject(): SelectiveTessellationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectiveTessellationProperties;
	GetMaterialIDsFunc(): string[];
	static C(Other: UObject | any): SelectiveTessellationProperties;
}

declare type EDisplaceMeshToolChannelType = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EDisplaceMeshToolChannelType_MAX';
declare var EDisplaceMeshToolChannelType : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EDisplaceMeshToolChannelType_MAX:'EDisplaceMeshToolChannelType_MAX', };
declare class DisplaceMeshTextureMapProperties extends InteractiveToolPropertySet { 
	DisplacementMap: Texture2D;
	Channel: EDisplaceMeshToolChannelType;
	DisplacementMapBaseValue: number;
	UVScale: Vector2D;
	UVOffset: Vector2D;
	bApplyAdjustmentCurve: boolean;
	AdjustmentCurve: CurveFloat;
	bRecalcNormals: boolean;
	static Load(ResourceName: string): DisplaceMeshTextureMapProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshTextureMapProperties;
	static GetDefaultObject(): DisplaceMeshTextureMapProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshTextureMapProperties;
	static C(Other: UObject | any): DisplaceMeshTextureMapProperties;
}

declare class DisplaceMeshDirectionalFilterProperties extends InteractiveToolPropertySet { 
	bEnableFilter: boolean;
	FilterDirection: Vector;
	FilterWidth: number;
	static Load(ResourceName: string): DisplaceMeshDirectionalFilterProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshDirectionalFilterProperties;
	static GetDefaultObject(): DisplaceMeshDirectionalFilterProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshDirectionalFilterProperties;
	static C(Other: UObject | any): DisplaceMeshDirectionalFilterProperties;
}

declare class PerlinLayerProperties { 
	Frequency: number;
	Intensity: number;
	clone() : PerlinLayerProperties;
	static C(Other: UObject | any): PerlinLayerProperties;
}

declare class DisplaceMeshPerlinNoiseProperties extends InteractiveToolPropertySet { 
	PerlinLayerProperties: PerlinLayerProperties[];
	static Load(ResourceName: string): DisplaceMeshPerlinNoiseProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshPerlinNoiseProperties;
	static GetDefaultObject(): DisplaceMeshPerlinNoiseProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshPerlinNoiseProperties;
	static C(Other: UObject | any): DisplaceMeshPerlinNoiseProperties;
}

declare class DisplaceMeshSineWaveProperties extends InteractiveToolPropertySet { 
	SineWaveFrequency: number;
	SineWavePhaseShift: number;
	SineWaveDirection: Vector;
	static Load(ResourceName: string): DisplaceMeshSineWaveProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshSineWaveProperties;
	static GetDefaultObject(): DisplaceMeshSineWaveProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshSineWaveProperties;
	static C(Other: UObject | any): DisplaceMeshSineWaveProperties;
}

declare class DisplaceMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): DisplaceMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshToolBuilder;
	static GetDefaultObject(): DisplaceMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshToolBuilder;
	static C(Other: UObject | any): DisplaceMeshToolBuilder;
}

declare class DisplaceMeshTool extends SingleSelectionMeshEditingTool { 
	CommonProperties: DisplaceMeshCommonProperties;
	DirectionalFilterProperties: DisplaceMeshDirectionalFilterProperties;
	TextureMapProperties: DisplaceMeshTextureMapProperties;
	NoiseProperties: DisplaceMeshPerlinNoiseProperties;
	SineWaveProperties: DisplaceMeshSineWaveProperties;
	SelectiveTessellationProperties: SelectiveTessellationProperties;
	ActiveContrastCurveTarget: CurveFloat;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): DisplaceMeshTool;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshTool;
	static GetDefaultObject(): DisplaceMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshTool;
	static C(Other: UObject | any): DisplaceMeshTool;
}

declare class DrawPolyPathToolBuilder extends MeshSurfacePointToolBuilder { 
	static Load(ResourceName: string): DrawPolyPathToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathToolBuilder;
	static GetDefaultObject(): DrawPolyPathToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathToolBuilder;
	static C(Other: UObject | any): DrawPolyPathToolBuilder;
}

declare type EDrawPolyPathWidthMode = 'Fixed' | 'Interactive' | 'EDrawPolyPathWidthMode_MAX';
declare var EDrawPolyPathWidthMode : { Fixed:'Fixed',Interactive:'Interactive',EDrawPolyPathWidthMode_MAX:'EDrawPolyPathWidthMode_MAX', };
declare type EDrawPolyPathRadiusMode = 'Fixed' | 'Interactive' | 'EDrawPolyPathRadiusMode_MAX';
declare var EDrawPolyPathRadiusMode : { Fixed:'Fixed',Interactive:'Interactive',EDrawPolyPathRadiusMode_MAX:'EDrawPolyPathRadiusMode_MAX', };
declare type EDrawPolyPathExtrudeMode = 'Flat' | 'Fixed' | 'Interactive' | 'RampFixed' | 'RampInteractive' | 'EDrawPolyPathExtrudeMode_MAX';
declare var EDrawPolyPathExtrudeMode : { Flat:'Flat',Fixed:'Fixed',Interactive:'Interactive',RampFixed:'RampFixed',RampInteractive:'RampInteractive',EDrawPolyPathExtrudeMode_MAX:'EDrawPolyPathExtrudeMode_MAX', };
declare class DrawPolyPathProperties extends InteractiveToolPropertySet { 
	WidthMode: EDrawPolyPathWidthMode;
	Width: number;
	bRoundedCorners: boolean;
	RadiusMode: EDrawPolyPathRadiusMode;
	CornerRadius: number;
	RadialSlices: number;
	bSinglePolyGroup: boolean;
	ExtrudeMode: EDrawPolyPathExtrudeMode;
	ExtrudeHeight: number;
	RampStartRatio: number;
	static Load(ResourceName: string): DrawPolyPathProperties;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathProperties;
	static GetDefaultObject(): DrawPolyPathProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathProperties;
	static C(Other: UObject | any): DrawPolyPathProperties;
}

declare type EDrawPolyPathExtrudeDirection = 'SelectionNormal' | 'WorldX' | 'WorldY' | 'WorldZ' | 'LocalX' | 'LocalY' | 'LocalZ' | 'EDrawPolyPathExtrudeDirection_MAX';
declare var EDrawPolyPathExtrudeDirection : { SelectionNormal:'SelectionNormal',WorldX:'WorldX',WorldY:'WorldY',WorldZ:'WorldZ',LocalX:'LocalX',LocalY:'LocalY',LocalZ:'LocalZ',EDrawPolyPathExtrudeDirection_MAX:'EDrawPolyPathExtrudeDirection_MAX', };
declare class DrawPolyPathExtrudeProperties extends InteractiveToolPropertySet { 
	Direction: EDrawPolyPathExtrudeDirection;
	static Load(ResourceName: string): DrawPolyPathExtrudeProperties;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathExtrudeProperties;
	static GetDefaultObject(): DrawPolyPathExtrudeProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathExtrudeProperties;
	static C(Other: UObject | any): DrawPolyPathExtrudeProperties;
}

declare class DrawPolyPathTool extends InteractiveTool { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	TransformProps: DrawPolyPathProperties;
	ExtrudeProperties: DrawPolyPathExtrudeProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PlaneMechanic: ConstructionPlaneMechanic;
	EditPreview: PolyEditPreviewMesh;
	ExtrudeHeightMechanic: PlaneDistanceFromHitMechanic;
	CurveDistMechanic: SpatialCurveDistanceMechanic;
	SurfacePathMechanic: CollectSurfacePathMechanic;
	static Load(ResourceName: string): DrawPolyPathTool;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathTool;
	static GetDefaultObject(): DrawPolyPathTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathTool;
	static C(Other: UObject | any): DrawPolyPathTool;
}

declare class DynamicMeshBrushTool extends BaseBrushTool { 
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): DynamicMeshBrushTool;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshBrushTool;
	static GetDefaultObject(): DynamicMeshBrushTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshBrushTool;
	static C(Other: UObject | any): DynamicMeshBrushTool;
}

declare class DynamicMeshSculptToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): DynamicMeshSculptToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshSculptToolBuilder;
	static GetDefaultObject(): DynamicMeshSculptToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshSculptToolBuilder;
	static C(Other: UObject | any): DynamicMeshSculptToolBuilder;
}

declare type EBrushToolSizeType = 'Adaptive' | 'World' | 'EBrushToolSizeType_MAX';
declare var EBrushToolSizeType : { Adaptive:'Adaptive',World:'World',EBrushToolSizeType_MAX:'EBrushToolSizeType_MAX', };
declare class BrushToolRadius { 
	SizeType: EBrushToolSizeType;
	AdaptiveSize: number;
	WorldRadius: number;
	clone() : BrushToolRadius;
	static C(Other: UObject | any): BrushToolRadius;
}

declare class DynamicMeshBrushProperties extends InteractiveToolPropertySet { 
	BrushSize: BrushToolRadius;
	BrushFalloffAmount: number;
	Depth: number;
	bHitBackFaces: boolean;
	static Load(ResourceName: string): DynamicMeshBrushProperties;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshBrushProperties;
	static GetDefaultObject(): DynamicMeshBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshBrushProperties;
	static C(Other: UObject | any): DynamicMeshBrushProperties;
}

declare type EDynamicMeshSculptBrushType = 'Move' | 'PullKelvin' | 'PullSharpKelvin' | 'Smooth' | 'Offset' | 'SculptView' | 'SculptMax' | 'Inflate' | 'ScaleKelvin' | 'Pinch' | 'TwistKelvin' | 'Flatten' | 'Plane' | 'PlaneViewAligned' | 'FixedPlane' | 'Resample' | 'LastValue' | 'EDynamicMeshSculptBrushType_MAX';
declare var EDynamicMeshSculptBrushType : { Move:'Move',PullKelvin:'PullKelvin',PullSharpKelvin:'PullSharpKelvin',Smooth:'Smooth',Offset:'Offset',SculptView:'SculptView',SculptMax:'SculptMax',Inflate:'Inflate',ScaleKelvin:'ScaleKelvin',Pinch:'Pinch',TwistKelvin:'TwistKelvin',Flatten:'Flatten',Plane:'Plane',PlaneViewAligned:'PlaneViewAligned',FixedPlane:'FixedPlane',Resample:'Resample',LastValue:'LastValue',EDynamicMeshSculptBrushType_MAX:'EDynamicMeshSculptBrushType_MAX', };
declare class DynamicMeshBrushSculptProperties extends InteractiveToolPropertySet { 
	bIsRemeshingEnabled: boolean;
	PrimaryBrushType: EDynamicMeshSculptBrushType;
	PrimaryBrushSpeed: number;
	bPreserveUVFlow: boolean;
	bFreezeTarget: boolean;
	SmoothBrushSpeed: number;
	bDetailPreservingSmooth: boolean;
	static Load(ResourceName: string): DynamicMeshBrushSculptProperties;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshBrushSculptProperties;
	static GetDefaultObject(): DynamicMeshBrushSculptProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshBrushSculptProperties;
	static C(Other: UObject | any): DynamicMeshBrushSculptProperties;
}

declare class DynamicSculptToolActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): DynamicSculptToolActions;
	static Find(Outer: UObject, ResourceName: string): DynamicSculptToolActions;
	static GetDefaultObject(): DynamicSculptToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSculptToolActions;
	DiscardAttributes(): void;
	static C(Other: UObject | any): DynamicSculptToolActions;
}

declare class BrushRemeshProperties extends RemeshProperties { 
	bEnableRemeshing: boolean;
	TriangleSize: number;
	PreserveDetail: number;
	Iterations: number;
	static Load(ResourceName: string): BrushRemeshProperties;
	static Find(Outer: UObject, ResourceName: string): BrushRemeshProperties;
	static GetDefaultObject(): BrushRemeshProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BrushRemeshProperties;
	static C(Other: UObject | any): BrushRemeshProperties;
}

declare class FixedPlaneBrushProperties extends InteractiveToolPropertySet { 
	bPropertySetEnabled: boolean;
	bShowGizmo: boolean;
	Position: Vector;
	Rotation: Quat;
	static Load(ResourceName: string): FixedPlaneBrushProperties;
	static Find(Outer: UObject, ResourceName: string): FixedPlaneBrushProperties;
	static GetDefaultObject(): FixedPlaneBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FixedPlaneBrushProperties;
	static C(Other: UObject | any): FixedPlaneBrushProperties;
}

declare class SculptMaxBrushProperties extends InteractiveToolPropertySet { 
	MaxHeight: number;
	bFreezeCurrentHeight: boolean;
	static Load(ResourceName: string): SculptMaxBrushProperties;
	static Find(Outer: UObject, ResourceName: string): SculptMaxBrushProperties;
	static GetDefaultObject(): SculptMaxBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SculptMaxBrushProperties;
	static C(Other: UObject | any): SculptMaxBrushProperties;
}

declare class KelvinBrushProperties extends InteractiveToolPropertySet { 
	FalloffDistance: number;
	Stiffness: number;
	Incompressiblity: number;
	BrushSteps: number;
	static Load(ResourceName: string): KelvinBrushProperties;
	static Find(Outer: UObject, ResourceName: string): KelvinBrushProperties;
	static GetDefaultObject(): KelvinBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KelvinBrushProperties;
	static C(Other: UObject | any): KelvinBrushProperties;
}

declare class DynamicMeshSculptTool extends MeshSurfacePointTool { 
	BrushProperties: DynamicMeshBrushProperties;
	SculptProperties: DynamicMeshBrushSculptProperties;
	SculptMaxBrushProperties: SculptMaxBrushProperties;
	KelvinBrushProperties: KelvinBrushProperties;
	RemeshProperties: BrushRemeshProperties;
	GizmoProperties: FixedPlaneBrushProperties;
	ViewProperties: MeshEditingViewProperties;
	SculptToolActions: DynamicSculptToolActions;
	BrushIndicator: BrushStampIndicator;
	BrushIndicatorMaterial: MaterialInstanceDynamic;
	BrushIndicatorMesh: PreviewMesh;
	DynamicMeshComponent: OctreeDynamicMeshComponent;
	ActiveOverrideMaterial: MaterialInstanceDynamic;
	PlaneTransformGizmo: CombinedTransformGizmo;
	PlaneTransformProxy: TransformProxy;
	static Load(ResourceName: string): DynamicMeshSculptTool;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshSculptTool;
	static GetDefaultObject(): DynamicMeshSculptTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshSculptTool;
	static C(Other: UObject | any): DynamicMeshSculptTool;
}

declare class EditNormalsToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditNormalsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditNormalsToolBuilder;
	static GetDefaultObject(): EditNormalsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsToolBuilder;
	static C(Other: UObject | any): EditNormalsToolBuilder;
}

declare type ENormalCalculationMethod = 'AreaWeighted' | 'AngleWeighted' | 'AreaAngleWeighting' | 'ENormalCalculationMethod_MAX';
declare var ENormalCalculationMethod : { AreaWeighted:'AreaWeighted',AngleWeighted:'AngleWeighted',AreaAngleWeighting:'AreaAngleWeighting',ENormalCalculationMethod_MAX:'ENormalCalculationMethod_MAX', };
declare type ESplitNormalMethod = 'UseExistingTopology' | 'FaceNormalThreshold' | 'FaceGroupID' | 'PerTriangle' | 'PerVertex' | 'ESplitNormalMethod_MAX';
declare var ESplitNormalMethod : { UseExistingTopology:'UseExistingTopology',FaceNormalThreshold:'FaceNormalThreshold',FaceGroupID:'FaceGroupID',PerTriangle:'PerTriangle',PerVertex:'PerVertex',ESplitNormalMethod_MAX:'ESplitNormalMethod_MAX', };
declare class EditNormalsToolProperties extends InteractiveToolPropertySet { 
	bRecomputeNormals: boolean;
	NormalCalculationMethod: ENormalCalculationMethod;
	bFixInconsistentNormals: boolean;
	bInvertNormals: boolean;
	SplitNormalMethod: ESplitNormalMethod;
	SharpEdgeAngleThreshold: number;
	bAllowSharpVertices: boolean;
	static Load(ResourceName: string): EditNormalsToolProperties;
	static Find(Outer: UObject, ResourceName: string): EditNormalsToolProperties;
	static GetDefaultObject(): EditNormalsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsToolProperties;
	static C(Other: UObject | any): EditNormalsToolProperties;
}

declare class EditNormalsAdvancedProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): EditNormalsAdvancedProperties;
	static Find(Outer: UObject, ResourceName: string): EditNormalsAdvancedProperties;
	static GetDefaultObject(): EditNormalsAdvancedProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsAdvancedProperties;
	static C(Other: UObject | any): EditNormalsAdvancedProperties;
}

declare class EditNormalsTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: EditNormalsToolProperties;
	AdvancedProperties: EditNormalsAdvancedProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	static Load(ResourceName: string): EditNormalsTool;
	static Find(Outer: UObject, ResourceName: string): EditNormalsTool;
	static GetDefaultObject(): EditNormalsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsTool;
	static C(Other: UObject | any): EditNormalsTool;
}

declare class EditNormalsOperatorFactory extends UObject { 
	Tool: EditNormalsTool;
	static Load(ResourceName: string): EditNormalsOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): EditNormalsOperatorFactory;
	static GetDefaultObject(): EditNormalsOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsOperatorFactory;
	static C(Other: UObject | any): EditNormalsOperatorFactory;
}

declare class EditPivotToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditPivotToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditPivotToolBuilder;
	static GetDefaultObject(): EditPivotToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotToolBuilder;
	static C(Other: UObject | any): EditPivotToolBuilder;
}

declare type EEditPivotSnapDragRotationMode = 'Ignore' | 'Align' | 'AlignFlipped' | 'LastValue' | 'EEditPivotSnapDragRotationMode_MAX';
declare var EEditPivotSnapDragRotationMode : { Ignore:'Ignore',Align:'Align',AlignFlipped:'AlignFlipped',LastValue:'LastValue',EEditPivotSnapDragRotationMode_MAX:'EEditPivotSnapDragRotationMode_MAX', };
declare class EditPivotToolProperties extends InteractiveToolPropertySet { 
	bEnableSnapDragging: boolean;
	RotationMode: EEditPivotSnapDragRotationMode;
	static Load(ResourceName: string): EditPivotToolProperties;
	static Find(Outer: UObject, ResourceName: string): EditPivotToolProperties;
	static GetDefaultObject(): EditPivotToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotToolProperties;
	static C(Other: UObject | any): EditPivotToolProperties;
}

declare class EditPivotToolActionPropertySet extends InteractiveToolPropertySet { 
	bUseWorldBox: boolean;
	static Load(ResourceName: string): EditPivotToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): EditPivotToolActionPropertySet;
	static GetDefaultObject(): EditPivotToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotToolActionPropertySet;
	WorldOrigin(): void;
	Top(): void;
	Right(): void;
	Left(): void;
	Front(): void;
	Center(): void;
	Bottom(): void;
	Back(): void;
	static C(Other: UObject | any): EditPivotToolActionPropertySet;
}

declare class EditPivotTarget { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	clone() : EditPivotTarget;
	static C(Other: UObject | any): EditPivotTarget;
}

declare class EditPivotTool extends MultiSelectionMeshEditingTool { 
	TransformProps: EditPivotToolProperties;
	EditPivotActions: EditPivotToolActionPropertySet;
	ActiveGizmos: EditPivotTarget[];
	DragAlignmentMechanic: DragAlignmentMechanic;
	static Load(ResourceName: string): EditPivotTool;
	static Find(Outer: UObject, ResourceName: string): EditPivotTool;
	static GetDefaultObject(): EditPivotTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotTool;
	static C(Other: UObject | any): EditPivotTool;
}

declare class EditUVIslandsToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditUVIslandsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditUVIslandsToolBuilder;
	static GetDefaultObject(): EditUVIslandsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditUVIslandsToolBuilder;
	static C(Other: UObject | any): EditUVIslandsToolBuilder;
}

declare class EditUVIslandsTool extends MeshSurfacePointTool { 
	MaterialSettings: ExistingMeshMaterialProperties;
	CheckerMaterial: MaterialInstanceDynamic;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	SelectionMechanic: PolygonSelectionMechanic;
	MultiTransformer: MultiTransformer;
	static Load(ResourceName: string): EditUVIslandsTool;
	static Find(Outer: UObject, ResourceName: string): EditUVIslandsTool;
	static GetDefaultObject(): EditUVIslandsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditUVIslandsTool;
	static C(Other: UObject | any): EditUVIslandsTool;
}

declare class HoleFillToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): HoleFillToolBuilder;
	static Find(Outer: UObject, ResourceName: string): HoleFillToolBuilder;
	static GetDefaultObject(): HoleFillToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillToolBuilder;
	static C(Other: UObject | any): HoleFillToolBuilder;
}

declare class SmoothHoleFillProperties extends InteractiveToolPropertySet { 
	bConstrainToHoleInterior: boolean;
	RemeshingExteriorRegionWidth: number;
	SmoothingExteriorRegionWidth: number;
	SmoothingInteriorRegionWidth: number;
	InteriorSmoothness: number;
	FillDensityScalar: number;
	bProjectDuringRemesh: boolean;
	static Load(ResourceName: string): SmoothHoleFillProperties;
	static Find(Outer: UObject, ResourceName: string): SmoothHoleFillProperties;
	static GetDefaultObject(): SmoothHoleFillProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothHoleFillProperties;
	static C(Other: UObject | any): SmoothHoleFillProperties;
}

declare type EHoleFillOpFillType = 'TriangleFan' | 'PolygonEarClipping' | 'Planar' | 'Minimal' | 'Smooth' | 'EHoleFillOpFillType_MAX';
declare var EHoleFillOpFillType : { TriangleFan:'TriangleFan',PolygonEarClipping:'PolygonEarClipping',Planar:'Planar',Minimal:'Minimal',Smooth:'Smooth',EHoleFillOpFillType_MAX:'EHoleFillOpFillType_MAX', };
declare class HoleFillToolProperties extends InteractiveToolPropertySet { 
	FillType: EHoleFillOpFillType;
	bRemoveIsolatedTriangles: boolean;
	bQuickFillSmallHoles: boolean;
	static Load(ResourceName: string): HoleFillToolProperties;
	static Find(Outer: UObject, ResourceName: string): HoleFillToolProperties;
	static GetDefaultObject(): HoleFillToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillToolProperties;
	static C(Other: UObject | any): HoleFillToolProperties;
}

declare class HoleFillToolActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): HoleFillToolActions;
	static Find(Outer: UObject, ResourceName: string): HoleFillToolActions;
	static GetDefaultObject(): HoleFillToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillToolActions;
	SelectAll(): void;
	Clear(): void;
	static C(Other: UObject | any): HoleFillToolActions;
}

declare class HoleFillStatisticsProperties extends InteractiveToolPropertySet { 
	InitialHoles: string;
	SelectedHoles: string;
	SuccessfulFills: string;
	FailedFills: string;
	RemainingHoles: string;
	static Load(ResourceName: string): HoleFillStatisticsProperties;
	static Find(Outer: UObject, ResourceName: string): HoleFillStatisticsProperties;
	static GetDefaultObject(): HoleFillStatisticsProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillStatisticsProperties;
	static C(Other: UObject | any): HoleFillStatisticsProperties;
}

declare class HoleFillTool extends SingleSelectionMeshEditingTool { 
	SmoothHoleFillProperties: SmoothHoleFillProperties;
	Properties: HoleFillToolProperties;
	Actions: HoleFillToolActions;
	Statistics: HoleFillStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	SelectionMechanic: PolygonSelectionMechanic;
	static Load(ResourceName: string): HoleFillTool;
	static Find(Outer: UObject, ResourceName: string): HoleFillTool;
	static GetDefaultObject(): HoleFillTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillTool;
	static C(Other: UObject | any): HoleFillTool;
}

declare class HoleFillOperatorFactory extends UObject { 
	FillTool: HoleFillTool;
	static Load(ResourceName: string): HoleFillOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): HoleFillOperatorFactory;
	static GetDefaultObject(): HoleFillOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillOperatorFactory;
	static C(Other: UObject | any): HoleFillOperatorFactory;
}

declare class LatticeDeformerToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): LatticeDeformerToolBuilder;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerToolBuilder;
	static GetDefaultObject(): LatticeDeformerToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerToolBuilder;
	static C(Other: UObject | any): LatticeDeformerToolBuilder;
}

declare type ELatticeInterpolationType = 'Linear' | 'Cubic' | 'ELatticeInterpolationType_MAX';
declare var ELatticeInterpolationType : { Linear:'Linear',Cubic:'Cubic',ELatticeInterpolationType_MAX:'ELatticeInterpolationType_MAX', };
declare class LatticeDeformerToolProperties extends InteractiveToolPropertySet { 
	XAxisResolution: number;
	YAxisResolution: number;
	ZAxisResolution: number;
	Padding: number;
	InterpolationType: ELatticeInterpolationType;
	bDeformNormals: boolean;
	bCanChangeResolution: boolean;
	GizmoCoordinateSystem: EToolContextCoordinateSystem;
	bSetPivotMode: boolean;
	bSoftDeformation: boolean;
	static Load(ResourceName: string): LatticeDeformerToolProperties;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerToolProperties;
	static GetDefaultObject(): LatticeDeformerToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerToolProperties;
	Constrain(): void;
	ClearConstraints(): void;
	static C(Other: UObject | any): LatticeDeformerToolProperties;
}

declare class LatticeDeformerTool extends SingleSelectionMeshEditingTool { 
	ControlPointsMechanic: LatticeControlPointsMechanic;
	Settings: LatticeDeformerToolProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	bLatticeDeformed: boolean;
	static Load(ResourceName: string): LatticeDeformerTool;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerTool;
	static GetDefaultObject(): LatticeDeformerTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerTool;
	static C(Other: UObject | any): LatticeDeformerTool;
}

declare class LatticeDeformerOperatorFactory extends UObject { 
	LatticeDeformerTool: LatticeDeformerTool;
	static Load(ResourceName: string): LatticeDeformerOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerOperatorFactory;
	static GetDefaultObject(): LatticeDeformerOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerOperatorFactory;
	static C(Other: UObject | any): LatticeDeformerOperatorFactory;
}

declare class MeshAttributePaintToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshAttributePaintToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintToolBuilder;
	static GetDefaultObject(): MeshAttributePaintToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintToolBuilder;
	static C(Other: UObject | any): MeshAttributePaintToolBuilder;
}

declare type EBrushActionMode = 'Paint' | 'FloodFill' | 'EBrushActionMode_MAX';
declare var EBrushActionMode : { Paint:'Paint',FloodFill:'FloodFill',EBrushActionMode_MAX:'EBrushActionMode_MAX', };
declare class MeshAttributePaintBrushOperationProperties extends InteractiveToolPropertySet { 
	BrushAction: EBrushActionMode;
	static Load(ResourceName: string): MeshAttributePaintBrushOperationProperties;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintBrushOperationProperties;
	static GetDefaultObject(): MeshAttributePaintBrushOperationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintBrushOperationProperties;
	static C(Other: UObject | any): MeshAttributePaintBrushOperationProperties;
}

declare class MeshAttributePaintToolProperties extends InteractiveToolPropertySet { 
	Attribute: string;
	static Load(ResourceName: string): MeshAttributePaintToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintToolProperties;
	static GetDefaultObject(): MeshAttributePaintToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintToolProperties;
	GetAttributeNames(): string[];
	static C(Other: UObject | any): MeshAttributePaintToolProperties;
}

declare class MeshAttributePaintEditActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshAttributePaintEditActions;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintEditActions;
	static GetDefaultObject(): MeshAttributePaintEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintEditActions;
	static C(Other: UObject | any): MeshAttributePaintEditActions;
}

declare class MeshAttributePaintTool extends DynamicMeshBrushTool { 
	BrushActionProps: MeshAttributePaintBrushOperationProperties;
	AttribProps: MeshAttributePaintToolProperties;
	static Load(ResourceName: string): MeshAttributePaintTool;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintTool;
	static GetDefaultObject(): MeshAttributePaintTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintTool;
	static C(Other: UObject | any): MeshAttributePaintTool;
}

declare class MeshBoundaryToolBase extends SingleSelectionMeshEditingTool { 
	SelectionMechanic: PolygonSelectionMechanic;
	static Load(ResourceName: string): MeshBoundaryToolBase;
	static Find(Outer: UObject, ResourceName: string): MeshBoundaryToolBase;
	static GetDefaultObject(): MeshBoundaryToolBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshBoundaryToolBase;
	static C(Other: UObject | any): MeshBoundaryToolBase;
}

declare class MeshGroupPaintToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshGroupPaintToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintToolBuilder;
	static GetDefaultObject(): MeshGroupPaintToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintToolBuilder;
	static C(Other: UObject | any): MeshGroupPaintToolBuilder;
}

declare type EMeshGroupPaintBrushType = 'Paint' | 'Erase' | 'LastValue' | 'EMeshGroupPaintBrushType_MAX';
declare var EMeshGroupPaintBrushType : { Paint:'Paint',Erase:'Erase',LastValue:'LastValue',EMeshGroupPaintBrushType_MAX:'EMeshGroupPaintBrushType_MAX', };
declare type EMeshGroupPaintInteractionType = 'Brush' | 'Fill' | 'GroupFill' | 'PolyLasso' | 'LastValue' | 'EMeshGroupPaintInteractionType_MAX';
declare var EMeshGroupPaintInteractionType : { Brush:'Brush',Fill:'Fill',GroupFill:'GroupFill',PolyLasso:'PolyLasso',LastValue:'LastValue',EMeshGroupPaintInteractionType_MAX:'EMeshGroupPaintInteractionType_MAX', };
declare type EMeshGroupPaintBrushAreaType = 'Connected' | 'Volumetric' | 'EMeshGroupPaintBrushAreaType_MAX';
declare var EMeshGroupPaintBrushAreaType : { Connected:'Connected',Volumetric:'Volumetric',EMeshGroupPaintBrushAreaType_MAX:'EMeshGroupPaintBrushAreaType_MAX', };
declare type EMeshGroupPaintVisibilityType = 'None' | 'FrontFacing' | 'Unoccluded' | 'EMeshGroupPaintVisibilityType_MAX';
declare var EMeshGroupPaintVisibilityType : { None:'None',FrontFacing:'FrontFacing',Unoccluded:'Unoccluded',EMeshGroupPaintVisibilityType_MAX:'EMeshGroupPaintVisibilityType_MAX', };
declare class GroupPaintBrushFilterProperties extends InteractiveToolPropertySet { 
	PrimaryBrushType: EMeshGroupPaintBrushType;
	SubToolType: EMeshGroupPaintInteractionType;
	BrushSize: number;
	BrushAreaMode: EMeshGroupPaintBrushAreaType;
	bHitBackFaces: boolean;
	SetGroup: number;
	bOnlySetUngrouped: boolean;
	EraseGroup: number;
	bOnlyEraseCurrent: boolean;
	AngleThreshold: number;
	bUVSeams: boolean;
	bNormalSeams: boolean;
	VisibilityFilter: EMeshGroupPaintVisibilityType;
	MinTriVertCount: number;
	static Load(ResourceName: string): GroupPaintBrushFilterProperties;
	static Find(Outer: UObject, ResourceName: string): GroupPaintBrushFilterProperties;
	static GetDefaultObject(): GroupPaintBrushFilterProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroupPaintBrushFilterProperties;
	static C(Other: UObject | any): GroupPaintBrushFilterProperties;
}

declare class MeshGroupPaintToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshGroupPaintToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintToolActionPropertySet;
	static GetDefaultObject(): MeshGroupPaintToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintToolActionPropertySet;
	static C(Other: UObject | any): MeshGroupPaintToolActionPropertySet;
}

declare class MeshGroupPaintToolFreezeActions extends MeshGroupPaintToolActionPropertySet { 
	static Load(ResourceName: string): MeshGroupPaintToolFreezeActions;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintToolFreezeActions;
	static GetDefaultObject(): MeshGroupPaintToolFreezeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintToolFreezeActions;
	UnfreezeAll(): void;
	ShrinkCurrent(): void;
	GrowCurrent(): void;
	FreezeOthers(): void;
	FreezeCurrent(): void;
	FloodFillCurrent(): void;
	ClearCurrent(): void;
	ClearAll(): void;
	static C(Other: UObject | any): MeshGroupPaintToolFreezeActions;
}

declare class SculptBrushProperties extends InteractiveToolPropertySet { 
	BrushSize: BrushToolRadius;
	BrushFalloffAmount: number;
	bShowFalloff: boolean;
	Depth: number;
	bHitBackFaces: boolean;
	FlowRate: number;
	Spacing: number;
	Lazyness: number;
	bShowPerBrushProps: boolean;
	bShowLazyness: boolean;
	bShowFlowRate: boolean;
	bShowSpacing: boolean;
	static Load(ResourceName: string): SculptBrushProperties;
	static Find(Outer: UObject, ResourceName: string): SculptBrushProperties;
	static GetDefaultObject(): SculptBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SculptBrushProperties;
	static C(Other: UObject | any): SculptBrushProperties;
}

declare class WorkPlaneProperties extends InteractiveToolPropertySet { 
	bPropertySetEnabled: boolean;
	bShowGizmo: boolean;
	Position: Vector;
	Rotation: Quat;
	static Load(ResourceName: string): WorkPlaneProperties;
	static Find(Outer: UObject, ResourceName: string): WorkPlaneProperties;
	static GetDefaultObject(): WorkPlaneProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorkPlaneProperties;
	static C(Other: UObject | any): WorkPlaneProperties;
}

declare class MeshSculptToolBase extends MeshSurfacePointTool { 
	BrushProperties: SculptBrushProperties;
	GizmoProperties: WorkPlaneProperties;
	BrushOpPropSets: Map<number, MeshSculptBrushOpProps>;
	SecondaryBrushOpPropSets: Map<number, MeshSculptBrushOpProps>;
	ViewProperties: MeshEditingViewProperties;
	ActiveOverrideMaterial: MaterialInstanceDynamic;
	BrushIndicator: BrushStampIndicator;
	bIsVolumetricIndicator: boolean;
	BrushIndicatorMaterial: MaterialInstanceDynamic;
	BrushIndicatorMesh: PreviewMesh;
	PlaneTransformGizmo: CombinedTransformGizmo;
	PlaneTransformProxy: TransformProxy;
	static Load(ResourceName: string): MeshSculptToolBase;
	static Find(Outer: UObject, ResourceName: string): MeshSculptToolBase;
	static GetDefaultObject(): MeshSculptToolBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSculptToolBase;
	static C(Other: UObject | any): MeshSculptToolBase;
}

declare class MeshGroupPaintTool extends MeshSculptToolBase { 
	PolygroupLayerProperties: PolygroupLayersProperties;
	FilterProperties: GroupPaintBrushFilterProperties;
	PaintBrushOpProperties: GroupPaintBrushOpProps;
	EraseBrushOpProperties: GroupEraseBrushOpProps;
	FreezeActions: MeshGroupPaintToolFreezeActions;
	PolyLassoMechanic: PolyLassoMarqueeMechanic;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): MeshGroupPaintTool;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintTool;
	static GetDefaultObject(): MeshGroupPaintTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintTool;
	static C(Other: UObject | any): MeshGroupPaintTool;
}

declare class MeshInspectorToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshInspectorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshInspectorToolBuilder;
	static GetDefaultObject(): MeshInspectorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInspectorToolBuilder;
	static C(Other: UObject | any): MeshInspectorToolBuilder;
}

declare class MeshInspectorProperties extends InteractiveToolPropertySet { 
	bWireframe: boolean;
	bBoundaryEdges: boolean;
	bBowtieVertices: boolean;
	bPolygonBorders: boolean;
	bUVSeams: boolean;
	bUVBowties: boolean;
	bMissingUVs: boolean;
	bNormalSeams: boolean;
	bNormalVectors: boolean;
	bTangentVectors: boolean;
	NormalLength: number;
	TangentLength: number;
	static Load(ResourceName: string): MeshInspectorProperties;
	static Find(Outer: UObject, ResourceName: string): MeshInspectorProperties;
	static GetDefaultObject(): MeshInspectorProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInspectorProperties;
	static C(Other: UObject | any): MeshInspectorProperties;
}

declare class MeshInspectorTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshInspectorProperties;
	MaterialSettings: ExistingMeshMaterialProperties;
	PreviewMesh: PreviewMesh;
	DrawnLineSet: LineSetComponent;
	DefaultMaterial: MaterialInterface;
	static Load(ResourceName: string): MeshInspectorTool;
	static Find(Outer: UObject, ResourceName: string): MeshInspectorTool;
	static GetDefaultObject(): MeshInspectorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInspectorTool;
	static C(Other: UObject | any): MeshInspectorTool;
}

declare class MeshSelectionToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshSelectionToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionToolBuilder;
	static GetDefaultObject(): MeshSelectionToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionToolBuilder;
	static C(Other: UObject | any): MeshSelectionToolBuilder;
}

declare class MeshSelectionToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshSelectionToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionToolActionPropertySet;
	static GetDefaultObject(): MeshSelectionToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionToolActionPropertySet;
	static C(Other: UObject | any): MeshSelectionToolActionPropertySet;
}

declare class MeshSelectionEditActions extends MeshSelectionToolActionPropertySet { 
	static Load(ResourceName: string): MeshSelectionEditActions;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionEditActions;
	static GetDefaultObject(): MeshSelectionEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionEditActions;
	Shrink(): void;
	SelectAll(): void;
	OptimizeBorder(): void;
	LargestTriCountPart(): void;
	LargestAreaPart(): void;
	Invert(): void;
	Grow(): void;
	FloodFill(): void;
	Clear(): void;
	static C(Other: UObject | any): MeshSelectionEditActions;
}

declare class MeshSelectionMeshEditActions extends MeshSelectionToolActionPropertySet { 
	static Load(ResourceName: string): MeshSelectionMeshEditActions;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionMeshEditActions;
	static GetDefaultObject(): MeshSelectionMeshEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionMeshEditActions;
	SmoothBorder(): void;
	Separate(): void;
	FlipNormals(): void;
	Duplicate(): void;
	Disconnect(): void;
	Delete(): void;
	CreatePolygroup(): void;
	static C(Other: UObject | any): MeshSelectionMeshEditActions;
}

declare type EMeshSelectionToolPrimaryMode = 'Brush' | 'VolumetricBrush' | 'AngleFiltered' | 'Visible' | 'AllConnected' | 'AllInGroup' | 'ByMaterial' | 'ByUVIsland' | 'AllWithinAngle' | 'EMeshSelectionToolPrimaryMode_MAX';
declare var EMeshSelectionToolPrimaryMode : { Brush:'Brush',VolumetricBrush:'VolumetricBrush',AngleFiltered:'AngleFiltered',Visible:'Visible',AllConnected:'AllConnected',AllInGroup:'AllInGroup',ByMaterial:'ByMaterial',ByUVIsland:'ByUVIsland',AllWithinAngle:'AllWithinAngle',EMeshSelectionToolPrimaryMode_MAX:'EMeshSelectionToolPrimaryMode_MAX', };
declare type EMeshFacesColorMode = 'None' | 'ByGroup' | 'ByMaterialID' | 'ByUVIsland' | 'EMeshFacesColorMode_MAX';
declare var EMeshFacesColorMode : { None:'None',ByGroup:'ByGroup',ByMaterialID:'ByMaterialID',ByUVIsland:'ByUVIsland',EMeshFacesColorMode_MAX:'EMeshFacesColorMode_MAX', };
declare class MeshSelectionToolProperties extends InteractiveToolPropertySet { 
	SelectionMode: EMeshSelectionToolPrimaryMode;
	AngleTolerance: number;
	bHitBackFaces: boolean;
	bShowPoints: boolean;
	FaceColorMode: EMeshFacesColorMode;
	static Load(ResourceName: string): MeshSelectionToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionToolProperties;
	static GetDefaultObject(): MeshSelectionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionToolProperties;
	static C(Other: UObject | any): MeshSelectionToolProperties;
}

declare class MeshStatisticsProperties extends InteractiveToolPropertySet { 
	Mesh: string;
	UV: string;
	Attributes: string;
	static Load(ResourceName: string): MeshStatisticsProperties;
	static Find(Outer: UObject, ResourceName: string): MeshStatisticsProperties;
	static GetDefaultObject(): MeshStatisticsProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshStatisticsProperties;
	static C(Other: UObject | any): MeshStatisticsProperties;
}

declare class MeshSelectionTool extends DynamicMeshBrushTool { 
	SelectionProps: MeshSelectionToolProperties;
	SelectionActions: MeshSelectionEditActions;
	EditActions: MeshSelectionToolActionPropertySet;
	MeshStatisticsProperties: MeshStatisticsProperties;
	MeshElementsDisplay: MeshElementsVisualizer;
	UVChannelProperties: MeshUVChannelProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	USelection: MeshSelectionSet;
	SpawnedActors: Actor[];
	static Load(ResourceName: string): MeshSelectionTool;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionTool;
	static GetDefaultObject(): MeshSelectionTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionTool;
	static C(Other: UObject | any): MeshSelectionTool;
}

declare class MeshSpaceDeformerToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshSpaceDeformerToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerToolBuilder;
	static GetDefaultObject(): MeshSpaceDeformerToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerToolBuilder;
	static C(Other: UObject | any): MeshSpaceDeformerToolBuilder;
}

declare type ENonlinearOperationType = 'Bend' | 'Flare' | 'Twist' | 'ENonlinearOperationType_MAX';
declare var ENonlinearOperationType : { Bend:'Bend',Flare:'Flare',Twist:'Twist',ENonlinearOperationType_MAX:'ENonlinearOperationType_MAX', };
declare type EFlareProfileType = 'SinMode' | 'SinSquaredMode' | 'TriangleMode' | 'EFlareProfileType_MAX';
declare var EFlareProfileType : { SinMode:'SinMode',SinSquaredMode:'SinSquaredMode',TriangleMode:'TriangleMode',EFlareProfileType_MAX:'EFlareProfileType_MAX', };
declare class MeshSpaceDeformerToolProperties extends InteractiveToolPropertySet { 
	SelectedOperationType: ENonlinearOperationType;
	UpperBoundsInterval: number;
	LowerBoundsInterval: number;
	BendDegrees: number;
	TwistDegrees: number;
	FlareProfileType: EFlareProfileType;
	FlarePercentY: number;
	bLockXAndYFlaring: boolean;
	FlarePercentX: number;
	bLockBottom: boolean;
	bShowOriginalMesh: boolean;
	bDrawVisualization: boolean;
	bAlignToNormalOnCtrlClick: boolean;
	static Load(ResourceName: string): MeshSpaceDeformerToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerToolProperties;
	static GetDefaultObject(): MeshSpaceDeformerToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerToolProperties;
	static C(Other: UObject | any): MeshSpaceDeformerToolProperties;
}

declare class MeshSpaceDeformerToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshSpaceDeformerToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerToolActionPropertySet;
	static GetDefaultObject(): MeshSpaceDeformerToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerToolActionPropertySet;
	ShiftToCenter(): void;
	static C(Other: UObject | any): MeshSpaceDeformerToolActionPropertySet;
}

declare class MeshSpaceDeformerTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshSpaceDeformerToolProperties;
	ToolActions: MeshSpaceDeformerToolActionPropertySet;
	StateTarget: GizmoTransformChangeStateTarget;
	DragAlignmentMechanic: DragAlignmentMechanic;
	Preview: MeshOpPreviewWithBackgroundCompute;
	OriginalMeshPreview: PreviewMesh;
	IntervalGizmo: IntervalGizmo;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	UpIntervalSource: GizmoLocalFloatParameterSource;
	DownIntervalSource: GizmoLocalFloatParameterSource;
	ForwardIntervalSource: GizmoLocalFloatParameterSource;
	static Load(ResourceName: string): MeshSpaceDeformerTool;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerTool;
	static GetDefaultObject(): MeshSpaceDeformerTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerTool;
	static C(Other: UObject | any): MeshSpaceDeformerTool;
}

declare class SpaceDeformerOperatorFactory extends UObject { 
	SpaceDeformerTool: MeshSpaceDeformerTool;
	static Load(ResourceName: string): SpaceDeformerOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): SpaceDeformerOperatorFactory;
	static GetDefaultObject(): SpaceDeformerOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpaceDeformerOperatorFactory;
	static C(Other: UObject | any): SpaceDeformerOperatorFactory;
}

declare class MeshVertexSculptToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshVertexSculptToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshVertexSculptToolBuilder;
	static GetDefaultObject(): MeshVertexSculptToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshVertexSculptToolBuilder;
	static C(Other: UObject | any): MeshVertexSculptToolBuilder;
}

declare type EMeshVertexSculptBrushType = 'Move' | 'PullKelvin' | 'PullSharpKelvin' | 'Smooth' | 'SmoothFill' | 'Offset' | 'SculptView' | 'SculptMax' | 'Inflate' | 'ScaleKelvin' | 'Pinch' | 'TwistKelvin' | 'Flatten' | 'Plane' | 'PlaneViewAligned' | 'FixedPlane' | 'LastValue' | 'EMeshVertexSculptBrushType_MAX';
declare var EMeshVertexSculptBrushType : { Move:'Move',PullKelvin:'PullKelvin',PullSharpKelvin:'PullSharpKelvin',Smooth:'Smooth',SmoothFill:'SmoothFill',Offset:'Offset',SculptView:'SculptView',SculptMax:'SculptMax',Inflate:'Inflate',ScaleKelvin:'ScaleKelvin',Pinch:'Pinch',TwistKelvin:'TwistKelvin',Flatten:'Flatten',Plane:'Plane',PlaneViewAligned:'PlaneViewAligned',FixedPlane:'FixedPlane',LastValue:'LastValue',EMeshVertexSculptBrushType_MAX:'EMeshVertexSculptBrushType_MAX', };
declare type EMeshSculptFalloffType = 'Smooth' | 'Linear' | 'Inverse' | 'Round' | 'BoxSmooth' | 'BoxLinear' | 'BoxInverse' | 'BoxRound' | 'LastValue' | 'EMeshSculptFalloffType_MAX';
declare var EMeshSculptFalloffType : { Smooth:'Smooth',Linear:'Linear',Inverse:'Inverse',Round:'Round',BoxSmooth:'BoxSmooth',BoxLinear:'BoxLinear',BoxInverse:'BoxInverse',BoxRound:'BoxRound',LastValue:'LastValue',EMeshSculptFalloffType_MAX:'EMeshSculptFalloffType_MAX', };
declare type EMeshVertexSculptBrushFilterType = 'None' | 'Component' | 'PolyGroup' | 'EMeshVertexSculptBrushFilterType_MAX';
declare var EMeshVertexSculptBrushFilterType : { None:'None',Component:'Component',PolyGroup:'PolyGroup',EMeshVertexSculptBrushFilterType_MAX:'EMeshVertexSculptBrushFilterType_MAX', };
declare class VertexBrushAlphaProperties extends InteractiveToolPropertySet { 
	Alpha: Texture2D;
	RotationAngle: number;
	bRandomize: boolean;
	RandomRange: number;
	static Load(ResourceName: string): VertexBrushAlphaProperties;
	static Find(Outer: UObject, ResourceName: string): VertexBrushAlphaProperties;
	static GetDefaultObject(): VertexBrushAlphaProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexBrushAlphaProperties;
	static C(Other: UObject | any): VertexBrushAlphaProperties;
}

declare class MeshSymmetryProperties extends InteractiveToolPropertySet { 
	bEnableSymmetry: boolean;
	bSymmetryCanBeEnabled: boolean;
	static Load(ResourceName: string): MeshSymmetryProperties;
	static Find(Outer: UObject, ResourceName: string): MeshSymmetryProperties;
	static GetDefaultObject(): MeshSymmetryProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSymmetryProperties;
	static C(Other: UObject | any): MeshSymmetryProperties;
}

declare class MeshVertexSculptTool extends MeshSculptToolBase { 
	SculptProperties: VertexBrushSculptProperties;
	AlphaProperties: VertexBrushAlphaProperties;
	BrushAlpha: Texture2D;
	SymmetryProperties: MeshSymmetryProperties;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): MeshVertexSculptTool;
	static Find(Outer: UObject, ResourceName: string): MeshVertexSculptTool;
	static GetDefaultObject(): MeshVertexSculptTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshVertexSculptTool;
	static C(Other: UObject | any): MeshVertexSculptTool;
}

declare class VertexBrushSculptProperties extends InteractiveToolPropertySet { 
	PrimaryBrushType: EMeshVertexSculptBrushType;
	PrimaryFalloffType: EMeshSculptFalloffType;
	BrushFilter: EMeshVertexSculptBrushFilterType;
	bFreezeTarget: boolean;
	Tool: MeshVertexSculptTool;
	static Load(ResourceName: string): VertexBrushSculptProperties;
	static Find(Outer: UObject, ResourceName: string): VertexBrushSculptProperties;
	static GetDefaultObject(): VertexBrushSculptProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexBrushSculptProperties;
	static C(Other: UObject | any): VertexBrushSculptProperties;
}

declare class MirrorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MirrorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MirrorToolBuilder;
	static GetDefaultObject(): MirrorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorToolBuilder;
	static C(Other: UObject | any): MirrorToolBuilder;
}

declare type EMirrorOperationMode = 'MirrorAndAppend' | 'MirrorExisting' | 'EMirrorOperationMode_MAX';
declare var EMirrorOperationMode : { MirrorAndAppend:'MirrorAndAppend',MirrorExisting:'MirrorExisting',EMirrorOperationMode_MAX:'EMirrorOperationMode_MAX', };
declare type EMirrorCtrlClickBehavior = 'Reposition' | 'RepositionAndReorient' | 'EMirrorCtrlClickBehavior_MAX';
declare var EMirrorCtrlClickBehavior : { Reposition:'Reposition',RepositionAndReorient:'RepositionAndReorient',EMirrorCtrlClickBehavior_MAX:'EMirrorCtrlClickBehavior_MAX', };
declare type EMirrorSaveMode = 'UpdateAssets' | 'CreateNewAssets' | 'EMirrorSaveMode_MAX';
declare var EMirrorSaveMode : { UpdateAssets:'UpdateAssets',CreateNewAssets:'CreateNewAssets',EMirrorSaveMode_MAX:'EMirrorSaveMode_MAX', };
declare class MirrorToolProperties extends InteractiveToolPropertySet { 
	OperationMode: EMirrorOperationMode;
	bCropAlongMirrorPlaneFirst: boolean;
	bWeldVerticesOnMirrorPlane: boolean;
	PlaneTolerance: number;
	bAllowBowtieVertexCreation: boolean;
	CtrlClickBehavior: EMirrorCtrlClickBehavior;
	bButtonsOnlyChangeOrientation: boolean;
	bShowPreview: boolean;
	SaveMode: EMirrorSaveMode;
	static Load(ResourceName: string): MirrorToolProperties;
	static Find(Outer: UObject, ResourceName: string): MirrorToolProperties;
	static GetDefaultObject(): MirrorToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorToolProperties;
	static C(Other: UObject | any): MirrorToolProperties;
}

declare class MirrorToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MirrorToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MirrorToolActionPropertySet;
	static GetDefaultObject(): MirrorToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorToolActionPropertySet;
	Up(): void;
	ShiftToCenter(): void;
	Right(): void;
	Left(): void;
	Forward(): void;
	Down(): void;
	Backward(): void;
	static C(Other: UObject | any): MirrorToolActionPropertySet;
}

declare class MirrorTool extends MultiSelectionMeshEditingTool { 
	Settings: MirrorToolProperties;
	ToolActions: MirrorToolActionPropertySet;
	MeshesToMirror: DynamicMeshReplacementChangeTarget[];
	Previews: MeshOpPreviewWithBackgroundCompute[];
	PlaneMechanic: ConstructionPlaneMechanic;
	static Load(ResourceName: string): MirrorTool;
	static Find(Outer: UObject, ResourceName: string): MirrorTool;
	static GetDefaultObject(): MirrorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorTool;
	static C(Other: UObject | any): MirrorTool;
}

declare class MirrorOperatorFactory extends UObject { 
	MirrorTool: MirrorTool;
	static Load(ResourceName: string): MirrorOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): MirrorOperatorFactory;
	static GetDefaultObject(): MirrorOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorOperatorFactory;
	static C(Other: UObject | any): MirrorOperatorFactory;
}

declare type EOffsetMeshToolOffsetType = 'Iterative' | 'Implicit' | 'EOffsetMeshToolOffsetType_MAX';
declare var EOffsetMeshToolOffsetType : { Iterative:'Iterative',Implicit:'Implicit',EOffsetMeshToolOffsetType_MAX:'EOffsetMeshToolOffsetType_MAX', };
declare class OffsetMeshToolProperties extends InteractiveToolPropertySet { 
	OffsetType: EOffsetMeshToolOffsetType;
	Distance: number;
	bCreateShell: boolean;
	static Load(ResourceName: string): OffsetMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): OffsetMeshToolProperties;
	static GetDefaultObject(): OffsetMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetMeshToolProperties;
	static C(Other: UObject | any): OffsetMeshToolProperties;
}

declare class OffsetWeightMapSetProperties extends WeightMapSetProperties { 
	MinDistance: number;
	static Load(ResourceName: string): OffsetWeightMapSetProperties;
	static Find(Outer: UObject, ResourceName: string): OffsetWeightMapSetProperties;
	static GetDefaultObject(): OffsetWeightMapSetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetWeightMapSetProperties;
	static C(Other: UObject | any): OffsetWeightMapSetProperties;
}

declare class IterativeOffsetProperties extends InteractiveToolPropertySet { 
	Steps: number;
	bOffsetBoundaries: boolean;
	SmoothingPerStep: number;
	bReprojectSmooth: boolean;
	static Load(ResourceName: string): IterativeOffsetProperties;
	static Find(Outer: UObject, ResourceName: string): IterativeOffsetProperties;
	static GetDefaultObject(): IterativeOffsetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IterativeOffsetProperties;
	static C(Other: UObject | any): IterativeOffsetProperties;
}

declare class ImplicitOffsetProperties extends InteractiveToolPropertySet { 
	Smoothness: number;
	bPreserveUVs: boolean;
	static Load(ResourceName: string): ImplicitOffsetProperties;
	static Find(Outer: UObject, ResourceName: string): ImplicitOffsetProperties;
	static GetDefaultObject(): ImplicitOffsetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImplicitOffsetProperties;
	static C(Other: UObject | any): ImplicitOffsetProperties;
}

declare class OffsetMeshTool extends BaseMeshProcessingTool { 
	OffsetProperties: OffsetMeshToolProperties;
	IterativeProperties: IterativeOffsetProperties;
	ImplicitProperties: ImplicitOffsetProperties;
	WeightMapProperties: OffsetWeightMapSetProperties;
	static Load(ResourceName: string): OffsetMeshTool;
	static Find(Outer: UObject, ResourceName: string): OffsetMeshTool;
	static GetDefaultObject(): OffsetMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetMeshTool;
	static C(Other: UObject | any): OffsetMeshTool;
}

declare class OffsetMeshToolBuilder extends BaseMeshProcessingToolBuilder { 
	static Load(ResourceName: string): OffsetMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): OffsetMeshToolBuilder;
	static GetDefaultObject(): OffsetMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetMeshToolBuilder;
	static C(Other: UObject | any): OffsetMeshToolBuilder;
}

declare type ECollisionGeometryMode = 'Default' | 'SimpleAndComplex' | 'UseSimpleAsComplex' | 'UseComplexAsSimple' | 'ECollisionGeometryMode_MAX';
declare var ECollisionGeometryMode : { Default:'Default',SimpleAndComplex:'SimpleAndComplex',UseSimpleAsComplex:'UseSimpleAsComplex',UseComplexAsSimple:'UseComplexAsSimple',ECollisionGeometryMode_MAX:'ECollisionGeometryMode_MAX', };
declare class PhysicsSphereData { 
	Radius: number;
	Transform: Transform;
	Element: KShapeElem;
	clone() : PhysicsSphereData;
	static C(Other: UObject | any): PhysicsSphereData;
}

declare class PhysicsBoxData { 
	Dimensions: Vector;
	Transform: Transform;
	Element: KShapeElem;
	clone() : PhysicsBoxData;
	static C(Other: UObject | any): PhysicsBoxData;
}

declare class PhysicsCapsuleData { 
	Radius: number;
	Length: number;
	Transform: Transform;
	Element: KShapeElem;
	clone() : PhysicsCapsuleData;
	static C(Other: UObject | any): PhysicsCapsuleData;
}

declare class PhysicsConvexData { 
	NumVertices: number;
	NumFaces: number;
	Element: KShapeElem;
	clone() : PhysicsConvexData;
	static C(Other: UObject | any): PhysicsConvexData;
}

declare class PhysicsLevelSetData { 
	Element: KShapeElem;
	clone() : PhysicsLevelSetData;
	static C(Other: UObject | any): PhysicsLevelSetData;
}

declare class PhysicsObjectToolPropertySet extends InteractiveToolPropertySet { 
	ObjectName: string;
	CollisionType: ECollisionGeometryMode;
	Spheres: PhysicsSphereData[];
	Boxes: PhysicsBoxData[];
	Capsules: PhysicsCapsuleData[];
	Convexes: PhysicsConvexData[];
	LevelSets: PhysicsLevelSetData[];
	static Load(ResourceName: string): PhysicsObjectToolPropertySet;
	static Find(Outer: UObject, ResourceName: string): PhysicsObjectToolPropertySet;
	static GetDefaultObject(): PhysicsObjectToolPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsObjectToolPropertySet;
	static C(Other: UObject | any): PhysicsObjectToolPropertySet;
}

declare class CollisionGeometryVisualizationProperties extends InteractiveToolPropertySet { 
	LineThickness: number;
	bShowHidden: boolean;
	bRandomColors: boolean;
	Color: Color;
	static Load(ResourceName: string): CollisionGeometryVisualizationProperties;
	static Find(Outer: UObject, ResourceName: string): CollisionGeometryVisualizationProperties;
	static GetDefaultObject(): CollisionGeometryVisualizationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CollisionGeometryVisualizationProperties;
	static C(Other: UObject | any): CollisionGeometryVisualizationProperties;
}

declare class ExtractCollisionGeometryToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ExtractCollisionGeometryToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ExtractCollisionGeometryToolBuilder;
	static GetDefaultObject(): ExtractCollisionGeometryToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtractCollisionGeometryToolBuilder;
	static C(Other: UObject | any): ExtractCollisionGeometryToolBuilder;
}

declare type EExtractCollisionOutputType = 'Simple' | 'Complex' | 'EExtractCollisionOutputType_MAX';
declare var EExtractCollisionOutputType : { Simple:'Simple',Complex:'Complex',EExtractCollisionOutputType_MAX:'EExtractCollisionOutputType_MAX', };
declare class ExtractCollisionToolProperties extends InteractiveToolPropertySet { 
	CollisionType: EExtractCollisionOutputType;
	bWeldEdges: boolean;
	bOutputSeparateMeshes: boolean;
	bShowPreview: boolean;
	bShowInputMesh: boolean;
	static Load(ResourceName: string): ExtractCollisionToolProperties;
	static Find(Outer: UObject, ResourceName: string): ExtractCollisionToolProperties;
	static GetDefaultObject(): ExtractCollisionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtractCollisionToolProperties;
	static C(Other: UObject | any): ExtractCollisionToolProperties;
}

declare class ExtractCollisionGeometryTool extends SingleSelectionMeshEditingTool { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Settings: ExtractCollisionToolProperties;
	VizSettings: CollisionGeometryVisualizationProperties;
	ObjectProps: PhysicsObjectToolPropertySet;
	PreviewElements: PreviewGeometry;
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): ExtractCollisionGeometryTool;
	static Find(Outer: UObject, ResourceName: string): ExtractCollisionGeometryTool;
	static GetDefaultObject(): ExtractCollisionGeometryTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtractCollisionGeometryTool;
	static C(Other: UObject | any): ExtractCollisionGeometryTool;
}

declare class PhysicsInspectorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PhysicsInspectorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PhysicsInspectorToolBuilder;
	static GetDefaultObject(): PhysicsInspectorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsInspectorToolBuilder;
	static C(Other: UObject | any): PhysicsInspectorToolBuilder;
}

declare class PhysicsInspectorTool extends MultiSelectionMeshEditingTool { 
	VizSettings: CollisionGeometryVisualizationProperties;
	ObjectData: PhysicsObjectToolPropertySet[];
	LineMaterial: MaterialInterface;
	PreviewElements: PreviewGeometry[];
	static Load(ResourceName: string): PhysicsInspectorTool;
	static Find(Outer: UObject, ResourceName: string): PhysicsInspectorTool;
	static GetDefaultObject(): PhysicsInspectorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsInspectorTool;
	static C(Other: UObject | any): PhysicsInspectorTool;
}

declare class SetCollisionGeometryToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SetCollisionGeometryToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SetCollisionGeometryToolBuilder;
	static GetDefaultObject(): SetCollisionGeometryToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetCollisionGeometryToolBuilder;
	static C(Other: UObject | any): SetCollisionGeometryToolBuilder;
}

declare type ECollisionGeometryType = 'KeepExisting' | 'AlignedBoxes' | 'OrientedBoxes' | 'MinimalSpheres' | 'Capsules' | 'ConvexHulls' | 'SweptHulls' | 'LevelSets' | 'MinVolume' | 'None' | 'ECollisionGeometryType_MAX';
declare var ECollisionGeometryType : { KeepExisting:'KeepExisting',AlignedBoxes:'AlignedBoxes',OrientedBoxes:'OrientedBoxes',MinimalSpheres:'MinimalSpheres',Capsules:'Capsules',ConvexHulls:'ConvexHulls',SweptHulls:'SweptHulls',LevelSets:'LevelSets',MinVolume:'MinVolume',None:'None',ECollisionGeometryType_MAX:'ECollisionGeometryType_MAX', };
declare type ESetCollisionGeometryInputMode = 'CombineAll' | 'PerInputObject' | 'PerMeshComponent' | 'PerMeshGroup' | 'ESetCollisionGeometryInputMode_MAX';
declare var ESetCollisionGeometryInputMode : { CombineAll:'CombineAll',PerInputObject:'PerInputObject',PerMeshComponent:'PerMeshComponent',PerMeshGroup:'PerMeshGroup',ESetCollisionGeometryInputMode_MAX:'ESetCollisionGeometryInputMode_MAX', };
declare type EProjectedHullAxis = 'X' | 'Y' | 'Z' | 'SmallestBoxDimension' | 'SmallestVolume' | 'EProjectedHullAxis_MAX';
declare var EProjectedHullAxis : { X:'X',Y:'Y',Z:'Z',SmallestBoxDimension:'SmallestBoxDimension',SmallestVolume:'SmallestVolume',EProjectedHullAxis_MAX:'EProjectedHullAxis_MAX', };
declare class SetCollisionGeometryToolProperties extends InteractiveToolPropertySet { 
	GeometryType: ECollisionGeometryType;
	InputMode: ESetCollisionGeometryInputMode;
	bUseWorldSpace: boolean;
	bRemoveContained: boolean;
	bEnableMaxCount: boolean;
	MaxCount: number;
	MinThickness: number;
	bDetectBoxes: boolean;
	bDetectSpheres: boolean;
	bDetectCapsules: boolean;
	bSimplifyHulls: boolean;
	HullTargetFaceCount: number;
	MaxHullsPerMesh: number;
	ConvexDecompositionSearchFactor: number;
	AddHullsErrorTolerance: number;
	MinPartThickness: number;
	bSimplifyPolygons: boolean;
	HullTolerance: number;
	SweepAxis: EProjectedHullAxis;
	LevelSetResolution: number;
	bAppendToExisting: boolean;
	SetCollisionType: ECollisionGeometryMode;
	static Load(ResourceName: string): SetCollisionGeometryToolProperties;
	static Find(Outer: UObject, ResourceName: string): SetCollisionGeometryToolProperties;
	static GetDefaultObject(): SetCollisionGeometryToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetCollisionGeometryToolProperties;
	static C(Other: UObject | any): SetCollisionGeometryToolProperties;
}

declare class SetCollisionGeometryTool extends MultiSelectionMeshEditingTool { 
	Settings: SetCollisionGeometryToolProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	VizSettings: CollisionGeometryVisualizationProperties;
	CollisionProps: PhysicsObjectToolPropertySet;
	LineMaterial: MaterialInterface;
	PreviewGeom: PreviewGeometry;
	static Load(ResourceName: string): SetCollisionGeometryTool;
	static Find(Outer: UObject, ResourceName: string): SetCollisionGeometryTool;
	static GetDefaultObject(): SetCollisionGeometryTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetCollisionGeometryTool;
	static C(Other: UObject | any): SetCollisionGeometryTool;
}

declare class PlaneCutToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PlaneCutToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PlaneCutToolBuilder;
	static GetDefaultObject(): PlaneCutToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutToolBuilder;
	static C(Other: UObject | any): PlaneCutToolBuilder;
}

declare class AcceptOutputProperties extends InteractiveToolPropertySet { 
	bExportSeparatedPiecesAsNewMeshAssets: boolean;
	static Load(ResourceName: string): AcceptOutputProperties;
	static Find(Outer: UObject, ResourceName: string): AcceptOutputProperties;
	static GetDefaultObject(): AcceptOutputProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AcceptOutputProperties;
	static C(Other: UObject | any): AcceptOutputProperties;
}

declare class PlaneCutToolProperties extends InteractiveToolPropertySet { 
	bKeepBothHalves: boolean;
	SpacingBetweenHalves: number;
	bShowPreview: boolean;
	bFillCutHole: boolean;
	bFillSpans: boolean;
	static Load(ResourceName: string): PlaneCutToolProperties;
	static Find(Outer: UObject, ResourceName: string): PlaneCutToolProperties;
	static GetDefaultObject(): PlaneCutToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutToolProperties;
	static C(Other: UObject | any): PlaneCutToolProperties;
}

declare class PlaneCutTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: PlaneCutToolProperties;
	AcceptProperties: AcceptOutputProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	MeshesToCut: DynamicMeshReplacementChangeTarget[];
	PlaneMechanic: ConstructionPlaneMechanic;
	static Load(ResourceName: string): PlaneCutTool;
	static Find(Outer: UObject, ResourceName: string): PlaneCutTool;
	static GetDefaultObject(): PlaneCutTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutTool;
	FlipPlane(): void;
	Cut(): void;
	static C(Other: UObject | any): PlaneCutTool;
}

declare class PlaneCutOperatorFactory extends UObject { 
	CutTool: PlaneCutTool;
	static Load(ResourceName: string): PlaneCutOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): PlaneCutOperatorFactory;
	static GetDefaultObject(): PlaneCutOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutOperatorFactory;
	static C(Other: UObject | any): PlaneCutOperatorFactory;
}

declare class ProjectToTargetToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ProjectToTargetToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ProjectToTargetToolBuilder;
	static GetDefaultObject(): ProjectToTargetToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectToTargetToolBuilder;
	static C(Other: UObject | any): ProjectToTargetToolBuilder;
}

declare type ERemeshSmoothingType = 'Uniform' | 'Cotangent' | 'MeanValue' | 'ERemeshSmoothingType_MAX';
declare var ERemeshSmoothingType : { Uniform:'Uniform',Cotangent:'Cotangent',MeanValue:'MeanValue',ERemeshSmoothingType_MAX:'ERemeshSmoothingType_MAX', };
declare type ERemeshType = 'Standard' | 'FullPass' | 'NormalFlow' | 'ERemeshType_MAX';
declare var ERemeshType : { Standard:'Standard',FullPass:'FullPass',NormalFlow:'NormalFlow',ERemeshType_MAX:'ERemeshType_MAX', };
declare class RemeshMeshToolProperties extends RemeshProperties { 
	TargetTriangleCount: number;
	SmoothingType: ERemeshSmoothingType;
	bDiscardAttributes: boolean;
	bShowGroupColors: boolean;
	RemeshType: ERemeshType;
	RemeshIterations: number;
	MaxRemeshIterations: number;
	ExtraProjectionIterations: number;
	bUseTargetEdgeLength: boolean;
	TargetEdgeLength: number;
	bReproject: boolean;
	bReprojectConstraints: boolean;
	BoundaryCornerAngleThreshold: number;
	static Load(ResourceName: string): RemeshMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): RemeshMeshToolProperties;
	static GetDefaultObject(): RemeshMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshMeshToolProperties;
	static C(Other: UObject | any): RemeshMeshToolProperties;
}

declare class ProjectToTargetToolProperties extends RemeshMeshToolProperties { 
	bWorldSpace: boolean;
	bParallel: boolean;
	FaceProjectionPassesPerRemeshIteration: number;
	SurfaceProjectionSpeed: number;
	NormalAlignmentSpeed: number;
	bSmoothInFillAreas: boolean;
	FillAreaDistanceMultiplier: number;
	FillAreaSmoothMultiplier: number;
	static Load(ResourceName: string): ProjectToTargetToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProjectToTargetToolProperties;
	static GetDefaultObject(): ProjectToTargetToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectToTargetToolProperties;
	static C(Other: UObject | any): ProjectToTargetToolProperties;
}

declare class RemeshMeshTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: RemeshMeshToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): RemeshMeshTool;
	static Find(Outer: UObject, ResourceName: string): RemeshMeshTool;
	static GetDefaultObject(): RemeshMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshMeshTool;
	static C(Other: UObject | any): RemeshMeshTool;
}

declare class ProjectToTargetTool extends RemeshMeshTool { 
	static Load(ResourceName: string): ProjectToTargetTool;
	static Find(Outer: UObject, ResourceName: string): ProjectToTargetTool;
	static GetDefaultObject(): ProjectToTargetTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectToTargetTool;
	static C(Other: UObject | any): ProjectToTargetTool;
}

declare class MeshAnalysisProperties extends InteractiveToolPropertySet { 
	SurfaceArea: string;
	Volume: string;
	static Load(ResourceName: string): MeshAnalysisProperties;
	static Find(Outer: UObject, ResourceName: string): MeshAnalysisProperties;
	static GetDefaultObject(): MeshAnalysisProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAnalysisProperties;
	static C(Other: UObject | any): MeshAnalysisProperties;
}

declare class RemeshMeshToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RemeshMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RemeshMeshToolBuilder;
	static GetDefaultObject(): RemeshMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshMeshToolBuilder;
	static C(Other: UObject | any): RemeshMeshToolBuilder;
}

declare class RemoveOccludedTrianglesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RemoveOccludedTrianglesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesToolBuilder;
	static GetDefaultObject(): RemoveOccludedTrianglesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesToolBuilder;
	static C(Other: UObject | any): RemoveOccludedTrianglesToolBuilder;
}

declare type EOcclusionCalculationUIMode = 'GeneralizedWindingNumber' | 'RaycastOcclusionSamples' | 'EOcclusionCalculationUIMode_MAX';
declare var EOcclusionCalculationUIMode : { GeneralizedWindingNumber:'GeneralizedWindingNumber',RaycastOcclusionSamples:'RaycastOcclusionSamples',EOcclusionCalculationUIMode_MAX:'EOcclusionCalculationUIMode_MAX', };
declare type EOcclusionTriangleSamplingUIMode = 'Vertices' | 'VerticesAndCentroids' | 'EOcclusionTriangleSamplingUIMode_MAX';
declare var EOcclusionTriangleSamplingUIMode : { Vertices:'Vertices',VerticesAndCentroids:'VerticesAndCentroids',EOcclusionTriangleSamplingUIMode_MAX:'EOcclusionTriangleSamplingUIMode_MAX', };
declare type EOccludedAction = 'Remove' | 'SetNewGroup' | 'EOccludedAction_MAX';
declare var EOccludedAction : { Remove:'Remove',SetNewGroup:'SetNewGroup',EOccludedAction_MAX:'EOccludedAction_MAX', };
declare class RemoveOccludedTrianglesToolProperties extends InteractiveToolPropertySet { 
	OcclusionTestMethod: EOcclusionCalculationUIMode;
	TriangleSampling: EOcclusionTriangleSamplingUIMode;
	WindingIsoValue: number;
	AddRandomRays: number;
	AddTriangleSamples: number;
	bOnlySelfOcclude: boolean;
	ShrinkRemoval: number;
	MinAreaIsland: number;
	MinTriCountIsland: number;
	Action: EOccludedAction;
	static Load(ResourceName: string): RemoveOccludedTrianglesToolProperties;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesToolProperties;
	static GetDefaultObject(): RemoveOccludedTrianglesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesToolProperties;
	static C(Other: UObject | any): RemoveOccludedTrianglesToolProperties;
}

declare class RemoveOccludedTrianglesAdvancedProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): RemoveOccludedTrianglesAdvancedProperties;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesAdvancedProperties;
	static GetDefaultObject(): RemoveOccludedTrianglesAdvancedProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesAdvancedProperties;
	static C(Other: UObject | any): RemoveOccludedTrianglesAdvancedProperties;
}

declare class RemoveOccludedTrianglesTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: RemoveOccludedTrianglesToolProperties;
	PolygroupLayersProperties: PolygroupLayersProperties;
	AdvancedProperties: RemoveOccludedTrianglesAdvancedProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	PreviewCopies: PreviewMesh[];
	static Load(ResourceName: string): RemoveOccludedTrianglesTool;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesTool;
	static GetDefaultObject(): RemoveOccludedTrianglesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesTool;
	static C(Other: UObject | any): RemoveOccludedTrianglesTool;
}

declare class RemoveOccludedTrianglesOperatorFactory extends UObject { 
	Tool: RemoveOccludedTrianglesTool;
	static Load(ResourceName: string): RemoveOccludedTrianglesOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesOperatorFactory;
	static GetDefaultObject(): RemoveOccludedTrianglesOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesOperatorFactory;
	static C(Other: UObject | any): RemoveOccludedTrianglesOperatorFactory;
}

declare class RevolveBoundaryToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RevolveBoundaryToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryToolBuilder;
	static GetDefaultObject(): RevolveBoundaryToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryToolBuilder;
	static C(Other: UObject | any): RevolveBoundaryToolBuilder;
}

declare class RevolveBoundaryToolProperties extends RevolveProperties { 
	CapFillMode: ERevolvePropertiesCapFillMode;
	bDisplayInputMesh: boolean;
	AxisOrigin: Vector;
	AxisOrientation: Vector2D;
	static Load(ResourceName: string): RevolveBoundaryToolProperties;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryToolProperties;
	static GetDefaultObject(): RevolveBoundaryToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryToolProperties;
	static C(Other: UObject | any): RevolveBoundaryToolProperties;
}

declare class RevolveBoundaryTool extends MeshBoundaryToolBase { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Settings: RevolveBoundaryToolProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PlaneMechanic: ConstructionPlaneMechanic;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): RevolveBoundaryTool;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryTool;
	static GetDefaultObject(): RevolveBoundaryTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryTool;
	static C(Other: UObject | any): RevolveBoundaryTool;
}

declare class RevolveBoundaryOperatorFactory extends UObject { 
	RevolveBoundaryTool: RevolveBoundaryTool;
	static Load(ResourceName: string): RevolveBoundaryOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryOperatorFactory;
	static GetDefaultObject(): RevolveBoundaryOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryOperatorFactory;
	static C(Other: UObject | any): RevolveBoundaryOperatorFactory;
}

declare class SeamSculptToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): SeamSculptToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SeamSculptToolBuilder;
	static GetDefaultObject(): SeamSculptToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SeamSculptToolBuilder;
	static C(Other: UObject | any): SeamSculptToolBuilder;
}

declare class SeamSculptToolProperties extends InteractiveToolPropertySet { 
	bShowWireframe: boolean;
	bHitBackFaces: boolean;
	static Load(ResourceName: string): SeamSculptToolProperties;
	static Find(Outer: UObject, ResourceName: string): SeamSculptToolProperties;
	static GetDefaultObject(): SeamSculptToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SeamSculptToolProperties;
	static C(Other: UObject | any): SeamSculptToolProperties;
}

declare class SeamSculptTool extends DynamicMeshBrushTool { 
	Settings: SeamSculptToolProperties;
	PreviewGeom: PreviewGeometry;
	static Load(ResourceName: string): SeamSculptTool;
	static Find(Outer: UObject, ResourceName: string): SeamSculptTool;
	static GetDefaultObject(): SeamSculptTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SeamSculptTool;
	static C(Other: UObject | any): SeamSculptTool;
}

declare class SelfUnionMeshesToolProperties extends InteractiveToolPropertySet { 
	bTrimFlaps: boolean;
	bTryFixHoles: boolean;
	bTryCollapseEdges: boolean;
	WindingThreshold: number;
	bShowNewBoundaryEdges: boolean;
	bOnlyUseFirstMeshMaterials: boolean;
	static Load(ResourceName: string): SelfUnionMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): SelfUnionMeshesToolProperties;
	static GetDefaultObject(): SelfUnionMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelfUnionMeshesToolProperties;
	static C(Other: UObject | any): SelfUnionMeshesToolProperties;
}

declare class SelfUnionMeshesTool extends BaseCreateFromSelectedTool { 
	Properties: SelfUnionMeshesToolProperties;
	DrawnLineSet: LineSetComponent;
	static Load(ResourceName: string): SelfUnionMeshesTool;
	static Find(Outer: UObject, ResourceName: string): SelfUnionMeshesTool;
	static GetDefaultObject(): SelfUnionMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelfUnionMeshesTool;
	static C(Other: UObject | any): SelfUnionMeshesTool;
}

declare class SelfUnionMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): SelfUnionMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SelfUnionMeshesToolBuilder;
	static GetDefaultObject(): SelfUnionMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelfUnionMeshesToolBuilder;
	static C(Other: UObject | any): SelfUnionMeshesToolBuilder;
}

declare class SkinWeightsBindingToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SkinWeightsBindingToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsBindingToolBuilder;
	static GetDefaultObject(): SkinWeightsBindingToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsBindingToolBuilder;
	static C(Other: UObject | any): SkinWeightsBindingToolBuilder;
}

declare type ESkinWeightsBindType = 'DirectDistance' | 'GeodesicVoxel' | 'ESkinWeightsBindType_MAX';
declare var ESkinWeightsBindType : { DirectDistance:'DirectDistance',GeodesicVoxel:'GeodesicVoxel',ESkinWeightsBindType_MAX:'ESkinWeightsBindType_MAX', };
declare class SkinWeightsBindingToolProperties extends InteractiveToolPropertySet { 
	CurrentBone: BoneReference;
	BindingType: ESkinWeightsBindType;
	Stiffness: number;
	MaxInfluences: number;
	VoxelResolution: number;
	static Load(ResourceName: string): SkinWeightsBindingToolProperties;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsBindingToolProperties;
	static GetDefaultObject(): SkinWeightsBindingToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsBindingToolProperties;
	static C(Other: UObject | any): SkinWeightsBindingToolProperties;
}

declare class SkinWeightsBindingTool extends MultiSelectionMeshEditingTool { 
	Properties: SkinWeightsBindingToolProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): SkinWeightsBindingTool;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsBindingTool;
	static GetDefaultObject(): SkinWeightsBindingTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsBindingTool;
	static C(Other: UObject | any): SkinWeightsBindingTool;
}

declare class SkinWeightsPaintToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): SkinWeightsPaintToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsPaintToolBuilder;
	static GetDefaultObject(): SkinWeightsPaintToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsPaintToolBuilder;
	static C(Other: UObject | any): SkinWeightsPaintToolBuilder;
}

declare class SkinWeightsPaintToolProperties extends InteractiveToolPropertySet { 
	CurrentBone: BoneReference;
	static Load(ResourceName: string): SkinWeightsPaintToolProperties;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsPaintToolProperties;
	static GetDefaultObject(): SkinWeightsPaintToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsPaintToolProperties;
	static C(Other: UObject | any): SkinWeightsPaintToolProperties;
}

declare class SkinWeightsPaintTool extends DynamicMeshBrushTool { 
	ToolProps: SkinWeightsPaintToolProperties;
	static Load(ResourceName: string): SkinWeightsPaintTool;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsPaintTool;
	static GetDefaultObject(): SkinWeightsPaintTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsPaintTool;
	static C(Other: UObject | any): SkinWeightsPaintTool;
}

declare type ESmoothMeshToolSmoothType = 'Iterative' | 'Implicit' | 'Diffusion' | 'ESmoothMeshToolSmoothType_MAX';
declare var ESmoothMeshToolSmoothType : { Iterative:'Iterative',Implicit:'Implicit',Diffusion:'Diffusion',ESmoothMeshToolSmoothType_MAX:'ESmoothMeshToolSmoothType_MAX', };
declare class SmoothMeshToolProperties extends InteractiveToolPropertySet { 
	SmoothingType: ESmoothMeshToolSmoothType;
	static Load(ResourceName: string): SmoothMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): SmoothMeshToolProperties;
	static GetDefaultObject(): SmoothMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothMeshToolProperties;
	static C(Other: UObject | any): SmoothMeshToolProperties;
}

declare class IterativeSmoothProperties extends InteractiveToolPropertySet { 
	SmoothingPerStep: number;
	Steps: number;
	bSmoothBoundary: boolean;
	static Load(ResourceName: string): IterativeSmoothProperties;
	static Find(Outer: UObject, ResourceName: string): IterativeSmoothProperties;
	static GetDefaultObject(): IterativeSmoothProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IterativeSmoothProperties;
	static C(Other: UObject | any): IterativeSmoothProperties;
}

declare class DiffusionSmoothProperties extends InteractiveToolPropertySet { 
	SmoothingPerStep: number;
	Steps: number;
	bPreserveUVs: boolean;
	static Load(ResourceName: string): DiffusionSmoothProperties;
	static Find(Outer: UObject, ResourceName: string): DiffusionSmoothProperties;
	static GetDefaultObject(): DiffusionSmoothProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DiffusionSmoothProperties;
	static C(Other: UObject | any): DiffusionSmoothProperties;
}

declare class ImplicitSmoothProperties extends InteractiveToolPropertySet { 
	SmoothSpeed: number;
	Smoothness: number;
	bPreserveUVs: boolean;
	VolumeCorrection: number;
	static Load(ResourceName: string): ImplicitSmoothProperties;
	static Find(Outer: UObject, ResourceName: string): ImplicitSmoothProperties;
	static GetDefaultObject(): ImplicitSmoothProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImplicitSmoothProperties;
	static C(Other: UObject | any): ImplicitSmoothProperties;
}

declare class SmoothWeightMapSetProperties extends WeightMapSetProperties { 
	MinSmoothMultiplier: number;
	static Load(ResourceName: string): SmoothWeightMapSetProperties;
	static Find(Outer: UObject, ResourceName: string): SmoothWeightMapSetProperties;
	static GetDefaultObject(): SmoothWeightMapSetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothWeightMapSetProperties;
	static C(Other: UObject | any): SmoothWeightMapSetProperties;
}

declare class SmoothMeshTool extends BaseMeshProcessingTool { 
	SmoothProperties: SmoothMeshToolProperties;
	IterativeProperties: IterativeSmoothProperties;
	DiffusionProperties: DiffusionSmoothProperties;
	ImplicitProperties: ImplicitSmoothProperties;
	WeightMapProperties: SmoothWeightMapSetProperties;
	static Load(ResourceName: string): SmoothMeshTool;
	static Find(Outer: UObject, ResourceName: string): SmoothMeshTool;
	static GetDefaultObject(): SmoothMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothMeshTool;
	static C(Other: UObject | any): SmoothMeshTool;
}

declare class SmoothMeshToolBuilder extends BaseMeshProcessingToolBuilder { 
	static Load(ResourceName: string): SmoothMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SmoothMeshToolBuilder;
	static GetDefaultObject(): SmoothMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothMeshToolBuilder;
	static C(Other: UObject | any): SmoothMeshToolBuilder;
}

declare class SplitMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SplitMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SplitMeshesToolBuilder;
	static GetDefaultObject(): SplitMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitMeshesToolBuilder;
	static C(Other: UObject | any): SplitMeshesToolBuilder;
}

declare class SplitMeshesToolProperties extends InteractiveToolPropertySet { 
	bTransferMaterials: boolean;
	static Load(ResourceName: string): SplitMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): SplitMeshesToolProperties;
	static GetDefaultObject(): SplitMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitMeshesToolProperties;
	static C(Other: UObject | any): SplitMeshesToolProperties;
}

declare class SplitMeshesTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: SplitMeshesToolProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	static Load(ResourceName: string): SplitMeshesTool;
	static Find(Outer: UObject, ResourceName: string): SplitMeshesTool;
	static GetDefaultObject(): SplitMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitMeshesTool;
	static C(Other: UObject | any): SplitMeshesTool;
}

declare class TransferMeshToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): TransferMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): TransferMeshToolBuilder;
	static GetDefaultObject(): TransferMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransferMeshToolBuilder;
	static C(Other: UObject | any): TransferMeshToolBuilder;
}

declare class TransferMeshToolProperties extends InteractiveToolPropertySet { 
	bTransferMaterials: boolean;
	SourceLOD: string;
	TargetLod: string;
	bIsStaticMeshSource: boolean;
	SourceLODNamesList: string[];
	TargetLODNamesList: string[];
	bIsStaticMeshTarget: boolean;
	static Load(ResourceName: string): TransferMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): TransferMeshToolProperties;
	static GetDefaultObject(): TransferMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransferMeshToolProperties;
	GetTargetLODNamesFunc(): string[];
	GetSourceLODNamesFunc(): string[];
	static C(Other: UObject | any): TransferMeshToolProperties;
}

declare class TransferMeshTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: TransferMeshToolProperties;
	static Load(ResourceName: string): TransferMeshTool;
	static Find(Outer: UObject, ResourceName: string): TransferMeshTool;
	static GetDefaultObject(): TransferMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransferMeshTool;
	static C(Other: UObject | any): TransferMeshTool;
}

declare class TransformMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): TransformMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): TransformMeshesToolBuilder;
	static GetDefaultObject(): TransformMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformMeshesToolBuilder;
	static C(Other: UObject | any): TransformMeshesToolBuilder;
}

declare type ETransformMeshesTransformMode = 'SharedGizmo' | 'SharedGizmoLocal' | 'PerObjectGizmo' | 'LastValue' | 'ETransformMeshesTransformMode_MAX';
declare var ETransformMeshesTransformMode : { SharedGizmo:'SharedGizmo',SharedGizmoLocal:'SharedGizmoLocal',PerObjectGizmo:'PerObjectGizmo',LastValue:'LastValue',ETransformMeshesTransformMode_MAX:'ETransformMeshesTransformMode_MAX', };
declare type ETransformMeshesSnapDragSource = 'ClickPoint' | 'Pivot' | 'LastValue' | 'ETransformMeshesSnapDragSource_MAX';
declare var ETransformMeshesSnapDragSource : { ClickPoint:'ClickPoint',Pivot:'Pivot',LastValue:'LastValue',ETransformMeshesSnapDragSource_MAX:'ETransformMeshesSnapDragSource_MAX', };
declare type ETransformMeshesSnapDragRotationMode = 'Ignore' | 'Align' | 'AlignFlipped' | 'LastValue' | 'ETransformMeshesSnapDragRotationMode_MAX';
declare var ETransformMeshesSnapDragRotationMode : { Ignore:'Ignore',Align:'Align',AlignFlipped:'AlignFlipped',LastValue:'LastValue',ETransformMeshesSnapDragRotationMode_MAX:'ETransformMeshesSnapDragRotationMode_MAX', };
declare class TransformMeshesToolProperties extends InteractiveToolPropertySet { 
	TransformMode: ETransformMeshesTransformMode;
	bApplyToInstances: boolean;
	bSetPivotMode: boolean;
	bEnableSnapDragging: boolean;
	SnapDragSource: ETransformMeshesSnapDragSource;
	RotationMode: ETransformMeshesSnapDragRotationMode;
	bHaveInstances: boolean;
	static Load(ResourceName: string): TransformMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): TransformMeshesToolProperties;
	static GetDefaultObject(): TransformMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformMeshesToolProperties;
	static C(Other: UObject | any): TransformMeshesToolProperties;
}

declare class TransformMeshesTarget { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	clone() : TransformMeshesTarget;
	static C(Other: UObject | any): TransformMeshesTarget;
}

declare class TransformMeshesTool extends MultiSelectionMeshEditingTool { 
	TransformProps: TransformMeshesToolProperties;
	ActiveGizmos: TransformMeshesTarget[];
	DragAlignmentMechanic: DragAlignmentMechanic;
	static Load(ResourceName: string): TransformMeshesTool;
	static Find(Outer: UObject, ResourceName: string): TransformMeshesTool;
	static GetDefaultObject(): TransformMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformMeshesTool;
	static C(Other: UObject | any): TransformMeshesTool;
}

declare class VolumeToMeshToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): VolumeToMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VolumeToMeshToolBuilder;
	static GetDefaultObject(): VolumeToMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeToMeshToolBuilder;
	static C(Other: UObject | any): VolumeToMeshToolBuilder;
}

declare class VolumeToMeshToolProperties extends InteractiveToolPropertySet { 
	bWeldEdges: boolean;
	bAutoRepair: boolean;
	bOptimizeMesh: boolean;
	bShowWireframe: boolean;
	static Load(ResourceName: string): VolumeToMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): VolumeToMeshToolProperties;
	static GetDefaultObject(): VolumeToMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeToMeshToolProperties;
	static C(Other: UObject | any): VolumeToMeshToolProperties;
}

declare class VolumeToMeshTool extends InteractiveTool { 
	Settings: VolumeToMeshToolProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	PreviewMesh: PreviewMesh;
	TargetVolume: Volume;
	VolumeEdgesSet: LineSetComponent;
	static Load(ResourceName: string): VolumeToMeshTool;
	static Find(Outer: UObject, ResourceName: string): VolumeToMeshTool;
	static GetDefaultObject(): VolumeToMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeToMeshTool;
	static C(Other: UObject | any): VolumeToMeshTool;
}

declare type EVoxelBlendOperation = 'Union' | 'Subtract' | 'EVoxelBlendOperation_MAX';
declare var EVoxelBlendOperation : { Union:'Union',Subtract:'Subtract',EVoxelBlendOperation_MAX:'EVoxelBlendOperation_MAX', };
declare class VoxelBlendMeshesToolProperties extends InteractiveToolPropertySet { 
	BlendPower: number;
	BlendFalloff: number;
	Operation: EVoxelBlendOperation;
	bVoxWrap: boolean;
	bRemoveInternalsAfterVoxWrap: boolean;
	ThickenShells: number;
	static Load(ResourceName: string): VoxelBlendMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelBlendMeshesToolProperties;
	static GetDefaultObject(): VoxelBlendMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelBlendMeshesToolProperties;
	static C(Other: UObject | any): VoxelBlendMeshesToolProperties;
}

declare class VoxelBlendMeshesTool extends BaseVoxelTool { 
	BlendProperties: VoxelBlendMeshesToolProperties;
	static Load(ResourceName: string): VoxelBlendMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelBlendMeshesTool;
	static GetDefaultObject(): VoxelBlendMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelBlendMeshesTool;
	static C(Other: UObject | any): VoxelBlendMeshesTool;
}

declare class VoxelBlendMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): VoxelBlendMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelBlendMeshesToolBuilder;
	static GetDefaultObject(): VoxelBlendMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelBlendMeshesToolBuilder;
	static C(Other: UObject | any): VoxelBlendMeshesToolBuilder;
}

declare type EMorphologyOperation = 'Dilate' | 'Contract' | 'Close' | 'Open' | 'EMorphologyOperation_MAX';
declare var EMorphologyOperation : { Dilate:'Dilate',Contract:'Contract',Close:'Close',Open:'Open',EMorphologyOperation_MAX:'EMorphologyOperation_MAX', };
declare class VoxelMorphologyMeshesToolProperties extends InteractiveToolPropertySet { 
	Operation: EMorphologyOperation;
	Distance: number;
	bVoxWrap: boolean;
	bRemoveInternalsAfterVoxWrap: boolean;
	ThickenShells: number;
	static Load(ResourceName: string): VoxelMorphologyMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelMorphologyMeshesToolProperties;
	static GetDefaultObject(): VoxelMorphologyMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelMorphologyMeshesToolProperties;
	static C(Other: UObject | any): VoxelMorphologyMeshesToolProperties;
}

declare class VoxelMorphologyMeshesTool extends BaseVoxelTool { 
	MorphologyProperties: VoxelMorphologyMeshesToolProperties;
	static Load(ResourceName: string): VoxelMorphologyMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelMorphologyMeshesTool;
	static GetDefaultObject(): VoxelMorphologyMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelMorphologyMeshesTool;
	static C(Other: UObject | any): VoxelMorphologyMeshesTool;
}

declare class VoxelMorphologyMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): VoxelMorphologyMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelMorphologyMeshesToolBuilder;
	static GetDefaultObject(): VoxelMorphologyMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelMorphologyMeshesToolBuilder;
	static C(Other: UObject | any): VoxelMorphologyMeshesToolBuilder;
}

declare class VoxelSolidifyMeshesToolProperties extends InteractiveToolPropertySet { 
	WindingThreshold: number;
	ExtendBounds: number;
	SurfaceSearchSteps: number;
	bSolidAtBoundaries: boolean;
	bApplyThickenShells: boolean;
	ThickenShells: number;
	static Load(ResourceName: string): VoxelSolidifyMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelSolidifyMeshesToolProperties;
	static GetDefaultObject(): VoxelSolidifyMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelSolidifyMeshesToolProperties;
	static C(Other: UObject | any): VoxelSolidifyMeshesToolProperties;
}

declare class VoxelSolidifyMeshesTool extends BaseVoxelTool { 
	SolidifyProperties: VoxelSolidifyMeshesToolProperties;
	static Load(ResourceName: string): VoxelSolidifyMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelSolidifyMeshesTool;
	static GetDefaultObject(): VoxelSolidifyMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelSolidifyMeshesTool;
	static C(Other: UObject | any): VoxelSolidifyMeshesTool;
}

declare class VoxelSolidifyMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): VoxelSolidifyMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelSolidifyMeshesToolBuilder;
	static GetDefaultObject(): VoxelSolidifyMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelSolidifyMeshesToolBuilder;
	static C(Other: UObject | any): VoxelSolidifyMeshesToolBuilder;
}

declare class WeldMeshEdgesToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): WeldMeshEdgesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesToolBuilder;
	static GetDefaultObject(): WeldMeshEdgesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesToolBuilder;
	static C(Other: UObject | any): WeldMeshEdgesToolBuilder;
}

declare class WeldMeshEdgesToolProperties extends InteractiveToolPropertySet { 
	Tolerance: number;
	bOnlyUnique: boolean;
	bResolveTJunctions: boolean;
	InitialEdges: number;
	RemainingEdges: number;
	static Load(ResourceName: string): WeldMeshEdgesToolProperties;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesToolProperties;
	static GetDefaultObject(): WeldMeshEdgesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesToolProperties;
	static C(Other: UObject | any): WeldMeshEdgesToolProperties;
}

declare class WeldMeshEdgesTool extends SingleSelectionMeshEditingTool { 
	Settings: WeldMeshEdgesToolProperties;
	PreviewCompute: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	OperatorFactory: WeldMeshEdgesOperatorFactory;
	static Load(ResourceName: string): WeldMeshEdgesTool;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesTool;
	static GetDefaultObject(): WeldMeshEdgesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesTool;
	static C(Other: UObject | any): WeldMeshEdgesTool;
}

declare class WeldMeshEdgesOperatorFactory extends UObject { 
	WeldMeshEdgesTool: WeldMeshEdgesTool;
	static Load(ResourceName: string): WeldMeshEdgesOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesOperatorFactory;
	static GetDefaultObject(): WeldMeshEdgesOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesOperatorFactory;
	static C(Other: UObject | any): WeldMeshEdgesOperatorFactory;
}

declare type EParameterizeMeshUVMethod = 'PatchBuilder' | 'UVAtlas' | 'XAtlas' | 'EParameterizeMeshUVMethod_MAX';
declare var EParameterizeMeshUVMethod : { PatchBuilder:'PatchBuilder',UVAtlas:'UVAtlas',XAtlas:'XAtlas',EParameterizeMeshUVMethod_MAX:'EParameterizeMeshUVMethod_MAX', };
declare class ParameterizeMeshToolProperties extends InteractiveToolPropertySet { 
	Method: EParameterizeMeshUVMethod;
	static Load(ResourceName: string): ParameterizeMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolProperties;
	static GetDefaultObject(): ParameterizeMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolProperties;
	static C(Other: UObject | any): ParameterizeMeshToolProperties;
}

declare class ParameterizeMeshToolUVAtlasProperties extends InteractiveToolPropertySet { 
	IslandStretch: number;
	NumIslands: number;
	TextureResolution: number;
	static Load(ResourceName: string): ParameterizeMeshToolUVAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolUVAtlasProperties;
	static GetDefaultObject(): ParameterizeMeshToolUVAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolUVAtlasProperties;
	static C(Other: UObject | any): ParameterizeMeshToolUVAtlasProperties;
}

declare class ParameterizeMeshToolXAtlasProperties extends InteractiveToolPropertySet { 
	MaxIterations: number;
	static Load(ResourceName: string): ParameterizeMeshToolXAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolXAtlasProperties;
	static GetDefaultObject(): ParameterizeMeshToolXAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolXAtlasProperties;
	static C(Other: UObject | any): ParameterizeMeshToolXAtlasProperties;
}

declare class ParameterizeMeshToolPatchBuilderProperties extends InteractiveToolPropertySet { 
	InitialPatches: number;
	CurvatureAlignment: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	bRepack: boolean;
	TextureResolution: number;
	static Load(ResourceName: string): ParameterizeMeshToolPatchBuilderProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolPatchBuilderProperties;
	static GetDefaultObject(): ParameterizeMeshToolPatchBuilderProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolPatchBuilderProperties;
	static C(Other: UObject | any): ParameterizeMeshToolPatchBuilderProperties;
}

declare class ParameterizeMeshOperatorFactory extends UObject { 
	Settings: ParameterizeMeshToolProperties;
	UVAtlasProperties: ParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: ParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: ParameterizeMeshToolPatchBuilderProperties;
	static Load(ResourceName: string): ParameterizeMeshOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshOperatorFactory;
	static GetDefaultObject(): ParameterizeMeshOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshOperatorFactory;
	static C(Other: UObject | any): ParameterizeMeshOperatorFactory;
}

declare class GenerateStaticMeshLODProcess extends UObject { 
	SourceStaticMesh: StaticMesh;
	AllDerivedTextures: Set<Texture2D>;
	DerivedNormalMapTex: Texture2D;
	DerivedMultiTextureBakeResult: Texture2D;
	static Load(ResourceName: string): GenerateStaticMeshLODProcess;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODProcess;
	static GetDefaultObject(): GenerateStaticMeshLODProcess;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODProcess;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess;
}

declare class GenerateStaticMeshLODAssetToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolBuilder;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolBuilder;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolBuilder;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolBuilder;
}

declare type EGenerateLODAssetOutputMode = 'CreateNewAsset' | 'UpdateExistingAsset' | 'EGenerateLODAssetOutputMode_MAX';
declare var EGenerateLODAssetOutputMode : { CreateNewAsset:'CreateNewAsset',UpdateExistingAsset:'UpdateExistingAsset',EGenerateLODAssetOutputMode_MAX:'EGenerateLODAssetOutputMode_MAX', };
declare class GenerateStaticMeshLODAssetToolOutputProperties extends InteractiveToolPropertySet { 
	OutputMode: EGenerateLODAssetOutputMode;
	NewAssetName: string;
	bSaveInputAsHiResSource: boolean;
	GeneratedSuffix: string;
	bShowOutputMode: boolean;
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolOutputProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolOutputProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolOutputProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolOutputProperties;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolOutputProperties;
}

declare class GenerateStaticMeshLODProcess_PreprocessSettings { 
	FilterGroupLayer: string;
	ThickenWeightMapName: string;
	ThickenAmount: number;
	clone() : GenerateStaticMeshLODProcess_PreprocessSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_PreprocessSettings;
}

declare type EGenerateStaticMeshLODProcess_MeshGeneratorModes = 'Solidify' | 'SolidifyAndClose' | 'CleanAndSimplify' | 'ConvexHull' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_MeshGeneratorModes : { Solidify:'Solidify',SolidifyAndClose:'SolidifyAndClose',CleanAndSimplify:'CleanAndSimplify',ConvexHull:'ConvexHull',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcessSettings { 
	MeshGenerator: EGenerateStaticMeshLODProcess_MeshGeneratorModes;
	SolidifyVoxelResolution: number;
	WindingThreshold: number;
	ClosureDistance: number;
	bPrefilterVertices: boolean;
	PrefilterGridResolution: number;
	clone() : GenerateStaticMeshLODProcessSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcessSettings;
}

declare type EGenerateStaticMeshLODProcess_SimplifyMethod = 'TriangleCount' | 'VertexCount' | 'TrianglePercentage' | 'GeometricTolerance' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_SimplifyMethod : { TriangleCount:'TriangleCount',VertexCount:'VertexCount',TrianglePercentage:'TrianglePercentage',GeometricTolerance:'GeometricTolerance',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcess_SimplifySettings { 
	Method: EGenerateStaticMeshLODProcess_SimplifyMethod;
	TargetCount: number;
	TargetPercentage: number;
	Tolerance: number;
	clone() : GenerateStaticMeshLODProcess_SimplifySettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_SimplifySettings;
}

declare type EGenerateStaticMeshLODProcess_NormalsMethod = 'FromAngleThreshold' | 'PerVertex' | 'PerTriangle' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_NormalsMethod : { FromAngleThreshold:'FromAngleThreshold',PerVertex:'PerVertex',PerTriangle:'PerTriangle',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcess_NormalsSettings { 
	Method: EGenerateStaticMeshLODProcess_NormalsMethod;
	Angle: number;
	clone() : GenerateStaticMeshLODProcess_NormalsSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_NormalsSettings;
}

declare type EGenerateStaticMeshLODBakeResolution = 'Resolution16' | 'Resolution32' | 'Resolution64' | 'Resolution128' | 'Resolution256' | 'Resolution512' | 'Resolution1024' | 'Resolution2048' | 'Resolution4096' | 'Resolution8192' | 'EGenerateStaticMeshLODBakeResolution_MAX';
declare var EGenerateStaticMeshLODBakeResolution : { Resolution16:'Resolution16',Resolution32:'Resolution32',Resolution64:'Resolution64',Resolution128:'Resolution128',Resolution256:'Resolution256',Resolution512:'Resolution512',Resolution1024:'Resolution1024',Resolution2048:'Resolution2048',Resolution4096:'Resolution4096',Resolution8192:'Resolution8192',EGenerateStaticMeshLODBakeResolution_MAX:'EGenerateStaticMeshLODBakeResolution_MAX', };
declare class GenerateStaticMeshLODProcess_TextureSettings { 
	BakeResolution: EGenerateStaticMeshLODBakeResolution;
	BakeThickness: number;
	bCombineTextures: boolean;
	clone() : GenerateStaticMeshLODProcess_TextureSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_TextureSettings;
}

declare type EGenerateStaticMeshLODProcess_AutoUVMethod = 'PatchBuilder' | 'UVAtlas' | 'XAtlas' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_AutoUVMethod : { PatchBuilder:'PatchBuilder',UVAtlas:'UVAtlas',XAtlas:'XAtlas',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcess_UVSettings_PatchBuilder { 
	CurvatureAlignment: number;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	clone() : GenerateStaticMeshLODProcess_UVSettings_PatchBuilder;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_UVSettings_PatchBuilder;
}

declare class GenerateStaticMeshLODProcess_UVSettings { 
	UVMethod: EGenerateStaticMeshLODProcess_AutoUVMethod;
	NumUVAtlasCharts: number;
	NumInitialPatches: number;
	MergingThreshold: number;
	MaxAngleDeviation: number;
	PatchBuilder: GenerateStaticMeshLODProcess_UVSettings_PatchBuilder;
	clone() : GenerateStaticMeshLODProcess_UVSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_UVSettings;
}

declare type EGenerateStaticMeshLODSimpleCollisionGeometryType = 'AlignedBoxes' | 'OrientedBoxes' | 'MinimalSpheres' | 'Capsules' | 'ConvexHulls' | 'SweptHulls' | 'MinVolume' | 'None' | 'EGenerateStaticMeshLODSimpleCollisionGeometryType_MAX';
declare var EGenerateStaticMeshLODSimpleCollisionGeometryType : { AlignedBoxes:'AlignedBoxes',OrientedBoxes:'OrientedBoxes',MinimalSpheres:'MinimalSpheres',Capsules:'Capsules',ConvexHulls:'ConvexHulls',SweptHulls:'SweptHulls',MinVolume:'MinVolume',None:'None',EGenerateStaticMeshLODSimpleCollisionGeometryType_MAX:'EGenerateStaticMeshLODSimpleCollisionGeometryType_MAX', };
declare type EGenerateStaticMeshLODProjectedHullAxisMode = 'X' | 'Y' | 'Z' | 'SmallestBoxDimension' | 'SmallestVolume' | 'EGenerateStaticMeshLODProjectedHullAxisMode_MAX';
declare var EGenerateStaticMeshLODProjectedHullAxisMode : { X:'X',Y:'Y',Z:'Z',SmallestBoxDimension:'SmallestBoxDimension',SmallestVolume:'SmallestVolume',EGenerateStaticMeshLODProjectedHullAxisMode_MAX:'EGenerateStaticMeshLODProjectedHullAxisMode_MAX', };
declare class GenerateStaticMeshLODProcess_CollisionSettings { 
	CollisionGroupLayerName: string;
	CollisionType: EGenerateStaticMeshLODSimpleCollisionGeometryType;
	ConvexTriangleCount: number;
	bPrefilterVertices: boolean;
	PrefilterGridResolution: number;
	bSimplifyPolygons: boolean;
	HullTolerance: number;
	SweepAxis: EGenerateStaticMeshLODProjectedHullAxisMode;
	clone() : GenerateStaticMeshLODProcess_CollisionSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_CollisionSettings;
}

declare class StaticMeshLODGenerationSettings extends UObject { 
	Preprocessing: GenerateStaticMeshLODProcess_PreprocessSettings;
	MeshGeneration: GenerateStaticMeshLODProcessSettings;
	Simplification: GenerateStaticMeshLODProcess_SimplifySettings;
	Normals: GenerateStaticMeshLODProcess_NormalsSettings;
	TextureBaking: GenerateStaticMeshLODProcess_TextureSettings;
	UVGeneration: GenerateStaticMeshLODProcess_UVSettings;
	SimpleCollision: GenerateStaticMeshLODProcess_CollisionSettings;
	static Load(ResourceName: string): StaticMeshLODGenerationSettings;
	static Find(Outer: UObject, ResourceName: string): StaticMeshLODGenerationSettings;
	static GetDefaultObject(): StaticMeshLODGenerationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshLODGenerationSettings;
	static C(Other: UObject | any): StaticMeshLODGenerationSettings;
}

declare class GenerateStaticMeshLODAssetToolPresetProperties extends InteractiveToolPropertySet { 
	Preset: StaticMeshLODGenerationSettings;
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolPresetProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolPresetProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolPresetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolPresetProperties;
	WriteToPreset(): void;
	ReadFromPreset(): void;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolPresetProperties;
}

declare class GenerateStaticMeshLODAssetToolProperties extends InteractiveToolPropertySet { 
	Preprocessing: GenerateStaticMeshLODProcess_PreprocessSettings;
	MeshGeneration: GenerateStaticMeshLODProcessSettings;
	Simplification: GenerateStaticMeshLODProcess_SimplifySettings;
	Normals: GenerateStaticMeshLODProcess_NormalsSettings;
	TextureBaking: GenerateStaticMeshLODProcess_TextureSettings;
	UVGeneration: GenerateStaticMeshLODProcess_UVSettings;
	SimpleCollision: GenerateStaticMeshLODProcess_CollisionSettings;
	CollisionGroupLayerName: string;
	GroupLayersList: string[];
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolProperties;
	GetGroupLayersFunc(): string[];
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolProperties;
}

declare type EGenerateStaticMeshLOD_BakeConstraint = 'NoConstraint' | 'DoNotBake' | 'EGenerateStaticMeshLOD_MAX';
declare var EGenerateStaticMeshLOD_BakeConstraint : { NoConstraint:'NoConstraint',DoNotBake:'DoNotBake',EGenerateStaticMeshLOD_MAX:'EGenerateStaticMeshLOD_MAX', };
declare class GenerateStaticMeshLOD_MaterialConfig { 
	Material: MaterialInterface;
	Constraint: EGenerateStaticMeshLOD_BakeConstraint;
	clone() : GenerateStaticMeshLOD_MaterialConfig;
	static C(Other: UObject | any): GenerateStaticMeshLOD_MaterialConfig;
}

declare class GenerateStaticMeshLOD_TextureConfig { 
	Texture: Texture2D;
	Constraint: EGenerateStaticMeshLOD_BakeConstraint;
	clone() : GenerateStaticMeshLOD_TextureConfig;
	static C(Other: UObject | any): GenerateStaticMeshLOD_TextureConfig;
}

declare class GenerateStaticMeshLODAssetToolTextureProperties extends InteractiveToolPropertySet { 
	Materials: GenerateStaticMeshLOD_MaterialConfig[];
	Textures: GenerateStaticMeshLOD_TextureConfig[];
	PreviewTextures: Texture2D[];
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolTextureProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolTextureProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolTextureProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolTextureProperties;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolTextureProperties;
}

declare class GenerateStaticMeshLODAssetTool extends MultiSelectionMeshEditingTool { 
	OutputProperties: GenerateStaticMeshLODAssetToolOutputProperties;
	BasicProperties: GenerateStaticMeshLODAssetToolProperties;
	PresetProperties: GenerateStaticMeshLODAssetToolPresetProperties;
	TextureProperties: GenerateStaticMeshLODAssetToolTextureProperties;
	CollisionVizSettings: CollisionGeometryVisualizationProperties;
	PreviewWithBackgroundCompute: MeshOpPreviewWithBackgroundCompute;
	PreviewTextures: Texture2D[];
	PreviewMaterials: MaterialInterface[];
	ObjectData: PhysicsObjectToolPropertySet;
	LineMaterial: MaterialInterface;
	CollisionPreview: PreviewGeometry;
	GenerateProcess: GenerateStaticMeshLODProcess;
	static Load(ResourceName: string): GenerateStaticMeshLODAssetTool;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetTool;
	static GetDefaultObject(): GenerateStaticMeshLODAssetTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetTool;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetTool;
}

declare class StaticMeshLODGenerationSettingsFactory extends Factory { 
	static Load(ResourceName: string): StaticMeshLODGenerationSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): StaticMeshLODGenerationSettingsFactory;
	static GetDefaultObject(): StaticMeshLODGenerationSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshLODGenerationSettingsFactory;
	static C(Other: UObject | any): StaticMeshLODGenerationSettingsFactory;
}

declare class LODManagerToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): LODManagerToolBuilder;
	static Find(Outer: UObject, ResourceName: string): LODManagerToolBuilder;
	static GetDefaultObject(): LODManagerToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerToolBuilder;
	static C(Other: UObject | any): LODManagerToolBuilder;
}

declare class LODManagerLODInfo { 
	VertexCount: number;
	TriangleCount: number;
	clone() : LODManagerLODInfo;
	static C(Other: UObject | any): LODManagerLODInfo;
}

declare class LODManagerLODProperties extends InteractiveToolPropertySet { 
	SourceLODs: LODManagerLODInfo[];
	HiResSource: LODManagerLODInfo[];
	RenderLODs: LODManagerLODInfo[];
	bNaniteEnabled: boolean;
	PercentTriangles: number;
	Materials: StaticMaterial[];
	static Load(ResourceName: string): LODManagerLODProperties;
	static Find(Outer: UObject, ResourceName: string): LODManagerLODProperties;
	static GetDefaultObject(): LODManagerLODProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerLODProperties;
	static C(Other: UObject | any): LODManagerLODProperties;
}

declare class LODManagerPreviewLODProperties extends InteractiveToolPropertySet { 
	VisibleLOD: string;
	LODNamesList: string[];
	bShowSeams: boolean;
	static Load(ResourceName: string): LODManagerPreviewLODProperties;
	static Find(Outer: UObject, ResourceName: string): LODManagerPreviewLODProperties;
	static GetDefaultObject(): LODManagerPreviewLODProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerPreviewLODProperties;
	GetLODNamesFunc(): string[];
	static C(Other: UObject | any): LODManagerPreviewLODProperties;
}

declare class LODManagerActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): LODManagerActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): LODManagerActionPropertySet;
	static GetDefaultObject(): LODManagerActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerActionPropertySet;
	static C(Other: UObject | any): LODManagerActionPropertySet;
}

declare class LODManagerHiResSourceModelActions extends LODManagerActionPropertySet { 
	static Load(ResourceName: string): LODManagerHiResSourceModelActions;
	static Find(Outer: UObject, ResourceName: string): LODManagerHiResSourceModelActions;
	static GetDefaultObject(): LODManagerHiResSourceModelActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerHiResSourceModelActions;
	MoveToLOD0(): void;
	Delete(): void;
	static C(Other: UObject | any): LODManagerHiResSourceModelActions;
}

declare class LODManagerMaterialActions extends LODManagerActionPropertySet { 
	static Load(ResourceName: string): LODManagerMaterialActions;
	static Find(Outer: UObject, ResourceName: string): LODManagerMaterialActions;
	static GetDefaultObject(): LODManagerMaterialActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerMaterialActions;
	CleanMaterials(): void;
	static C(Other: UObject | any): LODManagerMaterialActions;
}

declare class LODManagerTool extends MultiSelectionMeshEditingTool { 
	LODInfoProperties: LODManagerLODProperties;
	LODPreviewProperties: LODManagerPreviewLODProperties;
	HiResSourceModelActions: LODManagerHiResSourceModelActions;
	MaterialActions: LODManagerMaterialActions;
	LODPreview: PreviewMesh;
	LODPreviewLines: PreviewGeometry;
	static Load(ResourceName: string): LODManagerTool;
	static Find(Outer: UObject, ResourceName: string): LODManagerTool;
	static GetDefaultObject(): LODManagerTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerTool;
	RemoveUnreferencedMaterials(): void;
	MoveHiResToLOD0(): void;
	DeleteHiResSourceModel(): void;
	static C(Other: UObject | any): LODManagerTool;
}

declare class ActorFactoryGeometryCollection extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCollection;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCollection;
	static GetDefaultObject(): ActorFactoryGeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCollection;
	static C(Other: UObject | any): ActorFactoryGeometryCollection;
}

declare class GeometryCollectionCacheFactory extends Factory { 
	TargetCollection: GeometryCollection;
	static Load(ResourceName: string): GeometryCollectionCacheFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionCacheFactory;
	static GetDefaultObject(): GeometryCollectionCacheFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionCacheFactory;
	static C(Other: UObject | any): GeometryCollectionCacheFactory;
}

declare class GeometryCollectionFactory extends Factory { 
	static Load(ResourceName: string): GeometryCollectionFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionFactory;
	static GetDefaultObject(): GeometryCollectionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionFactory;
	static C(Other: UObject | any): GeometryCollectionFactory;
}

declare class GeometryCollectionThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCollectionThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionThumbnailRenderer;
	static GetDefaultObject(): GeometryCollectionThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionThumbnailRenderer;
	static C(Other: UObject | any): GeometryCollectionThumbnailRenderer;
}

declare class MovieSceneGeometryCollectionParams { 
	GeometryCollectionCache: SoftObjectPath;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	clone() : MovieSceneGeometryCollectionParams;
	static C(Other: UObject | any): MovieSceneGeometryCollectionParams;
}

declare class MovieSceneGeometryCollectionSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCollectionParams;
	static Load(ResourceName: string): MovieSceneGeometryCollectionSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionSection;
	static GetDefaultObject(): MovieSceneGeometryCollectionSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionSection;
	static C(Other: UObject | any): MovieSceneGeometryCollectionSection;
}

declare class MovieSceneGeometryCollectionTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCollectionTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionTrack;
	static GetDefaultObject(): MovieSceneGeometryCollectionTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionTrack;
	static C(Other: UObject | any): MovieSceneGeometryCollectionTrack;
}

declare class EditorModelingObjectsCreationAPI extends ModelingObjectsCreationAPI { 
	static Load(ResourceName: string): EditorModelingObjectsCreationAPI;
	static Find(Outer: UObject, ResourceName: string): EditorModelingObjectsCreationAPI;
	static GetDefaultObject(): EditorModelingObjectsCreationAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorModelingObjectsCreationAPI;
	static C(Other: UObject | any): EditorModelingObjectsCreationAPI;
}

declare class DynamicMeshComponentToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): DynamicMeshComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshComponentToolTarget;
	static GetDefaultObject(): DynamicMeshComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshComponentToolTarget;
	static C(Other: UObject | any): DynamicMeshComponentToolTarget;
}

declare class DynamicMeshComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): DynamicMeshComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshComponentToolTargetFactory;
	static GetDefaultObject(): DynamicMeshComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshComponentToolTargetFactory;
	static C(Other: UObject | any): DynamicMeshComponentToolTargetFactory;
}

declare class SkeletalMeshComponentReadOnlyToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): SkeletalMeshComponentReadOnlyToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentReadOnlyToolTarget;
	static GetDefaultObject(): SkeletalMeshComponentReadOnlyToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentReadOnlyToolTarget;
	static C(Other: UObject | any): SkeletalMeshComponentReadOnlyToolTarget;
}

declare class SkeletalMeshComponentToolTarget extends SkeletalMeshComponentReadOnlyToolTarget { 
	static Load(ResourceName: string): SkeletalMeshComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentToolTarget;
	static GetDefaultObject(): SkeletalMeshComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentToolTarget;
	static C(Other: UObject | any): SkeletalMeshComponentToolTarget;
}

declare class SkeletalMeshComponentReadOnlyToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshComponentReadOnlyToolTargetFactory;
}

declare class SkeletalMeshComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshComponentToolTargetFactory;
}

declare class SkeletalMeshReadOnlyToolTarget extends ToolTarget { 
	static Load(ResourceName: string): SkeletalMeshReadOnlyToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshReadOnlyToolTarget;
	static GetDefaultObject(): SkeletalMeshReadOnlyToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshReadOnlyToolTarget;
	static C(Other: UObject | any): SkeletalMeshReadOnlyToolTarget;
}

declare class SkeletalMeshToolTarget extends SkeletalMeshReadOnlyToolTarget { 
	static Load(ResourceName: string): SkeletalMeshToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshToolTarget;
	static GetDefaultObject(): SkeletalMeshToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshToolTarget;
	static C(Other: UObject | any): SkeletalMeshToolTarget;
}

declare class SkeletalMeshReadOnlyToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshReadOnlyToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshReadOnlyToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshReadOnlyToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshReadOnlyToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshReadOnlyToolTargetFactory;
}

declare class SkeletalMeshToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshToolTargetFactory;
}

declare class StaticMeshComponentToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): StaticMeshComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): StaticMeshComponentToolTarget;
	static GetDefaultObject(): StaticMeshComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshComponentToolTarget;
	static C(Other: UObject | any): StaticMeshComponentToolTarget;
}

declare class StaticMeshComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): StaticMeshComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): StaticMeshComponentToolTargetFactory;
	static GetDefaultObject(): StaticMeshComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshComponentToolTargetFactory;
	static C(Other: UObject | any): StaticMeshComponentToolTargetFactory;
}

declare class StaticMeshToolTarget extends ToolTarget { 
	static Load(ResourceName: string): StaticMeshToolTarget;
	static Find(Outer: UObject, ResourceName: string): StaticMeshToolTarget;
	static GetDefaultObject(): StaticMeshToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshToolTarget;
	static C(Other: UObject | any): StaticMeshToolTarget;
}

declare class StaticMeshToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): StaticMeshToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): StaticMeshToolTargetFactory;
	static GetDefaultObject(): StaticMeshToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshToolTargetFactory;
	static C(Other: UObject | any): StaticMeshToolTargetFactory;
}

declare class VolumeComponentToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): VolumeComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): VolumeComponentToolTarget;
	static GetDefaultObject(): VolumeComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeComponentToolTarget;
	static C(Other: UObject | any): VolumeComponentToolTarget;
}

declare class VolumeComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): VolumeComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): VolumeComponentToolTargetFactory;
	static GetDefaultObject(): VolumeComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeComponentToolTargetFactory;
	static C(Other: UObject | any): VolumeComponentToolTargetFactory;
}

declare class ParameterizeMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ParameterizeMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolBuilder;
	static GetDefaultObject(): ParameterizeMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolBuilder;
	static C(Other: UObject | any): ParameterizeMeshToolBuilder;
}

declare class ParameterizeMeshToolPatchBuilderGroupLayerProperties extends PolygroupLayersProperties { 
	bConstrainToPolygroups: boolean;
	static Load(ResourceName: string): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static GetDefaultObject(): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static C(Other: UObject | any): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
}

declare class ParameterizeMeshTool extends SingleSelectionMeshEditingTool { 
	UVChannelProperties: MeshUVChannelProperties;
	Settings: ParameterizeMeshToolProperties;
	UVAtlasProperties: ParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: ParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: ParameterizeMeshToolPatchBuilderProperties;
	PolygroupLayerProperties: ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	MaterialSettings: ExistingMeshMaterialProperties;
	bCreateUVLayoutViewOnSetup: boolean;
	UVLayoutView: UVLayoutPreview;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): ParameterizeMeshTool;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshTool;
	static GetDefaultObject(): ParameterizeMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshTool;
	static C(Other: UObject | any): ParameterizeMeshTool;
}

declare class ISMEditorToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): ISMEditorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolBuilder;
	static GetDefaultObject(): ISMEditorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolBuilder;
	static C(Other: UObject | any): ISMEditorToolBuilder;
}

declare type EISMEditorTransformMode = 'SharedGizmo' | 'SharedGizmoLocal' | 'PerObjectGizmo' | 'LastValue' | 'EISMEditorTransformMode_MAX';
declare var EISMEditorTransformMode : { SharedGizmo:'SharedGizmo',SharedGizmoLocal:'SharedGizmoLocal',PerObjectGizmo:'PerObjectGizmo',LastValue:'LastValue',EISMEditorTransformMode_MAX:'EISMEditorTransformMode_MAX', };
declare class ISMEditorToolProperties extends InteractiveToolPropertySet { 
	TransformMode: EISMEditorTransformMode;
	bSetPivotMode: boolean;
	bShowSelectable: boolean;
	bShowSelected: boolean;
	bHideWhenDragging: boolean;
	SelectedInstances: string[];
	static Load(ResourceName: string): ISMEditorToolProperties;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolProperties;
	static GetDefaultObject(): ISMEditorToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolProperties;
	static C(Other: UObject | any): ISMEditorToolProperties;
}

declare class ISMEditorToolActionPropertySetBase extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): ISMEditorToolActionPropertySetBase;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolActionPropertySetBase;
	static GetDefaultObject(): ISMEditorToolActionPropertySetBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolActionPropertySetBase;
	static C(Other: UObject | any): ISMEditorToolActionPropertySetBase;
}

declare class ISMEditorToolActionPropertySet extends ISMEditorToolActionPropertySetBase { 
	static Load(ResourceName: string): ISMEditorToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolActionPropertySet;
	static GetDefaultObject(): ISMEditorToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolActionPropertySet;
	Duplicate(): void;
	Delete(): void;
	ClearSelection(): void;
	static C(Other: UObject | any): ISMEditorToolActionPropertySet;
}

declare class ISMEditorToolReplacePropertySet extends ISMEditorToolActionPropertySetBase { 
	ReplaceWith: StaticMesh;
	static Load(ResourceName: string): ISMEditorToolReplacePropertySet;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolReplacePropertySet;
	static GetDefaultObject(): ISMEditorToolReplacePropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolReplacePropertySet;
	Replace(): void;
	static C(Other: UObject | any): ISMEditorToolReplacePropertySet;
}

declare class ISMEditorTarget { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	clone() : ISMEditorTarget;
	static C(Other: UObject | any): ISMEditorTarget;
}

declare class ISMEditorTool extends InteractiveTool { 
	ClickOrDragBehavior: SingleClickOrDragInputBehavior;
	RectangleMarqueeMechanic: RectangleMarqueeMechanic;
	TransformProps: ISMEditorToolProperties;
	ToolActions: ISMEditorToolActionPropertySet;
	ReplaceAction: ISMEditorToolReplacePropertySet;
	TargetComponents: InstancedStaticMeshComponent[];
	ActiveGizmos: ISMEditorTarget[];
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): ISMEditorTool;
	static Find(Outer: UObject, ResourceName: string): ISMEditorTool;
	static GetDefaultObject(): ISMEditorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorTool;
	static C(Other: UObject | any): ISMEditorTool;
}

declare class PivotActorTransformProperties extends InteractiveToolPropertySet { 
	Position: Vector;
	Rotation: Quat;
	static Load(ResourceName: string): PivotActorTransformProperties;
	static Find(Outer: UObject, ResourceName: string): PivotActorTransformProperties;
	static GetDefaultObject(): PivotActorTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotActorTransformProperties;
	static C(Other: UObject | any): PivotActorTransformProperties;
}

declare class AddPivotActorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): AddPivotActorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AddPivotActorToolBuilder;
	static GetDefaultObject(): AddPivotActorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPivotActorToolBuilder;
	static C(Other: UObject | any): AddPivotActorToolBuilder;
}

declare class AddPivotActorTool extends MultiSelectionMeshEditingTool { 
	DragAlignmentMechanic: DragAlignmentMechanic;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	TransformProperties: PivotActorTransformProperties;
	static Load(ResourceName: string): AddPivotActorTool;
	static Find(Outer: UObject, ResourceName: string): AddPivotActorTool;
	static GetDefaultObject(): AddPivotActorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPivotActorTool;
	static C(Other: UObject | any): AddPivotActorTool;
}

declare class AttributeEditorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): AttributeEditorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorToolBuilder;
	static GetDefaultObject(): AttributeEditorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorToolBuilder;
	static C(Other: UObject | any): AttributeEditorToolBuilder;
}

declare class AttributeEditorAttribProperties extends InteractiveToolPropertySet { 
	VertexAttributes: string[];
	InstanceAttributes: string[];
	TriangleAttributes: string[];
	PolygonAttributes: string[];
	EdgeAttributes: string[];
	GroupAttributes: string[];
	static Load(ResourceName: string): AttributeEditorAttribProperties;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorAttribProperties;
	static GetDefaultObject(): AttributeEditorAttribProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorAttribProperties;
	static C(Other: UObject | any): AttributeEditorAttribProperties;
}

declare class AttributeEditorActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): AttributeEditorActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorActionPropertySet;
	static GetDefaultObject(): AttributeEditorActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorActionPropertySet;
	static C(Other: UObject | any): AttributeEditorActionPropertySet;
}

declare class AttributeEditorNormalsActions extends AttributeEditorActionPropertySet { 
	static Load(ResourceName: string): AttributeEditorNormalsActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorNormalsActions;
	static GetDefaultObject(): AttributeEditorNormalsActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorNormalsActions;
	ResetHardNormals(): void;
	static C(Other: UObject | any): AttributeEditorNormalsActions;
}

declare class AttributeEditorUVActions extends AttributeEditorActionPropertySet { 
	UVLayer: string;
	UVLayerNamesList: string[];
	static Load(ResourceName: string): AttributeEditorUVActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorUVActions;
	static GetDefaultObject(): AttributeEditorUVActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorUVActions;
	GetUVLayerNamesFunc(): string[];
	DuplicateSelected(): void;
	DeleteSelected(): void;
	ClearAll(): void;
	AddNew(): void;
	static C(Other: UObject | any): AttributeEditorUVActions;
}

declare class AttributeEditorLightmapUVActions extends AttributeEditorActionPropertySet { 
	bGenerateLightmapUVs: boolean;
	SourceUVIndex: number;
	DestinationUVIndex: number;
	static Load(ResourceName: string): AttributeEditorLightmapUVActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorLightmapUVActions;
	static GetDefaultObject(): AttributeEditorLightmapUVActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorLightmapUVActions;
	Reset(): void;
	Enable(): void;
	Disable(): void;
	static C(Other: UObject | any): AttributeEditorLightmapUVActions;
}

declare type EAttributeEditorElementType = 'Vertex' | 'VertexInstance' | 'Triangle' | 'Polygon' | 'Edge' | 'PolygonGroup' | 'EAttributeEditorElementType_MAX';
declare var EAttributeEditorElementType : { Vertex:'Vertex',VertexInstance:'VertexInstance',Triangle:'Triangle',Polygon:'Polygon',Edge:'Edge',PolygonGroup:'PolygonGroup',EAttributeEditorElementType_MAX:'EAttributeEditorElementType_MAX', };
declare type EAttributeEditorAttribType = 'Int32' | 'Boolean' | 'Float' | 'Vector2' | 'Vector3' | 'Vector4' | 'String' | 'Unknown' | 'EAttributeEditorAttribType_MAX';
declare var EAttributeEditorAttribType : { Int32:'Int32',Boolean:'Boolean',Float:'Float',Vector2:'Vector2',Vector3:'Vector3',Vector4:'Vector4',String:'String',Unknown:'Unknown',EAttributeEditorAttribType_MAX:'EAttributeEditorAttribType_MAX', };
declare class AttributeEditorNewAttributeActions extends AttributeEditorActionPropertySet { 
	NewName: string;
	ElementType: EAttributeEditorElementType;
	DataType: EAttributeEditorAttribType;
	static Load(ResourceName: string): AttributeEditorNewAttributeActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorNewAttributeActions;
	static GetDefaultObject(): AttributeEditorNewAttributeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorNewAttributeActions;
	AddWeightMapLayer(): void;
	AddPolyGroupLayer(): void;
	static C(Other: UObject | any): AttributeEditorNewAttributeActions;
}

declare class AttributeEditorModifyAttributeActions extends AttributeEditorActionPropertySet { 
	Attribute: string;
	AttributeNamesList: string[];
	static Load(ResourceName: string): AttributeEditorModifyAttributeActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorModifyAttributeActions;
	static GetDefaultObject(): AttributeEditorModifyAttributeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorModifyAttributeActions;
	GetAttributeNamesFunc(): string[];
	DeleteSelected(): void;
	static C(Other: UObject | any): AttributeEditorModifyAttributeActions;
}

declare class AttributeEditorCopyAttributeActions extends AttributeEditorActionPropertySet { 
	FromAttribute: string[];
	ToAttribute: string[];
	static Load(ResourceName: string): AttributeEditorCopyAttributeActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorCopyAttributeActions;
	static GetDefaultObject(): AttributeEditorCopyAttributeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorCopyAttributeActions;
	CopyFromTo(): void;
	static C(Other: UObject | any): AttributeEditorCopyAttributeActions;
}

declare class AttributeEditorTool extends MultiSelectionMeshEditingTool { 
	NormalsActions: AttributeEditorNormalsActions;
	UVActions: AttributeEditorUVActions;
	LightmapUVActions: AttributeEditorLightmapUVActions;
	AttributeProps: AttributeEditorAttribProperties;
	NewAttributeProps: AttributeEditorNewAttributeActions;
	ModifyAttributeProps: AttributeEditorModifyAttributeActions;
	CopyAttributeProps: AttributeEditorCopyAttributeActions;
	static Load(ResourceName: string): AttributeEditorTool;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorTool;
	static GetDefaultObject(): AttributeEditorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorTool;
	static C(Other: UObject | any): AttributeEditorTool;
}

declare class BspConversionToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): BspConversionToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BspConversionToolBuilder;
	static GetDefaultObject(): BspConversionToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionToolBuilder;
	static C(Other: UObject | any): BspConversionToolBuilder;
}

declare type EBspConversionMode = 'ConvertFirst' | 'CombineFirst' | 'EBspConversionMode_MAX';
declare var EBspConversionMode : { ConvertFirst:'ConvertFirst',CombineFirst:'CombineFirst',EBspConversionMode_MAX:'EBspConversionMode_MAX', };
declare class BspConversionToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EBspConversionMode;
	bIncludeVolumes: boolean;
	bRemoveConvertedVolumes: boolean;
	bExplicitSubtractiveBrushSelection: boolean;
	bRemoveConvertedSubtractiveBrushes: boolean;
	bCacheBrushes: boolean;
	bShowPreview: boolean;
	static Load(ResourceName: string): BspConversionToolProperties;
	static Find(Outer: UObject, ResourceName: string): BspConversionToolProperties;
	static GetDefaultObject(): BspConversionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionToolProperties;
	static C(Other: UObject | any): BspConversionToolProperties;
}

declare class BspConversionToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): BspConversionToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): BspConversionToolActionPropertySet;
	static GetDefaultObject(): BspConversionToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionToolActionPropertySet;
	SelectAllValidBrushes(): void;
	DeselectVolumes(): void;
	DeselectNonValid(): void;
	static C(Other: UObject | any): BspConversionToolActionPropertySet;
}

declare class BspConversionTool extends InteractiveTool { 
	Settings: BspConversionToolProperties;
	ToolActions: BspConversionToolActionPropertySet;
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): BspConversionTool;
	static Find(Outer: UObject, ResourceName: string): BspConversionTool;
	static GetDefaultObject(): BspConversionTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionTool;
	static C(Other: UObject | any): BspConversionTool;
}

declare class EditMeshMaterialsToolBuilder extends MeshSelectionToolBuilder { 
	static Load(ResourceName: string): EditMeshMaterialsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsToolBuilder;
	static GetDefaultObject(): EditMeshMaterialsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsToolBuilder;
	static C(Other: UObject | any): EditMeshMaterialsToolBuilder;
}

declare class EditMeshMaterialsToolProperties extends InteractiveToolPropertySet { 
	ActiveMaterial: string;
	MaterialNamesList: string[];
	Materials: MaterialInterface[];
	static Load(ResourceName: string): EditMeshMaterialsToolProperties;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsToolProperties;
	static GetDefaultObject(): EditMeshMaterialsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsToolProperties;
	GetMaterialNamesFunc(): string[];
	static C(Other: UObject | any): EditMeshMaterialsToolProperties;
}

declare class EditMeshMaterialsEditActions extends MeshSelectionToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshMaterialsEditActions;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsEditActions;
	static GetDefaultObject(): EditMeshMaterialsEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsEditActions;
	AssignActiveMaterial(): void;
	static C(Other: UObject | any): EditMeshMaterialsEditActions;
}

declare class EditMeshMaterialsTool extends MeshSelectionTool { 
	MaterialProps: EditMeshMaterialsToolProperties;
	static Load(ResourceName: string): EditMeshMaterialsTool;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsTool;
	static GetDefaultObject(): EditMeshMaterialsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsTool;
	static C(Other: UObject | any): EditMeshMaterialsTool;
}

declare class MergeMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MergeMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MergeMeshesToolBuilder;
	static GetDefaultObject(): MergeMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MergeMeshesToolBuilder;
	static C(Other: UObject | any): MergeMeshesToolBuilder;
}

declare class MergeMeshesToolProperties extends InteractiveToolPropertySet { 
	VoxelCount: number;
	MeshAdaptivity: number;
	OffsetDistance: number;
	bAutoSimplify: boolean;
	static Load(ResourceName: string): MergeMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): MergeMeshesToolProperties;
	static GetDefaultObject(): MergeMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MergeMeshesToolProperties;
	static C(Other: UObject | any): MergeMeshesToolProperties;
}

declare class MergeMeshesTool extends MultiSelectionMeshEditingTool { 
	MergeProps: MergeMeshesToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): MergeMeshesTool;
	static Find(Outer: UObject, ResourceName: string): MergeMeshesTool;
	static GetDefaultObject(): MergeMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MergeMeshesTool;
	static C(Other: UObject | any): MergeMeshesTool;
}

declare class MeshTangentsToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshTangentsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsToolBuilder;
	static GetDefaultObject(): MeshTangentsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsToolBuilder;
	static C(Other: UObject | any): MeshTangentsToolBuilder;
}

declare type EMeshTangentsType = 'MikkTSpace' | 'FastMikkTSpace' | 'PerTriangle' | 'CopyExisting' | 'EMeshTangentsType_MAX';
declare var EMeshTangentsType : { MikkTSpace:'MikkTSpace',FastMikkTSpace:'FastMikkTSpace',PerTriangle:'PerTriangle',CopyExisting:'CopyExisting',EMeshTangentsType_MAX:'EMeshTangentsType_MAX', };
declare class MeshTangentsToolProperties extends InteractiveToolPropertySet { 
	CalculationMethod: EMeshTangentsType;
	bShowTangents: boolean;
	bShowNormals: boolean;
	LineLength: number;
	LineThickness: number;
	bShowDegenerates: boolean;
	bCompareWithMikkt: boolean;
	CompareWithMikktThreshold: number;
	static Load(ResourceName: string): MeshTangentsToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsToolProperties;
	static GetDefaultObject(): MeshTangentsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsToolProperties;
	static C(Other: UObject | any): MeshTangentsToolProperties;
}

declare class MeshTangentsTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshTangentsToolProperties;
	DefaultMaterial: MaterialInterface;
	PreviewMesh: PreviewMesh;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): MeshTangentsTool;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsTool;
	static GetDefaultObject(): MeshTangentsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsTool;
	static C(Other: UObject | any): MeshTangentsTool;
}

declare class MeshToVolumeToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshToVolumeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeToolBuilder;
	static GetDefaultObject(): MeshToVolumeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeToolBuilder;
	static C(Other: UObject | any): MeshToVolumeToolBuilder;
}

declare type EMeshToVolumeMode = 'TriangulatePolygons' | 'MinimalPolygons' | 'EMeshToVolumeMode_MAX';
declare var EMeshToVolumeMode : { TriangulatePolygons:'TriangulatePolygons',MinimalPolygons:'MinimalPolygons',EMeshToVolumeMode_MAX:'EMeshToVolumeMode_MAX', };
declare class MeshToVolumeToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EMeshToVolumeMode;
	NewVolumeType: UnrealEngineClass;
	TargetVolume: Volume;
	static Load(ResourceName: string): MeshToVolumeToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeToolProperties;
	static GetDefaultObject(): MeshToVolumeToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeToolProperties;
	static C(Other: UObject | any): MeshToVolumeToolProperties;
}

declare class MeshToVolumeTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshToVolumeToolProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	PreviewMesh: PreviewMesh;
	VolumeEdgesSet: LineSetComponent;
	static Load(ResourceName: string): MeshToVolumeTool;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeTool;
	static GetDefaultObject(): MeshToVolumeTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeTool;
	static C(Other: UObject | any): MeshToVolumeTool;
}

declare class PolygonOnMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PolygonOnMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolBuilder;
	static GetDefaultObject(): PolygonOnMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolBuilder;
	static C(Other: UObject | any): PolygonOnMeshToolBuilder;
}

declare type EEmbeddedPolygonOpMethod = 'TrimOutside' | 'TrimInside' | 'InsertPolygon' | 'CutThrough' | 'EEmbeddedPolygonOpMethod_MAX';
declare var EEmbeddedPolygonOpMethod : { TrimOutside:'TrimOutside',TrimInside:'TrimInside',InsertPolygon:'InsertPolygon',CutThrough:'CutThrough',EEmbeddedPolygonOpMethod_MAX:'EEmbeddedPolygonOpMethod_MAX', };
declare type EPolygonType = 'Circle' | 'Square' | 'Rectangle' | 'RoundRect' | 'Custom' | 'EPolygonType_MAX';
declare var EPolygonType : { Circle:'Circle',Square:'Square',Rectangle:'Rectangle',RoundRect:'RoundRect',Custom:'Custom',EPolygonType_MAX:'EPolygonType_MAX', };
declare class PolygonOnMeshToolProperties extends InteractiveToolPropertySet { 
	Operation: EEmbeddedPolygonOpMethod;
	Shape: EPolygonType;
	bCutWithBoolean: boolean;
	bTryToFixCracks: boolean;
	PolygonScale: number;
	Width: number;
	Height: number;
	CornerRatio: number;
	Subdivisions: number;
	bCanAcceptFailedResult: boolean;
	bShowIntermediateResultOnFailure: boolean;
	static Load(ResourceName: string): PolygonOnMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolProperties;
	static GetDefaultObject(): PolygonOnMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolProperties;
	static C(Other: UObject | any): PolygonOnMeshToolProperties;
}

declare class PolygonOnMeshToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): PolygonOnMeshToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolActionPropertySet;
	static GetDefaultObject(): PolygonOnMeshToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolActionPropertySet;
	DrawPolygon(): void;
	static C(Other: UObject | any): PolygonOnMeshToolActionPropertySet;
}

declare class PolygonOnMeshTool extends SingleSelectionMeshEditingTool { 
	BasicProperties: PolygonOnMeshToolProperties;
	ActionProperties: PolygonOnMeshToolActionPropertySet;
	Preview: MeshOpPreviewWithBackgroundCompute;
	DrawnLineSet: LineSetComponent;
	PlaneMechanic: ConstructionPlaneMechanic;
	DrawPolygonMechanic: CollectSurfacePathMechanic;
	static Load(ResourceName: string): PolygonOnMeshTool;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshTool;
	static GetDefaultObject(): PolygonOnMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshTool;
	static C(Other: UObject | any): PolygonOnMeshTool;
}

declare class ShapeSprayToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): ShapeSprayToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayToolBuilder;
	static GetDefaultObject(): ShapeSprayToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayToolBuilder;
	static C(Other: UObject | any): ShapeSprayToolBuilder;
}

declare class ShapeSprayToolProperties extends InteractiveToolPropertySet { 
	Color: LinearColor;
	bRandomColor: boolean;
	DropSpeed: number;
	ObjectSize: number;
	NumSplats: number;
	Material: MaterialInterface;
	static Load(ResourceName: string): ShapeSprayToolProperties;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayToolProperties;
	static GetDefaultObject(): ShapeSprayToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayToolProperties;
	static C(Other: UObject | any): ShapeSprayToolProperties;
}

declare class ShapeSprayTool extends DynamicMeshBrushTool { 
	Settings: ShapeSprayToolProperties;
	AccumMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): ShapeSprayTool;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayTool;
	static GetDefaultObject(): ShapeSprayTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayTool;
	static C(Other: UObject | any): ShapeSprayTool;
}

declare class SimplifyMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SimplifyMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshToolBuilder;
	static GetDefaultObject(): SimplifyMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshToolBuilder;
	static C(Other: UObject | any): SimplifyMeshToolBuilder;
}

declare type ESimplifyType = 'QEM' | 'Attribute' | 'UEStandard' | 'MinimalExistingVertex' | 'MinimalPlanar' | 'MinimalPolygroup' | 'ESimplifyType_MAX';
declare var ESimplifyType : { QEM:'QEM',Attribute:'Attribute',UEStandard:'UEStandard',MinimalExistingVertex:'MinimalExistingVertex',MinimalPlanar:'MinimalPlanar',MinimalPolygroup:'MinimalPolygroup',ESimplifyType_MAX:'ESimplifyType_MAX', };
declare type ESimplifyTargetType = 'Percentage' | 'TriangleCount' | 'VertexCount' | 'EdgeLength' | 'MinimalPlanar' | 'ESimplifyTargetType_MAX';
declare var ESimplifyTargetType : { Percentage:'Percentage',TriangleCount:'TriangleCount',VertexCount:'VertexCount',EdgeLength:'EdgeLength',MinimalPlanar:'MinimalPlanar',ESimplifyTargetType_MAX:'ESimplifyTargetType_MAX', };
declare class SimplifyMeshToolProperties extends MeshConstraintProperties { 
	SimplifierType: ESimplifyType;
	TargetMode: ESimplifyTargetType;
	TargetPercentage: number;
	TargetEdgeLength: number;
	TargetTriangleCount: number;
	TargetVertexCount: number;
	MinimalAngleThreshold: number;
	PolyEdgeAngleTolerance: number;
	bDiscardAttributes: boolean;
	bGeometricConstraint: boolean;
	GeometricTolerance: number;
	bShowGroupColors: boolean;
	bReproject: boolean;
	static Load(ResourceName: string): SimplifyMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshToolProperties;
	static GetDefaultObject(): SimplifyMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshToolProperties;
	static C(Other: UObject | any): SimplifyMeshToolProperties;
}

declare class SimplifyMeshTool extends SingleSelectionMeshEditingTool { 
	SimplifyProperties: SimplifyMeshToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): SimplifyMeshTool;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshTool;
	static GetDefaultObject(): SimplifyMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshTool;
	static C(Other: UObject | any): SimplifyMeshTool;
}

declare class SubdividePolyToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SubdividePolyToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyToolBuilder;
	static GetDefaultObject(): SubdividePolyToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyToolBuilder;
	static C(Other: UObject | any): SubdividePolyToolBuilder;
}

declare type ESubdivisionScheme = 'Bilinear' | 'CatmullClark' | 'Loop' | 'ESubdivisionScheme_MAX';
declare var ESubdivisionScheme : { Bilinear:'Bilinear',CatmullClark:'CatmullClark',Loop:'Loop',ESubdivisionScheme_MAX:'ESubdivisionScheme_MAX', };
declare type ESubdivisionOutputNormals = 'Interpolated' | 'Generated' | 'None' | 'ESubdivisionOutputNormals_MAX';
declare var ESubdivisionOutputNormals : { Interpolated:'Interpolated',Generated:'Generated',None:'None',ESubdivisionOutputNormals_MAX:'ESubdivisionOutputNormals_MAX', };
declare type ESubdivisionOutputUVs = 'Interpolated' | 'None' | 'ESubdivisionOutputUVs_MAX';
declare var ESubdivisionOutputUVs : { Interpolated:'Interpolated',None:'None',ESubdivisionOutputUVs_MAX:'ESubdivisionOutputUVs_MAX', };
declare class SubdividePolyToolProperties extends InteractiveToolPropertySet { 
	SubdivisionLevel: number;
	bCatmullClarkOK: boolean;
	SubdivisionScheme: ESubdivisionScheme;
	NormalComputationMethod: ESubdivisionOutputNormals;
	UVComputationMethod: ESubdivisionOutputUVs;
	bNewPolyGroups: boolean;
	bRenderGroups: boolean;
	bRenderCage: boolean;
	static Load(ResourceName: string): SubdividePolyToolProperties;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyToolProperties;
	static GetDefaultObject(): SubdividePolyToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyToolProperties;
	static C(Other: UObject | any): SubdividePolyToolProperties;
}

declare class SubdividePolyTool extends SingleSelectionMeshEditingTool { 
	PreviewMesh: PreviewMesh;
	Properties: SubdividePolyToolProperties;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): SubdividePolyTool;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyTool;
	static GetDefaultObject(): SubdividePolyTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyTool;
	static C(Other: UObject | any): SubdividePolyTool;
}

declare class VoxelCSGMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): VoxelCSGMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesToolBuilder;
	static GetDefaultObject(): VoxelCSGMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesToolBuilder;
	static C(Other: UObject | any): VoxelCSGMeshesToolBuilder;
}

declare type EVoxelCSGOperation = 'DifferenceAB' | 'DifferenceBA' | 'Intersect' | 'Union' | 'EVoxelCSGOperation_MAX';
declare var EVoxelCSGOperation : { DifferenceAB:'DifferenceAB',DifferenceBA:'DifferenceBA',Intersect:'Intersect',Union:'Union',EVoxelCSGOperation_MAX:'EVoxelCSGOperation_MAX', };
declare class VoxelCSGMeshesToolProperties extends InteractiveToolPropertySet { 
	Operation: EVoxelCSGOperation;
	VoxelCount: number;
	MeshAdaptivity: number;
	OffsetDistance: number;
	bAutoSimplify: boolean;
	static Load(ResourceName: string): VoxelCSGMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesToolProperties;
	static GetDefaultObject(): VoxelCSGMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesToolProperties;
	static C(Other: UObject | any): VoxelCSGMeshesToolProperties;
}

declare class VoxelCSGMeshesTool extends MultiSelectionMeshEditingTool { 
	CSGProps: VoxelCSGMeshesToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): VoxelCSGMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesTool;
	static GetDefaultObject(): VoxelCSGMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesTool;
	static C(Other: UObject | any): VoxelCSGMeshesTool;
}

declare class StylusInputSubsystem extends EditorSubsystem { 
	static Load(ResourceName: string): StylusInputSubsystem;
	static Find(Outer: UObject, ResourceName: string): StylusInputSubsystem;
	static GetDefaultObject(): StylusInputSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StylusInputSubsystem;
	static C(Other: UObject | any): StylusInputSubsystem;
}

declare class ModelingSelectionInteraction extends UObject { 
	ClickBehavior: SingleClickInputBehavior;
	BehaviorSet: InputBehaviorSet;
	SelectionManager: GeometrySelectionManager;
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	static Load(ResourceName: string): ModelingSelectionInteraction;
	static Find(Outer: UObject, ResourceName: string): ModelingSelectionInteraction;
	static GetDefaultObject(): ModelingSelectionInteraction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingSelectionInteraction;
	static C(Other: UObject | any): ModelingSelectionInteraction;
}

declare class ModelingToolsEditorMode extends BaseLegacyWidgetEdMode { 
	SceneSnappingManager: ModelingSceneSnappingManager;
	SelectionManager: GeometrySelectionManager;
	SelectionInteraction: ModelingSelectionInteraction;
	ModelingModeCommands: InteractiveCommand[];
	static Load(ResourceName: string): ModelingToolsEditorMode;
	static Find(Outer: UObject, ResourceName: string): ModelingToolsEditorMode;
	static GetDefaultObject(): ModelingToolsEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingToolsEditorMode;
	static C(Other: UObject | any): ModelingToolsEditorMode;
}

declare type EModelingModeAssetGenerationLocation = 'AutoGeneratedWorldRelativeAssetPath' | 'AutoGeneratedGlobalAssetPath' | 'CurrentAssetBrowserPathIfAvailable' | 'EModelingModeAssetGenerationLocation_MAX';
declare var EModelingModeAssetGenerationLocation : { AutoGeneratedWorldRelativeAssetPath:'AutoGeneratedWorldRelativeAssetPath',AutoGeneratedGlobalAssetPath:'AutoGeneratedGlobalAssetPath',CurrentAssetBrowserPathIfAvailable:'CurrentAssetBrowserPathIfAvailable',EModelingModeAssetGenerationLocation_MAX:'EModelingModeAssetGenerationLocation_MAX', };
declare type EModelingModeAssetGenerationBehavior = 'AutoGenerateAndAutosave' | 'AutoGenerateButDoNotAutosave' | 'InteractivePromptToSave' | 'EModelingModeAssetGenerationBehavior_MAX';
declare var EModelingModeAssetGenerationBehavior : { AutoGenerateAndAutosave:'AutoGenerateAndAutosave',AutoGenerateButDoNotAutosave:'AutoGenerateButDoNotAutosave',InteractivePromptToSave:'InteractivePromptToSave',EModelingModeAssetGenerationBehavior_MAX:'EModelingModeAssetGenerationBehavior_MAX', };
declare type EModelingModeDefaultMeshObjectType = 'StaticMeshAsset' | 'VolumeActor' | 'DynamicMeshActor' | 'EModelingModeDefaultMeshObjectType_MAX';
declare var EModelingModeDefaultMeshObjectType : { StaticMeshAsset:'StaticMeshAsset',VolumeActor:'VolumeActor',DynamicMeshActor:'DynamicMeshActor',EModelingModeDefaultMeshObjectType_MAX:'EModelingModeDefaultMeshObjectType_MAX', };
declare class ModelingToolsEditorModeSettings extends DeveloperSettings { 
	bEnableDynamicMeshActors: boolean;
	AssetGenerationLocation: EModelingModeAssetGenerationLocation;
	AssetGenerationMode: EModelingModeAssetGenerationBehavior;
	DefaultMeshObjectType: EModelingModeDefaultMeshObjectType;
	AutoGeneratedAssetPath: string;
	bStoreUnsavedLevelAssetsInTopLevelGameFolder: boolean;
	bUsePerUserAutogenSubfolder: boolean;
	AutogenSubfolderUserNameOverride: string;
	bAppendRandomStringToName: boolean;
	bEnablePersistentSelections: boolean;
	RestrictiveModeAutoGeneratedAssetPath: string;
	static Load(ResourceName: string): ModelingToolsEditorModeSettings;
	static Find(Outer: UObject, ResourceName: string): ModelingToolsEditorModeSettings;
	static GetDefaultObject(): ModelingToolsEditorModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingToolsEditorModeSettings;
	static C(Other: UObject | any): ModelingToolsEditorModeSettings;
}

declare class ModelingModeCustomSectionColor { 
	SectionName: string;
	Color: LinearColor;
	clone() : ModelingModeCustomSectionColor;
	static C(Other: UObject | any): ModelingModeCustomSectionColor;
}

declare class ModelingModeCustomToolColor { 
	ToolName: string;
	Color: LinearColor;
	clone() : ModelingModeCustomToolColor;
	static C(Other: UObject | any): ModelingModeCustomToolColor;
}

declare class ModelingModeAssetCollectionSet { 
	Name: string;
	Collections: CollectionReference[];
	clone() : ModelingModeAssetCollectionSet;
	static C(Other: UObject | any): ModelingModeAssetCollectionSet;
}

declare class ModelingToolsModeCustomizationSettings extends DeveloperSettings { 
	ToolSectionOrder: string[];
	ToolFavorites: string[];
	SectionColors: ModelingModeCustomSectionColor[];
	ToolColors: ModelingModeCustomToolColor[];
	BrushAlphaSets: ModelingModeAssetCollectionSet[];
	static Load(ResourceName: string): ModelingToolsModeCustomizationSettings;
	static Find(Outer: UObject, ResourceName: string): ModelingToolsModeCustomizationSettings;
	static GetDefaultObject(): ModelingToolsModeCustomizationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingToolsModeCustomizationSettings;
	static C(Other: UObject | any): ModelingToolsModeCustomizationSettings;
}

declare class MovieSceneScriptingKey extends UObject { 
	static Load(ResourceName: string): MovieSceneScriptingKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingKey;
	static GetDefaultObject(): MovieSceneScriptingKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingKey;
	static C(Other: UObject | any): MovieSceneScriptingKey;
}

declare class MovieSceneScriptingActorReferenceKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingActorReferenceKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingActorReferenceKey;
	static GetDefaultObject(): MovieSceneScriptingActorReferenceKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingActorReferenceKey;
	SetValue(InNewValue: MovieSceneObjectBindingID): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): MovieSceneObjectBindingID;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingActorReferenceKey;
}

declare class MovieSceneScriptingActorReferenceChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingActorReferenceChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingActorReferenceChannel;
	static GetDefaultObject(): MovieSceneScriptingActorReferenceChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingActorReferenceChannel;
	SetDefault(InDefaultValue: MovieSceneObjectBindingID): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): MovieSceneObjectBindingID;
	AddKey(InTime: FrameNumber,NewValue: MovieSceneObjectBindingID,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingActorReferenceKey;
	static C(Other: UObject | any): MovieSceneScriptingActorReferenceChannel;
}

declare class MovieSceneScriptingBoolKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingBoolKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingBoolKey;
	static GetDefaultObject(): MovieSceneScriptingBoolKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingBoolKey;
	SetValue(InNewValue: boolean): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): boolean;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingBoolKey;
}

declare class MovieSceneScriptingBoolChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingBoolChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingBoolChannel;
	static GetDefaultObject(): MovieSceneScriptingBoolChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingBoolChannel;
	SetDefault(InDefaultValue: boolean): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetNumKeys(): number;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): boolean;
	EvaluateKeys(Range: SequencerScriptingRange,FrameRate: FrameRate): boolean[];
	ComputeEffectiveRange(): SequencerScriptingRange;
	AddKey(InTime: FrameNumber,NewValue: boolean,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingBoolKey;
	static C(Other: UObject | any): MovieSceneScriptingBoolChannel;
}

declare class MovieSceneScriptingByteKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingByteKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingByteKey;
	static GetDefaultObject(): MovieSceneScriptingByteKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingByteKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingByteKey;
}

declare class MovieSceneScriptingByteChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingByteChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingByteChannel;
	static GetDefaultObject(): MovieSceneScriptingByteChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingByteChannel;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit,InInterpolation: EMovieSceneKeyInterpolation): MovieSceneScriptingByteKey;
	static C(Other: UObject | any): MovieSceneScriptingByteChannel;
}

declare class MovieSceneScriptingDoubleKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingDoubleKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingDoubleKey;
	static GetDefaultObject(): MovieSceneScriptingDoubleKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingDoubleKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	SetTangentWeightMode(InNewValue: ERichCurveTangentWeightMode): void;
	SetTangentMode(InNewValue: ERichCurveTangentMode): void;
	SetLeaveTangentWeight(InNewValue: number): void;
	SetLeaveTangent(InNewValue: number): void;
	SetInterpolationMode(InNewValue: ERichCurveInterpMode): void;
	SetArriveTangentWeight(InNewValue: number): void;
	SetArriveTangent(InNewValue: number): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	GetTangentWeightMode(): ERichCurveTangentWeightMode;
	GetTangentMode(): ERichCurveTangentMode;
	GetLeaveTangentWeight(): number;
	GetLeaveTangent(): number;
	GetInterpolationMode(): ERichCurveInterpMode;
	GetArriveTangentWeight(): number;
	GetArriveTangent(): number;
	static C(Other: UObject | any): MovieSceneScriptingDoubleKey;
}

declare class MovieSceneScriptingDoubleChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingDoubleChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingDoubleChannel;
	static GetDefaultObject(): MovieSceneScriptingDoubleChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingDoubleChannel;
	SetPreInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetPostInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetPreInfinityExtrapolation(): ERichCurveExtrapolation;
	GetPostInfinityExtrapolation(): ERichCurveExtrapolation;
	GetNumKeys(): number;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	EvaluateKeys(Range: SequencerScriptingRange,FrameRate: FrameRate): number[];
	ComputeEffectiveRange(): SequencerScriptingRange;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit,InInterpolation: EMovieSceneKeyInterpolation): MovieSceneScriptingDoubleKey;
	static C(Other: UObject | any): MovieSceneScriptingDoubleChannel;
}

declare class MovieSceneScriptingEventKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingEventKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingEventKey;
	static GetDefaultObject(): MovieSceneScriptingEventKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingEventKey;
	SetValue(InNewValue: MovieSceneEvent): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): MovieSceneEvent;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingEventKey;
}

declare class MovieSceneScriptingEventChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingEventChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingEventChannel;
	static GetDefaultObject(): MovieSceneScriptingEventChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingEventChannel;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	GetKeys(): MovieSceneScriptingKey[];
	AddKey(InTime: FrameNumber,NewValue: MovieSceneEvent,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingEventKey;
	static C(Other: UObject | any): MovieSceneScriptingEventChannel;
}

declare class MovieSceneScriptingFloatKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingFloatKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingFloatKey;
	static GetDefaultObject(): MovieSceneScriptingFloatKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingFloatKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	SetTangentWeightMode(InNewValue: ERichCurveTangentWeightMode): void;
	SetTangentMode(InNewValue: ERichCurveTangentMode): void;
	SetLeaveTangentWeight(InNewValue: number): void;
	SetLeaveTangent(InNewValue: number): void;
	SetInterpolationMode(InNewValue: ERichCurveInterpMode): void;
	SetArriveTangentWeight(InNewValue: number): void;
	SetArriveTangent(InNewValue: number): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	GetTangentWeightMode(): ERichCurveTangentWeightMode;
	GetTangentMode(): ERichCurveTangentMode;
	GetLeaveTangentWeight(): number;
	GetLeaveTangent(): number;
	GetInterpolationMode(): ERichCurveInterpMode;
	GetArriveTangentWeight(): number;
	GetArriveTangent(): number;
	static C(Other: UObject | any): MovieSceneScriptingFloatKey;
}

declare class MovieSceneScriptingActualFloatKey extends MovieSceneScriptingFloatKey { 
	static Load(ResourceName: string): MovieSceneScriptingActualFloatKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingActualFloatKey;
	static GetDefaultObject(): MovieSceneScriptingActualFloatKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingActualFloatKey;
	static C(Other: UObject | any): MovieSceneScriptingActualFloatKey;
}

declare class MovieSceneScriptingDoubleAsFloatKey extends MovieSceneScriptingFloatKey { 
	static Load(ResourceName: string): MovieSceneScriptingDoubleAsFloatKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingDoubleAsFloatKey;
	static GetDefaultObject(): MovieSceneScriptingDoubleAsFloatKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingDoubleAsFloatKey;
	static C(Other: UObject | any): MovieSceneScriptingDoubleAsFloatKey;
}

declare class MovieSceneScriptingFloatChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingFloatChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingFloatChannel;
	static GetDefaultObject(): MovieSceneScriptingFloatChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingFloatChannel;
	SetPreInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetPostInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetPreInfinityExtrapolation(): ERichCurveExtrapolation;
	GetPostInfinityExtrapolation(): ERichCurveExtrapolation;
	GetNumKeys(): number;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	EvaluateKeys(Range: SequencerScriptingRange,FrameRate: FrameRate): number[];
	ComputeEffectiveRange(): SequencerScriptingRange;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit,InInterpolation: EMovieSceneKeyInterpolation): MovieSceneScriptingFloatKey;
	static C(Other: UObject | any): MovieSceneScriptingFloatChannel;
}

declare class MovieSceneScriptingIntegerKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingIntegerKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingIntegerKey;
	static GetDefaultObject(): MovieSceneScriptingIntegerKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingIntegerKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingIntegerKey;
}

declare class MovieSceneScriptingIntegerChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingIntegerChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingIntegerChannel;
	static GetDefaultObject(): MovieSceneScriptingIntegerChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingIntegerChannel;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingIntegerKey;
	static C(Other: UObject | any): MovieSceneScriptingIntegerChannel;
}

declare class MovieSceneScriptingObjectPathKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingObjectPathKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingObjectPathKey;
	static GetDefaultObject(): MovieSceneScriptingObjectPathKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingObjectPathKey;
	SetValue(InNewValue: UObject): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): UObject;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingObjectPathKey;
}

declare class MovieSceneScriptingObjectPathChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingObjectPathChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingObjectPathChannel;
	static GetDefaultObject(): MovieSceneScriptingObjectPathChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingObjectPathChannel;
	SetDefault(InDefaultValue: UObject): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): UObject;
	AddKey(InTime: FrameNumber,NewValue: UObject,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingObjectPathKey;
	static C(Other: UObject | any): MovieSceneScriptingObjectPathChannel;
}

declare class MovieSceneScriptingStringKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingStringKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingStringKey;
	static GetDefaultObject(): MovieSceneScriptingStringKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingStringKey;
	SetValue(InNewValue: string): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): string;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingStringKey;
}

declare class MovieSceneScriptingStringChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingStringChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingStringChannel;
	static GetDefaultObject(): MovieSceneScriptingStringChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingStringChannel;
	SetDefault(InDefaultValue: string): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): string;
	AddKey(InTime: FrameNumber,NewValue: string,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingStringKey;
	static C(Other: UObject | any): MovieSceneScriptingStringChannel;
}

declare class MovieSceneBindingExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneBindingExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneBindingExtensions;
	static GetDefaultObject(): MovieSceneBindingExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneBindingExtensions;
	static SetParent(InBinding: MovieSceneBindingProxy,InParentBinding: MovieSceneBindingProxy): void;
	static SetName(InBinding: MovieSceneBindingProxy,InName: string): void;
	static SetDisplayName(InBinding: MovieSceneBindingProxy,InDisplayName: string): void;
	static RemoveTrack(InBinding: MovieSceneBindingProxy,TrackToRemove: MovieSceneTrack): void;
	static Remove(InBinding: MovieSceneBindingProxy): void;
	static MoveBindingContents(SourceBindingId: MovieSceneBindingProxy,DestinationBindingId: MovieSceneBindingProxy): void;
	static IsValid(InBinding: MovieSceneBindingProxy): boolean;
	static GetTracks(InBinding: MovieSceneBindingProxy): MovieSceneTrack[];
	static GetPossessedObjectClass(InBinding: MovieSceneBindingProxy): UnrealEngineClass;
	static GetParent(InBinding: MovieSceneBindingProxy): MovieSceneBindingProxy;
	static GetObjectTemplate(InBinding: MovieSceneBindingProxy): UObject;
	static GetName(InBinding: MovieSceneBindingProxy): string;
	static GetId(InBinding: MovieSceneBindingProxy): Guid;
	static GetDisplayName(InBinding: MovieSceneBindingProxy): string;
	static GetChildPossessables(InBinding: MovieSceneBindingProxy): MovieSceneBindingProxy[];
	static FindTracksByType(InBinding: MovieSceneBindingProxy,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static FindTracksByExactType(InBinding: MovieSceneBindingProxy,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static AddTrack(InBinding: MovieSceneBindingProxy,TrackType: UnrealEngineClass): MovieSceneTrack;
	static C(Other: UObject | any): MovieSceneBindingExtensions;
}

declare class MovieSceneEventTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneEventTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneEventTrackExtensions;
	static GetDefaultObject(): MovieSceneEventTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneEventTrackExtensions;
	static GetBoundObjectPropertyClass(EventKey: MovieSceneEvent): UnrealEngineClass;
	static AddEventTriggerSection(InTrack: MovieSceneEventTrack): MovieSceneEventTriggerSection;
	static AddEventRepeaterSection(InTrack: MovieSceneEventTrack): MovieSceneEventRepeaterSection;
	static C(Other: UObject | any): MovieSceneEventTrackExtensions;
}

declare class MovieSceneFolderExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneFolderExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneFolderExtensions;
	static GetDefaultObject(): MovieSceneFolderExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneFolderExtensions;
	static SetFolderName(Folder: MovieSceneFolder,InFolderName: string): boolean;
	static SetFolderColor(Folder: MovieSceneFolder,InFolderColor: Color): boolean;
	static RemoveChildObjectBinding(Folder: MovieSceneFolder,InObjectBinding: MovieSceneBindingProxy): boolean;
	static RemoveChildMasterTrack(Folder: MovieSceneFolder,InMasterTrack: MovieSceneTrack): boolean;
	static RemoveChildFolder(TargetFolder: MovieSceneFolder,FolderToRemove: MovieSceneFolder): boolean;
	static GetFolderName(Folder: MovieSceneFolder): string;
	static GetFolderColor(Folder: MovieSceneFolder): Color;
	static GetChildObjectBindings(Folder: MovieSceneFolder): MovieSceneBindingProxy[];
	static GetChildMasterTracks(Folder: MovieSceneFolder): MovieSceneTrack[];
	static GetChildFolders(Folder: MovieSceneFolder): MovieSceneFolder[];
	static AddChildObjectBinding(Folder: MovieSceneFolder,InObjectBinding: MovieSceneBindingProxy): boolean;
	static AddChildMasterTrack(Folder: MovieSceneFolder,InMasterTrack: MovieSceneTrack): boolean;
	static AddChildFolder(TargetFolder: MovieSceneFolder,FolderToAdd: MovieSceneFolder): boolean;
	static C(Other: UObject | any): MovieSceneFolderExtensions;
}

declare class MovieSceneMaterialTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneMaterialTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMaterialTrackExtensions;
	static GetDefaultObject(): MovieSceneMaterialTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMaterialTrackExtensions;
	static SetMaterialIndex(Track: MovieSceneComponentMaterialTrack,MaterialIndex: number): void;
	static GetMaterialIndex(Track: MovieSceneComponentMaterialTrack): number;
	static C(Other: UObject | any): MovieSceneMaterialTrackExtensions;
}

declare class MovieScenePrimitiveMaterialTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieScenePrimitiveMaterialTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieScenePrimitiveMaterialTrackExtensions;
	static GetDefaultObject(): MovieScenePrimitiveMaterialTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieScenePrimitiveMaterialTrackExtensions;
	static SetMaterialIndex(Track: MovieScenePrimitiveMaterialTrack,MaterialIndex: number): void;
	static GetMaterialIndex(Track: MovieScenePrimitiveMaterialTrack): number;
	static C(Other: UObject | any): MovieScenePrimitiveMaterialTrackExtensions;
}

declare class MovieScenePropertyTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieScenePropertyTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieScenePropertyTrackExtensions;
	static GetDefaultObject(): MovieScenePropertyTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieScenePropertyTrackExtensions;
	static SetPropertyNameAndPath(Track: MovieScenePropertyTrack,InPropertyName: string,InPropertyPath: string): void;
	static SetObjectPropertyClass(Track: MovieSceneObjectPropertyTrack,PropertyClass: UnrealEngineClass): void;
	static SetByteTrackEnum(Track: MovieSceneByteTrack,InEnum: Enum): void;
	static GetUniqueTrackName(Track: MovieScenePropertyTrack): string;
	static GetPropertyPath(Track: MovieScenePropertyTrack): string;
	static GetPropertyName(Track: MovieScenePropertyTrack): string;
	static GetObjectPropertyClass(Track: MovieSceneObjectPropertyTrack): UnrealEngineClass;
	static GetByteTrackEnum(Track: MovieSceneByteTrack): Enum;
	static C(Other: UObject | any): MovieScenePropertyTrackExtensions;
}

declare class MovieSceneSectionExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneSectionExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneSectionExtensions;
	static GetDefaultObject(): MovieSceneSectionExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneSectionExtensions;
	static SetStartFrameSeconds(Section: MovieSceneSection,StartTime: number): void;
	static SetStartFrameBounded(Section: MovieSceneSection,bIsBounded: boolean): void;
	static SetStartFrame(Section: MovieSceneSection,StartFrame: number): void;
	static SetRangeSeconds(Section: MovieSceneSection,StartTime: number,EndTime: number): void;
	static SetRange(Section: MovieSceneSection,StartFrame: number,EndFrame: number): void;
	static SetEndFrameSeconds(Section: MovieSceneSection,EndTime: number): void;
	static SetEndFrameBounded(Section: MovieSceneSection,bIsBounded: boolean): void;
	static SetEndFrame(Section: MovieSceneSection,EndFrame: number): void;
	static HasStartFrame(Section: MovieSceneSection): boolean;
	static HasEndFrame(Section: MovieSceneSection): boolean;
	static GetStartFrameSeconds(Section: MovieSceneSection): number;
	static GetStartFrame(Section: MovieSceneSection): number;
	static GetParentSequenceFrame(Section: MovieSceneSubSection,InFrame: number,ParentSequence: MovieSceneSequence): number;
	static GetEndFrameSeconds(Section: MovieSceneSection): number;
	static GetEndFrame(Section: MovieSceneSection): number;
	static GetChannelsByType(Section: MovieSceneSection,ChannelType: UnrealEngineClass): MovieSceneScriptingChannel[];
	static GetChannels(Section: MovieSceneSection): MovieSceneScriptingChannel[];
	static GetAutoSizeStartFrameSeconds(Section: MovieSceneSection): number;
	static GetAutoSizeStartFrame(Section: MovieSceneSection): number;
	static GetAutoSizeHasStartFrame(Section: MovieSceneSection): boolean;
	static GetAutoSizeHasEndFrame(Section: MovieSceneSection): boolean;
	static GetAutoSizeEndFrameSeconds(Section: MovieSceneSection): number;
	static GetAutoSizeEndFrame(Section: MovieSceneSection): number;
	static GetAllChannels(Section: MovieSceneSection): MovieSceneScriptingChannel[];
	static FindChannelsByType(Section: MovieSceneSection,ChannelType: UnrealEngineClass): MovieSceneScriptingChannel[];
	static C(Other: UObject | any): MovieSceneSectionExtensions;
}

declare class MovieSceneSequenceExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneSequenceExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneSequenceExtensions;
	static GetDefaultObject(): MovieSceneSequenceExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneSequenceExtensions;
	static SortMarkedFrames(Sequence: MovieSceneSequence): void;
	static SetWorkRangeStart(InSequence: MovieSceneSequence,StartTimeInSeconds: number): void;
	static SetWorkRangeEnd(InSequence: MovieSceneSequence,EndTimeInSeconds: number): void;
	static SetViewRangeStart(InSequence: MovieSceneSequence,StartTimeInSeconds: number): void;
	static SetViewRangeEnd(InSequence: MovieSceneSequence,EndTimeInSeconds: number): void;
	static SetTickResolutionDirectly(Sequence: MovieSceneSequence,TickResolution: FrameRate): void;
	static SetTickResolution(Sequence: MovieSceneSequence,TickResolution: FrameRate): void;
	static SetReadOnly(Sequence: MovieSceneSequence,bInReadOnly: boolean): void;
	static SetPlaybackStartSeconds(Sequence: MovieSceneSequence,StartTime: number): void;
	static SetPlaybackStart(Sequence: MovieSceneSequence,StartFrame: number): void;
	static SetPlaybackEndSeconds(Sequence: MovieSceneSequence,EndTime: number): void;
	static SetPlaybackEnd(Sequence: MovieSceneSequence,EndFrame: number): void;
	static SetMarkedFrame(Sequence: MovieSceneSequence,InMarkIndex: number,InFrameNumber: FrameNumber): void;
	static SetEvaluationType(InSequence: MovieSceneSequence,InEvaluationType: EMovieSceneEvaluationType): void;
	static SetDisplayRate(Sequence: MovieSceneSequence,DisplayRate: FrameRate): void;
	static SetClockSource(InSequence: MovieSceneSequence,InClockSource: EUpdateClockSource): void;
	static ResolveBindingID(MasterSequence: MovieSceneSequence,InObjectBindingID: MovieSceneObjectBindingID): MovieSceneBindingProxy;
	static RemoveRootFolderFromSequence(Sequence: MovieSceneSequence,Folder: MovieSceneFolder): void;
	static RemoveMasterTrack(Sequence: MovieSceneSequence,MasterTrack: MovieSceneTrack): boolean;
	static MakeRangeSeconds(Sequence: MovieSceneSequence,StartTime: number,Duration: number): SequencerScriptingRange;
	static MakeRange(Sequence: MovieSceneSequence,StartFrame: number,Duration: number): SequencerScriptingRange;
	static MakeBindingID(MasterSequence: MovieSceneSequence,InBinding: MovieSceneBindingProxy,Space: EMovieSceneObjectBindingSpace): MovieSceneObjectBindingID;
	static LocateBoundObjects(Sequence: MovieSceneSequence,InBinding: MovieSceneBindingProxy,Context: UObject): UObject[];
	static IsReadOnly(Sequence: MovieSceneSequence): boolean;
	static GetWorkRangeStart(InSequence: MovieSceneSequence): number;
	static GetWorkRangeEnd(InSequence: MovieSceneSequence): number;
	static GetViewRangeStart(InSequence: MovieSceneSequence): number;
	static GetViewRangeEnd(InSequence: MovieSceneSequence): number;
	static GetTimecodeSource(Sequence: MovieSceneSequence): Timecode;
	static GetTickResolution(Sequence: MovieSceneSequence): FrameRate;
	static GetSpawnables(Sequence: MovieSceneSequence): MovieSceneBindingProxy[];
	static GetRootFoldersInSequence(Sequence: MovieSceneSequence): MovieSceneFolder[];
	static GetPossessables(Sequence: MovieSceneSequence): MovieSceneBindingProxy[];
	static GetPortableBindingID(MasterSequence: MovieSceneSequence,DestinationSequence: MovieSceneSequence,InBinding: MovieSceneBindingProxy): MovieSceneObjectBindingID;
	static GetPlaybackStartSeconds(Sequence: MovieSceneSequence): number;
	static GetPlaybackStart(Sequence: MovieSceneSequence): number;
	static GetPlaybackRange(Sequence: MovieSceneSequence): SequencerScriptingRange;
	static GetPlaybackEndSeconds(Sequence: MovieSceneSequence): number;
	static GetPlaybackEnd(Sequence: MovieSceneSequence): number;
	static GetMovieScene(Sequence: MovieSceneSequence): MovieScene;
	static GetMasterTracks(Sequence: MovieSceneSequence): MovieSceneTrack[];
	static GetMarkedFrames(Sequence: MovieSceneSequence): MovieSceneMarkedFrame[];
	static GetEvaluationType(InSequence: MovieSceneSequence): EMovieSceneEvaluationType;
	static GetDisplayRate(Sequence: MovieSceneSequence): FrameRate;
	static GetClockSource(InSequence: MovieSceneSequence): EUpdateClockSource;
	static GetBindings(Sequence: MovieSceneSequence): MovieSceneBindingProxy[];
	static GetBindingID(InBinding: MovieSceneBindingProxy): MovieSceneObjectBindingID;
	static FindNextMarkedFrame(Sequence: MovieSceneSequence,InFrameNumber: FrameNumber,bForward: boolean): number;
	static FindMasterTracksByType(Sequence: MovieSceneSequence,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static FindMasterTracksByExactType(Sequence: MovieSceneSequence,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static FindMarkedFrameByLabel(Sequence: MovieSceneSequence,InLabel: string): number;
	static FindMarkedFrameByFrameNumber(Sequence: MovieSceneSequence,InFrameNumber: FrameNumber): number;
	static FindBindingByName(Sequence: MovieSceneSequence,Name: string): MovieSceneBindingProxy;
	static FindBindingById(Sequence: MovieSceneSequence,BindingID: Guid): MovieSceneBindingProxy;
	static DeleteMarkedFrames(Sequence: MovieSceneSequence): void;
	static DeleteMarkedFrame(Sequence: MovieSceneSequence,DeleteIndex: number): void;
	static AddSpawnableFromInstance(Sequence: MovieSceneSequence,ObjectToSpawn: UObject): MovieSceneBindingProxy;
	static AddSpawnableFromClass(Sequence: MovieSceneSequence,ClassToSpawn: UnrealEngineClass): MovieSceneBindingProxy;
	static AddRootFolderToSequence(Sequence: MovieSceneSequence,NewFolderName: string): MovieSceneFolder;
	static AddPossessable(Sequence: MovieSceneSequence,ObjectToPossess: UObject): MovieSceneBindingProxy;
	static AddMasterTrack(Sequence: MovieSceneSequence,TrackType: UnrealEngineClass): MovieSceneTrack;
	static AddMarkedFrame(Sequence: MovieSceneSequence,InMarkedFrame: MovieSceneMarkedFrame): number;
	static C(Other: UObject | any): MovieSceneSequenceExtensions;
}

declare class MovieSceneTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneTrackExtensions;
	static GetDefaultObject(): MovieSceneTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneTrackExtensions;
	static SetTrackRowDisplayName(Track: MovieSceneTrack,InName: string,RowIndex: number): void;
	static SetSortingOrder(Track: MovieSceneTrack,SortingOrder: number): void;
	static SetSectionToKey(Track: MovieSceneTrack,Section: MovieSceneSection): void;
	static SetDisplayName(Track: MovieSceneTrack,InName: string): void;
	static SetColorTint(Track: MovieSceneTrack,ColorTint: Color): void;
	static RemoveSection(Track: MovieSceneTrack,Section: MovieSceneSection): void;
	static GetTrackRowDisplayName(Track: MovieSceneTrack,RowIndex: number): string;
	static GetSortingOrder(Track: MovieSceneTrack): number;
	static GetSectionToKey(Track: MovieSceneTrack): MovieSceneSection;
	static GetSections(Track: MovieSceneTrack): MovieSceneSection[];
	static GetDisplayName(Track: MovieSceneTrack): string;
	static GetColorTint(Track: MovieSceneTrack): Color;
	static AddSection(Track: MovieSceneTrack): MovieSceneSection;
	static C(Other: UObject | any): MovieSceneTrackExtensions;
}

declare class MovieSceneFloatVectorTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneFloatVectorTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneFloatVectorTrackExtensions;
	static GetDefaultObject(): MovieSceneFloatVectorTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneFloatVectorTrackExtensions;
	static SetNumChannelsUsed(Track: MovieSceneFloatVectorTrack,InNumChannelsUsed: number): void;
	static GetNumChannelsUsed(Track: MovieSceneFloatVectorTrack): number;
	static C(Other: UObject | any): MovieSceneFloatVectorTrackExtensions;
}

declare class MovieSceneDoubleVectorTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneDoubleVectorTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneDoubleVectorTrackExtensions;
	static GetDefaultObject(): MovieSceneDoubleVectorTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneDoubleVectorTrackExtensions;
	static SetNumChannelsUsed(Track: MovieSceneDoubleVectorTrack,InNumChannelsUsed: number): void;
	static GetNumChannelsUsed(Track: MovieSceneDoubleVectorTrack): number;
	static C(Other: UObject | any): MovieSceneDoubleVectorTrackExtensions;
}

declare class SequencerScriptingRangeExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SequencerScriptingRangeExtensions;
	static Find(Outer: UObject, ResourceName: string): SequencerScriptingRangeExtensions;
	static GetDefaultObject(): SequencerScriptingRangeExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerScriptingRangeExtensions;
	static SetStartSeconds(Range?: SequencerScriptingRange,Start?: number): {Range: SequencerScriptingRange};
	static SetStartFrame(Range?: SequencerScriptingRange,Start?: number): {Range: SequencerScriptingRange};
	static SetEndSeconds(Range?: SequencerScriptingRange,End?: number): {Range: SequencerScriptingRange};
	static SetEndFrame(Range?: SequencerScriptingRange,End?: number): {Range: SequencerScriptingRange};
	static RemoveStart(Range?: SequencerScriptingRange): {Range: SequencerScriptingRange};
	static RemoveEnd(Range?: SequencerScriptingRange): {Range: SequencerScriptingRange};
	static HasStart(Range: SequencerScriptingRange): boolean;
	static HasEnd(Range: SequencerScriptingRange): boolean;
	static GetStartSeconds(Range: SequencerScriptingRange): number;
	static GetStartFrame(Range: SequencerScriptingRange): number;
	static GetEndSeconds(Range: SequencerScriptingRange): number;
	static GetEndFrame(Range: SequencerScriptingRange): number;
	static C(Other: UObject | any): SequencerScriptingRangeExtensions;
}

declare class LevelSequenceEditorMenuContext extends UObject { 
	static Load(ResourceName: string): LevelSequenceEditorMenuContext;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceEditorMenuContext;
	static GetDefaultObject(): LevelSequenceEditorMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceEditorMenuContext;
	static C(Other: UObject | any): LevelSequenceEditorMenuContext;
}

declare class LevelSequenceFactoryNew extends Factory { 
	static Load(ResourceName: string): LevelSequenceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceFactoryNew;
	static GetDefaultObject(): LevelSequenceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceFactoryNew;
	static C(Other: UObject | any): LevelSequenceFactoryNew;
}

declare class SequencerChannelProxy { 
	ChannelName: string;
	Section: MovieSceneSection;
	clone() : SequencerChannelProxy;
	static C(Other: UObject | any): SequencerChannelProxy;
}

declare class LevelSequenceEditorBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LevelSequenceEditorBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceEditorBlueprintLibrary;
	static GetDefaultObject(): LevelSequenceEditorBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceEditorBlueprintLibrary;
	static SetTrackFilterEnabled(TrackFilterName: string,bEnabled: boolean): void;
	static SetSelectionRangeStart(NewFrame: number): void;
	static SetSelectionRangeEnd(NewFrame: number): void;
	static SetRandomColorForChannels(Class: UnrealEngineClass,Identifiers: string[]): void;
	static SetLockLevelSequence(bLock: boolean): void;
	static SetLockCameraCutToViewport(bLock: boolean): void;
	static SetCustomColorForChannels(Class: UnrealEngineClass,Identifiers: string[],NewColors: LinearColor[]): void;
	static SetCustomColorForChannel(Class: UnrealEngineClass,Identifier: string,NewColor: LinearColor): void;
	static SetCurrentTime(NewFrame: number): void;
	static SetCurrentLocalTime(NewFrame: number): void;
	static SelectTracks(Tracks: MovieSceneTrack[]): void;
	static SelectSections(Sections: MovieSceneSection[]): void;
	static SelectObjects(ObjectBinding: Guid[]): void;
	static SelectFolders(Folders: MovieSceneFolder[]): void;
	static SelectChannels(Channels: SequencerChannelProxy[]): void;
	static SelectBindings(ObjectBindings: MovieSceneBindingProxy[]): void;
	static RefreshCurrentLevelSequence(): void;
	static PlayTo(PlaybackParams: MovieSceneSequencePlaybackParams): void;
	static Play(): void;
	static Pause(): void;
	static OpenLevelSequence(LevelSequence: LevelSequence): boolean;
	static IsTrackFilterEnabled(TrackFilterName: string): boolean;
	static IsPlaying(): boolean;
	static IsLevelSequenceLocked(): boolean;
	static IsCameraCutLockedToViewport(): boolean;
	static HasCustomColorForChannel(Class: UnrealEngineClass,Identifier: string): boolean;
	static GetTrackFilterNames(): string[];
	static GetSubSequenceHierarchy(): MovieSceneSubSection[];
	static GetSelectionRangeStart(): number;
	static GetSelectionRangeEnd(): number;
	static GetSelectedTracks(): MovieSceneTrack[];
	static GetSelectedSections(): MovieSceneSection[];
	static GetSelectedObjects(): Guid[];
	static GetSelectedFolders(): MovieSceneFolder[];
	static GetSelectedChannels(): SequencerChannelProxy[];
	static GetSelectedBindings(): MovieSceneBindingProxy[];
	static GetFocusedLevelSequence(): LevelSequence;
	static GetCustomColorForChannel(Class: UnrealEngineClass,Identifier: string): LinearColor;
	static GetCurrentTime(): number;
	static GetCurrentLocalTime(): number;
	static GetCurrentLevelSequence(): LevelSequence;
	static GetBoundObjects(ObjectBinding: MovieSceneObjectBindingID): UObject[];
	static FocusParentSequence(): void;
	static FocusLevelSequence(SubSection: MovieSceneSubSection): void;
	static EmptySelection(): void;
	static DeleteColorForChannels(Class: UnrealEngineClass,Identifier?: string): {Identifier: string};
	static CloseLevelSequence(): void;
	static C(Other: UObject | any): LevelSequenceEditorBlueprintLibrary;
}

declare class MovieScenePasteTracksParams { 
	Sequence: MovieSceneSequence;
	Bindings: MovieSceneBindingProxy[];
	ParentFolder: MovieSceneFolder;
	Folders: MovieSceneFolder[];
	clone() : MovieScenePasteTracksParams;
	static C(Other: UObject | any): MovieScenePasteTracksParams;
}

declare class MovieScenePasteSectionsParams { 
	Tracks: MovieSceneTrack[];
	TrackRowIndices: number[];
	Time: FrameTime;
	clone() : MovieScenePasteSectionsParams;
	static C(Other: UObject | any): MovieScenePasteSectionsParams;
}

declare class MovieScenePasteFoldersParams { 
	Sequence: MovieSceneSequence;
	ParentFolder: MovieSceneFolder;
	clone() : MovieScenePasteFoldersParams;
	static C(Other: UObject | any): MovieScenePasteFoldersParams;
}

declare class MovieScenePasteBindingsParams { 
	Bindings: MovieSceneBindingProxy[];
	ParentFolder: MovieSceneFolder;
	Folders: MovieSceneFolder[];
	clone() : MovieScenePasteBindingsParams;
	static C(Other: UObject | any): MovieScenePasteBindingsParams;
}

declare class MovieSceneScriptingParams { 
	TimeUnit: ESequenceTimeUnit;
	clone() : MovieSceneScriptingParams;
	static C(Other: UObject | any): MovieSceneScriptingParams;
}

declare class LevelSequenceEditorSubsystem extends EditorSubsystem { 
	static Load(ResourceName: string): LevelSequenceEditorSubsystem;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceEditorSubsystem;
	static GetDefaultObject(): LevelSequenceEditorSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceEditorSubsystem;
	SyncSectionsUsingSourceTimecode(Sections: MovieSceneSection[]): void;
	SnapSectionsToTimelineUsingSourceTimecode(Sections: MovieSceneSection[]): void;
	ReplaceBindingWithActors(Actors: Actor[],ObjectBinding: MovieSceneBindingProxy): void;
	RemoveInvalidBindings(ObjectBinding: MovieSceneBindingProxy): void;
	RemoveAllBindings(ObjectBinding: MovieSceneBindingProxy): void;
	RemoveActorsFromBinding(Actors: Actor[],ObjectBinding: MovieSceneBindingProxy): void;
	RebindComponent(ComponentBindings: MovieSceneBindingProxy[],ComponentName: string): void;
	PasteTracks(TextToImport: string,PasteTracksParams: MovieScenePasteTracksParams,OutTracks?: MovieSceneTrack[]): {OutTracks: MovieSceneTrack[], $: boolean};
	PasteSections(TextToImport: string,PasteSectionsParams: MovieScenePasteSectionsParams,OutSections?: MovieSceneSection[]): {OutSections: MovieSceneSection[], $: boolean};
	PasteFolders(TextToImport: string,PasteFoldersParams: MovieScenePasteFoldersParams,OutFolders?: MovieSceneFolder[]): {OutFolders: MovieSceneFolder[], $: boolean};
	PasteBindings(TextToImport: string,PasteBindingsParams: MovieScenePasteBindingsParams,OutObjectBindings?: MovieSceneBindingProxy[]): {OutObjectBindings: MovieSceneBindingProxy[], $: boolean};
	FixActorReferences(): void;
	CreateCamera(bSpawnable: boolean,OutActor?: CineCameraActor): {OutActor: CineCameraActor, $: MovieSceneBindingProxy};
	CopyTracks(Tracks: MovieSceneTrack[],ExportedText?: string): {ExportedText: string};
	CopySections(Sections: MovieSceneSection[],ExportedText?: string): {ExportedText: string};
	CopyFolders(Folders: MovieSceneFolder[],ExportedText?: string): {ExportedText: string};
	CopyBindings(Bindings: MovieSceneBindingProxy[],ExportedText?: string): {ExportedText: string};
	ConvertToSpawnable(ObjectBinding: MovieSceneBindingProxy): MovieSceneBindingProxy[];
	ConvertToPossessable(ObjectBinding: MovieSceneBindingProxy): MovieSceneBindingProxy;
	BakeTransform(ObjectBindings: MovieSceneBindingProxy[],BakeInTime: FrameTime,BakeOutTime: FrameTime,BakeInterval: FrameTime,Params: MovieSceneScriptingParams): void;
	AddActorsToBinding(Actors: Actor[],ObjectBinding: MovieSceneBindingProxy): void;
	AddActors(Actors: Actor[]): MovieSceneBindingProxy[];
	static C(Other: UObject | any): LevelSequenceEditorSubsystem;
}

declare class LevelSequencePropertyTrackSettings { 
	ComponentPath: string;
	PropertyPath: string;
	clone() : LevelSequencePropertyTrackSettings;
	static C(Other: UObject | any): LevelSequencePropertyTrackSettings;
}

declare class LevelSequenceTrackSettings { 
	MatchingActorClass: SoftClassPath;
	DefaultTracks: SoftClassPath[];
	ExcludeDefaultTracks: SoftClassPath[];
	DefaultPropertyTracks: LevelSequencePropertyTrackSettings[];
	ExcludeDefaultPropertyTracks: LevelSequencePropertyTrackSettings[];
	clone() : LevelSequenceTrackSettings;
	static C(Other: UObject | any): LevelSequenceTrackSettings;
}

declare class LevelSequenceEditorSettings extends UObject { 
	TrackSettings: LevelSequenceTrackSettings[];
	bAutoBindToPIE: boolean;
	bAutoBindToSimulate: boolean;
	static Load(ResourceName: string): LevelSequenceEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceEditorSettings;
	static GetDefaultObject(): LevelSequenceEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceEditorSettings;
	static C(Other: UObject | any): LevelSequenceEditorSettings;
}

declare class LevelSequenceMasterSequenceSettings extends UObject { 
	MasterSequenceName: string;
	MasterSequenceSuffix: string;
	MasterSequenceBasePath: DirectoryPath;
	MasterSequenceNumShots: number;
	MasterSequenceLevelSequenceToDuplicate: LevelSequence;
	SubSequenceNames: string[];
	bInstanceSubSequences: boolean;
	static Load(ResourceName: string): LevelSequenceMasterSequenceSettings;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceMasterSequenceSettings;
	static GetDefaultObject(): LevelSequenceMasterSequenceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceMasterSequenceSettings;
	static C(Other: UObject | any): LevelSequenceMasterSequenceSettings;
}

declare class AnimationToolMenuContext extends UObject { 
	static Load(ResourceName: string): AnimationToolMenuContext;
	static Find(Outer: UObject, ResourceName: string): AnimationToolMenuContext;
	static GetDefaultObject(): AnimationToolMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationToolMenuContext;
	static C(Other: UObject | any): AnimationToolMenuContext;
}

declare class AnimSequenceConverterFactory extends AnimSequenceFactory { 
	static Load(ResourceName: string): AnimSequenceConverterFactory;
	static Find(Outer: UObject, ResourceName: string): AnimSequenceConverterFactory;
	static GetDefaultObject(): AnimSequenceConverterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimSequenceConverterFactory;
	static C(Other: UObject | any): AnimSequenceConverterFactory;
}

declare class BakeToControlRigSettings extends UObject { 
	bReduceKeys: boolean;
	Tolerance: number;
	static Load(ResourceName: string): BakeToControlRigSettings;
	static Find(Outer: UObject, ResourceName: string): BakeToControlRigSettings;
	static GetDefaultObject(): BakeToControlRigSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeToControlRigSettings;
	static C(Other: UObject | any): BakeToControlRigSettings;
}

declare class ControlRigBlueprintEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ControlRigBlueprintEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): ControlRigBlueprintEditorLibrary;
	static GetDefaultObject(): ControlRigBlueprintEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigBlueprintEditorLibrary;
	static SetPreviewMesh(InRigBlueprint: ControlRigBlueprint,PreviewMesh: SkeletalMesh,bMarkAsDirty: boolean): void;
	static RequestControlRigInit(InRigBlueprint: ControlRigBlueprint): void;
	static RequestAutoVMRecompilation(InRigBlueprint: ControlRigBlueprint): void;
	static RecompileVMIfRequired(InRigBlueprint: ControlRigBlueprint): void;
	static RecompileVM(InRigBlueprint: ControlRigBlueprint): void;
	static GetPreviewMesh(InRigBlueprint: ControlRigBlueprint): SkeletalMesh;
	static GetModel(InRigBlueprint: ControlRigBlueprint): RigVMGraph;
	static GetHierarchyController(InRigBlueprint: ControlRigBlueprint): RigHierarchyController;
	static GetHierarchy(InRigBlueprint: ControlRigBlueprint): RigHierarchy;
	static GetCurrentlyOpenRigBlueprints(): ControlRigBlueprint[];
	static GetController(InRigBlueprint: ControlRigBlueprint): RigVMController;
	static GetAvailableRigUnits(): Struct[];
	static CastToControlRigBlueprint(UObject: UObject,Branches?: ECastToControlRigBlueprintCases,AsControlRigBlueprint?: ControlRigBlueprint): {Branches: ECastToControlRigBlueprintCases, AsControlRigBlueprint: ControlRigBlueprint};
	static C(Other: UObject | any): ControlRigBlueprintEditorLibrary;
}

declare class ControlRigBlueprintFactory extends Factory { 
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): ControlRigBlueprintFactory;
	static Find(Outer: UObject, ResourceName: string): ControlRigBlueprintFactory;
	static GetDefaultObject(): ControlRigBlueprintFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigBlueprintFactory;
	static CreateNewControlRigAsset(InDesiredPackagePath: string): ControlRigBlueprint;
	static CreateControlRigFromSkeletalMeshOrSkeleton(InSelectedObject: UObject): ControlRigBlueprint;
	static C(Other: UObject | any): ControlRigBlueprintFactory;
}

declare class ControlRigShapeLibraryFactory extends Factory { 
	static Load(ResourceName: string): ControlRigShapeLibraryFactory;
	static Find(Outer: UObject, ResourceName: string): ControlRigShapeLibraryFactory;
	static GetDefaultObject(): ControlRigShapeLibraryFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigShapeLibraryFactory;
	static C(Other: UObject | any): ControlRigShapeLibraryFactory;
}

declare class ControlRigSequencerEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ControlRigSequencerEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): ControlRigSequencerEditorLibrary;
	static GetDefaultObject(): ControlRigSequencerEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigSequencerEditorLibrary;
	static TweenControlRig(LevelSequence: LevelSequence,ControlRig: ControlRig,TweenValue: number): boolean;
	static SnapControlRig(LevelSequence: LevelSequence,StartFrame: FrameNumber,EndFrame: FrameNumber,ChildrenToSnap: ControlRigSnapperSelection,ParentToSnap: ControlRigSnapperSelection,SnapSettings: ControlRigSnapSettings,TimeUnit: ESequenceTimeUnit): boolean;
	static ShowAllControls(InSection: MovieSceneSection): void;
	static SetLocalControlRigVector2Ds(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: Vector2D[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigVector2D(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: Vector2D,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigTransforms(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: Transform[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigTransformNoScales(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: TransformNoScale[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigTransformNoScale(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: TransformNoScale,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigTransform(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: Transform,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigScales(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: Vector[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigScale(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: Vector,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigRotators(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: Rotator[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigRotator(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: Rotator,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigPositions(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: Vector[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigPosition(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: Vector,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigInts(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: number[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigInt(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: number,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigFloats(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: number[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigFloat(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: number,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigEulerTransforms(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: EulerTransform[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigEulerTransform(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: EulerTransform,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetLocalControlRigBools(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],Values: boolean[],TimeUnit: ESequenceTimeUnit): void;
	static SetLocalControlRigBool(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,Value: boolean,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetControlsMask(InSection: MovieSceneSection,ControlNames: string[],bVisible: boolean): void;
	static SetControlRigWorldTransforms(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],WorldTransforms: Transform[],TimeUnit: ESequenceTimeUnit): void;
	static SetControlRigWorldTransform(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,WorldTransform: Transform,TimeUnit: ESequenceTimeUnit,bSetKey: boolean): void;
	static SetControlRigSpace(InSequence: LevelSequence,InControlRig: ControlRig,InControlName: string,InSpaceKey: RigElementKey,InTime: FrameNumber,TimeUnit: ESequenceTimeUnit): boolean;
	RenameControlRigControlChannels(InSequence: LevelSequence,InControlRig: ControlRig,InOldControlNames: string[],InNewControlNames: string[]): boolean;
	static MoveControlRigSpace(InSequence: LevelSequence,InControlRig: ControlRig,InControlName: string,InTime: FrameNumber,InNewTime: FrameNumber,TimeUnit: ESequenceTimeUnit): boolean;
	static LoadAnimSequenceIntoControlRigSection(MovieSceneSection: MovieSceneSection,AnimSequence: AnimSequence,SkelMeshComp: SkeletalMeshComponent,InStartFrame: FrameNumber,TimeUnit: ESequenceTimeUnit,bKeyReduce: boolean,Tolerance: number): boolean;
	static ImportFBXToControlRigTrack(World: World,InSequence: LevelSequence,InTrack: MovieSceneControlRigParameterTrack,InSection: MovieSceneControlRigParameterSection,SelectedControlRigNames: string[],ImportFBXControlRigSettings: MovieSceneUserImportFBXControlRigSettings,ImportFilename: string): boolean;
	static HideAllControls(InSection: MovieSceneSection): void;
	static GetWorldSpaceReferenceKey(): RigElementKey;
	static GetVisibleControlRigs(): ControlRig[];
	static GetSkeletalMeshComponentWorldTransforms(LevelSequence: LevelSequence,SkeletalMeshComponent: SkeletalMeshComponent,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit,ReferenceName: string): Transform[];
	static GetSkeletalMeshComponentWorldTransform(LevelSequence: LevelSequence,SkeletalMeshComponent: SkeletalMeshComponent,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit,ReferenceName: string): Transform;
	static GetLocalControlRigVector2Ds(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Vector2D[];
	static GetLocalControlRigVector2D(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Vector2D;
	static GetLocalControlRigTransforms(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Transform[];
	static GetLocalControlRigTransformNoScales(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): TransformNoScale[];
	static GetLocalControlRigTransformNoScale(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): TransformNoScale;
	static GetLocalControlRigTransform(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Transform;
	static GetLocalControlRigScales(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Vector[];
	static GetLocalControlRigScale(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Vector;
	static GetLocalControlRigRotators(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Rotator[];
	static GetLocalControlRigRotator(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Rotator;
	static GetLocalControlRigPositions(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Vector[];
	static GetLocalControlRigPosition(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Vector;
	static GetLocalControlRigInts(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): number[];
	static GetLocalControlRigInt(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): number;
	static GetLocalControlRigFloats(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): number[];
	static GetLocalControlRigFloat(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): number;
	static GetLocalControlRigEulerTransforms(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): EulerTransform[];
	static GetLocalControlRigEulerTransform(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): EulerTransform;
	static GetLocalControlRigBools(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): boolean[];
	static GetLocalControlRigBool(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): boolean;
	static GetDefaultParentKey(): RigElementKey;
	static GetControlsMask(InSection: MovieSceneSection,ControlName: string): boolean;
	static GetControlRigWorldTransforms(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Transform[];
	static GetControlRigWorldTransform(LevelSequence: LevelSequence,ControlRig: ControlRig,ControlName: string,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Transform;
	static GetControlRigs(LevelSequence: LevelSequence): ControlRigSequencerBindingProxy[];
	static GetActorWorldTransforms(LevelSequence: LevelSequence,Actor: Actor,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): Transform[];
	static GetActorWorldTransform(LevelSequence: LevelSequence,Actor: Actor,Frame: FrameNumber,TimeUnit: ESequenceTimeUnit): Transform;
	static FindOrCreateControlRigTrack(World: World,LevelSequence: LevelSequence,ControlRigClass: UnrealEngineClass,InBinding: MovieSceneBindingProxy): MovieSceneTrack;
	static FindOrCreateControlRigComponentTrack(World: World,LevelSequence: LevelSequence,InBinding: MovieSceneBindingProxy): MovieSceneTrack[];
	static DeleteControlRigSpace(InSequence: LevelSequence,InControlRig: ControlRig,InControlName: string,InTime: FrameNumber,TimeUnit: ESequenceTimeUnit): boolean;
	static CollapseControlRigAnimLayers(InSequence: LevelSequence,InTrack: MovieSceneControlRigParameterTrack,bKeyReduce: boolean,Tolerance: number): boolean;
	static BakeToControlRig(World: World,LevelSequence: LevelSequence,ControlRigClass: UnrealEngineClass,ExportOptions: AnimSeqExportOption,bReduceKeys: boolean,Tolerance: number,Binding: MovieSceneBindingProxy): boolean;
	static BakeControlRigSpace(InSequence: LevelSequence,InControlRig: ControlRig,InControlNames: string[],InSettings: RigSpacePickerBakeSettings,TimeUnit: ESequenceTimeUnit): boolean;
	static BakeConstraint(World: World,Constraint: TickableConstraint,Frames: FrameNumber[],TimeUnit: ESequenceTimeUnit): boolean;
	static C(Other: UObject | any): ControlRigSequencerEditorLibrary;
}

declare class ControlRigThumbnailRenderer extends SkeletalMeshThumbnailRenderer { 
	static Load(ResourceName: string): ControlRigThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): ControlRigThumbnailRenderer;
	static GetDefaultObject(): ControlRigThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigThumbnailRenderer;
	static C(Other: UObject | any): ControlRigThumbnailRenderer;
}

declare class ControlRigControlsProxy extends UObject { 
	bSelected: boolean;
	ControlName: string;
	static Load(ResourceName: string): ControlRigControlsProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigControlsProxy;
	static GetDefaultObject(): ControlRigControlsProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigControlsProxy;
	static C(Other: UObject | any): ControlRigControlsProxy;
}

declare class ControlRigTransformControlProxy extends ControlRigControlsProxy { 
	Transform: EulerTransform;
	static Load(ResourceName: string): ControlRigTransformControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigTransformControlProxy;
	static GetDefaultObject(): ControlRigTransformControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigTransformControlProxy;
	static C(Other: UObject | any): ControlRigTransformControlProxy;
}

declare class ControlRigEulerTransformControlProxy extends ControlRigControlsProxy { 
	Transform: EulerTransform;
	static Load(ResourceName: string): ControlRigEulerTransformControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigEulerTransformControlProxy;
	static GetDefaultObject(): ControlRigEulerTransformControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigEulerTransformControlProxy;
	static C(Other: UObject | any): ControlRigEulerTransformControlProxy;
}

declare class ControlRigTransformNoScaleControlProxy extends ControlRigControlsProxy { 
	Transform: TransformNoScale;
	static Load(ResourceName: string): ControlRigTransformNoScaleControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigTransformNoScaleControlProxy;
	static GetDefaultObject(): ControlRigTransformNoScaleControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigTransformNoScaleControlProxy;
	static C(Other: UObject | any): ControlRigTransformNoScaleControlProxy;
}

declare class ControlRigFloatControlProxy extends ControlRigControlsProxy { 
	float: number;
	static Load(ResourceName: string): ControlRigFloatControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigFloatControlProxy;
	static GetDefaultObject(): ControlRigFloatControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigFloatControlProxy;
	static C(Other: UObject | any): ControlRigFloatControlProxy;
}

declare class ControlRigIntegerControlProxy extends ControlRigControlsProxy { 
	Integer: number;
	static Load(ResourceName: string): ControlRigIntegerControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigIntegerControlProxy;
	static GetDefaultObject(): ControlRigIntegerControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigIntegerControlProxy;
	static C(Other: UObject | any): ControlRigIntegerControlProxy;
}

declare class ControlRigEnumControlProxyValue { 
	EnumType: Enum;
	EnumIndex: number;
	clone() : ControlRigEnumControlProxyValue;
	static C(Other: UObject | any): ControlRigEnumControlProxyValue;
}

declare class ControlRigEnumControlProxy extends ControlRigControlsProxy { 
	Enum: ControlRigEnumControlProxyValue;
	static Load(ResourceName: string): ControlRigEnumControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigEnumControlProxy;
	static GetDefaultObject(): ControlRigEnumControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigEnumControlProxy;
	static C(Other: UObject | any): ControlRigEnumControlProxy;
}

declare class ControlRigVectorControlProxy extends ControlRigControlsProxy { 
	Vector: Vector3f;
	static Load(ResourceName: string): ControlRigVectorControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigVectorControlProxy;
	static GetDefaultObject(): ControlRigVectorControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigVectorControlProxy;
	static C(Other: UObject | any): ControlRigVectorControlProxy;
}

declare class ControlRigVector2DControlProxy extends ControlRigControlsProxy { 
	Vector2D: Vector2D;
	static Load(ResourceName: string): ControlRigVector2DControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigVector2DControlProxy;
	static GetDefaultObject(): ControlRigVector2DControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigVector2DControlProxy;
	static C(Other: UObject | any): ControlRigVector2DControlProxy;
}

declare class ControlRigBoolControlProxy extends ControlRigControlsProxy { 
	bool: boolean;
	static Load(ResourceName: string): ControlRigBoolControlProxy;
	static Find(Outer: UObject, ResourceName: string): ControlRigBoolControlProxy;
	static GetDefaultObject(): ControlRigBoolControlProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigBoolControlProxy;
	static C(Other: UObject | any): ControlRigBoolControlProxy;
}

declare class ControlToProxyMap { 
	ControlToProxy: Map<string, ControlRigControlsProxy>;
	clone() : ControlToProxyMap;
	static C(Other: UObject | any): ControlToProxyMap;
}

declare class ControlRigDetailPanelControlProxies extends UObject { 
	AllProxies: Map<ControlRig, ControlToProxyMap>;
	SelectedProxies: ControlRigControlsProxy[];
	static Load(ResourceName: string): ControlRigDetailPanelControlProxies;
	static Find(Outer: UObject, ResourceName: string): ControlRigDetailPanelControlProxies;
	static GetDefaultObject(): ControlRigDetailPanelControlProxies;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigDetailPanelControlProxies;
	static C(Other: UObject | any): ControlRigDetailPanelControlProxies;
}

declare class ControlRigEditModeDelegateHelper extends UObject { 
	static Load(ResourceName: string): ControlRigEditModeDelegateHelper;
	static Find(Outer: UObject, ResourceName: string): ControlRigEditModeDelegateHelper;
	static GetDefaultObject(): ControlRigEditModeDelegateHelper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigEditModeDelegateHelper;
	PostPoseUpdate(): void;
	OnPoseInitialized(): void;
	static C(Other: UObject | any): ControlRigEditModeDelegateHelper;
}

declare class ControlRigEditModeSettings extends UObject { 
	bDisplayHierarchy: boolean;
	bDisplayNulls: boolean;
	bHideControlShapes: boolean;
	bShowAllProxyControls: boolean;
	bShowControlsAsOverlay: boolean;
	DrivenControlColor: LinearColor;
	bDisplayAxesOnSelection: boolean;
	AxisScale: number;
	bCoordSystemPerWidgetMode: boolean;
	bOnlySelectRigControls: boolean;
	bLocalTransformsInEachLocalSpace: boolean;
	GizmoScale: number;
	LastInViewportTweenWidgetLocation: Vector2D;
	static Load(ResourceName: string): ControlRigEditModeSettings;
	static Find(Outer: UObject, ResourceName: string): ControlRigEditModeSettings;
	static GetDefaultObject(): ControlRigEditModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigEditModeSettings;
	static C(Other: UObject | any): ControlRigEditModeSettings;
}

declare class ControlRigRigHierarchyToGraphDragAndDropContext { 
	DraggedElementKeys: RigElementKey[];
	clone() : ControlRigRigHierarchyToGraphDragAndDropContext;
	static C(Other: UObject | any): ControlRigRigHierarchyToGraphDragAndDropContext;
}

declare class ControlRigRigHierarchyDragAndDropContext { 
	DraggedElementKeys: RigElementKey[];
	TargetElementKey: RigElementKey;
	clone() : ControlRigRigHierarchyDragAndDropContext;
	static C(Other: UObject | any): ControlRigRigHierarchyDragAndDropContext;
}

declare class ControlRigGraphNodeContextMenuContext { 
	Graph: RigVMGraph;
	UNode: RigVMNode;
	Pin: RigVMPin;
	clone() : ControlRigGraphNodeContextMenuContext;
	static C(Other: UObject | any): ControlRigGraphNodeContextMenuContext;
}

declare class ControlRigContextMenuContext extends UObject { 
	static Load(ResourceName: string): ControlRigContextMenuContext;
	static Find(Outer: UObject, ResourceName: string): ControlRigContextMenuContext;
	static GetDefaultObject(): ControlRigContextMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigContextMenuContext;
	IsAltDown(): boolean;
	GetRigHierarchyToGraphDragAndDropContext(): ControlRigRigHierarchyToGraphDragAndDropContext;
	GetRigHierarchyDragAndDropContext(): ControlRigRigHierarchyDragAndDropContext;
	GetGraphNodeContextMenuContext(): ControlRigGraphNodeContextMenuContext;
	GetControlRigBlueprint(): ControlRigBlueprint;
	GetControlRig(): ControlRig;
	static C(Other: UObject | any): ControlRigContextMenuContext;
}

declare class ControlRigSkeletalMeshComponent extends DebugSkelMeshComponent { 
	static Load(ResourceName: string): ControlRigSkeletalMeshComponent;
	static Find(Outer: UObject, ResourceName: string): ControlRigSkeletalMeshComponent;
	static GetDefaultObject(): ControlRigSkeletalMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigSkeletalMeshComponent;
	static C(Other: UObject | any): ControlRigSkeletalMeshComponent;
}

declare class DetailsViewWrapperObject extends UObject { 
	static Load(ResourceName: string): DetailsViewWrapperObject;
	static Find(Outer: UObject, ResourceName: string): DetailsViewWrapperObject;
	static GetDefaultObject(): DetailsViewWrapperObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DetailsViewWrapperObject;
	static C(Other: UObject | any): DetailsViewWrapperObject;
}

declare class ControlRigArrayNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigArrayNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigArrayNodeSpawner;
	static GetDefaultObject(): ControlRigArrayNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigArrayNodeSpawner;
	static C(Other: UObject | any): ControlRigArrayNodeSpawner;
}

declare class ControlRigBranchNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigBranchNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigBranchNodeSpawner;
	static GetDefaultObject(): ControlRigBranchNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigBranchNodeSpawner;
	static C(Other: UObject | any): ControlRigBranchNodeSpawner;
}

declare class ControlRigEnumNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigEnumNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigEnumNodeSpawner;
	static GetDefaultObject(): ControlRigEnumNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigEnumNodeSpawner;
	static C(Other: UObject | any): ControlRigEnumNodeSpawner;
}

declare class ControlRigFunctionRefNodeSpawner extends BlueprintNodeSpawner { 
	ReferencedFunctionPtr: RigVMLibraryNode;
	ReferencedAssetObjectPath: string;
	ReferencedPublicFunctionData: ControlRigPublicFunctionData;
	bIsLocalFunction: boolean;
	static Load(ResourceName: string): ControlRigFunctionRefNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigFunctionRefNodeSpawner;
	static GetDefaultObject(): ControlRigFunctionRefNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigFunctionRefNodeSpawner;
	static C(Other: UObject | any): ControlRigFunctionRefNodeSpawner;
}

declare class ControlRigIfNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigIfNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigIfNodeSpawner;
	static GetDefaultObject(): ControlRigIfNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigIfNodeSpawner;
	static C(Other: UObject | any): ControlRigIfNodeSpawner;
}

declare class ControlRigInvokeEntryNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigInvokeEntryNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigInvokeEntryNodeSpawner;
	static GetDefaultObject(): ControlRigInvokeEntryNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigInvokeEntryNodeSpawner;
	static C(Other: UObject | any): ControlRigInvokeEntryNodeSpawner;
}

declare class ControlRigRerouteNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigRerouteNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigRerouteNodeSpawner;
	static GetDefaultObject(): ControlRigRerouteNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigRerouteNodeSpawner;
	static C(Other: UObject | any): ControlRigRerouteNodeSpawner;
}

declare class ControlRigSelectNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigSelectNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigSelectNodeSpawner;
	static GetDefaultObject(): ControlRigSelectNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigSelectNodeSpawner;
	static C(Other: UObject | any): ControlRigSelectNodeSpawner;
}

declare class ControlRigTemplateNodeSpawner extends BlueprintNodeSpawner { 
	TemplateNotation: string;
	static Load(ResourceName: string): ControlRigTemplateNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigTemplateNodeSpawner;
	static GetDefaultObject(): ControlRigTemplateNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigTemplateNodeSpawner;
	static C(Other: UObject | any): ControlRigTemplateNodeSpawner;
}

declare class ControlRigUnitNodeSpawner extends BlueprintNodeSpawner { 
	StructTemplate: ScriptStruct;
	static Load(ResourceName: string): ControlRigUnitNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigUnitNodeSpawner;
	static GetDefaultObject(): ControlRigUnitNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigUnitNodeSpawner;
	static C(Other: UObject | any): ControlRigUnitNodeSpawner;
}

declare class ControlRigVariableNodeSpawner extends BlueprintNodeSpawner { 
	static Load(ResourceName: string): ControlRigVariableNodeSpawner;
	static Find(Outer: UObject, ResourceName: string): ControlRigVariableNodeSpawner;
	static GetDefaultObject(): ControlRigVariableNodeSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigVariableNodeSpawner;
	static C(Other: UObject | any): ControlRigVariableNodeSpawner;
}

declare class ControlRigSequenceFactory extends Factory { 
	static Load(ResourceName: string): ControlRigSequenceFactory;
	static Find(Outer: UObject, ResourceName: string): ControlRigSequenceFactory;
	static GetDefaultObject(): ControlRigSequenceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigSequenceFactory;
	static C(Other: UObject | any): ControlRigSequenceFactory;
}

declare class ControlRigTrackFilter extends SequencerTrackFilterExtension { 
	static Load(ResourceName: string): ControlRigTrackFilter;
	static Find(Outer: UObject, ResourceName: string): ControlRigTrackFilter;
	static GetDefaultObject(): ControlRigTrackFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigTrackFilter;
	static C(Other: UObject | any): ControlRigTrackFilter;
}

declare class ControlRigPoseThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): ControlRigPoseThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): ControlRigPoseThumbnailRenderer;
	static GetDefaultObject(): ControlRigPoseThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlRigPoseThumbnailRenderer;
	static C(Other: UObject | any): ControlRigPoseThumbnailRenderer;
}

declare class CreateControlPoseAssetRigSettings extends UObject { 
	AssetName: string;
	static Load(ResourceName: string): CreateControlPoseAssetRigSettings;
	static Find(Outer: UObject, ResourceName: string): CreateControlPoseAssetRigSettings;
	static GetDefaultObject(): CreateControlPoseAssetRigSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CreateControlPoseAssetRigSettings;
	static C(Other: UObject | any): CreateControlPoseAssetRigSettings;
}

declare class BaseSequencerAnimTool extends Interface { 
	static Load(ResourceName: string): BaseSequencerAnimTool;
	static Find(Outer: UObject, ResourceName: string): BaseSequencerAnimTool;
	static GetDefaultObject(): BaseSequencerAnimTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseSequencerAnimTool;
	static C(Other: UObject | any): BaseSequencerAnimTool;
}

declare class MotionTrailToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): MotionTrailToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MotionTrailToolBuilder;
	static GetDefaultObject(): MotionTrailToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionTrailToolBuilder;
	static C(Other: UObject | any): MotionTrailToolBuilder;
}

declare class MotionTrailTool extends MultiSelectionTool { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	LeftClickBehavior: SingleClickInputBehavior;
	RightClickBehavior: SingleClickInputBehavior;
	static Load(ResourceName: string): MotionTrailTool;
	static Find(Outer: UObject, ResourceName: string): MotionTrailTool;
	static GetDefaultObject(): MotionTrailTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionTrailTool;
	static C(Other: UObject | any): MotionTrailTool;
}

declare class SequencerPivotToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): SequencerPivotToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SequencerPivotToolBuilder;
	static GetDefaultObject(): SequencerPivotToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerPivotToolBuilder;
	static C(Other: UObject | any): SequencerPivotToolBuilder;
}

declare class SequencerPivotTool extends MultiSelectionTool { 
	ClickBehavior: SingleClickInputBehavior;
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	static Load(ResourceName: string): SequencerPivotTool;
	static Find(Outer: UObject, ResourceName: string): SequencerPivotTool;
	static GetDefaultObject(): SequencerPivotTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerPivotTool;
	static C(Other: UObject | any): SequencerPivotTool;
}

declare class SequencerToolsEditMode extends BaseLegacyWidgetEdMode { 
	static Load(ResourceName: string): SequencerToolsEditMode;
	static Find(Outer: UObject, ResourceName: string): SequencerToolsEditMode;
	static GetDefaultObject(): SequencerToolsEditMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerToolsEditMode;
	static C(Other: UObject | any): SequencerToolsEditMode;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
}

declare class PluginReferenceMetadata { 
	Name: string;
	bOptional: boolean;
	bEnabled: boolean;
	clone() : PluginReferenceMetadata;
	static C(Other: UObject | any): PluginReferenceMetadata;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	bIsEnabledByDefault: boolean;
	bExplicitlyLoaded: boolean;
	Plugins: PluginReferenceMetadata[];
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	GetAvailablePluginDependencies(): string[];
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class BasicLineSetComponentBase extends MeshComponent { 
	LineMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	Color: Color;
	Size: number;
	DepthBias: number;
	static Load(ResourceName: string): BasicLineSetComponentBase;
	static Find(Outer: UObject, ResourceName: string): BasicLineSetComponentBase;
	static GetDefaultObject(): BasicLineSetComponentBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicLineSetComponentBase;
	static C(Other: UObject | any): BasicLineSetComponentBase;
}

declare class Basic2DLineSetComponent extends BasicLineSetComponentBase { 
	static Load(ResourceName: string): Basic2DLineSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic2DLineSetComponent;
	static GetDefaultObject(): Basic2DLineSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic2DLineSetComponent;
	static C(Other: UObject | any): Basic2DLineSetComponent;
}

declare class Basic3DLineSetComponent extends BasicLineSetComponentBase { 
	static Load(ResourceName: string): Basic3DLineSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic3DLineSetComponent;
	static GetDefaultObject(): Basic3DLineSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic3DLineSetComponent;
	static C(Other: UObject | any): Basic3DLineSetComponent;
}

declare class BasicPointSetComponentBase extends MeshComponent { 
	PointMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	Color: Color;
	Size: number;
	DepthBias: number;
	static Load(ResourceName: string): BasicPointSetComponentBase;
	static Find(Outer: UObject, ResourceName: string): BasicPointSetComponentBase;
	static GetDefaultObject(): BasicPointSetComponentBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicPointSetComponentBase;
	static C(Other: UObject | any): BasicPointSetComponentBase;
}

declare class Basic2DPointSetComponent extends BasicPointSetComponentBase { 
	static Load(ResourceName: string): Basic2DPointSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic2DPointSetComponent;
	static GetDefaultObject(): Basic2DPointSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic2DPointSetComponent;
	static C(Other: UObject | any): Basic2DPointSetComponent;
}

declare class Basic3DPointSetComponent extends BasicPointSetComponentBase { 
	static Load(ResourceName: string): Basic3DPointSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic3DPointSetComponent;
	static GetDefaultObject(): Basic3DPointSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic3DPointSetComponent;
	static C(Other: UObject | any): Basic3DPointSetComponent;
}

declare class BasicTriangleSetComponentBase extends MeshComponent { 
	TriangleMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	Color: Color;
	Normal: Vector3f;
	static Load(ResourceName: string): BasicTriangleSetComponentBase;
	static Find(Outer: UObject, ResourceName: string): BasicTriangleSetComponentBase;
	static GetDefaultObject(): BasicTriangleSetComponentBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicTriangleSetComponentBase;
	static C(Other: UObject | any): BasicTriangleSetComponentBase;
}

declare class Basic2DTriangleSetComponent extends BasicTriangleSetComponentBase { 
	static Load(ResourceName: string): Basic2DTriangleSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic2DTriangleSetComponent;
	static GetDefaultObject(): Basic2DTriangleSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic2DTriangleSetComponent;
	static C(Other: UObject | any): Basic2DTriangleSetComponent;
}

declare class Basic3DTriangleSetComponent extends BasicTriangleSetComponentBase { 
	static Load(ResourceName: string): Basic3DTriangleSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic3DTriangleSetComponent;
	static GetDefaultObject(): Basic3DTriangleSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic3DTriangleSetComponent;
	static C(Other: UObject | any): Basic3DTriangleSetComponent;
}

declare class UVEditorMechanicAdapterTool extends InteractiveTool { 
	static Load(ResourceName: string): UVEditorMechanicAdapterTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorMechanicAdapterTool;
	static GetDefaultObject(): UVEditorMechanicAdapterTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorMechanicAdapterTool;
	static C(Other: UObject | any): UVEditorMechanicAdapterTool;
}

declare class UVToolContextObject extends UObject { 
	static Load(ResourceName: string): UVToolContextObject;
	static Find(Outer: UObject, ResourceName: string): UVToolContextObject;
	static GetDefaultObject(): UVToolContextObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolContextObject;
	static C(Other: UObject | any): UVToolContextObject;
}

declare class UVToolAssetInputsContext extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolAssetInputsContext;
	static Find(Outer: UObject, ResourceName: string): UVToolAssetInputsContext;
	static GetDefaultObject(): UVToolAssetInputsContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAssetInputsContext;
	static C(Other: UObject | any): UVToolAssetInputsContext;
}

declare class UVToolViewportButtonsAPI extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolViewportButtonsAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolViewportButtonsAPI;
	static GetDefaultObject(): UVToolViewportButtonsAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolViewportButtonsAPI;
	static C(Other: UObject | any): UVToolViewportButtonsAPI;
}

declare class UVUnwrapDynamicMesh extends Interface { 
	static Load(ResourceName: string): UVUnwrapDynamicMesh;
	static Find(Outer: UObject, ResourceName: string): UVUnwrapDynamicMesh;
	static GetDefaultObject(): UVUnwrapDynamicMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVUnwrapDynamicMesh;
	static C(Other: UObject | any): UVUnwrapDynamicMesh;
}

declare class UVEditorToolMeshInput extends ToolTarget { 
	UnwrapPreview: MeshOpPreviewWithBackgroundCompute;
	AppliedPreview: MeshOpPreviewWithBackgroundCompute;
	WireframeDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): UVEditorToolMeshInput;
	static Find(Outer: UObject, ResourceName: string): UVEditorToolMeshInput;
	static GetDefaultObject(): UVEditorToolMeshInput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorToolMeshInput;
	static C(Other: UObject | any): UVEditorToolMeshInput;
}

declare class UVToolSelectionHighlightMechanic extends InteractionMechanic { 
	UnwrapGeometryActor: PreviewGeometryActor;
	TriangleSetMaterial: MaterialInstanceDynamic;
	UnwrapStationaryGeometryActor: PreviewGeometryActor;
	LivePreviewGeometryActor: PreviewGeometryActor;
	static Load(ResourceName: string): UVToolSelectionHighlightMechanic;
	static Find(Outer: UObject, ResourceName: string): UVToolSelectionHighlightMechanic;
	static GetDefaultObject(): UVToolSelectionHighlightMechanic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolSelectionHighlightMechanic;
	static C(Other: UObject | any): UVToolSelectionHighlightMechanic;
}

declare class UVToolEmitChangeAPI extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolEmitChangeAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolEmitChangeAPI;
	static GetDefaultObject(): UVToolEmitChangeAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolEmitChangeAPI;
	static C(Other: UObject | any): UVToolEmitChangeAPI;
}

declare class UVToolLivePreviewAPI extends UVToolContextObject { 
	World: World;
	InputRouter: InputRouter;
	static Load(ResourceName: string): UVToolLivePreviewAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolLivePreviewAPI;
	static GetDefaultObject(): UVToolLivePreviewAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolLivePreviewAPI;
	static C(Other: UObject | any): UVToolLivePreviewAPI;
}

declare class UVEditorMeshSelectionMechanic extends InteractionMechanic { 
	SelectionAPI: UVToolSelectionAPI;
	ViewportButtonsAPI: UVToolViewportButtonsAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	LivePreviewAPI: UVToolLivePreviewAPI;
	UnwrapClickTargetRouter: LocalSingleClickInputBehavior;
	LivePreviewClickTargetRouter: LocalSingleClickInputBehavior;
	UnwrapHoverBehaviorTargetRouter: LocalMouseHoverBehavior;
	LivePreviewHoverBehaviorTargetRouter: LocalMouseHoverBehavior;
	MarqueeMechanic: RectangleMarqueeMechanic;
	LivePreviewMarqueeMechanic: RectangleMarqueeMechanic;
	HoverTriangleSetMaterial: MaterialInstanceDynamic;
	HoverGeometryActor: PreviewGeometryActor;
	LivePreviewBehaviorSet: InputBehaviorSet;
	LivePreviewBehaviorSource: LocalInputBehaviorSource;
	LivePreviewHoverGeometryActor: PreviewGeometryActor;
	static Load(ResourceName: string): UVEditorMeshSelectionMechanic;
	static Find(Outer: UObject, ResourceName: string): UVEditorMeshSelectionMechanic;
	static GetDefaultObject(): UVEditorMeshSelectionMechanic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorMeshSelectionMechanic;
	static C(Other: UObject | any): UVEditorMeshSelectionMechanic;
}

declare class UVToolSelectionAPI extends UVToolContextObject { 
	Targets: UVEditorToolMeshInput[];
	MechanicAdapter: UVEditorMechanicAdapterTool;
	HighlightMechanic: UVToolSelectionHighlightMechanic;
	SelectionMechanic: UVEditorMeshSelectionMechanic;
	EmitChangeAPI: UVToolEmitChangeAPI;
	static Load(ResourceName: string): UVToolSelectionAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolSelectionAPI;
	static GetDefaultObject(): UVToolSelectionAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolSelectionAPI;
	static C(Other: UObject | any): UVToolSelectionAPI;
}

declare class UVToolAction extends UObject { 
	SelectionAPI: UVToolSelectionAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	static Load(ResourceName: string): UVToolAction;
	static Find(Outer: UObject, ResourceName: string): UVToolAction;
	static GetDefaultObject(): UVToolAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAction;
	static C(Other: UObject | any): UVToolAction;
}

declare class UVSeamSewAction extends UVToolAction { 
	static Load(ResourceName: string): UVSeamSewAction;
	static Find(Outer: UObject, ResourceName: string): UVSeamSewAction;
	static GetDefaultObject(): UVSeamSewAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSeamSewAction;
	static C(Other: UObject | any): UVSeamSewAction;
}

declare class UVSplitAction extends UVToolAction { 
	static Load(ResourceName: string): UVSplitAction;
	static Find(Outer: UObject, ResourceName: string): UVSplitAction;
	static GetDefaultObject(): UVSplitAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSplitAction;
	static C(Other: UObject | any): UVSplitAction;
}

declare class UDIMBlock { 
	UDIM: number;
	clone() : UDIMBlock;
	static C(Other: UObject | any): UDIMBlock;
}

declare class UVTool2DViewportAPI extends UVToolContextObject { 
	UDIMBlocks: UDIMBlock[];
	bDrawGrid: boolean;
	bDrawRulers: boolean;
	static Load(ResourceName: string): UVTool2DViewportAPI;
	static Find(Outer: UObject, ResourceName: string): UVTool2DViewportAPI;
	static GetDefaultObject(): UVTool2DViewportAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVTool2DViewportAPI;
	static C(Other: UObject | any): UVTool2DViewportAPI;
}

declare class UVToolAssetAndChannelAPI extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolAssetAndChannelAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolAssetAndChannelAPI;
	static GetDefaultObject(): UVToolAssetAndChannelAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAssetAndChannelAPI;
	static C(Other: UObject | any): UVToolAssetAndChannelAPI;
}

declare class UVToolAABBTreeStorage extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolAABBTreeStorage;
	static Find(Outer: UObject, ResourceName: string): UVToolAABBTreeStorage;
	static GetDefaultObject(): UVToolAABBTreeStorage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAABBTreeStorage;
	static C(Other: UObject | any): UVToolAABBTreeStorage;
}

declare class UVEditorToolPropertiesAPI extends UVToolContextObject { 
	ToolDisplayProperties: UObject;
	static Load(ResourceName: string): UVEditorToolPropertiesAPI;
	static Find(Outer: UObject, ResourceName: string): UVEditorToolPropertiesAPI;
	static GetDefaultObject(): UVEditorToolPropertiesAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorToolPropertiesAPI;
	static C(Other: UObject | any): UVEditorToolPropertiesAPI;
}

declare type EUVEditorRecomputeUVsPropertiesIslandMode = 'PolyGroups' | 'ExistingUVs' | 'EUVEditorRecomputeUVsPropertiesIslandMode_MAX';
declare var EUVEditorRecomputeUVsPropertiesIslandMode : { PolyGroups:'PolyGroups',ExistingUVs:'ExistingUVs',EUVEditorRecomputeUVsPropertiesIslandMode_MAX:'EUVEditorRecomputeUVsPropertiesIslandMode_MAX', };
declare type EUVEditorRecomputeUVsPropertiesUnwrapType = 'ExpMap' | 'Conformal' | 'SpectralConformal' | 'IslandMerging' | 'EUVEditorRecomputeUVsPropertiesUnwrapType_MAX';
declare var EUVEditorRecomputeUVsPropertiesUnwrapType : { ExpMap:'ExpMap',Conformal:'Conformal',SpectralConformal:'SpectralConformal',IslandMerging:'IslandMerging',EUVEditorRecomputeUVsPropertiesUnwrapType_MAX:'EUVEditorRecomputeUVsPropertiesUnwrapType_MAX', };
declare type EUVEditorRecomputeUVsToolOrientationMode = 'None' | 'MinBounds' | 'EUVEditorRecomputeUVsToolOrientationMode_MAX';
declare var EUVEditorRecomputeUVsToolOrientationMode : { None:'None',MinBounds:'MinBounds',EUVEditorRecomputeUVsToolOrientationMode_MAX:'EUVEditorRecomputeUVsToolOrientationMode_MAX', };
declare type EUVEditorRecomputeUVsPropertiesLayoutType = 'None' | 'Repack' | 'NormalizeToExistingBounds' | 'NormalizeToBounds' | 'NormalizeToWorld' | 'EUVEditorRecomputeUVsPropertiesLayoutType_MAX';
declare var EUVEditorRecomputeUVsPropertiesLayoutType : { None:'None',Repack:'Repack',NormalizeToExistingBounds:'NormalizeToExistingBounds',NormalizeToBounds:'NormalizeToBounds',NormalizeToWorld:'NormalizeToWorld',EUVEditorRecomputeUVsPropertiesLayoutType_MAX:'EUVEditorRecomputeUVsPropertiesLayoutType_MAX', };
declare class UVEditorRecomputeUVsToolProperties extends InteractiveToolPropertySet { 
	bEnablePolygroupSupport: boolean;
	IslandGeneration: EUVEditorRecomputeUVsPropertiesIslandMode;
	UnwrapType: EUVEditorRecomputeUVsPropertiesUnwrapType;
	AutoRotation: EUVEditorRecomputeUVsToolOrientationMode;
	bPreserveIrregularity: boolean;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	LayoutType: EUVEditorRecomputeUVsPropertiesLayoutType;
	TextureResolution: number;
	NormalizeScale: number;
	bEnableUDIMLayout: boolean;
	bUDIMCVAREnabled: boolean;
	static Load(ResourceName: string): UVEditorRecomputeUVsToolProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsToolProperties;
	static GetDefaultObject(): UVEditorRecomputeUVsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsToolProperties;
	static C(Other: UObject | any): UVEditorRecomputeUVsToolProperties;
}

declare class UVEditorRecomputeUVsOpFactory extends UObject { 
	Settings: UVEditorRecomputeUVsToolProperties;
	static Load(ResourceName: string): UVEditorRecomputeUVsOpFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsOpFactory;
	static GetDefaultObject(): UVEditorRecomputeUVsOpFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsOpFactory;
	static C(Other: UObject | any): UVEditorRecomputeUVsOpFactory;
}

declare type EUVEditorUVLayoutType = 'Transform' | 'Stack' | 'Repack' | 'EUVEditorUVLayoutType_MAX';
declare var EUVEditorUVLayoutType : { Transform:'Transform',Stack:'Stack',Repack:'Repack',EUVEditorUVLayoutType_MAX:'EUVEditorUVLayoutType_MAX', };
declare class UVEditorUVLayoutProperties extends InteractiveToolPropertySet { 
	LayoutType: EUVEditorUVLayoutType;
	TextureResolution: number;
	Scale: number;
	Translation: Vector2D;
	bAllowFlips: boolean;
	bEnableUDIMLayout: boolean;
	bUDIMCVAREnabled: boolean;
	static Load(ResourceName: string): UVEditorUVLayoutProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVLayoutProperties;
	static GetDefaultObject(): UVEditorUVLayoutProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVLayoutProperties;
	static C(Other: UObject | any): UVEditorUVLayoutProperties;
}

declare class UVEditorUVLayoutOperatorFactory extends UObject { 
	Settings: UVEditorUVLayoutProperties;
	static Load(ResourceName: string): UVEditorUVLayoutOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVLayoutOperatorFactory;
	static GetDefaultObject(): UVEditorUVLayoutOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVLayoutOperatorFactory;
	static C(Other: UObject | any): UVEditorUVLayoutOperatorFactory;
}

declare class UVEditorUVTransformPropertiesBase extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorUVTransformPropertiesBase;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVTransformPropertiesBase;
	static GetDefaultObject(): UVEditorUVTransformPropertiesBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVTransformPropertiesBase;
	static C(Other: UObject | any): UVEditorUVTransformPropertiesBase;
}

declare type EUVEditorTranslationMode = 'Relative' | 'Absolute' | 'EUVEditorTranslationMode_MAX';
declare var EUVEditorTranslationMode : { Relative:'Relative',Absolute:'Absolute',EUVEditorTranslationMode_MAX:'EUVEditorTranslationMode_MAX', };
declare type EUVEditorPivotType = 'BoundingBoxCenter' | 'Origin' | 'IndividualBoundingBoxCenter' | 'Manual' | 'EUVEditorPivotType_MAX';
declare var EUVEditorPivotType : { BoundingBoxCenter:'BoundingBoxCenter',Origin:'Origin',IndividualBoundingBoxCenter:'IndividualBoundingBoxCenter',Manual:'Manual',EUVEditorPivotType_MAX:'EUVEditorPivotType_MAX', };
declare class UVEditorUVTransformProperties extends UVEditorUVTransformPropertiesBase { 
	Scale: Vector2D;
	Rotation: number;
	Translation: Vector2D;
	TranslationMode: EUVEditorTranslationMode;
	PivotMode: EUVEditorPivotType;
	ManualPivot: Vector2D;
	QuickTranslateOffset: number;
	QuickRotationOffset: number;
	QuickTranslation: Vector2D;
	QuickRotation: number;
	static Load(ResourceName: string): UVEditorUVTransformProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVTransformProperties;
	static GetDefaultObject(): UVEditorUVTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVTransformProperties;
	static C(Other: UObject | any): UVEditorUVTransformProperties;
}

declare class UVEditorUVQuickTransformProperties extends UVEditorUVTransformProperties { 
	static Load(ResourceName: string): UVEditorUVQuickTransformProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVQuickTransformProperties;
	static GetDefaultObject(): UVEditorUVQuickTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVQuickTransformProperties;
	static C(Other: UObject | any): UVEditorUVQuickTransformProperties;
}

declare type EUVEditorAlignAnchor = 'BoundingBox' | 'UDIMTile' | 'Manual' | 'EUVEditorAlignAnchor_MAX';
declare var EUVEditorAlignAnchor : { BoundingBox:'BoundingBox',UDIMTile:'UDIMTile',Manual:'Manual',EUVEditorAlignAnchor_MAX:'EUVEditorAlignAnchor_MAX', };
declare type EUVEditorAlignDirection = 'None' | 'Top' | 'Bottom' | 'Left' | 'Right' | 'CenterVertically' | 'CenterHorizontally' | 'EUVEditorAlignDirection_MAX';
declare var EUVEditorAlignDirection : { None:'None',Top:'Top',Bottom:'Bottom',Left:'Left',Right:'Right',CenterVertically:'CenterVertically',CenterHorizontally:'CenterHorizontally',EUVEditorAlignDirection_MAX:'EUVEditorAlignDirection_MAX', };
declare type EUVEditorAlignDistributeGroupingMode = 'IndividualBoundingBoxes' | 'EnclosingBoundingBox' | 'IndividualVertices' | 'EUVEditorAlignDistributeGroupingMode_MAX';
declare var EUVEditorAlignDistributeGroupingMode : { IndividualBoundingBoxes:'IndividualBoundingBoxes',EnclosingBoundingBox:'EnclosingBoundingBox',IndividualVertices:'IndividualVertices',EUVEditorAlignDistributeGroupingMode_MAX:'EUVEditorAlignDistributeGroupingMode_MAX', };
declare class UVEditorUVAlignProperties extends UVEditorUVTransformPropertiesBase { 
	AlignAnchor: EUVEditorAlignAnchor;
	ManualAnchor: Vector2D;
	AlignDirection: EUVEditorAlignDirection;
	Grouping: EUVEditorAlignDistributeGroupingMode;
	static Load(ResourceName: string): UVEditorUVAlignProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVAlignProperties;
	static GetDefaultObject(): UVEditorUVAlignProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVAlignProperties;
	static C(Other: UObject | any): UVEditorUVAlignProperties;
}

declare type EUVEditorDistributeMode = 'None' | 'VerticalSpace' | 'HorizontalSpace' | 'TopEdges' | 'BottomEdges' | 'LeftEdges' | 'RightEdges' | 'CentersVertically' | 'CentersHorizontally' | 'MinimallyRemoveOverlap' | 'EUVEditorDistributeMode_MAX';
declare var EUVEditorDistributeMode : { None:'None',VerticalSpace:'VerticalSpace',HorizontalSpace:'HorizontalSpace',TopEdges:'TopEdges',BottomEdges:'BottomEdges',LeftEdges:'LeftEdges',RightEdges:'RightEdges',CentersVertically:'CentersVertically',CentersHorizontally:'CentersHorizontally',MinimallyRemoveOverlap:'MinimallyRemoveOverlap',EUVEditorDistributeMode_MAX:'EUVEditorDistributeMode_MAX', };
declare class UVEditorUVDistributeProperties extends UVEditorUVTransformPropertiesBase { 
	DistributeMode: EUVEditorDistributeMode;
	Grouping: EUVEditorAlignDistributeGroupingMode;
	bEnableManualDistances: boolean;
	ManualExtent: number;
	ManualSpacing: number;
	static Load(ResourceName: string): UVEditorUVDistributeProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVDistributeProperties;
	static GetDefaultObject(): UVEditorUVDistributeProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVDistributeProperties;
	static C(Other: UObject | any): UVEditorUVDistributeProperties;
}

declare class UVEditorUVTransformOperatorFactory extends UObject { 
	Settings: UVEditorUVTransformPropertiesBase;
	static Load(ResourceName: string): UVEditorUVTransformOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVTransformOperatorFactory;
	static GetDefaultObject(): UVEditorUVTransformOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVTransformOperatorFactory;
	static C(Other: UObject | any): UVEditorUVTransformOperatorFactory;
}

declare class UVToolSupportsSelection extends Interface { 
	static Load(ResourceName: string): UVToolSupportsSelection;
	static Find(Outer: UObject, ResourceName: string): UVToolSupportsSelection;
	static GetDefaultObject(): UVToolSupportsSelection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolSupportsSelection;
	static C(Other: UObject | any): UVToolSupportsSelection;
}

declare class UVEditorChannelEditToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorChannelEditToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditToolBuilder;
	static GetDefaultObject(): UVEditorChannelEditToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditToolBuilder;
	static C(Other: UObject | any): UVEditorChannelEditToolBuilder;
}

declare type EChannelEditToolAction = 'NoAction' | 'Add' | 'Copy' | 'Delete' | 'EChannelEditToolAction_MAX';
declare var EChannelEditToolAction : { NoAction:'NoAction',Add:'Add',Copy:'Copy',Delete:'Delete',EChannelEditToolAction_MAX:'EChannelEditToolAction_MAX', };
declare class UVEditorChannelEditSettings extends InteractiveToolPropertySet { 
	Action: EChannelEditToolAction;
	static Load(ResourceName: string): UVEditorChannelEditSettings;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditSettings;
	static GetDefaultObject(): UVEditorChannelEditSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditSettings;
	static C(Other: UObject | any): UVEditorChannelEditSettings;
}

declare class UVEditorChannelEditTargetProperties extends InteractiveToolPropertySet { 
	Asset: string;
	TargetChannel: string;
	ReferenceChannel: string;
	bActionNeedsAsset: boolean;
	bActionNeedsReference: boolean;
	bActionNeedsTarget: boolean;
	static Load(ResourceName: string): UVEditorChannelEditTargetProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditTargetProperties;
	static GetDefaultObject(): UVEditorChannelEditTargetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditTargetProperties;
	GetUVChannelNames(): string[];
	GetAssetNames(): string[];
	static C(Other: UObject | any): UVEditorChannelEditTargetProperties;
}

declare class UVEditorChannelEditAddProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditAddProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditAddProperties;
	static GetDefaultObject(): UVEditorChannelEditAddProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditAddProperties;
	static C(Other: UObject | any): UVEditorChannelEditAddProperties;
}

declare class UVEditorChannelEditCopyProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditCopyProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditCopyProperties;
	static GetDefaultObject(): UVEditorChannelEditCopyProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditCopyProperties;
	static C(Other: UObject | any): UVEditorChannelEditCopyProperties;
}

declare class UVEditorChannelEditDeleteProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditDeleteProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditDeleteProperties;
	static GetDefaultObject(): UVEditorChannelEditDeleteProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditDeleteProperties;
	static C(Other: UObject | any): UVEditorChannelEditDeleteProperties;
}

declare class UVEditorChannelEditToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditToolActionPropertySet;
	static GetDefaultObject(): UVEditorChannelEditToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditToolActionPropertySet;
	Apply(): void;
	static C(Other: UObject | any): UVEditorChannelEditToolActionPropertySet;
}

declare class UVEditorChannelEditTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	ToolActions: UVEditorChannelEditToolActionPropertySet;
	ActionSelectionProperties: UVEditorChannelEditSettings;
	SourceChannelProperties: UVEditorChannelEditTargetProperties;
	AddActionProperties: UVEditorChannelEditAddProperties;
	CopyActionProperties: UVEditorChannelEditCopyProperties;
	DeleteActionProperties: UVEditorChannelEditDeleteProperties;
	EmitChangeAPI: UVToolEmitChangeAPI;
	static Load(ResourceName: string): UVEditorChannelEditTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditTool;
	static GetDefaultObject(): UVEditorChannelEditTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditTool;
	static C(Other: UObject | any): UVEditorChannelEditTool;
}

declare class UVEditorLayoutToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorLayoutToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorLayoutToolBuilder;
	static GetDefaultObject(): UVEditorLayoutToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorLayoutToolBuilder;
	static C(Other: UObject | any): UVEditorLayoutToolBuilder;
}

declare class UVEditorLayoutTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorUVLayoutProperties;
	Factories: UVEditorUVLayoutOperatorFactory[];
	UVToolSelectionAPI: UVToolSelectionAPI;
	static Load(ResourceName: string): UVEditorLayoutTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorLayoutTool;
	static GetDefaultObject(): UVEditorLayoutTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorLayoutTool;
	static C(Other: UObject | any): UVEditorLayoutTool;
}

declare class UVEditorRecomputeUVsToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorRecomputeUVsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsToolBuilder;
	static GetDefaultObject(): UVEditorRecomputeUVsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsToolBuilder;
	static C(Other: UObject | any): UVEditorRecomputeUVsToolBuilder;
}

declare class UVEditorRecomputeUVsTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorRecomputeUVsToolProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	Factories: UVEditorRecomputeUVsOpFactory[];
	UVToolSelectionAPI: UVToolSelectionAPI;
	static Load(ResourceName: string): UVEditorRecomputeUVsTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsTool;
	static GetDefaultObject(): UVEditorRecomputeUVsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsTool;
	static C(Other: UObject | any): UVEditorRecomputeUVsTool;
}

declare class UVEditorSeamToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorSeamToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorSeamToolBuilder;
	static GetDefaultObject(): UVEditorSeamToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorSeamToolBuilder;
	static C(Other: UObject | any): UVEditorSeamToolBuilder;
}

declare class UVEditorSeamTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	LivePreviewAPI: UVToolLivePreviewAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	LivePreviewBehaviorSet: InputBehaviorSet;
	LivePreviewBehaviorSource: LocalInputBehaviorSource;
	UnwrapGeometry: PreviewGeometry;
	LivePreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): UVEditorSeamTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorSeamTool;
	static GetDefaultObject(): UVEditorSeamTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorSeamTool;
	static C(Other: UObject | any): UVEditorSeamTool;
}

declare class UVEditorTransformToolDisplayProperties extends InteractiveToolPropertySet { 
	bDrawPivots: boolean;
	static Load(ResourceName: string): UVEditorTransformToolDisplayProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorTransformToolDisplayProperties;
	static GetDefaultObject(): UVEditorTransformToolDisplayProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorTransformToolDisplayProperties;
	static C(Other: UObject | any): UVEditorTransformToolDisplayProperties;
}

declare class UVEditorBaseTransformToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorBaseTransformToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorBaseTransformToolBuilder;
	static GetDefaultObject(): UVEditorBaseTransformToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorBaseTransformToolBuilder;
	static C(Other: UObject | any): UVEditorBaseTransformToolBuilder;
}

declare class UVEditorTransformToolBuilder extends UVEditorBaseTransformToolBuilder { 
	static Load(ResourceName: string): UVEditorTransformToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorTransformToolBuilder;
	static GetDefaultObject(): UVEditorTransformToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorTransformToolBuilder;
	static C(Other: UObject | any): UVEditorTransformToolBuilder;
}

declare class UVEditorAlignToolBuilder extends UVEditorBaseTransformToolBuilder { 
	static Load(ResourceName: string): UVEditorAlignToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorAlignToolBuilder;
	static GetDefaultObject(): UVEditorAlignToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorAlignToolBuilder;
	static C(Other: UObject | any): UVEditorAlignToolBuilder;
}

declare class UVEditorDistributeToolBuilder extends UVEditorBaseTransformToolBuilder { 
	static Load(ResourceName: string): UVEditorDistributeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorDistributeToolBuilder;
	static GetDefaultObject(): UVEditorDistributeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorDistributeToolBuilder;
	static C(Other: UObject | any): UVEditorDistributeToolBuilder;
}

declare class UVEditorTransformTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorUVTransformPropertiesBase;
	DisplaySettings: UVEditorTransformToolDisplayProperties;
	Factories: UVEditorUVTransformOperatorFactory[];
	UVToolSelectionAPI: UVToolSelectionAPI;
	static Load(ResourceName: string): UVEditorTransformTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorTransformTool;
	static GetDefaultObject(): UVEditorTransformTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorTransformTool;
	static C(Other: UObject | any): UVEditorTransformTool;
}

declare class UVSelectToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVSelectToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVSelectToolBuilder;
	static GetDefaultObject(): UVSelectToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSelectToolBuilder;
	static C(Other: UObject | any): UVSelectToolBuilder;
}

declare class UVSelectTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	ViewportButtonsAPI: UVToolViewportButtonsAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	SelectionAPI: UVToolSelectionAPI;
	SelectionMechanic: UVEditorMeshSelectionMechanic;
	TransformGizmo: CombinedTransformGizmo;
	static Load(ResourceName: string): UVSelectTool;
	static Find(Outer: UObject, ResourceName: string): UVSelectTool;
	static GetDefaultObject(): UVSelectTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSelectTool;
	static C(Other: UObject | any): UVSelectTool;
}

declare type EUVEditorParameterizeMeshUVMethod = 'PatchBuilder' | 'UVAtlas' | 'XAtlas' | 'EUVEditorParameterizeMeshUVMethod_MAX';
declare var EUVEditorParameterizeMeshUVMethod : { PatchBuilder:'PatchBuilder',UVAtlas:'UVAtlas',XAtlas:'XAtlas',EUVEditorParameterizeMeshUVMethod_MAX:'EUVEditorParameterizeMeshUVMethod_MAX', };
declare class UVEditorParameterizeMeshToolProperties extends InteractiveToolPropertySet { 
	Method: EUVEditorParameterizeMeshUVMethod;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolProperties;
}

declare class UVEditorParameterizeMeshToolUVAtlasProperties extends InteractiveToolPropertySet { 
	IslandStretch: number;
	NumIslands: number;
	TextureResolution: number;
	bUsePolygroups: boolean;
	bLayoutUDIMPerPolygroup: boolean;
	bPolygroupsEnabled: boolean;
	bUDIMsEnabled: boolean;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolUVAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolUVAtlasProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolUVAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolUVAtlasProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolUVAtlasProperties;
}

declare class UVEditorParameterizeMeshToolXAtlasProperties extends InteractiveToolPropertySet { 
	MaxIterations: number;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolXAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolXAtlasProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolXAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolXAtlasProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolXAtlasProperties;
}

declare class UVEditorParameterizeMeshToolPatchBuilderProperties extends InteractiveToolPropertySet { 
	InitialPatches: number;
	CurvatureAlignment: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	bRepack: boolean;
	TextureResolution: number;
	bUsePolygroups: boolean;
	bLayoutUDIMPerPolygroup: boolean;
	bPolygroupsEnabled: boolean;
	bUDIMsEnabled: boolean;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolPatchBuilderProperties;
}

declare class UVEditorParameterizeMeshOperatorFactory extends UObject { 
	Settings: UVEditorParameterizeMeshToolProperties;
	UVAtlasProperties: UVEditorParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: UVEditorParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: UVEditorParameterizeMeshToolPatchBuilderProperties;
	static Load(ResourceName: string): UVEditorParameterizeMeshOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshOperatorFactory;
	static GetDefaultObject(): UVEditorParameterizeMeshOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshOperatorFactory;
	static C(Other: UObject | any): UVEditorParameterizeMeshOperatorFactory;
}

declare class UVEditorParameterizeMeshToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorParameterizeMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolBuilder;
	static GetDefaultObject(): UVEditorParameterizeMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolBuilder;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolBuilder;
}

declare class UVEditorParameterizeMeshTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorParameterizeMeshToolProperties;
	UVAtlasProperties: UVEditorParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: UVEditorParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: UVEditorParameterizeMeshToolPatchBuilderProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	Factories: UVEditorParameterizeMeshOperatorFactory[];
	static Load(ResourceName: string): UVEditorParameterizeMeshTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshTool;
	static GetDefaultObject(): UVEditorParameterizeMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshTool;
	static C(Other: UObject | any): UVEditorParameterizeMeshTool;
}

declare class UVEditorInitializationContext extends UVToolContextObject { 
	static Load(ResourceName: string): UVEditorInitializationContext;
	static Find(Outer: UObject, ResourceName: string): UVEditorInitializationContext;
	static GetDefaultObject(): UVEditorInitializationContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorInitializationContext;
	static C(Other: UObject | any): UVEditorInitializationContext;
}

declare class UVEditor extends AssetEditor { 
	OriginalObjectsToEdit: UObject[];
	static Load(ResourceName: string): UVEditor;
	static Find(Outer: UObject, ResourceName: string): UVEditor;
	static GetDefaultObject(): UVEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditor;
	static C(Other: UObject | any): UVEditor;
}

declare type EUVEditorBackgroundSourceType = 'Checkerboard' | 'Texture' | 'Material' | 'EUVEditorBackgroundSourceType_MAX';
declare var EUVEditorBackgroundSourceType : { Checkerboard:'Checkerboard',Texture:'Texture',Material:'Material',EUVEditorBackgroundSourceType_MAX:'EUVEditorBackgroundSourceType_MAX', };
declare class UVEditorBackgroundPreviewProperties extends InteractiveToolPropertySet { 
	bVisible: boolean;
	SourceType: EUVEditorBackgroundSourceType;
	SourceTexture: Texture2D;
	SourceMaterial: Material;
	UDIMBlocks: number[];
	bUDIMsEnabled: boolean;
	static Load(ResourceName: string): UVEditorBackgroundPreviewProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorBackgroundPreviewProperties;
	static GetDefaultObject(): UVEditorBackgroundPreviewProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorBackgroundPreviewProperties;
	static C(Other: UObject | any): UVEditorBackgroundPreviewProperties;
}

declare class UVEditorBackgroundPreview extends PreviewGeometry { 
	Settings: UVEditorBackgroundPreviewProperties;
	BackgroundComponent: TriangleSetComponent;
	BackgroundMaterial: MaterialInstanceDynamic;
	static Load(ResourceName: string): UVEditorBackgroundPreview;
	static Find(Outer: UObject, ResourceName: string): UVEditorBackgroundPreview;
	static GetDefaultObject(): UVEditorBackgroundPreview;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorBackgroundPreview;
	static C(Other: UObject | any): UVEditorBackgroundPreview;
}

declare class UVEditorGridProperties extends InteractiveToolPropertySet { 
	bDrawGrid: boolean;
	bDrawRulers: boolean;
	static Load(ResourceName: string): UVEditorGridProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorGridProperties;
	static GetDefaultObject(): UVEditorGridProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorGridProperties;
	static C(Other: UObject | any): UVEditorGridProperties;
}

declare class UDIMSpecifier { 
	UDIM: number;
	UCoord: number;
	VCoord: number;
	clone() : UDIMSpecifier;
	static C(Other: UObject | any): UDIMSpecifier;
}

declare class UVEditorUDIMProperties extends InteractiveToolPropertySet { 
	UDIMSourceAsset: string;
	UDIMSourceTexture: Texture2D;
	ActiveUDIMs: UDIMSpecifier[];
	static Load(ResourceName: string): UVEditorUDIMProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUDIMProperties;
	static GetDefaultObject(): UVEditorUDIMProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUDIMProperties;
	SetUDIMsFromTexture(): void;
	SetUDIMsFromAsset(): void;
	GetAssetNames(): string[];
	AssetByIndex(): number;
	static C(Other: UObject | any): UVEditorUDIMProperties;
}

declare class UVEditorMode extends EdMode { 
	BackgroundVisualization: UVEditorBackgroundPreview;
	UVEditorGridProperties: UVEditorGridProperties;
	UVEditorUDIMProperties: UVEditorUDIMProperties;
	RegisteredActions: UVToolAction[];
	OriginalObjectsToEdit: UObject[];
	ToolTargets: ToolTarget[];
	ToolInputObjects: UVEditorToolMeshInput[];
	LivePreviewWorld: World;
	SelectionAPI: UVToolSelectionAPI;
	PropertyObjectsToTick: InteractiveToolPropertySet[];
	static Load(ResourceName: string): UVEditorMode;
	static Find(Outer: UObject, ResourceName: string): UVEditorMode;
	static GetDefaultObject(): UVEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorMode;
	static C(Other: UObject | any): UVEditorMode;
}

declare class UVEditorUVChannelProperties extends InteractiveToolPropertySet { 
	Asset: string;
	UVChannel: string;
	static Load(ResourceName: string): UVEditorUVChannelProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVChannelProperties;
	static GetDefaultObject(): UVEditorUVChannelProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVChannelProperties;
	GetUVChannelNames(): string[];
	GetAssetNames(): string[];
	static C(Other: UObject | any): UVEditorUVChannelProperties;
}

declare class UVEditorUISubsystem extends AssetEditorUISubsystem { 
	static Load(ResourceName: string): UVEditorUISubsystem;
	static Find(Outer: UObject, ResourceName: string): UVEditorUISubsystem;
	static GetDefaultObject(): UVEditorUISubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUISubsystem;
	static C(Other: UObject | any): UVEditorUISubsystem;
}

declare class UVEditorSubsystem extends EditorSubsystem { 
	ToolTargetManager: ToolTargetManager;
	static Load(ResourceName: string): UVEditorSubsystem;
	static Find(Outer: UObject, ResourceName: string): UVEditorSubsystem;
	static GetDefaultObject(): UVEditorSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorSubsystem;
	static C(Other: UObject | any): UVEditorSubsystem;
}

declare class HLODBuilderInstancingSettings extends HLODBuilderSettings { 
	bDisallowNanite: boolean;
	static Load(ResourceName: string): HLODBuilderInstancingSettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderInstancingSettings;
	static GetDefaultObject(): HLODBuilderInstancingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderInstancingSettings;
	static C(Other: UObject | any): HLODBuilderInstancingSettings;
}

declare class HLODBuilderInstancing extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderInstancing;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderInstancing;
	static GetDefaultObject(): HLODBuilderInstancing;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderInstancing;
	static C(Other: UObject | any): HLODBuilderInstancing;
}

declare class HLODBuilderMeshApproximateSettings extends HLODBuilderSettings { 
	MeshApproximationSettings: MeshApproximationSettings;
	HLODMaterial: MaterialInterface;
	static Load(ResourceName: string): HLODBuilderMeshApproximateSettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshApproximateSettings;
	static GetDefaultObject(): HLODBuilderMeshApproximateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshApproximateSettings;
	static C(Other: UObject | any): HLODBuilderMeshApproximateSettings;
}

declare class HLODBuilderMeshApproximate extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderMeshApproximate;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshApproximate;
	static GetDefaultObject(): HLODBuilderMeshApproximate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshApproximate;
	static C(Other: UObject | any): HLODBuilderMeshApproximate;
}

declare class HLODBuilderMeshMergeSettings extends HLODBuilderSettings { 
	MeshMergeSettings: MeshMergingSettings;
	HLODMaterial: MaterialInterface;
	static Load(ResourceName: string): HLODBuilderMeshMergeSettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshMergeSettings;
	static GetDefaultObject(): HLODBuilderMeshMergeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshMergeSettings;
	static C(Other: UObject | any): HLODBuilderMeshMergeSettings;
}

declare class HLODBuilderMeshMerge extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderMeshMerge;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshMerge;
	static GetDefaultObject(): HLODBuilderMeshMerge;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshMerge;
	static C(Other: UObject | any): HLODBuilderMeshMerge;
}

declare class HLODBuilderMeshSimplifySettings extends HLODBuilderSettings { 
	MeshSimplifySettings: MeshProxySettings;
	HLODMaterial: MaterialInterface;
	static Load(ResourceName: string): HLODBuilderMeshSimplifySettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshSimplifySettings;
	static GetDefaultObject(): HLODBuilderMeshSimplifySettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshSimplifySettings;
	static C(Other: UObject | any): HLODBuilderMeshSimplifySettings;
}

declare class HLODBuilderMeshSimplify extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderMeshSimplify;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshSimplify;
	static GetDefaultObject(): HLODBuilderMeshSimplify;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshSimplify;
	static C(Other: UObject | any): HLODBuilderMeshSimplify;
}

declare class InterchangeResultMeshWarning extends InterchangeResultWarning { 
	MeshName: string;
	static Load(ResourceName: string): InterchangeResultMeshWarning;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning;
	static GetDefaultObject(): InterchangeResultMeshWarning;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning;
	static C(Other: UObject | any): InterchangeResultMeshWarning;
}

declare class InterchangeResultTextureWarning extends InterchangeResultWarning { 
	TextureName: string;
	static Load(ResourceName: string): InterchangeResultTextureWarning;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultTextureWarning;
	static GetDefaultObject(): InterchangeResultTextureWarning;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultTextureWarning;
	static C(Other: UObject | any): InterchangeResultTextureWarning;
}

declare class InterchangeResultMeshError extends InterchangeResultError { 
	MeshName: string;
	static Load(ResourceName: string): InterchangeResultMeshError;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshError;
	static GetDefaultObject(): InterchangeResultMeshError;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshError;
	static C(Other: UObject | any): InterchangeResultMeshError;
}

declare class InterchangeResultMeshWarning_Generic extends InterchangeResultMeshWarning { 
	Text: string;
	static Load(ResourceName: string): InterchangeResultMeshWarning_Generic;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning_Generic;
	static GetDefaultObject(): InterchangeResultMeshWarning_Generic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning_Generic;
	static C(Other: UObject | any): InterchangeResultMeshWarning_Generic;
}

declare class InterchangeResultMeshError_Generic extends InterchangeResultMeshError { 
	Text: string;
	static Load(ResourceName: string): InterchangeResultMeshError_Generic;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshError_Generic;
	static GetDefaultObject(): InterchangeResultMeshError_Generic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshError_Generic;
	static C(Other: UObject | any): InterchangeResultMeshError_Generic;
}

declare class InterchangeResultMeshWarning_TooManyUVs extends InterchangeResultMeshWarning { 
	ExcessUVs: number;
	static Load(ResourceName: string): InterchangeResultMeshWarning_TooManyUVs;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning_TooManyUVs;
	static GetDefaultObject(): InterchangeResultMeshWarning_TooManyUVs;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning_TooManyUVs;
	static C(Other: UObject | any): InterchangeResultMeshWarning_TooManyUVs;
}

declare class InterchangeResultTextureWarning_TextureFileDoNotExist extends InterchangeResultTextureWarning { 
	Text: string;
	MaterialName: string;
	static Load(ResourceName: string): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static GetDefaultObject(): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static C(Other: UObject | any): InterchangeResultTextureWarning_TextureFileDoNotExist;
}

declare class InterchangeTextureWriter extends InterchangeWriterBase { 
	static Load(ResourceName: string): InterchangeTextureWriter;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureWriter;
	static GetDefaultObject(): InterchangeTextureWriter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureWriter;
	static C(Other: UObject | any): InterchangeTextureWriter;
}

declare class InterchangeBlueprintPipelineBaseFactory extends Factory { 
	BlueprintType: EBlueprintType;
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): InterchangeBlueprintPipelineBaseFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeBlueprintPipelineBaseFactory;
	static GetDefaultObject(): InterchangeBlueprintPipelineBaseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeBlueprintPipelineBaseFactory;
	static C(Other: UObject | any): InterchangeBlueprintPipelineBaseFactory;
}

declare class InterchangePipelineBaseFactory extends Factory { 
	static Load(ResourceName: string): InterchangePipelineBaseFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangePipelineBaseFactory;
	static GetDefaultObject(): InterchangePipelineBaseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePipelineBaseFactory;
	static C(Other: UObject | any): InterchangePipelineBaseFactory;
}

declare class InterchangePythonPipelineAssetFactory extends Factory { 
	static Load(ResourceName: string): InterchangePythonPipelineAssetFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangePythonPipelineAssetFactory;
	static GetDefaultObject(): InterchangePythonPipelineAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePythonPipelineAssetFactory;
	static C(Other: UObject | any): InterchangePythonPipelineAssetFactory;
}

declare class InterchangeGraphInspectorPipeline extends InterchangePipelineBase { 
	static Load(ResourceName: string): InterchangeGraphInspectorPipeline;
	static Find(Outer: UObject, ResourceName: string): InterchangeGraphInspectorPipeline;
	static GetDefaultObject(): InterchangeGraphInspectorPipeline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeGraphInspectorPipeline;
	static C(Other: UObject | any): InterchangeGraphInspectorPipeline;
}

declare class InterchangePipelineConfigurationGeneric extends InterchangePipelineConfigurationBase { 
	static Load(ResourceName: string): InterchangePipelineConfigurationGeneric;
	static Find(Outer: UObject, ResourceName: string): InterchangePipelineConfigurationGeneric;
	static GetDefaultObject(): InterchangePipelineConfigurationGeneric;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePipelineConfigurationGeneric;
	static C(Other: UObject | any): InterchangePipelineConfigurationGeneric;
}

declare class InterchangeFilePickerGeneric extends InterchangeFilePickerBase { 
	static Load(ResourceName: string): InterchangeFilePickerGeneric;
	static Find(Outer: UObject, ResourceName: string): InterchangeFilePickerGeneric;
	static GetDefaultObject(): InterchangeFilePickerGeneric;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeFilePickerGeneric;
	static C(Other: UObject | any): InterchangeFilePickerGeneric;
}

declare class GLTFImportFactory extends Factory { 
	static Load(ResourceName: string): GLTFImportFactory;
	static Find(Outer: UObject, ResourceName: string): GLTFImportFactory;
	static GetDefaultObject(): GLTFImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GLTFImportFactory;
	static C(Other: UObject | any): GLTFImportFactory;
}

declare class GLTFImportOptions extends UObject { 
	bGenerateLightmapUVs: boolean;
	ImportScale: number;
	static Load(ResourceName: string): GLTFImportOptions;
	static Find(Outer: UObject, ResourceName: string): GLTFImportOptions;
	static GetDefaultObject(): GLTFImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GLTFImportOptions;
	static C(Other: UObject | any): GLTFImportOptions;
}

declare class SequencerExportFBXParams { 
	World: World;
	Sequence: LevelSequence;
	RootSequence: LevelSequence;
	Bindings: MovieSceneBindingProxy[];
	MasterTracks: MovieSceneTrack[];
	OverrideOptions: FbxExportOption;
	FBXFileName: string;
	clone() : SequencerExportFBXParams;
	static C(Other: UObject | any): SequencerExportFBXParams;
	ExportLevelSequenceFBX(): boolean;
	static ExportLevelSequenceFBX(InParams: SequencerExportFBXParams): boolean;
}

declare class SequencerToolsFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SequencerToolsFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SequencerToolsFunctionLibrary;
	static GetDefaultObject(): SequencerToolsFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerToolsFunctionLibrary;
	static LinkAnimSequence(Sequence: LevelSequence,AnimSequence: AnimSequence,ExportOptions: AnimSeqExportOption,Binding: MovieSceneBindingProxy): boolean;
	static IsRenderingMovie(): boolean;
	static IsEventEndpointValid(InEndpoint: SequencerQuickBindingResult): boolean;
	static ImportLevelSequenceFBX(InWorld: World,InSequence: LevelSequence,InBindings: MovieSceneBindingProxy[],InImportFBXSettings: MovieSceneUserImportFBXSettings,InImportFilename: string): boolean;
	static ImportFBXToControlRig(World: World,InSequence: LevelSequence,ActorWithControlRigTrack: string,SelectedControlRigNames: string[],ImportFBXControlRigSettings: MovieSceneUserImportFBXControlRigSettings,ImportFilename: string): boolean;
	static GetObjectBindings(InWorld: World,InSequence: LevelSequence,InObject: UObject[],InRange: SequencerScriptingRange): SequencerBoundObjects[];
	static GetLevelSequenceLinkFromAnimSequence(InAnimSequence: AnimSequence): AnimSequenceLevelSequenceLink;
	static GetBoundObjects(InWorld: World,InSequence: LevelSequence,InBindings: MovieSceneBindingProxy[],InRange: SequencerScriptingRange): SequencerBoundObjects[];
	static GetAnimSequenceLinkFromLevelSequence(InLevelSequence: LevelSequence): LevelSequenceAnimSequenceLink;
	static ExportLevelSequenceFBX(InParams: SequencerExportFBXParams): boolean;
	static ExportAnimSequence(World: World,Sequence: LevelSequence,AnimSequence: AnimSequence,ExportOption: AnimSeqExportOption,Binding: MovieSceneBindingProxy,bCreateLink: boolean): boolean;
	static CreateQuickBinding(InSequence: MovieSceneSequence,InObject: UObject,InFunctionName: string,bCallInEditor: boolean): SequencerQuickBindingResult;
	static CreateEvent(InSequence: MovieSceneSequence,InSection: MovieSceneEventSectionBase,InEndpoint: SequencerQuickBindingResult,InPayload: string[]): MovieSceneEvent;
	static ClearLinkedAnimSequences(InLevelSequence: LevelSequence): void;
	static CancelMovieRender(): void;
	static C(Other: UObject | any): SequencerToolsFunctionLibrary;
}

declare class OnRenderMovieStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRenderMovieStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRenderMovieStopped__PythonCallable;
	static GetDefaultObject(): OnRenderMovieStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRenderMovieStopped__PythonCallable;
	static C(Other: UObject | any): OnRenderMovieStopped__PythonCallable;
}

declare class HeaderViewSyntaxColors { 
	Comment: LinearColor;
	Error: LinearColor;
	Macro: LinearColor;
	TypeName: LinearColor;
	Identifier: LinearColor;
	Keyword: LinearColor;
	clone() : HeaderViewSyntaxColors;
	static C(Other: UObject | any): HeaderViewSyntaxColors;
}

declare type EHeaderViewSortMethod = 'None' | 'SortByAccessSpecifier' | 'SortForOptimalPadding' | 'EHeaderViewSortMethod_MAX';
declare var EHeaderViewSortMethod : { None:'None',SortByAccessSpecifier:'SortByAccessSpecifier',SortForOptimalPadding:'SortForOptimalPadding',EHeaderViewSortMethod_MAX:'EHeaderViewSortMethod_MAX', };
declare class BlueprintHeaderViewSettings extends DeveloperSettings { 
	SyntaxColors: HeaderViewSyntaxColors;
	SelectionColor: LinearColor;
	FontSize: number;
	SortMethod: EHeaderViewSortMethod;
	static Load(ResourceName: string): BlueprintHeaderViewSettings;
	static Find(Outer: UObject, ResourceName: string): BlueprintHeaderViewSettings;
	static GetDefaultObject(): BlueprintHeaderViewSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlueprintHeaderViewSettings;
	static C(Other: UObject | any): BlueprintHeaderViewSettings;
}

declare class MovieSceneMediaPlayerPropertySection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLoop: boolean;
	static Load(ResourceName: string): MovieSceneMediaPlayerPropertySection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaPlayerPropertySection;
	static GetDefaultObject(): MovieSceneMediaPlayerPropertySection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaPlayerPropertySection;
	static C(Other: UObject | any): MovieSceneMediaPlayerPropertySection;
}

declare class MovieSceneMediaPlayerPropertyTrack extends MovieScenePropertyTrack { 
	static Load(ResourceName: string): MovieSceneMediaPlayerPropertyTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaPlayerPropertyTrack;
	static GetDefaultObject(): MovieSceneMediaPlayerPropertyTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaPlayerPropertyTrack;
	static C(Other: UObject | any): MovieSceneMediaPlayerPropertyTrack;
}

declare class MediaSourceCacheSettings { 
	bOverride: boolean;
	TimeToLookAhead: number;
	clone() : MediaSourceCacheSettings;
	static C(Other: UObject | any): MediaSourceCacheSettings;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLooping: boolean;
	StartFrameOffset: FrameNumber;
	MediaTexture: MediaTexture;
	MediaSoundComponent: MediaSoundComponent;
	bUseExternalMediaPlayer: boolean;
	ExternalMediaPlayer: MediaPlayer;
	CacheSettings: MediaSourceCacheSettings;
	bHasMediaPlayerProxy: boolean;
	ThumbnailReferenceOffset: number;
	static Load(ResourceName: string): MovieSceneMediaSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
	static GetDefaultObject(): MovieSceneMediaSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaSection;
	static C(Other: UObject | any): MovieSceneMediaSection;
}

declare class MovieSceneMediaTrack extends MovieSceneNameableTrack { 
	MediaSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneMediaTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
	static GetDefaultObject(): MovieSceneMediaTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaTrack;
	static C(Other: UObject | any): MovieSceneMediaTrack;
}

declare class MediaPlateAssetUserData extends AssetUserData { 
	static Load(ResourceName: string): MediaPlateAssetUserData;
	static Find(Outer: UObject, ResourceName: string): MediaPlateAssetUserData;
	static GetDefaultObject(): MediaPlateAssetUserData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlateAssetUserData;
	static C(Other: UObject | any): MediaPlateAssetUserData;
}

declare type EMediaTextureVisibleMipsTiles = 'None' | 'Plane' | 'Sphere' | 'EMediaTextureVisibleMipsTiles_MAX';
declare var EMediaTextureVisibleMipsTiles : { None:'None',Plane:'Plane',Sphere:'Sphere',EMediaTextureVisibleMipsTiles_MAX:'EMediaTextureVisibleMipsTiles_MAX', };
declare class MediaPlateComponent extends ActorComponent { 
	bPlayOnOpen: boolean;
	bAutoPlay: boolean;
	bEnableAudio: boolean;
	StartTime: number;
	bIsAspectRatioAuto: boolean;
	SoundComponent: MediaSoundComponent;
	StaticMeshComponent: StaticMeshComponent;
	Letterboxes: StaticMeshComponent[];
	MediaPlaylist: MediaPlaylist;
	PlaylistIndex: number;
	CacheSettings: MediaSourceCacheSettings;
	bIsMediaPlatePlaying: boolean;
	bPlayOnlyWhenVisible: boolean;
	bLoop: boolean;
	VisibleMipsTilesCalculations: EMediaTextureVisibleMipsTiles;
	MipMapBias: number;
	LetterboxAspectRatio: number;
	MeshRange: Vector2D;
	MediaTexture: MediaTexture;
	MediaPlayer: MediaPlayer;
	static Load(ResourceName: string): MediaPlateComponent;
	static Find(Outer: UObject, ResourceName: string): MediaPlateComponent;
	static GetDefaultObject(): MediaPlateComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlateComponent;
	SetPlayOnlyWhenVisible(bInPlayOnlyWhenVisible: boolean): void;
	SetMeshRange(InMeshRange: Vector2D): void;
	SetLoop(bInLoop: boolean): void;
	SetLetterboxAspectRatio(AspectRatio: number): void;
	Seek(Time: Timespan): boolean;
	Rewind(): boolean;
	Play(): void;
	Pause(): void;
	Open(): void;
	OnMediaOpened(DeviceUrl: string): void;
	OnMediaEnd(): void;
	IsMediaPlatePlaying(): boolean;
	GetMeshRange(): Vector2D;
	GetMediaTexture(): MediaTexture;
	GetMediaPlayer(): MediaPlayer;
	GetLoop(): boolean;
	GetLetterboxAspectRatio(): number;
	Close(): void;
	static C(Other: UObject | any): MediaPlateComponent;
}

declare class MediaPlate extends Actor { 
	MediaPlateComponent: MediaPlateComponent;
	StaticMeshComponent: StaticMeshComponent;
	static GetDefaultObject(): MediaPlate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlate;
	static C(Other: UObject | any): MediaPlate;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFrameRate: FrameRate;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	GlobalCacheSizeGB: number;
	UseGlobalCache: boolean;
	ExrDecoderThreads: number;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSourceCustomizationSequenceProxy { 
	clone() : ImgMediaSourceCustomizationSequenceProxy;
	static C(Other: UObject | any): ImgMediaSourceCustomizationSequenceProxy;
}

declare class ImgMediaSource extends BaseMediaSource { 
	IsPathRelativeToProjectRoot: boolean;
	FrameRateOverride: FrameRate;
	ProxyOverride: string;
	bFillGapsInSequence: boolean;
	SequenceProxy: ImgMediaSourceCustomizationSequenceProxy;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetTokenizedSequencePath(Path: string): void;
	SetSequencePath(Path: string): void;
	SetMipLevelDistance(Distance: number): void;
	RemoveTargetObject(InActor: Actor): void;
	RemoveGlobalCamera(InActor: Actor): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	AddTargetObject(InActor: Actor): void;
	AddGlobalCamera(InActor: Actor): void;
	static C(Other: UObject | any): ImgMediaSource;
}

declare type EMediaPlayerRecordingNumerationStyle = 'AppendFrameNumber' | 'AppendSampleTime' | 'EMediaPlayerRecordingNumerationStyle_MAX';
declare var EMediaPlayerRecordingNumerationStyle : { AppendFrameNumber:'AppendFrameNumber',AppendSampleTime:'AppendSampleTime',EMediaPlayerRecordingNumerationStyle_MAX:'EMediaPlayerRecordingNumerationStyle_MAX', };
declare type EMediaPlayerRecordingImageFormat = 'PNG' | 'JPEG' | 'BMP' | 'EXR' | 'EMediaPlayerRecordingImageFormat_MAX';
declare var EMediaPlayerRecordingImageFormat : { PNG:'PNG',JPEG:'JPEG',BMP:'BMP',EXR:'EXR',EMediaPlayerRecordingImageFormat_MAX:'EMediaPlayerRecordingImageFormat_MAX', };
declare class MediaPlayerRecordingSettings { 
	bActive: boolean;
	bRecordMediaFrame: boolean;
	BaseFilename: string;
	NumerationStyle: EMediaPlayerRecordingNumerationStyle;
	ImageFormat: EMediaPlayerRecordingImageFormat;
	CompressionQuality: number;
	bResetAlpha: boolean;
	clone() : MediaPlayerRecordingSettings;
	static C(Other: UObject | any): MediaPlayerRecordingSettings;
}

declare class MediaPlayerRecording extends SequenceRecordingBase { 
	RecordingSettings: MediaPlayerRecordingSettings;
	MediaPlayerToRecord: MediaPlayer;
	static Load(ResourceName: string): MediaPlayerRecording;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerRecording;
	static GetDefaultObject(): MediaPlayerRecording;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerRecording;
	static C(Other: UObject | any): MediaPlayerRecording;
}

declare class MediaSequenceRecorderSettings extends UObject { 
	bRecordMediaPlayerEnabled: boolean;
	MediaPlayerSubDirectory: string;
	static Load(ResourceName: string): MediaSequenceRecorderSettings;
	static Find(Outer: UObject, ResourceName: string): MediaSequenceRecorderSettings;
	static GetDefaultObject(): MediaSequenceRecorderSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSequenceRecorderSettings;
	static C(Other: UObject | any): MediaSequenceRecorderSettings;
}

declare class MediaPlayerEditorMediaContext extends ToolMenuContextBase { 
	SelectedAsset: UObject;
	StyleSetName: string;
	static Load(ResourceName: string): MediaPlayerEditorMediaContext;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerEditorMediaContext;
	static GetDefaultObject(): MediaPlayerEditorMediaContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerEditorMediaContext;
	static C(Other: UObject | any): MediaPlayerEditorMediaContext;
}

declare type EMediaPlayerEditorScale = 'Fill' | 'Fit' | 'Original' | 'EMediaPlayerEditorScale_MAX';
declare var EMediaPlayerEditorScale : { Fill:'Fill',Fit:'Fit',Original:'Original',EMediaPlayerEditorScale_MAX:'EMediaPlayerEditorScale_MAX', };
declare class MediaPlayerEditorSettings extends UObject { 
	DesiredPlayerName: string;
	ShowTextOverlays: boolean;
	ViewportScale: EMediaPlayerEditorScale;
	static Load(ResourceName: string): MediaPlayerEditorSettings;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerEditorSettings;
	static GetDefaultObject(): MediaPlayerEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerEditorSettings;
	static C(Other: UObject | any): MediaPlayerEditorSettings;
}

declare class FileMediaSourceFactoryNew extends Factory { 
	static Load(ResourceName: string): FileMediaSourceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): FileMediaSourceFactoryNew;
	static GetDefaultObject(): FileMediaSourceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FileMediaSourceFactoryNew;
	static C(Other: UObject | any): FileMediaSourceFactoryNew;
}

declare class MediaPlayerFactoryNew extends Factory { 
	static Load(ResourceName: string): MediaPlayerFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerFactoryNew;
	static GetDefaultObject(): MediaPlayerFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactoryNew;
	static C(Other: UObject | any): MediaPlayerFactoryNew;
}

declare class MediaPlaylistFactoryNew extends Factory { 
	static Load(ResourceName: string): MediaPlaylistFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaPlaylistFactoryNew;
	static GetDefaultObject(): MediaPlaylistFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaylistFactoryNew;
	static C(Other: UObject | any): MediaPlaylistFactoryNew;
}

declare class MediaTextureFactoryNew extends Factory { 
	static Load(ResourceName: string): MediaTextureFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaTextureFactoryNew;
	static GetDefaultObject(): MediaTextureFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTextureFactoryNew;
	static C(Other: UObject | any): MediaTextureFactoryNew;
}

declare class PlatformMediaSourceFactoryNew extends Factory { 
	static Load(ResourceName: string): PlatformMediaSourceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): PlatformMediaSourceFactoryNew;
	static GetDefaultObject(): PlatformMediaSourceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformMediaSourceFactoryNew;
	static C(Other: UObject | any): PlatformMediaSourceFactoryNew;
}

declare class StreamMediaSourceFactoryNew extends Factory { 
	static Load(ResourceName: string): StreamMediaSourceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): StreamMediaSourceFactoryNew;
	static GetDefaultObject(): StreamMediaSourceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamMediaSourceFactoryNew;
	static C(Other: UObject | any): StreamMediaSourceFactoryNew;
}

declare class ActorFactoryMediaPlate extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryMediaPlate;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryMediaPlate;
	static GetDefaultObject(): ActorFactoryMediaPlate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryMediaPlate;
	static C(Other: UObject | any): ActorFactoryMediaPlate;
}

declare class CryptoKeysCommandlet extends Commandlet { 
	static Load(ResourceName: string): CryptoKeysCommandlet;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
	static GetDefaultObject(): CryptoKeysCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysCommandlet;
	static C(Other: UObject | any): CryptoKeysCommandlet;
}

declare class CryptoEncryptionKey { 
	Guid: Guid;
	Name: string;
	Key: string;
	clone() : CryptoEncryptionKey;
	static C(Other: UObject | any): CryptoEncryptionKey;
}

declare class CryptoKeysSettings extends UObject { 
	EncryptionKey: string;
	SecondaryEncryptionKeys: CryptoEncryptionKey[];
	bEncryptPakIniFiles: boolean;
	bEncryptPakIndex: boolean;
	bEncryptUAssetFiles: boolean;
	bEncryptAllAssetFiles: boolean;
	SigningPublicExponent: string;
	SigningModulus: string;
	SigningPrivateExponent: string;
	bEnablePakSigning: boolean;
	static Load(ResourceName: string): CryptoKeysSettings;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
	static GetDefaultObject(): CryptoKeysSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysSettings;
	static C(Other: UObject | any): CryptoKeysSettings;
}

declare class BoneReferencePair { 
	SourceBone: BoneReference;
	TargetBone: BoneReference;
	clone() : BoneReferencePair;
	static C(Other: UObject | any): BoneReferencePair;
}

declare class CopyBonesModifier extends AnimationModifier { 
	BonePairs: BoneReferencePair[];
	BonePoseSpace: EAnimPoseSpaces;
	static Load(ResourceName: string): CopyBonesModifier;
	static Find(Outer: UObject, ResourceName: string): CopyBonesModifier;
	static GetDefaultObject(): CopyBonesModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CopyBonesModifier;
	static C(Other: UObject | any): CopyBonesModifier;
}

declare class MotionExtractorUtilityLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MotionExtractorUtilityLibrary;
	static Find(Outer: UObject, ResourceName: string): MotionExtractorUtilityLibrary;
	static GetDefaultObject(): MotionExtractorUtilityLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionExtractorUtilityLibrary;
	static GetStoppedRangesFromRootMotion(AnimSequence: AnimSequence,StopSpeedThreshold: number,SampleRate: number): Vector2D[];
	static GetMovingRangesFromRootMotion(AnimSequence: AnimSequence,StopSpeedThreshold: number,SampleRate: number): Vector2D[];
	static GetDesiredValue(BoneTransform: Transform,LastBoneTransform: Transform,DeltaTime: number,MotionType: EMotionExtractor_MotionType,Axis: EMotionExtractor_Axis): number;
	static GenerateCurveName(BoneName: string,MotionType: EMotionExtractor_MotionType,Axis: EMotionExtractor_Axis): string;
	static C(Other: UObject | any): MotionExtractorUtilityLibrary;
}

declare class ReOrientRootBoneModifier extends AnimationModifier { 
	Rotator: Rotator;
	static Load(ResourceName: string): ReOrientRootBoneModifier;
	static Find(Outer: UObject, ResourceName: string): ReOrientRootBoneModifier;
	static GetDefaultObject(): ReOrientRootBoneModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReOrientRootBoneModifier;
	static C(Other: UObject | any): ReOrientRootBoneModifier;
}

declare type EMotionExtractor_MathOperation = 'None' | 'Addition' | 'Subtraction' | 'Division' | 'Multiplication' | 'EMotionExtractor_MAX';
declare var EMotionExtractor_MathOperation : { None:'None',Addition:'Addition',Subtraction:'Subtraction',Division:'Division',Multiplication:'Multiplication',EMotionExtractor_MAX:'EMotionExtractor_MAX', };
declare class MotionExtractorModifier extends AnimationModifier { 
	BoneName: string;
	MotionType: EMotionExtractor_MotionType;
	Axis: EMotionExtractor_Axis;
	bRemoveCurveOnRevert: boolean;
	bRelativeToFirstFrame: boolean;
	bComponentSpace: boolean;
	bAbsoluteValue: boolean;
	MathOperation: EMotionExtractor_MathOperation;
	Modifier: number;
	bNormalize: boolean;
	SampleRate: number;
	bUseCustomCurveName: boolean;
	CustomCurveName: string;
	static Load(ResourceName: string): MotionExtractorModifier;
	static Find(Outer: UObject, ResourceName: string): MotionExtractorModifier;
	static GetDefaultObject(): MotionExtractorModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionExtractorModifier;
	static C(Other: UObject | any): MotionExtractorModifier;
}

declare class CachedMotionAnalysisProperties extends CachedAnalysisProperties { 
	static Load(ResourceName: string): CachedMotionAnalysisProperties;
	static Find(Outer: UObject, ResourceName: string): CachedMotionAnalysisProperties;
	static GetDefaultObject(): CachedMotionAnalysisProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CachedMotionAnalysisProperties;
	static C(Other: UObject | any): CachedMotionAnalysisProperties;
}

declare type EAnalysisLocomotionAxis = 'Speed' | 'Direction' | 'ForwardSpeed' | 'RightwardSpeed' | 'UpwardSpeed' | 'ForwardSlope' | 'RightwardSlope' | 'EAnalysisLocomotionAxis_MAX';
declare var EAnalysisLocomotionAxis : { Speed:'Speed',Direction:'Direction',ForwardSpeed:'ForwardSpeed',RightwardSpeed:'RightwardSpeed',UpwardSpeed:'UpwardSpeed',ForwardSlope:'ForwardSlope',RightwardSlope:'RightwardSlope',EAnalysisLocomotionAxis_MAX:'EAnalysisLocomotionAxis_MAX', };
declare class LocomotionAnalysisProperties extends AnalysisProperties { 
	FunctionAxis: EAnalysisLocomotionAxis;
	PrimaryBoneSocket: BoneSocketTarget;
	SecondaryBoneSocket: BoneSocketTarget;
	CharacterFacingAxis: EAnalysisLinearAxis;
	CharacterUpAxis: EAnalysisLinearAxis;
	static Load(ResourceName: string): LocomotionAnalysisProperties;
	static Find(Outer: UObject, ResourceName: string): LocomotionAnalysisProperties;
	static GetDefaultObject(): LocomotionAnalysisProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocomotionAnalysisProperties;
	static C(Other: UObject | any): LocomotionAnalysisProperties;
}

declare type EAnalysisRootMotionAxis = 'Speed' | 'Direction' | 'ForwardSpeed' | 'RightwardSpeed' | 'UpwardSpeed' | 'ForwardSlope' | 'RightwardSlope' | 'EAnalysisRootMotionAxis_MAX';
declare var EAnalysisRootMotionAxis : { Speed:'Speed',Direction:'Direction',ForwardSpeed:'ForwardSpeed',RightwardSpeed:'RightwardSpeed',UpwardSpeed:'UpwardSpeed',ForwardSlope:'ForwardSlope',RightwardSlope:'RightwardSlope',EAnalysisRootMotionAxis_MAX:'EAnalysisRootMotionAxis_MAX', };
declare class RootMotionAnalysisProperties extends AnalysisProperties { 
	FunctionAxis: EAnalysisRootMotionAxis;
	BoneSocket: BoneSocketTarget;
	Space: EAnalysisSpace;
	SpaceBoneSocket: BoneSocketTarget;
	CharacterFacingAxis: EAnalysisLinearAxis;
	CharacterUpAxis: EAnalysisLinearAxis;
	StartTimeFraction: number;
	EndTimeFraction: number;
	static Load(ResourceName: string): RootMotionAnalysisProperties;
	static Find(Outer: UObject, ResourceName: string): RootMotionAnalysisProperties;
	static GetDefaultObject(): RootMotionAnalysisProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RootMotionAnalysisProperties;
	static C(Other: UObject | any): RootMotionAnalysisProperties;
}

declare class GeometryCacheTrack extends UObject { 
	Duration: number;
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static GetDefaultObject(): GeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject | any): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	StartFrame: number;
	EndFrame: number;
	Hash: number;
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static GetDefaultObject(): GeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject | any): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	bExtrapolateFrames: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	MotionVectorScale: number;
	NumTracks: number;
	ElapsedTime: number;
	Duration: number;
	bManualTick: boolean;
	bOverrideWireframeColor: boolean;
	WireframeOverrideColor: LinearColor;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	TickAtThisTime(Time: number,bInIsRunning: boolean,bInBackwards: boolean,bInIsLooping: boolean): void;
	Stop(): void;
	SetWireframeOverrideColor(Color: LinearColor): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetOverrideWireframeColor(bOverride: boolean): void;
	SetMotionVectorScale(NewMotionVectorScale: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	SetExtrapolateFrames(bNewExtrapolating: boolean): void;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	IsExtrapolatingFrames(): boolean;
	GetWireframeOverrideColor(): LinearColor;
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	GetPlaybackDirection(): number;
	GetOverrideWireframeColor(): boolean;
	GetNumberOfFrames(): number;
	GetMotionVectorScale(): number;
	GetDuration(): number;
	GetAnimationTime(): number;
	static C(Other: UObject | any): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject | any): GeometryCacheActor;
}

declare class GeometryCacheCodecBase extends UObject { 
	TopologyRanges: number[];
	static Load(ResourceName: string): GeometryCacheCodecBase;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecBase;
	static GetDefaultObject(): GeometryCacheCodecBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecBase;
	static C(Other: UObject | any): GeometryCacheCodecBase;
}

declare class GeometryCacheCodecRaw extends GeometryCacheCodecBase { 
	DummyProperty: number;
	static Load(ResourceName: string): GeometryCacheCodecRaw;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecRaw;
	static GetDefaultObject(): GeometryCacheCodecRaw;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecRaw;
	static C(Other: UObject | any): GeometryCacheCodecRaw;
}

declare class GeometryCacheCodecV1 extends GeometryCacheCodecBase { 
	static Load(ResourceName: string): GeometryCacheCodecV1;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecV1;
	static GetDefaultObject(): GeometryCacheCodecV1;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecV1;
	static C(Other: UObject | any): GeometryCacheCodecV1;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject | any): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: number;
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrackStreamable extends GeometryCacheTrack { 
	Codec: GeometryCacheCodecBase;
	StartSampleTime: number;
	static Load(ResourceName: string): GeometryCacheTrackStreamable;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrackStreamable;
	static GetDefaultObject(): GeometryCacheTrackStreamable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrackStreamable;
	static C(Other: UObject | any): GeometryCacheTrackStreamable;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}

declare class NiagaraGeometryCacheReference { 
	GeometryCache: GeometryCache;
	GeometryCacheUserParamBinding: NiagaraUserParameterBinding;
	OverrideMaterials: MaterialInterface[];
	clone() : NiagaraGeometryCacheReference;
	static C(Other: UObject | any): NiagaraGeometryCacheReference;
}

declare class NiagaraGeometryCacheRendererProperties extends NiagaraRendererProperties { 
	GeometryCaches: NiagaraGeometryCacheReference[];
	bIsLooping: boolean;
	ComponentCountLimit: number;
	PositionBinding: NiagaraVariableAttributeBinding;
	RotationBinding: NiagaraVariableAttributeBinding;
	ScaleBinding: NiagaraVariableAttributeBinding;
	ElapsedTimeBinding: NiagaraVariableAttributeBinding;
	EnabledBinding: NiagaraVariableAttributeBinding;
	ArrayIndexBinding: NiagaraVariableAttributeBinding;
	RendererVisibilityTagBinding: NiagaraVariableAttributeBinding;
	RendererVisibility: number;
	bAssignComponentsOnParticleID: boolean;
	static Load(ResourceName: string): NiagaraGeometryCacheRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraGeometryCacheRendererProperties;
	static GetDefaultObject(): NiagaraGeometryCacheRendererProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraGeometryCacheRendererProperties;
	static C(Other: UObject | any): NiagaraGeometryCacheRendererProperties;
}

declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: number;
	TimeSteps: number;
	FrameStart: number;
	FrameEnd: number;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	bSkipComputingTangents: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'None' | 'PercentageBased' | 'FixedNumber' | 'NoCompression' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { None:'None',PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',NoCompression:'NoCompression',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	bGenerateLightmapUVs: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare type EAbcGeometryCacheMotionVectorsImport = 'NoMotionVectors' | 'ImportAbcVelocitiesAsMotionVectors' | 'CalculateMotionVectorsDuringImport' | 'EAbcGeometryCacheMotionVectorsImport_MAX';
declare var EAbcGeometryCacheMotionVectorsImport : { NoMotionVectors:'NoMotionVectors',ImportAbcVelocitiesAsMotionVectors:'ImportAbcVelocitiesAsMotionVectors',CalculateMotionVectorsDuringImport:'CalculateMotionVectorsDuringImport',EAbcGeometryCacheMotionVectorsImport_MAX:'EAbcGeometryCacheMotionVectorsImport_MAX', };
declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bStoreImportedVertexNumbers: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
	MotionVectors: EAbcGeometryCacheMotionVectorsImport;
	bOptimizeIndexBuffers: boolean;
	CompressedPositionPrecision: number;
	CompressedTextureCoordinatesNumberOfBits: number;
	clone() : AbcGeometryCacheSettings;
	static C(Other: UObject | any): AbcGeometryCacheSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare class AnimationSharingSetupFactory extends Factory { 
	static Load(ResourceName: string): AnimationSharingSetupFactory;
	static Find(Outer: UObject, ResourceName: string): AnimationSharingSetupFactory;
	static GetDefaultObject(): AnimationSharingSetupFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationSharingSetupFactory;
	static C(Other: UObject | any): AnimationSharingSetupFactory;
}

declare type ECurveEditorFFTFilterType = 'Lowpass' | 'Highpass' | 'ECurveEditorFFTFilterType_MAX';
declare var ECurveEditorFFTFilterType : { Lowpass:'Lowpass',Highpass:'Highpass',ECurveEditorFFTFilterType_MAX:'ECurveEditorFFTFilterType_MAX', };
declare type ECurveEditorFFTFilterClass = 'Butterworth' | 'Chebyshev' | 'ECurveEditorFFTFilterClass_MAX';
declare var ECurveEditorFFTFilterClass : { Butterworth:'Butterworth',Chebyshev:'Chebyshev',ECurveEditorFFTFilterClass_MAX:'ECurveEditorFFTFilterClass_MAX', };
declare class CurveEditorFFTFilter extends CurveEditorFilterBase { 
	CutoffFrequency: number;
	Type: ECurveEditorFFTFilterType;
	Response: ECurveEditorFFTFilterClass;
	Order: number;
	static Load(ResourceName: string): CurveEditorFFTFilter;
	static Find(Outer: UObject, ResourceName: string): CurveEditorFFTFilter;
	static GetDefaultObject(): CurveEditorFFTFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEditorFFTFilter;
	static C(Other: UObject | any): CurveEditorFFTFilter;
}

declare class CurveEditorRetimeAnchor { 
	ValueInSeconds: number;
	bIsSelected: boolean;
	clone() : CurveEditorRetimeAnchor;
	static C(Other: UObject | any): CurveEditorRetimeAnchor;
}

declare class CurveEditorRetimeToolData extends UObject { 
	RetimingAnchors: CurveEditorRetimeAnchor[];
	static Load(ResourceName: string): CurveEditorRetimeToolData;
	static Find(Outer: UObject, ResourceName: string): CurveEditorRetimeToolData;
	static GetDefaultObject(): CurveEditorRetimeToolData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEditorRetimeToolData;
	static C(Other: UObject | any): CurveEditorRetimeToolData;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static RemoveActorFromLayer(InActor: Actor,Layer: ActorLayer): void;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static AddActorToLayer(InActor: Actor,Layer: ActorLayer): void;
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject | any): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static GetDefaultObject(): MyPluginObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject | any): MyPluginObject;
}

declare class AndroidPermissionCallbackProxy extends UObject { 
	OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: string[], GrantResults: boolean[]) => void>;
	static Load(ResourceName: string): AndroidPermissionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionCallbackProxy;
	static GetDefaultObject(): AndroidPermissionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}

declare class AndroidPermissionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionFunctionLibrary;
	static GetDefaultObject(): AndroidPermissionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionFunctionLibrary;
	static CheckPermission(permission: string): boolean;
	static AcquirePermissions(Permissions: string[]): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}

declare class AndroidPermissionDynamicDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AndroidPermissionDynamicDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionDynamicDelegate__PythonCallable;
	static GetDefaultObject(): AndroidPermissionDynamicDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionDynamicDelegate__PythonCallable;
	static C(Other: UObject | any): AndroidPermissionDynamicDelegate__PythonCallable;
}

declare class PlasticSourceControlProjectSettings extends DeveloperSettings { 
	UserNameToDisplayName: Map<string, string>;
	bHideEmailDomainInUsername: boolean;
	bPromptForCheckoutOnChange: boolean;
	static Load(ResourceName: string): PlasticSourceControlProjectSettings;
	static Find(Outer: UObject, ResourceName: string): PlasticSourceControlProjectSettings;
	static GetDefaultObject(): PlasticSourceControlProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlasticSourceControlProjectSettings;
	static C(Other: UObject | any): PlasticSourceControlProjectSettings;
}

declare class AppleImageInterface extends Interface { 
	static Load(ResourceName: string): AppleImageInterface;
	static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
	static GetDefaultObject(): AppleImageInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageInterface;
	static C(Other: UObject | any): AppleImageInterface;
}

declare class AppleImageUtilsImageConversionResult { 
	Error: string;
	ImageData: number[];
	clone() : AppleImageUtilsImageConversionResult;
	static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}

declare type ETextureRotationDirection = 'None' | 'Left' | 'Right' | 'Down' | 'LeftMirrored' | 'RightMirrored' | 'DownMirrored' | 'UpMirrored' | 'ETextureRotationDirection_MAX';
declare var ETextureRotationDirection : { None:'None',Left:'Left',Right:'Right',Down:'Down',LeftMirrored:'LeftMirrored',RightMirrored:'RightMirrored',DownMirrored:'DownMirrored',UpMirrored:'UpMirrored',ETextureRotationDirection_MAX:'ETextureRotationDirection_MAX', };
declare class AppleImageUtilsBaseAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	ConversionResult: AppleImageUtilsImageConversionResult;
	static Load(ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToTIFF(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToPNG(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToJPEG(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToHEIF(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
}

declare class AppleImageConversionDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AppleImageConversionDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AppleImageConversionDelegate__PythonCallable;
	static GetDefaultObject(): AppleImageConversionDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageConversionDelegate__PythonCallable;
	static C(Other: UObject | any): AppleImageConversionDelegate__PythonCallable;
}

declare class K2Node_ConvertToJPEG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToJPEG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToJPEG;
	static GetDefaultObject(): K2Node_ConvertToJPEG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToJPEG;
	static C(Other: UObject | any): K2Node_ConvertToJPEG;
}

declare class K2Node_ConvertToHEIF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToHEIF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToHEIF;
	static GetDefaultObject(): K2Node_ConvertToHEIF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToHEIF;
	static C(Other: UObject | any): K2Node_ConvertToHEIF;
}

declare class K2Node_ConvertToTIFF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToTIFF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToTIFF;
	static GetDefaultObject(): K2Node_ConvertToTIFF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToTIFF;
	static C(Other: UObject | any): K2Node_ConvertToTIFF;
}

declare class K2Node_ConvertToPNG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToPNG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToPNG;
	static GetDefaultObject(): K2Node_ConvertToPNG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToPNG;
	static C(Other: UObject | any): K2Node_ConvertToPNG;
}

declare class ArchVisCharacter extends Character { 
	LookUpAxisName: string;
	LookUpAtRateAxisName: string;
	TurnAxisName: string;
	TurnAtRateAxisName: string;
	MoveForwardAxisName: string;
	MoveRightAxisName: string;
	MouseSensitivityScale_Pitch: number;
	MouseSensitivityScale_Yaw: number;
	static GetDefaultObject(): ArchVisCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject | any): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	RotationalAcceleration: Rotator;
	RotationalDeceleration: Rotator;
	MaxRotationalVelocity: Rotator;
	MinPitch: number;
	MaxPitch: number;
	WalkingFriction: number;
	WalkingSpeed: number;
	WalkingAcceleration: number;
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject | any): ArchVisCharMovementComponent;
}

declare type ECollectionScriptingShareType = 'Local' | 'Private' | 'Shared' | 'ECollectionScriptingShareType_MAX';
declare var ECollectionScriptingShareType : { Local:'Local',Private:'Private',Shared:'Shared',ECollectionScriptingShareType_MAX:'ECollectionScriptingShareType_MAX', };
declare class AssetTagsSubsystem extends EngineSubsystem { 
	static Load(ResourceName: string): AssetTagsSubsystem;
	static Find(Outer: UObject, ResourceName: string): AssetTagsSubsystem;
	static GetDefaultObject(): AssetTagsSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTagsSubsystem;
	ReparentCollection(Name: string,NewParentName: string): boolean;
	RenameCollection(Name: string,NewName: string): boolean;
	RemoveAssetsFromCollection(Name: string,AssetPathNames: string[]): boolean;
	RemoveAssetPtrsFromCollection(Name: string,AssetPtrs: UObject[]): boolean;
	RemoveAssetPtrFromCollection(Name: string,AssetPtr: UObject): boolean;
	RemoveAssetFromCollection(Name: string,AssetPathName: string): boolean;
	RemoveAssetDatasFromCollection(Name: string,AssetDatas: AssetData[]): boolean;
	RemoveAssetDataFromCollection(Name: string,AssetData: AssetData): boolean;
	K2_RemoveAssetsFromCollection(Name: string,AssetPaths: SoftObjectPath[]): boolean;
	K2_RemoveAssetFromCollection(Name: string,AssetPath: SoftObjectPath): boolean;
	K2_GetCollectionsContainingAsset(AssetPath: SoftObjectPath): string[];
	K2_AddAssetToCollection(Name: string,AssetPath: SoftObjectPath): boolean;
	K2_AddAssetsToCollection(Name: string,AssetPaths: SoftObjectPath[]): boolean;
	GetCollectionsContainingAssetPtr(AssetPtr: UObject): string[];
	GetCollectionsContainingAssetData(AssetData: AssetData): string[];
	GetCollectionsContainingAsset(AssetPathName: string): string[];
	GetCollections(): string[];
	GetAssetsInCollection(Name: string): AssetData[];
	EmptyCollection(Name: string): boolean;
	DestroyCollection(Name: string): boolean;
	CreateCollection(Name: string,ShareType: ECollectionScriptingShareType): boolean;
	CollectionExists(Name: string): boolean;
	AddAssetToCollection(Name: string,AssetPathName: string): boolean;
	AddAssetsToCollection(Name: string,AssetPathNames: string[]): boolean;
	AddAssetPtrToCollection(Name: string,AssetPtr: UObject): boolean;
	AddAssetPtrsToCollection(Name: string,AssetPtrs: UObject[]): boolean;
	AddAssetDataToCollection(Name: string,AssetData: AssetData): boolean;
	AddAssetDatasToCollection(Name: string,AssetDatas: AssetData[]): boolean;
	static C(Other: UObject | any): AssetTagsSubsystem;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCacheAsset: GeometryCache;
	FirstLoopStartFrameOffset: FrameNumber;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	bReverse: boolean;
	StartOffset: number;
	EndOffset: number;
	GeometryCache: SoftObjectPath;
	clone() : MovieSceneGeometryCacheParams;
	static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}

declare class MovieSceneGeometryCacheSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCacheParams;
	static Load(ResourceName: string): MovieSceneGeometryCacheSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheSection;
	static GetDefaultObject(): MovieSceneGeometryCacheSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheSection;
	static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}

declare class MovieSceneGeometryCacheTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheTrack;
	static GetDefaultObject(): MovieSceneGeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheTrack;
	static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}

declare class GeometryCacheStreamerSettings extends DeveloperSettings { 
	LookAheadBuffer: number;
	MaxMemoryAllowed: number;
	static Load(ResourceName: string): GeometryCacheStreamerSettings;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheStreamerSettings;
	static GetDefaultObject(): GeometryCacheStreamerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheStreamerSettings;
	static C(Other: UObject | any): GeometryCacheStreamerSettings;
}

declare type EGooglePADErrorCode = 'AssetPack_NO_ERROR' | 'AssetPack_APP_UNAVAILABLE' | 'AssetPack_UNAVAILABLE' | 'AssetPack_INVALID_REQUEST' | 'AssetPack_DOWNLOAD_NOT_FOUND' | 'AssetPack_API_NOT_AVAILABLE' | 'AssetPack_NETWORK_ERROR' | 'AssetPack_ACCESS_DENIED' | 'AssetPack_INSUFFICIENT_STORAGE' | 'AssetPack_PLAY_STORE_NOT_FOUND' | 'AssetPack_NETWORK_UNRESTRICTED' | 'AssetPack_INTERNAL_ERROR' | 'AssetPack_INITIALIZATION_NEEDED' | 'AssetPack_INITIALIZATION_FAILED' | 'AssetPack_MAX';
declare var EGooglePADErrorCode : { AssetPack_NO_ERROR:'AssetPack_NO_ERROR',AssetPack_APP_UNAVAILABLE:'AssetPack_APP_UNAVAILABLE',AssetPack_UNAVAILABLE:'AssetPack_UNAVAILABLE',AssetPack_INVALID_REQUEST:'AssetPack_INVALID_REQUEST',AssetPack_DOWNLOAD_NOT_FOUND:'AssetPack_DOWNLOAD_NOT_FOUND',AssetPack_API_NOT_AVAILABLE:'AssetPack_API_NOT_AVAILABLE',AssetPack_NETWORK_ERROR:'AssetPack_NETWORK_ERROR',AssetPack_ACCESS_DENIED:'AssetPack_ACCESS_DENIED',AssetPack_INSUFFICIENT_STORAGE:'AssetPack_INSUFFICIENT_STORAGE',AssetPack_PLAY_STORE_NOT_FOUND:'AssetPack_PLAY_STORE_NOT_FOUND',AssetPack_NETWORK_UNRESTRICTED:'AssetPack_NETWORK_UNRESTRICTED',AssetPack_INTERNAL_ERROR:'AssetPack_INTERNAL_ERROR',AssetPack_INITIALIZATION_NEEDED:'AssetPack_INITIALIZATION_NEEDED',AssetPack_INITIALIZATION_FAILED:'AssetPack_INITIALIZATION_FAILED',AssetPack_MAX:'AssetPack_MAX', };
declare type EGooglePADStorageMethod = 'AssetPack_STORAGE_FILES' | 'AssetPack_STORAGE_APK' | 'AssetPack_STORAGE_UNKNOWN' | 'AssetPack_STORAGE_NOT_INSTALLED' | 'AssetPack_STORAGE_MAX';
declare var EGooglePADStorageMethod : { AssetPack_STORAGE_FILES:'AssetPack_STORAGE_FILES',AssetPack_STORAGE_APK:'AssetPack_STORAGE_APK',AssetPack_STORAGE_UNKNOWN:'AssetPack_STORAGE_UNKNOWN',AssetPack_STORAGE_NOT_INSTALLED:'AssetPack_STORAGE_NOT_INSTALLED',AssetPack_STORAGE_MAX:'AssetPack_STORAGE_MAX', };
declare type EGooglePADCellularDataConfirmStatus = 'AssetPack_CONFIRM_UNKNOWN' | 'AssetPack_CONFIRM_PENDING' | 'AssetPack_CONFIRM_USER_APPROVED' | 'AssetPack_CONFIRM_USER_CANCELED' | 'AssetPack_CONFIRM_MAX';
declare var EGooglePADCellularDataConfirmStatus : { AssetPack_CONFIRM_UNKNOWN:'AssetPack_CONFIRM_UNKNOWN',AssetPack_CONFIRM_PENDING:'AssetPack_CONFIRM_PENDING',AssetPack_CONFIRM_USER_APPROVED:'AssetPack_CONFIRM_USER_APPROVED',AssetPack_CONFIRM_USER_CANCELED:'AssetPack_CONFIRM_USER_CANCELED',AssetPack_CONFIRM_MAX:'AssetPack_CONFIRM_MAX', };
declare type EGooglePADDownloadStatus = 'AssetPack_UNKNOWN' | 'AssetPack_DOWNLOAD_PENDING' | 'AssetPack_DOWNLOADING' | 'AssetPack_TRANSFERRING' | 'AssetPack_DOWNLOAD_COMPLETED' | 'AssetPack_DOWNLOAD_FAILED' | 'AssetPack_DOWNLOAD_CANCELED' | 'AssetPack_WAITING_FOR_WIFI' | 'AssetPack_NOT_INSTALLED' | 'AssetPack_INFO_PENDING' | 'AssetPack_INFO_FAILED' | 'AssetPack_REMOVAL_PENDING' | 'AssetPack_REMOVAL_FAILED' | 'AssetPack_MAX';
declare var EGooglePADDownloadStatus : { AssetPack_UNKNOWN:'AssetPack_UNKNOWN',AssetPack_DOWNLOAD_PENDING:'AssetPack_DOWNLOAD_PENDING',AssetPack_DOWNLOADING:'AssetPack_DOWNLOADING',AssetPack_TRANSFERRING:'AssetPack_TRANSFERRING',AssetPack_DOWNLOAD_COMPLETED:'AssetPack_DOWNLOAD_COMPLETED',AssetPack_DOWNLOAD_FAILED:'AssetPack_DOWNLOAD_FAILED',AssetPack_DOWNLOAD_CANCELED:'AssetPack_DOWNLOAD_CANCELED',AssetPack_WAITING_FOR_WIFI:'AssetPack_WAITING_FOR_WIFI',AssetPack_NOT_INSTALLED:'AssetPack_NOT_INSTALLED',AssetPack_INFO_PENDING:'AssetPack_INFO_PENDING',AssetPack_INFO_FAILED:'AssetPack_INFO_FAILED',AssetPack_REMOVAL_PENDING:'AssetPack_REMOVAL_PENDING',AssetPack_REMOVAL_FAILED:'AssetPack_REMOVAL_FAILED',AssetPack_MAX:'AssetPack_MAX', };
declare class GooglePADFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GooglePADFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GooglePADFunctionLibrary;
	static GetDefaultObject(): GooglePADFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GooglePADFunctionLibrary;
	static ShowCellularDataConfirmation(): EGooglePADErrorCode;
	static RequestRemoval(Name: string): EGooglePADErrorCode;
	static RequestInfo(AssetPacks: string[]): EGooglePADErrorCode;
	static RequestDownload(AssetPacks: string[]): EGooglePADErrorCode;
	static ReleaseDownloadState(State: number): void;
	static ReleaseAssetPackLocation(Location: number): void;
	static GetTotalBytesToDownload(State: number): number;
	static GetStorageMethod(Location: number): EGooglePADStorageMethod;
	static GetShowCellularDataConfirmationStatus(Status?: EGooglePADCellularDataConfirmStatus): {Status: EGooglePADCellularDataConfirmStatus, $: EGooglePADErrorCode};
	static GetDownloadStatus(State: number): EGooglePADDownloadStatus;
	static GetDownloadState(Name: string,State?: number): {State: number, $: EGooglePADErrorCode};
	static GetBytesDownloaded(State: number): number;
	static GetAssetsPath(Location: number): string;
	static GetAssetPackLocation(Name: string,Location?: number): {Location: number, $: EGooglePADErrorCode};
	static CancelDownload(AssetPacks: string[]): EGooglePADErrorCode;
	static C(Other: UObject | any): GooglePADFunctionLibrary;
}

declare class OnDynamicMeshModifiedBP__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDynamicMeshModifiedBP__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDynamicMeshModifiedBP__PythonCallable;
	static GetDefaultObject(): OnDynamicMeshModifiedBP__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDynamicMeshModifiedBP__PythonCallable;
	static C(Other: UObject | any): OnDynamicMeshModifiedBP__PythonCallable;
}

declare class MobileInstalledContent extends UObject { 
	static Load(ResourceName: string): MobileInstalledContent;
	static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
	static GetDefaultObject(): MobileInstalledContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobileInstalledContent;
	Mount(PakOrder: number,MountPoint: string): boolean;
	GetInstalledContentSize(): number;
	GetDiskFreeSpace(): number;
	static C(Other: UObject | any): MobileInstalledContent;
}

declare class MobilePendingContent extends MobileInstalledContent { 
	static Load(ResourceName: string): MobilePendingContent;
	static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
	static GetDefaultObject(): MobilePendingContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePendingContent;
	GetTotalDownloadedSize(): number;
	GetRequiredDiskSpace(): number;
	GetInstallProgress(): number;
	GetDownloadStatusText(): string;
	GetDownloadSpeed(): number;
	GetDownloadSize(): number;
	static C(Other: UObject | any): MobilePendingContent;
}

declare class MobilePatchingLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MobilePatchingLibrary;
	static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
	static GetDefaultObject(): MobilePatchingLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePatchingLibrary;
	static HasActiveWiFiConnection(): boolean;
	static GetSupportedPlatformNames(): string[];
	static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
	static GetActiveDeviceProfileName(): string;
	static C(Other: UObject | any): MobilePatchingLibrary;
}

declare class OnContentInstallFailed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContentInstallFailed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContentInstallFailed__PythonCallable;
	static GetDefaultObject(): OnContentInstallFailed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContentInstallFailed__PythonCallable;
	static C(Other: UObject | any): OnContentInstallFailed__PythonCallable;
}

declare class OnContentInstallSucceeded__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContentInstallSucceeded__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContentInstallSucceeded__PythonCallable;
	static GetDefaultObject(): OnContentInstallSucceeded__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContentInstallSucceeded__PythonCallable;
	static C(Other: UObject | any): OnContentInstallSucceeded__PythonCallable;
}

declare class OnRequestContentFailed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRequestContentFailed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRequestContentFailed__PythonCallable;
	static GetDefaultObject(): OnRequestContentFailed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRequestContentFailed__PythonCallable;
	static C(Other: UObject | any): OnRequestContentFailed__PythonCallable;
}

declare class OnRequestContentSucceeded__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRequestContentSucceeded__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRequestContentSucceeded__PythonCallable;
	static GetDefaultObject(): OnRequestContentSucceeded__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRequestContentSucceeded__PythonCallable;
	static C(Other: UObject | any): OnRequestContentSucceeded__PythonCallable;
}

declare class AudioCaptureDeviceInfo { 
	DeviceName: string;
	NumInputChannels: number;
	SampleRate: number;
	clone() : AudioCaptureDeviceInfo;
	static C(Other: UObject | any): AudioCaptureDeviceInfo;
}

declare class AudioCapture extends AudioGenerator { 
	static Load(ResourceName: string): AudioCapture;
	static Find(Outer: UObject, ResourceName: string): AudioCapture;
	static GetDefaultObject(): AudioCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCapture;
	StopCapturingAudio(): void;
	StartCapturingAudio(): void;
	IsCapturingAudio(): boolean;
	GetAudioCaptureDeviceInfo(OutInfo?: AudioCaptureDeviceInfo): {OutInfo: AudioCaptureDeviceInfo, $: boolean};
	static C(Other: UObject | any): AudioCapture;
}

declare class AudioCaptureFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureFunctionLibrary;
	static GetDefaultObject(): AudioCaptureFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureFunctionLibrary;
	static CreateAudioCapture(): AudioCapture;
	static C(Other: UObject | any): AudioCaptureFunctionLibrary;
}

declare class AudioCaptureBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureBlueprintLibrary;
	static GetDefaultObject(): AudioCaptureBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureBlueprintLibrary;
	static Conv_AudioInputDeviceInfoToString(Info: AudioInputDeviceInfo): string;
	static C(Other: UObject | any): AudioCaptureBlueprintLibrary;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class OnAudioInputDevicesObtained__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnAudioInputDevicesObtained__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnAudioInputDevicesObtained__PythonCallable;
	static GetDefaultObject(): OnAudioInputDevicesObtained__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnAudioInputDevicesObtained__PythonCallable;
	static C(Other: UObject | any): OnAudioInputDevicesObtained__PythonCallable;
}

declare type EResonanceRenderMode = 'StereoPanning' | 'BinauralLowQuality' | 'BinauralMediumQuality' | 'BinauralHighQuality' | 'RoomEffectsOnly' | 'EResonanceRenderMode_MAX';
declare var EResonanceRenderMode : { StereoPanning:'StereoPanning',BinauralLowQuality:'BinauralLowQuality',BinauralMediumQuality:'BinauralMediumQuality',BinauralHighQuality:'BinauralHighQuality',RoomEffectsOnly:'RoomEffectsOnly',EResonanceRenderMode_MAX:'EResonanceRenderMode_MAX', };
declare class ResonanceAudioSoundfieldSettings extends SoundfieldEncodingSettingsBase { 
	RenderMode: EResonanceRenderMode;
	static Load(ResourceName: string): ResonanceAudioSoundfieldSettings;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioSoundfieldSettings;
	static GetDefaultObject(): ResonanceAudioSoundfieldSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioSoundfieldSettings;
	static C(Other: UObject | any): ResonanceAudioSoundfieldSettings;
}

declare type ERaMaterialName = 'TRANSPARENT' | 'ACOUSTIC_CEILING_TILES' | 'BRICK_BARE' | 'BRICK_PAINTED' | 'CONCRETE_BLOCK_COARSE' | 'CONCRETE_BLOCK_PAINTED' | 'CURTAIN_HEAVY' | 'FIBER_GLASS_INSULATION' | 'GLASS_THIN' | 'GLASS_THICK' | 'GRASS' | 'LINOLEUM_ON_CONCRETE' | 'MARBLE' | 'METAL' | 'PARQUET_ONCONCRETE' | 'PLASTER_ROUGH' | 'PLASTER_SMOOTH' | 'PLYWOOD_PANEL' | 'POLISHED_CONCRETE_OR_TILE' | 'SHEETROCK' | 'WATER_OR_ICE_SURFACE' | 'WOOD_CEILING' | 'WOOD_PANEL' | 'UNIFORM' | 'ERaMaterialName_MAX';
declare var ERaMaterialName : { TRANSPARENT:'TRANSPARENT',ACOUSTIC_CEILING_TILES:'ACOUSTIC_CEILING_TILES',BRICK_BARE:'BRICK_BARE',BRICK_PAINTED:'BRICK_PAINTED',CONCRETE_BLOCK_COARSE:'CONCRETE_BLOCK_COARSE',CONCRETE_BLOCK_PAINTED:'CONCRETE_BLOCK_PAINTED',CURTAIN_HEAVY:'CURTAIN_HEAVY',FIBER_GLASS_INSULATION:'FIBER_GLASS_INSULATION',GLASS_THIN:'GLASS_THIN',GLASS_THICK:'GLASS_THICK',GRASS:'GRASS',LINOLEUM_ON_CONCRETE:'LINOLEUM_ON_CONCRETE',MARBLE:'MARBLE',METAL:'METAL',PARQUET_ONCONCRETE:'PARQUET_ONCONCRETE',PLASTER_ROUGH:'PLASTER_ROUGH',PLASTER_SMOOTH:'PLASTER_SMOOTH',PLYWOOD_PANEL:'PLYWOOD_PANEL',POLISHED_CONCRETE_OR_TILE:'POLISHED_CONCRETE_OR_TILE',SHEETROCK:'SHEETROCK',WATER_OR_ICE_SURFACE:'WATER_OR_ICE_SURFACE',WOOD_CEILING:'WOOD_CEILING',WOOD_PANEL:'WOOD_PANEL',UNIFORM:'UNIFORM',ERaMaterialName_MAX:'ERaMaterialName_MAX', };
declare class ResonanceAudioReverbPluginSettings { 
	bEnableRoomEffects: boolean;
	bGetTransformFromAudioVolume: boolean;
	RoomPosition: Vector;
	RoomRotation: Quat;
	RoomDimensions: Vector;
	LeftWallMaterial: ERaMaterialName;
	RightWallMaterial: ERaMaterialName;
	FloorMaterial: ERaMaterialName;
	CeilingMaterial: ERaMaterialName;
	FrontWallMaterial: ERaMaterialName;
	BackWallMaterial: ERaMaterialName;
	ReflectionScalar: number;
	ReverbGain: number;
	ReverbTimeModifier: number;
	ReverbBrightness: number;
	clone() : ResonanceAudioReverbPluginSettings;
	static C(Other: UObject | any): ResonanceAudioReverbPluginSettings;
}

declare class ResonanceAudioReverbPluginPreset extends SoundEffectSubmixPreset { 
	Settings: ResonanceAudioReverbPluginSettings;
	static Load(ResourceName: string): ResonanceAudioReverbPluginPreset;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioReverbPluginPreset;
	static GetDefaultObject(): ResonanceAudioReverbPluginPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioReverbPluginPreset;
	SetRoomRotation(InRotation: Quat): void;
	SetRoomPosition(InPosition: Vector): void;
	SetRoomMaterials(InMaterials: ERaMaterialName[]): void;
	SetRoomDimensions(InDimensions: Vector): void;
	SetReverbTimeModifier(InReverbTimeModifier: number): void;
	SetReverbGain(InReverbGain: number): void;
	SetReverbBrightness(InReverbBrightness: number): void;
	SetReflectionScalar(InReflectionScalar: number): void;
	SetEnableRoomEffects(bInEnableRoomEffects: boolean): void;
	static C(Other: UObject | any): ResonanceAudioReverbPluginPreset;
	SetGlobalReverbPreset(): void;
	static SetGlobalReverbPreset(InPreset: ResonanceAudioReverbPluginPreset): void;
}

declare class ResonanceAudioBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ResonanceAudioBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioBlueprintFunctionLibrary;
	static GetDefaultObject(): ResonanceAudioBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioBlueprintFunctionLibrary;
	static SetGlobalReverbPreset(InPreset: ResonanceAudioReverbPluginPreset): void;
	static GetGlobalReverbPreset(): ResonanceAudioReverbPluginPreset;
	static C(Other: UObject | any): ResonanceAudioBlueprintFunctionLibrary;
}

declare type ERaSpatializationMethod = 'STEREO_PANNING' | 'HRTF' | 'ERaSpatializationMethod_MAX';
declare var ERaSpatializationMethod : { STEREO_PANNING:'STEREO_PANNING',HRTF:'HRTF',ERaSpatializationMethod_MAX:'ERaSpatializationMethod_MAX', };
declare type ERaDistanceRolloffModel = 'LOGARITHMIC' | 'LINEAR' | 'NONE' | 'ERaDistanceRolloffModel_MAX';
declare var ERaDistanceRolloffModel : { LOGARITHMIC:'LOGARITHMIC',LINEAR:'LINEAR',NONE:'NONE',ERaDistanceRolloffModel_MAX:'ERaDistanceRolloffModel_MAX', };
declare class ResonanceAudioSpatializationSourceSettings extends SpatializationPluginSourceSettingsBase { 
	SpatializationMethod: ERaSpatializationMethod;
	Pattern: number;
	Sharpness: number;
	bToggleVisualization: boolean;
	Scale: number;
	Spread: number;
	Rolloff: ERaDistanceRolloffModel;
	MinDistance: number;
	MaxDistance: number;
	static Load(ResourceName: string): ResonanceAudioSpatializationSourceSettings;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioSpatializationSourceSettings;
	static GetDefaultObject(): ResonanceAudioSpatializationSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioSpatializationSourceSettings;
	SetSoundSourceSpread(InSpread: number): void;
	SetSoundSourceDirectivity(InPattern: number,InSharpness: number): void;
	static C(Other: UObject | any): ResonanceAudioSpatializationSourceSettings;
}

declare class ResonanceAudioDirectivityVisualizer extends Actor { 
	Material: Material;
	Settings: ResonanceAudioSpatializationSourceSettings;
	static GetDefaultObject(): ResonanceAudioDirectivityVisualizer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioDirectivityVisualizer;
	static C(Other: UObject | any): ResonanceAudioDirectivityVisualizer;
}

declare type ERaQualityMode = 'STEREO_PANNING' | 'BINAURAL_LOW' | 'BINAURAL_MEDIUM' | 'BINAURAL_HIGH' | 'ERaQualityMode_MAX';
declare var ERaQualityMode : { STEREO_PANNING:'STEREO_PANNING',BINAURAL_LOW:'BINAURAL_LOW',BINAURAL_MEDIUM:'BINAURAL_MEDIUM',BINAURAL_HIGH:'BINAURAL_HIGH',ERaQualityMode_MAX:'ERaQualityMode_MAX', };
declare class ResonanceAudioSettings extends UObject { 
	OutputSubmix: SoftObjectPath;
	QualityMode: ERaQualityMode;
	GlobalReverbPreset: SoftObjectPath;
	GlobalSourcePreset: SoftObjectPath;
	static Load(ResourceName: string): ResonanceAudioSettings;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioSettings;
	static GetDefaultObject(): ResonanceAudioSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioSettings;
	static C(Other: UObject | any): ResonanceAudioSettings;
}

declare class SynthesisEditorSettings extends DeveloperSettings { 
	static Load(ResourceName: string): SynthesisEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SynthesisEditorSettings;
	static GetDefaultObject(): SynthesisEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthesisEditorSettings;
	static C(Other: UObject | any): SynthesisEditorSettings;
}

declare class AudioImpulseResponseFactory extends Factory { 
	static Load(ResourceName: string): AudioImpulseResponseFactory;
	static Find(Outer: UObject, ResourceName: string): AudioImpulseResponseFactory;
	static GetDefaultObject(): AudioImpulseResponseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioImpulseResponseFactory;
	static C(Other: UObject | any): AudioImpulseResponseFactory;
}

declare class ModularSynthPresetBankFactory extends Factory { 
	static Load(ResourceName: string): ModularSynthPresetBankFactory;
	static Find(Outer: UObject, ResourceName: string): ModularSynthPresetBankFactory;
	static GetDefaultObject(): ModularSynthPresetBankFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModularSynthPresetBankFactory;
	static C(Other: UObject | any): ModularSynthPresetBankFactory;
}

declare class MonoWaveTableSynthPresetFactory extends Factory { 
	static Load(ResourceName: string): MonoWaveTableSynthPresetFactory;
	static Find(Outer: UObject, ResourceName: string): MonoWaveTableSynthPresetFactory;
	static GetDefaultObject(): MonoWaveTableSynthPresetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MonoWaveTableSynthPresetFactory;
	static C(Other: UObject | any): MonoWaveTableSynthPresetFactory;
}

declare class OodleNetworkTrainerCommandlet extends Commandlet { 
	bCompressionTest: boolean;
	bWriteV5Dictionaries: boolean;
	HashTableSize: number;
	DictionarySize: number;
	DictionaryTrials: number;
	TrialRandomness: number;
	TrialGenerations: number;
	bNoTrials: boolean;
	static Load(ResourceName: string): OodleNetworkTrainerCommandlet;
	static Find(Outer: UObject, ResourceName: string): OodleNetworkTrainerCommandlet;
	static GetDefaultObject(): OodleNetworkTrainerCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OodleNetworkTrainerCommandlet;
	static C(Other: UObject | any): OodleNetworkTrainerCommandlet;
}

declare class LevelVariantSetsActorFactory extends ActorFactory { 
	static Load(ResourceName: string): LevelVariantSetsActorFactory;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSetsActorFactory;
	static GetDefaultObject(): LevelVariantSetsActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsActorFactory;
	static C(Other: UObject | any): LevelVariantSetsActorFactory;
}

declare class SwitchActorFactory extends ActorFactory { 
	static Load(ResourceName: string): SwitchActorFactory;
	static Find(Outer: UObject, ResourceName: string): SwitchActorFactory;
	static GetDefaultObject(): SwitchActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SwitchActorFactory;
	static C(Other: UObject | any): SwitchActorFactory;
}

declare class VariantManagerFactoryNew extends Factory { 
	static Load(ResourceName: string): VariantManagerFactoryNew;
	static Find(Outer: UObject, ResourceName: string): VariantManagerFactoryNew;
	static GetDefaultObject(): VariantManagerFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantManagerFactoryNew;
	static C(Other: UObject | any): VariantManagerFactoryNew;
}

declare type EVariantManagerTestEnum = 'None' | 'FirstOption' | 'SecondOption' | 'ThirdOption' | 'EVariantManagerTestEnum_MAX';
declare var EVariantManagerTestEnum : { None:'None',FirstOption:'FirstOption',SecondOption:'SecondOption',ThirdOption:'ThirdOption',EVariantManagerTestEnum_MAX:'EVariantManagerTestEnum_MAX', };
declare class VariantManagerTestActor extends Actor { 
	EnumWithNoDefault: EVariantManagerTestEnum;
	EnumWithSecondDefault: EVariantManagerTestEnum;
	CapturedByteProperty: number;
	CapturedIntProperty: number;
	CapturedFloatProperty: number;
	bCapturedBoolProperty: boolean;
	CapturedObjectProperty: UObject;
	CapturedInterfaceProperty: Interface;
	CapturedNameProperty: string;
	CapturedStrProperty: string;
	CapturedTextProperty: string;
	CapturedRotatorProperty: Rotator;
	CapturedColorProperty: Color;
	CapturedLinearColorProperty: LinearColor;
	CapturedVectorProperty: Vector;
	CapturedQuatProperty: Quat;
	CapturedVector4Property: Vector4;
	CapturedVector2DProperty: Vector2D;
	CapturedIntPointProperty: IntPoint;
	CapturedUObjectArrayProperty: UObject[];
	CapturedVectorArrayProperty: Vector[];
	static GetDefaultObject(): VariantManagerTestActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantManagerTestActor;
	static C(Other: UObject | any): VariantManagerTestActor;
}

declare class InterchangeImportTestSettings extends UObject { 
	ImportTestsPath: string;
	ImportFiles: string[];
	static Load(ResourceName: string): InterchangeImportTestSettings;
	static Find(Outer: UObject, ResourceName: string): InterchangeImportTestSettings;
	static GetDefaultObject(): InterchangeImportTestSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeImportTestSettings;
	static C(Other: UObject | any): InterchangeImportTestSettings;
}

declare class ImportTestFunctionsBase extends UObject { 
	static Load(ResourceName: string): ImportTestFunctionsBase;
	static Find(Outer: UObject, ResourceName: string): ImportTestFunctionsBase;
	static GetDefaultObject(): ImportTestFunctionsBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImportTestFunctionsBase;
	static C(Other: UObject | any): ImportTestFunctionsBase;
}

declare class InterchangeTestFunctionResult { 
	Infos: string[];
	Warnings: string[];
	Errors: string[];
	clone() : InterchangeTestFunctionResult;
	static C(Other: UObject | any): InterchangeTestFunctionResult;
}

declare class MaterialXTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): MaterialXTestFunctions;
	static Find(Outer: UObject, ResourceName: string): MaterialXTestFunctions;
	static GetDefaultObject(): MaterialXTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialXTestFunctions;
	static CheckInputConnected(MaterialInterface: MaterialInterface,InputName: string,bIsConnected: boolean): InterchangeTestFunctionResult;
	static CheckConnectedInputCount(MaterialInterface: MaterialInterface,ExpectedNumber: number): InterchangeTestFunctionResult;
	static C(Other: UObject | any): MaterialXTestFunctions;
}

declare class ActorImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): ActorImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): ActorImportTestFunctions;
	static GetDefaultObject(): ActorImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorImportTestFunctions;
	static CheckImportedActorCount(Actors: Actor[],ExpectedNumberOfImportedActors: number): InterchangeTestFunctionResult;
	static C(Other: UObject | any): ActorImportTestFunctions;
}

declare class AnimationImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): AnimationImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): AnimationImportTestFunctions;
	static GetDefaultObject(): AnimationImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationImportTestFunctions;
	static C(Other: UObject | any): AnimationImportTestFunctions;
}

declare class AssetImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): AssetImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): AssetImportTestFunctions;
	static GetDefaultObject(): AssetImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetImportTestFunctions;
	static CheckMetadataValue(UObject: UObject,ExpectedMetadataKey: string,ExpectedMetadataValue: string): InterchangeTestFunctionResult;
	static CheckMetadataExist(UObject: UObject,ExpectedMetadataKey: string): InterchangeTestFunctionResult;
	static CheckImportedMetadataCount(UObject: UObject,ExpectedNumberOfMetadataForThisObject: number): InterchangeTestFunctionResult;
	static C(Other: UObject | any): AssetImportTestFunctions;
}

declare class InterchangeResultImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): InterchangeResultImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultImportTestFunctions;
	static GetDefaultObject(): InterchangeResultImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultImportTestFunctions;
	static CheckIfErrorOrWarningWasGenerated(ResultsContainer: InterchangeResultsContainer,ErrorOrWarningClass: UnrealEngineClass): InterchangeTestFunctionResult;
	static C(Other: UObject | any): InterchangeResultImportTestFunctions;
}

declare class MaterialImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): MaterialImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): MaterialImportTestFunctions;
	static GetDefaultObject(): MaterialImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialImportTestFunctions;
	static CheckImportedMaterialInstanceCount(MaterialInterfaces: MaterialInterface[],ExpectedNumberOfImportedMaterialInstances: number): InterchangeTestFunctionResult;
	static CheckImportedMaterialCount(MaterialInterfaces: MaterialInterface[],ExpectedNumberOfImportedMaterials: number): InterchangeTestFunctionResult;
	static C(Other: UObject | any): MaterialImportTestFunctions;
}

declare class SkeletalMeshImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): SkeletalMeshImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshImportTestFunctions;
	static GetDefaultObject(): SkeletalMeshImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshImportTestFunctions;
	static CheckVertexIndexPosition(Mesh: SkeletalMesh,LODIndex: number,VertexIndex: number,ExpectedVertexPosition: Vector): InterchangeTestFunctionResult;
	static CheckUVChannelCount(Mesh: SkeletalMesh,LODIndex: number,ExpectedNumberOfUVChannels: number): InterchangeTestFunctionResult;
	static CheckTriangleCountInSection(Mesh: SkeletalMesh,LODIndex: number,SectionIndex: number,ExpectedNumberOfTriangles: number): InterchangeTestFunctionResult;
	static CheckSkinnedVertexCountForBone(Mesh: SkeletalMesh,BoneName: string,bTestFirstAlternateProfile: boolean,ExpectedSkinnedVertexCount: number): InterchangeTestFunctionResult;
	static CheckSectionMaterialName(Mesh: SkeletalMesh,LODIndex: number,SectionIndex: number,ExpectedMaterialName: string): InterchangeTestFunctionResult;
	static CheckSectionCount(Mesh: SkeletalMesh,LODIndex: number,ExpectedNumberOfSections: number): InterchangeTestFunctionResult;
	static CheckRenderVertexCount(Mesh: SkeletalMesh,LODIndex: number,ExpectedNumberOfRenderVertices: number): InterchangeTestFunctionResult;
	static CheckMaterialSlotCount(Mesh: SkeletalMesh,ExpectedNumberOfMaterialSlots: number): InterchangeTestFunctionResult;
	static CheckLodCount(Mesh: SkeletalMesh,ExpectedNumberOfLods: number): InterchangeTestFunctionResult;
	static CheckImportedSkeletalMeshCount(Meshes: SkeletalMesh[],ExpectedNumberOfImportedSkeletalMeshes: number): InterchangeTestFunctionResult;
	static CheckBonePosition(Mesh: SkeletalMesh,BoneIndex: number,ExpectedBonePosition: Vector): InterchangeTestFunctionResult;
	static CheckBoneCount(Mesh: SkeletalMesh,ExpectedNumberOfBones: number): InterchangeTestFunctionResult;
	static C(Other: UObject | any): SkeletalMeshImportTestFunctions;
}

declare class StaticMeshImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): StaticMeshImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): StaticMeshImportTestFunctions;
	static GetDefaultObject(): StaticMeshImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshImportTestFunctions;
	static CheckVertexIndexPosition(Mesh: StaticMesh,LODIndex: number,VertexIndex: number,ExpectedVertexPosition: Vector): InterchangeTestFunctionResult;
	static CheckVertexCount(Mesh: StaticMesh,LODIndex: number,ExpectedNumberOfVertices: number): InterchangeTestFunctionResult;
	static CheckUVChannelCount(Mesh: StaticMesh,LODIndex: number,ExpectedNumberOfUVChannels: number): InterchangeTestFunctionResult;
	static CheckTriangleCountInPolygonGroup(Mesh: StaticMesh,LODIndex: number,PolygonGroupIndex: number,ExpectedNumberOfTriangles: number): InterchangeTestFunctionResult;
	static CheckTotalTriangleCount(Mesh: StaticMesh,LODIndex: number,ExpectedTotalNumberOfTriangles: number): InterchangeTestFunctionResult;
	static CheckTotalPolygonCount(Mesh: StaticMesh,LODIndex: number,ExpectedNumberOfPolygons: number): InterchangeTestFunctionResult;
	static CheckThatMeshHasQuadsOrNgons(Mesh: StaticMesh,LODIndex: number,bMeshHasQuadsOrNgons: boolean): InterchangeTestFunctionResult;
	static CheckSocketName(Mesh: StaticMesh,SocketIndex: number,ExpectedSocketName: string): InterchangeTestFunctionResult;
	static CheckSocketLocation(Mesh: StaticMesh,SocketIndex: number,ExpectedSocketLocation: Vector): InterchangeTestFunctionResult;
	static CheckSocketCount(Mesh: StaticMesh,ExpectedSocketCount: number): InterchangeTestFunctionResult;
	static CheckSimpleCollisionPrimitiveCount(Mesh: StaticMesh,ExpectedSphereElementCount: number,ExpectedBoxElementCount: number,ExpectedCapsuleElementCount: number,ExpectedConvexElementCount: number,ExpectedTaperedCapsuleElementCount: number): InterchangeTestFunctionResult;
	static CheckSectionMaterialName(Mesh: StaticMesh,LODIndex: number,SectionIndex: number,ExpectedMaterialName: string): InterchangeTestFunctionResult;
	static CheckSectionMaterialIndex(Mesh: StaticMesh,LODIndex: number,SectionIndex: number,ExpectedMaterialIndex: number): InterchangeTestFunctionResult;
	static CheckSectionCount(Mesh: StaticMesh,LODIndex: number,ExpectedNumberOfSections: number): InterchangeTestFunctionResult;
	static CheckRenderVertexCount(Mesh: StaticMesh,LODIndex: number,ExpectedNumberOfRenderVertices: number): InterchangeTestFunctionResult;
	static CheckPolygonGroupImportedMaterialSlotName(Mesh: StaticMesh,LODIndex: number,PolygonGroupIndex: number,ExpectedImportedMaterialSlotName: string): InterchangeTestFunctionResult;
	static CheckPolygonGroupCount(Mesh: StaticMesh,LODIndex: number,ExpectedNumberOfPolygonGroups: number): InterchangeTestFunctionResult;
	static CheckPolygonCountInPolygonGroup(Mesh: StaticMesh,LODIndex: number,PolygonGroupIndex: number,ExpectedNumberOfPolygons: number): InterchangeTestFunctionResult;
	static CheckNaniteSettings(Mesh: StaticMesh,ExpectedNaniteSettings: MeshNaniteSettings): InterchangeTestFunctionResult;
	static CheckMaterialSlotCount(Mesh: StaticMesh,ExpectedNumberOfMaterialSlots: number): InterchangeTestFunctionResult;
	static CheckLodCount(Mesh: StaticMesh,ExpectedNumberOfLods: number): InterchangeTestFunctionResult;
	static CheckImportedStaticMeshCount(Meshes: StaticMesh[],ExpectedNumberOfImportedStaticMeshes: number): InterchangeTestFunctionResult;
	static CheckBuildSettings(Mesh: StaticMesh,LODIndex: number,ExpectedBuildSettings: MeshBuildSettings): InterchangeTestFunctionResult;
	static CheckAgainstGroundTruth(Mesh: StaticMesh,MeshToCompare: StaticMesh,bCheckVertexCountEqual: boolean,bCheckTriangleCountEqual: boolean,bCheckUVChannelCountEqual: boolean,bCheckCollisionPrimitiveCountEqual: boolean,bCheckVertexPositionsEqual: boolean,bCheckNormalsEqual: boolean): InterchangeTestFunctionResult;
	static C(Other: UObject | any): StaticMeshImportTestFunctions;
}

declare class TextureImportTestFunctions extends ImportTestFunctionsBase { 
	static Load(ResourceName: string): TextureImportTestFunctions;
	static Find(Outer: UObject, ResourceName: string): TextureImportTestFunctions;
	static GetDefaultObject(): TextureImportTestFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureImportTestFunctions;
	static CheckImportedTextureCount(Textures: Texture[],ExpectedNumberOfImportedTextures: number): InterchangeTestFunctionResult;
	static C(Other: UObject | any): TextureImportTestFunctions;
}

declare class InterchangeTestFunction { 
	AssetClass: UnrealEngineClass;
	OptionalAssetName: string;
	CheckFunction: UFunction;
	Parameters: Map<string, string>;
	clone() : InterchangeTestFunction;
	static C(Other: UObject | any): InterchangeTestFunction;
}

declare class InterchangeImportTestStepBase extends UObject { 
	Tests: InterchangeTestFunction[];
	static Load(ResourceName: string): InterchangeImportTestStepBase;
	static Find(Outer: UObject, ResourceName: string): InterchangeImportTestStepBase;
	static GetDefaultObject(): InterchangeImportTestStepBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeImportTestStepBase;
	static C(Other: UObject | any): InterchangeImportTestStepBase;
}

declare class InterchangeImportTestPlan extends UObject { 
	Steps: InterchangeImportTestStepBase[];
	bIsEnabledInAutomationTests: boolean;
	DisabledTestReason: string;
	static Load(ResourceName: string): InterchangeImportTestPlan;
	static Find(Outer: UObject, ResourceName: string): InterchangeImportTestPlan;
	static GetDefaultObject(): InterchangeImportTestPlan;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeImportTestPlan;
	RunThisTest(): void;
	static C(Other: UObject | any): InterchangeImportTestPlan;
}

declare class InterchangeImportTestStepImport extends InterchangeImportTestStepBase { 
	SourceFile: FilePath;
	PipelineStack: InterchangePipelineBase[];
	bEmptyDestinationFolderPriorToImport: boolean;
	bSaveThenReloadImportedAssets: boolean;
	bImportIntoLevel: boolean;
	static Load(ResourceName: string): InterchangeImportTestStepImport;
	static Find(Outer: UObject, ResourceName: string): InterchangeImportTestStepImport;
	static GetDefaultObject(): InterchangeImportTestStepImport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeImportTestStepImport;
	static C(Other: UObject | any): InterchangeImportTestStepImport;
}

declare class InterchangeImportTestStepReimport extends InterchangeImportTestStepBase { 
	SourceFileToReimport: FilePath;
	AssetTypeToReimport: UnrealEngineClass;
	AssetNameToReimport: string;
	bSaveThenReloadImportedAssets: boolean;
	static Load(ResourceName: string): InterchangeImportTestStepReimport;
	static Find(Outer: UObject, ResourceName: string): InterchangeImportTestStepReimport;
	static GetDefaultObject(): InterchangeImportTestStepReimport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeImportTestStepReimport;
	static C(Other: UObject | any): InterchangeImportTestStepReimport;
}

declare class InterchangeImportTestPlanFactory extends Factory { 
	static Load(ResourceName: string): InterchangeImportTestPlanFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeImportTestPlanFactory;
	static GetDefaultObject(): InterchangeImportTestPlanFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeImportTestPlanFactory;
	static C(Other: UObject | any): InterchangeImportTestPlanFactory;
}

declare class ObjectMixerEditorListMenuContext extends UObject { 
	static Load(ResourceName: string): ObjectMixerEditorListMenuContext;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerEditorListMenuContext;
	static GetDefaultObject(): ObjectMixerEditorListMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerEditorListMenuContext;
	static C(Other: UObject | any): ObjectMixerEditorListMenuContext;
}

declare class ObjectMixerObjectFilter extends UObject { 
	static Load(ResourceName: string): ObjectMixerObjectFilter;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerObjectFilter;
	static GetDefaultObject(): ObjectMixerObjectFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerObjectFilter;
	static C(Other: UObject | any): ObjectMixerObjectFilter;
}

declare type EObjectMixerInheritanceInclusionOptions = 'None' | 'IncludeOnlyImmediateParent' | 'IncludeOnlyImmediateChildren' | 'IncludeOnlyImmediateParentAndChildren' | 'IncludeAllParents' | 'IncludeAllChildren' | 'IncludeAllParentsAndChildren' | 'IncludeAllParentsAndOnlyImmediateChildren' | 'IncludeOnlyImmediateParentAndAllChildren' | 'EObjectMixerInheritanceInclusionOptions_MAX';
declare var EObjectMixerInheritanceInclusionOptions : { None:'None',IncludeOnlyImmediateParent:'IncludeOnlyImmediateParent',IncludeOnlyImmediateChildren:'IncludeOnlyImmediateChildren',IncludeOnlyImmediateParentAndChildren:'IncludeOnlyImmediateParentAndChildren',IncludeAllParents:'IncludeAllParents',IncludeAllChildren:'IncludeAllChildren',IncludeAllParentsAndChildren:'IncludeAllParentsAndChildren',IncludeAllParentsAndOnlyImmediateChildren:'IncludeAllParentsAndOnlyImmediateChildren',IncludeOnlyImmediateParentAndAllChildren:'IncludeOnlyImmediateParentAndAllChildren',EObjectMixerInheritanceInclusionOptions_MAX:'EObjectMixerInheritanceInclusionOptions_MAX', };
declare class ObjectMixerBlueprintObjectFilter extends ObjectMixerObjectFilter { 
	static Load(ResourceName: string): ObjectMixerBlueprintObjectFilter;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerBlueprintObjectFilter;
	static GetDefaultObject(): ObjectMixerBlueprintObjectFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerBlueprintObjectFilter;
	ShouldIncludeUnsupportedProperties(): boolean;
	OnSetRowEditorVisibility(InObject: UObject,bNewIsVisible: boolean): void;
	GetRowTooltipText(InObject: UObject,bIsHybridRow: boolean): string;
	GetRowEditorVisibility(InObject: UObject): boolean;
	GetRowDisplayName(InObject: UObject,bIsHybridRow: boolean): string;
	GetObjectMixerPropertyInheritanceInclusionOptions(): EObjectMixerInheritanceInclusionOptions;
	GetObjectMixerPlacementClassInclusionOptions(): EObjectMixerInheritanceInclusionOptions;
	GetObjectClassesToPlace(): Set<UnrealEngineClass>;
	GetObjectClassesToFilter(): Set<UnrealEngineClass>;
	GetForceAddedColumns(): Set<string>;
	GetColumnsToShowByDefault(): Set<string>;
	GetColumnsToExclude(): Set<string>;
	static C(Other: UObject | any): ObjectMixerBlueprintObjectFilter;
}

declare class ObjectMixerCollectionObjectData { 
	ObjectPath: SoftObjectPath;
	clone() : ObjectMixerCollectionObjectData;
	static C(Other: UObject | any): ObjectMixerCollectionObjectData;
}

declare class ObjectMixerCollectionObjectSet { 
	CollectionName: string;
	CollectionObjects: ObjectMixerCollectionObjectData[];
	clone() : ObjectMixerCollectionObjectSet;
	static C(Other: UObject | any): ObjectMixerCollectionObjectSet;
}

declare class ObjectMixerColumnData { 
	ColumnName: string;
	bShouldBeEnabled: boolean;
	clone() : ObjectMixerColumnData;
	static C(Other: UObject | any): ObjectMixerColumnData;
}

declare class ObjectMixerSerializationDataPerFilter { 
	FilterClassName: string;
	SerializedCollections: ObjectMixerCollectionObjectSet[];
	SerializedColumnData: Set<ObjectMixerColumnData>;
	clone() : ObjectMixerSerializationDataPerFilter;
	static C(Other: UObject | any): ObjectMixerSerializationDataPerFilter;
}

declare class ObjectMixerEditorSerializedData extends UObject { 
	SerializedDataPerFilter: Set<ObjectMixerSerializationDataPerFilter>;
	static Load(ResourceName: string): ObjectMixerEditorSerializedData;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerEditorSerializedData;
	static GetDefaultObject(): ObjectMixerEditorSerializedData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerEditorSerializedData;
	static C(Other: UObject | any): ObjectMixerEditorSerializedData;
}

declare class ObjectMixerEditorSettings extends UObject { 
	bSyncSelection: boolean;
	bExpandTreeViewItemsByDefault: boolean;
	static Load(ResourceName: string): ObjectMixerEditorSettings;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerEditorSettings;
	static GetDefaultObject(): ObjectMixerEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerEditorSettings;
	static C(Other: UObject | any): ObjectMixerEditorSettings;
}

declare class ObjectMixerBlueprintFilterFactory extends Factory { 
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): ObjectMixerBlueprintFilterFactory;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerBlueprintFilterFactory;
	static GetDefaultObject(): ObjectMixerBlueprintFilterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerBlueprintFilterFactory;
	static C(Other: UObject | any): ObjectMixerBlueprintFilterFactory;
}

declare class LightMixerEditorSettings extends UObject { 
	bHideObjectMixerMenuItem: boolean;
	static Load(ResourceName: string): LightMixerEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LightMixerEditorSettings;
	static GetDefaultObject(): LightMixerEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMixerEditorSettings;
	static C(Other: UObject | any): LightMixerEditorSettings;
}

declare class LightMixerObjectFilter extends ObjectMixerObjectFilter { 
	static Load(ResourceName: string): LightMixerObjectFilter;
	static Find(Outer: UObject, ResourceName: string): LightMixerObjectFilter;
	static GetDefaultObject(): LightMixerObjectFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMixerObjectFilter;
	static C(Other: UObject | any): LightMixerObjectFilter;
}

declare class ContentBrowserClassDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserClassDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserClassDataSource;
	static GetDefaultObject(): ContentBrowserClassDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserClassDataSource;
	static C(Other: UObject | any): ContentBrowserClassDataSource;
}

declare class ContentBrowserAssetDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserAssetDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserAssetDataSource;
	static GetDefaultObject(): ContentBrowserAssetDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserAssetDataSource;
	static C(Other: UObject | any): ContentBrowserAssetDataSource;
}

declare class CsManager_Singleton extends UObject { 
	static Load(ResourceName: string): CsManager_Singleton;
	static Find(Outer: UObject, ResourceName: string): CsManager_Singleton;
	static GetDefaultObject(): CsManager_Singleton;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Singleton;
	static C(Other: UObject | any): CsManager_Singleton;
}

declare class CsManager_Singleton_Actor extends Actor { 
	Manager_Singleton: CsManager_Singleton;
	static GetDefaultObject(): CsManager_Singleton_Actor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Singleton_Actor;
	OnDestroy(Actor: Actor): void;
	static C(Other: UObject | any): CsManager_Singleton_Actor;
}

declare class CsAnimInstance extends AnimInstance { 
	Manager_Singleton_Actor: CsManager_Singleton_Actor;
	bSetupInGameSimulation: boolean;
	ShowEmitterEditorIcons: boolean;
	ShowSoundEditorIcons: boolean;
	GlobalPlayRate: number;
	static Load(ResourceName: string): CsAnimInstance;
	static Find(Outer: UObject, ResourceName: string): CsAnimInstance;
	static GetDefaultObject(): CsAnimInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsAnimInstance;
	static C(Other: UObject | any): CsAnimInstance;
}

declare class CsAnimInstance_Mannequin_Silhouette extends AnimInstance { 
	PelvisHeight: number;
	PelvisDepth: number;
	PelvisWidth: number;
	PelvisHeightOffset: number;
	LowerTorsoHeight: number;
	LowerTorsoDepth: number;
	LowerTorsoWidth: number;
	UpperTorsoHeight: number;
	UpperTorsoDepth: number;
	UpperTorsoWidth: number;
	ChestHeight: number;
	ChestDepth: number;
	ChestWidth: number;
	HeadHeight: number;
	HeadDepth: number;
	HeadWidth: number;
	HeadScale: number;
	LatSize: number;
	LatHeightOffset: number;
	UpperarmLength: number;
	UpperarmThickness: number;
	UpperarmThickness_Depth: number;
	UpperarmThickness_Width: number;
	LowerarmLength: number;
	LowerarmThickness: number;
	LowerarmThickness_Depth: number;
	LowerarmThickness_Width: number;
	HandLength: number;
	HandThickness: number;
	HandWidth: number;
	HandScale: number;
	ThighLength: number;
	ThighThickness: number;
	ThighThickness_Depth: number;
	ThighThickness_Width: number;
	CalfLength: number;
	CalfThickness: number;
	CalfThickness_Depth: number;
	CalfThickness_Width: number;
	FootHeight: number;
	FootLength: number;
	FootWidth: number;
	FootScale: number;
	static Load(ResourceName: string): CsAnimInstance_Mannequin_Silhouette;
	static Find(Outer: UObject, ResourceName: string): CsAnimInstance_Mannequin_Silhouette;
	static GetDefaultObject(): CsAnimInstance_Mannequin_Silhouette;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsAnimInstance_Mannequin_Silhouette;
	static C(Other: UObject | any): CsAnimInstance_Mannequin_Silhouette;
}

declare type ECsFXPriority = 'Low' | 'Medium' | 'High' | 'ECsFXPriority_MAX';
declare var ECsFXPriority : { Low:'Low',Medium:'Medium',High:'High',ECsFXPriority_MAX:'ECsFXPriority_MAX', };
declare class CsFpvDrawDistance { 
	Distance1P: number;
	Distance1PSq: number;
	Distance3P: number;
	Distance3PSq: number;
	clone() : CsFpvDrawDistance;
	static C(Other: UObject | any): CsFpvDrawDistance;
}

declare class CsAnimNotifyFX { 
	Particle: ParticleSystem;
	Priority: ECsFXPriority;
	Lifetime: number;
	DeathTime: number;
	Scale: number;
	DrawDistances: CsFpvDrawDistance;
	bone: string;
	Location: Vector3f;
	Rotation: Rotator3f;
	clone() : CsAnimNotifyFX;
	static C(Other: UObject | any): CsAnimNotifyFX;
}

declare class CsAnimNotify_PlayParticleEffect extends AnimNotify { 
	FX: CsAnimNotifyFX;
	static Load(ResourceName: string): CsAnimNotify_PlayParticleEffect;
	static Find(Outer: UObject, ResourceName: string): CsAnimNotify_PlayParticleEffect;
	static GetDefaultObject(): CsAnimNotify_PlayParticleEffect;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsAnimNotify_PlayParticleEffect;
	static C(Other: UObject | any): CsAnimNotify_PlayParticleEffect;
}

declare class ECsEnum { 
	Name_Internal: string;
	clone() : ECsEnum;
	static C(Other: UObject | any): ECsEnum;
}

declare class ECsEnum_uint8 extends ECsEnum { 
	Value: number;
	clone() : ECsEnum_uint8;
	static C(Other: UObject | any): ECsEnum_uint8;
}

declare class ECsSound extends ECsEnum_uint8 { 
	clone() : ECsSound;
	static C(Other: UObject | any): ECsSound;
}

declare type ECsSoundDeallocateMethod = 'LifeTime' | 'Complete' | 'ECsSoundDeallocateMethod_MAX';
declare var ECsSoundDeallocateMethod : { LifeTime:'LifeTime',Complete:'Complete',ECsSoundDeallocateMethod_MAX:'ECsSoundDeallocateMethod_MAX', };
declare type ECsAttachmentRule = 'KeepRelative' | 'KeepWorld' | 'SnapToTarget' | 'ECsAttachmentRule_MAX';
declare var ECsAttachmentRule : { KeepRelative:'KeepRelative',KeepWorld:'KeepWorld',SnapToTarget:'SnapToTarget',ECsAttachmentRule_MAX:'ECsAttachmentRule_MAX', };
declare class CsAttachmentTransformRules { 
	LocationRule: ECsAttachmentRule;
	bAbsoluteLocation: boolean;
	RotationRule: ECsAttachmentRule;
	bAbsoluteRotation: boolean;
	ScaleRule: ECsAttachmentRule;
	bAbsoluteScale: boolean;
	bWeldSimulatedBodies: boolean;
	clone() : CsAttachmentTransformRules;
	static C(Other: UObject | any): CsAttachmentTransformRules;
}

declare class Transform3f { 
	Rotation: Quat4f;
	Translation: Vector3f;
	Scale3D: Vector3f;
	clone() : Transform3f;
	static C(Other: UObject | any): Transform3f;
}

declare class CsSound { 
	Sound: SoundBase;
	Sound_LoadFlags: number;
	Sound_Internal: SoundBase;
	Type: ECsSound;
	Attenuation: SoundAttenuation;
	Attenuation_LoadFlags: number;
	Attenuation_Internal: SoundAttenuation;
	DeallocateMethod: ECsSoundDeallocateMethod;
	Lifetime: number;
	DurationMultiplier: number;
	FadeInTime: number;
	AttachmentTransformRules: CsAttachmentTransformRules;
	bone: string;
	TransformRules: number;
	Transform: Transform3f;
	clone() : CsSound;
	static C(Other: UObject | any): CsSound;
}

declare class CsAnimNotify_PlaySound extends AnimNotify { 
	Sound: CsSound;
	static Load(ResourceName: string): CsAnimNotify_PlaySound;
	static Find(Outer: UObject, ResourceName: string): CsAnimNotify_PlaySound;
	static GetDefaultObject(): CsAnimNotify_PlaySound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsAnimNotify_PlaySound;
	static C(Other: UObject | any): CsAnimNotify_PlaySound;
}

declare class CsBindToPrePIEEnded extends Interface { 
	static Load(ResourceName: string): CsBindToPrePIEEnded;
	static Find(Outer: UObject, ResourceName: string): CsBindToPrePIEEnded;
	static GetDefaultObject(): CsBindToPrePIEEnded;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsBindToPrePIEEnded;
	static C(Other: UObject | any): CsBindToPrePIEEnded;
}

declare class CsCoordinator_ConsoleCommand extends UObject { 
	static Load(ResourceName: string): CsCoordinator_ConsoleCommand;
	static Find(Outer: UObject, ResourceName: string): CsCoordinator_ConsoleCommand;
	static GetDefaultObject(): CsCoordinator_ConsoleCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsCoordinator_ConsoleCommand;
	static C(Other: UObject | any): CsCoordinator_ConsoleCommand;
}

declare class ECsGameEventCoordinatorGroup extends ECsEnum_uint8 { 
	clone() : ECsGameEventCoordinatorGroup;
	static C(Other: UObject | any): ECsGameEventCoordinatorGroup;
}

declare class ECsGameEvent extends ECsEnum_uint8 { 
	clone() : ECsGameEvent;
	static C(Other: UObject | any): ECsGameEvent;
}

declare class CsGameEventInfo { 
	Event: ECsGameEvent;
	Value: number;
	Location: Vector3f;
	clone() : CsGameEventInfo;
	static C(Other: UObject | any): CsGameEventInfo;
}

declare class CsCoordinator_GameEvent extends UObject { 
	OnProcessGameEventInfo_ScriptEvent: UnrealEngineMulticastDelegate<(Group: ECsGameEventCoordinatorGroup, Info: CsGameEventInfo) => void>;
	OnProcessGameEventInfo_ManagerInput0_ScriptEvent: UnrealEngineMulticastDelegate<(Group: ECsGameEventCoordinatorGroup, Info: CsGameEventInfo) => void>;
	static Load(ResourceName: string): CsCoordinator_GameEvent;
	static Find(Outer: UObject, ResourceName: string): CsCoordinator_GameEvent;
	static GetDefaultObject(): CsCoordinator_GameEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsCoordinator_GameEvent;
	static C(Other: UObject | any): CsCoordinator_GameEvent;
}

declare class CsCoroutineScheduler extends UObject { 
	static Load(ResourceName: string): CsCoroutineScheduler;
	static Find(Outer: UObject, ResourceName: string): CsCoroutineScheduler;
	static GetDefaultObject(): CsCoroutineScheduler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsCoroutineScheduler;
	static C(Other: UObject | any): CsCoroutineScheduler;
}

declare class CsGetInterfaceMap extends Interface { 
	static Load(ResourceName: string): CsGetInterfaceMap;
	static Find(Outer: UObject, ResourceName: string): CsGetInterfaceMap;
	static GetDefaultObject(): CsGetInterfaceMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetInterfaceMap;
	static C(Other: UObject | any): CsGetInterfaceMap;
}

declare class CsData extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData;
	static Find(Outer: UObject, ResourceName: string): CsData;
	static GetDefaultObject(): CsData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData;
	static C(Other: UObject | any): CsData;
}

declare class CsDataRootSet { 
	EntryMap: SoftObjectPath;
	TransitionEntryToMainMap: SoftObjectPath;
	MainMap: SoftObjectPath;
	ExitMap: SoftObjectPath;
	StartupPayload: string;
	Datas: DataTable;
	DataTables: DataTable;
	Payloads: DataTable;
	clone() : CsDataRootSet;
	static C(Other: UObject | any): CsDataRootSet;
}

declare class CsDataRootSetImpl extends UObject { 
	Core_DataRootSet: CsDataRootSet;
	static Load(ResourceName: string): CsDataRootSetImpl;
	static Find(Outer: UObject, ResourceName: string): CsDataRootSetImpl;
	static GetDefaultObject(): CsDataRootSetImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsDataRootSetImpl;
	static C(Other: UObject | any): CsDataRootSetImpl;
}

declare class CsData_FX extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_FX;
	static Find(Outer: UObject, ResourceName: string): CsData_FX;
	static GetDefaultObject(): CsData_FX;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_FX;
	static C(Other: UObject | any): CsData_FX;
}

declare class CsData_Level_Setup extends Interface { 
	static Load(ResourceName: string): CsData_Level_Setup;
	static Find(Outer: UObject, ResourceName: string): CsData_Level_Setup;
	static GetDefaultObject(): CsData_Level_Setup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Level_Setup;
	static C(Other: UObject | any): CsData_Level_Setup;
}

declare class CsData_SkeletalMeshActor extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_SkeletalMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsData_SkeletalMeshActor;
	static GetDefaultObject(): CsData_SkeletalMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_SkeletalMeshActor;
	static C(Other: UObject | any): CsData_SkeletalMeshActor;
}

declare class CsData_Skin_Visual extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_Visual;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_Visual;
	static GetDefaultObject(): CsData_Skin_Visual;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_Visual;
	static C(Other: UObject | any): CsData_Skin_Visual;
}

declare class CsData_Skin_VisualMaterial extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualMaterial;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualMaterial;
	static GetDefaultObject(): CsData_Skin_VisualMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualMaterial;
	static C(Other: UObject | any): CsData_Skin_VisualMaterial;
}

declare class CsData_Skin_VisualMaterial_ParameterCollection extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualMaterial_ParameterCollection;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualMaterial_ParameterCollection;
	static GetDefaultObject(): CsData_Skin_VisualMaterial_ParameterCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualMaterial_ParameterCollection;
	static C(Other: UObject | any): CsData_Skin_VisualMaterial_ParameterCollection;
}

declare class CsData_Skin_VisualMaterial_WithParameters extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualMaterial_WithParameters;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualMaterial_WithParameters;
	static GetDefaultObject(): CsData_Skin_VisualMaterial_WithParameters;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualMaterial_WithParameters;
	static C(Other: UObject | any): CsData_Skin_VisualMaterial_WithParameters;
}

declare class CsData_Skin_VisualOrientation extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualOrientation;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualOrientation;
	static GetDefaultObject(): CsData_Skin_VisualOrientation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualOrientation;
	static C(Other: UObject | any): CsData_Skin_VisualOrientation;
}

declare class CsData_Skin_VisualUniformScale extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualUniformScale;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualUniformScale;
	static GetDefaultObject(): CsData_Skin_VisualUniformScale;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualUniformScale;
	static C(Other: UObject | any): CsData_Skin_VisualUniformScale;
}

declare class CsData_Skin_VisualScale_Uniform extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualScale_Uniform;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualScale_Uniform;
	static GetDefaultObject(): CsData_Skin_VisualScale_Uniform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualScale_Uniform;
	static C(Other: UObject | any): CsData_Skin_VisualScale_Uniform;
}

declare class CsData_Skin_VisualScale_UniformRange extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualScale_UniformRange;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualScale_UniformRange;
	static GetDefaultObject(): CsData_Skin_VisualScale_UniformRange;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualScale_UniformRange;
	static C(Other: UObject | any): CsData_Skin_VisualScale_UniformRange;
}

declare class CsData_Skin_VisualSkeletalMesh extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualSkeletalMesh;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualSkeletalMesh;
	static GetDefaultObject(): CsData_Skin_VisualSkeletalMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualSkeletalMesh;
	static C(Other: UObject | any): CsData_Skin_VisualSkeletalMesh;
}

declare class CsSkeletalMesh { 
	Mesh: SkeletalMesh;
	Mesh_LoadFlags: number;
	Mesh_Internal: SkeletalMesh;
	clone() : CsSkeletalMesh;
	static C(Other: UObject | any): CsSkeletalMesh;
}

declare class CsTArrayMaterialInterface { 
	Materials: MaterialInterface[];
	Materials_LoadFlags: number;
	Materials_Internal: MaterialInterface[];
	clone() : CsTArrayMaterialInterface;
	static C(Other: UObject | any): CsTArrayMaterialInterface;
}

declare class CsData_Skin_VisualSkeletalMeshAndMaterial extends UObject { 
	Mesh: CsSkeletalMesh;
	Materials: CsTArrayMaterialInterface;
	static Load(ResourceName: string): CsData_Skin_VisualSkeletalMeshAndMaterial;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualSkeletalMeshAndMaterial;
	static GetDefaultObject(): CsData_Skin_VisualSkeletalMeshAndMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualSkeletalMeshAndMaterial;
	static C(Other: UObject | any): CsData_Skin_VisualSkeletalMeshAndMaterial;
}

declare class CsData_Skin_VisualStaticMesh extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualStaticMesh;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualStaticMesh;
	static GetDefaultObject(): CsData_Skin_VisualStaticMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualStaticMesh;
	static C(Other: UObject | any): CsData_Skin_VisualStaticMesh;
}

declare class CsStaticMesh { 
	Mesh: StaticMesh;
	Mesh_LoadFlags: number;
	Mesh_Internal: StaticMesh;
	clone() : CsStaticMesh;
	static C(Other: UObject | any): CsStaticMesh;
}

declare class CsData_Skin_VisualStaticMeshAndMaterial extends UObject { 
	Mesh: CsStaticMesh;
	Materials: CsTArrayMaterialInterface;
	static Load(ResourceName: string): CsData_Skin_VisualStaticMeshAndMaterial;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualStaticMeshAndMaterial;
	static GetDefaultObject(): CsData_Skin_VisualStaticMeshAndMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualStaticMeshAndMaterial;
	static C(Other: UObject | any): CsData_Skin_VisualStaticMeshAndMaterial;
}

declare class CsData_Skin_VisualStaticMesh_Attachment extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Skin_VisualStaticMesh_Attachment;
	static Find(Outer: UObject, ResourceName: string): CsData_Skin_VisualStaticMesh_Attachment;
	static GetDefaultObject(): CsData_Skin_VisualStaticMesh_Attachment;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Skin_VisualStaticMesh_Attachment;
	static C(Other: UObject | any): CsData_Skin_VisualStaticMesh_Attachment;
}

declare class CsData_Sound extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Sound;
	static Find(Outer: UObject, ResourceName: string): CsData_Sound;
	static GetDefaultObject(): CsData_Sound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Sound;
	static C(Other: UObject | any): CsData_Sound;
}

declare class CsData_StaticMeshActor extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_StaticMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsData_StaticMeshActor;
	static GetDefaultObject(): CsData_StaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_StaticMeshActor;
	static C(Other: UObject | any): CsData_StaticMeshActor;
}

declare class CsData_Trace extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Trace;
	static Find(Outer: UObject, ResourceName: string): CsData_Trace;
	static GetDefaultObject(): CsData_Trace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Trace;
	static C(Other: UObject | any): CsData_Trace;
}

declare class CsData_TraceDamage extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_TraceDamage;
	static Find(Outer: UObject, ResourceName: string): CsData_TraceDamage;
	static GetDefaultObject(): CsData_TraceDamage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_TraceDamage;
	static C(Other: UObject | any): CsData_TraceDamage;
}

declare class CsData_Trace_SoundImpact extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Trace_SoundImpact;
	static Find(Outer: UObject, ResourceName: string): CsData_Trace_SoundImpact;
	static GetDefaultObject(): CsData_Trace_SoundImpact;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Trace_SoundImpact;
	static C(Other: UObject | any): CsData_Trace_SoundImpact;
}

declare class CsData_Trace_VisualImpact extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Trace_VisualImpact;
	static Find(Outer: UObject, ResourceName: string): CsData_Trace_VisualImpact;
	static GetDefaultObject(): CsData_Trace_VisualImpact;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Trace_VisualImpact;
	static C(Other: UObject | any): CsData_Trace_VisualImpact;
}

declare class CsData_Trace_VisualTracer extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Trace_VisualTracer;
	static Find(Outer: UObject, ResourceName: string): CsData_Trace_VisualTracer;
	static GetDefaultObject(): CsData_Trace_VisualTracer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Trace_VisualTracer;
	static C(Other: UObject | any): CsData_Trace_VisualTracer;
}

declare class CsData_Trace_VisualTrail extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Trace_VisualTrail;
	static Find(Outer: UObject, ResourceName: string): CsData_Trace_VisualTrail;
	static GetDefaultObject(): CsData_Trace_VisualTrail;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Trace_VisualTrail;
	static C(Other: UObject | any): CsData_Trace_VisualTrail;
}

declare class CsDeconstructInterfaceSliceMap extends Interface { 
	static Load(ResourceName: string): CsDeconstructInterfaceSliceMap;
	static Find(Outer: UObject, ResourceName: string): CsDeconstructInterfaceSliceMap;
	static GetDefaultObject(): CsDeconstructInterfaceSliceMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsDeconstructInterfaceSliceMap;
	static C(Other: UObject | any): CsDeconstructInterfaceSliceMap;
}

declare class CsSettings_DataRootSet { 
	bApply: boolean;
	bPopulateAll: boolean;
	bPopulateSubset: boolean;
	DataRowsToPopulate: Set<string>;
	DataTableRowsToPopulate: Set<string>;
	DataRootSet: Class;
	DirectoryToAlwaysCook: DirectoryPath;
	clone() : CsSettings_DataRootSet;
	static C(Other: UObject | any): CsSettings_DataRootSet;
}

declare class CsSettings_Manager_Data { 
	PayloadPoolSize: number;
	DataEntryDataPoolSize: number;
	DataEntryDataTablePoolSize: number;
	clone() : CsSettings_Manager_Data;
	static C(Other: UObject | any): CsSettings_Manager_Data;
}

declare class CsSettings_Manager_Load { 
	PoolSize: number;
	clone() : CsSettings_Manager_Load;
	static C(Other: UObject | any): CsSettings_Manager_Load;
}

declare class CsSettings_Manager_Runnable { 
	RunnablePoolSize: number;
	RunnablePayloadSize: number;
	TaskPoolSize: number;
	TaskPayloadSize: number;
	clone() : CsSettings_Manager_Runnable;
	static C(Other: UObject | any): CsSettings_Manager_Runnable;
}

declare class ECsUpdateGroup extends ECsEnum_uint8 { 
	clone() : ECsUpdateGroup;
	static C(Other: UObject | any): ECsUpdateGroup;
}

declare class CsSet_Key { 
	Set: Set<Key>;
	clone() : CsSet_Key;
	static C(Other: UObject | any): CsSet_Key;
}

declare class CsSettings_Manager_Time_CustomUpdate { 
	Keys: Set<Key>;
	DeltaTime: number;
	bAllowSustained: boolean;
	clone() : CsSettings_Manager_Time_CustomUpdate;
	static C(Other: UObject | any): CsSettings_Manager_Time_CustomUpdate;
}

declare class CsSettings_Manager_Time { 
	TogglePauseGroupByKeysMap: Map<ECsUpdateGroup, CsSet_Key>;
	CustomUpdateMap: Map<ECsUpdateGroup, CsSettings_Manager_Time_CustomUpdate>;
	clone() : CsSettings_Manager_Time;
	static C(Other: UObject | any): CsSettings_Manager_Time;
}

declare class CsSettings_Enum { 
	Name: string;
	DisplayName: string;
	clone() : CsSettings_Enum;
	static C(Other: UObject | any): CsSettings_Enum;
}

declare class ECsEnumMask_int32 extends ECsEnum { 
	Value: number;
	mask: number;
	clone() : ECsEnumMask_int32;
	static C(Other: UObject | any): ECsEnumMask_int32;
}

declare class ECsInputActionMap extends ECsEnumMask_int32 { 
	clone() : ECsInputActionMap;
	static C(Other: UObject | any): ECsInputActionMap;
}

declare class ECsInputAction extends ECsEnum_uint8 { 
	clone() : ECsInputAction;
	static C(Other: UObject | any): ECsInputAction;
}

declare class CsInputActionSet { 
	Actions: Set<ECsInputAction>;
	clone() : CsInputActionSet;
	static C(Other: UObject | any): CsInputActionSet;
}

declare type ECsInputEvent = 'FirstPressed' | 'Pressed' | 'FirstReleased' | 'Released' | 'FirstMoved' | 'Moved' | 'FirstStationary' | 'Stationary' | 'ECsInputEvent_MAX';
declare var ECsInputEvent : { FirstPressed:'FirstPressed',Pressed:'Pressed',FirstReleased:'FirstReleased',Released:'Released',FirstMoved:'FirstMoved',Moved:'Moved',FirstStationary:'FirstStationary',Stationary:'Stationary',ECsInputEvent_MAX:'ECsInputEvent_MAX', };
declare type ECsInputValue = 'Void' | 'Float' | 'Vector' | 'Rotator' | 'ECsInputValue_MAX';
declare var ECsInputValue : { Void:'Void',Float:'Float',Vector:'Vector',Rotator:'Rotator',ECsInputValue_MAX:'ECsInputValue_MAX', };
declare type ECsInputValueRule = 'None' | 'Equal' | 'NotEqual' | 'Greater' | 'GreaterOrEqual' | 'Less' | 'LessOrEqual' | 'ECsInputValueRule_MAX';
declare var ECsInputValueRule : { None:'None',Equal:'Equal',NotEqual:'NotEqual',Greater:'Greater',GreaterOrEqual:'GreaterOrEqual',Less:'Less',LessOrEqual:'LessOrEqual',ECsInputValueRule_MAX:'ECsInputValueRule_MAX', };
declare type ECsInputLocationRule = 'None' | 'Equal' | 'NotEqual' | 'ECsInputLocationRule_MAX';
declare var ECsInputLocationRule : { None:'None',Equal:'Equal',NotEqual:'NotEqual',ECsInputLocationRule_MAX:'ECsInputLocationRule_MAX', };
declare type ECsInputRotationRule = 'None' | 'Equal' | 'NotEqual' | 'ECsInputRotationRule_MAX';
declare var ECsInputRotationRule : { None:'None',Equal:'Equal',NotEqual:'NotEqual',ECsInputRotationRule_MAX:'ECsInputRotationRule_MAX', };
declare class CsInputCompareValue { 
	ValueType: ECsInputValue;
	Value: number;
	ValueRule: ECsInputValueRule;
	Location: Vector3f;
	LocationRule: ECsInputLocationRule;
	Rotation: Rotator3f;
	RotationRule: ECsInputRotationRule;
	clone() : CsInputCompareValue;
	static C(Other: UObject | any): CsInputCompareValue;
}

declare type ECsInputCompletedValueReturnType = 'PassThrough' | 'Defined' | 'Average' | 'ECsInputCompletedValueReturnType_MAX';
declare var ECsInputCompletedValueReturnType : { PassThrough:'PassThrough',Defined:'Defined',Average:'Average',ECsInputCompletedValueReturnType_MAX:'ECsInputCompletedValueReturnType_MAX', };
declare class CsInputCompletedValue { 
	ValueType: ECsInputValue;
	ReturnType: ECsInputCompletedValueReturnType;
	Value: number;
	Location: Vector3f;
	Rotation: Rotator3f;
	clone() : CsInputCompletedValue;
	static C(Other: UObject | any): CsInputCompletedValue;
}

declare class CsInputDescription { 
	bPass: boolean;
	Action: ECsInputAction;
	Event: ECsInputEvent;
	bAnyEvent: boolean;
	CompareValue: CsInputCompareValue;
	CompletedValue: CsInputCompletedValue;
	clone() : CsInputDescription;
	static C(Other: UObject | any): CsInputDescription;
}

declare class CsInputWord { 
	bCompleted: boolean;
	CompletedTime: number;
	bConsume: boolean;
	AndInputs: CsInputDescription[];
	OrInputs: CsInputDescription[];
	CompletedValues: CsInputCompletedValue[];
	clone() : CsInputWord;
	static C(Other: UObject | any): CsInputWord;
}

declare class CsInputPhrase { 
	bCompleted: boolean;
	CompletedTime: number;
	bInterval: boolean;
	Interval: number;
	bFrames: boolean;
	Frames: number;
	Words: CsInputWord[];
	CompletedValues: CsInputCompletedValue[];
	clone() : CsInputPhrase;
	static C(Other: UObject | any): CsInputPhrase;
}

declare class CsInputSentence { 
	bActive: boolean;
	bCompleted: boolean;
	CompletedTime: number;
	Cooldown: number;
	bInterval: boolean;
	Interval: number;
	bFrames: boolean;
	Frames: number;
	Phrases: CsInputPhrase[];
	CompletedValues: CsInputCompletedValue[];
	clone() : CsInputSentence;
	static C(Other: UObject | any): CsInputSentence;
}

declare class CsGameEventDefinition { 
	Event: ECsGameEvent;
	Sentence: CsInputSentence;
	clone() : CsGameEventDefinition;
	static C(Other: UObject | any): CsGameEventDefinition;
}

declare class CsInputActionAndEvent { 
	Action: ECsInputAction;
	Event: ECsInputEvent;
	clone() : CsInputActionAndEvent;
	static C(Other: UObject | any): CsInputActionAndEvent;
}

declare class CsGameEventDefinitionActionOneOrWordNoCompletedValue { 
	GameEvent: ECsGameEvent;
	Words: CsInputActionAndEvent[];
	clone() : CsGameEventDefinitionActionOneOrWordNoCompletedValue;
	static C(Other: UObject | any): CsGameEventDefinitionActionOneOrWordNoCompletedValue;
}

declare class CsGameEventDefinitionActionOneOrWordOneEventNoCompletedValue { 
	GameEvent: ECsGameEvent;
	Actions: ECsInputAction[];
	Event: ECsInputEvent;
	clone() : CsGameEventDefinitionActionOneOrWordOneEventNoCompletedValue;
	static C(Other: UObject | any): CsGameEventDefinitionActionOneOrWordOneEventNoCompletedValue;
}

declare class CsGameEventDefinitionAxisOneOrWordNoComparePassThroughValue { 
	GameEvent: ECsGameEvent;
	Actions: ECsInputAction[];
	clone() : CsGameEventDefinitionAxisOneOrWordNoComparePassThroughValue;
	static C(Other: UObject | any): CsGameEventDefinitionAxisOneOrWordNoComparePassThroughValue;
}

declare class CsSettings_Input { 
	InputActionMappings: Map<ECsInputActionMap, CsInputActionSet>;
	GameEventDefinitions: Set<CsGameEventDefinition>;
	GameEventDefinitions_ActionOneOrWordNoCompleteValue: Set<CsGameEventDefinitionActionOneOrWordNoCompletedValue>;
	GameEventDefinitions_ActionOneOrWordOneEventNoCompleteValue: Set<CsGameEventDefinitionActionOneOrWordOneEventNoCompletedValue>;
	GameEventDefinitions_AxisOneOrWordNoComparePassThroughValue: Set<CsGameEventDefinitionAxisOneOrWordNoComparePassThroughValue>;
	GameEventDefinitionSummary: string[];
	GameEventPriorityList: string;
	GameEventPriorityList_Internal: ECsGameEvent[];
	AnyKeyAction: ECsInputAction;
	clone() : CsSettings_Input;
	static C(Other: UObject | any): CsSettings_Input;
}

declare class CsSettings_Manager_Input { 
	InputPoolSize: number;
	RemappedGamepadControllerIds: number[];
	clone() : CsSettings_Manager_Input;
	static C(Other: UObject | any): CsSettings_Manager_Input;
}

declare type ECsPopulateEnumMapMethod = 'Native' | 'EnumSettings' | 'DataTable' | 'ECsPopulateEnumMapMethod_MAX';
declare var ECsPopulateEnumMapMethod : { Native:'Native',EnumSettings:'EnumSettings',DataTable:'DataTable',ECsPopulateEnumMapMethod_MAX:'ECsPopulateEnumMapMethod_MAX', };
declare class ECsFX extends ECsEnum_uint8 { 
	clone() : ECsFX;
	static C(Other: UObject | any): ECsFX;
}

declare class CsSettings_Manager_FX_PoolParams { 
	Class: Class;
	PoolSize: number;
	PayloadSize: number;
	clone() : CsSettings_Manager_FX_PoolParams;
	static C(Other: UObject | any): CsSettings_Manager_FX_PoolParams;
}

declare class CsSettings_Manager_FX_Parameters { 
	PoolSizes: number;
	clone() : CsSettings_Manager_FX_Parameters;
	static C(Other: UObject | any): CsSettings_Manager_FX_Parameters;
}

declare class CsSettings_Manager_FX { 
	PoolParams: Map<ECsFX, CsSettings_Manager_FX_PoolParams>;
	Parameters: CsSettings_Manager_FX_Parameters;
	clone() : CsSettings_Manager_FX;
	static C(Other: UObject | any): CsSettings_Manager_FX;
}

declare class CsSettings_Manager_Sound_TypeArray { 
	Types: ECsSound[];
	clone() : CsSettings_Manager_Sound_TypeArray;
	static C(Other: UObject | any): CsSettings_Manager_Sound_TypeArray;
}

declare class CsSettings_Manager_Sound_PoolParams { 
	Class: Class;
	PoolSize: number;
	PayloadSize: number;
	clone() : CsSettings_Manager_Sound_PoolParams;
	static C(Other: UObject | any): CsSettings_Manager_Sound_PoolParams;
}

declare class CsSettings_Manager_Sound { 
	TypesByUpdateGroupMap: Map<ECsUpdateGroup, CsSettings_Manager_Sound_TypeArray>;
	PoolParams: Map<ECsSound, CsSettings_Manager_Sound_PoolParams>;
	clone() : CsSettings_Manager_Sound;
	static C(Other: UObject | any): CsSettings_Manager_Sound;
}

declare class ECsEnum_uint32 extends ECsEnum { 
	Value: number;
	clone() : ECsEnum_uint32;
	static C(Other: UObject | any): ECsEnum_uint32;
}

declare class ECsCVarDraw extends ECsEnum_uint32 { 
	clone() : ECsCVarDraw;
	static C(Other: UObject | any): ECsCVarDraw;
}

declare type ECsDebugDrawPriority = 'Any' | 'CVar' | 'Flag' | 'ECsDebugDrawPriority_MAX';
declare var ECsDebugDrawPriority : { Any:'Any',CVar:'CVar',Flag:'Flag',ECsDebugDrawPriority_MAX:'ECsDebugDrawPriority_MAX', };
declare class CsDebugDrawTraceShape { 
	CVar: ECsCVarDraw;
	bEnableInPreview: boolean;
	PriorityInPlay: ECsDebugDrawPriority;
	bEnableInPlay: boolean;
	Color: LinearColor;
	HitColor: LinearColor;
	Lifetime: number;
	clone() : CsDebugDrawTraceShape;
	static C(Other: UObject | any): CsDebugDrawTraceShape;
}

declare class CsSettings_Manager_Trace_Debug { 
	DrawRequest: CsDebugDrawTraceShape;
	DrawResponse: CsDebugDrawTraceShape;
	clone() : CsSettings_Manager_Trace_Debug;
	static C(Other: UObject | any): CsSettings_Manager_Trace_Debug;
}

declare class CsSettings_Manager_Trace { 
	MaxRequestsProcessedPerTick: number;
	PoolSize: number;
	Debug: CsSettings_Manager_Trace_Debug;
	clone() : CsSettings_Manager_Trace;
	static C(Other: UObject | any): CsSettings_Manager_Trace;
}

declare class ECsStaticMeshActor extends ECsEnum_uint8 { 
	clone() : ECsStaticMeshActor;
	static C(Other: UObject | any): ECsStaticMeshActor;
}

declare class CsSettings_Manager_StaticMeshActor_PoolParams { 
	Class: Class;
	PoolSize: number;
	PayloadSize: number;
	clone() : CsSettings_Manager_StaticMeshActor_PoolParams;
	static C(Other: UObject | any): CsSettings_Manager_StaticMeshActor_PoolParams;
}

declare class CsSettings_Manager_StaticMeshActor { 
	PoolParams: Map<ECsStaticMeshActor, CsSettings_Manager_StaticMeshActor_PoolParams>;
	clone() : CsSettings_Manager_StaticMeshActor;
	static C(Other: UObject | any): CsSettings_Manager_StaticMeshActor;
}

declare class CsSettings_Manager_InstancedStaticMeshComponent { 
	PoolSize: number;
	clone() : CsSettings_Manager_InstancedStaticMeshComponent;
	static C(Other: UObject | any): CsSettings_Manager_InstancedStaticMeshComponent;
}

declare class ECsSkeletalMeshActor extends ECsEnum_uint8 { 
	clone() : ECsSkeletalMeshActor;
	static C(Other: UObject | any): ECsSkeletalMeshActor;
}

declare class CsSettings_Manager_SkeletalMeshActor_PoolParams { 
	Class: Class;
	PoolSize: number;
	PayloadSize: number;
	clone() : CsSettings_Manager_SkeletalMeshActor_PoolParams;
	static C(Other: UObject | any): CsSettings_Manager_SkeletalMeshActor_PoolParams;
}

declare class CsSettings_Manager_SkeletalMeshActor { 
	PoolParams: Map<ECsSkeletalMeshActor, CsSettings_Manager_SkeletalMeshActor_PoolParams>;
	clone() : CsSettings_Manager_SkeletalMeshActor;
	static C(Other: UObject | any): CsSettings_Manager_SkeletalMeshActor;
}

declare class CsSettings_Entry { 
	CompanyLogoDisplayTime: number;
	GameSplashDisplayTime: number;
	clone() : CsSettings_Entry;
	static C(Other: UObject | any): CsSettings_Entry;
}

declare type ECsDebugDrawRotation = 'Absolute' | 'Offset' | 'ECsDebugDrawRotation_MAX';
declare var ECsDebugDrawRotation : { Absolute:'Absolute',Offset:'Offset',ECsDebugDrawRotation_MAX:'ECsDebugDrawRotation_MAX', };
declare class CsDebugDrawBox { 
	CVar: ECsCVarDraw;
	bEnableInPreview: boolean;
	PriorityInPlay: ECsDebugDrawPriority;
	bEnableInPlay: boolean;
	Location: Vector3f;
	RotationType: ECsDebugDrawRotation;
	Rotation: Rotator3f;
	Extent: Vector3f;
	Color: Color;
	Lifetime: number;
	bSolid: boolean;
	Thickness: number;
	clone() : CsDebugDrawBox;
	static C(Other: UObject | any): CsDebugDrawBox;
}

declare class CsDebugDrawSphere { 
	CVar: ECsCVarDraw;
	bEnableInPreview: boolean;
	PriorityInPlay: ECsDebugDrawPriority;
	bEnableInPlay: boolean;
	Location: Vector3f;
	RotationType: ECsDebugDrawRotation;
	Rotation: Rotator3f;
	MinRadius: number;
	MaxRadius: number;
	Segments: number;
	Color: Color;
	Lifetime: number;
	Thickness: number;
	clone() : CsDebugDrawSphere;
	static C(Other: UObject | any): CsDebugDrawSphere;
}

declare class CsSettings_Container_UniformGrid_Debug { 
	Cell: CsDebugDrawBox;
	Element: CsDebugDrawSphere;
	clone() : CsSettings_Container_UniformGrid_Debug;
	static C(Other: UObject | any): CsSettings_Container_UniformGrid_Debug;
}

declare class CsSettings_Container_UniformGrid { 
	Debug: CsSettings_Container_UniformGrid_Debug;
	clone() : CsSettings_Container_UniformGrid;
	static C(Other: UObject | any): CsSettings_Container_UniformGrid;
}

declare class CsSettings_Container { 
	UniformGrid: CsSettings_Container_UniformGrid;
	clone() : CsSettings_Container;
	static C(Other: UObject | any): CsSettings_Container;
}

declare class CsSettings_PIE { 
	bSwapViewportDimensions: boolean;
	NewWindowWidth: number;
	NewWindowHeight: number;
	clone() : CsSettings_PIE;
	static C(Other: UObject | any): CsSettings_PIE;
}

declare class CsDeveloperSettings extends DeveloperSettings { 
	DataRootSet: Class;
	DataRootSets: CsSettings_DataRootSet;
	Manager_Data: CsSettings_Manager_Data;
	bOnEditorStartup_LoadDataRootSet: boolean;
	Manager_Load: CsSettings_Manager_Load;
	Manager_Runnable: CsSettings_Manager_Runnable;
	Manager_Time: CsSettings_Manager_Time;
	ECsInputActionMap: string;
	ECsInputActionMap_Internal: CsSettings_Enum[];
	ECsGameEvent: string;
	ECsGameEvent_Internal: CsSettings_Enum[];
	Input: CsSettings_Input;
	Manager_Input: CsSettings_Manager_Input;
	ECsFX_PopulateEnumMapMethod: ECsPopulateEnumMapMethod;
	ECsFX: CsSettings_Enum[];
	FXs: DataTable[];
	Manager_FX: CsSettings_Manager_FX;
	ECsSound_PopulateEnumMapMethod: ECsPopulateEnumMapMethod;
	ECsSound: CsSettings_Enum[];
	Sounds: DataTable[];
	Manager_Sound: CsSettings_Manager_Sound;
	Manager_Trace: CsSettings_Manager_Trace;
	ECsStaticMeshActor_PopulateEnumMapMethod: ECsPopulateEnumMapMethod;
	ECsStaticMeshActor: CsSettings_Enum[];
	Default_ECsStaticMeshActor: ECsStaticMeshActor;
	Manager_StaticMeshActor: CsSettings_Manager_StaticMeshActor;
	Manager_InstancedStaticMeshComponent: CsSettings_Manager_InstancedStaticMeshComponent;
	ECsSkeletalMeshActor_PopulateEnumMapMethod: ECsPopulateEnumMapMethod;
	ECsSkeletalMeshActor: CsSettings_Enum[];
	Default_ECsSkeletalMeshActor: ECsSkeletalMeshActor;
	Manager_SkeletalMeshActor: CsSettings_Manager_SkeletalMeshActor;
	ECsVertexAnimNotify_PopulateEnumMapMethod: ECsPopulateEnumMapMethod;
	ECsVertexAnimNotify: CsSettings_Enum[];
	Entry: CsSettings_Entry;
	Container: CsSettings_Container;
	bOverridePIESettings: boolean;
	bPIE_Mobile: boolean;
	bPIE_VulkanPreviewMobile: boolean;
	PIE: CsSettings_PIE;
	PIE_Mobile: CsSettings_PIE;
	Standalone: CsSettings_PIE;
	Standalone_Mobile: CsSettings_PIE;
	static Load(ResourceName: string): CsDeveloperSettings;
	static Find(Outer: UObject, ResourceName: string): CsDeveloperSettings;
	static GetDefaultObject(): CsDeveloperSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsDeveloperSettings;
	static C(Other: UObject | any): CsDeveloperSettings;
}

declare type ECsPooledObjectState = 'WarmUp' | 'Active' | 'Inactive' | 'ECsPooledObjectState_MAX';
declare var ECsPooledObjectState : { WarmUp:'WarmUp',Active:'Active',Inactive:'Inactive',ECsPooledObjectState_MAX:'ECsPooledObjectState_MAX', };
declare class CsPooledObjectCache { 
	Index: number;
	bAllocated: boolean;
	State: ECsPooledObjectState;
	Instigator: UObject;
	Owner: UObject;
	Parent: UObject;
	WarmupTime: number;
	bLifeTime: boolean;
	Lifetime: number;
	Time: number;
	Realtime: number;
	Frame: number;
	Frame_Script: number;
	ElapsedTime: number;
	clone() : CsPooledObjectCache;
	static C(Other: UObject | any): CsPooledObjectCache;
}

declare class CsFxCache extends CsPooledObjectCache { 
	Emitter: CsEmitter;
	Particle: ParticleSystem;
	Priority: ECsFXPriority;
	DeathTime: number;
	DeathStartTime: number;
	IsDying: boolean;
	bone: string;
	Scale: number;
	Scale3D: Vector3f;
	Location: Vector3f;
	Rotation: Rotator3f;
	Transform: Transform3f;
	clone() : CsFxCache;
	static C(Other: UObject | any): CsFxCache;
}

declare class CsEmitter extends Emitter { 
	Cache: CsFxCache;
	static GetDefaultObject(): CsEmitter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsEmitter;
	static C(Other: UObject | any): CsEmitter;
}

declare class CsEnumStructUserDefinedEnumMap extends UObject { 
	InputAction: UserDefinedEnum;
	static Load(ResourceName: string): CsEnumStructUserDefinedEnumMap;
	static Find(Outer: UObject, ResourceName: string): CsEnumStructUserDefinedEnumMap;
	static GetDefaultObject(): CsEnumStructUserDefinedEnumMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsEnumStructUserDefinedEnumMap;
	static C(Other: UObject | any): CsEnumStructUserDefinedEnumMap;
}

declare class CsFXActorPooled extends Interface { 
	static Load(ResourceName: string): CsFXActorPooled;
	static Find(Outer: UObject, ResourceName: string): CsFXActorPooled;
	static GetDefaultObject(): CsFXActorPooled;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsFXActorPooled;
	static C(Other: UObject | any): CsFXActorPooled;
}

declare class CsFXActorPooledImpl extends UObject { 
	FX: NiagaraActor;
	static Load(ResourceName: string): CsFXActorPooledImpl;
	static Find(Outer: UObject, ResourceName: string): CsFXActorPooledImpl;
	static GetDefaultObject(): CsFXActorPooledImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsFXActorPooledImpl;
	GetFX(): NiagaraActor;
	static C(Other: UObject | any): CsFXActorPooledImpl;
}

declare class CsGameInstance extends GameInstance { 
	Manager_Singleton: CsManager_Singleton;
	static Load(ResourceName: string): CsGameInstance;
	static Find(Outer: UObject, ResourceName: string): CsGameInstance;
	static GetDefaultObject(): CsGameInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGameInstance;
	static C(Other: UObject | any): CsGameInstance;
}

declare class CsGameMode extends GameMode { 
	static GetDefaultObject(): CsGameMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGameMode;
	static C(Other: UObject | any): CsGameMode;
}

declare class CsGameViewportClient extends GameViewportClient { 
	static Load(ResourceName: string): CsGameViewportClient;
	static Find(Outer: UObject, ResourceName: string): CsGameViewportClient;
	static GetDefaultObject(): CsGameViewportClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGameViewportClient;
	static C(Other: UObject | any): CsGameViewportClient;
}

declare class ECsGestureType extends ECsEnum_uint8 { 
	clone() : ECsGestureType;
	static C(Other: UObject | any): ECsGestureType;
}

declare class CsGesture extends UObject { 
	CurrentWorld: World;
	Type: ECsGestureType;
	Completed: boolean;
	OnComplete_ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): CsGesture;
	static Find(Outer: UObject, ResourceName: string): CsGesture;
	static GetDefaultObject(): CsGesture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGesture;
	SetCurrentWorld(InWorld: World): void;
	GetCurrentWorld(): World;
	CanProcessInputs(): boolean;
	static C(Other: UObject | any): CsGesture;
}

declare class CsGetCameraComponent extends Interface { 
	static Load(ResourceName: string): CsGetCameraComponent;
	static Find(Outer: UObject, ResourceName: string): CsGetCameraComponent;
	static GetDefaultObject(): CsGetCameraComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCameraComponent;
	static C(Other: UObject | any): CsGetCameraComponent;
}

declare class CsGetCollisionHitCount extends Interface { 
	static Load(ResourceName: string): CsGetCollisionHitCount;
	static Find(Outer: UObject, ResourceName: string): CsGetCollisionHitCount;
	static GetDefaultObject(): CsGetCollisionHitCount;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCollisionHitCount;
	static C(Other: UObject | any): CsGetCollisionHitCount;
}

declare class CsGetCoordinatorConsoleCommand extends Interface { 
	static Load(ResourceName: string): CsGetCoordinatorConsoleCommand;
	static Find(Outer: UObject, ResourceName: string): CsGetCoordinatorConsoleCommand;
	static GetDefaultObject(): CsGetCoordinatorConsoleCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCoordinatorConsoleCommand;
	static C(Other: UObject | any): CsGetCoordinatorConsoleCommand;
}

declare class CsGetCoordinatorGameEvent extends Interface { 
	static Load(ResourceName: string): CsGetCoordinatorGameEvent;
	static Find(Outer: UObject, ResourceName: string): CsGetCoordinatorGameEvent;
	static GetDefaultObject(): CsGetCoordinatorGameEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCoordinatorGameEvent;
	static C(Other: UObject | any): CsGetCoordinatorGameEvent;
}

declare class CsGetCoroutineScheduler extends Interface { 
	static Load(ResourceName: string): CsGetCoroutineScheduler;
	static Find(Outer: UObject, ResourceName: string): CsGetCoroutineScheduler;
	static GetDefaultObject(): CsGetCoroutineScheduler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCoroutineScheduler;
	static C(Other: UObject | any): CsGetCoroutineScheduler;
}

declare class CsGetCreatedObjects extends Interface { 
	static Load(ResourceName: string): CsGetCreatedObjects;
	static Find(Outer: UObject, ResourceName: string): CsGetCreatedObjects;
	static GetDefaultObject(): CsGetCreatedObjects;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCreatedObjects;
	static C(Other: UObject | any): CsGetCreatedObjects;
}

declare class CsGetDataRootSet extends Interface { 
	static Load(ResourceName: string): CsGetDataRootSet;
	static Find(Outer: UObject, ResourceName: string): CsGetDataRootSet;
	static GetDefaultObject(): CsGetDataRootSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetDataRootSet;
	static C(Other: UObject | any): CsGetDataRootSet;
}

declare class CsGetLevelPayload extends Interface { 
	static Load(ResourceName: string): CsGetLevelPayload;
	static Find(Outer: UObject, ResourceName: string): CsGetLevelPayload;
	static GetDefaultObject(): CsGetLevelPayload;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetLevelPayload;
	static C(Other: UObject | any): CsGetLevelPayload;
}

declare class CsGetLevelSetupData extends Interface { 
	static Load(ResourceName: string): CsGetLevelSetupData;
	static Find(Outer: UObject, ResourceName: string): CsGetLevelSetupData;
	static GetDefaultObject(): CsGetLevelSetupData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetLevelSetupData;
	static C(Other: UObject | any): CsGetLevelSetupData;
}

declare class CsGetManagerData extends Interface { 
	static Load(ResourceName: string): CsGetManagerData;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerData;
	static GetDefaultObject(): CsGetManagerData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerData;
	static C(Other: UObject | any): CsGetManagerData;
}

declare class CsGetManagerFX extends Interface { 
	static Load(ResourceName: string): CsGetManagerFX;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerFX;
	static GetDefaultObject(): CsGetManagerFX;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerFX;
	static C(Other: UObject | any): CsGetManagerFX;
}

declare class CsGetManagerInput extends Interface { 
	static Load(ResourceName: string): CsGetManagerInput;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerInput;
	static GetDefaultObject(): CsGetManagerInput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerInput;
	static C(Other: UObject | any): CsGetManagerInput;
}

declare class CsGetManagerInstancedStaticMeshComponent extends Interface { 
	static Load(ResourceName: string): CsGetManagerInstancedStaticMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerInstancedStaticMeshComponent;
	static GetDefaultObject(): CsGetManagerInstancedStaticMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerInstancedStaticMeshComponent;
	static C(Other: UObject | any): CsGetManagerInstancedStaticMeshComponent;
}

declare class CsGetManagerLevel extends Interface { 
	static Load(ResourceName: string): CsGetManagerLevel;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerLevel;
	static GetDefaultObject(): CsGetManagerLevel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerLevel;
	static C(Other: UObject | any): CsGetManagerLevel;
}

declare class CsGetManagerLoad extends Interface { 
	static Load(ResourceName: string): CsGetManagerLoad;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerLoad;
	static GetDefaultObject(): CsGetManagerLoad;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerLoad;
	static C(Other: UObject | any): CsGetManagerLoad;
}

declare class CsGetManagerMaterial extends Interface { 
	static Load(ResourceName: string): CsGetManagerMaterial;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerMaterial;
	static GetDefaultObject(): CsGetManagerMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerMaterial;
	static C(Other: UObject | any): CsGetManagerMaterial;
}

declare class CsGetManagerMPCProxy extends Interface { 
	static Load(ResourceName: string): CsGetManagerMPCProxy;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerMPCProxy;
	static GetDefaultObject(): CsGetManagerMPCProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerMPCProxy;
	static C(Other: UObject | any): CsGetManagerMPCProxy;
}

declare class CsGetManagerRunnable extends Interface { 
	static Load(ResourceName: string): CsGetManagerRunnable;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerRunnable;
	static GetDefaultObject(): CsGetManagerRunnable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerRunnable;
	static C(Other: UObject | any): CsGetManagerRunnable;
}

declare class CsGetManagerSingleton extends Interface { 
	static Load(ResourceName: string): CsGetManagerSingleton;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerSingleton;
	static GetDefaultObject(): CsGetManagerSingleton;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerSingleton;
	static C(Other: UObject | any): CsGetManagerSingleton;
}

declare class CsGetManagerSkeletalMeshActor extends Interface { 
	static Load(ResourceName: string): CsGetManagerSkeletalMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerSkeletalMeshActor;
	static GetDefaultObject(): CsGetManagerSkeletalMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerSkeletalMeshActor;
	static C(Other: UObject | any): CsGetManagerSkeletalMeshActor;
}

declare class CsGetManagerSound extends Interface { 
	static Load(ResourceName: string): CsGetManagerSound;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerSound;
	static GetDefaultObject(): CsGetManagerSound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerSound;
	static C(Other: UObject | any): CsGetManagerSound;
}

declare class CsGetManagerSpawner extends Interface { 
	static Load(ResourceName: string): CsGetManagerSpawner;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerSpawner;
	static GetDefaultObject(): CsGetManagerSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerSpawner;
	static C(Other: UObject | any): CsGetManagerSpawner;
}

declare class CsGetManagerStaticMeshActor extends Interface { 
	static Load(ResourceName: string): CsGetManagerStaticMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerStaticMeshActor;
	static GetDefaultObject(): CsGetManagerStaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerStaticMeshActor;
	static C(Other: UObject | any): CsGetManagerStaticMeshActor;
}

declare class CsGetManagerTime extends Interface { 
	static Load(ResourceName: string): CsGetManagerTime;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerTime;
	static GetDefaultObject(): CsGetManagerTime;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerTime;
	static C(Other: UObject | any): CsGetManagerTime;
}

declare class CsGetManagerTrace extends Interface { 
	static Load(ResourceName: string): CsGetManagerTrace;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerTrace;
	static GetDefaultObject(): CsGetManagerTrace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerTrace;
	static C(Other: UObject | any): CsGetManagerTrace;
}

declare class CsGetManagerUnitTest extends Interface { 
	static Load(ResourceName: string): CsGetManagerUnitTest;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerUnitTest;
	static GetDefaultObject(): CsGetManagerUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerUnitTest;
	static C(Other: UObject | any): CsGetManagerUnitTest;
}

declare class CsGetMaterialTool extends Interface { 
	static Load(ResourceName: string): CsGetMaterialTool;
	static Find(Outer: UObject, ResourceName: string): CsGetMaterialTool;
	static GetDefaultObject(): CsGetMaterialTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetMaterialTool;
	static C(Other: UObject | any): CsGetMaterialTool;
}

declare class CsGetNiagaraTool extends Interface { 
	static Load(ResourceName: string): CsGetNiagaraTool;
	static Find(Outer: UObject, ResourceName: string): CsGetNiagaraTool;
	static GetDefaultObject(): CsGetNiagaraTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetNiagaraTool;
	static C(Other: UObject | any): CsGetNiagaraTool;
}

declare class CsGetPersistentObjects extends Interface { 
	static Load(ResourceName: string): CsGetPersistentObjects;
	static Find(Outer: UObject, ResourceName: string): CsGetPersistentObjects;
	static GetDefaultObject(): CsGetPersistentObjects;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetPersistentObjects;
	static C(Other: UObject | any): CsGetPersistentObjects;
}

declare class CsGetPlayMode extends Interface { 
	static Load(ResourceName: string): CsGetPlayMode;
	static Find(Outer: UObject, ResourceName: string): CsGetPlayMode;
	static GetDefaultObject(): CsGetPlayMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetPlayMode;
	static C(Other: UObject | any): CsGetPlayMode;
}

declare class CsGetScriptEntryPointInfo extends Interface { 
	static Load(ResourceName: string): CsGetScriptEntryPointInfo;
	static Find(Outer: UObject, ResourceName: string): CsGetScriptEntryPointInfo;
	static GetDefaultObject(): CsGetScriptEntryPointInfo;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetScriptEntryPointInfo;
	static C(Other: UObject | any): CsGetScriptEntryPointInfo;
}

declare class CsGetScriptInfo extends Interface { 
	static Load(ResourceName: string): CsGetScriptInfo;
	static Find(Outer: UObject, ResourceName: string): CsGetScriptInfo;
	static GetDefaultObject(): CsGetScriptInfo;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetScriptInfo;
	static C(Other: UObject | any): CsGetScriptInfo;
}

declare class CsGetSettingsManagerSpawner extends Interface { 
	static Load(ResourceName: string): CsGetSettingsManagerSpawner;
	static Find(Outer: UObject, ResourceName: string): CsGetSettingsManagerSpawner;
	static GetDefaultObject(): CsGetSettingsManagerSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetSettingsManagerSpawner;
	static C(Other: UObject | any): CsGetSettingsManagerSpawner;
}

declare class CsGetUpdateGroup extends Interface { 
	static Load(ResourceName: string): CsGetUpdateGroup;
	static Find(Outer: UObject, ResourceName: string): CsGetUpdateGroup;
	static GetDefaultObject(): CsGetUpdateGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetUpdateGroup;
	static C(Other: UObject | any): CsGetUpdateGroup;
}

declare class CsGetVisualComponent extends Interface { 
	static Load(ResourceName: string): CsGetVisualComponent;
	static Find(Outer: UObject, ResourceName: string): CsGetVisualComponent;
	static GetDefaultObject(): CsGetVisualComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetVisualComponent;
	static C(Other: UObject | any): CsGetVisualComponent;
}

declare class CsInputListener extends UObject { 
	static Load(ResourceName: string): CsInputListener;
	static Find(Outer: UObject, ResourceName: string): CsInputListener;
	static GetDefaultObject(): CsInputListener;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsInputListener;
	static C(Other: UObject | any): CsInputListener;
}

declare class CsLastTickActor extends Actor { 
	static GetDefaultObject(): CsLastTickActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLastTickActor;
	static C(Other: UObject | any): CsLastTickActor;
}

declare class CsResourceSize { 
	Bytes: number;
	Kilobytes: number;
	Megabytes: number;
	clone() : CsResourceSize;
	static C(Other: UObject | any): CsResourceSize;
}

declare class CsSoftObjectPath { 
	Path: SoftObjectPath;
	Size: CsResourceSize;
	clone() : CsSoftObjectPath;
	static C(Other: UObject | any): CsSoftObjectPath;
}

declare class CsTArraySoftObjectPath { 
	Paths: CsSoftObjectPath[];
	Set: Set<CsSoftObjectPath>;
	Internal: SoftObjectPath[];
	InternalSet: Set<SoftObjectPath>;
	Size: CsResourceSize;
	clone() : CsTArraySoftObjectPath;
	static C(Other: UObject | any): CsTArraySoftObjectPath;
}

declare class CsPayload_Data { 
	Name: string;
	Data: Class;
	Paths: CsTArraySoftObjectPath;
	clone() : CsPayload_Data;
	static C(Other: UObject | any): CsPayload_Data;
}

declare class CsPayload_DataTable { 
	Name: string;
	DataTable: DataTable;
	bAllRows: boolean;
	Rows: Set<string>;
	Paths: CsTArraySoftObjectPath;
	PathsByRowMap: Map<string, CsTArraySoftObjectPath>;
	clone() : CsPayload_DataTable;
	static C(Other: UObject | any): CsPayload_DataTable;
}

declare class CsPayload extends TableRowBase { 
	Index: number;
	bUpdateDataRootSetOnSave: boolean;
	Datas: CsPayload_Data[];
	DataMap: Map<string, CsPayload_Data>;
	DataTables: CsPayload_DataTable[];
	DataTableMap: Map<string, CsPayload_DataTable>;
	Paths: CsTArraySoftObjectPath;
	clone() : CsPayload;
	static C(Other: UObject | any): CsPayload;
}

declare class CsLevelScriptActor extends LevelScriptActor { 
	bTest: boolean;
	Payload: CsPayload;
	Payload_Levels: Map<string, CsPayload>;
	Payload_Combined: CsPayload;
	static GetDefaultObject(): CsLevelScriptActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLevelScriptActor;
	ReceiveStartPlay(): void;
	static C(Other: UObject | any): CsLevelScriptActor;
}

declare class CsLibrary_Asset extends UObject { 
	static Load(ResourceName: string): CsLibrary_Asset;
	static Find(Outer: UObject, ResourceName: string): CsLibrary_Asset;
	static GetDefaultObject(): CsLibrary_Asset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibrary_Asset;
	static C(Other: UObject | any): CsLibrary_Asset;
}

declare class CsLibrary_Common extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): CsLibrary_Common;
	static Find(Outer: UObject, ResourceName: string): CsLibrary_Common;
	static GetDefaultObject(): CsLibrary_Common;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibrary_Common;
	static TransitionToLevel(InWorld: World,Level: string,GameMode: string): void;
	static Rotator_GetAngleDelta(A: Rotator3f,B: Rotator3f): Rotator3f;
	static Rotator_GetAbsAngleDelta(A: Rotator3f,B: Rotator3f): Rotator3f;
	static RequestEndPlayMap(): void;
	static LerpAngle(FromAngle: number,ToAngle: number,LerpRate: number,DeltaSeconds: number,MinAngle: number,MaxAngle: number): number;
	static IsVR(): boolean;
	static IsVive(): boolean;
	static IsStereoscopic3D(): boolean;
	static IsRift(): boolean;
	static IsDeveloperBuild(): boolean;
	static IsDedicatedServer(InActor: Actor): boolean;
	static GetSquaredDistanceToLocalControllerEye(InWorld: World,Location: Vector3f): number;
	static GetNumBitFlags(Bitmask: number,MaxBits: number): number;
	static GetHMDWorldViewPoint(InWorld: World,OutLocation?: Vector3f,OutRotation?: Rotator3f): {OutLocation: Vector3f, OutRotation: Rotator3f};
	static GetHMDOrientationAndPosition(DeviceRotation?: Rotator3f,DevicePosition?: Vector3f): {DeviceRotation: Rotator3f, DevicePosition: Vector3f};
	static BuildUniformVector(V: Vector3f,Axes: number): Vector3f;
	static BuildUniformRotator(R: Rotator3f,Axes: number): Rotator3f;
	static C(Other: UObject | any): CsLibrary_Common;
}

declare class CsLibrary_Load extends UObject { 
	static Load(ResourceName: string): CsLibrary_Load;
	static Find(Outer: UObject, ResourceName: string): CsLibrary_Load;
	static GetDefaultObject(): CsLibrary_Load;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibrary_Load;
	static C(Other: UObject | any): CsLibrary_Load;
}

declare class CsLibrary_Manager_HMD extends UObject { 
	static Load(ResourceName: string): CsLibrary_Manager_HMD;
	static Find(Outer: UObject, ResourceName: string): CsLibrary_Manager_HMD;
	static GetDefaultObject(): CsLibrary_Manager_HMD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibrary_Manager_HMD;
	static C(Other: UObject | any): CsLibrary_Manager_HMD;
}

declare class CsManager extends Actor { 
	static GetDefaultObject(): CsManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager;
	static C(Other: UObject | any): CsManager;
}

declare class CsManagerLoad_Task_LoadObjects extends UObject { 
	LoadedObjects: UObject[];
	static Load(ResourceName: string): CsManagerLoad_Task_LoadObjects;
	static Find(Outer: UObject, ResourceName: string): CsManagerLoad_Task_LoadObjects;
	static GetDefaultObject(): CsManagerLoad_Task_LoadObjects;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerLoad_Task_LoadObjects;
	static C(Other: UObject | any): CsManagerLoad_Task_LoadObjects;
}

declare class CsDataRootSetContainer { 
	Data: Class;
	Data_Internal: UObject;
	Data_Class: UnrealEngineClass;
	clone() : CsDataRootSetContainer;
	static C(Other: UObject | any): CsDataRootSetContainer;
}

declare class CsMap_ObjectByName { 
	Map: Map<string, UObject>;
	clone() : CsMap_ObjectByName;
	static C(Other: UObject | any): CsMap_ObjectByName;
}

declare class CsManager_Data extends UObject { 
	DataRootSet: CsDataRootSetContainer;
	DataObjectsAdded_Loaded: UObject[];
	DataCompositionObjectsAdded_Loaded: Map<string, CsMap_ObjectByName>;
	static Load(ResourceName: string): CsManager_Data;
	static Find(Outer: UObject, ResourceName: string): CsManager_Data;
	static GetDefaultObject(): CsManager_Data;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Data;
	static C(Other: UObject | any): CsManager_Data;
}

declare class CsManager_Decal extends Actor { 
	static GetDefaultObject(): CsManager_Decal;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Decal;
	static C(Other: UObject | any): CsManager_Decal;
}

declare class CsManager_FX extends UObject { 
	Pool: UObject[];
	ClassMap: Map<ECsFX, UnrealEngineClass>;
	DataTables: DataTable[];
	static Load(ResourceName: string): CsManager_FX;
	static Find(Outer: UObject, ResourceName: string): CsManager_FX;
	static GetDefaultObject(): CsManager_FX;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_FX;
	static C(Other: UObject | any): CsManager_FX;
}

declare class CsManager_Gesture extends UObject { 
	CurrentWorld: World;
	Gestures: CsGesture[];
	static Load(ResourceName: string): CsManager_Gesture;
	static Find(Outer: UObject, ResourceName: string): CsManager_Gesture;
	static GetDefaultObject(): CsManager_Gesture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Gesture;
	SetCurrentWorld(InWorld: World): void;
	GetGesture(GestureType: ECsGestureType): CsGesture;
	GetCurrentWorld(): World;
	AddGesture(GestureClass: UnrealEngineClass): void;
	static C(Other: UObject | any): CsManager_Gesture;
}

declare class CsManager_HMD extends UObject { 
	static Load(ResourceName: string): CsManager_HMD;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD;
	static GetDefaultObject(): CsManager_HMD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD;
	static C(Other: UObject | any): CsManager_HMD;
}

declare class CsManager_Input extends ActorComponent { 
	Listeners: CsInputListener[];
	OnAnyKey_Pressed_ScriptEvent: UnrealEngineMulticastDelegate<(Key: Key) => void>;
	OnAnyKey_Released_ScriptEvent: UnrealEngineMulticastDelegate<(Key: Key) => void>;
	OnActiveMode_Change_ScriptEvent: UnrealEngineMulticastDelegate<(Previous: number, Current: number) => void>;
	static Load(ResourceName: string): CsManager_Input;
	static Find(Outer: UObject, ResourceName: string): CsManager_Input;
	static GetDefaultObject(): CsManager_Input;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Input;
	static C(Other: UObject | any): CsManager_Input;
}

declare class CsManager_InstancedStaticMeshComponent extends Actor { 
	DefaultSceneRoot: SceneComponent;
	Components: InstancedStaticMeshComponent[];
	static GetDefaultObject(): CsManager_InstancedStaticMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_InstancedStaticMeshComponent;
	static C(Other: UObject | any): CsManager_InstancedStaticMeshComponent;
}

declare class CsManager_Level extends UObject { 
	static Load(ResourceName: string): CsManager_Level;
	static Find(Outer: UObject, ResourceName: string): CsManager_Level;
	static GetDefaultObject(): CsManager_Level;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Level;
	static C(Other: UObject | any): CsManager_Level;
}

declare class CsManager_Load extends UObject { 
	Tasks: UObject[];
	static Load(ResourceName: string): CsManager_Load;
	static Find(Outer: UObject, ResourceName: string): CsManager_Load;
	static GetDefaultObject(): CsManager_Load;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Load;
	static C(Other: UObject | any): CsManager_Load;
}

declare class CsManager_Material extends UObject { 
	static Load(ResourceName: string): CsManager_Material;
	static Find(Outer: UObject, ResourceName: string): CsManager_Material;
	static GetDefaultObject(): CsManager_Material;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Material;
	static C(Other: UObject | any): CsManager_Material;
}

declare class ECsProcess extends ECsEnum_uint8 { 
	clone() : ECsProcess;
	static C(Other: UObject | any): ECsProcess;
}

declare class CsPooledObjectOld extends UObject { 
	OnCreatePool_ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	DeAllocate_ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): CsPooledObjectOld;
	static Find(Outer: UObject, ResourceName: string): CsPooledObjectOld;
	static GetDefaultObject(): CsPooledObjectOld;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsPooledObjectOld;
	static C(Other: UObject | any): CsPooledObjectOld;
}

declare type ECsProcessMonitorOutputEventPurpose = 'FireOnce' | 'Loop' | 'ECsProcessMonitorOutputEventPurpose_MAX';
declare var ECsProcessMonitorOutputEventPurpose : { FireOnce:'FireOnce',Loop:'Loop',ECsProcessMonitorOutputEventPurpose_MAX:'ECsProcessMonitorOutputEventPurpose_MAX', };
declare type ECsStringWordRule = 'MatchCase' | 'Lower' | 'ECsStringWordRule_MAX';
declare var ECsStringWordRule : { MatchCase:'MatchCase',Lower:'Lower',ECsStringWordRule_MAX:'ECsStringWordRule_MAX', };
declare type ECsStringEscapeType = 'Int' | 'Float' | 'String' | 'CR' | 'LF' | 'EOL' | 'ECsStringEscapeType_MAX';
declare var ECsStringEscapeType : { Int:'Int',Float:'Float',String:'String',CR:'CR',LF:'LF',EOL:'EOL',ECsStringEscapeType_MAX:'ECsStringEscapeType_MAX', };
declare class CsStringWordInfo { 
	Value: string;
	Rule: ECsStringWordRule;
	Altered: string;
	EscapeType: ECsStringEscapeType;
	clone() : CsStringWordInfo;
	static C(Other: UObject | any): CsStringWordInfo;
}

declare class CsStringWord { 
	Completed: boolean;
	Ands: CsStringWordInfo[];
	Ors: CsStringWordInfo[];
	clone() : CsStringWord;
	static C(Other: UObject | any): CsStringWord;
}

declare class CsStringPhrase { 
	Completed: boolean;
	Words: CsStringWord[];
	clone() : CsStringPhrase;
	static C(Other: UObject | any): CsStringPhrase;
}

declare class CsStringSentence { 
	Completed: boolean;
	Phrases: CsStringPhrase[];
	clone() : CsStringSentence;
	static C(Other: UObject | any): CsStringSentence;
}

declare class CsStringParagraph { 
	Completed: boolean;
	Sentences: CsStringSentence[];
	ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	clone() : CsStringParagraph;
	static C(Other: UObject | any): CsStringParagraph;
}

declare class CsProcessMonitorOutputEvent { 
	Name: string;
	Purpose: ECsProcessMonitorOutputEventPurpose;
	Paragraph: CsStringParagraph;
	Completed: boolean;
	ScriptEvent: UnrealEngineMulticastDelegate<(Name: string) => void>;
	clone() : CsProcessMonitorOutputEvent;
	static C(Other: UObject | any): CsProcessMonitorOutputEvent;
}

declare class CsProcess extends CsPooledObjectOld { 
	OnOutputRecieved_ScriptEvent: UnrealEngineMulticastDelegate<(Name: string) => void>;
	static Load(ResourceName: string): CsProcess;
	static Find(Outer: UObject, ResourceName: string): CsProcess;
	static GetDefaultObject(): CsProcess;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsProcess;
	StopRead(): void;
	RunCommand(Command: string): void;
	AddMonitorOutputEvent(Event: CsProcessMonitorOutputEvent): void;
	static C(Other: UObject | any): CsProcess;
}

declare class ICsManager_Process extends UObject { 
	static Load(ResourceName: string): ICsManager_Process;
	static Find(Outer: UObject, ResourceName: string): ICsManager_Process;
	static GetDefaultObject(): ICsManager_Process;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ICsManager_Process;
	OnTick(DeltaTime: number): void;
	IsExhausted(Type: ECsProcess): boolean;
	GetActivePoolSize(Type: ECsProcess): number;
	DeAllocateAll(): void;
	DeAllocate(Type: ECsProcess,Index: number): boolean;
	CreatePool(Type: ECsProcess,Size: number): void;
	Clear(): void;
	AddToPool(Type: ECsProcess,Process: CsProcess): void;
	AddToActivePool(Type: ECsProcess,Process: CsProcess): void;
	static C(Other: UObject | any): ICsManager_Process;
}

declare class CsManager_Runnable extends UObject { 
	static Load(ResourceName: string): CsManager_Runnable;
	static Find(Outer: UObject, ResourceName: string): CsManager_Runnable;
	static GetDefaultObject(): CsManager_Runnable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Runnable;
	static C(Other: UObject | any): CsManager_Runnable;
}

declare class CsManager_Sense extends ActorComponent { 
	static Load(ResourceName: string): CsManager_Sense;
	static Find(Outer: UObject, ResourceName: string): CsManager_Sense;
	static GetDefaultObject(): CsManager_Sense;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Sense;
	static C(Other: UObject | any): CsManager_Sense;
}

declare class CsManager_Singleton_FX extends CsManager_Singleton { 
	Manager_FX: CsManager_FX;
	static Load(ResourceName: string): CsManager_Singleton_FX;
	static Find(Outer: UObject, ResourceName: string): CsManager_Singleton_FX;
	static GetDefaultObject(): CsManager_Singleton_FX;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Singleton_FX;
	static C(Other: UObject | any): CsManager_Singleton_FX;
}

declare class CsManager_Sound extends UObject { 
	Pool: UObject[];
	ClassMap: Map<ECsSound, UnrealEngineClass>;
	DataTables: DataTable[];
	static Load(ResourceName: string): CsManager_Sound;
	static Find(Outer: UObject, ResourceName: string): CsManager_Sound;
	static GetDefaultObject(): CsManager_Sound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Sound;
	static C(Other: UObject | any): CsManager_Sound;
}

declare class CsManager_Singleton_Sound extends CsManager_Singleton { 
	Manager_Sound: CsManager_Sound;
	static Load(ResourceName: string): CsManager_Singleton_Sound;
	static Find(Outer: UObject, ResourceName: string): CsManager_Singleton_Sound;
	static GetDefaultObject(): CsManager_Singleton_Sound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Singleton_Sound;
	static C(Other: UObject | any): CsManager_Singleton_Sound;
}

declare class CsManager_SkeletalMeshActor extends UObject { 
	Pool: UObject[];
	ClassMap: Map<ECsSkeletalMeshActor, UnrealEngineClass>;
	static Load(ResourceName: string): CsManager_SkeletalMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsManager_SkeletalMeshActor;
	static GetDefaultObject(): CsManager_SkeletalMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_SkeletalMeshActor;
	static C(Other: UObject | any): CsManager_SkeletalMeshActor;
}

declare class CsManager_Spawner extends UObject { 
	static Load(ResourceName: string): CsManager_Spawner;
	static Find(Outer: UObject, ResourceName: string): CsManager_Spawner;
	static GetDefaultObject(): CsManager_Spawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Spawner;
	static C(Other: UObject | any): CsManager_Spawner;
}

declare class CsManager_StaticMeshActor extends UObject { 
	Pool: UObject[];
	ClassMap: Map<ECsStaticMeshActor, UnrealEngineClass>;
	static Load(ResourceName: string): CsManager_StaticMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsManager_StaticMeshActor;
	static GetDefaultObject(): CsManager_StaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_StaticMeshActor;
	static C(Other: UObject | any): CsManager_StaticMeshActor;
}

declare class CsDeltaTime { 
	Time: number;
	Realtime: number;
	Timespan: Timespan;
	Frame: number;
	clone() : CsDeltaTime;
	static C(Other: UObject | any): CsDeltaTime;
}

declare class CsManager_Time extends UObject { 
	OnUpdate_ScriptEvent: UnrealEngineMulticastDelegate<(Group: ECsUpdateGroup, DeltaTime: CsDeltaTime) => void>;
	static Load(ResourceName: string): CsManager_Time;
	static Find(Outer: UObject, ResourceName: string): CsManager_Time;
	static GetDefaultObject(): CsManager_Time;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Time;
	static C(Other: UObject | any): CsManager_Time;
}

declare class CsManager_Trace extends UObject { 
	static Load(ResourceName: string): CsManager_Trace;
	static Find(Outer: UObject, ResourceName: string): CsManager_Trace;
	static GetDefaultObject(): CsManager_Trace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Trace;
	static C(Other: UObject | any): CsManager_Trace;
}

declare class CsManager_UnitTest extends UObject { 
	static Load(ResourceName: string): CsManager_UnitTest;
	static Find(Outer: UObject, ResourceName: string): CsManager_UnitTest;
	static GetDefaultObject(): CsManager_UnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_UnitTest;
	StartUnitTestPlans(): void;
	static C(Other: UObject | any): CsManager_UnitTest;
}

declare class CsMannequinSilhouette_BoneControlInfo { 
	Transform: Transform;
	Last_Transform: Transform;
	clone() : CsMannequinSilhouette_BoneControlInfo;
	static C(Other: UObject | any): CsMannequinSilhouette_BoneControlInfo;
}

declare class CsMannequinSilhouette_BoneControl_Core { 
	Height: number;
	Depth: number;
	Width: number;
	HeightOffset: number;
	clone() : CsMannequinSilhouette_BoneControl_Core;
	static C(Other: UObject | any): CsMannequinSilhouette_BoneControl_Core;
}

declare class CsMannequinSilhouette_BoneControl_Head { 
	Height: number;
	Depth: number;
	Width: number;
	Scale: number;
	HeightOffset: number;
	clone() : CsMannequinSilhouette_BoneControl_Head;
	static C(Other: UObject | any): CsMannequinSilhouette_BoneControl_Head;
}

declare class CsMannequinSilhouette_BoneControl_Limb { 
	Length: number;
	Thickness: number;
	Depth: number;
	Width: number;
	clone() : CsMannequinSilhouette_BoneControl_Limb;
	static C(Other: UObject | any): CsMannequinSilhouette_BoneControl_Limb;
}

declare class CsMannequinSilhouette_BoneControl_Hand { 
	Length: number;
	Thickness: number;
	Width: number;
	Scale: number;
	clone() : CsMannequinSilhouette_BoneControl_Hand;
	static C(Other: UObject | any): CsMannequinSilhouette_BoneControl_Hand;
}

declare class CsMannequinSilhouette_BoneControl_Foot { 
	Height: number;
	Length: number;
	Width: number;
	Scale: number;
	clone() : CsMannequinSilhouette_BoneControl_Foot;
	static C(Other: UObject | any): CsMannequinSilhouette_BoneControl_Foot;
}

declare class CsMannequin_Silhouette extends Actor { 
	SkeletalMeshComponent: SkeletalMeshComponent;
	pelvis: StaticMeshComponent;
	thigh_l: StaticMeshComponent;
	thigh_r: StaticMeshComponent;
	calf_l: StaticMeshComponent;
	calf_r: StaticMeshComponent;
	foot_l: StaticMeshComponent;
	foot_r: StaticMeshComponent;
	spine_01: StaticMeshComponent;
	spine_02: StaticMeshComponent;
	spine_03: StaticMeshComponent;
	clavicle_l: StaticMeshComponent;
	clavicle_r: StaticMeshComponent;
	upperarm_l: StaticMeshComponent;
	upperarm_r: StaticMeshComponent;
	lowerarm_l: StaticMeshComponent;
	lowerarm_r: StaticMeshComponent;
	hand_l: StaticMeshComponent;
	hand_r: StaticMeshComponent;
	neck_01: StaticMeshComponent;
	head: StaticMeshComponent;
	pelvis_ctrl: SceneComponent;
	thigh_l_ctrl: SceneComponent;
	thigh_r_ctrl: SceneComponent;
	calf_l_ctrl: SceneComponent;
	calf_r_ctrl: SceneComponent;
	foot_l_ctrl: SceneComponent;
	foot_r_ctrl: SceneComponent;
	spine_01_ctrl: SceneComponent;
	spine_02_ctrl: SceneComponent;
	spine_03_ctrl: SceneComponent;
	clavicle_l_ctrl: SceneComponent;
	clavicle_l_ctrl_info: CsMannequinSilhouette_BoneControlInfo;
	clavicle_r_ctrl: SceneComponent;
	clavicle_r_ctrl_info: CsMannequinSilhouette_BoneControlInfo;
	upperarm_l_ctrl: SceneComponent;
	upperarm_r_ctrl: SceneComponent;
	lowerarm_l_ctrl: SceneComponent;
	lowerarm_r_ctrl: SceneComponent;
	hand_l_ctrl: SceneComponent;
	hand_r_ctrl: SceneComponent;
	neck_01_ctrl: SceneComponent;
	neck_01_ctrl_info: CsMannequinSilhouette_BoneControlInfo;
	head_ctrl: SceneComponent;
	PelvisControl: CsMannequinSilhouette_BoneControl_Core;
	LowerTorsoControl: CsMannequinSilhouette_BoneControl_Core;
	UpperTorsoControl: CsMannequinSilhouette_BoneControl_Core;
	ChestControl: CsMannequinSilhouette_BoneControl_Core;
	HeadControl: CsMannequinSilhouette_BoneControl_Head;
	LatSize: number;
	LatHeightOffset: number;
	UpperarmControl: CsMannequinSilhouette_BoneControl_Limb;
	LowerarmControl: CsMannequinSilhouette_BoneControl_Limb;
	HandControl: CsMannequinSilhouette_BoneControl_Hand;
	ThighControl: CsMannequinSilhouette_BoneControl_Limb;
	CalfControl: CsMannequinSilhouette_BoneControl_Limb;
	FootControl: CsMannequinSilhouette_BoneControl_Foot;
	static GetDefaultObject(): CsMannequin_Silhouette;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsMannequin_Silhouette;
	OnDestroy(Actor: Actor): void;
	static C(Other: UObject | any): CsMannequin_Silhouette;
}

declare class CsNiagaraActor extends NiagaraActor { 
	bDestroyOnSystemFinish2: boolean;
	static GetDefaultObject(): CsNiagaraActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsNiagaraActor;
	OnNiagaraSystemFinished2(FinishedComponent: NiagaraComponent): void;
	static C(Other: UObject | any): CsNiagaraActor;
}

declare class CsObject_Movement extends Interface { 
	static Load(ResourceName: string): CsObject_Movement;
	static Find(Outer: UObject, ResourceName: string): CsObject_Movement;
	static GetDefaultObject(): CsObject_Movement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsObject_Movement;
	static C(Other: UObject | any): CsObject_Movement;
}

declare class CsObject_Orientation extends Interface { 
	static Load(ResourceName: string): CsObject_Orientation;
	static Find(Outer: UObject, ResourceName: string): CsObject_Orientation;
	static GetDefaultObject(): CsObject_Orientation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsObject_Orientation;
	static C(Other: UObject | any): CsObject_Orientation;
}

declare class CsOnConstructObject extends Interface { 
	static Load(ResourceName: string): CsOnConstructObject;
	static Find(Outer: UObject, ResourceName: string): CsOnConstructObject;
	static GetDefaultObject(): CsOnConstructObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsOnConstructObject;
	static C(Other: UObject | any): CsOnConstructObject;
}

declare class CsOnProcessGameEventInfo extends Interface { 
	static Load(ResourceName: string): CsOnProcessGameEventInfo;
	static Find(Outer: UObject, ResourceName: string): CsOnProcessGameEventInfo;
	static GetDefaultObject(): CsOnProcessGameEventInfo;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsOnProcessGameEventInfo;
	static C(Other: UObject | any): CsOnProcessGameEventInfo;
}

declare class CsPause extends Interface { 
	static Load(ResourceName: string): CsPause;
	static Find(Outer: UObject, ResourceName: string): CsPause;
	static GetDefaultObject(): CsPause;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsPause;
	static C(Other: UObject | any): CsPause;
}

declare type ECsVisibility = 'Hidden' | 'Visible' | 'ECsVisibility_MAX';
declare var ECsVisibility : { Hidden:'Hidden',Visible:'Visible',ECsVisibility_MAX:'ECsVisibility_MAX', };
declare class CsPooledActor extends Actor { 
	Override_OnTick_ScriptEvent: UnrealEngineMulticastDelegate<(Index: number, DeltaSeconds: number) => void>;
	PoolIndex: number;
	IsPlaceable: boolean;
	Visibility: ECsVisibility;
	static GetDefaultObject(): CsPooledActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsPooledActor;
	Show(): void;
	Hide(): void;
	static C(Other: UObject | any): CsPooledActor;
}

declare class CsPooledObject extends Interface { 
	static Load(ResourceName: string): CsPooledObject;
	static Find(Outer: UObject, ResourceName: string): CsPooledObject;
	static GetDefaultObject(): CsPooledObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsPooledObject;
	static C(Other: UObject | any): CsPooledObject;
}

declare type ECsEasingType = 'Linear' | 'BounceIn' | 'BounceOut' | 'BounceInOut' | 'QuadIn' | 'QuadOut' | 'QuadInOut' | 'CubicIn' | 'CubicOut' | 'CubicInOut' | 'ExpoIn' | 'ExpoOut' | 'ExpoInOut' | 'BackIn' | 'BackOut' | 'BackInOut' | 'ElasticIn' | 'ElasticOut' | 'ElasticInOut' | 'ECsEasingType_MAX';
declare var ECsEasingType : { Linear:'Linear',BounceIn:'BounceIn',BounceOut:'BounceOut',BounceInOut:'BounceInOut',QuadIn:'QuadIn',QuadOut:'QuadOut',QuadInOut:'QuadInOut',CubicIn:'CubicIn',CubicOut:'CubicOut',CubicInOut:'CubicInOut',ExpoIn:'ExpoIn',ExpoOut:'ExpoOut',ExpoInOut:'ExpoInOut',BackIn:'BackIn',BackOut:'BackOut',BackInOut:'BackInOut',ElasticIn:'ElasticIn',ElasticOut:'ElasticOut',ElasticInOut:'ElasticInOut',ECsEasingType_MAX:'ECsEasingType_MAX', };
declare type ECsMover = 'Actor' | 'Component' | 'ECsMover_MAX';
declare var ECsMover : { Actor:'Actor',Component:'Component',ECsMover_MAX:'ECsMover_MAX', };
declare type ECsMoveDestination = 'Location' | 'Actor' | 'Component' | 'Bone' | 'ECsMoveDestination_MAX';
declare var ECsMoveDestination : { Location:'Location',Actor:'Actor',Component:'Component',Bone:'Bone',ECsMoveDestination_MAX:'ECsMoveDestination_MAX', };
declare class CsMoveByInterp_Params { 
	Easing: ECsEasingType;
	Mover: ECsMover;
	FromLocation: Vector3f;
	MoveObjectName: string;
	MoveActorLabel: string;
	MoveActor: Actor;
	MoveComponent: SceneComponent;
	Destination: ECsMoveDestination;
	ToLocation: Vector3f;
	ToObjectName: string;
	ToActorLabel: string;
	ToBone: string;
	ToActor: Actor;
	ToComponent: SceneComponent;
	ToMeshComponent: SkeletalMeshComponent;
	Time: number;
	Group: ECsUpdateGroup;
	clone() : CsMoveByInterp_Params;
	static C(Other: UObject | any): CsMoveByInterp_Params;
}

declare class CsRoutineHandle { 
	Index: number;
	Handle: Guid;
	clone() : CsRoutineHandle;
	static C(Other: UObject | any): CsRoutineHandle;
}

declare class CsScriptLibrary_Actor extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Actor;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Actor;
	static GetDefaultObject(): CsScriptLibrary_Actor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Actor;
	static SpawnByStringPath(Context: string,WorldContextObject: UObject,Path: string): Actor;
	static SpawnBySoftObjectPath(Context: string,WorldContextObject: UObject,Path: SoftObjectPath): Actor;
	static SetRootComponent(Context: string,Actor: Actor,Component: SceneComponent): void;
	static SetRole(Context: string,Actor: Actor,Role: ENetRole): void;
	static SetMaterials(Context: string,Actor: Actor,Materials: MaterialInterface[]): void;
	static SetMaterial(Context: string,Actor: Actor,Material: MaterialInterface,Index: number): void;
	static SetHiddenInGame(Context: string,Actor: Actor,NewHidden: boolean,ApplyToAttachChildren: boolean): boolean;
	static MoveByInterp(Context: string,WorldContextObject: UObject,Params: CsMoveByInterp_Params): CsRoutineHandle;
	static IsDistanceSq2D_LessThanOrEqual(Context: string,A: Actor,B: Actor,R: number): boolean;
	static GetNormalAtoB(Context: string,A: Actor,B: Actor,OutNormal?: Vector3f,OutDistanceSq?: number,OutDistance?: number): {OutNormal: Vector3f, OutDistanceSq: number, OutDistance: number, $: boolean};
	static GetNormal2DAtoB(Context: string,A: Actor,B: Actor,OutNormal?: Vector3f,OutDistanceSq?: number,OutDistance?: number): {OutNormal: Vector3f, OutDistanceSq: number, OutDistance: number, $: boolean};
	static GetDistanceSq2D(Context: string,A: Actor,B: Actor): number;
	static GetDistanceSq(Context: string,A: Actor,B: Actor): number;
	static GetByTag(Context: string,WorldContextObject: UObject,Tag: string): Actor;
	static GetByName(Context: string,WorldContextObject: UObject,Name: string): Actor;
	static GetByLabel(Context: string,WorldContextObject: UObject,Label: string): Actor;
	static GetAnyByTags(Context: string,WorldContextObject: UObject,Tags: string[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static C(Other: UObject | any): CsScriptLibrary_Actor;
}

declare type ECsAnim2DPlayback = 'Forward' | 'Reverse' | 'PingPong' | 'Loop' | 'LoopReverse' | 'LoopPingPong' | 'Custom' | 'ECsAnim2DPlayback_MAX';
declare var ECsAnim2DPlayback : { Forward:'Forward',Reverse:'Reverse',PingPong:'PingPong',Loop:'Loop',LoopReverse:'LoopReverse',LoopPingPong:'LoopPingPong',Custom:'Custom',ECsAnim2DPlayback_MAX:'ECsAnim2DPlayback_MAX', };
declare type ECsAnim2DPlayRate = 'PR_0_001' | 'PR_0_01' | 'PR_0_1' | 'PR_1' | 'PR_10' | 'PR_100' | 'PR_15Fps' | 'PR_24Fps' | 'PR_25Fps' | 'PR_29_97Fps' | 'PR_30Fps' | 'PR_48Fps' | 'PR_50Fps' | 'PR_59_94Fps' | 'PR_60Fps' | 'PR_120Fps' | 'PR_CustomDeltaTime' | 'PR_CustomTotalTime' | 'PR_CustomDeltaTimeAndTotalTime' | 'PR_CustomDeltaTimePerFrame' | 'PR_Custom' | 'ECsAnim2DPlayRate_MAX';
declare var ECsAnim2DPlayRate : { PR_0_001:'PR_0_001',PR_0_01:'PR_0_01',PR_0_1:'PR_0_1',PR_1:'PR_1',PR_10:'PR_10',PR_100:'PR_100',PR_15Fps:'PR_15Fps',PR_24Fps:'PR_24Fps',PR_25Fps:'PR_25Fps',PR_29_97Fps:'PR_29_97Fps',PR_30Fps:'PR_30Fps',PR_48Fps:'PR_48Fps',PR_50Fps:'PR_50Fps',PR_59_94Fps:'PR_59_94Fps',PR_60Fps:'PR_60Fps',PR_120Fps:'PR_120Fps',PR_CustomDeltaTime:'PR_CustomDeltaTime',PR_CustomTotalTime:'PR_CustomTotalTime',PR_CustomDeltaTimeAndTotalTime:'PR_CustomDeltaTimeAndTotalTime',PR_CustomDeltaTimePerFrame:'PR_CustomDeltaTimePerFrame',PR_Custom:'PR_Custom',ECsAnim2DPlayRate_MAX:'ECsAnim2DPlayRate_MAX', };
declare type ECsAnimPlayScale = 'Default' | 'TotalTime' | 'ECsAnimPlayScale_MAX';
declare var ECsAnimPlayScale : { Default:'Default',TotalTime:'TotalTime',ECsAnimPlayScale_MAX:'ECsAnimPlayScale_MAX', };
declare class CsTexture extends TableRowBase { 
	Texture: Texture;
	Texture_LoadFlags: number;
	Texture_Internal: Texture;
	clone() : CsTexture;
	static C(Other: UObject | any): CsTexture;
}

declare class CsAnim2DFlipbookTextureFrame { 
	Texture: CsTexture;
	ParameterName: string;
	DeltaTime: number;
	clone() : CsAnim2DFlipbookTextureFrame;
	static C(Other: UObject | any): CsAnim2DFlipbookTextureFrame;
}

declare class CsAnim2DFlipbookTexture { 
	Playback: ECsAnim2DPlayback;
	PlayRate: ECsAnim2DPlayRate;
	PlayScale: ECsAnimPlayScale;
	DeltaTime: number;
	TotalTime: number;
	Frames: CsAnim2DFlipbookTextureFrame[];
	TotalCount: number;
	clone() : CsAnim2DFlipbookTexture;
	static C(Other: UObject | any): CsAnim2DFlipbookTexture;
}

declare class CsAnim2DTextureFlipbook_Params { 
	ContextRoot: UObject;
	UpdateGroup: ECsUpdateGroup;
	Owner: UObject;
	Mid: MaterialInstanceDynamic;
	Anim: CsAnim2DFlipbookTexture;
	clone() : CsAnim2DTextureFlipbook_Params;
	static C(Other: UObject | any): CsAnim2DTextureFlipbook_Params;
}

declare class CsMaterialInterface { 
	Material: MaterialInterface;
	Material_LoadFlags: number;
	Material_Internal: MaterialInterface;
	clone() : CsMaterialInterface;
	static C(Other: UObject | any): CsMaterialInterface;
}

declare class CsAnim2DMaterialFlipbookFrame { 
	Material: CsMaterialInterface;
	Index: number;
	DeltaTime: number;
	clone() : CsAnim2DMaterialFlipbookFrame;
	static C(Other: UObject | any): CsAnim2DMaterialFlipbookFrame;
}

declare class CsAnim2DMaterialFlipbook { 
	Playback: ECsAnim2DPlayback;
	PlayRate: ECsAnim2DPlayRate;
	PlayScale: ECsAnimPlayScale;
	DeltaTime: number;
	TotalTime: number;
	Frames: CsAnim2DMaterialFlipbookFrame[];
	TotalCount: number;
	clone() : CsAnim2DMaterialFlipbook;
	static C(Other: UObject | any): CsAnim2DMaterialFlipbook;
}

declare class CsAnim2DMaterialFlipbook_Params { 
	ContextRoot: UObject;
	UpdateGroup: ECsUpdateGroup;
	Owner: UObject;
	Component: PrimitiveComponent;
	Anim: CsAnim2DMaterialFlipbook;
	clone() : CsAnim2DMaterialFlipbook_Params;
	static C(Other: UObject | any): CsAnim2DMaterialFlipbook_Params;
}

declare class CsScriptLibrary_Anim2D extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Anim2D;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Anim2D;
	static GetDefaultObject(): CsScriptLibrary_Anim2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Anim2D;
	static PlayTextureFlipbook(Context: string,Params: CsAnim2DTextureFlipbook_Params): CsRoutineHandle;
	static PlayMaterialFlipbook(Context: string,Params: CsAnim2DMaterialFlipbook_Params): CsRoutineHandle;
	static C(Other: UObject | any): CsScriptLibrary_Anim2D;
}

declare class CsScriptLibrary_AnimInstance extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_AnimInstance;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_AnimInstance;
	static GetDefaultObject(): CsScriptLibrary_AnimInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_AnimInstance;
	static LoadByStringPath(Context: string,Path: string): AnimBlueprint;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): AnimBlueprint;
	static LoadAndGetGeneratedClassByStringPath(Context: string,Path: string): UnrealEngineClass;
	static GetGeneratedClass(Context: string,Blueprint: AnimBlueprint): UnrealEngineClass;
	static C(Other: UObject | any): CsScriptLibrary_AnimInstance;
}

declare class CsScriptLibrary_AnimMontage extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_AnimMontage;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_AnimMontage;
	static GetDefaultObject(): CsScriptLibrary_AnimMontage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_AnimMontage;
	static LoadByStringPath(Context: string,Path: string): AnimMontage;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): AnimMontage;
	static C(Other: UObject | any): CsScriptLibrary_AnimMontage;
}

declare class CsScriptLibrary_AnimSequence extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_AnimSequence;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_AnimSequence;
	static GetDefaultObject(): CsScriptLibrary_AnimSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_AnimSequence;
	static SetProperty(Context: string,UObject: UObject,PropertyName: string,Anim: AnimSequence): boolean;
	static LoadByStringPath(Context: string,Path: string): AnimSequence;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): AnimSequence;
	static C(Other: UObject | any): CsScriptLibrary_AnimSequence;
}

declare class CsScriptLibrary_Array extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Array;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Array;
	static GetDefaultObject(): CsScriptLibrary_Array;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Array;
	static MakeShuffle_int32_0toN(N: number,OutArray?: number[]): {OutArray: number[], $: boolean};
	static C(Other: UObject | any): CsScriptLibrary_Array;
}

declare class CsSoundCue { 
	Sound: SoundCue;
	Sound_LoadFlags: number;
	Sound_Internal: SoundCue;
	clone() : CsSoundCue;
	static C(Other: UObject | any): CsSoundCue;
}

declare class CsParticleSystem { 
	Particle: ParticleSystem;
	Particle_LoadFlags: number;
	Particle_Internal: ParticleSystem;
	clone() : CsParticleSystem;
	static C(Other: UObject | any): CsParticleSystem;
}

declare class CsDataTable { 
	Data: DataTable;
	Data_LoadFlags: number;
	Data_Internal: DataTable;
	clone() : CsDataTable;
	static C(Other: UObject | any): CsDataTable;
}

declare class CsActor { 
	Actor: Class;
	Load_Flags: number;
	Actor_Internal: Actor;
	actor_class: UnrealEngineClass;
	Actor_SubclassOf: UnrealEngineClass;
	clone() : CsActor;
	static C(Other: UObject | any): CsActor;
}

declare class CsScriptLibrary_Blueprint extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Blueprint;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Blueprint;
	static GetDefaultObject(): CsScriptLibrary_Blueprint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Blueprint;
	static LoadByStringPath(Context: string,Path: string): Blueprint;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): Blueprint;
	static LoadAndGetGeneratedClassByStringPath(Context: string,Path: string): UnrealEngineClass;
	static LoadAndGetDefaultObjectByStringPath(Context: string,Path: string): UObject;
	static GetName_SoftObjectPtr(softobject: UObject): string;
	static GetName_SoftClassPtr(softclass: Class): string;
	static GetGeneratedClass(Context: string,Blueprint: Blueprint): UnrealEngineClass;
	static GetFName_SoftObjectPtr(softobject: UObject): string;
	static GetFName_SoftClassPtr(softclass: Class): string;
	static GetDefaultObject(Context: string,Blueprint: Blueprint): UObject;
	static Conv_CsTextureToInternal(Container: CsTexture): Texture;
	static Conv_CsSoundCueToInternal(Container: CsSoundCue): SoundCue;
	static Conv_CsSkeletalMeshToInternal(Container: CsSkeletalMesh): SkeletalMesh;
	static Conv_CsParticleSystemToInternal(Container: CsParticleSystem): ParticleSystem;
	static Conv_CsDataTableToInternal(Container: CsDataTable): DataTable;
	static Conv_CsActorToSubclassOf(Container: CsActor): UnrealEngineClass;
	static Conv_CsActorToInternal(Container: CsActor): Actor;
	static Conv_CsActorToClass(Container: CsActor): UnrealEngineClass;
	static C(Other: UObject | any): CsScriptLibrary_Blueprint;
}

declare class CsScriptLibrary_Cache_PooledObject extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Cache_PooledObject;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Cache_PooledObject;
	static GetDefaultObject(): CsScriptLibrary_Cache_PooledObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Cache_PooledObject;
	static QueueDeallocate(Context: string,UObject: UObject): void;
	static IsAllocated(Context: string,UObject: UObject): boolean;
	static GetIndex(Context: string,UObject: UObject): number;
	static C(Other: UObject | any): CsScriptLibrary_Cache_PooledObject;
}

declare class CsPhysicalMaterial { 
	Material: PhysicalMaterial;
	Material_LoadFlags: number;
	Material_Internal: PhysicalMaterial;
	clone() : CsPhysicalMaterial;
	static C(Other: UObject | any): CsPhysicalMaterial;
}

declare class CsCollisionPreset { 
	bSimulationGeneratesHitEvents: boolean;
	PhysMaterialOverride: CsPhysicalMaterial;
	bGenerateOverlapEvents: boolean;
	CollisionEnabled: ECollisionEnabled;
	ObjectType: ECollisionChannel;
	CollisionResponses: CollisionResponseContainer;
	clone() : CsCollisionPreset;
	static C(Other: UObject | any): CsCollisionPreset;
}

declare class CsScriptLibrary_Collision extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Collision;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Collision;
	static GetDefaultObject(): CsScriptLibrary_Collision;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Collision;
	static SetFromObject_CollisionPreset(Context: string,UObject: UObject,Component: PrimitiveComponent): boolean;
	static SetCollisionResponse(Container: CollisionResponseContainer,Channel: ECollisionChannel,NewResponse: ECollisionResponse): CollisionResponseContainer;
	static Set_CollisionPreset(Context: string,Component: PrimitiveComponent,Preset: CsCollisionPreset): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Collision;
}

declare class CsScriptLibrary_Common extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Common;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Common;
	static GetDefaultObject(): CsScriptLibrary_Common;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Common;
	static C(Other: UObject | any): CsScriptLibrary_Common;
}

declare class CsScriptLibrary_Coordinator_GameEvent extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Coordinator_GameEvent;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Coordinator_GameEvent;
	static GetDefaultObject(): CsScriptLibrary_Coordinator_GameEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Coordinator_GameEvent;
	static Get(Context: string,WorldContextObject: UObject): CsCoordinator_GameEvent;
	static BroadcastGameEventInfo(Context: string,WorldContextObject: UObject,Group: ECsGameEventCoordinatorGroup,Info: CsGameEventInfo): boolean;
	static BroadcastGameEvent_GameInstance(Context: string,WorldContextObject: UObject,Event: ECsGameEvent): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Coordinator_GameEvent;
}

declare class CsScriptLibrary_CoroutineScheduler extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_CoroutineScheduler;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_CoroutineScheduler;
	static GetDefaultObject(): CsScriptLibrary_CoroutineScheduler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_CoroutineScheduler;
	static IsRunning(Context: string,WorldContextObject: UObject,Group: ECsUpdateGroup,Handle: CsRoutineHandle): boolean;
	static IsHandleValid(Context: string,WorldContextObject: UObject,Group: ECsUpdateGroup,Handle: CsRoutineHandle): boolean;
	static End(Context: string,WorldContextObject: UObject,Group: ECsUpdateGroup,Handle: CsRoutineHandle): boolean;
	static C(Other: UObject | any): CsScriptLibrary_CoroutineScheduler;
}

declare class CsData_Skin_VisualStaticMeshImplSlice { 
	Mesh: CsStaticMesh;
	clone() : CsData_Skin_VisualStaticMeshImplSlice;
	static C(Other: UObject | any): CsData_Skin_VisualStaticMeshImplSlice;
}

declare class CsData_Skin_VisualSkeletalMeshImplSlice { 
	Mesh: CsSkeletalMesh;
	clone() : CsData_Skin_VisualSkeletalMeshImplSlice;
	static C(Other: UObject | any): CsData_Skin_VisualSkeletalMeshImplSlice;
}

declare class CsData_Skin_VisualMaterialImplSlice { 
	Materials: CsTArrayMaterialInterface;
	clone() : CsData_Skin_VisualMaterialImplSlice;
	static C(Other: UObject | any): CsData_Skin_VisualMaterialImplSlice;
}

declare class CsData_Skin_VisualStaticMeshAndMaterialImpl { 
	Mesh: CsStaticMesh;
	Materials: CsTArrayMaterialInterface;
	clone() : CsData_Skin_VisualStaticMeshAndMaterialImpl;
	static C(Other: UObject | any): CsData_Skin_VisualStaticMeshAndMaterialImpl;
}

declare class CsData_Skin_VisualSkeletalMeshAndMaterialImpl { 
	Mesh: CsSkeletalMesh;
	Materials: CsTArrayMaterialInterface;
	clone() : CsData_Skin_VisualSkeletalMeshAndMaterialImpl;
	static C(Other: UObject | any): CsData_Skin_VisualSkeletalMeshAndMaterialImpl;
}

declare class CsScriptLibrary_Data_Skin_Visual extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Data_Skin_Visual;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Data_Skin_Visual;
	static GetDefaultObject(): CsScriptLibrary_Data_Skin_Visual;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Data_Skin_Visual;
	static SetFromSlice_StaticMesh(Context: string,Slice: CsData_Skin_VisualStaticMeshImplSlice,Component: StaticMeshComponent): boolean;
	static SetFromSlice_SkeletalMesh(Context: string,Slice: CsData_Skin_VisualSkeletalMeshImplSlice,Component: SkeletalMeshComponent): boolean;
	static SetFromSlice_Material(Context: string,Slice: CsData_Skin_VisualMaterialImplSlice,Component: PrimitiveComponent): boolean;
	static SetFromObject_StaticMeshAndMaterial(Context: string,UObject: UObject,Component: StaticMeshComponent): boolean;
	static SetFromObject_StaticMesh(Context: string,UObject: UObject,Component: StaticMeshComponent): boolean;
	static SetFromObject_SkeletalMeshAndMaterial(Context: string,UObject: UObject,Component: SkeletalMeshComponent): boolean;
	static SetFromObject_SkeletalMesh(Context: string,UObject: UObject,Component: SkeletalMeshComponent): boolean;
	static SetFromObject_Material(Context: string,UObject: UObject,Component: PrimitiveComponent): boolean;
	static SetFromImpl_StaticMeshAndMaterial(Context: string,Impl: CsData_Skin_VisualStaticMeshAndMaterialImpl,Component: StaticMeshComponent): boolean;
	static SetFromImpl_SkeletalMeshAndMaterial(Context: string,Impl: CsData_Skin_VisualSkeletalMeshAndMaterialImpl,Component: SkeletalMeshComponent): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Data_Skin_Visual;
}

declare type ECsFXDeallocateMethod = 'LifeTime' | 'Complete' | 'ECsFXDeallocateMethod_MAX';
declare var ECsFXDeallocateMethod : { LifeTime:'LifeTime',Complete:'Complete',ECsFXDeallocateMethod_MAX:'ECsFXDeallocateMethod_MAX', };
declare type ECsFXOrientationRule = 'None' | 'Parent' | 'Movement' | 'Custom' | 'ECsFXOrientationRule_MAX';
declare var ECsFXOrientationRule : { None:'None',Parent:'Parent',Movement:'Movement',Custom:'Custom',ECsFXOrientationRule_MAX:'ECsFXOrientationRule_MAX', };
declare class CsFXOrientationRules { 
	Pitch: ECsFXOrientationRule;
	Yaw: ECsFXOrientationRule;
	Roll: ECsFXOrientationRule;
	clone() : CsFXOrientationRules;
	static C(Other: UObject | any): CsFXOrientationRules;
}

declare class CsFXParameterInt { 
	Name: string;
	Value: number;
	clone() : CsFXParameterInt;
	static C(Other: UObject | any): CsFXParameterInt;
}

declare class CsFXParameterFloat { 
	Name: string;
	Value: number;
	clone() : CsFXParameterFloat;
	static C(Other: UObject | any): CsFXParameterFloat;
}

declare class CsFXParameterVector { 
	Name: string;
	Value: Vector3f;
	clone() : CsFXParameterVector;
	static C(Other: UObject | any): CsFXParameterVector;
}

declare class CsFX_Parameter_Scaled_Int { 
	Name: string;
	bValue: boolean;
	Value: number;
	bInverse: boolean;
	Scale: number;
	clone() : CsFX_Parameter_Scaled_Int;
	static C(Other: UObject | any): CsFX_Parameter_Scaled_Int;
}

declare class CsFX_Parameter_Scaled_Float { 
	Name: string;
	bValue: boolean;
	Value: number;
	bInverse: boolean;
	Scale: number;
	clone() : CsFX_Parameter_Scaled_Float;
	static C(Other: UObject | any): CsFX_Parameter_Scaled_Float;
}

declare class CsFX_Parameter_Scaled_Vector { 
	Name: string;
	bValue: boolean;
	Value: Vector3f;
	bInverse: boolean;
	Scale: number;
	clone() : CsFX_Parameter_Scaled_Vector;
	static C(Other: UObject | any): CsFX_Parameter_Scaled_Vector;
}

declare class CsFX_Parameters_Scaled { 
	Ints: CsFX_Parameter_Scaled_Int[];
	Floats: CsFX_Parameter_Scaled_Float[];
	Vectors: CsFX_Parameter_Scaled_Vector[];
	clone() : CsFX_Parameters_Scaled;
	static C(Other: UObject | any): CsFX_Parameters_Scaled;
}

declare type ECsFXParameterDataInterfaceSkeletalMeshMethod = 'Explicit' | 'Owner_RootComponent' | 'Parent_RootComponent' | 'ECsFXParameterDataInterfaceSkeletalMeshMethod_MAX';
declare var ECsFXParameterDataInterfaceSkeletalMeshMethod : { Explicit:'Explicit',Owner_RootComponent:'Owner_RootComponent',Parent_RootComponent:'Parent_RootComponent',ECsFXParameterDataInterfaceSkeletalMeshMethod_MAX:'ECsFXParameterDataInterfaceSkeletalMeshMethod_MAX', };
declare class CsFX_Parameters_DataInterface_SkeletalMesh { 
	Name: string;
	Method: ECsFXParameterDataInterfaceSkeletalMeshMethod;
	Component: SkeletalMeshComponent;
	clone() : CsFX_Parameters_DataInterface_SkeletalMesh;
	static C(Other: UObject | any): CsFX_Parameters_DataInterface_SkeletalMesh;
}

declare class CsFX_Parameters_DataInterface { 
	SkeletalMeshes: CsFX_Parameters_DataInterface_SkeletalMesh[];
	clone() : CsFX_Parameters_DataInterface;
	static C(Other: UObject | any): CsFX_Parameters_DataInterface;
}

declare class CsFX { 
	FX: NiagaraSystem;
	FX_LoadFlags: number;
	FX_Internal: NiagaraSystem;
	Type: ECsFX;
	DeallocateMethod: ECsFXDeallocateMethod;
	Lifetime: number;
	DeathTime: number;
	bHideOnQueueDeallocate: boolean;
	bAttach: boolean;
	AttachmentTransformRules: CsAttachmentTransformRules;
	bone: string;
	TransformRules: number;
	Transform: Transform3f;
	OrientationRules: CsFXOrientationRules;
	bApplyTransformScale: boolean;
	IntParameters: CsFXParameterInt[];
	FloatParameters: CsFXParameterFloat[];
	VectorParameters: CsFXParameterVector[];
	ScaledParameters: CsFX_Parameters_Scaled;
	DataInterfaceParameters: CsFX_Parameters_DataInterface;
	clone() : CsFX;
	static C(Other: UObject | any): CsFX;
}

declare type ECsSpawnerFrequency = 'Once' | 'Count' | 'TimeCount' | 'TimeInterval' | 'Infinite' | 'InfiniteFillToCount' | 'ECsSpawnerFrequency_MAX';
declare var ECsSpawnerFrequency : { Once:'Once',Count:'Count',TimeCount:'TimeCount',TimeInterval:'TimeInterval',Infinite:'Infinite',InfiniteFillToCount:'InfiniteFillToCount',ECsSpawnerFrequency_MAX:'ECsSpawnerFrequency_MAX', };
declare class CsSpawner_FrequencyParams { 
	Type: ECsSpawnerFrequency;
	Delay: number;
	Count: number;
	Interval: number;
	Time: number;
	clone() : CsSpawner_FrequencyParams;
	static C(Other: UObject | any): CsSpawner_FrequencyParams;
}

declare class CsFX_Spawn_Params { 
	FX: CsFX;
	Actor: Actor;
	Delay: number;
	FrequencyParams: CsSpawner_FrequencyParams;
	Group: ECsUpdateGroup;
	clone() : CsFX_Spawn_Params;
	static C(Other: UObject | any): CsFX_Spawn_Params;
}

declare class CsScriptLibrary_FX extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_FX;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_FX;
	static GetDefaultObject(): CsScriptLibrary_FX;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_FX;
	static ToString(Enum: ECsFX): string;
	static Spawn_GameState_OnceWithDelay(Context: string,WorldContextObject: UObject,FX: CsFX,Delay: number): CsRoutineHandle;
	static Spawn(Context: string,WorldContextObject: UObject,Params: CsFX_Spawn_Params): CsRoutineHandle;
	static LoadByStringPath(Context: string,Path: string): NiagaraSystem;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): NiagaraSystem;
	static GetMax(): ECsFX;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsFX;
	static GetAll(OutTypes?: ECsFX[]): {OutTypes: ECsFX[]};
	static Get(Name: string): ECsFX;
	static EqualEqual(A: ECsFX,B: ECsFX): boolean;
	static DataInterface_SkeletalMesh_SetComponent(Context: string,Params?: CsFX_Parameters_DataInterface_SkeletalMesh[],Index?: number,Component?: SkeletalMeshComponent): {Params: CsFX_Parameters_DataInterface_SkeletalMesh[], $: boolean};
	static DataInterface_SkeletalMesh_ClearComponent(Context: string,Params?: CsFX_Parameters_DataInterface_SkeletalMesh[],Index?: number): {Params: CsFX_Parameters_DataInterface_SkeletalMesh[], $: boolean};
	static C(Other: UObject | any): CsScriptLibrary_FX;
}

declare class CsScriptLibrary_GameEvent extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_GameEvent;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_GameEvent;
	static GetDefaultObject(): CsScriptLibrary_GameEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_GameEvent;
	static ToString(Enum: ECsGameEvent): string;
	static NotEqual(A: ECsGameEvent,B: ECsGameEvent): boolean;
	static IsValidByName(Name: string): boolean;
	static IsValid(Enum: ECsGameEvent): boolean;
	static GetMAX(): ECsGameEvent;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsGameEvent;
	static GetAll(OutTypes?: ECsGameEvent[]): {OutTypes: ECsGameEvent[]};
	static Get(Name: string): ECsGameEvent;
	static EqualEqual(A: ECsGameEvent,B: ECsGameEvent): boolean;
	static Create(Name: string,DisplayName: string): ECsGameEvent;
	static C(Other: UObject | any): CsScriptLibrary_GameEvent;
}

declare class CsScriptLibrary_GameEventCoordinatorGroup extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_GameEventCoordinatorGroup;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_GameEventCoordinatorGroup;
	static GetDefaultObject(): CsScriptLibrary_GameEventCoordinatorGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_GameEventCoordinatorGroup;
	static ToString(Enum: ECsGameEventCoordinatorGroup): string;
	static GetMax(): ECsGameEventCoordinatorGroup;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsGameEventCoordinatorGroup;
	static GetAll(OutTypes?: ECsGameEventCoordinatorGroup[]): {OutTypes: ECsGameEventCoordinatorGroup[]};
	static Get(Name: string): ECsGameEventCoordinatorGroup;
	static EqualEqual(A: ECsGameEventCoordinatorGroup,B: ECsGameEventCoordinatorGroup): boolean;
	static C(Other: UObject | any): CsScriptLibrary_GameEventCoordinatorGroup;
}

declare class CsScriptLibrary_GameEventDefinition extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_GameEventDefinition;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_GameEventDefinition;
	static GetDefaultObject(): CsScriptLibrary_GameEventDefinition;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_GameEventDefinition;
	static Remove(Context: string,Event: ECsGameEvent): void;
	static DoesExist(Context: string,Event: ECsGameEvent): boolean;
	static Add_ActionOneOrWordNoCompletedValue(Context: string,Definition: CsGameEventDefinitionActionOneOrWordNoCompletedValue): boolean;
	static Add(Context: string,Definition: CsGameEventDefinition): boolean;
	static C(Other: UObject | any): CsScriptLibrary_GameEventDefinition;
}

declare class CsScriptLibrary_GameInstance extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_GameInstance;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_GameInstance;
	static GetDefaultObject(): CsScriptLibrary_GameInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_GameInstance;
	static IsMobilePreviewEditor(Context: string,WorldContextObject: UObject): boolean;
	static C(Other: UObject | any): CsScriptLibrary_GameInstance;
}

declare type ECsInputMode = 'Mouse' | 'Keyboard' | 'Gamepad' | 'Touch' | 'MotionController' | 'ECsInputMode_MAX';
declare var ECsInputMode : { Mouse:'Mouse',Keyboard:'Keyboard',Gamepad:'Gamepad',Touch:'Touch',MotionController:'MotionController',ECsInputMode_MAX:'ECsInputMode_MAX', };
declare type ECsInputDevice = 'MouseAndKeyboard' | 'Gamepad' | 'MotionController' | 'ECsInputDevice_MAX';
declare var ECsInputDevice : { MouseAndKeyboard:'MouseAndKeyboard',Gamepad:'Gamepad',MotionController:'MotionController',ECsInputDevice_MAX:'ECsInputDevice_MAX', };
declare class CsScriptLibrary_Input extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Input;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Input;
	static GetDefaultObject(): CsScriptLibrary_Input;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Input;
	static TestBitflag_InputMode(mask: number,Mode: ECsInputMode): boolean;
	static ReplaceActionMapping(Context: string,WorldContextObject: UObject,ControllerId: number,Device: ECsInputDevice,Action: ECsInputAction,Key: Key,Scale: number): boolean;
	static IsKeyValidForMode(Context: string,Mode: ECsInputMode,Key: Key): boolean;
	static IsKeyValidForDevice(Context: string,Device: ECsInputDevice,Key: Key): boolean;
	static IsActionAssociatedWithKey(Context: string,Action: ECsInputAction,Key: Key): boolean;
	static GetKeysByDevice(Context: string,Action: ECsInputAction,Device: ECsInputDevice,OutKeys?: Key[]): {OutKeys: Key[], $: boolean};
	static GetKey(Context: string,Action: ECsInputAction,Device: ECsInputDevice): Key;
	static AddAxisMapping(Context: string,WorldContextObject: UObject,ControllerId: number,KeyMapping: InputAxisKeyMapping): boolean;
	static AddActionMapping(Context: string,WorldContextObject: UObject,ControllerId: number,KeyMapping: InputActionKeyMapping): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Input;
}

declare class CsScriptLibrary_InputAction extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_InputAction;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_InputAction;
	static GetDefaultObject(): CsScriptLibrary_InputAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_InputAction;
	static ToString(Enum: ECsInputAction): string;
	static IsValidByName(Name: string): boolean;
	static IsValid(Enum: ECsInputAction): boolean;
	static GetMAX(): ECsInputAction;
	static GetCount(): number;
	static GetByKey(Key: Key): ECsInputAction;
	static GetByIndex(Index: number): ECsInputAction;
	static GetAll(OutTypes?: ECsInputAction[]): {OutTypes: ECsInputAction[]};
	static Get(Name: string): ECsInputAction;
	static EqualEqual(A: ECsInputAction,B: ECsInputAction): boolean;
	static Create(Name: string,DisplayName: string): ECsInputAction;
	static C(Other: UObject | any): CsScriptLibrary_InputAction;
}

declare class CsScriptLibrary_InputActionMap extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_InputActionMap;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_InputActionMap;
	static GetDefaultObject(): CsScriptLibrary_InputActionMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_InputActionMap;
	static ToString(Enum: ECsInputActionMap): string;
	static IsValidByName(Name: string): boolean;
	static IsValid(Enum: ECsInputActionMap): boolean;
	static GetNONE(): ECsInputActionMap;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsInputActionMap;
	static GetAll(OutTypes?: ECsInputActionMap[]): {OutTypes: ECsInputActionMap[]};
	static Get(Name: string): ECsInputActionMap;
	static EqualEqual(A: ECsInputActionMap,B: ECsInputActionMap): boolean;
	static Create(Name: string,DisplayName: string): ECsInputActionMap;
	static C(Other: UObject | any): CsScriptLibrary_InputActionMap;
}

declare class CsScriptLibrary_Manager_Data extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Data;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Data;
	static GetDefaultObject(): CsScriptLibrary_Manager_Data;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Data;
	static RemoveDataCompositionObject_Loaded(Context: string,WorldContextObject: UObject,DataName: string): boolean;
	static GetDataTableBySoftObject(Context: string,WorldContextObject: UObject,softobject: DataTable): DataTable;
	static GetDataTableByPath(Context: string,WorldContextObject: UObject,Path: SoftObjectPath): DataTable;
	static GetDataTable(Context: string,WorldContextObject: UObject,EntryName: string): DataTable;
	static GetDataObjectByPath(Context: string,ContextObject: UObject,Path: SoftObjectPath): UObject;
	static GetDataObject(Context: string,WorldContextObject: UObject,EntryName: string): UObject;
	static AddDataObject_Loaded(Context: string,WorldContextObject: UObject,EntryName: string,Data: UObject): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Manager_Data;
}

declare class CsTime { 
	Time: number;
	Realtime: number;
	DateTime: DateTime;
	Frame: number;
	clone() : CsTime;
	static C(Other: UObject | any): CsTime;
}

declare class CsPayload_FX { 
	Instigator: UObject;
	Owner: UObject;
	Parent: UObject;
	Time: CsTime;
	PreserveChangesFromDefaultMask: number;
	FX: CsFX;
	clone() : CsPayload_FX;
	static C(Other: UObject | any): CsPayload_FX;
}

declare class CsScriptLibrary_Manager_FX extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_FX;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_FX;
	static GetDefaultObject(): CsScriptLibrary_Manager_FX;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_FX;
	static Spawn(Context: string,WorldContextObject: UObject,Payload: CsPayload_FX,Transform: Transform3f): number;
	static FindObject(Context: string,WorldContextObject: UObject,Type: ECsFX,Index: number): UObject;
	static C(Other: UObject | any): CsScriptLibrary_Manager_FX;
}

declare class CsScriptLibrary_Manager_Input extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Input;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Input;
	static GetDefaultObject(): CsScriptLibrary_Manager_Input;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Input;
	static SetInputActionMap(Context: string,WorldContextObject: UObject,ControllerId: number,Map: ECsInputActionMap): void;
	static SetFirstInputActionMap(Context: string,WorldContextObject: UObject,Map: ECsInputActionMap): void;
	static ResetInputActionMap(Context: string,WorldContextObject: UObject,ControllerId: number): void;
	static ResetFirstInputActionMap(Context: string,WorldContextObject: UObject): void;
	static ResetAllInputActionMap(Context: string,WorldContextObject: UObject): boolean;
	static InitAll(Context: string,WorldContextObject: UObject): boolean;
	static Init(Context: string,WorldContextObject: UObject,ControllerId: number): boolean;
	static Get(Context: string,WorldContextObject: UObject,ControllerId: number): CsManager_Input;
	static ClearInputActionMap(Context: string,WorldContextObject: UObject,ControllerId: number,Map: ECsInputActionMap): void;
	static ClearFirstInputActionMap(Context: string,WorldContextObject: UObject,Map: ECsInputActionMap): void;
	static C(Other: UObject | any): CsScriptLibrary_Manager_Input;
}

declare type ECsSkeletalMeshActorDeallocateMethod = 'LifeTime' | 'Complete' | 'ECsSkeletalMeshActorDeallocateMethod_MAX';
declare var ECsSkeletalMeshActorDeallocateMethod : { LifeTime:'LifeTime',Complete:'Complete',ECsSkeletalMeshActorDeallocateMethod_MAX:'ECsSkeletalMeshActorDeallocateMethod_MAX', };
declare class CsSkeletalMeshActorPooledInfo { 
	Mesh: CsSkeletalMesh;
	Materials: CsTArrayMaterialInterface;
	Type: ECsSkeletalMeshActor;
	DeallocateMethod: ECsSkeletalMeshActorDeallocateMethod;
	Lifetime: number;
	AttachmentTransformRules: CsAttachmentTransformRules;
	bone: string;
	TransformRules: number;
	Transform: Transform3f;
	bCastShadow: boolean;
	bReceivesDecals: boolean;
	bUseAsOccluder: boolean;
	clone() : CsSkeletalMeshActorPooledInfo;
	static C(Other: UObject | any): CsSkeletalMeshActorPooledInfo;
}

declare class CsAnimSequence { 
	Anim: AnimSequence;
	Anim_LoadFlags: number;
	Anim_Internal: AnimSequence;
	clone() : CsAnimSequence;
	static C(Other: UObject | any): CsAnimSequence;
}

declare class CsSkeletalMeshAnimSequenceOneShot { 
	Mesh: CsSkeletalMeshActorPooledInfo;
	Anim: CsAnimSequence;
	clone() : CsSkeletalMeshAnimSequenceOneShot;
	static C(Other: UObject | any): CsSkeletalMeshAnimSequenceOneShot;
}

declare class CsPayload_SkeletalMesh_AnimSequence_OneShot { 
	Instigator: UObject;
	Owner: UObject;
	Parent: UObject;
	Time: CsTime;
	PreserveChangesFromDefaultMask: number;
	Shot: CsSkeletalMeshAnimSequenceOneShot;
	Transform: Transform3f;
	clone() : CsPayload_SkeletalMesh_AnimSequence_OneShot;
	static C(Other: UObject | any): CsPayload_SkeletalMesh_AnimSequence_OneShot;
}

declare class CsAnimBlueprint { 
	Blueprint: AnimBlueprint;
	Blueprint_LoadFlags: number;
	Blueprint_Internal: UnrealEngineClass;
	clone() : CsAnimBlueprint;
	static C(Other: UObject | any): CsAnimBlueprint;
}

declare class CsAnimMontage { 
	Anim: AnimMontage;
	Anim_LoadFlags: number;
	Anim_Internal: AnimMontage;
	clone() : CsAnimMontage;
	static C(Other: UObject | any): CsAnimMontage;
}

declare class CsSkeletalMeshAnimMontageOneShot { 
	Mesh: CsSkeletalMeshActorPooledInfo;
	AnimBlueprint: CsAnimBlueprint;
	Anim: CsAnimMontage;
	PlayRate: number;
	clone() : CsSkeletalMeshAnimMontageOneShot;
	static C(Other: UObject | any): CsSkeletalMeshAnimMontageOneShot;
}

declare class CsPayload_SkeletalMesh_AnimMontage_OneShot { 
	Instigator: UObject;
	Owner: UObject;
	Parent: UObject;
	Time: CsTime;
	PreserveChangesFromDefaultMask: number;
	Shot: CsSkeletalMeshAnimMontageOneShot;
	Transform: Transform3f;
	clone() : CsPayload_SkeletalMesh_AnimMontage_OneShot;
	static C(Other: UObject | any): CsPayload_SkeletalMesh_AnimMontage_OneShot;
}

declare class CsScriptLibrary_Manager_SkeletalMeshActor extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_SkeletalMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_SkeletalMeshActor;
	static GetDefaultObject(): CsScriptLibrary_Manager_SkeletalMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_SkeletalMeshActor;
	static SpawnByAnimSequenceOneShot(Context: string,WorldContextObject: UObject,Payload: CsPayload_SkeletalMesh_AnimSequence_OneShot): number;
	static SpawnByAnimMontageOneShot(Context: string,WorldContextObject: UObject,Payload: CsPayload_SkeletalMesh_AnimMontage_OneShot): number;
	static FindObject(Context: string,WorldContextObject: UObject,Type: ECsSkeletalMeshActor,Index: number): UObject;
	static C(Other: UObject | any): CsScriptLibrary_Manager_SkeletalMeshActor;
}

declare class CsPayload_Sound { 
	Instigator: UObject;
	Owner: UObject;
	Parent: UObject;
	Time: CsTime;
	PreserveChangesFromDefaultMask: number;
	Sound: CsSound;
	VolumeMultiplier: number;
	PitchMultiplier: number;
	clone() : CsPayload_Sound;
	static C(Other: UObject | any): CsPayload_Sound;
}

declare class CsScriptLibrary_Manager_Sound extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Sound;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Sound;
	static GetDefaultObject(): CsScriptLibrary_Manager_Sound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Sound;
	static Spawn(Context: string,WorldContextObject: UObject,Payload: CsPayload_Sound,Transform: Transform3f): number;
	static FindObject(Context: string,WorldContextObject: UObject,Type: ECsSound,Index: number): UObject;
	static C(Other: UObject | any): CsScriptLibrary_Manager_Sound;
}

declare class CsScriptLibrary_Manager_Spawner extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Spawner;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Spawner;
	static GetDefaultObject(): CsScriptLibrary_Manager_Spawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Spawner;
	static Get(Context: string,WorldContextObject: UObject): CsManager_Spawner;
	static C(Other: UObject | any): CsScriptLibrary_Manager_Spawner;
}

declare type ECsPooledObjectUpdate = 'None' | 'Self' | 'Manager' | 'Owner' | 'Instigator' | 'ECsPooledObjectUpdate_MAX';
declare var ECsPooledObjectUpdate : { None:'None',Self:'Self',Manager:'Manager',Owner:'Owner',Instigator:'Instigator',ECsPooledObjectUpdate_MAX:'ECsPooledObjectUpdate_MAX', };
declare type ECsStaticMeshActorDeallocateMethod = 'LifeTime' | 'Complete' | 'ECsStaticMeshActorDeallocateMethod_MAX';
declare var ECsStaticMeshActorDeallocateMethod : { LifeTime:'LifeTime',Complete:'Complete',ECsStaticMeshActorDeallocateMethod_MAX:'ECsStaticMeshActorDeallocateMethod_MAX', };
declare class CsStaticMeshActorPooledInfo { 
	Mesh: CsStaticMesh;
	Materials: CsTArrayMaterialInterface;
	Type: ECsStaticMeshActor;
	DeallocateMethod: ECsStaticMeshActorDeallocateMethod;
	Lifetime: number;
	AttachmentTransformRules: CsAttachmentTransformRules;
	bone: string;
	TransformRules: number;
	Transform: Transform3f;
	bCastShadow: boolean;
	bReceivesDecals: boolean;
	bUseAsOccluder: boolean;
	bRenderCustomDepth: boolean;
	CustomDepthStencilValue: number;
	clone() : CsStaticMeshActorPooledInfo;
	static C(Other: UObject | any): CsStaticMeshActorPooledInfo;
}

declare class CsPayload_StaticMesh { 
	UpdateType: ECsPooledObjectUpdate;
	Instigator: UObject;
	Owner: UObject;
	Parent: UObject;
	Time: CsTime;
	PreserveChangesFromDefaultMask: number;
	Mesh: CsStaticMeshActorPooledInfo;
	clone() : CsPayload_StaticMesh;
	static C(Other: UObject | any): CsPayload_StaticMesh;
}

declare class CsScriptLibrary_Manager_StaticMeshActor extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_StaticMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_StaticMeshActor;
	static GetDefaultObject(): CsScriptLibrary_Manager_StaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_StaticMeshActor;
	static Spawn(Context: string,WorldContextObject: UObject,Payload: CsPayload_StaticMesh): number;
	static FindObject(Context: string,WorldContextObject: UObject,Type: ECsStaticMeshActor,Index: number): UObject;
	static C(Other: UObject | any): CsScriptLibrary_Manager_StaticMeshActor;
}

declare class CsScriptLibrary_Manager_Time extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Time;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Time;
	static GetDefaultObject(): CsScriptLibrary_Manager_Time;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Time;
	static Unpause(Context: string,WorldContextObject: UObject,Group: ECsUpdateGroup): boolean;
	static Pause(Context: string,WorldContextObject: UObject,Group: ECsUpdateGroup): boolean;
	static GetTimeSinceStart(Context: string,WorldContextObject: UObject,Group: ECsUpdateGroup): CsDeltaTime;
	static C(Other: UObject | any): CsScriptLibrary_Manager_Time;
}

declare type ECsTraceType = 'Line' | 'Sweep' | 'Overlap' | 'OverlapBlocking' | 'ECsTraceType_MAX';
declare var ECsTraceType : { Line:'Line',Sweep:'Sweep',Overlap:'Overlap',OverlapBlocking:'OverlapBlocking',ECsTraceType_MAX:'ECsTraceType_MAX', };
declare type ECsTraceMethod = 'Test' | 'Single' | 'Multi' | 'ECsTraceMethod_MAX';
declare var ECsTraceMethod : { Test:'Test',Single:'Single',Multi:'Multi',ECsTraceMethod_MAX:'ECsTraceMethod_MAX', };
declare type ECsTraceQuery = 'Channel' | 'ObjectType' | 'Profile' | 'ECsTraceQuery_MAX';
declare var ECsTraceQuery : { Channel:'Channel',ObjectType:'ObjectType',Profile:'Profile',ECsTraceQuery_MAX:'ECsTraceQuery_MAX', };
declare type ECsCollisionShapeType = 'Line' | 'Box' | 'Sphere' | 'Capsule' | 'ECsCollisionShapeType_MAX';
declare var ECsCollisionShapeType : { Line:'Line',Box:'Box',Sphere:'Sphere',Capsule:'Capsule',ECsCollisionShapeType_MAX:'ECsCollisionShapeType_MAX', };
declare class CsCollisionShape { 
	Type: ECsCollisionShapeType;
	HalfExtent: Vector3f;
	Radius: number;
	HalfHeight: number;
	clone() : CsCollisionShape;
	static C(Other: UObject | any): CsCollisionShape;
}

declare type ECsQueryMobilityType = 'Any' | 'Static' | 'Dynamic' | 'ECsQueryMobilityType_MAX';
declare var ECsQueryMobilityType : { Any:'Any',Static:'Static',Dynamic:'Dynamic',ECsQueryMobilityType_MAX:'ECsQueryMobilityType_MAX', };
declare class CsCollisionQueryParams { 
	TraceTag: string;
	OwnerTag: string;
	bTraceComplex: boolean;
	bFindInitialOverlaps: boolean;
	bReturnFaceIndex: boolean;
	bReturnPhysicalMaterial: boolean;
	bIgnoreBlocks: boolean;
	bIgnoreTouches: boolean;
	bSkipNarrowPhase: boolean;
	MobilityType: ECsQueryMobilityType;
	IgnoreComponents: PrimitiveComponent[];
	IgnoreActors: Actor[];
	clone() : CsCollisionQueryParams;
	static C(Other: UObject | any): CsCollisionQueryParams;
}

declare class CsCollisionObjectQueryParams { 
	ObjectTypesToQuery: EObjectTypeQuery[];
	clone() : CsCollisionObjectQueryParams;
	static C(Other: UObject | any): CsCollisionObjectQueryParams;
}

declare class CsCollisionResponseParams { 
	clone() : CsCollisionResponseParams;
	static C(Other: UObject | any): CsCollisionResponseParams;
}

declare class OverlapResult { 
	OverlapObjectHandle: ActorInstanceHandle;
	Component: PrimitiveComponent;
	bBlockingHit: boolean;
	clone() : OverlapResult;
	static C(Other: UObject | any): OverlapResult;
}

declare class CsTraceResponse { 
	bResult: boolean;
	ElapsedTime: number;
	OutHits: HitResult[];
	OutOverlaps: OverlapResult[];
	clone() : CsTraceResponse;
	static C(Other: UObject | any): CsTraceResponse;
}

declare class CsTraceRequest { 
	StaleTime: number;
	Caller: UObject;
	bAsync: boolean;
	Type: ECsTraceType;
	Method: ECsTraceMethod;
	Query: ECsTraceQuery;
	Start: Vector3f;
	End: Vector3f;
	Rotation: Rotator3f;
	Channel: ECollisionChannel;
	ProfileName: string;
	Shape: CsCollisionShape;
	Params: CsCollisionQueryParams;
	ObjectParams: CsCollisionObjectQueryParams;
	ResponseParams: CsCollisionResponseParams;
	OnResponse_Event: UnrealEngineMulticastDelegate<(Response: CsTraceResponse) => void>;
	OnResponse_AsyncEvent: UnrealEngineMulticastDelegate<(Response: CsTraceResponse) => void>;
	clone() : CsTraceRequest;
	static C(Other: UObject | any): CsTraceRequest;
}

declare class CsScriptLibrary_Manager_Trace extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Trace;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Trace;
	static GetDefaultObject(): CsScriptLibrary_Manager_Trace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Trace;
	static Trace(Context: string,WorldContextObject: UObject,Request: CsTraceRequest,OutResponse?: CsTraceResponse): {OutResponse: CsTraceResponse};
	static SweepByCapsuleComponentAgainstObjectOnly(Context: string,WorldContextObject: UObject,CapsuleComponent: CapsuleComponent,Params: CsCollisionQueryParams,UObject: UObject,OutResponse?: CsTraceResponse): {OutResponse: CsTraceResponse, $: boolean};
	static SweepByCapsuleComponentAgainstObject(Context: string,WorldContextObject: UObject,CapsuleComponent: CapsuleComponent,Params: CsCollisionQueryParams,UObject: UObject,OutResponse?: CsTraceResponse): {OutResponse: CsTraceResponse, $: boolean};
	static SweepByCapsuleComponent(Context: string,WorldContextObject: UObject,CapsuleComponent: CapsuleComponent,Params: CsCollisionQueryParams,OutResponse?: CsTraceResponse): {OutResponse: CsTraceResponse, $: boolean};
	static LineTraceSingleByChannel(Context: string,WorldContextObject: UObject,Start: Vector3f,End: Vector3f,Channel: ECollisionChannel,bTraceComplex: boolean,bIgnoreSelf: boolean,ActorsToIgnore: Actor[],OutHit?: HitResult): {OutHit: HitResult, $: boolean};
	static C(Other: UObject | any): CsScriptLibrary_Manager_Trace;
}

declare class CsScriptLibrary_Material extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Material;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Material;
	static GetDefaultObject(): CsScriptLibrary_Material;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Material;
	static SetFromStruct(Context: string,Materials: CsTArrayMaterialInterface,Component: PrimitiveComponent): boolean;
	static SetFromObject(Context: string,UObject: UObject,PropertyName: string,Component: PrimitiveComponent): boolean;
	static SetAt(Context: string,Component: PrimitiveComponent,Material: MaterialInterface,Index: number): boolean;
	static SetAll(Context: string,Component: PrimitiveComponent,Material: MaterialInterface): boolean;
	static Set(Context: string,Component: PrimitiveComponent,Materials: MaterialInterface[]): boolean;
	static LoadByStringPaths(Context: string,Paths: string[],OutMaterials?: MaterialInterface[]): {OutMaterials: MaterialInterface[], $: boolean};
	static LoadByStringPath(Context: string,Path: string): MaterialInterface;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): MaterialInterface;
	static C(Other: UObject | any): CsScriptLibrary_Material;
}

declare class CsRay { 
	Origin: Vector3f;
	Direction: Vector3f;
	Distance: number;
	End: Vector3f;
	clone() : CsRay;
	static C(Other: UObject | any): CsRay;
}

declare class Plane4f extends Vector3f { 
	W: number;
	clone() : Plane4f;
	static C(Other: UObject | any): Plane4f;
}

declare class CsScriptLibrary_Math extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Math;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Math;
	static GetDefaultObject(): CsScriptLibrary_Math;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Math;
	static Vector3fTo3d(Vector: Vector3f): Vector;
	static Vector3dTo3f(Vector: Vector): Vector3f;
	static RayPlaneIntersection(Context: string,Ray: CsRay,Plane: Plane4f,OutT?: number,OutIntersection?: Vector3f): {OutT: number, OutIntersection: Vector3f, $: boolean};
	static MakeTransform_Identity(): Transform;
	static MakeRotationRules_Yaw(): number;
	static MakeRotationRules_Roll(): number;
	static MakeRotationRules_Pitch(): number;
	static MakeRotationRules_All(): number;
	static MakeRay_OriginAndDirection(Origin: Vector3f,Direction: Vector3f): CsRay;
	static MakeRay(Origin: Vector3f,Direction: Vector3f,Distance: number): CsRay;
	static MakePlane(Origin: Vector3f,Normal: Vector3f): Plane4f;
	static GetFloatAsStringWithPrecision(TheFloat: number,Precision: number): string;
	static Ease(Context: string,EasingType: ECsEasingType,Time: number,Start: number,Final: number,Duration: number): number;
	static C(Other: UObject | any): CsScriptLibrary_Math;
}

declare type ECsAnimPlayback = 'Forward' | 'Reverse' | 'PingPong' | 'Loop' | 'LoopReverse' | 'LoopPingPong' | 'Custom' | 'ECsAnimPlayback_MAX';
declare var ECsAnimPlayback : { Forward:'Forward',Reverse:'Reverse',PingPong:'PingPong',Loop:'Loop',LoopReverse:'LoopReverse',LoopPingPong:'LoopPingPong',Custom:'Custom',ECsAnimPlayback_MAX:'ECsAnimPlayback_MAX', };
declare type ECsAnimPlayRate = 'PR_0_001' | 'PR_0_01' | 'PR_0_1' | 'PR_1' | 'PR_10' | 'PR_100' | 'PR_15Fps' | 'PR_24Fps' | 'PR_25Fps' | 'PR_29_97Fps' | 'PR_30Fps' | 'PR_48Fps' | 'PR_50Fps' | 'PR_59_94Fps' | 'PR_60Fps' | 'PR_120Fps' | 'PR_CustomDeltaTime' | 'PR_CustomTotalTime' | 'PR_CustomDeltaTimeAndTotalTime' | 'PR_CustomDeltaTimePerFrame' | 'PR_Custom' | 'ECsAnimPlayRate_MAX';
declare var ECsAnimPlayRate : { PR_0_001:'PR_0_001',PR_0_01:'PR_0_01',PR_0_1:'PR_0_1',PR_1:'PR_1',PR_10:'PR_10',PR_100:'PR_100',PR_15Fps:'PR_15Fps',PR_24Fps:'PR_24Fps',PR_25Fps:'PR_25Fps',PR_29_97Fps:'PR_29_97Fps',PR_30Fps:'PR_30Fps',PR_48Fps:'PR_48Fps',PR_50Fps:'PR_50Fps',PR_59_94Fps:'PR_59_94Fps',PR_60Fps:'PR_60Fps',PR_120Fps:'PR_120Fps',PR_CustomDeltaTime:'PR_CustomDeltaTime',PR_CustomTotalTime:'PR_CustomTotalTime',PR_CustomDeltaTimeAndTotalTime:'PR_CustomDeltaTimeAndTotalTime',PR_CustomDeltaTimePerFrame:'PR_CustomDeltaTimePerFrame',PR_Custom:'PR_Custom',ECsAnimPlayRate_MAX:'ECsAnimPlayRate_MAX', };
declare class CsMaterialAnimParameterVector { 
	Name: string;
	Easing: ECsEasingType;
	From: LinearColor;
	To: LinearColor;
	clone() : CsMaterialAnimParameterVector;
	static C(Other: UObject | any): CsMaterialAnimParameterVector;
}

declare class CsMaterialAnimParameterScalar { 
	Name: string;
	Easing: ECsEasingType;
	From: number;
	To: number;
	clone() : CsMaterialAnimParameterScalar;
	static C(Other: UObject | any): CsMaterialAnimParameterScalar;
}

declare class CsMaterialAnimFrame { 
	Duration: number;
	VectorParameters: CsMaterialAnimParameterVector[];
	ScalarParameters: CsMaterialAnimParameterScalar[];
	clone() : CsMaterialAnimFrame;
	static C(Other: UObject | any): CsMaterialAnimFrame;
}

declare class CsMaterialAnim { 
	Playback: ECsAnimPlayback;
	PlayRate: ECsAnimPlayRate;
	DeltaTime: number;
	TotalTime: number;
	Frames: CsMaterialAnimFrame[];
	TotalCount: number;
	clone() : CsMaterialAnim;
	static C(Other: UObject | any): CsMaterialAnim;
}

declare class CsMaterialAnim_Params { 
	Anim: CsMaterialAnim;
	MIDs: MaterialInstanceDynamic[];
	MIDsAsObjects: UObject[];
	Owner: UObject;
	Group: ECsUpdateGroup;
	clone() : CsMaterialAnim_Params;
	static C(Other: UObject | any): CsMaterialAnim_Params;
}

declare class CsScriptLibrary_MID extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_MID;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_MID;
	static GetDefaultObject(): CsScriptLibrary_MID;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_MID;
	static SetVectorParameterValue(Context: string,Mid: MaterialInstanceDynamic,ParamName: string,Value: LinearColor): boolean;
	static SetScalarParameterValue(Context: string,Mid: MaterialInstanceDynamic,ParamName: string,Value: number): boolean;
	static SetArrayScalarParameterValue(Context: string,MIDs: MaterialInstanceDynamic[],ParamName: string,Value: number): boolean;
	static PlayAnim(Context: string,WorldContextObject: UObject,Params: CsMaterialAnim_Params): CsRoutineHandle;
	static C(Other: UObject | any): CsScriptLibrary_MID;
}

declare class CsScriptLibrary_Mouse extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Mouse;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Mouse;
	static GetDefaultObject(): CsScriptLibrary_Mouse;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Mouse;
	static Trace(Context: string,WorldContextObject: UObject,Request: CsTraceRequest,Distance: number,OutResponse?: CsTraceResponse): {OutResponse: CsTraceResponse, $: boolean};
	static ShowCursor(Context: string,WorldContextObject: UObject): void;
	static SetPosition(Context: string,WorldContextObject: UObject,X: number,Y: number): boolean;
	static SetCenterOfViewport(Context: string,WorldContextObject: UObject): boolean;
	static IsShowingCursor(Context: string,WorldContextObject: UObject): boolean;
	static HideCursor(Context: string,WorldContextObject: UObject): void;
	static GetWorldIntersection(Context: string,WorldContextObject: UObject,Plane: Plane4f,OutIntersection?: Vector3f): {OutIntersection: Vector3f, $: boolean};
	static GetPosition(Context: string,WorldContextObject: UObject,OutPosition?: IntPoint): {OutPosition: IntPoint, $: boolean};
	static C(Other: UObject | any): CsScriptLibrary_Mouse;
}

declare class CsScriptLibrary_MPC extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_MPC;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_MPC;
	static GetDefaultObject(): CsScriptLibrary_MPC;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_MPC;
	static UpdateMaterials(Context: string,Collection: MaterialParameterCollection,Materials?: Material[]): {Materials: Material[], $: boolean};
	static UpdateMaterial(Context: string,Collection: MaterialParameterCollection,Material: Material): boolean;
	static SetVectorParameterValue_UpdateMaterials(Context: string,Collection: MaterialParameterCollection,ParamName: string,Value: LinearColor): boolean;
	static SetVectorParameterValue(Context: string,Collection: MaterialParameterCollection,ParamName: string,Value: LinearColor): boolean;
	static SetScalarParameterValue_UpdateMaterials(Context: string,Collection: MaterialParameterCollection,ParamName: string,Value: number): boolean;
	static SetScalarParameterValue(Context: string,Collection: MaterialParameterCollection,ParamName: string,Value: number): boolean;
	static C(Other: UObject | any): CsScriptLibrary_MPC;
}

declare class CsScriptLibrary_Object extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Object;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Object;
	static GetDefaultObject(): CsScriptLibrary_Object;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Object;
	static Object_MarkPendingKill(Context: string,UObject: UObject): boolean;
	static LoadByStringPath(UObject: string,Path: string): UObject;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): UObject;
	static EqualEqual(A: UObject,B: UObject): boolean;
	static ConstructObject(Context: string,Outer: UObject,Class: UnrealEngineClass): UObject;
	static C(Other: UObject | any): CsScriptLibrary_Object;
}

declare class CsScriptLibrary_Property extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Property;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Property;
	static GetDefaultObject(): CsScriptLibrary_Property;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Property;
	static SetInt(Context: string,UObject: UObject,PropertyName: string,Value: number): boolean;
	static SetFloat(Context: string,UObject: UObject,PropertyName: string,Value: number): boolean;
	static SetBool(Context: string,UObject: UObject,PropertyName: string,Value: boolean): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Property;
}

declare class CsScriptLibrary_Routine extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Routine;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Routine;
	static GetDefaultObject(): CsScriptLibrary_Routine;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Routine;
	static ToString(Handle: CsRoutineHandle): string;
	static Reset(Handle?: CsRoutineHandle): {Handle: CsRoutineHandle, $: CsRoutineHandle};
	static New(Handle?: CsRoutineHandle): {Handle: CsRoutineHandle, $: CsRoutineHandle};
	static IsValid(Handle: CsRoutineHandle): boolean;
	static EqualEqual(A: CsRoutineHandle,B: CsRoutineHandle): boolean;
	static CreateNew(): CsRoutineHandle;
	static C(Other: UObject | any): CsScriptLibrary_Routine;
}

declare class CsScriptLibrary_Settings extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Settings;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Settings;
	static GetDefaultObject(): CsScriptLibrary_Settings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Settings;
	static Get(): CsDeveloperSettings;
	static C(Other: UObject | any): CsScriptLibrary_Settings;
}

declare class CsScriptLibrary_Settings_Input extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Settings_Input;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Settings_Input;
	static GetDefaultObject(): CsScriptLibrary_Settings_Input;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Settings_Input;
	static RemoveActionFromMap(Context: string,Map: ECsInputActionMap,Action: ECsInputAction): void;
	static DoesMappingExist(Context: string,Map: ECsInputActionMap): boolean;
	static DoesActionByMapExist(Context: string,Map: ECsInputActionMap,Action: ECsInputAction): boolean;
	static ClearMapping(Context: string,Map: ECsInputActionMap): void;
	static AddActionToMap(Context: string,Map: ECsInputActionMap,Action: ECsInputAction): void;
	static C(Other: UObject | any): CsScriptLibrary_Settings_Input;
}

declare class CsScriptLibrary_SkeletalMesh extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_SkeletalMesh;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_SkeletalMesh;
	static GetDefaultObject(): CsScriptLibrary_SkeletalMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_SkeletalMesh;
	static LoadByStringPath(Context: string,Path: string): SkeletalMesh;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): SkeletalMesh;
	static C(Other: UObject | any): CsScriptLibrary_SkeletalMesh;
}

declare class CsScriptLibrary_SkeletalMeshActor extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_SkeletalMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_SkeletalMeshActor;
	static GetDefaultObject(): CsScriptLibrary_SkeletalMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_SkeletalMeshActor;
	static ToString(Enum: ECsSkeletalMeshActor): string;
	static GetMax(): ECsSkeletalMeshActor;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsSkeletalMeshActor;
	static GetAll(OutTypes?: ECsSkeletalMeshActor[]): {OutTypes: ECsSkeletalMeshActor[]};
	static Get(Name: string): ECsSkeletalMeshActor;
	static EqualEqual(A: ECsSkeletalMeshActor,B: ECsSkeletalMeshActor): boolean;
	static C(Other: UObject | any): CsScriptLibrary_SkeletalMeshActor;
}

declare class CsSound_Spawn_Params { 
	Sound: CsSound;
	VolumeMultiplier: number;
	PitchMultiplier: number;
	UObject: UObject;
	FrequencyParams: CsSpawner_FrequencyParams;
	Group: ECsUpdateGroup;
	clone() : CsSound_Spawn_Params;
	static C(Other: UObject | any): CsSound_Spawn_Params;
}

declare class CsScriptLibrary_Sound extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Sound;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Sound;
	static GetDefaultObject(): CsScriptLibrary_Sound;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Sound;
	static ToString(Enum: ECsSound): string;
	static Spawn(Context: string,WorldContextObject: UObject,Params: CsSound_Spawn_Params): CsRoutineHandle;
	static LoadByStringPath(Context: string,Path: string): SoundBase;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): SoundBase;
	static GetMax(): ECsSound;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsSound;
	static GetAll(OutTypes?: ECsSound[]): {OutTypes: ECsSound[]};
	static Get(Name: string): ECsSound;
	static EqualEqual(A: ECsSound,B: ECsSound): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Sound;
}

declare class CsSpawner_CountParams { 
	CountPerSpawn: number;
	TimeBetweenCountPerSpawn: number;
	clone() : CsSpawner_CountParams;
	static C(Other: UObject | any): CsSpawner_CountParams;
}

declare type ECsSpawnerShape = 'Circle' | 'Rectangle' | 'Sphere' | 'Box' | 'Custom' | 'ECsSpawnerShape_MAX';
declare var ECsSpawnerShape : { Circle:'Circle',Rectangle:'Rectangle',Sphere:'Sphere',Box:'Box',Custom:'Custom',ECsSpawnerShape_MAX:'ECsSpawnerShape_MAX', };
declare type ECsSpawnerShapeCenter = 'Self' | 'Transform' | 'Actor' | 'Custom' | 'ECsSpawnerShapeCenter_MAX';
declare var ECsSpawnerShapeCenter : { Self:'Self',Transform:'Transform',Actor:'Actor',Custom:'Custom',ECsSpawnerShapeCenter_MAX:'ECsSpawnerShapeCenter_MAX', };
declare type ECsSpawnerDistribution = 'Uniform' | 'ECsSpawnerDistribution_MAX';
declare var ECsSpawnerDistribution : { Uniform:'Uniform',ECsSpawnerDistribution_MAX:'ECsSpawnerDistribution_MAX', };
declare class CsSpawnerParams_ShapeCircleImpl { 
	CountParams: CsSpawner_CountParams;
	FrequencyParams: CsSpawner_FrequencyParams;
	TotalTime: number;
	Shape: ECsSpawnerShape;
	Center: ECsSpawnerShapeCenter;
	Distribution: ECsSpawnerDistribution;
	MinRadius: number;
	MaxRadius: number;
	clone() : CsSpawnerParams_ShapeCircleImpl;
	static C(Other: UObject | any): CsSpawnerParams_ShapeCircleImpl;
}

declare class CsSpawnerParamsImpl { 
	CountParams: CsSpawner_CountParams;
	FrequencyParams: CsSpawner_FrequencyParams;
	TotalTime: number;
	clone() : CsSpawnerParamsImpl;
	static C(Other: UObject | any): CsSpawnerParamsImpl;
}

declare class CsScriptLibrary_Spawner extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Spawner;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Spawner;
	static GetDefaultObject(): CsScriptLibrary_Spawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Spawner;
	static SetParams_ShapeCircleImpl(Context: string,Spawner: UObject,Params: CsSpawnerParams_ShapeCircleImpl): boolean;
	static SetParams_DefaultImpl(Context: string,Spawner: UObject,Params: CsSpawnerParamsImpl): boolean;
	static PointImpl_SetCenterAsTransform(Context: string,Spawner: UObject,Center: Transform3f): boolean;
	static PointImpl_SetCenterAsActor(Context: string,Spawner: UObject,Center: Actor): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Spawner;
}

declare class CsScriptLibrary_StaticMesh extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_StaticMesh;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_StaticMesh;
	static GetDefaultObject(): CsScriptLibrary_StaticMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_StaticMesh;
	static LoadByStringPath(Context: string,Path: string): StaticMesh;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): StaticMesh;
	static C(Other: UObject | any): CsScriptLibrary_StaticMesh;
}

declare class CsScriptLibrary_StaticMeshActor extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_StaticMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_StaticMeshActor;
	static GetDefaultObject(): CsScriptLibrary_StaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_StaticMeshActor;
	static ToString(Enum: ECsStaticMeshActor): string;
	static GetMax(): ECsStaticMeshActor;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsStaticMeshActor;
	static GetAll(OutTypes?: ECsStaticMeshActor[]): {OutTypes: ECsStaticMeshActor[]};
	static Get(Name: string): ECsStaticMeshActor;
	static EqualEqual(A: ECsStaticMeshActor,B: ECsStaticMeshActor): boolean;
	static C(Other: UObject | any): CsScriptLibrary_StaticMeshActor;
}

declare class CsScriptLibrary_Texture extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Texture;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Texture;
	static GetDefaultObject(): CsScriptLibrary_Texture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Texture;
	static LoadByStringPath(Context: string,Path: string): Texture;
	static LoadBySoftObjectPath(Context: string,Path: SoftObjectPath): Texture;
	static C(Other: UObject | any): CsScriptLibrary_Texture;
}

declare class CsScriptLibrary_Time extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Time;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Time;
	static GetDefaultObject(): CsScriptLibrary_Time;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Time;
	static Subtract_DeltaTime(A: CsDeltaTime,B: CsDeltaTime): CsDeltaTime;
	static FCsTime_Create(): CsTime;
	static FCsTime_Copy(Time: CsTime): CsTime;
	static FCsDeltaTime_Copy(DeltaTime: CsDeltaTime): CsDeltaTime;
	static Add_DeltaTime(A: CsDeltaTime,B: CsDeltaTime): CsDeltaTime;
	static C(Other: UObject | any): CsScriptLibrary_Time;
}

declare class CsScriptLibrary_UpdateGroup extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_UpdateGroup;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_UpdateGroup;
	static GetDefaultObject(): CsScriptLibrary_UpdateGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_UpdateGroup;
	static ToString(Enum: ECsUpdateGroup): string;
	static GetMax(): ECsUpdateGroup;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsUpdateGroup;
	static GetAll(OutTypes?: ECsUpdateGroup[]): {OutTypes: ECsUpdateGroup[]};
	static Get(Name: string): ECsUpdateGroup;
	static EqualEqual(A: ECsUpdateGroup,B: ECsUpdateGroup): boolean;
	static C(Other: UObject | any): CsScriptLibrary_UpdateGroup;
}

declare class CsScriptLibrary_Viewport extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Viewport;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Viewport;
	static GetDefaultObject(): CsScriptLibrary_Viewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Viewport;
	static Trace(Context: string,WorldContextObject: UObject,ScreenPosition: Vector2f,Request: CsTraceRequest,Distance: number,OutResponse?: CsTraceResponse): {OutResponse: CsTraceResponse, $: boolean};
	static GetSize(Context: string,WorldContextObject: UObject): IntPoint;
	static GetScreenWorldIntersection(Context: string,WorldContextObject: UObject,ScreenPosition: Vector2f,Plane: Plane4f,OutIntersection?: Vector3f): {OutIntersection: Vector3f, $: boolean};
	static DeprojectScreenToWorld(Context: string,WorldContextObject: UObject,ScreenPosition: Vector2f,OutWorldPosition?: Vector3f,OutWorldDirection?: Vector3f): {OutWorldPosition: Vector3f, OutWorldDirection: Vector3f, $: boolean};
	static C(Other: UObject | any): CsScriptLibrary_Viewport;
}

declare class CsScriptLibrary_World extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_World;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_World;
	static GetDefaultObject(): CsScriptLibrary_World;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_World;
	static RemoveNetworkActor(Context: string,Actor: Actor): void;
	static C(Other: UObject | any): CsScriptLibrary_World;
}

declare class CsSpawner extends Interface { 
	static Load(ResourceName: string): CsSpawner;
	static Find(Outer: UObject, ResourceName: string): CsSpawner;
	static GetDefaultObject(): CsSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSpawner;
	static C(Other: UObject | any): CsSpawner;
}

declare class CsScriptSpawner extends CsSpawner { 
	static Load(ResourceName: string): CsScriptSpawner;
	static Find(Outer: UObject, ResourceName: string): CsScriptSpawner;
	static GetDefaultObject(): CsScriptSpawner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptSpawner;
	Script_Spawn(): void;
	static C(Other: UObject | any): CsScriptSpawner;
}

declare class CsSpline extends Interface { 
	static Load(ResourceName: string): CsSpline;
	static Find(Outer: UObject, ResourceName: string): CsSpline;
	static GetDefaultObject(): CsSpline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSpline;
	static C(Other: UObject | any): CsSpline;
}

declare class CsScriptSpline extends CsSpline { 
	static Load(ResourceName: string): CsScriptSpline;
	static Find(Outer: UObject, ResourceName: string): CsScriptSpline;
	static GetDefaultObject(): CsScriptSpline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptSpline;
	Script_GetSplineComponent(): SplineComponent;
	static C(Other: UObject | any): CsScriptSpline;
}

declare class CsUpdate extends Interface { 
	static Load(ResourceName: string): CsUpdate;
	static Find(Outer: UObject, ResourceName: string): CsUpdate;
	static GetDefaultObject(): CsUpdate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsUpdate;
	static C(Other: UObject | any): CsUpdate;
}

declare class CsScriptUpdate extends CsUpdate { 
	static Load(ResourceName: string): CsScriptUpdate;
	static Find(Outer: UObject, ResourceName: string): CsScriptUpdate;
	static GetDefaultObject(): CsScriptUpdate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptUpdate;
	Script_Update(DeltaTime: CsDeltaTime): void;
	static C(Other: UObject | any): CsScriptUpdate;
}

declare class CsSensedObject extends Interface { 
	static Load(ResourceName: string): CsSensedObject;
	static Find(Outer: UObject, ResourceName: string): CsSensedObject;
	static GetDefaultObject(): CsSensedObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSensedObject;
	static C(Other: UObject | any): CsSensedObject;
}

declare class CsSensingObject extends Interface { 
	static Load(ResourceName: string): CsSensingObject;
	static Find(Outer: UObject, ResourceName: string): CsSensingObject;
	static GetDefaultObject(): CsSensingObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSensingObject;
	static C(Other: UObject | any): CsSensingObject;
}

declare class CsShutdown extends Interface { 
	static Load(ResourceName: string): CsShutdown;
	static Find(Outer: UObject, ResourceName: string): CsShutdown;
	static GetDefaultObject(): CsShutdown;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsShutdown;
	static C(Other: UObject | any): CsShutdown;
}

declare class CsSkeletalMeshActor extends Interface { 
	static Load(ResourceName: string): CsSkeletalMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsSkeletalMeshActor;
	static GetDefaultObject(): CsSkeletalMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSkeletalMeshActor;
	static C(Other: UObject | any): CsSkeletalMeshActor;
}

declare class CsSkeletalMeshActorPooledImpl extends SkeletalMeshActor { 
	MIDs: MaterialInstanceDynamic[];
	static GetDefaultObject(): CsSkeletalMeshActorPooledImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSkeletalMeshActorPooledImpl;
	static C(Other: UObject | any): CsSkeletalMeshActorPooledImpl;
}

declare class CsSoundPooled extends Interface { 
	static Load(ResourceName: string): CsSoundPooled;
	static Find(Outer: UObject, ResourceName: string): CsSoundPooled;
	static GetDefaultObject(): CsSoundPooled;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSoundPooled;
	static C(Other: UObject | any): CsSoundPooled;
}

declare class CsSoundPooledImpl extends Actor { 
	AudioComponent: AudioComponent;
	Type: ECsSound;
	static GetDefaultObject(): CsSoundPooledImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSoundPooledImpl;
	Stop(FadeOutTime: number): void;
	FadeOut(Duration: number): void;
	FadeIn(Duration: number): void;
	static C(Other: UObject | any): CsSoundPooledImpl;
}

declare class CsSpawnedObject extends Interface { 
	static Load(ResourceName: string): CsSpawnedObject;
	static Find(Outer: UObject, ResourceName: string): CsSpawnedObject;
	static GetDefaultObject(): CsSpawnedObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSpawnedObject;
	static C(Other: UObject | any): CsSpawnedObject;
}

declare class CsSpawnerImpl extends Actor { 
	bOverride_StartPlay: boolean;
	bReceiveStartPlay: boolean;
	bConstructDefaultPointImpl: boolean;
	bConstructDefaultParams: boolean;
	OnSpawnObject_ScriptEvent: UnrealEngineMulticastDelegate<(Spawner: CsSpawnerImpl, SpawnedObject: UObject) => void>;
	bOverride_SpawnObject: boolean;
	static GetDefaultObject(): CsSpawnerImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSpawnerImpl;
	Stop(): void;
	Start(): void;
	Spawn(): void;
	SetupFromParams(): void;
	ReceiveStartPlay(): void;
	PointImpl_GetCurrentTransform(): Transform3f;
	Override_StartPlay(): void;
	Override_SpawnObject(Count: number,Group: number,CountPerGroup: number): UObject;
	GetSpawnedObjects(OutObjects?: UObject[]): {OutObjects: UObject[]};
	static C(Other: UObject | any): CsSpawnerImpl;
}

declare class CsStartPlay extends Interface { 
	static Load(ResourceName: string): CsStartPlay;
	static Find(Outer: UObject, ResourceName: string): CsStartPlay;
	static GetDefaultObject(): CsStartPlay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsStartPlay;
	static C(Other: UObject | any): CsStartPlay;
}

declare class CsStaticMeshActor extends Interface { 
	static Load(ResourceName: string): CsStaticMeshActor;
	static Find(Outer: UObject, ResourceName: string): CsStaticMeshActor;
	static GetDefaultObject(): CsStaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsStaticMeshActor;
	static C(Other: UObject | any): CsStaticMeshActor;
}

declare class CsStaticMeshActorPooledImpl extends StaticMeshActor { 
	MIDs: MaterialInstanceDynamic[];
	static GetDefaultObject(): CsStaticMeshActorPooledImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsStaticMeshActorPooledImpl;
	static C(Other: UObject | any): CsStaticMeshActorPooledImpl;
}

declare class CsTeam extends Interface { 
	static Load(ResourceName: string): CsTeam;
	static Find(Outer: UObject, ResourceName: string): CsTeam;
	static GetDefaultObject(): CsTeam;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsTeam;
	static C(Other: UObject | any): CsTeam;
}

declare class CsUniqueObject extends Interface { 
	static Load(ResourceName: string): CsUniqueObject;
	static Find(Outer: UObject, ResourceName: string): CsUniqueObject;
	static GetDefaultObject(): CsUniqueObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsUniqueObject;
	static C(Other: UObject | any): CsUniqueObject;
}

declare class CsGetManagerJavascript extends Interface { 
	static Load(ResourceName: string): CsGetManagerJavascript;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerJavascript;
	static GetDefaultObject(): CsGetManagerJavascript;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerJavascript;
	static C(Other: UObject | any): CsGetManagerJavascript;
}

declare class CsJsSettings extends DeveloperSettings { 
	GameInstanceEntryPointFileName: string;
	GameStateEntryPointFileName: string;
	static Load(ResourceName: string): CsJsSettings;
	static Find(Outer: UObject, ResourceName: string): CsJsSettings;
	static GetDefaultObject(): CsJsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsJsSettings;
	static C(Other: UObject | any): CsJsSettings;
}

declare class CsJavascriptFileObjects { 
	Isolate: UObject;
	Context: UObject;
	ExposedObjectNames: string[];
	clone() : CsJavascriptFileObjects;
	static C(Other: UObject | any): CsJavascriptFileObjects;
}

declare class CsManager_Javascript extends UObject { 
	OnShutdown_ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	EntryPoint: CsJavascriptFileObjects;
	ScriptObjects: CsJavascriptFileObjects[];
	static Load(ResourceName: string): CsManager_Javascript;
	static Find(Outer: UObject, ResourceName: string): CsManager_Javascript;
	static GetDefaultObject(): CsManager_Javascript;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Javascript;
	GetCurrentScriptIndex(): number;
	static C(Other: UObject | any): CsManager_Javascript;
}

declare class CsDebugDrawCircle { 
	CVar: ECsCVarDraw;
	bEnableInPreview: boolean;
	PriorityInPlay: ECsDebugDrawPriority;
	bEnableInPlay: boolean;
	Location: Vector3f;
	RotationType: ECsDebugDrawRotation;
	Rotation: Rotator3f;
	MinRadius: number;
	MaxRadius: number;
	Segments: number;
	Color: Color;
	Lifetime: number;
	Thickness: number;
	clone() : CsDebugDrawCircle;
	static C(Other: UObject | any): CsDebugDrawCircle;
}

declare class CsDebugDrawPie { 
	CVar: ECsCVarDraw;
	bEnableInPreview: boolean;
	PriorityInPlay: ECsDebugDrawPriority;
	bEnableInPlay: boolean;
	Location: Vector3f;
	RotationType: ECsDebugDrawRotation;
	Rotation: Rotator3f;
	Angle: number;
	Radius: number;
	Segments: number;
	Color: Color;
	Lifetime: number;
	Thickness: number;
	clone() : CsDebugDrawPie;
	static C(Other: UObject | any): CsDebugDrawPie;
}

declare class CsSettings_Damage_Debug { 
	Sphere: CsDebugDrawSphere;
	bSphereAsCircle: boolean;
	Circle: CsDebugDrawCircle;
	PIE: CsDebugDrawPie;
	clone() : CsSettings_Damage_Debug;
	static C(Other: UObject | any): CsSettings_Damage_Debug;
}

declare class CsSettings_Damage { 
	Debug: CsSettings_Damage_Debug;
	clone() : CsSettings_Damage;
	static C(Other: UObject | any): CsSettings_Damage;
}

declare class CsSettings_Manager_Damage_Event { 
	PoolSize: number;
	DrawPie: CsDebugDrawPie;
	clone() : CsSettings_Manager_Damage_Event;
	static C(Other: UObject | any): CsSettings_Manager_Damage_Event;
}

declare class CsSettings_Manager_Damage_Value { 
	PoolSize: number;
	clone() : CsSettings_Manager_Damage_Value;
	static C(Other: UObject | any): CsSettings_Manager_Damage_Value;
}

declare class CsSettings_Manager_Damage_Range { 
	PoolSize: number;
	clone() : CsSettings_Manager_Damage_Range;
	static C(Other: UObject | any): CsSettings_Manager_Damage_Range;
}

declare class CsSettings_Manager_Damage_Modifier { 
	PoolSize: number;
	clone() : CsSettings_Manager_Damage_Modifier;
	static C(Other: UObject | any): CsSettings_Manager_Damage_Modifier;
}

declare class CsSettings_Manager_Damage { 
	Event: CsSettings_Manager_Damage_Event;
	Value: CsSettings_Manager_Damage_Value;
	Range: CsSettings_Manager_Damage_Range;
	Modifier: CsSettings_Manager_Damage_Modifier;
	clone() : CsSettings_Manager_Damage;
	static C(Other: UObject | any): CsSettings_Manager_Damage;
}

declare class CsDamageSettings extends DeveloperSettings { 
	Damage: CsSettings_Damage;
	Manager_Damage: CsSettings_Manager_Damage;
	static Load(ResourceName: string): CsDamageSettings;
	static Find(Outer: UObject, ResourceName: string): CsDamageSettings;
	static GetDefaultObject(): CsDamageSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsDamageSettings;
	static C(Other: UObject | any): CsDamageSettings;
}

declare class CsData_Damage extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_Damage;
	static Find(Outer: UObject, ResourceName: string): CsData_Damage;
	static GetDefaultObject(): CsData_Damage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_Damage;
	static C(Other: UObject | any): CsData_Damage;
}

declare class CsData_DamageCollision extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_DamageCollision;
	static Find(Outer: UObject, ResourceName: string): CsData_DamageCollision;
	static GetDefaultObject(): CsData_DamageCollision;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamageCollision;
	static C(Other: UObject | any): CsData_DamageCollision;
}

declare class CsData_DamageCone extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_DamageCone;
	static Find(Outer: UObject, ResourceName: string): CsData_DamageCone;
	static GetDefaultObject(): CsData_DamageCone;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamageCone;
	static C(Other: UObject | any): CsData_DamageCone;
}

declare class CsData_DamageOrientation extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_DamageOrientation;
	static Find(Outer: UObject, ResourceName: string): CsData_DamageOrientation;
	static GetDefaultObject(): CsData_DamageOrientation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamageOrientation;
	static C(Other: UObject | any): CsData_DamageOrientation;
}

declare class ECsDamageType extends ECsEnum_uint8 { 
	clone() : ECsDamageType;
	static C(Other: UObject | any): ECsDamageType;
}

declare class CsData_DamagePointImpl extends UObject { 
	Value: number;
	Type: ECsDamageType;
	static Load(ResourceName: string): CsData_DamagePointImpl;
	static Find(Outer: UObject, ResourceName: string): CsData_DamagePointImpl;
	static GetDefaultObject(): CsData_DamagePointImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamagePointImpl;
	static C(Other: UObject | any): CsData_DamagePointImpl;
}

declare class CsData_DamageShape extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_DamageShape;
	static Find(Outer: UObject, ResourceName: string): CsData_DamageShape;
	static GetDefaultObject(): CsData_DamageShape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamageShape;
	static C(Other: UObject | any): CsData_DamageShape;
}

declare class CsData_DamageSphere extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_DamageSphere;
	static Find(Outer: UObject, ResourceName: string): CsData_DamageSphere;
	static GetDefaultObject(): CsData_DamageSphere;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamageSphere;
	static C(Other: UObject | any): CsData_DamageSphere;
}

declare type ECsInterpolatingMethod = 'Easing' | 'Curve' | 'Custom' | 'ECsInterpolatingMethod_MAX';
declare var ECsInterpolatingMethod : { Easing:'Easing',Curve:'Curve',Custom:'Custom',ECsInterpolatingMethod_MAX:'ECsInterpolatingMethod_MAX', };
declare class CsCurveFloat { 
	Curve: CurveFloat;
	Curve_LoadFlags: number;
	Curve_Internal: CurveFloat;
	clone() : CsCurveFloat;
	static C(Other: UObject | any): CsCurveFloat;
}

declare type ECsDamageCollisionMethod = 'PhysicsSweep' | 'PhysicsOverlap' | 'Custom' | 'ECsDamageCollisionMethod_MAX';
declare var ECsDamageCollisionMethod : { PhysicsSweep:'PhysicsSweep',PhysicsOverlap:'PhysicsOverlap',Custom:'Custom',ECsDamageCollisionMethod_MAX:'ECsDamageCollisionMethod_MAX', };
declare class CsDamage_CollisionInfo { 
	Method: ECsDamageCollisionMethod;
	Channel: ECollisionChannel;
	Count: number;
	clone() : CsDamage_CollisionInfo;
	static C(Other: UObject | any): CsDamage_CollisionInfo;
}

declare class CsData_DamageSphereImpl_Inner { 
	Type: ECsDamageType;
	MinDamage: number;
	MaxDamage: number;
	MinRadius: number;
	MaxRadius: number;
	bInterpolate: boolean;
	InterpolationMethod: ECsInterpolatingMethod;
	EasingType: ECsEasingType;
	Curve: CsCurveFloat;
	CollisionInfo: CsDamage_CollisionInfo;
	clone() : CsData_DamageSphereImpl_Inner;
	static C(Other: UObject | any): CsData_DamageSphereImpl_Inner;
}

declare class CsData_DamageSphereImpl extends UObject { 
	Inner: CsData_DamageSphereImpl_Inner;
	static Load(ResourceName: string): CsData_DamageSphereImpl;
	static Find(Outer: UObject, ResourceName: string): CsData_DamageSphereImpl;
	static GetDefaultObject(): CsData_DamageSphereImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_DamageSphereImpl;
	static C(Other: UObject | any): CsData_DamageSphereImpl;
}

declare class CsData_GetDamageDataType extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_GetDamageDataType;
	static Find(Outer: UObject, ResourceName: string): CsData_GetDamageDataType;
	static GetDefaultObject(): CsData_GetDamageDataType;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_GetDamageDataType;
	static C(Other: UObject | any): CsData_GetDamageDataType;
}

declare class CsData_GetDamageDataTypes extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CsData_GetDamageDataTypes;
	static Find(Outer: UObject, ResourceName: string): CsData_GetDamageDataTypes;
	static GetDefaultObject(): CsData_GetDamageDataTypes;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsData_GetDamageDataTypes;
	static C(Other: UObject | any): CsData_GetDamageDataTypes;
}

declare class CsDmgGetDataRootSet extends Interface { 
	static Load(ResourceName: string): CsDmgGetDataRootSet;
	static Find(Outer: UObject, ResourceName: string): CsDmgGetDataRootSet;
	static GetDefaultObject(): CsDmgGetDataRootSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsDmgGetDataRootSet;
	static C(Other: UObject | any): CsDmgGetDataRootSet;
}

declare class CsGetCurrentDamageEvent extends Interface { 
	static Load(ResourceName: string): CsGetCurrentDamageEvent;
	static Find(Outer: UObject, ResourceName: string): CsGetCurrentDamageEvent;
	static GetDefaultObject(): CsGetCurrentDamageEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetCurrentDamageEvent;
	static C(Other: UObject | any): CsGetCurrentDamageEvent;
}

declare class CsGetDamageModifiers extends Interface { 
	static Load(ResourceName: string): CsGetDamageModifiers;
	static Find(Outer: UObject, ResourceName: string): CsGetDamageModifiers;
	static GetDefaultObject(): CsGetDamageModifiers;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetDamageModifiers;
	static C(Other: UObject | any): CsGetDamageModifiers;
}

declare class CsGetManagerDamage extends Interface { 
	static Load(ResourceName: string): CsGetManagerDamage;
	static Find(Outer: UObject, ResourceName: string): CsGetManagerDamage;
	static GetDefaultObject(): CsGetManagerDamage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsGetManagerDamage;
	static C(Other: UObject | any): CsGetManagerDamage;
}

declare class CsManager_Damage extends UObject { 
	static Load(ResourceName: string): CsManager_Damage;
	static Find(Outer: UObject, ResourceName: string): CsManager_Damage;
	static GetDefaultObject(): CsManager_Damage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_Damage;
	static C(Other: UObject | any): CsManager_Damage;
}

declare class CsReceiveDamage extends Interface { 
	static Load(ResourceName: string): CsReceiveDamage;
	static Find(Outer: UObject, ResourceName: string): CsReceiveDamage;
	static GetDefaultObject(): CsReceiveDamage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsReceiveDamage;
	static C(Other: UObject | any): CsReceiveDamage;
}

declare class ECsHitType extends ECsEnum_uint8 { 
	clone() : ECsHitType;
	static C(Other: UObject | any): ECsHitType;
}

declare class CsScriptLibrary_DamageEvent extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_DamageEvent;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_DamageEvent;
	static GetDefaultObject(): CsScriptLibrary_DamageEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_DamageEvent;
	static GetOrigin(Context: string,UObject: UObject): HitResult;
	static GetInstigator(Context: string,UObject: UObject): UObject;
	static GetIgnoreObjects(Context: string,UObject: UObject,OutObjects?: UObject[]): {OutObjects: UObject[], $: boolean};
	static GetHitType(Context: string,UObject: UObject): ECsHitType;
	static GetHitResult(Context: string,UObject: UObject): HitResult;
	static GetDamageDirection(Context: string,UObject: UObject): Vector3f;
	static GetDamage(Context: string,UObject: UObject): number;
	static GetCauser(Context: string,UObject: UObject): UObject;
	static C(Other: UObject | any): CsScriptLibrary_DamageEvent;
}

declare class CsScriptLibrary_DamageType extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_DamageType;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_DamageType;
	static GetDefaultObject(): CsScriptLibrary_DamageType;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_DamageType;
	static ToString(Enum: ECsDamageType): string;
	static NotEqual(A: ECsDamageType,B: ECsDamageType): boolean;
	static IsValidByName(Name: string): boolean;
	static IsValid(Enum: ECsDamageType): boolean;
	static GetMax(): ECsDamageType;
	static GetCount(): number;
	static GetByIndex(Index: number): ECsDamageType;
	static GetAll(OutTypes?: ECsDamageType[]): {OutTypes: ECsDamageType[]};
	static Get(Name: string): ECsDamageType;
	static EqualEqual(A: ECsDamageType,B: ECsDamageType): boolean;
	static Create(Name: string,DisplayName: string): ECsDamageType;
	static C(Other: UObject | any): CsScriptLibrary_DamageType;
}

declare class CsData_DamagePointImplSlice { 
	Value: number;
	Type: ECsDamageType;
	clone() : CsData_DamagePointImplSlice;
	static C(Other: UObject | any): CsData_DamagePointImplSlice;
}

declare class CsScriptLibrary_Data_Damage extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Data_Damage;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Data_Damage;
	static GetDefaultObject(): CsScriptLibrary_Data_Damage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Data_Damage;
	static ConstructFromObject_Point(Context: string,WorldContextObject: UObject,Name: string,UObject: UObject): boolean;
	static Construct_Point(Context: string,WorldContextObject: UObject,Name: string,Slice: CsData_DamagePointImplSlice): boolean;
	static C(Other: UObject | any): CsScriptLibrary_Data_Damage;
}

declare class ECsDamageData extends ECsEnum_uint8 { 
	clone() : ECsDamageData;
	static C(Other: UObject | any): ECsDamageData;
}

declare class CsScriptLibrary_Manager_Damage extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_Manager_Damage;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_Manager_Damage;
	static GetDefaultObject(): CsScriptLibrary_Manager_Damage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_Manager_Damage;
	static ProcessData(Context: string,WorldContextObject: UObject,DataName: string,Instigator: UObject,Causer: UObject,HitResult: HitResult): boolean;
	static GetDataByName(Context: string,WorldContextObject: UObject,Name: string): UObject;
	static GetData(Context: string,WorldContextObject: UObject,Type: ECsDamageData): UObject;
	static C(Other: UObject | any): CsScriptLibrary_Manager_Damage;
}

declare class CDataRootSet_Sound { 
	MasterSoundMix: SoundMix;
	MasterSoundClass: SoundClass;
	MusicSoundClass: SoundClass;
	clone() : CDataRootSet_Sound;
	static C(Other: UObject | any): CDataRootSet_Sound;
}

declare class CDataRootSet { 
	GameMap: SoftObjectPath;
	Sound: CDataRootSet_Sound;
	GamePlays: DataTable;
	clone() : CDataRootSet;
	static C(Other: UObject | any): CDataRootSet;
}

declare class CsDmgDataRootSet { 
	Damages: DataTable;
	clone() : CsDmgDataRootSet;
	static C(Other: UObject | any): CsDmgDataRootSet;
}

declare class CDataRootSetImpl extends CsDataRootSetImpl { 
	CImpl_DataRootSet: CDataRootSet;
	Damage_DataRootSet: CsDmgDataRootSet;
	static Load(ResourceName: string): CDataRootSetImpl;
	static Find(Outer: UObject, ResourceName: string): CDataRootSetImpl;
	static GetDefaultObject(): CDataRootSetImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CDataRootSetImpl;
	static C(Other: UObject | any): CDataRootSetImpl;
}

declare class CData_GamePlay extends CsGetInterfaceMap { 
	static Load(ResourceName: string): CData_GamePlay;
	static Find(Outer: UObject, ResourceName: string): CData_GamePlay;
	static GetDefaultObject(): CData_GamePlay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CData_GamePlay;
	static C(Other: UObject | any): CData_GamePlay;
}

declare class CsScript_FileInfo { 
	bEnable: boolean;
	File: string;
	clone() : CsScript_FileInfo;
	static C(Other: UObject | any): CsScript_FileInfo;
}

declare class CsScriptInfo { 
	bRecompileAllOnPIEExit: boolean;
	FileInfos: CsScript_FileInfo[];
	clone() : CsScriptInfo;
	static C(Other: UObject | any): CsScriptInfo;
}

declare class CData_Level_SetupImpl_Inner { 
	Payload: CsPayload;
	ScriptInfo: CsScriptInfo;
	clone() : CData_Level_SetupImpl_Inner;
	static C(Other: UObject | any): CData_Level_SetupImpl_Inner;
}

declare class CData_Level_SetupImpl extends UObject { 
	Inner: CData_Level_SetupImpl_Inner;
	static Load(ResourceName: string): CData_Level_SetupImpl;
	static Find(Outer: UObject, ResourceName: string): CData_Level_SetupImpl;
	static GetDefaultObject(): CData_Level_SetupImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CData_Level_SetupImpl;
	static C(Other: UObject | any): CData_Level_SetupImpl;
}

declare class CGameInstance extends CsGameInstance { 
	OnFinishedLoadingStartupPayload_ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): CGameInstance;
	static Find(Outer: UObject, ResourceName: string): CGameInstance;
	static GetDefaultObject(): CGameInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGameInstance;
	SetFinishedStartup(): void;
	HasFinishedLoadingStartupPayload(): boolean;
	static C(Other: UObject | any): CGameInstance;
}

declare class CGameMode_Test extends GameMode { 
	static GetDefaultObject(): CGameMode_Test;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGameMode_Test;
	static C(Other: UObject | any): CGameMode_Test;
}

declare class CGamePlay extends Interface { 
	static Load(ResourceName: string): CGamePlay;
	static Find(Outer: UObject, ResourceName: string): CGamePlay;
	static GetDefaultObject(): CGamePlay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGamePlay;
	static C(Other: UObject | any): CGamePlay;
}

declare class ECGamePlay extends ECsEnum_uint8 { 
	clone() : ECGamePlay;
	static C(Other: UObject | any): ECGamePlay;
}

declare class CGamePlayImpl extends ActorComponent { 
	bOverride_StartPlay: boolean;
	bReceiveStartPlay: boolean;
	bOverride_Start: boolean;
	Override_StartImpl: UnrealEngineMulticastDelegate<() => void>;
	bOverride_End: boolean;
	Type: ECGamePlay;
	bOverride_Init: boolean;
	Override_InitImpl: UnrealEngineMulticastDelegate<(TypeName: string) => void>;
	bOverride_Update: boolean;
	bReceiveUpdate: boolean;
	static Load(ResourceName: string): CGamePlayImpl;
	static Find(Outer: UObject, ResourceName: string): CGamePlayImpl;
	static GetDefaultObject(): CGamePlayImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGamePlayImpl;
	ReceiveUpdate(DeltaTime: CsDeltaTime): void;
	ReceiveStartPlay(): void;
	ReceiveStart(): void;
	Override_Update(DeltaTime: CsDeltaTime): void;
	Override_StartPlay(): void;
	Override_Start(): void;
	Broadcast_IntroComplete_Start(): void;
	static C(Other: UObject | any): CGamePlayImpl;
}

declare class CGamePlayTestImpl extends CGamePlayImpl { 
	static Load(ResourceName: string): CGamePlayTestImpl;
	static Find(Outer: UObject, ResourceName: string): CGamePlayTestImpl;
	static GetDefaultObject(): CGamePlayTestImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGamePlayTestImpl;
	static C(Other: UObject | any): CGamePlayTestImpl;
}

declare class CGamePlay_Event extends Interface { 
	static Load(ResourceName: string): CGamePlay_Event;
	static Find(Outer: UObject, ResourceName: string): CGamePlay_Event;
	static GetDefaultObject(): CGamePlay_Event;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGamePlay_Event;
	static C(Other: UObject | any): CGamePlay_Event;
}

declare class CGameState_Test extends GameState { 
	Manager_Singleton: CsManager_Singleton;
	OnUpdate_ScriptEvent: UnrealEngineMulticastDelegate<(DeltaTime: CsDeltaTime) => void>;
	GamePlayImpl: CGamePlayImpl;
	OnShutdown_ScriptEvent: UnrealEngineMulticastDelegate<() => void>;
	static GetDefaultObject(): CGameState_Test;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGameState_Test;
	SetGamePlayImpl(ImplClass: UnrealEngineClass): void;
	GetGamePlayImpl(): CGamePlayImpl;
	static C(Other: UObject | any): CGameState_Test;
}

declare class CGetDataRootSet extends Interface { 
	static Load(ResourceName: string): CGetDataRootSet;
	static Find(Outer: UObject, ResourceName: string): CGetDataRootSet;
	static GetDefaultObject(): CGetDataRootSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGetDataRootSet;
	static C(Other: UObject | any): CGetDataRootSet;
}

declare class CGetData_GamePlay_Override extends Interface { 
	static Load(ResourceName: string): CGetData_GamePlay_Override;
	static Find(Outer: UObject, ResourceName: string): CGetData_GamePlay_Override;
	static GetDefaultObject(): CGetData_GamePlay_Override;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGetData_GamePlay_Override;
	static C(Other: UObject | any): CGetData_GamePlay_Override;
}

declare class CGetGamePlay extends Interface { 
	static Load(ResourceName: string): CGetGamePlay;
	static Find(Outer: UObject, ResourceName: string): CGetGamePlay;
	static GetDefaultObject(): CGetGamePlay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGetGamePlay;
	static C(Other: UObject | any): CGetGamePlay;
}

declare class CLocalPlayerActions { 
	Move: ECsInputAction;
	clone() : CLocalPlayerActions;
	static C(Other: UObject | any): CLocalPlayerActions;
}

declare class CLocalPlayerEvents { 
	MoveForwardBack: ECsGameEvent;
	StartMoveForward: ECsGameEvent;
	StopMoveForward: ECsGameEvent;
	StartMoveBack: ECsGameEvent;
	StopMoveBack: ECsGameEvent;
	MoveLeftRight: ECsGameEvent;
	StartMoveLeft: ECsGameEvent;
	StopMoveLeft: ECsGameEvent;
	StartMoveRight: ECsGameEvent;
	StopMoveRight: ECsGameEvent;
	LookUpDown: ECsGameEvent;
	LookLeftRight: ECsGameEvent;
	StartJump: ECsGameEvent;
	StopJump: ECsGameEvent;
	clone() : CLocalPlayerEvents;
	static C(Other: UObject | any): CLocalPlayerEvents;
}

declare class CSettings_ConsoleCommand { 
	OpenEvent: ECsGameEvent;
	clone() : CSettings_ConsoleCommand;
	static C(Other: UObject | any): CSettings_ConsoleCommand;
}

declare class CImplSettings extends DeveloperSettings { 
	MenuMainInputMap: ECsInputActionMap;
	GameInputMap: ECsInputActionMap;
	LocalPlayerActions: CLocalPlayerActions;
	ApplicationQuitEvent: ECsGameEvent;
	LocalPlayerEvents: CLocalPlayerEvents;
	ConsoleCommand: CSettings_ConsoleCommand;
	static Load(ResourceName: string): CImplSettings;
	static Find(Outer: UObject, ResourceName: string): CImplSettings;
	static GetDefaultObject(): CImplSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CImplSettings;
	static C(Other: UObject | any): CImplSettings;
}

declare class CLevelScriptActor extends LevelScriptActor { 
	LevelSetupData: UnrealEngineClass;
	static GetDefaultObject(): CLevelScriptActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CLevelScriptActor;
	ReceiveUpdate(DeltaTime: CsDeltaTime): void;
	ReceiveStartPlay(): void;
	static C(Other: UObject | any): CLevelScriptActor;
}

declare class CManager_Level extends CsManager_Level { 
	static Load(ResourceName: string): CManager_Level;
	static Find(Outer: UObject, ResourceName: string): CManager_Level;
	static GetDefaultObject(): CManager_Level;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CManager_Level;
	static C(Other: UObject | any): CManager_Level;
}

declare class CManager_Singleton_GameInstance extends CsManager_Singleton { 
	Coordinator_ConsoleCommand: CsCoordinator_ConsoleCommand;
	Manager_UnitTest: CsManager_UnitTest;
	Manager_Time: CsManager_Time;
	CoroutineScheduler: CsCoroutineScheduler;
	Manager_Load: CsManager_Load;
	Manager_Runnable: CsManager_Runnable;
	Manager_Data: CsManager_Data;
	Coordinator_GameEvent: CsCoordinator_GameEvent;
	Manager_Level: CsManager_Level;
	Manager_Javascript: CsManager_Javascript;
	static Load(ResourceName: string): CManager_Singleton_GameInstance;
	static Find(Outer: UObject, ResourceName: string): CManager_Singleton_GameInstance;
	static GetDefaultObject(): CManager_Singleton_GameInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CManager_Singleton_GameInstance;
	static C(Other: UObject | any): CManager_Singleton_GameInstance;
}

declare class CManager_Singleton_GameState_Test extends CsManager_Singleton { 
	Manager_Sound: CsManager_Sound;
	Manager_FX: CsManager_FX;
	Manager_Trace: CsManager_Trace;
	Manager_StaticMeshActor: CsManager_StaticMeshActor;
	Manager_SkeletalMeshActor: CsManager_SkeletalMeshActor;
	Manager_Damage: CsManager_Damage;
	static Load(ResourceName: string): CManager_Singleton_GameState_Test;
	static Find(Outer: UObject, ResourceName: string): CManager_Singleton_GameState_Test;
	static GetDefaultObject(): CManager_Singleton_GameState_Test;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CManager_Singleton_GameState_Test;
	static C(Other: UObject | any): CManager_Singleton_GameState_Test;
}

declare class CPlayerController extends PlayerController { 
	Manager_Input: CsManager_Input;
	static GetDefaultObject(): CPlayerController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CPlayerController;
	GetManager_Input(): CsManager_Input;
	static C(Other: UObject | any): CPlayerController;
}

declare class CScriptLibrary_GamePlay extends UObject { 
	static Load(ResourceName: string): CScriptLibrary_GamePlay;
	static Find(Outer: UObject, ResourceName: string): CScriptLibrary_GamePlay;
	static GetDefaultObject(): CScriptLibrary_GamePlay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CScriptLibrary_GamePlay;
	static ToString(Enum: ECGamePlay): string;
	static GetMax(): ECGamePlay;
	static GetCount(): number;
	static GetByIndex(Index: number): ECGamePlay;
	static GetAll(OutTypes?: ECGamePlay[]): {OutTypes: ECGamePlay[]};
	static Get(Name: string): ECGamePlay;
	static EqualEqual(A: ECGamePlay,B: ECGamePlay): boolean;
	static Create(Name: string,DisplayName: string): ECGamePlay;
	static C(Other: UObject | any): CScriptLibrary_GamePlay;
}

declare class CScriptLibrary_Manager_Level extends UObject { 
	static Load(ResourceName: string): CScriptLibrary_Manager_Level;
	static Find(Outer: UObject, ResourceName: string): CScriptLibrary_Manager_Level;
	static GetDefaultObject(): CScriptLibrary_Manager_Level;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CScriptLibrary_Manager_Level;
	static Get(Context: string,WorldContextObject: UObject): CManager_Level;
	static C(Other: UObject | any): CScriptLibrary_Manager_Level;
}

declare class CGameInstance_OnFinishedLoadingStartupPayload__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CGameInstance_OnFinishedLoadingStartupPayload__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CGameInstance_OnFinishedLoadingStartupPayload__PythonCallable;
	static GetDefaultObject(): CGameInstance_OnFinishedLoadingStartupPayload__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGameInstance_OnFinishedLoadingStartupPayload__PythonCallable;
	static C(Other: UObject | any): CGameInstance_OnFinishedLoadingStartupPayload__PythonCallable;
}

declare class CGamePlayImpl_Override_Init__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CGamePlayImpl_Override_Init__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CGamePlayImpl_Override_Init__PythonCallable;
	static GetDefaultObject(): CGamePlayImpl_Override_Init__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGamePlayImpl_Override_Init__PythonCallable;
	static C(Other: UObject | any): CGamePlayImpl_Override_Init__PythonCallable;
}

declare class CGamePlayImpl_Override_Start__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CGamePlayImpl_Override_Start__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CGamePlayImpl_Override_Start__PythonCallable;
	static GetDefaultObject(): CGamePlayImpl_Override_Start__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGamePlayImpl_Override_Start__PythonCallable;
	static C(Other: UObject | any): CGamePlayImpl_Override_Start__PythonCallable;
}

declare class CGameStateTest_OnShutdown__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CGameStateTest_OnShutdown__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CGameStateTest_OnShutdown__PythonCallable;
	static GetDefaultObject(): CGameStateTest_OnShutdown__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGameStateTest_OnShutdown__PythonCallable;
	static C(Other: UObject | any): CGameStateTest_OnShutdown__PythonCallable;
}

declare class CGameStateTest_OnUpdate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CGameStateTest_OnUpdate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CGameStateTest_OnUpdate__PythonCallable;
	static GetDefaultObject(): CGameStateTest_OnUpdate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CGameStateTest_OnUpdate__PythonCallable;
	static C(Other: UObject | any): CGameStateTest_OnUpdate__PythonCallable;
}

declare class CsManagerInput_OnAnyKey_Pressed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerInput_OnAnyKey_Pressed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerInput_OnAnyKey_Pressed__PythonCallable;
	static GetDefaultObject(): CsManagerInput_OnAnyKey_Pressed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerInput_OnAnyKey_Pressed__PythonCallable;
	static C(Other: UObject | any): CsManagerInput_OnAnyKey_Pressed__PythonCallable;
}

declare class CsManagerInput_OnAnyKey_Released__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerInput_OnAnyKey_Released__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerInput_OnAnyKey_Released__PythonCallable;
	static GetDefaultObject(): CsManagerInput_OnAnyKey_Released__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerInput_OnAnyKey_Released__PythonCallable;
	static C(Other: UObject | any): CsManagerInput_OnAnyKey_Released__PythonCallable;
}

declare class CsManagerInput_OnActiveMode_Change__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerInput_OnActiveMode_Change__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerInput_OnActiveMode_Change__PythonCallable;
	static GetDefaultObject(): CsManagerInput_OnActiveMode_Change__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerInput_OnActiveMode_Change__PythonCallable;
	static C(Other: UObject | any): CsManagerInput_OnActiveMode_Change__PythonCallable;
}

declare class CsEdEngine extends UnrealEdEngine { 
	Manager_Singleton: CsManager_Singleton;
	OnEndPIE_ScriptEvent: UnrealEngineMulticastDelegate<(IsSimulating: boolean) => void>;
	OnEndPIE_Last_ScriptEvent: UnrealEngineMulticastDelegate<(IsSimulating: boolean) => void>;
	static Load(ResourceName: string): CsEdEngine;
	static Find(Outer: UObject, ResourceName: string): CsEdEngine;
	static GetDefaultObject(): CsEdEngine;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsEdEngine;
	static C(Other: UObject | any): CsEdEngine;
}

declare class CsScriptLibrary_EdEngine extends UObject { 
	static Load(ResourceName: string): CsScriptLibrary_EdEngine;
	static Find(Outer: UObject, ResourceName: string): CsScriptLibrary_EdEngine;
	static GetDefaultObject(): CsScriptLibrary_EdEngine;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsScriptLibrary_EdEngine;
	static AddCreatedObject(Context: string,UObject: UObject,Owner: UObject): void;
	static C(Other: UObject | any): CsScriptLibrary_EdEngine;
}

declare class CEdEngine extends CsEdEngine { 
	static Load(ResourceName: string): CEdEngine;
	static Find(Outer: UObject, ResourceName: string): CEdEngine;
	static GetDefaultObject(): CEdEngine;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CEdEngine;
	static C(Other: UObject | any): CEdEngine;
}

declare class CManager_Singleton_EdEngine extends CsManager_Singleton { 
	Manager_Time: CsManager_Time;
	CoroutineScheduler: CsCoroutineScheduler;
	Manager_Javascript: CsManager_Javascript;
	static Load(ResourceName: string): CManager_Singleton_EdEngine;
	static Find(Outer: UObject, ResourceName: string): CManager_Singleton_EdEngine;
	static GetDefaultObject(): CManager_Singleton_EdEngine;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CManager_Singleton_EdEngine;
	static C(Other: UObject | any): CManager_Singleton_EdEngine;
}

declare class CsEdEngine_OnEndPIE__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsEdEngine_OnEndPIE__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsEdEngine_OnEndPIE__PythonCallable;
	static GetDefaultObject(): CsEdEngine_OnEndPIE__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsEdEngine_OnEndPIE__PythonCallable;
	static C(Other: UObject | any): CsEdEngine_OnEndPIE__PythonCallable;
}

declare class CsManagerJavascript_OnShutdown__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerJavascript_OnShutdown__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerJavascript_OnShutdown__PythonCallable;
	static GetDefaultObject(): CsManagerJavascript_OnShutdown__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerJavascript_OnShutdown__PythonCallable;
	static C(Other: UObject | any): CsManagerJavascript_OnShutdown__PythonCallable;
}

declare class BindableDynEvent_CgStringParagraph_CompletedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_CgStringParagraph_CompletedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_CgStringParagraph_CompletedEvent__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_CgStringParagraph_CompletedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_CgStringParagraph_CompletedEvent__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_CgStringParagraph_CompletedEvent__PythonCallable;
}

declare class BindableDynEvent_CsGesture_OnComplete__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_CsGesture_OnComplete__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_CsGesture_OnComplete__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_CsGesture_OnComplete__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_CsGesture_OnComplete__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_CsGesture_OnComplete__PythonCallable;
}

declare class BindableDynEvent_CsPooledActor_Override_OnTick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_CsPooledActor_Override_OnTick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_CsPooledActor_Override_OnTick__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_CsPooledActor_Override_OnTick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_CsPooledActor_Override_OnTick__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_CsPooledActor_Override_OnTick__PythonCallable;
}

declare class BindableDynEvent_CsPooledObject_DeAllocate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_CsPooledObject_DeAllocate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_CsPooledObject_DeAllocate__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_CsPooledObject_DeAllocate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_CsPooledObject_DeAllocate__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_CsPooledObject_DeAllocate__PythonCallable;
}

declare class BindableDynEvent_CsPooledObject_OnCreatePool__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_CsPooledObject_OnCreatePool__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_CsPooledObject_OnCreatePool__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_CsPooledObject_OnCreatePool__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_CsPooledObject_OnCreatePool__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_CsPooledObject_OnCreatePool__PythonCallable;
}

declare class BindableDynEvent_CsProcessMonitorOutputEvent_Completed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_CsProcessMonitorOutputEvent_Completed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_CsProcessMonitorOutputEvent_Completed__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_CsProcessMonitorOutputEvent_Completed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_CsProcessMonitorOutputEvent_Completed__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_CsProcessMonitorOutputEvent_Completed__PythonCallable;
}

declare class BindableDynEvent_UCsProcess_OnOutputRecieved__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BindableDynEvent_UCsProcess_OnOutputRecieved__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BindableDynEvent_UCsProcess_OnOutputRecieved__PythonCallable;
	static GetDefaultObject(): BindableDynEvent_UCsProcess_OnOutputRecieved__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BindableDynEvent_UCsProcess_OnOutputRecieved__PythonCallable;
	static C(Other: UObject | any): BindableDynEvent_UCsProcess_OnOutputRecieved__PythonCallable;
}

declare class CsCoordinatorGameEvent_OnProcessGameEventInfo__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsCoordinatorGameEvent_OnProcessGameEventInfo__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsCoordinatorGameEvent_OnProcessGameEventInfo__PythonCallable;
	static GetDefaultObject(): CsCoordinatorGameEvent_OnProcessGameEventInfo__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsCoordinatorGameEvent_OnProcessGameEventInfo__PythonCallable;
	static C(Other: UObject | any): CsCoordinatorGameEvent_OnProcessGameEventInfo__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDConnectCanceled__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDConnectCanceled__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDConnectCanceled__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDConnectCanceled__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDConnectCanceled__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDConnectCanceled__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDLost__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDLost__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDLost__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDLost__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDLost__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDLost__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDPutOnHead__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDPutOnHead__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDPutOnHead__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDPutOnHead__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDPutOnHead__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDPutOnHead__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDRecenter__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDRecenter__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDRecenter__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDRecenter__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDRecenter__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDRecenter__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDReconnected__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDReconnected__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDReconnected__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDReconnected__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDReconnected__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDReconnected__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDRemovedFromHead__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDRemovedFromHead__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDRemovedFromHead__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDRemovedFromHead__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDRemovedFromHead__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDRemovedFromHead__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDTrackingInitialized__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDTrackingInitialized__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDTrackingInitialized__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDTrackingInitialized__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDTrackingInitialized__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDTrackingInitialized__PythonCallable;
}

declare class CsLibraryManagerHMD_HMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_HMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_HMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_HMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_HMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_HMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
}

declare class CsLibraryManagerHMD_VRControllerRecentered__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsLibraryManagerHMD_VRControllerRecentered__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsLibraryManagerHMD_VRControllerRecentered__PythonCallable;
	static GetDefaultObject(): CsLibraryManagerHMD_VRControllerRecentered__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsLibraryManagerHMD_VRControllerRecentered__PythonCallable;
	static C(Other: UObject | any): CsLibraryManagerHMD_VRControllerRecentered__PythonCallable;
}

declare class CsManagerFX_OnSpawn__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerFX_OnSpawn__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerFX_OnSpawn__PythonCallable;
	static GetDefaultObject(): CsManagerFX_OnSpawn__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerFX_OnSpawn__PythonCallable;
	static C(Other: UObject | any): CsManagerFX_OnSpawn__PythonCallable;
}

declare class CsManagerSkeletalMeshActor_OnSpawn__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerSkeletalMeshActor_OnSpawn__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerSkeletalMeshActor_OnSpawn__PythonCallable;
	static GetDefaultObject(): CsManagerSkeletalMeshActor_OnSpawn__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerSkeletalMeshActor_OnSpawn__PythonCallable;
	static C(Other: UObject | any): CsManagerSkeletalMeshActor_OnSpawn__PythonCallable;
}

declare class CsManagerSound_OnSpawn__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerSound_OnSpawn__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerSound_OnSpawn__PythonCallable;
	static GetDefaultObject(): CsManagerSound_OnSpawn__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerSound_OnSpawn__PythonCallable;
	static C(Other: UObject | any): CsManagerSound_OnSpawn__PythonCallable;
}

declare class CsManagerStaticMeshActor_OnSpawn__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerStaticMeshActor_OnSpawn__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerStaticMeshActor_OnSpawn__PythonCallable;
	static GetDefaultObject(): CsManagerStaticMeshActor_OnSpawn__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerStaticMeshActor_OnSpawn__PythonCallable;
	static C(Other: UObject | any): CsManagerStaticMeshActor_OnSpawn__PythonCallable;
}

declare class CsManagerTime_OnUpdate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManagerTime_OnUpdate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManagerTime_OnUpdate__PythonCallable;
	static GetDefaultObject(): CsManagerTime_OnUpdate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManagerTime_OnUpdate__PythonCallable;
	static C(Other: UObject | any): CsManagerTime_OnUpdate__PythonCallable;
}

declare class CsSpawnerImpl_OnSpawnObject__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsSpawnerImpl_OnSpawnObject__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsSpawnerImpl_OnSpawnObject__PythonCallable;
	static GetDefaultObject(): CsSpawnerImpl_OnSpawnObject__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsSpawnerImpl_OnSpawnObject__PythonCallable;
	static C(Other: UObject | any): CsSpawnerImpl_OnSpawnObject__PythonCallable;
}

declare class CsTraceRequest_OnResponse__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsTraceRequest_OnResponse__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsTraceRequest_OnResponse__PythonCallable;
	static GetDefaultObject(): CsTraceRequest_OnResponse__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsTraceRequest_OnResponse__PythonCallable;
	static C(Other: UObject | any): CsTraceRequest_OnResponse__PythonCallable;
}

declare class CsManager_HMD_OnHMDConnectCanceled__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDConnectCanceled__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDConnectCanceled__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDConnectCanceled__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDConnectCanceled__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDConnectCanceled__PythonCallable;
}

declare class CsManager_HMD_OnHMDLost__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDLost__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDLost__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDLost__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDLost__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDLost__PythonCallable;
}

declare class CsManager_HMD_OnHMDPutOnHead__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDPutOnHead__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDPutOnHead__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDPutOnHead__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDPutOnHead__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDPutOnHead__PythonCallable;
}

declare class CsManager_HMD_OnHMDRecentered__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDRecentered__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDRecentered__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDRecentered__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDRecentered__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDRecentered__PythonCallable;
}

declare class CsManager_HMD_OnHMDReconnected__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDReconnected__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDReconnected__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDReconnected__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDReconnected__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDReconnected__PythonCallable;
}

declare class CsManager_HMD_OnHMDRemovedFromHead__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDRemovedFromHead__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDRemovedFromHead__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDRemovedFromHead__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDRemovedFromHead__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDRemovedFromHead__PythonCallable;
}

declare class CsManager_HMD_OnHMDTrackingInitialized__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDTrackingInitialized__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDTrackingInitialized__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDTrackingInitialized__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDTrackingInitialized__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDTrackingInitialized__PythonCallable;
}

declare class CsManager_HMD_OnHMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnHMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnHMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnHMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnHMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnHMDTrackingInitializingAndNeedsHMDToBeTracked__PythonCallable;
}

declare class CsManager_HMD_OnVRControllerRecentered__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CsManager_HMD_OnVRControllerRecentered__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CsManager_HMD_OnVRControllerRecentered__PythonCallable;
	static GetDefaultObject(): CsManager_HMD_OnVRControllerRecentered__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CsManager_HMD_OnVRControllerRecentered__PythonCallable;
	static C(Other: UObject | any): CsManager_HMD_OnVRControllerRecentered__PythonCallable;
}

declare class AssetInfo { 
	Path: string;
	Version: string;
	clone() : AssetInfo;
	static C(Other: UObject | any): AssetInfo;
}

declare class VersionData { 
	Assets: AssetInfo[];
	clone() : VersionData;
	static C(Other: UObject | any): VersionData;
}

declare class VersionInfoHandler extends UObject { 
	CommonVersionData: VersionData;
	static Load(ResourceName: string): VersionInfoHandler;
	static Find(Outer: UObject, ResourceName: string): VersionInfoHandler;
	static GetDefaultObject(): VersionInfoHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VersionInfoHandler;
	static Get(): VersionInfoHandler;
	static C(Other: UObject | any): VersionInfoHandler;
}

declare class MegascansSettings extends UObject { 
	bCreateFoliage: boolean;
	bApplyToSelection: boolean;
	static Load(ResourceName: string): MegascansSettings;
	static Find(Outer: UObject, ResourceName: string): MegascansSettings;
	static GetDefaultObject(): MegascansSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MegascansSettings;
	static C(Other: UObject | any): MegascansSettings;
}

declare class MaterialBlendSettings extends UObject { 
	BlendedMaterialName: string;
	BlendedMaterialPath: DirectoryPath;
	static Load(ResourceName: string): MaterialBlendSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialBlendSettings;
	static GetDefaultObject(): MaterialBlendSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialBlendSettings;
	static C(Other: UObject | any): MaterialBlendSettings;
}

declare class MaterialAssetSettings extends UObject { 
	MasterMaterial3d: string;
	MasterMaterialSurface: string;
	MasterMaterialPlant: string;
	static Load(ResourceName: string): MaterialAssetSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialAssetSettings;
	static GetDefaultObject(): MaterialAssetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialAssetSettings;
	static C(Other: UObject | any): MaterialAssetSettings;
}

declare class MaterialPresetsSettings extends UObject { 
	MasterMaterial3d: Material;
	MasterMaterialSurface: Material;
	MasterMaterialPlant: Material;
	static Load(ResourceName: string): MaterialPresetsSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialPresetsSettings;
	static GetDefaultObject(): MaterialPresetsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialPresetsSettings;
	static C(Other: UObject | any): MaterialPresetsSettings;
}

declare class NodePort extends UObject { 
	static Load(ResourceName: string): NodePort;
	static Find(Outer: UObject, ResourceName: string): NodePort;
	static GetDefaultObject(): NodePort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NodePort;
	IsNodeRunning(): boolean;
	GetNodePort(): string;
	static C(Other: UObject | any): NodePort;
}

declare class WebJSCallbackBase { 
	clone() : WebJSCallbackBase;
	static C(Other: UObject | any): WebJSCallbackBase;
}

declare class WebJSFunction extends WebJSCallbackBase { 
	clone() : WebJSFunction;
	static C(Other: UObject | any): WebJSFunction;
}

declare class BrowserBinding extends UObject { 
	static Load(ResourceName: string): BrowserBinding;
	static Find(Outer: UObject, ResourceName: string): BrowserBinding;
	static GetDefaultObject(): BrowserBinding;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BrowserBinding;
	StartNodeProcess(): void;
	ShowLoginDialog(LoginUrl: string,ResponseCodeUrl: string): void;
	ShowDialog(Type: string,URL: string): void;
	SendSuccess(Value: string): void;
	SendFailure(Message: string): void;
	SaveAuthToken(Value: string): void;
	RestartNodeProcess(): void;
	OpenMegascansPluginSettings(): void;
	OpenExternalUrl(URL: string): void;
	OnExitCallback(OnExitJSCallback: WebJSFunction): void;
	OnDroppedCallback(OnDroppedJSCallback: WebJSFunction): void;
	OnDropDiscardedCallback(OnDropDiscardedJSCallback: WebJSFunction): void;
	Logout(): void;
	GetProjectPath(): string;
	GetAuthToken(): string;
	ExportDataToMSPlugin(Data: string): void;
	DragStarted(ImageUrl: string[],IDs: string[],Types: string[]): void;
	DialogSuccessCallback(DialogJSCallback: WebJSFunction): void;
	DialogFailCallback(DialogJSCallback: WebJSFunction): void;
	static C(Other: UObject | any): BrowserBinding;
}

declare class AudioSynesthesiaNRTFactory extends Factory { 
	AudioSynesthesiaNRTClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTFactory;
}

declare class AudioSynesthesiaNRTSettingsFactory extends Factory { 
	AudioSynesthesiaNRTSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTSettingsFactory;
}

declare class AudioSynesthesiaSettingsFactory extends Factory { 
	AudioSynesthesiaSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaSettingsFactory;
}

declare type ETakeRecorderActorRecordType = 'Possessable' | 'Spawnable' | 'ProjectDefault' | 'ETakeRecorderActorRecordType_MAX';
declare var ETakeRecorderActorRecordType : { Possessable:'Possessable',Spawnable:'Spawnable',ProjectDefault:'ProjectDefault',ETakeRecorderActorRecordType_MAX:'ETakeRecorderActorRecordType_MAX', };
declare class TakeRecorderActorSource extends TakeRecorderSource { 
	Target: Actor;
	RecordType: ETakeRecorderActorRecordType;
	bRecordParentHierarchy: boolean;
	bReduceKeys: boolean;
	RecordedProperties: ActorRecorderPropertyMap;
	IncludeAnimationNames: string[];
	ExcludeAnimationNames: string[];
	TargetLevelSequence: LevelSequence;
	MasterLevelSequence: LevelSequence;
	FactorySettings: UObject[];
	TrackRecorders: MovieSceneTrackRecorder[];
	ParentSource: TakeRecorderActorSource;
	bShowProgressDialog: boolean;
	static Load(ResourceName: string): TakeRecorderActorSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderActorSource;
	static GetDefaultObject(): TakeRecorderActorSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderActorSource;
	SetSourceActor(InTarget: Actor): void;
	static RemoveActorFromSources(InActor: Actor,InSources: TakeRecorderSources): void;
	GetSourceActor(): Actor;
	static AddSourceForActor(InActor: Actor,InSources: TakeRecorderSources): TakeRecorderSource;
	static C(Other: UObject | any): TakeRecorderActorSource;
}

declare class TakeRecorderCameraCutSource extends TakeRecorderSource { 
	World: World;
	MasterLevelSequence: LevelSequence;
	static Load(ResourceName: string): TakeRecorderCameraCutSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderCameraCutSource;
	static GetDefaultObject(): TakeRecorderCameraCutSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderCameraCutSource;
	static C(Other: UObject | any): TakeRecorderCameraCutSource;
}

declare class TakeRecorderLevelSequenceSource extends TakeRecorderSource { 
	LevelSequencesToTrigger: LevelSequence[];
	static Load(ResourceName: string): TakeRecorderLevelSequenceSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderLevelSequenceSource;
	static GetDefaultObject(): TakeRecorderLevelSequenceSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderLevelSequenceSource;
	static C(Other: UObject | any): TakeRecorderLevelSequenceSource;
}

declare class TakeRecorderLevelVisibilitySourceSettings extends TakeRecorderSource { 
	LevelVisibilityTrackName: string;
	static Load(ResourceName: string): TakeRecorderLevelVisibilitySourceSettings;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderLevelVisibilitySourceSettings;
	static GetDefaultObject(): TakeRecorderLevelVisibilitySourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderLevelVisibilitySourceSettings;
	static C(Other: UObject | any): TakeRecorderLevelVisibilitySourceSettings;
}

declare class TakeRecorderLevelVisibilitySource extends TakeRecorderLevelVisibilitySourceSettings { 
	static Load(ResourceName: string): TakeRecorderLevelVisibilitySource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderLevelVisibilitySource;
	static GetDefaultObject(): TakeRecorderLevelVisibilitySource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderLevelVisibilitySource;
	static C(Other: UObject | any): TakeRecorderLevelVisibilitySource;
}

declare class TakeRecorderMicrophoneAudioSourceSettings extends TakeRecorderSource { 
	AudioTrackName: string;
	AudioSubDirectory: string;
	static Load(ResourceName: string): TakeRecorderMicrophoneAudioSourceSettings;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderMicrophoneAudioSourceSettings;
	static GetDefaultObject(): TakeRecorderMicrophoneAudioSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderMicrophoneAudioSourceSettings;
	static C(Other: UObject | any): TakeRecorderMicrophoneAudioSourceSettings;
}

declare class TakeRecorderMicrophoneAudioSource extends TakeRecorderMicrophoneAudioSourceSettings { 
	AudioGain: number;
	bSplitAudioChannelsIntoSeparateTracks: boolean;
	bReplaceRecordedAudio: boolean;
	static Load(ResourceName: string): TakeRecorderMicrophoneAudioSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderMicrophoneAudioSource;
	static GetDefaultObject(): TakeRecorderMicrophoneAudioSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderMicrophoneAudioSource;
	static C(Other: UObject | any): TakeRecorderMicrophoneAudioSource;
}

declare class TakeRecorderNearbySpawnedActorSource extends TakeRecorderSource { 
	Proximity: number;
	bFilterSpawnedActors: boolean;
	FilterTypes: UnrealEngineClass[];
	static Load(ResourceName: string): TakeRecorderNearbySpawnedActorSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderNearbySpawnedActorSource;
	static GetDefaultObject(): TakeRecorderNearbySpawnedActorSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderNearbySpawnedActorSource;
	static C(Other: UObject | any): TakeRecorderNearbySpawnedActorSource;
}

declare class TakeRecorderPlayerSource extends TakeRecorderSource { 
	static Load(ResourceName: string): TakeRecorderPlayerSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderPlayerSource;
	static GetDefaultObject(): TakeRecorderPlayerSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderPlayerSource;
	static C(Other: UObject | any): TakeRecorderPlayerSource;
}

declare class TakeRecorderWorldSourceSettings extends TakeRecorderSource { 
	bRecordWorldSettings: boolean;
	bAutotrackActors: boolean;
	static Load(ResourceName: string): TakeRecorderWorldSourceSettings;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderWorldSourceSettings;
	static GetDefaultObject(): TakeRecorderWorldSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderWorldSourceSettings;
	static C(Other: UObject | any): TakeRecorderWorldSourceSettings;
}

declare class TakeRecorderWorldSource extends TakeRecorderWorldSourceSettings { 
	static Load(ResourceName: string): TakeRecorderWorldSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderWorldSource;
	static GetDefaultObject(): TakeRecorderWorldSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderWorldSource;
	static C(Other: UObject | any): TakeRecorderWorldSource;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	Icon: JavascriptSlateIcon;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	SetTabLabel(InLabelName: string): void;
	ForceCommit(): void;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	ActivateInParent(): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject | any): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptUICommand { 
	ID: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	CommandInfo: JavascriptUICommandInfo;
	IconStyleName: string;
	clone() : JavascriptUICommand;
	static C(Other: UObject | any): JavascriptUICommand;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject | any): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject | any): JavascriptUICommandList;
	CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
	CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	CreateToolbarBuilder(Orientation: EOrientation,UFunction: JavascriptFunction): void;
	ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
	ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static CreateUICommandList(): JavascriptUICommandList;
	static GetLevelEditorActions(): JavascriptUICommandList;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	TextSubNamespace: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static GetDefaultObject(): JavascriptUICommands;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(ID: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(InContextName: string): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject | any): JavascriptUICommands;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,Text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetPicker extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => string>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryObject: UObject;
	AllowedClasses: string;
	static Load(ResourceName: string): JavascriptAssetPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker;
	static GetDefaultObject(): JavascriptAssetPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker;
	SetDefaultObjectPath(InDefaultObjectPath: string): void;
	SetCategoryObject(InCategoryObject: UObject): void;
	SetAllowedClasses(InAllowedClasses: string): void;
	static C(Other: UObject | any): JavascriptAssetPicker;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptClassViewer extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => UnrealEngineClass>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryClass: UnrealEngineClass;
	AllowedChildrenOfClasses: UnrealEngineClass[];
	static Load(ResourceName: string): JavascriptClassViewer;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer;
	static GetDefaultObject(): JavascriptClassViewer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer;
	SetDefaultClass(InDefaultClass: UnrealEngineClass): void;
	SetCategoryClass(InCategoryClass: UnrealEngineClass): void;
	SetAllowedChildrenOfClasses(InAllowedChildrenOfClasses: UnrealEngineClass[]): void;
	static C(Other: UObject | any): JavascriptClassViewer;
}

declare class JavascriptColorPicker extends Widget { 
	OnColorChanged: UnrealEngineMulticastDelegate<(Color: LinearColor) => void>;
	SelectedColor: LinearColor;
	static Load(ResourceName: string): JavascriptColorPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker;
	static GetDefaultObject(): JavascriptColorPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker;
	static C(Other: UObject | any): JavascriptColorPicker;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptCurveTableEditor extends Widget { 
	static Load(ResourceName: string): JavascriptCurveTableEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptCurveTableEditor;
	static GetDefaultObject(): JavascriptCurveTableEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCurveTableEditor;
	SetObject(UObject: CurveTable,bCanEdit: boolean): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): JavascriptCurveTableEditor;
}

declare class JavascriptWholeRowDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	CustomWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptWholeRowDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptWholeRowDetailCustomization;
	static GetDefaultObject(): JavascriptWholeRowDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWholeRowDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptWholeRowDetailCustomization;
}

declare class JavascriptDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	NameWidget: JavascriptSlateWidget;
	ValueWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptDetailCustomization;
	static GetDefaultObject(): JavascriptDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptDetailCustomization;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetSelectedActors(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectObjectEvent(UObject: UObject): void;
	SelectNoneEvent(): void;
	SelectionChangedEvent(UObject: UObject): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PrePIEEnded(bIsSimulating: boolean): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostPIEStarted(bIsSimulating: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnMainFrameCreationFinished_Friendly(): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnLevelActorDeleted(Actor: Actor): void;
	OnLevelActorAdded(Actor: Actor): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditPasteActorsEnd(): void;
	OnEditPasteActorsBegin(): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnEditCutActorsEnd(): void;
	OnEditCutActorsBegin(): void;
	OnEditCopyActorsEnd(): void;
	OnEditCopyActorsBegin(): void;
	OnDuplicateActorsEnd(): void;
	OnDuplicateActorsBegin(): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnDeleteActorsEnd(): void;
	OnDeleteActorsBegin(): void;
	OnConsoleCommandJS(Args: string[],InWorld: World): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnApplicationPreInputKeyDownListener(KeyEvent: KeyEvent): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseWheelOrGestureEvent(InWheelEvent: UPointerEvent,InGestureEvent: UPointerEvent): boolean;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleMouseButtonUpEvent(InPointerEvent: UPointerEvent): boolean;
	HandleMouseButtonDownEvent(InPointerEvent: UPointerEvent): boolean;
	HandleMouseButtonDoubleClickEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddMenuByCommands(UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddSubMenu(Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddToolBarButtonByContext(Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject | any): JavascriptExtender;
	AddMenubarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddMenuExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddToolBarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	Apply(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	RemoveExtension(Extension: JavascriptExtensionBase): void;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
}

declare class JavascriptLazyExtenderDelegates extends UObject { 
	GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: UObject[]) => JavascriptExtender>;
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
	RemoveAllLazyExtender(): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptEditorObjectManager extends UObject { 
	static Load(ResourceName: string): JavascriptEditorObjectManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorObjectManager;
	static GetDefaultObject(): JavascriptEditorObjectManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorObjectManager;
	SetStructRef(Key: string,Value: UnrealEngineClass,bOverride: boolean): boolean;
	SetRef(Key: string,Value: UnrealEngineClass,bOverride: boolean): boolean;
	SetObject(Key: string,Value: UObject): boolean;
	RemoveStructRef(Key: string): void;
	RemoveRef(Key: string): void;
	RemoveObjects(Key: string): void;
	HasStructRef(Key: string): boolean;
	HasRef(Key: string): boolean;
	GetStructRef(Key: string): ScriptStruct;
	GetRef(Key: string): UnrealEngineClass;
	GetObjects(Key: string): UObject[];
	GetObjectKeys(): string[];
	Clear(bWithClass: boolean): void;
	static C(Other: UObject | any): JavascriptEditorObjectManager;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static ToggleIsExecuteTestModePIE(): boolean;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLocation(Actor: Actor,NewLocation: Vector,bSweep: boolean,SweepHitResult?: HitResult,bTeleport?: boolean): {SweepHitResult: HitResult, $: boolean};
	static SetActorLabelUnique(Actor: Actor,NewActorLabel: string,InExistingActorLabels: string[]): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static SaveFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
	static OpenDirectoryDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,OutFolderName?: string): {OutFolderName: string, $: boolean};
	static OpenCreateBlueprintFromActorDialog(Actor: Actor): void;
	static NotifyUpdateCurveTable(InCurveTable: CurveTable): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadImageFromDiskAsync(ImagePath: string,Callback: AsyncTaskDownloadImage): boolean;
	static LoadFileToString(Path: string,Data?: string): {Data: string, $: boolean};
	static LoadFileToIntArray(Path: string,FileData?: number[]): {FileData: number[], $: boolean};
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static HasMetaData(Field: Field,Key: string): boolean;
	static GetWorldPositionFromViewportClick(Actor: Actor,Click: JavascriptViewportClick,OutHitResult?: HitResult): {OutHitResult: HitResult, $: boolean};
	static GetUniqueID(InObject: UObject): number;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValueByAssetData(AssetData: AssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSourceControlStatusText(): string;
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKeyNameByKeyEvent(Event: KeyEvent): string;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetIsShiftDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsExecuteTestModePIE(): boolean;
	static GetIsControlDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsAltDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIPAddress(): string;
	static GetHostName(): string;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetEditorPlayWorld(): World;
	static GetEditorObjectManager(): JavascriptEditorObjectManager;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetDataTableAsJSON(InDataTable: DataTable,InDTExportFlags: number): string;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAverageMS(): number;
	static GetAverageFPS(): number;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTagsByAssetData(AssetData: AssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorRotation(Actor: Actor): Rotator;
	static GetActorLocation(Actor: Actor): Vector;
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FromStringTable(InTableId: string,InKey: string): JavascriptTextProperty;
	static FindWorldInPackage(Package: Package): World;
	static FindRichCurve(InCurveTable: CurveTable,Key: string,OutCurve?: RichCurve): {OutCurve: RichCurve, $: boolean};
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorExec(World: World,Cmd: string): boolean;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DownloadImageFromUrl(ImageUrl: string,Callback: AsyncTaskDownloadImage): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ConditionalBeginDestroybyUObject(TargetObject: UObject): boolean;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static CheckActivatedStatGroup(GroupName: string): boolean;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddRichCurve(InCurveTable: CurveTable,Key: string,InCurve: RichCurve): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddComponentsToBlueprint(Blueprint: Blueprint,Components: ActorComponent[],bHarvesting: boolean,OptionalNewRootComponent: ActorComponent,bKeepMobility: boolean): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	InvokeTab(SearchForTabId: string): void;
	InsertNewTab(PlaceholderId: string,SearchForTabId: string,NewTab: JavascriptEditorTab): void;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightLocation(InLightPos: Vector): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
	GetDefaultSkySphereComponent(): StaticMeshComponent;
	GetDefaultSkyLightComponent(): SkyLightComponent;
	GetDefaultPostProcessComponent(): PostProcessComponent;
	GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
	GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnUsesToolkits: UnrealEngineDelegate<() => boolean>;
	OnIsCompatibleWith: UnrealEngineDelegate<(bIsCompatibleWith: string) => boolean>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetSelectionLock(bValue: boolean): void;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetWorldPositionFromJavascriptEdViewport(Actor: Actor,Viewport: JavascriptEdViewport,OutVector?: Vector): {OutVector: Vector, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare class JavascriptLogSubscriber extends UObject { 
	OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: string, Type: string, Category: string) => void>;
	static Load(ResourceName: string): JavascriptLogSubscriber;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber;
	static GetDefaultObject(): JavascriptLogSubscriber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber;
	static C(Other: UObject | any): JavascriptLogSubscriber;
}

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	Text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare class JavascriptOnEditorCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptOnEditorCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptOnEditorCommandlet;
	static GetDefaultObject(): JavascriptOnEditorCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOnEditorCommandlet;
	GetEngine(): EditorEngine;
	static C(Other: UObject | any): JavascriptOnEditorCommandlet;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptSimpleDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => void>;
	static Load(ResourceName: string): JavascriptSimpleDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleDelegateWrapper;
}

declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GeneratePathToProperty(): string;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetIndexInArray(): number;
	GetJavascriptRefValue(OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	GetKeyHandle(): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetObjectValue(OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	GetOuterObjects(): UObject[];
	GetParentHandle(): JavascriptPropertyHandle;
	GetProperty(): any;
	GetPropertyName(): string;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsArrayProperty(): boolean;
	IsArrayPropertyWithValueType(): boolean;
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetJavascriptRefValue(InValue: JavascriptRef): EPropertyAccessResult;
	SetObjectValue(InValue: UObject): EPropertyAccessResult;
	SetOnPropertyValueChanged(Wrapper: JavascriptSimpleDelegateWrapper): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
	RequestRefresh(bForce: boolean): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
}

declare class JavascriptSimpleGetBoolDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleGetBoolDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	AddExternalObjectProperty(Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	AddExternalObjects(Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string): JavascriptSlateWidget;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	bEnablePropertyPath: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	ReadOnlyDelegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	ForceRefresh(): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class JavascriptPropertyTable extends Widget { 
	OnGenerateCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => JavascriptSlateWidget>;
	OnUseCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => boolean>;
	bUseCustomColumns: boolean;
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetSelectedTableObjects(): UObject[];
	GetEditingObjects(): UObject[];
	static C(Other: UObject | any): JavascriptPropertyTable;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static GetPhysicsBodySetupFromStaticMeshComponent(InStaticMeshComp: StaticMeshComponent): BodySetup;
	static GetPhysicsBodySetupFromStaticMesh(InStaticMesh: StaticMesh): BodySetup;
	static GetPhysicsBodySetupFromMesh(InSkeletalMesh: SkeletalMesh,InName: string): BodySetup;
	static GetPhysicsBodySetup(InSkeletalMeshComp: SkeletalMeshComponent,InName: string): BodySetup;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): number;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare class JavascriptWebBrowser extends Widget { 
	OnUrlChanged: UnrealEngineMulticastDelegate<(Text: string) => void>;
	OnBeforePopup: UnrealEngineMulticastDelegate<(URL: string, Frame: string) => void>;
	bShowAddressBar: boolean;
	bShowControls: boolean;
	bSupportsThumbMouseButtonNavigation: boolean;
	static Load(ResourceName: string): JavascriptWebBrowser;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser;
	static GetDefaultObject(): JavascriptWebBrowser;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser;
	LoadURL(NewURL: string): void;
	LoadString(Contents: string,DummyURL: string): void;
	GetUrl(): string;
	GetTitleText(): string;
	ExecuteJavascript(ScriptText: string): void;
	static C(Other: UObject | any): JavascriptWebBrowser;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	Index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	IsCustomNode: boolean;
	WidgetFinalized: JavascriptFunction;
	RenderOpacity: number;
	Bidirectional: boolean;
	PriorityOrder: number;
	PinRefMap: Map<string, UObject>;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetVisible(bVisible: boolean): void;
	SetTitleSelectionMode(InTitleHeight: number): void;
	SetRenderOpacity(Opacity: number): void;
	SetEnable(bEnable: boolean): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetVisible(): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,PinDisplayName: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
	GetOwnerPanel(): JavascriptSlateWidget;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	Context: GraphNodeContextMenuContext;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAKE_WITH_PROMOTION' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAKE_WITH_PROMOTION:'CONNECT_RESPONSE_MAKE_WITH_PROMOTION',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetPinTextColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEnablePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnGetSideMarginInPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => number>;
	OnCommitedBubbleComment: UnrealEngineDelegate<(Comment: string) => void>;
	OnMouseDownGraphPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptGraphEdCustomNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdCustomNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdCustomNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	SetGraphPanel(InGraphPanel: JavascriptSlateWidget): void;
	static C(Other: UObject | any): JavascriptGraphEdCustomNodeWidget;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	CustomNodes: JavascriptGraphEdNode[];
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CommentNodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	CustomNodeCreator(): JavascriptNodeCreator;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): boolean;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinRefObject(InPin: JavascriptEdGraphPin,InObject: UObject): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetPinHidden(A: JavascriptEdGraphPin,bHidden: boolean): void;
	static SetPinContainerType(A: JavascriptEdGraphPin,ContainerType: EJavascriptPinContainerType): void;
	static SetPinAdvancedView(A: JavascriptEdGraphPin,bAdvancedView: boolean): void;
	static SetParentPin(A: JavascriptEdGraphPin,Parent: JavascriptEdGraphPin): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsPinHidden(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinRefObject(InPin: JavascriptEdGraphPin): UObject;
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinIndex(A: JavascriptEdGraphPin): number;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare type EPinVisibility = 'Pin_Show' | 'Pin_HideNoConnection' | 'Pin_HideNoConnectionNoDefault' | 'Pin_MAX';
declare var EPinVisibility : { Pin_Show:'Pin_Show',Pin_HideNoConnection:'Pin_HideNoConnection',Pin_HideNoConnectionNoDefault:'Pin_HideNoConnectionNoDefault',Pin_MAX:'Pin_MAX', };
declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	OnInitialGraphPanelUpdated: UnrealEngineDelegate<() => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetPinVisibility(InVisibility: EPinVisibility): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	NotifyGraphChanged(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphEdNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	static C(Other: UObject | any): JavascriptGraphEdNodeWidget;
}

declare class JavascriptGraphEdNode_Comment extends JavascriptGraphEdNode { 
	CommentColor: LinearColor;
	FontSize: number;
	bCommentBubbleVisible_InDetailsPanel: boolean;
	bColorCommentBubble: boolean;
	MoveMode: ECommentBoxMode;
	CommentDepth: number;
	static Load(ResourceName: string): JavascriptGraphEdNode_Comment;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode_Comment;
	static GetDefaultObject(): JavascriptGraphEdNode_Comment;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode_Comment;
	static C(Other: UObject | any): JavascriptGraphEdNode_Comment;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnIsValidText: UnrealEngineDelegate<(TextValue: string) => string>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
}

declare class JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
}

declare class JavascriptGraphEditorWidget_OnDropActor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
}

declare class JavascriptGraphEditorWidget_SetNodes__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
}

declare class JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
}

declare class JavascriptGraphEditorWidget_SingleNode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
}

declare class DynamicSimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleDelegate__PythonCallable;
}

declare class DynamicSimpleGetBoolDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleGetBoolDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleGetBoolDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleGetBoolDelegate__PythonCallable;
}

declare class OnGenerateCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnGenerateCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGenerateCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnGenerateCustomCellWidget__PythonCallable;
}

declare class OnUseCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnUseCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUseCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnUseCustomCellWidget__PythonCallable;
}

declare class PropertyEditorPropertyChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static GetDefaultObject(): PropertyEditorPropertyChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorPropertyChanged__PythonCallable;
	static C(Other: UObject | any): PropertyEditorPropertyChanged__PythonCallable;
}

declare class PropertyEditorReadOnly__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static GetDefaultObject(): PropertyEditorReadOnly__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorReadOnly__PythonCallable;
	static C(Other: UObject | any): PropertyEditorReadOnly__PythonCallable;
}

declare class JavascriptWebBrowser_OnBeforePopup__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static GetDefaultObject(): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static C(Other: UObject | any): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
}

declare class JavascriptWebBrowser_OnUrlChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static GetDefaultObject(): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
}

declare class JavascriptUIExtender_OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptUIExtender_OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender_OnHook__PythonCallable;
	static GetDefaultObject(): JavascriptUIExtender_OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender_OnHook__PythonCallable;
	static C(Other: UObject | any): JavascriptUIExtender_OnHook__PythonCallable;
}

declare class JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
}

declare class JavascriptUICommands_JavascriptExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Backward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Forward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
}

declare class JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
}

declare class JavascriptPropertyCustomization_CustomChildren__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
}

declare class JavascriptPropertyCustomization_CustomHeader__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
}

declare class JavascriptPropertyCustomization_OnDestroy__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
}

declare class JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
}

declare class JavascriptNotification_CheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptNotification_CheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification_CheckDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptNotification_CheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification_CheckDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptNotification_CheckDelegate__PythonCallable;
}

declare class JavascriptNotification_SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptNotification_SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification_SimpleDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptNotification_SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification_SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptNotification_SimpleDelegate__PythonCallable;
}

declare class JavascriptMultiBox_OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptMultiBox_OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox_OnHook__PythonCallable;
	static GetDefaultObject(): JavascriptMultiBox_OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox_OnHook__PythonCallable;
	static C(Other: UObject | any): JavascriptMultiBox_OnHook__PythonCallable;
}

declare class JavascriptLogSubscriber_OnNewLogMessage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static GetDefaultObject(): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static C(Other: UObject | any): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
}

declare class JavascriptEdMode_ActorDuplicated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ActorDuplicated__PythonCallable;
}

declare class JavascriptEdMode_OnClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnClick__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnClick__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnClick__PythonCallable;
}

declare class JavascriptEdMode_OnDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnDraw__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnDraw__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnDraw__PythonCallable;
}

declare class JavascriptEdMode_OnDrawHUD__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnDrawHUD__PythonCallable;
}

declare class JavascriptEdMode_OnGetAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnGetAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnGetAction__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnGetAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnGetAction__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnGetAction__PythonCallable;
}

declare class JavascriptEdMode_OnGetWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnGetWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnGetWidget__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnGetWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnGetWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnGetWidget__PythonCallable;
}

declare class JavascriptEdMode_OnIsCompatibleWith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
}

declare class JavascriptEdMode_OnProcess__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnProcess__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnProcess__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnProcess__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnProcess__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnProcess__PythonCallable;
}

declare class JavascriptEdMode_OnSelect__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnSelect__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnSelect__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnSelect__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnSelect__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnSelect__PythonCallable;
}

declare class JavascriptEdMode_OnSelectionChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnSelectionChanged__PythonCallable;
}

declare class JavascriptEdMode_OnUsesToolkits__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnUsesToolkits__PythonCallable;
}

declare class JavascriptEdMode_QueryVector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_QueryVector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_QueryVector__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_QueryVector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_QueryVector__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_QueryVector__PythonCallable;
}

declare class JavascriptEdMode_SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_SimpleDelegate__PythonCallable;
}

declare class JavascriptEdMode_Viewport0__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_Viewport0__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_Viewport0__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_Viewport0__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_Viewport0__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_Viewport0__PythonCallable;
}

declare class JavascriptEdMode_ViewportAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportAxis__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportAxis__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportAxis__PythonCallable;
}

declare class JavascriptEdMode_ViewportDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportDelta__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportDelta__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportDelta__PythonCallable;
}

declare class JavascriptEdMode_ViewportKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportKey__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportKey__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportKey__PythonCallable;
}

declare class JavascriptEdMode_ViewportXY__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportXY__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportXY__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportXY__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportXY__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportXY__PythonCallable;
}

declare class JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
}

declare class JavascriptEditorViewport_OnGetWidgetMode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
}

declare class JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
}

declare class JavascriptEditorViewport_OnInputAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnInputAxis__PythonCallable;
}

declare class JavascriptEditorViewport_OnInputKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnInputKey__PythonCallable;
}

declare class JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
}

declare class JavascriptEditorViewport_OnMouseEnter__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
}

declare class JavascriptEditorViewport_OnMouseLeave__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
}

declare class JavascriptEditorViewport_OnMouseMove__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnMouseMove__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportClick__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
}

declare class JavascriptEditorToolbar_OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorToolbar_OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar_OnHook__PythonCallable;
	static GetDefaultObject(): JavascriptEditorToolbar_OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar_OnHook__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorToolbar_OnHook__PythonCallable;
}

declare class JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
}

declare class JavascriptEditorTab_CloseTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTab_CloseTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab_CloseTab__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTab_CloseTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab_CloseTab__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTab_CloseTab__PythonCallable;
}

declare class JavascriptEditorTab_OnTabActivated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTab_OnTabActivated__PythonCallable;
}

declare class JavascriptEditorTab_SpawnTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTab_SpawnTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab_SpawnTab__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTab_SpawnTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab_SpawnTab__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTab_SpawnTab__PythonCallable;
}

declare class JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
}

declare class JavascriptColorPicker_OnColorChangedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static GetDefaultObject(): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
}

declare class JavascriptClassViewer_OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
}

declare class JavascriptClassViewer_OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
}

declare class JavascriptAssetPicker_OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
}

declare class JavascriptAssetPicker_OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
}

declare class LevelInstanceActorFactory extends ActorFactory { 
	static Load(ResourceName: string): LevelInstanceActorFactory;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceActorFactory;
	static GetDefaultObject(): LevelInstanceActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceActorFactory;
	static C(Other: UObject | any): LevelInstanceActorFactory;
}

declare class LevelInstanceEditorMode extends EdMode { 
	static Load(ResourceName: string): LevelInstanceEditorMode;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorMode;
	static GetDefaultObject(): LevelInstanceEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorMode;
	static C(Other: UObject | any): LevelInstanceEditorMode;
}

declare class LevelInstanceEditorSettings extends UObject { 
	TemplateMapInfos: TemplateMapInfo[];
	LevelInstanceClassName: string;
	static Load(ResourceName: string): LevelInstanceEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorSettings;
	static GetDefaultObject(): LevelInstanceEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorSettings;
	static C(Other: UObject | any): LevelInstanceEditorSettings;
}

declare type ELevelInstancePivotType = 'CenterMinZ' | 'Center' | 'Actor' | 'WorldOrigin' | 'ELevelInstancePivotType_MAX';
declare var ELevelInstancePivotType : { CenterMinZ:'CenterMinZ',Center:'Center',Actor:'Actor',WorldOrigin:'WorldOrigin',ELevelInstancePivotType_MAX:'ELevelInstancePivotType_MAX', };
declare class LevelInstanceEditorPerProjectUserSettings extends DeveloperSettings { 
	bAlwaysShowDialog: boolean;
	PivotType: ELevelInstancePivotType;
	static Load(ResourceName: string): LevelInstanceEditorPerProjectUserSettings;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorPerProjectUserSettings;
	static GetDefaultObject(): LevelInstanceEditorPerProjectUserSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorPerProjectUserSettings;
	static C(Other: UObject | any): LevelInstanceEditorPerProjectUserSettings;
}

declare class TestPawnAction_Log extends PawnAction { 
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static GetDefaultObject(): TestPawnAction_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject | any): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject | any): TestPawnAction_CallFunction;
}

declare class TestBTDecorator_Blackboard extends BTDecorator_Blackboard { 
	LogIndexBecomeRelevant: number;
	LogIndexCeaseRelevant: number;
	LogIndexCalculate: number;
	static Load(ResourceName: string): TestBTDecorator_Blackboard;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_Blackboard;
	static GetDefaultObject(): TestBTDecorator_Blackboard;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_Blackboard;
	static C(Other: UObject | any): TestBTDecorator_Blackboard;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject | any): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject | any): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	LogActivation: number;
	LogDeactivation: number;
	KeyNameTick: string;
	KeyNameBecomeRelevant: string;
	KeyNameCeaseRelevant: string;
	LogTick: number;
	bToggleValue: boolean;
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare type EBTTestServiceStopTree = 'DuringBecomeRelevant' | 'DuringTick' | 'DuringCeaseRelevant' | 'EBTTestServiceStopTree_MAX';
declare var EBTTestServiceStopTree : { DuringBecomeRelevant:'DuringBecomeRelevant',DuringTick:'DuringTick',DuringCeaseRelevant:'DuringCeaseRelevant',EBTTestServiceStopTree_MAX:'EBTTestServiceStopTree_MAX', };
declare class TestBTService_StopTree extends BTService { 
	LogIndex: number;
	StopTimming: EBTTestServiceStopTree;
	static Load(ResourceName: string): TestBTService_StopTree;
	static Find(Outer: UObject, ResourceName: string): TestBTService_StopTree;
	static GetDefaultObject(): TestBTService_StopTree;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_StopTree;
	static C(Other: UObject | any): TestBTService_StopTree;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuting: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAborting: number;
	LogIndexAbortFinish: number;
	ExecuteHalfTicks: number;
	AbortHalfTicks: number;
	KeyNameExecute: string;
	KeyNameAbort: string;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject | any): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogTickIndex: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static GetDefaultObject(): TestBTTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject | any): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	OnAbortKeyName: string;
	bOnAbortValue: boolean;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject | any): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	KeyName: string;
	Value: number;
	OnAbortKeyName: string;
	OnAbortValue: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
}

declare type EBTTestTaskStopTree = 'DuringExecute' | 'DuringTick' | 'DuringAbort' | 'DuringFinish' | 'EBTTestTaskStopTree_MAX';
declare var EBTTestTaskStopTree : { DuringExecute:'DuringExecute',DuringTick:'DuringTick',DuringAbort:'DuringAbort',DuringFinish:'DuringFinish',EBTTestTaskStopTree_MAX:'EBTTestTaskStopTree_MAX', };
declare class TestBTTask_StopTree extends BTTaskNode { 
	StopTimming: EBTTestTaskStopTree;
	LogIndex: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_StopTree;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_StopTree;
	static GetDefaultObject(): TestBTTask_StopTree;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_StopTree;
	static C(Other: UObject | any): TestBTTask_StopTree;
}

declare class TestBTTask_ToggleFlag extends BTTaskNode { 
	LogIndex: number;
	KeyName: string;
	NumToggles: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_ToggleFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_ToggleFlag;
	static GetDefaultObject(): TestBTTask_ToggleFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_ToggleFlag;
	static C(Other: UObject | any): TestBTTask_ToggleFlag;
}

declare class MockAI extends UObject { 
	Actor: Actor;
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static GetDefaultObject(): MockAI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject | any): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static GetDefaultObject(): MockAI_BT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject | any): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static GetDefaultObject(): MockTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject | any): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject | any): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject | any): MockGameplayTaskOwner;
}

declare type ELiveCodingStartupMode = 'Automatic' | 'AutomaticButHidden' | 'Manual' | 'ELiveCodingStartupMode_MAX';
declare var ELiveCodingStartupMode : { Automatic:'Automatic',AutomaticButHidden:'AutomaticButHidden',Manual:'Manual',ELiveCodingStartupMode_MAX:'ELiveCodingStartupMode_MAX', };
declare class LiveCodingSettings extends UObject { 
	bEnabled: boolean;
	Startup: ELiveCodingStartupMode;
	bEnableReinstancing: boolean;
	bAutomaticallyCompileNewClasses: boolean;
	bPreloadEngineModules: boolean;
	bPreloadEnginePluginModules: boolean;
	bPreloadProjectModules: boolean;
	bPreloadProjectPluginModules: boolean;
	PreloadNamedModules: string[];
	static Load(ResourceName: string): LiveCodingSettings;
	static Find(Outer: UObject, ResourceName: string): LiveCodingSettings;
	static GetDefaultObject(): LiveCodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveCodingSettings;
	static C(Other: UObject | any): LiveCodingSettings;
}

declare class DocumentationBaseUrl { 
	ID: string;
	URL: string;
	clone() : DocumentationBaseUrl;
	static C(Other: UObject | any): DocumentationBaseUrl;
}

declare class DocumentationSettings extends DeveloperSettings { 
	DocumentationBaseUrls: DocumentationBaseUrl[];
	static Load(ResourceName: string): DocumentationSettings;
	static Find(Outer: UObject, ResourceName: string): DocumentationSettings;
	static GetDefaultObject(): DocumentationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DocumentationSettings;
	static C(Other: UObject | any): DocumentationSettings;
}

declare type ELogTimes = 'None' | 'UTC' | 'SinceGStartTime' | 'Local' | 'ELogTimes_MAX';
declare var ELogTimes : { None:'None',UTC:'UTC',SinceGStartTime:'SinceGStartTime',Local:'Local',ELogTimes_MAX:'ELogTimes_MAX', };
declare type ELogCategoryColorizationMode = 'None' | 'ColorizeWholeLine' | 'ColorizeCategoryOnly' | 'ColorizeCategoryAsBadge' | 'ELogCategoryColorizationMode_MAX';
declare var ELogCategoryColorizationMode : { None:'None',ColorizeWholeLine:'ColorizeWholeLine',ColorizeCategoryOnly:'ColorizeCategoryOnly',ColorizeCategoryAsBadge:'ColorizeCategoryAsBadge',ELogCategoryColorizationMode_MAX:'ELogCategoryColorizationMode_MAX', };
declare class OutputLogSettings extends UObject { 
	LogFontSize: number;
	LogTimestampMode: ELogTimes;
	CategoryColorizationMode: ELogCategoryColorizationMode;
	bCycleToOutputLogDrawer: boolean;
	bEnableOutputLogWordWrap: boolean;
	bEnableOutputLogClearOnPIE: boolean;
	static Load(ResourceName: string): OutputLogSettings;
	static Find(Outer: UObject, ResourceName: string): OutputLogSettings;
	static GetDefaultObject(): OutputLogSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OutputLogSettings;
	static C(Other: UObject | any): OutputLogSettings;
}

declare class NaniteAuditErrorArguments extends EditorConfigBase { 
	ProhibitUnsupportedBlendMode: boolean;
	ProhibitVertexInterpolator: boolean;
	ProhibitPixelDepthOffset: boolean;
	ProhibitWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditErrorArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditErrorArguments;
	static GetDefaultObject(): NaniteAuditErrorArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditErrorArguments;
	static C(Other: UObject | any): NaniteAuditErrorArguments;
}

declare class NaniteAuditOptimizeArguments extends EditorConfigBase { 
	TriangleThreshold: number;
	DisallowUnsupportedBlendMode: boolean;
	DisallowVertexInterpolator: boolean;
	DisallowPixelDepthOffset: boolean;
	DisallowWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditOptimizeArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditOptimizeArguments;
	static GetDefaultObject(): NaniteAuditOptimizeArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditOptimizeArguments;
	static C(Other: UObject | any): NaniteAuditOptimizeArguments;
}

declare class StructViewerProjectSettings extends UObject { 
	InternalOnlyPaths: DirectoryPath[];
	InternalOnlyStructs: ScriptStruct[];
	static Load(ResourceName: string): StructViewerProjectSettings;
	static Find(Outer: UObject, ResourceName: string): StructViewerProjectSettings;
	static GetDefaultObject(): StructViewerProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StructViewerProjectSettings;
	static C(Other: UObject | any): StructViewerProjectSettings;
}

declare class AnimationBlueprintEditorSettings extends UObject { 
	bPoseWatchSelectedNodes: boolean;
	bShowGraphCornerText: boolean;
	static Load(ResourceName: string): AnimationBlueprintEditorSettings;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintEditorSettings;
	static GetDefaultObject(): AnimationBlueprintEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintEditorSettings;
	static C(Other: UObject | any): AnimationBlueprintEditorSettings;
}

declare class AnimationBlueprintToolMenuContext extends UObject { 
	static Load(ResourceName: string): AnimationBlueprintToolMenuContext;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintToolMenuContext;
	static GetDefaultObject(): AnimationBlueprintToolMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintToolMenuContext;
	static C(Other: UObject | any): AnimationBlueprintToolMenuContext;
}

declare class AsyncDelayComplete__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AsyncDelayComplete__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AsyncDelayComplete__PythonCallable;
	static GetDefaultObject(): AsyncDelayComplete__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AsyncDelayComplete__PythonCallable;
	static C(Other: UObject | any): AsyncDelayComplete__PythonCallable;
}

declare class AsyncEditorWaitForGameWorldEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AsyncEditorWaitForGameWorldEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AsyncEditorWaitForGameWorldEvent__PythonCallable;
	static GetDefaultObject(): AsyncEditorWaitForGameWorldEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AsyncEditorWaitForGameWorldEvent__PythonCallable;
	static C(Other: UObject | any): AsyncEditorWaitForGameWorldEvent__PythonCallable;
}

declare class ForEachActorIteratorSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ForEachActorIteratorSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ForEachActorIteratorSignature__PythonCallable;
	static GetDefaultObject(): ForEachActorIteratorSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ForEachActorIteratorSignature__PythonCallable;
	static C(Other: UObject | any): ForEachActorIteratorSignature__PythonCallable;
}

declare class ForEachAssetIteratorSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ForEachAssetIteratorSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ForEachAssetIteratorSignature__PythonCallable;
	static GetDefaultObject(): ForEachAssetIteratorSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ForEachAssetIteratorSignature__PythonCallable;
	static C(Other: UObject | any): ForEachAssetIteratorSignature__PythonCallable;
}

declare class OnAsyncCaptureSceneComplete__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnAsyncCaptureSceneComplete__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnAsyncCaptureSceneComplete__PythonCallable;
	static GetDefaultObject(): OnAsyncCaptureSceneComplete__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnAsyncCaptureSceneComplete__PythonCallable;
	static C(Other: UObject | any): OnAsyncCaptureSceneComplete__PythonCallable;
}

declare class OnEditorUtilityPIEEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnEditorUtilityPIEEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnEditorUtilityPIEEvent__PythonCallable;
	static GetDefaultObject(): OnEditorUtilityPIEEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnEditorUtilityPIEEvent__PythonCallable;
	static C(Other: UObject | any): OnEditorUtilityPIEEvent__PythonCallable;
}

declare class OnEditorUtilityTaskDynamicDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
	static GetDefaultObject(): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
	static C(Other: UObject | any): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
}

declare class OnExportImageAsyncComplete__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnExportImageAsyncComplete__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnExportImageAsyncComplete__PythonCallable;
	static GetDefaultObject(): OnExportImageAsyncComplete__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnExportImageAsyncComplete__PythonCallable;
	static C(Other: UObject | any): OnExportImageAsyncComplete__PythonCallable;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare class MeshApproximationSettingsObject extends UObject { 
	Settings: MeshApproximationSettings;
	static Load(ResourceName: string): MeshApproximationSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshApproximationSettingsObject;
	static GetDefaultObject(): MeshApproximationSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshApproximationSettingsObject;
	static C(Other: UObject | any): MeshApproximationSettingsObject;
}

declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	ISMComponentToUse: UnrealEngineClass;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare class ContentBundleEditorSubsystemModule extends UObject { 
	static Load(ResourceName: string): ContentBundleEditorSubsystemModule;
	static Find(Outer: UObject, ResourceName: string): ContentBundleEditorSubsystemModule;
	static GetDefaultObject(): ContentBundleEditorSubsystemModule;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBundleEditorSubsystemModule;
	static C(Other: UObject | any): ContentBundleEditorSubsystemModule;
}

declare class ContentBundleEditionSubmodule extends ContentBundleEditorSubsystemModule { 
	static Load(ResourceName: string): ContentBundleEditionSubmodule;
	static Find(Outer: UObject, ResourceName: string): ContentBundleEditionSubmodule;
	static GetDefaultObject(): ContentBundleEditionSubmodule;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBundleEditionSubmodule;
	static C(Other: UObject | any): ContentBundleEditionSubmodule;
}

declare class ContentBundleEditorSubsystem extends EditorSubsystem { 
	ContentBundleEditionSubmodule: ContentBundleEditionSubmodule;
	static Load(ResourceName: string): ContentBundleEditorSubsystem;
	static Find(Outer: UObject, ResourceName: string): ContentBundleEditorSubsystem;
	static GetDefaultObject(): ContentBundleEditorSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBundleEditorSubsystem;
	static C(Other: UObject | any): ContentBundleEditorSubsystem;
}

declare class HLODLayerFactory extends Factory { 
	static Load(ResourceName: string): HLODLayerFactory;
	static Find(Outer: UObject, ResourceName: string): HLODLayerFactory;
	static GetDefaultObject(): HLODLayerFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODLayerFactory;
	static C(Other: UObject | any): HLODLayerFactory;
}

declare class WorldPartitionConvertOptions extends UObject { 
	CommandletClass: UnrealEngineClass;
	bInPlace: boolean;
	bDeleteSourceLevels: boolean;
	bGenerateIni: boolean;
	bReportOnly: boolean;
	bVerbose: boolean;
	bSkipStableGUIDValidation: boolean;
	bOnlyMergeSubLevels: boolean;
	bSaveFoliageTypeToContentFolder: boolean;
	static Load(ResourceName: string): WorldPartitionConvertOptions;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionConvertOptions;
	static GetDefaultObject(): WorldPartitionConvertOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionConvertOptions;
	static C(Other: UObject | any): WorldPartitionConvertOptions;
}

declare class WorldPartitionEditorSettings extends DeveloperSettings { 
	CommandletClass: UnrealEngineClass;
	InstancedFoliageGridSize: number;
	MinimapLowQualityWorldUnitsPerPixelThreshold: number;
	static Load(ResourceName: string): WorldPartitionEditorSettings;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionEditorSettings;
	static GetDefaultObject(): WorldPartitionEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionEditorSettings;
	static C(Other: UObject | any): WorldPartitionEditorSettings;
}

declare type ESVGTheme = 'Dark' | 'Light' | 'ESVGTheme_MAX';
declare var ESVGTheme : { Dark:'Dark',Light:'Light',ESVGTheme_MAX:'ESVGTheme_MAX', };
declare class CSVtoSVGArugments extends EditorConfigBase { 
	CSV: FilePath;
	OutputDirectory: DirectoryPath;
	OutputFilename: string;
	skipRows: number;
	MinX: number;
	MaxX: number;
	MinY: number;
	MaxY: number;
	smooth: boolean;
	smoothKernelSize: number;
	smoothKernelPercent: number;
	Width: number;
	Height: number;
	Title: string;
	noMetadata: boolean;
	graphOnly: boolean;
	budget: number;
	Thickness: number;
	theme: ESVGTheme;
	Threshold: number;
	stacked: boolean;
	stacktotalstack: string;
	Interactive: boolean;
	showaverages: boolean;
	colourOffset: number;
	averageThreshold: number;
	static Load(ResourceName: string): CSVtoSVGArugments;
	static Find(Outer: UObject, ResourceName: string): CSVtoSVGArugments;
	static GetDefaultObject(): CSVtoSVGArugments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSVtoSVGArugments;
	static C(Other: UObject | any): CSVtoSVGArugments;
}

declare class PrecachePayloadsCommandlet extends Commandlet { 
	static Load(ResourceName: string): PrecachePayloadsCommandlet;
	static Find(Outer: UObject, ResourceName: string): PrecachePayloadsCommandlet;
	static GetDefaultObject(): PrecachePayloadsCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PrecachePayloadsCommandlet;
	static C(Other: UObject | any): PrecachePayloadsCommandlet;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EOculusMobileDevice = 'Quest' | 'Quest2' | 'EOculusMobileDevice_MAX';
declare var EOculusMobileDevice : { Quest:'Quest',Quest2:'Quest2',EOculusMobileDevice_MAX:'EOculusMobileDevice_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	StoreVersionOffsetArm64: number;
	StoreVersionOffsetX8664: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bForceSmallOBBFiles: boolean;
	bAllowLargeOBBFiles: boolean;
	bAllowPatchOBBFile: boolean;
	bAllowOverflowOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	bPublicLogFiles: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	bRestoreNotificationsOnReboot: boolean;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	bForceCompressNativeLibs: boolean;
	bEnableAdvancedBinaryCompression: boolean;
	bEnableBundle: boolean;
	bEnableUniversalAPK: boolean;
	bBundleABISplit: boolean;
	bBundleLanguageSplit: boolean;
	bBundleDensitySplit: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	PackageForOculusMobile: EOculusMobileDevice[];
	bRemoveOSIG: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bSupportsVulkanSM5: boolean;
	DebugVulkanLayerDirectory: DirectoryPath;
	DebugVulkanDeviceLayers: string[];
	DebugVulkanInstanceLayers: string[];
	bAndroidOpenGLSupportsBackbufferSampling: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bDisableStackProtector: boolean;
	bDisableLibCppSharedDependencyValidation: boolean;
	bSaveSymbols: boolean;
	bStripShaderReflection: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bEnableSnapshots: boolean;
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	bBlockAndroidKeysOnControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	SourceDataOverridePlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bEnableMaliPerfCounters: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	BuildToolsOverride: string;
	bStreamLandscapeMeshLODs: boolean;
	bEnableDomStorage: boolean;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare type EIOSCloudKitSyncStrategy = 'None' | 'OnlyAtGameStart' | 'Always' | 'EIOSCloudKitSyncStrategy_MAX';
declare var EIOSCloudKitSyncStrategy : { None:'None',OnlyAtGameStart:'OnlyAtGameStart',Always:'Always',EIOSCloudKitSyncStrategy_MAX:'EIOSCloudKitSyncStrategy_MAX', };
declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_15' | 'IOS_16' | 'IOS_MAX';
declare var EIOSVersion : { IOS_15:'IOS_15',IOS_16:'IOS_16',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategy;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bBuildAsFramework: boolean;
	WindowsMetalToolchainOverride: IOSBuildResourceDirectory;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bShipForBitcode: boolean;
	bEnableAdvertisingIdentifier: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	RemoteServerOverrideBuildPath: string;
	CwRsyncInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bRunAsCurrentUser: boolean;
	bGameSupportsMultipleActiveControllers: boolean;
	bAllowRemoteRotation: boolean;
	bAllowControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	bDisableMotionData: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	bSupportsITunesFileSharing: boolean;
	bSupportsFilesApp: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	bEnableDynamicMaxFPS: boolean;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bCustomLaunchscreenStoryboard: boolean;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	DevCenterUsername: string;
	DevCenterPassword: string;
	bDisableHTTPS: boolean;
	MetalLanguageVersion: number;
	UseFastIntrinsics: boolean;
	ForceFloats: boolean;
	EnableMathOptimisations: boolean;
	IndirectArgumentTier: number;
	bSupportAppleA8: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	SourceDataOverridePlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	bStreamLandscapeMeshLODs: boolean;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare class HoloLensCorePackageStringResources { 
	PackageDisplayName: string;
	PublisherDisplayName: string;
	PackageDescription: string;
	ApplicationDisplayName: string;
	ApplicationDescription: string;
	clone() : HoloLensCorePackageStringResources;
	static C(Other: UObject | any): HoloLensCorePackageStringResources;
}

declare class HoloLensCorePackageImageResources { 
	clone() : HoloLensCorePackageImageResources;
	static C(Other: UObject | any): HoloLensCorePackageImageResources;
}

declare class HoloLensCorePackageLocalizedResources { 
	CultureId: string;
	Strings: HoloLensCorePackageStringResources;
	Images: HoloLensCorePackageImageResources;
	clone() : HoloLensCorePackageLocalizedResources;
	static C(Other: UObject | any): HoloLensCorePackageLocalizedResources;
}

declare class HoloLensTargetSettings extends UObject { 
	bBuildForEmulation: boolean;
	bBuildForDevice: boolean;
	bUseNameForLogo: boolean;
	bBuildForRetailWindowsStore: boolean;
	bAutoIncrementVersion: boolean;
	bShouldCreateAppInstaller: boolean;
	AppInstallerInstallationURL: string;
	HoursBetweenUpdateChecks: number;
	bEnablePIXProfiling: boolean;
	TileBackgroundColor: Color;
	SplashScreenBackgroundColor: Color;
	PerCultureResources: HoloLensCorePackageLocalizedResources[];
	TargetDeviceFamily: string;
	MinimumPlatformVersion: string;
	MaximumPlatformVersionTested: string;
	MaxTrianglesPerCubicMeter: number;
	SpatialMeshingVolumeSize: number;
	CompilerVersion: ECompilerVersion;
	Windows10SDKVersion: string;
	CapabilityList: string[];
	DeviceCapabilityList: string[];
	UapCapabilityList: string[];
	Uap2CapabilityList: string[];
	bSetDefaultCapabilities: boolean;
	SpatializationPlugin: string;
	SourceDataOverridePlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	SoundCueCookQualityIndex: number;
	static Load(ResourceName: string): HoloLensTargetSettings;
	static Find(Outer: UObject, ResourceName: string): HoloLensTargetSettings;
	static GetDefaultObject(): HoloLensTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoloLensTargetSettings;
	static C(Other: UObject | any): HoloLensTargetSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class VisualLoggerRenderingComponent extends DebugDrawComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	bUseFilterVolumes: boolean;
	GraphsBackgroundColor: Color;
	bPersistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bConstrainGraphToLocalMinMax: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	bForceUniqueLogNames: boolean;
	PersistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActorBase extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActorBase;
	static C(Other: UObject | any): VisualLoggerRenderingActorBase;
}

declare class VisualLoggerRenderingActor extends VisualLoggerRenderingActorBase { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class ClothingAssetExporter extends UObject { 
	static Load(ResourceName: string): ClothingAssetExporter;
	static Find(Outer: UObject, ResourceName: string): ClothingAssetExporter;
	static GetDefaultObject(): ClothingAssetExporter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothingAssetExporter;
	static C(Other: UObject | any): ClothingAssetExporter;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAssetCommon[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryLandscape;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
	static GetDefaultObject(): ActorFactoryLandscape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject | any): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'Interval' | 'Terrace' | 'ELandscapeToolFlattenMode_MAX';
declare var ELandscapeToolFlattenMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',Interval:'Interval',Terrace:'Terrace',ELandscapeToolFlattenMode_MAX:'ELandscapeToolFlattenMode_MAX', };
declare type ELandscapeToolErosionMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolErosionMode_MAX';
declare var ELandscapeToolErosionMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolErosionMode_MAX:'ELandscapeToolErosionMode_MAX', };
declare type ELandscapeToolHydroErosionMode = 'Invalid' | 'Both' | 'Positive' | 'ELandscapeToolHydroErosionMode_MAX';
declare var ELandscapeToolHydroErosionMode : { Invalid:'Invalid',Both:'Both',Positive:'Positive',ELandscapeToolHydroErosionMode_MAX:'ELandscapeToolHydroErosionMode_MAX', };
declare type ELandscapeToolNoiseMode = 'Invalid' | 'Both' | 'Add' | 'Sub' | 'ELandscapeToolNoiseMode_MAX';
declare var ELandscapeToolNoiseMode : { Invalid:'Invalid',Both:'Both',Add:'Add',Sub:'Sub',ELandscapeToolNoiseMode_MAX:'ELandscapeToolNoiseMode_MAX', };
declare type ELandscapeToolPasteMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolPasteMode_MAX';
declare var ELandscapeToolPasteMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolPasteMode_MAX:'ELandscapeToolPasteMode_MAX', };
declare class GizmoImportLayer { 
	LayerFilename: string;
	LayerName: string;
	bNoImport: boolean;
	clone() : GizmoImportLayer;
	static C(Other: UObject | any): GizmoImportLayer;
}

declare type ELandscapeMirrorOperation = 'MinusXToPlusX' | 'PlusXToMinusX' | 'MinusYToPlusY' | 'PlusYToMinusY' | 'RotateMinusXToPlusX' | 'RotatePlusXToMinusX' | 'RotateMinusYToPlusY' | 'RotatePlusYToMinusY' | 'ELandscapeMirrorOperation_MAX';
declare var ELandscapeMirrorOperation : { MinusXToPlusX:'MinusXToPlusX',PlusXToMinusX:'PlusXToMinusX',MinusYToPlusY:'MinusYToPlusY',PlusYToMinusY:'PlusYToMinusY',RotateMinusXToPlusX:'RotateMinusXToPlusX',RotatePlusXToMinusX:'RotatePlusXToMinusX',RotateMinusYToPlusY:'RotateMinusYToPlusY',RotatePlusYToMinusY:'RotatePlusYToMinusY',ELandscapeMirrorOperation_MAX:'ELandscapeMirrorOperation_MAX', };
declare type ELandscapeConvertMode = 'Invalid' | 'Expand' | 'Clip' | 'Resample' | 'ELandscapeConvertMode_MAX';
declare var ELandscapeConvertMode : { Invalid:'Invalid',Expand:'Expand',Clip:'Clip',Resample:'Resample',ELandscapeConvertMode_MAX:'ELandscapeConvertMode_MAX', };
declare type ELandscapeImportResult = 'Success' | 'Warning' | 'Error' | 'ELandscapeImportResult_MAX';
declare var ELandscapeImportResult : { Success:'Success',Warning:'Warning',Error:'Error',ELandscapeImportResult_MAX:'ELandscapeImportResult_MAX', };
declare type ELandscapeImportTransformType = 'None' | 'ExpandOffset' | 'ExpandCentered' | 'Resample' | 'ELandscapeImportTransformType_MAX';
declare var ELandscapeImportTransformType : { None:'None',ExpandOffset:'ExpandOffset',ExpandCentered:'ExpandCentered',Resample:'Resample',ELandscapeImportTransformType_MAX:'ELandscapeImportTransformType_MAX', };
declare class LandscapeImportResolution { 
	Width: number;
	Height: number;
	clone() : LandscapeImportResolution;
	static C(Other: UObject | any): LandscapeImportResolution;
}

declare class LandscapeFileResolution { 
	Width: number;
	Height: number;
	clone() : LandscapeFileResolution;
	static C(Other: UObject | any): LandscapeFileResolution;
}

declare class LandscapeImportFileDescriptor { 
	Coord: IntPoint;
	FilePath: string;
	clone() : LandscapeImportFileDescriptor;
	static C(Other: UObject | any): LandscapeImportFileDescriptor;
}

declare class LandscapeImportDescriptor { 
	ImportResolutions: LandscapeImportResolution[];
	FileResolutions: LandscapeFileResolution[];
	FileDescriptors: LandscapeImportFileDescriptor[];
	Scale: Vector;
	clone() : LandscapeImportDescriptor;
	static C(Other: UObject | any): LandscapeImportDescriptor;
}

declare type ELandscapeImportAlphamapType = 'Additive' | 'Layered' | 'ELandscapeImportAlphamapType_MAX';
declare var ELandscapeImportAlphamapType : { Additive:'Additive',Layered:'Layered',ELandscapeImportAlphamapType_MAX:'ELandscapeImportAlphamapType_MAX', };
declare class LandscapeImportLayerInfo { 
	LayerName: string;
	LayerInfo: LandscapeLayerInfoObject;
	SourceFilePath: string;
	clone() : LandscapeImportLayerInfo;
	static C(Other: UObject | any): LandscapeImportLayerInfo;
}

declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	ThumbnailMIC: LandscapeMaterialInstanceConstant;
	ImportResult: ELandscapeImportResult;
	ErrorMessage: string;
	ExportFilePath: string;
	bSelected: boolean;
	clone() : LandscapeImportLayer;
	static C(Other: UObject | any): LandscapeImportLayer;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	Origin: Vector2D;
	Rotation: number;
	bCenterTextureOnOrigin: boolean;
	RepeatSize: number;
	clone() : LandscapePatternBrushWorldSpaceSettings;
	static C(Other: UObject | any): LandscapePatternBrushWorldSpaceSettings;
}

declare type EColorChannel = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EColorChannel_MAX';
declare var EColorChannel : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EColorChannel_MAX:'EColorChannel_MAX', };
declare class LandscapeEditorObject extends UObject { 
	ToolStrength: number;
	PaintToolStrength: number;
	bUseWeightTargetValue: boolean;
	WeightTargetValue: number;
	MaximumValueRadius: number;
	bCombinedLayersOperation: boolean;
	FlattenMode: ELandscapeToolFlattenMode;
	bUseSlopeFlatten: boolean;
	bPickValuePerApply: boolean;
	bUseFlattenTarget: boolean;
	FlattenTarget: number;
	bShowFlattenTargetPreview: boolean;
	TerraceInterval: number;
	TerraceSmooth: number;
	bFlattenEyeDropperModeActivated: boolean;
	FlattenEyeDropperModeDesiredTarget: number;
	RampWidth: number;
	RampSideFalloff: number;
	SmoothFilterKernelSize: number;
	bDetailSmooth: boolean;
	DetailScale: number;
	ErodeThresh: number;
	ErodeSurfaceThickness: number;
	ErodeIterationNum: number;
	ErosionNoiseMode: ELandscapeToolErosionMode;
	ErosionNoiseScale: number;
	RainAmount: number;
	SedimentCapacity: number;
	HErodeIterationNum: number;
	RainDistMode: ELandscapeToolHydroErosionMode;
	RainDistScale: number;
	bHErosionDetailSmooth: boolean;
	HErosionDetailScale: number;
	NoiseMode: ELandscapeToolNoiseMode;
	NoiseScale: number;
	bUseSelectedRegion: boolean;
	bUseNegativeMask: boolean;
	PasteMode: ELandscapeToolPasteMode;
	bApplyToAllTargets: boolean;
	bSnapGizmo: boolean;
	bSmoothGizmoBrush: boolean;
	GizmoHeightmapFilenameString: string;
	GizmoImportSize: IntPoint;
	GizmoImportLayers: GizmoImportLayer[];
	MirrorPoint: Vector2D;
	MirrorOp: ELandscapeMirrorOperation;
	MirrorSmoothingWidth: number;
	BlueprintBrush: UnrealEngineClass;
	ResizeLandscape_QuadsPerSection: number;
	ResizeLandscape_SectionsPerComponent: number;
	ResizeLandscape_ComponentCount: IntPoint;
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	NewLandscape_Material: MaterialInterface;
	NewLandscape_QuadsPerSection: number;
	NewLandscape_SectionsPerComponent: number;
	NewLandscape_ComponentCount: IntPoint;
	NewLandscape_Location: Vector;
	NewLandscape_Rotation: Rotator;
	NewLandscape_Scale: Vector;
	ImportLandscape_HeightmapImportResult: ELandscapeImportResult;
	ImportLandscape_HeightmapErrorMessage: string;
	ImportLandscape_HeightmapFilename: string;
	ImportLandscape_Width: number;
	ImportLandscape_Height: number;
	HeightmapExportFilename: string;
	ImportLandscape_GizmoLocalPosition: IntPoint;
	ImportType: ELandscapeImportTransformType;
	bHeightmapSelected: boolean;
	bExportEditLayer: boolean;
	bExportSingleFile: boolean;
	HeightmapImportDescriptor: LandscapeImportDescriptor;
	HeightmapImportDescriptorIndex: number;
	ImportLandscape_Data: number[];
	bCanHaveLayersContent: boolean;
	bFlipYAxis: boolean;
	WorldPartitionGridSize: number;
	ImportLandscape_AlphamapType: ELandscapeImportAlphamapType;
	ImportLandscape_Layers: LandscapeImportLayer[];
	BrushRadius: number;
	PaintBrushRadius: number;
	BrushFalloff: number;
	PaintBrushFalloff: number;
	bUseClayBrush: boolean;
	AlphaBrushScale: number;
	bAlphaBrushAutoRotate: boolean;
	AlphaBrushRotation: number;
	AlphaBrushPanU: number;
	AlphaBrushPanV: number;
	bUseWorldSpacePatternBrush: boolean;
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	AlphaTexture: Texture2D;
	AlphaTextureChannel: EColorChannel;
	AlphaTextureSizeX: number;
	AlphaTextureSizeY: number;
	AlphaTextureData: number[];
	BrushComponentSize: number;
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	TargetDisplayOrder: ELandscapeLayerDisplayMode;
	ShowUnusedLayers: boolean;
	CurrentLayerIndex: number;
	static Load(ResourceName: string): LandscapeEditorObject;
	static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
	static GetDefaultObject(): LandscapeEditorObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject | any): LandscapeEditorObject;
}

declare class LandscapeLayerInfoObjectFactory extends Factory { 
	static Load(ResourceName: string): LandscapeLayerInfoObjectFactory;
	static Find(Outer: UObject, ResourceName: string): LandscapeLayerInfoObjectFactory;
	static GetDefaultObject(): LandscapeLayerInfoObjectFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeLayerInfoObjectFactory;
	static C(Other: UObject | any): LandscapeLayerInfoObjectFactory;
}

declare class LandscapePlaceholder extends Actor { 
	static GetDefaultObject(): LandscapePlaceholder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject | any): LandscapePlaceholder;
}

declare type EBoneGetterSetterMode = 'LocalSpace' | 'GlobalSpace' | 'Max' | 'EBoneGetterSetterMode_MAX';
declare var EBoneGetterSetterMode : { LocalSpace:'LocalSpace',GlobalSpace:'GlobalSpace',Max:'Max',EBoneGetterSetterMode_MAX:'EBoneGetterSetterMode_MAX', };
declare type ERigUnitVisualDebugPointMode = 'Point' | 'Vector' | 'Max' | 'ERigUnitVisualDebugPointMode_MAX';
declare var ERigUnitVisualDebugPointMode : { Point:'Point',Vector:'Vector',Max:'Max',ERigUnitVisualDebugPointMode_MAX:'ERigUnitVisualDebugPointMode_MAX', };
declare class RigUnit_ModifyTransforms_PerItem { 
	Item: RigElementKey;
	Transform: Transform;
	clone() : RigUnit_ModifyTransforms_PerItem;
	static C(Other: UObject | any): RigUnit_ModifyTransforms_PerItem;
}

declare type EControlRigModifyBoneMode = 'OverrideLocal' | 'OverrideGlobal' | 'AdditiveLocal' | 'AdditiveGlobal' | 'Max' | 'EControlRigModifyBoneMode_MAX';
declare var EControlRigModifyBoneMode : { OverrideLocal:'OverrideLocal',OverrideGlobal:'OverrideGlobal',AdditiveLocal:'AdditiveLocal',AdditiveGlobal:'AdditiveGlobal',Max:'Max',EControlRigModifyBoneMode_MAX:'EControlRigModifyBoneMode_MAX', };
declare class PBIKEffector { 
	bone: string;
	Transform: Transform;
	PositionAlpha: number;
	RotationAlpha: number;
	StrengthAlpha: number;
	PullChainAlpha: number;
	PinRotation: number;
	clone() : PBIKEffector;
	static C(Other: UObject | any): PBIKEffector;
}

declare class PBIKBoneSetting { 
	bone: string;
	RotationStiffness: number;
	PositionStiffness: number;
	X: EPBIKLimitType;
	MinX: number;
	MaxX: number;
	Y: EPBIKLimitType;
	MinY: number;
	MaxY: number;
	Z: EPBIKLimitType;
	MinZ: number;
	MaxZ: number;
	bUsePreferredAngles: boolean;
	PreferredAngles: Vector;
	clone() : PBIKBoneSetting;
	static C(Other: UObject | any): PBIKBoneSetting;
}

declare class PBIKSolverSettings { 
	Iterations: number;
	MassMultiplier: number;
	MinMassMultiplier: number;
	bAllowStretch: boolean;
	RootBehavior: EPBIKRootBehavior;
	bStartSolveFromInputPose: boolean;
	clone() : PBIKSolverSettings;
	static C(Other: UObject | any): PBIKSolverSettings;
}

declare class PBIKDebug { 
	DrawScale: number;
	bDrawDebug: boolean;
	clone() : PBIKDebug;
	static C(Other: UObject | any): PBIKDebug;
}

declare class DiscardedMemoryClassTemplate_1 extends RigVMMemoryStorage { 
	LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: Vector;
	FootTrace_FootTrace_MathVectorAdd_A__Const: Vector;
	FootTrace_FootTrace_GetTransform_Item__Const: RigElementKey;
	FootTrace_FootTrace_GetTransform_Space__Const: EBoneGetterSetterMode;
	FootTrace_FootTrace_GetTransform_bInitial__Const: boolean;
	FootTrace_FootTrace_MathFloatAdd_B__Const: number;
	FootTrace_FootTrace_GetTransform_1_Item__Const: RigElementKey;
	FootTrace_FootTrace_MathVectorAdd_B__Const: Vector;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: ERigUnitVisualDebugPointMode;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: LinearColor;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: RigElementKey;
	FootTrace_FootTrace_MathVectorSub_B__Const: Vector;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: ERigUnitVisualDebugPointMode;
	FootTrace_FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: ETraceTypeQuery;
	FootTrace_FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
	FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: ERigUnitVisualDebugPointMode;
	FootTrace_1_FootTrace_1_GetTransform_Item__Const: RigElementKey;
	FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: ERigUnitVisualDebugPointMode;
	FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: ERigUnitVisualDebugPointMode;
	FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_TraceChannel__Const: ETraceTypeQuery;
	FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_Mode__Const: ERigUnitVisualDebugPointMode;
	VariableNode_9_Value__Const: number;
	AlphaInterp_Bias__Const: number;
	AlphaInterp_InRange__Const: InputRange;
	AlphaInterp_InterpSpeedIncreasing__Const: number;
	ModifyTransforms_ItemToModify__Const: RigUnit_ModifyTransforms_PerItem[];
	ModifyTransforms_Mode__Const: EControlRigModifyBoneMode;
	ModifyTransforms_1_ItemToModify__Const: RigUnit_ModifyTransforms_PerItem[];
	ModifyTransforms_1_1_ItemToModify__Const: RigUnit_ModifyTransforms_PerItem[];
	PBIK_Root__Const: string;
	PBIK_Effectors__Const: PBIKEffector[];
	PBIK_BoneSettings__Const: PBIKBoneSetting[];
	PBIK_ExcludedBones__Const: string[];
	PBIK_Settings__Const: PBIKSolverSettings;
	PBIK_Debug__Const: PBIKDebug;
	static Load(ResourceName: string): DiscardedMemoryClassTemplate_1;
	static Find(Outer: UObject, ResourceName: string): DiscardedMemoryClassTemplate_1;
	static GetDefaultObject(): DiscardedMemoryClassTemplate_1;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DiscardedMemoryClassTemplate_1;
	static C(Other: UObject | any): DiscardedMemoryClassTemplate_1;
}

declare class RigVMExecuteContext { 
	clone() : RigVMExecuteContext;
	static C(Other: UObject | any): RigVMExecuteContext;
}

declare class ControlRigExecuteContext extends RigVMExecuteContext { 
	clone() : ControlRigExecuteContext;
	static C(Other: UObject | any): ControlRigExecuteContext;
}

declare class RigUnit_ModifyTransforms_WorkData { 
	CachedItems: CachedRigElement[];
	clone() : RigUnit_ModifyTransforms_WorkData;
	static C(Other: UObject | any): RigUnit_ModifyTransforms_WorkData;
}

declare class PBIKSolver { 
	clone() : PBIKSolver;
	static C(Other: UObject | any): PBIKSolver;
}

declare class DiscardedMemoryClassTemplate_0 extends RigVMMemoryStorage { 
	ExecuteContext_: ControlRigExecuteContext;
	FootTrace_FootTrace_SphereTraceByTraceChannel_HitLocation: Vector;
	FootTrace_FootTrace_MathVectorAdd_Result: Vector;
	FootTrace_FootTrace_GetTransform_Transform: Transform;
	FootTrace_FootTrace_GetTransform_CachedIndex: CachedRigElement[];
	FootTrace_FootTrace_MathFloatAdd_Result: number;
	FootTrace_FootTrace_MathFloatAdd_A: number;
	FootTrace_FootTrace_GetTransform_1_Transform: Transform;
	FootTrace_FootTrace_GetTransform_1_CachedIndex: CachedRigElement[];
	FootTrace_FootTrace_MathVectorAdd_A__IO: Vector;
	FootTrace_FootTrace_MathVectorSub_Result: Vector;
	FootTrace_FootTrace_MathVectorSub_A__IO: Vector;
	FootTrace_FootTrace_SphereTraceByTraceChannel_bHit: boolean;
	FootTrace_FootTrace_SphereTraceByTraceChannel_HitNormal: Vector;
	FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_HitLocation: Vector;
	FootTrace_1_FootTrace_1_MathVectorAdd_Result: Vector;
	FootTrace_1_FootTrace_1_GetTransform_Transform: Transform;
	FootTrace_1_FootTrace_1_GetTransform_CachedIndex: CachedRigElement[];
	FootTrace_1_FootTrace_1_MathFloatAdd_Result: number;
	FootTrace_1_FootTrace_1_MathFloatAdd_A: number;
	FootTrace_1_FootTrace_1_GetTransform_1_Transform: Transform;
	FootTrace_1_FootTrace_1_GetTransform_1_CachedIndex: CachedRigElement[];
	FootTrace_1_FootTrace_1_MathVectorAdd_A__IO: Vector;
	FootTrace_1_FootTrace_1_MathVectorSub_Result: Vector;
	FootTrace_1_FootTrace_1_MathVectorSub_A__IO: Vector;
	FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_bHit: boolean;
	FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_HitNormal: Vector;
	AlphaInterp_Result: number;
	AlphaInterp_Value: number;
	AlphaInterp_ScaleBiasClamp: InputScaleBiasClamp[];
	AlphaInterp_1_Result: number;
	AlphaInterp_1_Value: number;
	AlphaInterp_1_ScaleBiasClamp: InputScaleBiasClamp[];
	If_Result: number;
	MathFloatLess_Result: boolean;
	MathFloatLess_A: number;
	MathFloatLess_B: number;
	if_true: number;
	if_false: number;
	ModifyTransforms_ItemToModify__IO: RigUnit_ModifyTransforms_PerItem[];
	ModifyTransforms_WorkData: RigUnit_ModifyTransforms_WorkData[];
	ModifyTransforms_1_ItemToModify__IO: RigUnit_ModifyTransforms_PerItem[];
	ModifyTransforms_1_WorkData: RigUnit_ModifyTransforms_WorkData[];
	ModifyTransforms_1_1_ItemToModify__IO: RigUnit_ModifyTransforms_PerItem[];
	ModifyTransforms_1_1_WorkData: RigUnit_ModifyTransforms_WorkData[];
	GetTransform_Transform: Transform;
	GetTransform_CachedIndex: CachedRigElement[];
	GetTransform_1_Transform: Transform;
	GetTransform_1_CachedIndex: CachedRigElement[];
	PBIK_Effectors__IO: PBIKEffector[];
	PBIK_EffectorSolverIndices: number[][];
	PBIK_BoneSettingToSolverBoneIndex: number[][];
	PBIK_SolverBoneToElementIndex: number[][];
	PBIK_Solver: PBIKSolver[];
	PBIK_bNeedsInit: boolean[];
	static Load(ResourceName: string): DiscardedMemoryClassTemplate_0;
	static Find(Outer: UObject, ResourceName: string): DiscardedMemoryClassTemplate_0;
	static GetDefaultObject(): DiscardedMemoryClassTemplate_0;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DiscardedMemoryClassTemplate_0;
	static C(Other: UObject | any): DiscardedMemoryClassTemplate_0;
}

declare class RigVMMemory_Work extends RigVMMemoryStorage { 
	ExecuteContext_: ControlRigExecuteContext;
	RigVMModel___FootTrace_SphereTraceByTraceChannel_HitLocation: Vector;
	RigVMModel___FootTrace_MathVectorAdd_Result: Vector;
	RigVMModel___FootTrace_GetTransform_Transform: Transform;
	RigVMModel___FootTrace_GetTransform_CachedIndex: CachedRigElement[];
	RigVMModel___FootTrace_MathFloatAdd_Result: number;
	RigVMModel___FootTrace_MathFloatAdd_A: number;
	RigVMModel___FootTrace_GetTransform_1_Transform: Transform;
	RigVMModel___FootTrace_GetTransform_1_CachedIndex: CachedRigElement[];
	RigVMModel___FootTrace_MathVectorAdd_A__IO: Vector;
	RigVMModel___FootTrace_MathVectorSub_Result: Vector;
	RigVMModel___FootTrace_MathVectorSub_A__IO: Vector;
	RigVMModel___FootTrace_SphereTraceByTraceChannel_bHit: boolean;
	RigVMModel___FootTrace_SphereTraceByTraceChannel_HitNormal: Vector;
	RigVMModel___FootTrace_1_SphereTraceByTraceChannel_HitLocation: Vector;
	RigVMModel___FootTrace_1_MathVectorAdd_Result: Vector;
	RigVMModel___FootTrace_1_GetTransform_Transform: Transform;
	RigVMModel___FootTrace_1_GetTransform_CachedIndex: CachedRigElement[];
	RigVMModel___FootTrace_1_MathFloatAdd_Result: number;
	RigVMModel___FootTrace_1_MathFloatAdd_A: number;
	RigVMModel___FootTrace_1_GetTransform_1_Transform: Transform;
	RigVMModel___FootTrace_1_GetTransform_1_CachedIndex: CachedRigElement[];
	RigVMModel___FootTrace_1_MathVectorAdd_A__IO: Vector;
	RigVMModel___FootTrace_1_MathVectorSub_Result: Vector;
	RigVMModel___FootTrace_1_MathVectorSub_A__IO: Vector;
	RigVMModel___FootTrace_1_SphereTraceByTraceChannel_bHit: boolean;
	RigVMModel___FootTrace_1_SphereTraceByTraceChannel_HitNormal: Vector;
	RigVMModel___AlphaInterp_Result: number;
	RigVMModel___AlphaInterp_Value: number;
	RigVMModel___AlphaInterp_ScaleBiasClamp: InputScaleBiasClamp[];
	RigVMModel___AlphaInterp_1_Result: number;
	RigVMModel___AlphaInterp_1_Value: number;
	RigVMModel___AlphaInterp_1_ScaleBiasClamp: InputScaleBiasClamp[];
	RigVMModel___If_Result: number;
	RigVMModel___MathFloatLess_Result: boolean;
	RigVMModel___MathFloatLess_A: number;
	RigVMModel___MathFloatLess_B: number;
	RigVMModel___If_True: number;
	RigVMModel___If_False: number;
	RigVMModel___ModifyTransforms_ItemToModify__IO: RigUnit_ModifyTransforms_PerItem[];
	RigVMModel___ModifyTransforms_WorkData: RigUnit_ModifyTransforms_WorkData[];
	RigVMModel___ModifyTransforms_1_ItemToModify__IO: RigUnit_ModifyTransforms_PerItem[];
	RigVMModel___ModifyTransforms_1_WorkData: RigUnit_ModifyTransforms_WorkData[];
	RigVMModel___ModifyTransforms_1_1_ItemToModify__IO: RigUnit_ModifyTransforms_PerItem[];
	RigVMModel___ModifyTransforms_1_1_WorkData: RigUnit_ModifyTransforms_WorkData[];
	RigVMModel___GetTransform_Transform: Transform;
	RigVMModel___GetTransform_CachedIndex: CachedRigElement[];
	RigVMModel___GetTransform_1_Transform: Transform;
	RigVMModel___GetTransform_1_CachedIndex: CachedRigElement[];
	RigVMModel___PBIK_Effectors__IO: PBIKEffector[];
	RigVMModel___PBIK_EffectorSolverIndices: number[][];
	RigVMModel___PBIK_BoneSettingToSolverBoneIndex: number[][];
	RigVMModel___PBIK_SolverBoneToElementIndex: number[][];
	RigVMModel___PBIK_Solver: PBIKSolver[];
	RigVMModel___PBIK_bNeedsInit: boolean[];
	static Load(ResourceName: string): RigVMMemory_Work;
	static Find(Outer: UObject, ResourceName: string): RigVMMemory_Work;
	static GetDefaultObject(): RigVMMemory_Work;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RigVMMemory_Work;
	static C(Other: UObject | any): RigVMMemory_Work;
}

declare class RigVMMemory_Literal extends RigVMMemoryStorage { 
	LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: Vector;
	RigVMModel___FootTrace_MathVectorAdd_A__Const: Vector;
	RigVMModel___FootTrace_GetTransform_Item__Const: RigElementKey;
	RigVMModel___FootTrace_GetTransform_Space__Const: EBoneGetterSetterMode;
	RigVMModel___FootTrace_GetTransform_bInitial__Const: boolean;
	RigVMModel___FootTrace_MathFloatAdd_B__Const: number;
	RigVMModel___FootTrace_GetTransform_1_Item__Const: RigElementKey;
	RigVMModel___FootTrace_MathVectorAdd_B__Const: Vector;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: ERigUnitVisualDebugPointMode;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: LinearColor;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: RigElementKey;
	RigVMModel___FootTrace_MathVectorSub_B__Const: Vector;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: ERigUnitVisualDebugPointMode;
	RigVMModel___FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: ETraceTypeQuery;
	RigVMModel___FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
	RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: ERigUnitVisualDebugPointMode;
	RigVMModel___FootTrace_1_GetTransform_Item__Const: RigElementKey;
	RigVMModel___FootTrace_1_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: ERigUnitVisualDebugPointMode;
	RigVMModel___FootTrace_1_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: ERigUnitVisualDebugPointMode;
	RigVMModel___FootTrace_1_SphereTraceByTraceChannel_TraceChannel__Const: ETraceTypeQuery;
	RigVMModel___FootTrace_1_RigUnit_VisualDebugVectorItemSpace_Mode__Const: ERigUnitVisualDebugPointMode;
	RigVMModel___VariableNode_9_Value__Const: number;
	RigVMModel___AlphaInterp_Bias__Const: number;
	RigVMModel___AlphaInterp_InRange__Const: InputRange;
	RigVMModel___AlphaInterp_InterpSpeedIncreasing__Const: number;
	RigVMModel___ModifyTransforms_ItemToModify__Const: RigUnit_ModifyTransforms_PerItem[];
	RigVMModel___ModifyTransforms_Mode__Const: EControlRigModifyBoneMode;
	RigVMModel___ModifyTransforms_1_ItemToModify__Const: RigUnit_ModifyTransforms_PerItem[];
	RigVMModel___ModifyTransforms_1_1_ItemToModify__Const: RigUnit_ModifyTransforms_PerItem[];
	RigVMModel___PBIK_Root__Const: string;
	RigVMModel___PBIK_Effectors__Const: PBIKEffector[];
	RigVMModel___PBIK_BoneSettings__Const: PBIKBoneSetting[];
	RigVMModel___PBIK_ExcludedBones__Const: string[];
	RigVMModel___PBIK_Settings__Const: PBIKSolverSettings;
	RigVMModel___PBIK_Debug__Const: PBIKDebug;
	static Load(ResourceName: string): RigVMMemory_Literal;
	static Find(Outer: UObject, ResourceName: string): RigVMMemory_Literal;
	static GetDefaultObject(): RigVMMemory_Literal;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RigVMMemory_Literal;
	static C(Other: UObject | any): RigVMMemory_Literal;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

