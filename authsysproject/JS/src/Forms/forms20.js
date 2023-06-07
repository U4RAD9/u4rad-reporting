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
		NameTextFR20: {
			type: "string",
		},
		IDTextFR20: {
			type: "string",
		},
		AgeTextFR20: {
			type: "string",
		},
		GenderTextFR20: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		ECGNormal: {
			type: "boolean",
		},
		NormalText: {
			type: "string",
			"description": "Type between 0-300",
		},
		Rhythm: {
			type: "boolean",
		},
		NormalSinusRhythm: {
			type: "boolean",
		},
		SinusTachycardia: {
			type: "boolean",
		},
		SinusBradycardia: {
			type: "boolean",
		},
		SinusRhythmWithIncompleteRBBB: {
			type: "boolean",
		},
		SinusRhythm: {
			type: "boolean",
		},

		 
		Axis: {
			type: "boolean",
		},
		LeftAxis: {
			type: "boolean",
		},
		RightAxis: {
			type: "boolean",
		},
		NormalAxis: {
			type: "boolean",
		},
		ExtremeAxis: {
			type: "boolean",
		},
		 
		 
		QRSBroad: {
			type: "boolean",
		},
		QRSRightBBB: {
			type: "boolean",
		},
		QRSBroadType: {
			type: "string",
			enum: ['type 1', 'type 2'],
		},
		TInversion: {
			type: "boolean",
		},
		TInversionLateralLeads: {
			type: "boolean",
		},
		TInversionInferiorLeads: {
			type: "boolean",
		},
		TInversionText: {
			type: "string",
		},
		 
		STFattening: {
			type: "boolean",
		},
		STFlatteningInferior: {
			type: "boolean",
		},
		STFlatteningLateral: {
			type: "boolean",
		},
		STFlatteningText: {
			type: "string",
		},
		STFlatteningTInversion: {
			type: "boolean", 
		},
		STFlatteningTInversionText: {
			type: "string",
		},

		ECGTEXT: {
			type: "string",
		},




	},
	required: [],
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
							scope: "#/properties/NameTextFR20",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR20",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR20",
						},
					],
				},

				{
					type: "Control",
					label: "Gender",
					scope: "#/properties/GenderTextFR20",
					options: {
						format: "radio",
					},
				},

				// Normal******************
				{
					type: "Control",
					label: "What is the Rate?",
					scope: "#/properties/ECGNormal",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/ECGNormal",
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
									"type": "Control",
									"scope": "#/properties/NormalText",
									"options": {
										"slider": true
									}
								},
							],
						},
					],
				},


				// Abnormal****************
				// Rhythm
				{
					type: "Control",
					label: "What is the Rhythm?",
					scope: "#/properties/Rhythm",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/Rhythm",
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
									label: "Normal Sinus Rhythm",
									scope: "#/properties/NormalSinusRhythm",
								},
								{
									type: "Control",
									label: "Sinus Tachycardia",
									scope: "#/properties/SinusTachycardia",
								},
								{
									type: "Control",
									label: "Sinus Tachycardia",
									scope: "#/properties/SinusBradycardia",
								},
								{
									type: "Control",
									label: "Sinus Rhythm With Incomplete RBBB",
									scope: "#/properties/SinusRhythmWithIncompleteRBBB",
								},
								{
									type: "Control",
									label: "Sinus Rhythm",
									scope: "#/properties/SinusRhythm",
								},
								 
							],
						},
					],
				},

				// Axis
				{
					type: "Control",
					label: "What is the Axis?",
					scope: "#/properties/Axis",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/Axis",
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
									label: "Left Axis Deviation",
									scope: "#/properties/LeftAxis",
								},
								{
									type: "Control",
									label: "Right Axis Deviation",
									scope: "#/properties/RightAxis",
								},
								{
									type: "Control",
									label: "Normal Axis Deviation",
									scope: "#/properties/NormalAxis",
								},
								{
									type: "Control",
									label: "Extreme Axis",
									scope: "#/properties/ExtremeAxis",
								},
								 
							],
						},
					],
				},

				 

				// QRS Broad
				{
					type: "Control",
					label: "Is QRS Broad?",
					scope: "#/properties/QRSBroad",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/QRSBroad",
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
									"type": "Control",
									"scope": "#/properties/QRSBroadType",
									"options": {
										format: "radio",
									},		
								},	 
								{
									type: "Control",
									label: "Rightbbb",
									scope: "#/properties/QRSRightBBB",
								}, 
							],
						},
					],
				},

				// T-Inversion
				{
					type: "Control",
					label: "Is There T-Inversion?",
					scope: "#/properties/TInversion",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/TInversion",
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
									label: "T-Inversion Lateral Leads",
									scope: "#/properties/TInversionLateralLeads",
								},
								{
									type: "Control",
									label: "T-Inversion Inferior Leads",
									scope: "#/properties/TInversionInferiorLeads",
								},
								{
									"type": "Control",
									"scope": "#/properties/TInversionText",
									"options": {
										"slider": true
									}
								}
							],
						},
					],
				},

				// ST-Flattning
				{
					type: "Control",
					label: "ST-Flattening?",
					scope: "#/properties/STFattening",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/STFattening",
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
									label: "ST Flattening in Inferior Leads",
									scope: "#/properties/STFlatteningInferior",
								},
								{
									type: "Control",
									label: "ST Flattening in Lateral Leads",
									scope: "#/properties/STFlatteningLateral",
								},
								{
									"type": "Control",
									"scope": "#/properties/STFlatteningText",
									"options": {
										"slider": true
									}
								}
							],
						},
					],
				},

				// ST-Depression
				{
					type: "Control",
					label: "ST-Flattening & T-Inversion",
					scope: "#/properties/STFlatteningTInversion",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/STFlatteningTInversion",
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
									"type": "Control",
									"scope": "#/properties/STFlatteningTInversionText",
									"options": {
										"slider": true
									}	
								},	 
							],
						},
					],
				},
			],
		},
	],
};
export default class Form20 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			schema: _schema,
		};
	}

	componentDidUpdate() { }

	handleForm(data) {
		const { schema } = this.state;
		this.setState(data, () => {
			this.props.handleChange(data, false);
		});
	}

	render() {
		const { data, schema } = this.state;
		return (
			<JsonForms
				schema={schema}
				uischema={uischema}
				data={data}
				renderers={materialRenderers}
				cells={materialCells}
				ValidationMode="ValidateAndShow"
				onChange={({ data, _errors }) => this.handleForm(data)}
			/>
		);
	}
}
