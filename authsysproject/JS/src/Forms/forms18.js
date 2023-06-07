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
		NameTextFR18: {
			type: "string",
		},
		IDTextFR18: {
			type: "string",
		},
		AgeTextFR18: {
			type: "string",
		},
		GenderTextFR18: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		Appendix: {
			type: "boolean",
		},
		AppendixDialated: {
			type: "boolean",
		},
		AppendixDialatedText: {
			type: 'string',
			description: "type in mm.",
		},

		AppendixDialatedPeriappendicealFatStranding: {
			type: "boolean",
		},

		AppendixDialatedPeriappendicealFluidCollection: {
			type: "boolean",
		},
		AppendixDialatedPeriappendicealFluidType: {
			type: "boolean",
		},
		AppendixDialatedPeriappendicealPeriphereally: {
			type: "boolean",
		},
		AppendixDialatedPeriappendicealPeriphereallyText: {
			type: "string",
		},
		AppendixDialatedPeriappendicealPeriphereallyText1: {
			type: "string",
		},


		AppendixDialatedPeriappendiceal: {
			type: "boolean",
		},
		AppendixDialatedMesentericNodes: {
			type: "boolean",
		},
		AppendixDialatedMesentericNodesType: {
			type: "string",
			enum: ['Few', 'Multiple', 'Subcentimetre size', 'Enlarged'],
		},
		AppendixDialatedMesentericNodesEnlarged: {
			type: "string",
		},

		AppendixDialatedAppendicularMass: {
			type: "boolean",
		},
		AppendixDialatedAppendicularMassWithAdhesion: {
			type: "boolean",
		},
		AppendixDialatedAppendicularMassWithAdhesionText: {
			type: 'string',
			description: "Type in cm.",
		},
		AppendixDialatedAppendicularMassWithAdhesionText1: {
			type: 'string',
			description: "Type in cm.",
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
							scope: "#/properties/NameTextFR18",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR18",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR18",
						},
					],

				},
				{
					type: "Control",
					label: "Gender",
					scope: "#/properties/GenderTextFR18",
					options: {
						format: "radio",
					},
				},
				// Appendix
				{
					type: "Control",
					label: "appendix",
					scope: "#/properties/Appendix",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/Appendix",
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
									label: "Dialated",
									scope: "#/properties/AppendixDialated",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialated",
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
													label: "measurements?",
													scope: "#/properties/AppendixDialatedText",
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
									label: "Periappendiceal fat stranding",
									scope: "#/properties/AppendixDialatedPeriappendicealFatStranding",
								},

								{
									type: "Control",
									label: "Periappendiceal flood collection",
									scope: "#/properties/AppendixDialatedPeriappendicealFluidCollection",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialatedPeriappendicealFluidCollection",
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
													label: "free fluid",
													scope: "#/properties/AppendixDialatedPeriappendicealFluidType",
												},
												{
													type: "Control",
													label: "Peripherally enhancing Localized fluid collection",
													scope: "#/properties/AppendixDialatedPeriappendicealPeriphereally",
												},
												{
													type: "Group",
													label: "",
													rule: {
														effect: "HIDE",
														condition: {
															scope: "#/properties/AppendixDialatedPeriappendicealPeriphereally",
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
																	label: "measurements?",
																	scope: "#/properties/AppendixDialatedPeriappendicealPeriphereallyText",
																	options: {
																		format: "radio",
																	},
																},
																{
																	type: "Control",
																	label: "measurements?",
																	scope: "#/properties/AppendixDialatedPeriappendicealPeriphereallyText1",
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
									label: "Periappendiceal Extra luminal air pockets",
									scope: "#/properties/AppendixDialatedPeriappendiceal",
								},

								{
									type: "Control",
									label: "Mesenteric nodes",
									scope: "#/properties/AppendixDialatedMesentericNodes",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialatedMesentericNodes",
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
													scope: "#/properties/AppendixDialatedMesentericNodesType",
													options: {
														format: "radio",
													},
												},
												{
													type: "Control",
													label: "size?",
													scope: "#/properties/AppendixDialatedMesentericNodesEnlarged",
													rule: {
														effect: "SHOW",
														condition: {
															scope: "#/properties/AppendixDialatedMesentericNodesType",
															schema: {
																const: "enlarged",
															},
														},
													},
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Appendicular mass formation",
									scope: "#/properties/AppendixDialatedAppendicularMass",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialatedAppendicularMass",
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
													label: "With adhesion to distal ileal loops and ceacum",
													scope: "#/properties/AppendixDialatedAppendicularMassWithAdhesion",
												},
											],
										},
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "measurements?",
													scope: "#/properties/AppendixDialatedAppendicularMassWithAdhesionText",
													options: {
														format: "radio",
													},
												},
												{
													type: "Control",
													label: "measurements?",
													scope: "#/properties/AppendixDialatedAppendicularMassWithAdhesionText1",
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
};
export default class Form3 extends Component {
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
