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
		TestDateTextFR20: {
			type: "string",
		},
        ReportDateTextFR20: {
			type: "string",
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
						{
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR20",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR20",
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
// export default class Form20 extends Component {
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
//Auto data update by Aman Gupta on 23/06/23
export default class Form20 extends Component {
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
			GenderTextFR20: patient.gender,
			AgeTextFR20: patient.age,
			NameTextFR20: patient.PatientName,
			IDTextFR20: patient.PatientId,
			TestDateTextFR20: patient.TestDate,
			ReportDateTextFR20: patient.ReportDate
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
