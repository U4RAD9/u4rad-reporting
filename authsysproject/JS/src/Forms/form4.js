import React, { Component } from "react";
import { Generate } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
//import {vanillaRenderers, vanillaCells, JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';
import {
	materialRenderers,
	materialCells,
} from "@jsonforms/material-renderers";

const _schema = {
	type: "object",
	properties: {
		NameTextFR4: {
			type: "string",
		},
		IDTextFR4: {
			type: "string",
		},
		AgeTextFR4: {
			type: "string",
		},
		GenderTextFR4: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		TestDateTextFR4: {
			type: "string",
		},
        ReportDateTextFR4: {
			type: "string",
		},
		// Sinus*****

		Normalsinus: {
			type: "boolean",
		},
		PnsSinuses: {
			type: "boolean",
		},
		//(A) Frontal Sinuses
		PnsFrontal: {
			type: "boolean",
		},
		// right*****
		PnsFrontalRight: {
			type: "boolean",
		},
		PnsFrontalRightPneumatization: {
			type: 'boolean',
		},
		PnsFrontalRightPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsFrontalRightMusocalThicking: {
			type: 'boolean',
		},
		PnsFrontalRightMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsFrontalRightHyperdense: {
			type: "boolean",
		},
		PnsFrontalRightAirFluid: {
			type: "boolean",
		},
		PnsFrontalRightFrontoEthmoid: {
			type: 'boolean',
		},
		PnsFrontalRightFrontoEthmoidType: {
			type: 'string',
			enum: ['patent', 'partial narrowing', 'complete occlusion'],
		},
		PnsFrontalRightBonyErosions: {
			type: "boolean",
		},
		// left******
		PnsFrontalLeft: {
			type: "boolean",
		},
		PnsFrontalLeftPneumatization: {
			type: 'boolean',
		},
		PnsFrontalLeftPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsFrontalLeftMusocalThicking: {
			type: 'boolean',
		},
		PnsFrontalLeftMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsFrontalLeftHyperdense: {
			type: "boolean",
		},
		PnsFrontalLeftAirFluid: {
			type: "boolean",
		},
		PnsFrontalLeftFrontoEthmoid: {
			type: 'boolean',
		},
		PnsFrontalLeftFrontoEthmoidType: {
			type: 'string',
			enum: ['patent', 'partial narrowing', 'complete occlusion'],
		},
		PnsFrontalLeftBonyErosions: {
			type: "boolean",
		},

		// (B) Maxillary sinuses*******
		PnsMaxillary: {
			type: "boolean",
		},
		// right******
		PnsMaxillaryRight: {
			type: "boolean",
		},
		PnsMaxillaryRightPneumatization: {
			type: 'boolean',
		},
		PnsmaxillaryRightPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsMaxillaryRightMusocalThicking: {
			type: 'boolean',
		},
		PnsMaxillaryRightMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsMaxillaryRightHyperdense: {
			type: "boolean",
		},
		PnsMaxillaryRightAirFluid: {
			type: "boolean",
		},
		PnsMaxillaryRightOsteomeatalUnit: {
			type: "boolean",
		},
		PnsMaxillaryRightOsteomeatalUnitType: {
			type: "string",
			enum: ['patent', 'partial narrowing', 'complete occlusion']
		},

		PnsMaxillaryRightBonyErosions: {
			type: "boolean",
		},
		PnsMaxillaryRightAccessoryOstia: {
			type: 'boolean',
		},

		// left******
		PnsMaxillaryLeft: {
			type: "boolean",
		},
		PnsMaxillaryLeftPneumatization: {
			type: 'boolean',
		},
		PnsmaxillaryLeftPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsMaxillaryLeftMusocalThicking: {
			type: 'boolean',
		},
		PnsMaxillaryLeftMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsMaxillaryLeftHyperdense: {
			type: "boolean",
		},
		PnsMaxillaryLeftAirFluid: {
			type: "boolean",
		},
		PnsMaxillaryLeftOsteomeatalUnit: {
			type: "boolean",
		},
		PnsMaxillaryLeftOsteomeatalUnitType: {
			type: "string",
			enum: ['patent', 'partial narrowing', 'complete occlusion']
		},
		PnsMaxillaryLeftBonyErosions: {
			type: "boolean",
		},
		PnsMaxillaryLeftAccessoryOstia: {
			type: 'boolean',
		},

		// (C) Ethmoidal Sinuses******
		PnsEthmoidal: {
			type: "boolean",
		},
		// Right
		PnsEthmoidalRight: {
			type: "boolean",
		},
		PnsEthmoidalRightPneumatization: {
			type: 'boolean',
		},
		PnsEthmoidalRightPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsEthmoidalRightMusocalThicking: {
			type: 'boolean',
		},
		PnsEthmoidalRightMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsEhtmoidalRightHyperdense: {
			type: "boolean",
		},
		PnsEhtmoidalRightAirFluid: {
			type: "boolean",
		},
		PnsEthmoidalRightBonyErosions: {
			type: "boolean",
		},
		PnsEthmoidalRightSeptae: {
			type: "boolean",
		},
		PnsEthmoidalRightSeptaeType: {
			type: "string",
			enum: ['Normal', 'Erosion'],
		},
		PnsEhtmoidalRightVarient: {
			type: "boolean",
		},
		PnsEhtmoidalRightVarientHaller: {
			type: "boolean",
		},
		PnsEhtmoidalRightVarientOnodi: {
			type: "boolean",
		},
		// left
		PnsEthmoidalLeft: {
			type: "boolean",
		},
		PnsEthmoidalLeftPneumatization: {
			type: 'boolean',
		},
		PnsEthmoidalLeftPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsEthmoidalLeftMusocalThicking: {
			type: 'boolean',
		},
		PnsEthmoidalLeftMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsEhtmoidalLeftAirFluid: {
			type: "boolean",
		},
		PnsEhtmoidalLeftHyperdense: {
			type: "boolean",
		},
		PnsEthmoidalLeftBonyErosions: {
			type: "boolean",
		},
		PnsEthmoidalLeftSeptae: {
			type: "boolean",
		},
		PnsEthmoidalLeftSeptaeType: {
			type: "string",
			enum: ['Normal', 'Erosion'],
		},
		PnsEhtmoidalLeftVarient: {
			type: "boolean",
		},
		PnsEhtmoidalLeftVarientHaller: {
			type: "boolean",
		},
		PnsEhtmoidalLeftVarientOnodi: {
			type: "boolean",
		},



		// (D) Sphenoid Sinuses******
		PnsSphenoid: {
			type: "boolean",
		},
		// right
		PnsSphenoidRight: {
			type: "boolean",
		},
		PnsSphenoidRightPneumatization: {
			type: 'boolean',
		},
		PnsSphenoidRightPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increased', 'reduced'],
		},
		PnsSphenoidRightMusocalThicking: {
			type: 'boolean',
		},
		PnsSphenoidRightMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsSphenoidRightAirFluid: {
			type: "boolean",
		},
		PnsSphenoidRightHyperdense: {
			type: "boolean",
		},
		PnsSphenoidRightEthmoid: {
			type: 'boolean',
		},
		PnsSphenoidRightEthmoidType: {
			type: "string",
			enum: ['patent', 'partial narrowing', 'complete occlusion']
		},
		PnsSphenoidRightBonyErosions: {
			type: "boolean",
		},
		// left
		PnsSphenoidLeft: {
			type: "boolean",
		},
		PnsSphenoidLeftPneumatization: {
			type: 'boolean',
		},
		PnsSphenoidLeftPneumatizationtype: {
			type: "string",
			enum: ['normal', 'increaesd', 'reduced'],
		},
		PnsSphenoidLeftMusocalThicking: {
			type: 'boolean',
		},
		PnsSphenoidLeftMusocalThickingType: {
			type: "string",
			enum: ['Mild', 'Moderate', 'Complete opacification of sinus']
		},
		PnsSphenoidLeftAirFluid: {
			type: "boolean",
		},
		PnsSphenoidLeftHyperdense: {
			type: "boolean",
		},
		PnsSphenoidLeftEthmoid: {
			type: 'boolean',
		},
		PnsSphenoidLeftEthmoidType: {
			type: "string",
			enum: ['patent', 'partial narrowing', 'complete occlusion']
		},
		PnsSphenoidLeftBonyErosions: {
			type: "boolean",
		},


		// Nasal Cavity**
		// (1) DNS*****
		NasalCavity: {
			type: "boolean",
		},
		DNSNasalCavity: {
			type: "boolean",
		},
		DNSNasalCavityType: {
			type: 'string',
			enum: ['With bony spur', 'Without bony spur'],
		},
		DNSNasalCavityWithWithoutType: {
			type: 'string',
			enum: ['right', 'left', "'S' shaped"],
		},
		// (2) Turbinates****
		TurbinatesNasalCavity: {
			type: "boolean",
		},
		// right
		TurbinatesNasalRight: {
			type: "boolean",
		},
		TurbinatesNasalRightMiddle: {
			type: "boolean",
		},
		TurbinatesNasalRightConcha: {
			type: 'boolean',
		},
		TurbinatesNasalRightConchaType: {
			type: 'string',
			enum: ['Lamellar', 'Complete'],
		},
		TurbinatesNasalRightHypertrophied: {
			type: 'boolean',
		},
		TurbinatesNasalRightParadoxical: {
			type: 'boolean',
		},
		TurbinatesNasalRightInferior: {
			type: "boolean",
		},
		TurbinatesNasalRightInferiorHypertrophied: {
			type: "boolean",
		},
		// left
		TurbinatesNasalLeft: {
			type: "boolean",
		},
		TurbinatesNasalLeftMiddle: {
			type: "boolean",
		},
		TurbinatesNasalLeftConcha: {
			type: 'boolean',
		},
		TurbinatesNasalLeftConchaType: {
			type: 'string',
			enum: ['lamellar', 'complete'],
		},
		TurbinatesNasalLeftHypertrophied: {
			type: 'boolean',
		},
		TurbinatesNasalLeftParadoxical: {
			type: 'boolean',
		},
		TurbinatesNasalLeftInferior: {
			type: "boolean",
		},
		TurbinatesNasalLeftInferiorHypertrophied: {
			type: "boolean",
		},

		// (3) Musocal thicking**
		NasalMusocalThicking: {
			type: "boolean",
		},
		NasalMusocalThickingRight: {
			type: "boolean",
		},
		NasalMusocalThickingLeft: {
			type: "boolean",
		},


		// (4) Miscellaneous ****
		Miscellaneous: {
			type: "boolean",
		},
		// 1
		MiscellaneousTypeKeros: {
			type: "boolean",
		},
		MiscellaneousTypeKerosType: {
			type: "string",
			enum: ["I", "II", "III"],
		},
		// 2
		MiscellaneousTypeOpticNerve: {
			type: "boolean",
		},
		MiscellaneousTypeOpticNerveType: {
			type: "string",
			enum: ["I", "II", "III", "IV"],
		},
		// 3
		MiscellaneousbonyPneumatization: {
			type: "boolean",
		},
		MiscellaneousbonyPneumatizationRight: {
			type: "boolean",
		},
		MiscellaneousbonyPneumatizationAnteriorRight: {
			type: "boolean",
		},
		MiscellaneousbonyPneumatizationPterygoidRight: {
			type: "boolean",
		},

		MiscellaneousbonyPneumatizationLeft: {
			type: "boolean",
		},
		MiscellaneousbonyPneumatizationAnteriorLeft: {
			type: "boolean",
		},
		MiscellaneousbonyPneumatizationPterygoidLeft: {
			type: "boolean",
		},
		// 4
		MiscellaneousAdenoid: {
			type: "boolean",
		},
		MiscellaneousAdenoidyesType: {
			type: "string",
			enum: ['with airway compromise', 'without airway compromise'],
		},

		// 5
		MiscellaneousMastoid: {
			type: "boolean",
		},

		// right
		MiscellaneousMastoidRight: {
			type: "boolean",
		},
		MiscellaneousMastoidRightSoftTissue: {
			type: "boolean",
		},
		MiscellaneousMastoidRightSoftTissueType: {
			type: "string",
			enum: ['partial', 'complete'],
		},

		// left
		MiscellaneousMastoidLeft: {
			type: "boolean",
		},
		MiscellaneousMastoidLeftSoftTissue: {
			type: "boolean",
		},
		MiscellaneousMastoidLeftSoftTissueType: {
			type: "string",
			enum: ['partial', 'complete'],
		},

		// 6
		MiscellaneousPosterior: {
			type: 'boolean',
		},
		MiscellaneousPosteriorRight: {
			type: 'boolean',
		},
		MiscellaneousPosteriorLeft: {
			type: "boolean",
		},
		MiscellaneousPosteriorStenosisRight: {
			type: "boolean",
		},
		MiscellaneousPosteriorStenosisLeft: {
			type: "boolean",
		},
		MiscellaneousPosteriorStenosisRightType: {
			type: 'string',
			enum: ['bony', 'membranous'],
		},
		MiscellaneousPosteriorStenosisLeftType: {
			type: 'string',
			enum: ['bony', 'membranous'],
		},

		// 7
		MiscellaneousOsteoma: {
			type: "boolean",
		},
		// right
		MiscellaneousOsteomaRight: {
			type: 'boolean',
		},
		MiscellaneousOsteomaRightFrontal: {
			type: "boolean",
		},
		MiscellaneousOsteomaRightEthmoidal: {
			type: "boolean",
		},
		MiscellaneousOsteomaRightMaxillary: {
			type: "boolean",
		},
		MiscellaneousOsteomaRightSphenoid: {
			type: "boolean",
		},
		MiscellaneousOsteomaRightText: {
			type: "string",
			description: "(Type in mm.)",
		},
		// left
		MiscellaneousOsteomaLeft: {
			type: 'boolean',
		},
		MiscellaneousOsteomaLeftFrontal: {
			type: "boolean",
		},
		MiscellaneousOsteomaLeftEthmoidal: {
			type: "boolean",
		},
		MiscellaneousOsteomaLeftMaxillary: {
			type: "boolean",
		},
		MiscellaneousOsteomaLeftSphenoid: {
			type: "boolean",
		},
		MiscellaneousOsteomaLeftText: {
			type: "string",
			description: "(Type in mm.)",
		},

		// 8
		MiscellaneousMucocele: {
			type: 'boolean',
		},
		MiscellaneousMucoceleRight: {
			type: 'boolean',
		},
		MiscellaneousMucoceleRightFrontal: {
			type: "boolean",
		},
		MiscellaneousMucoceleRightEthmoidal: {
			type: "boolean",
		},
		MiscellaneousMucoceleRightMaxillary: {
			type: "boolean",
		},
		MiscellaneousMucoceleRightSphenoid: {
			type: "boolean",
		},
		MiscellaneousMucoceleRightText: {
			type: "string",
			description: "(Type in mm.)",
		},
		// left
		MiscellaneousMucoceleLeft: {
			type: 'boolean',
		},
		MiscellaneousMucoceleLeftFrontal: {
			type: "boolean",
		},
		MiscellaneousMucoceleLeftEthmoidal: {
			type: "boolean",
		},
		MiscellaneousMucoceleLeftMaxillary: {
			type: "boolean",
		},
		MiscellaneousMucoceleLeftSphenoid: {
			type: "boolean",
		},
		MiscellaneousMucoceleLeftText: {
			type: "string",
			description: "(Type in mm.)",
		},

		// (4) Final diagnosis** 

	},
	required: ['MiscellaneousOsteomaRightText', 'MiscellaneousOsteomaLeftText', 'MiscellaneousMucoceleRightText', 'MiscellaneousMucoceleLeftText',
	'DNSNasalCavityType', 'DNSNasalCavityWithWithoutType', 'TurbinatesNasalLeftConchaType', 'TurbinatesNasalRightConchaType'
	, 'MiscellaneousTypeKerosType', 'MiscellaneousTypeOpticNerveType', 'MiscellaneousAdenoidyesType'],
};
const uischema = {
	type: "VerticalLayout",
	elements: [
		{
			type: "Group",
			elements: [
                {
					type: "HorizontalLayout",
					label: "",
					elements: [
						{
							type: "Control",
							label: "Name",
							scope: "#/properties/NameTextFR4",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR4",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR4",
						},
						{
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR4",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR4",
						},
					  
					],
		  
				  },
				  {
					type: "Control",
					label: "Gender",
					scope: "#/properties/GenderTextFR4",
					options: {
					  format: "radio",
					},
				  },
				// normal
				{
					type: "Control",
					label: "Normal?",
					scope: "#/properties/Normalsinus",
				},

				// Sinus***
				{
					type: "VerticalLayout",
					label: "",
					elements: [
						{
							type: "Control",
							label: "sinuses",
							scope: "#/properties/PnsSinuses",
						},
						{
							type: "Group",
							label: "",
							rule: {
								effect: "HIDE",
								condition: {
									scope: "#/properties/PnsSinuses",
									schema: {
										const: false,
									},
								},
							},
							elements: [
								{
									type: "VerticalLayout",
									label: "",
									elements: [
										// frontal
										{
											type: "Control",
											label: "Frontal Sinus?",
											scope: "#/properties/PnsFrontal",
										},
										{
											type: "Group",
											label: "",
											rule: {
												effect: "HIDE",
												condition: {
													scope: "#/properties/PnsFrontal",
													schema: {
														const: false,
													},
												},
											},
											elements: [
												{
													type: "HorizontalLayout",
													label: "",
													elements: [
														{
															type: "VerticalLayout",
															label: "",
															elements: [
																{
																	type: "Control",
																	label: "Right Sinus?",
																	scope: "#/properties/PnsFrontalRight",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsFrontalRight",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsFrontalRightPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsFrontalRightPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsFrontalRightPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsFrontalRightMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsFrontalRightMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsFrontalRightMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsFrontalRightHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsFrontalRightAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Fronto-Ethmoid recess",
																					scope: "#/properties/PnsFrontalRightFrontoEthmoid",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsFrontalRightFrontoEthmoid",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsFrontalRightFrontoEthmoidType",
																									options: {
																										format: "radio",
																									},
																								},

																							],
																						},
																					],
																				},
																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsFrontalRightBonyErosions",
																				},

																			],
																		},
																	],
																},
															],
														},
														{
															type: "VerticalLayout",
															label: "",
															elements: [

																{
																	type: "Control",
																	label: "Left Sinus?",
																	scope: "#/properties/PnsFrontalLeft",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsFrontalLeft",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsFrontalLeftPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsFrontalLeftPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsFrontalLeftPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsFrontalLeftMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsFrontalLeftMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsFrontalLeftMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsFrontalLeftHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsFrontalLeftAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Fronto-Ethmoid recess",
																					scope: "#/properties/PnsFrontalLeftFrontoEthmoid",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsFrontalLeftFrontoEthmoid",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsFrontalLeftFrontoEthmoidType",
																									options: {
																										format: "radio",
																									},
																								},

																							],
																						},
																					],
																				},
																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsFrontalLeftBonyErosions",
																				},

																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										// maxillary sinus
										{
											type: "Control",
											label: "Maxillary Sinus?",
											scope: "#/properties/PnsMaxillary",
										},
										{
											type: "Group",
											label: "",
											rule: {
												effect: "HIDE",
												condition: {
													scope: "#/properties/PnsMaxillary",
													schema: {
														const: false,
													},
												},
											},
											elements: [
												{
													type: "HorizontalLayout",
													label: "",
													elements: [
														{
															type: "VerticalLayout",
															label: "",
															elements: [
																{
																	type: "Control",
																	label: "Right Sinus?",
																	scope: "#/properties/PnsMaxillaryRight",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsMaxillaryRight",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsMaxillaryRightPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsMaxillaryRightPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsmaxillaryRightPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsMaxillaryRightMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsMaxillaryRightMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsMaxillaryRightMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsMaxillaryRightHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsMaxillaryRightAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Osteomeatal unit",
																					scope: "#/properties/PnsMaxillaryRightOsteomeatalUnit",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsMaxillaryRightOsteomeatalUnit",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsMaxillaryRightOsteomeatalUnitType",
																									options: {
																										format: "radio",
																									},
																								},

																							],
																						},
																					],
																				},
																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsMaxillaryRightBonyErosions",
																				},
																				{
																					type: "Control",
																					label: "Accessory ostia",
																					scope: "#/properties/PnsMaxillaryRightAccessoryOstia",
																				},

																			],
																		},
																	],
																},
															],
														},
														{
															type: "VerticalLayout",
															label: "",
															elements: [

																{
																	type: "Control",
																	label: "Left Sinus?",
																	scope: "#/properties/PnsMaxillaryLeft",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsMaxillaryLeft",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsMaxillaryLeftPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsMaxillaryLeftPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsmaxillaryLeftPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsMaxillaryLeftMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsMaxillaryLeftMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsMaxillaryLeftMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsMaxillaryLeftHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsMaxillaryLeftAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Osteomeatal unit",
																					scope: "#/properties/PnsMaxillaryLeftOsteomeatalUnit",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsMaxillaryLeftOsteomeatalUnit",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsMaxillaryLeftOsteomeatalUnitType",
																									options: {
																										format: "radio",
																									},
																								},

																							],
																						},
																					],
																				},
																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsMaxillaryLeftBonyErosions",
																				},
																				{
																					type: "Control",
																					label: "Accessory ostia",
																					scope: "#/properties/PnsMaxillaryLeftAccessoryOstia",
																				},

																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										// Ehtmoidal sinus
										{
											type: "Control",
											label: "Ethmoidal Sinus?",
											scope: "#/properties/PnsEthmoidal",
										},
										{
											type: "Group",
											label: "",
											rule: {
												effect: "HIDE",
												condition: {
													scope: "#/properties/PnsEthmoidal",
													schema: {
														const: false,
													},
												},
											},
											elements: [
												{
													type: "HorizontalLayout",
													label: "",
													elements: [
														{
															type: "VerticalLayout",
															label: "",
															elements: [
																{
																	type: "Control",
																	label: "Right Sinus?",
																	scope: "#/properties/PnsEthmoidalRight",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsEthmoidalRight",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsEthmoidalRightPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEthmoidalRightPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsEthmoidalRightPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsEthmoidalRightMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEthmoidalRightMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsEthmoidalRightMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsEhtmoidalRightHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsEhtmoidalRightAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsEthmoidalRightBonyErosions",
																				},

																				{
																					type: "Control",
																					label: "Saptae",
																					scope: "#/properties/PnsEthmoidalRightSeptae",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEthmoidalRightSeptae",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "HorizontalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsEthmoidalRightSeptaeType",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Variants",
																					scope: "#/properties/PnsEhtmoidalRightVarient",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEhtmoidalRightVarient",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "HorizontalLayout",
																							label: "",
																							elements: [
																								{
																									type: "VerticalLayout",
																									label: "",
																									elements: [
																										{
																											type: "Control",
																											label: "Haller cells",
																											scope: "#/properties/PnsEhtmoidalRightVarientHaller",
																										},
																										{
																											type: "Control",
																											label: "Onodi cells",
																											scope: "#/properties/PnsEhtmoidalRightVarientOnodi",
																										},
																									],
																								},
																							],
																						},
																					],
																				},




																			],
																		},
																	],
																},
															],
														},
														{
															type: "VerticalLayout",
															label: "",
															elements: [

																{
																	type: "Control",
																	label: "Left Sinus?",
																	scope: "#/properties/PnsEthmoidalLeft",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsEthmoidalLeft",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsEthmoidalLeftPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEthmoidalLeftPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsEthmoidalLeftPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsEthmoidalLeftMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEthmoidalLeftMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsEthmoidalLeftMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsEhtmoidalLeftHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsEhtmoidalLeftAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsEthmoidalLeftBonyErosions",
																				},

																				{
																					type: "Control",
																					label: "Saptae",
																					scope: "#/properties/PnsEthmoidalLeftSeptae",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEthmoidalLeftSeptae",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "HorizontalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsEthmoidalLeftSeptaeType",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Variants",
																					scope: "#/properties/PnsEhtmoidalLeftVarient",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsEhtmoidalLeftVarient",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "HorizontalLayout",
																							label: "",
																							elements: [
																								{
																									type: "VerticalLayout",
																									label: "",
																									elements: [
																										{
																											type: "Control",
																											label: "Haller cells",
																											scope: "#/properties/PnsEhtmoidalLeftVarientHaller",
																										},
																										{
																											type: "Control",
																											label: "Onodi cells",
																											scope: "#/properties/PnsEhtmoidalLeftVarientOnodi",
																										},
																									],
																								},
																							],
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										// Sphenoid Sinuses
										{
											type: "Control",
											label: "Sphenoid Sinus?",
											scope: "#/properties/PnsSphenoid",
										},
										{
											type: "Group",
											label: "",
											rule: {
												effect: "HIDE",
												condition: {
													scope: "#/properties/PnsSphenoid",
													schema: {
														const: false,
													},
												},
											},
											elements: [
												{
													type: "HorizontalLayout",
													label: "",
													elements: [
														{
															type: "VerticalLayout",
															label: "",
															elements: [
																{
																	type: "Control",
																	label: "Right Sinus?",
																	scope: "#/properties/PnsSphenoidRight",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsSphenoidRight",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsSphenoidRightPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsSphenoidRightPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsSphenoidRightPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsSphenoidRightMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsSphenoidRightMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsSphenoidRightMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsSphenoidRightHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsSphenoidRightAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Sphenoid-ethmoid recess",
																					scope: "#/properties/PnsSphenoidRightEthmoid",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsSphenoidRightEthmoid",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "HorizontalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsSphenoidRightEthmoidType",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsMaxillaryRightBonyErosions",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															type: "VerticalLayout",
															label: "",
															elements: [

																{
																	type: "Control",
																	label: "Left Sinus?",
																	scope: "#/properties/PnsSphenoidLeft",
																},
																{
																	type: "Group",
																	label: "",
																	rule: {
																		effect: "HIDE",
																		condition: {
																			scope: "#/properties/PnsSphenoidLeft",
																			schema: {
																				const: false,
																			},
																		},
																	},
																	elements: [
																		{
																			type: "VerticalLayout",
																			label: "",
																			elements: [
																				{
																					type: "Control",
																					label: "Pneumatization",
																					scope: "#/properties/PnsSphenoidLeftPneumatization",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsSphenoidLeftPneumatization",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsSphenoidLeftPneumatizationtype",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Musocal Thicking",
																					scope: "#/properties/PnsSphenoidLeftMusocalThicking",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsSphenoidLeftMusocalThicking",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "VerticalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsSphenoidLeftMusocalThickingType",
																									options: {
																										format: "radio",
																									},
																								},

																								{
																									type: "Control",
																									label: "Hyperdense Contents",
																									scope: "#/properties/PnsSphenoidLeftHyperdense",
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Air-Fluid levels",
																					scope: "#/properties/PnsSphenoidLeftAirFluid",
																				},

																				{
																					type: "Control",
																					label: "Sphenoid-ethmoid recess",
																					scope: "#/properties/PnsSphenoidLeftEthmoid",
																				},
																				{
																					type: "Group",
																					label: "",
																					rule: {
																						effect: "HIDE",
																						condition: {
																							scope: "#/properties/PnsSphenoidLeftEthmoid",
																							schema: {
																								const: false,
																							},
																						},
																					},
																					elements: [
																						{
																							type: "HorizontalLayout",
																							label: "",
																							elements: [
																								{
																									type: "Control",
																									label: "",
																									scope: "#/properties/PnsSphenoidLeftEthmoidType",
																									options: {
																										format: "radio",
																									},
																								},
																							],
																						},
																					],
																				},

																				{
																					type: "Control",
																					label: "Bony Erosions",
																					scope: "#/properties/PnsMaxillaryLeftBonyErosions",
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				// nasal cavity**


				{
					type: "Control",
					label: "Nasal Cavity",
					scope: "#/properties/NasalCavity",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/NasalCavity",
							schema: {
								const: false,
							},
						},
					},
					elements: [
						{
							type: "VerticalLayout",
							label: "",
							elements: [
								{
									type: "Control",
									label: "DNS",
									scope: "#/properties/DNSNasalCavity",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/DNSNasalCavity",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "VerticalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "",
													scope: "#/properties/DNSNasalCavityType",
													options: {
														format: "radio",
													},
												},
												{
													type: "Group",
													label: "",
													rule: {
														effect: "HIDE",
														condition: {
															scope: "#/properties/DNSNasalCavityType",
															schema: { enum: ["with bony spur", "", undefined] },
														},
													},
													elements: [
														{
															type: "VerticalLayout",
															label: "",
															elements: [
																{
																	type: "Control",
																	label: "",
																	scope: "#/properties/DNSNasalCavityWithWithoutType",
																	options: {
																		format: "radio",
																	},
																},
															],
														},
													],
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Turbinates",
									scope: "#/properties/TurbinatesNasalCavity",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/TurbinatesNasalCavity",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Right",
															scope: "#/properties/TurbinatesNasalRight",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/TurbinatesNasalRight",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Middle Turbinate",
																			scope: "#/properties/TurbinatesNasalRightMiddle",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/TurbinatesNasalRightMiddle",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "VerticalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "Concha bullosa",
																							scope: "#/properties/TurbinatesNasalRightConcha",
																						},
																						{
																							type: "Group",
																							label: "",
																							rule: {
																								effect: "HIDE",
																								condition: {
																									scope: "#/properties/TurbinatesNasalRightConcha",
																									schema: {
																										const: false,
																									},
																								},
																							},
																							elements: [
																								{
																									type: "VerticalLayout",
																									label: "",
																									elements: [
																										{
																											type: "Control",
																											label: "",
																											scope: "#/properties/TurbinatesNasalRightConchaType",
																											options: {
																												format: "radio",
																											},
																										},
																									],
																								},
																							],
																						},

																						{
																							type: "Control",
																							label: "Hypertrophied",
																							scope: "#/properties/TurbinatesNasalRightHypertrophied",
																						},

																						{
																							type: "Control",
																							label: "Paradoxical",
																							scope: "#/properties/TurbinatesNasalRightParadoxical",
																						},
																					],
																				},
																			],
																		},

																		{
																			type: "Control",
																			label: "Inferior turbinate",
																			scope: "#/properties/TurbinatesNasalRightInferior",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/TurbinatesNasalRightInferior",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "VerticalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "Hypertrophied?",
																							scope: "#/properties/TurbinatesNasalRightInferiorHypertrophied",
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Left",
															scope: "#/properties/TurbinatesNasalLeft",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/TurbinatesNasalLeft",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Middle Turbinate",
																			scope: "#/properties/TurbinatesNasalLeftMiddle",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/TurbinatesNasalLeftMiddle",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "VerticalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "Concha bullosa",
																							scope: "#/properties/TurbinatesNasalLeftConcha",
																						},
																						{
																							type: "Group",
																							label: "",
																							rule: {
																								effect: "HIDE",
																								condition: {
																									scope: "#/properties/TurbinatesNasalLeftConcha",
																									schema: {
																										const: false,
																									},
																								},
																							},
																							elements: [
																								{
																									type: "VerticalLayout",
																									label: "",
																									elements: [
																										{
																											type: "Control",
																											label: "",
																											scope: "#/properties/TurbinatesNasalLeftConchaType",
																											options: {
																												format: "radio",
																											},
																										},
																									],
																								},
																							],
																						},

																						{
																							type: "Control",
																							label: "Hypertrophied",
																							scope: "#/properties/TurbinatesNasalLeftHypertrophied",
																						},

																						{
																							type: "Control",
																							label: "Paradoxical",
																							scope: "#/properties/TurbinatesNasalLeftParadoxical",
																						},
																					],
																				},
																			],
																		},

																		{
																			type: "Control",
																			label: "Inferior turbinate",
																			scope: "#/properties/TurbinatesNasalLeftInferior",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/TurbinatesNasalLeftInferior",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "VerticalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "Hypertrophied?",
																							scope: "#/properties/TurbinatesNasalLeftInferiorHypertrophied",
																						},
																					],
																				},
																			],
																		},


																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Musocal Thicking",
									scope: "#/properties/NasalMusocalThicking",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/NasalMusocalThicking",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "Right",
													scope: "#/properties/NasalMusocalThickingRight",
												},
												{
													type: "Control",
													label: "Left",
													scope: "#/properties/NasalMusocalThickingLeft",
												},
											],
										},
									],
								},
							],
						},
					],
				},

				// Miscellaneous**
				{
					type: "Control",
					label: "Miscellaneous",
					scope: "#/properties/Miscellaneous",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/Miscellaneous",
							schema: {
								const: false,
							},
						},
					},
					elements: [
						{
							type: "VerticalLayout",
							label: "",
							elements: [
								{
									type: "Control",
									label: "Keros Types*",
									scope: "#/properties/MiscellaneousTypeKeros",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousTypeKeros",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "VerticalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "",
													scope: "#/properties/MiscellaneousTypeKerosType",
													options: {
														format: "radio",
													},
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Type of optic nerve*",
									scope: "#/properties/MiscellaneousTypeOpticNerve",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousTypeOpticNerve",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "VerticalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "",
													scope: "#/properties/MiscellaneousTypeOpticNerveType",
													options: {
														format: "radio",
													},
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Bony Pneumatization",
									scope: "#/properties/MiscellaneousbonyPneumatization",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousbonyPneumatization",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Right",
															scope: "#/properties/MiscellaneousbonyPneumatizationRight",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousbonyPneumatizationRight",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Anterior clinoid process",
																			scope: "#/properties/MiscellaneousbonyPneumatizationAnteriorRight",
																		},
																		{
																			type: "Control",
																			label: "Pterygoid Plate",
																			scope: "#/properties/MiscellaneousbonyPneumatizationPterygoidRight",
																		},
																	],
																},
															],
														},
													],
												},
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Left",
															scope: "#/properties/MiscellaneousbonyPneumatizationLeft",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousbonyPneumatizationLeft",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Anterior clinoid process",
																			scope: "#/properties/MiscellaneousbonyPneumatizationAnteriorLeft",
																		},
																		{
																			type: "Control",
																			label: "Pterygoid plate",
																			scope: "#/properties/MiscellaneousbonyPneumatizationPterygoidLeft",
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Adenoid hypertrophy*",
									scope: "#/properties/MiscellaneousAdenoid",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousAdenoid",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "",
													scope: "#/properties/MiscellaneousAdenoidyesType",
													options: {
														format: "radio",
													},
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Mastoid",
									scope: "#/properties/MiscellaneousMastoid",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousMastoid",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "right",
															scope: "#/properties/MiscellaneousMastoidRight",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousMastoidRight",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Soft tissue density",
																			scope: "#/properties/MiscellaneousMastoidRightSoftTissue",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/MiscellaneousMastoidRightSoftTissue",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "HorizontalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "",
																							scope: "#/properties/MiscellaneousMastoidRightSoftTissueType",
																							options: {
																								format: "radio",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Left",
															scope: "#/properties/MiscellaneousMastoidLeft",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousMastoidLeft",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Soft tissue density",
																			scope: "#/properties/MiscellaneousMastoidLeftSoftTissue",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/MiscellaneousMastoidLeftSoftTissue",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "HorizontalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "",
																							scope: "#/properties/MiscellaneousMastoidLeftSoftTissueType",
																							options: {
																								format: "radio",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Posterior chonana",
									scope: "#/properties/MiscellaneousPosterior",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousPosterior",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "right",
															scope: "#/properties/MiscellaneousPosteriorRight",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousPosteriorRight",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Stenosis",
																			scope: "#/properties/MiscellaneousPosteriorStenosisRight",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/MiscellaneousPosteriorStenosisRight",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "HorizontalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "",
																							scope: "#/properties/MiscellaneousPosteriorStenosisRightType",
																							options: {
																								format: "radio",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Left",
															scope: "#/properties/MiscellaneousPosteriorLeft",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousPosteriorLeft",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "VerticalLayout",
																	label: "",
																	elements: [
																		{
																			type: "Control",
																			label: "Stenosis",
																			scope: "#/properties/MiscellaneousPosteriorStenosisLeft",
																		},
																		{
																			type: "Group",
																			label: "",
																			rule: {
																				effect: "HIDE",
																				condition: {
																					scope: "#/properties/MiscellaneousPosteriorStenosisLeft",
																					schema: {
																						const: false,
																					},
																				},
																			},
																			elements: [
																				{
																					type: "HorizontalLayout",
																					label: "",
																					elements: [
																						{
																							type: "Control",
																							label: "",
																							scope: "#/properties/MiscellaneousPosteriorStenosisLeftType",
																							options: {
																								format: "radio",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Osteoma",
									scope: "#/properties/MiscellaneousOsteoma",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousOsteoma",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Right",
															scope: "#/properties/MiscellaneousOsteomaRight",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousOsteomaRight",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "HorizontalLayout",
																	label: "",
																	elements: [

																		{
																			type: "Control",
																			label: "Frontal",
																			scope: "#/properties/MiscellaneousOsteomaRightFrontal",
																		},
																		{
																			type: "Control",
																			label: "Ethmoidal",
																			scope: "#/properties/MiscellaneousOsteomaRightEthmoidal",
																		},
																		{
																			type: "Control",
																			label: "Maxillary",
																			scope: "#/properties/MiscellaneousOsteomaRightMaxillary",
																		},
																		{
																			type: "Control",
																			label: "Sphenoid",
																			scope: "#/properties/MiscellaneousOsteomaRightSphenoid",
																		},
																		{
																			type: "Control",
																			label: "measurements?",
																			scope: "#/properties/MiscellaneousOsteomaRightText",
																		},

																	],
																},
															],
														},
													],
												},
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Left",
															scope: "#/properties/MiscellaneousOsteomaLeft",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousOsteomaLeft",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "HorizontalLayout",
																	label: "",
																	elements: [

																		{
																			type: "Control",
																			label: "Frontal",
																			scope: "#/properties/MiscellaneousOsteomaLeftFrontal",
																		},
																		{
																			type: "Control",
																			label: "Ethmoidal",
																			scope: "#/properties/MiscellaneousOsteomaLeftEthmoidal",
																		},
																		{
																			type: "Control",
																			label: "Maxillary",
																			scope: "#/properties/MiscellaneousOsteomaLeftMaxillary",
																		},
																		{
																			type: "Control",
																			label: "Sphenoid",
																			scope: "#/properties/MiscellaneousOsteomaLeftSphenoid",
																		},
																		{
																			type: "Control",
																			label: "measurements?",
																			scope: "#/properties/MiscellaneousOsteomaLeftText",
																		},

																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Mucocele",
									scope: "#/properties/MiscellaneousMucocele",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/MiscellaneousMucocele",
											schema: {
												const: false,
											},
										},
									},
									elements: [
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Right",
															scope: "#/properties/MiscellaneousMucoceleRight",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousMucoceleRight",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "HorizontalLayout",
																	label: "",
																	elements: [

																		{
																			type: "Control",
																			label: "Frontal",
																			scope: "#/properties/MiscellaneousMucoceleRightFrontal",
																		},
																		{
																			type: "Control",
																			label: "Ethmoidal",
																			scope: "#/properties/MiscellaneousMucoceleRightEthmoidal",
																		},
																		{
																			type: "Control",
																			label: "Maxillary",
																			scope: "#/properties/MiscellaneousMucoceleRightMaxillary",
																		},
																		{
																			type: "Control",
																			label: "Sphenoid",
																			scope: "#/properties/MiscellaneousMucoceleRightSphenoid",
																		},
																		{
																			type: "Control",
																			label: "measurements?",
																			scope: "#/properties/MiscellaneousMucoceleRightText",
																		},

																	],
																},
															],
														},
													],
												},
												{
													type: "VerticalLayout",
													label: "",
													elements: [
														{
															type: "Control",
															label: "Left",
															scope: "#/properties/MiscellaneousMucoceleLeft",
														},
														{
															type: "Group",
															label: "",
															rule: {
																effect: "HIDE",
																condition: {
																	scope: "#/properties/MiscellaneousMucoceleLeft",
																	schema: {
																		const: false,
																	},
																},
															},
															elements: [
																{
																	type: "HorizontalLayout",
																	label: "",
																	elements: [

																		{
																			type: "Control",
																			label: "Frontal",
																			scope: "#/properties/MiscellaneousMucoceleLeftFrontal",
																		},
																		{
																			type: "Control",
																			label: "Ethmoidal",
																			scope: "#/properties/MiscellaneousMucoceleLeftEthmoidal",
																		},
																		{
																			type: "Control",
																			label: "Maxillary",
																			scope: "#/properties/MiscellaneousMucoceleLeftMaxillary",
																		},
																		{
																			type: "Control",
																			label: "Sphenoid",
																			scope: "#/properties/MiscellaneousMucoceleLeftSphenoid",
																		},
																		{
																			type: "Control",
																			label: "measurements?",
																			scope: "#/properties/MiscellaneousMucoceleLeftText",
																		},

																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},


							],
						},
					],
				},
			],
		},
	],
};

const styleContextValue = {
	styles: [
		{
			name: "control.input",
			classNames: ["custom-input"],
		},
		{
			name: "control.select",
			classNames: ["select", "select-box"],
		},
		{
			name: "array.button",
			classNames: ["custom-array-button"],
		},
	],
};
// export default class Form4 extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			data: props.data,
// 			schema: _schema,
// 		};
// 	}

// 	componentDidUpdate() { }

// 	handleForm(data) {
// 		const { schema } = this.state;
// 		this.setState(data, () => {
// 			this.props.handleChange(data, false);
// 		});
// 	}

// 	render() {
// 		const { data, schema } = this.state;
// 		return (
// 			<JsonForms
// 				schema={schema}
// 				uischema={uischema}
// 				data={data}
// 				renderers={materialRenderers}
// 				cells={materialCells}
// 				ValidationMode="ValidateAndShow"
// 				onChange={({ data, _errors }) => this.handleForm(data)}
// 			/>
// 		);
// 	}
// }
//Auto data update on 23/06/23
export default class Form4 extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		data: props.data,
		schema: _schema,
		patients: [],
		query: '',
	  };

	  this.search = this.search.bind(this);
	  this.setQuery = this.setQuery.bind(this);
	  this.patientSelected = this.patientSelected.bind(this);
	}
  
	componentDidUpdate() { }
  
	handleForm(data) {
	  const { schema } = this.state;
	  this.setState({data: data}, () => {
		this.props.handleChange(data, false);
	  });
	  this.forceUpdate();
	}

	setQuery(e) {
		this.setState({query: e.target.value})
	}

	search() {
		fetch(`/patientdata?query=${this.state.query}`).then((r) => {
			if (r.ok) {
				return r.json();
			}
		}).then((d) => {
			let patients = [];
			d.forEach((p) => {
				patients.push(p.fields);
			});
			//this.setState(patients);
			this.setState({patients: patients});
			//this.forceUpdate();
		}).catch((e) => {
			console.error(e);
		})
	}

	patientSelected(e) {
		const {data} = this.state;
		const pid = e.target.value;
		const patient = this.state.patients.find((p) => {
			return p.PatientId === pid;
		});
		let formData = {
			...data,
			GenderTextFR4: patient.gender,
			AgeTextFR4: patient.age,
			NameTextFR4: patient.PatientName,
			IDTextFR4: patient.PatientId,
			TestDateTextFR4: patient.TestDate,
			ReportDateTextFR4: patient.ReportDate
		}
		this.handleForm(formData);
	}
  
	render() {
	  const { data, schema, patients } = this.state;
	  return (
		<div>
			<input type="text" placeholder="Enter name or Patient ID" onChange={this.setQuery}/> <button onClick={this.search}>Search</button>
			{patients.length > 0 &&
				<select id="patients" onChange={this.patientSelected}>
					<option value="-1">-- Select Patient --</option>
					{patients.map((p) => {
						return <option value={p.PatientId} key={p.PatientId}>{p.PatientName} | ID: {p.PatientId}</option>;
					})};	
				</select>
			}
			<JsonForms
			schema={schema}
			uischema={uischema}
			data={data}
			renderers={materialRenderers}
			cells={materialCells}
			ValidationMode="ValidateAndShow"
			onChange={({ data, _errors }) => this.handleForm(data)}
			/>
		</div>
	  );
	}
}
