import React, { Component } from "react";
import { Generate } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
//import {vanillaRenderers, vanillaCells, JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';
import {
  materialCells, materialRenderers
} from "@jsonforms/material-renderers";

const _schema = {
  type: "object",
  properties: {
    NameTextFR12: {
      type: "string",
    },
    IDTextFR12: {
      type: "string",
    },
    AgeTextFR12: {
      type: "string",
    },
    GenderTextFR12: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    TestDateTextFR12: {
			type: "string",
		},
    ReportDateTextFR12: {
			type: "string",
		},
    XrayType: {
      type: "string",
      enum: ['AP', 'AXIAL', 'LATERAL'],
    },

    Normal: {
      type: "boolean",
    },
    NormalHCS: {
      type: "boolean",
    },
    NormalLA: {
      type: "boolean",
    },
    NormalR: {
      type: "boolean",
    },
    NormalS: {
      type: "boolean",
    },

    fracture: {
      type: "boolean",
    },
    humerus: {
      type: "boolean",
    },
    linearFracture: {
      type: "boolean",
    },

    LinearHead: {
      type: "boolean",
    },
    LinearNeck: {
      type: "boolean",
    },
    LinearProximal: {
      type: "boolean",
    },

    comminutedFracture: {
      type: "boolean",
    },

    comminutedHead: {
      type: "boolean",
    },
    comminutedNeck: {
      type: "boolean",
    },
    comminutedProximal: {
      type: "boolean",
    },

    obliqueFracture: {
      type: "boolean",
    },

    obliqueHead: {
      type: "boolean",
    },
    obliqueNeck: {
      type: "boolean",
    },
    obliqueProximal: {
      type: "boolean",
    },

    clavicle: {
      type: "boolean"
    },
    clavicleMidShaft: {
      type: "boolean",
    },
    clavicleProximalShaft: {
      type: "boolean",
    },
    clavicleDistalShaft: {
      type: "boolean",
    },

    scapula: {
      type: "boolean",
    },
    scapulaBody: {
      type: "boolean",
    },
    scapulaSpine: {
      type: "boolean",
    },
    scapulaGlenoid: {
      type: "boolean",
    },
    ribText: {
      type: "string",
    },

    dislocation: {
      type: "boolean",
    },

    acromioclavicularJoint: {
      type: "boolean",
    },
    acromioclavicularJointType: {
      type: 'string',
      enum: ['dislocated', 'subluxated'],
    },
    shoulderJoint: {
      type: "boolean",
    },
    shoulderJointType: {
      type: "string",
      enum: ['anterior', 'posterior', 'inferior'],
    },

    degenerative: {
      type: "boolean",
    },

    glenohumeralJoint: {
      type: "boolean",
    },
    acromioclavicularJoint: {
      type: "boolean",
    },
    glenohumeralJointType: {
      type: "string",
      enum: ['Mild', 'Moderate', 'Severe']
    },
    glenohumeralJointJointSpace: {
      type: "boolean",
    },
    glenohumeralJointSubchondralCyst: {
      type: "boolean",
    },
    glenohumeralJointMarginalOsteophytes: {
      type: "boolean",
    },
    glenohumeralJointIrregularArticular: {
      type: "boolean",
    },
    glenohumeralJointSclerosis: {
      type: "boolean",
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
              scope: "#/properties/NameTextFR12",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR12",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR12",
            },
            {
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR12",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR12",
						},
          ],

        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR12",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "X-Ray Type",
          scope: "#/properties/XrayType",
          options: {
            format: "radio",
          },
        },

        {
          type: "Control",
          label: "Normal Right-Shoulder?",
          scope: "#/properties/Normal"
        },

        //Fracture ***************************************************
        {
          type: "Control",
          label: "Fracture?",
          scope: "#/properties/fracture",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/fracture",
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
                  label: 'Humerus?',
                  scope: "#/properties/humerus",
                },
                // Humerus Type**********************
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/humerus",
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
                          label: 'Linear',
                          scope: "#/properties/linearFracture",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/linearFracture",
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
                                  label: "Head?",
                                  scope: "#/properties/LinearHead",
                                },
                                {
                                  type: "Control",
                                  label: "Neck?",
                                  scope: "#/properties/LinearNeck",
                                },
                                {
                                  type: "Control",
                                  label: "Proximal Diaphysis?",
                                  scope: "#/properties/LinearProximal",
                                },
                              ],
                            },
                          ],
                        },

                        {
                          type: "Control",
                          label: 'Comminuted Fracture',
                          scope: "#/properties/comminutedFracture",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/comminutedFracture",
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
                                  label: "Head?",
                                  scope: "#/properties/comminutedHead",
                                },
                                {
                                  type: "Control",
                                  label: "Neck?",
                                  scope: "#/properties/comminutedNeck",
                                },
                                {
                                  type: "Control",
                                  label: "Proximal Diaphysis?",
                                  scope: "#/properties/comminutedProximal",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "Control",
                          label: 'Oblique fracture',
                          scope: "#/properties/obliqueFracture",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/obliqueFracture",
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
                                  label: "Head?",
                                  scope: "#/properties/obliqueHead",
                                },
                                {
                                  type: "Control",
                                  label: "Neck?",
                                  scope: "#/properties/obliqueNeck",
                                },
                                {
                                  type: "Control",
                                  label: "Proximal Diaphysis?",
                                  scope: "#/properties/obliqueProximal",
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
                  label: 'Clavicle?',
                  scope: "#/properties/clavicle",
                },
                // Clavicle Type *********************
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/clavicle",
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
                          label: "Proximal One Third",
                          scope: "#/properties/clavicleMidShaft",
                        },
                        {
                          type: "Control",
                          label: "Middle One Third",
                          scope: "#/properties/clavicleProximalShaft",
                        },
                        {
                          type: "Control",
                          label: "Distal One Third",
                          scope: "#/properties/clavicleDistalShaft",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "Control",
                  label: 'Scapula',
                  scope: "#/properties/scapula",
                },
                // Scapula Type*************************************
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/scapula",
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
                          label: "Body",
                          scope: "#/properties/scapulaBody",
                        },
                        {
                          type: "Control",
                          label: "Spine",
                          scope: "#/properties/scapulaSpine",
                        },
                        {
                          type: "Control",
                          label: "Glenoid",
                          scope: "#/properties/scapulaGlenoid",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "HorizontalLayout",
                  label: "",
                  elements: [
                    {
                      type: "Control",
                      label: "Rib Fracture?",
                      scope: "#/properties/ribText",
                    },
                  ],
                },
              ],
            },
          ],
        },

        // Dislocation***************************************
        {
          type: "Control",
          label: "Dislocation?",
          scope: "#/properties/dislocation",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/dislocation",
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
                  label: 'Acromioclavicular joint?',
                  scope: "#/properties/acromioclavicularJoint",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/acromioclavicularJoint",
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
                          scope: "#/properties/acromioclavicularJointType",
                          options: {
                            format: "radio",
                          },
                        },
                      ],
                    },
                  ],
                },
                // ShoulderJoint Left Type*******************************************
                {
                  type: "Control",
                  label: 'Shoulder joint?',
                  scope: "#/properties/shoulderJoint",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/shoulderJoint",
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
                          scope: "#/properties/shoulderJointType",
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



        // Degenerative*************************************
        {
          type: "Control",
          label: "Degenerative?",
          scope: "#/properties/degenerative",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/degenerative",
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
                  label: 'Glenohumeral Joint?',
                  scope: "#/properties/glenohumeralJoint",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/glenohumeralJoint",
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
                          scope: "#/properties/glenohumeralJointType",
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
                              scope: "#/properties/glenohumeralJointType",
                              "schema": { enum: ["mild", "", undefined] }
                            },
                          },


                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "HorizontalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Joint Space",
                                      scope: "#/properties/glenohumeralJointJointSpace",
                                    },
                                    {
                                      type: "Control",
                                      label: "Subchnodral Cyst",
                                      scope: "#/properties/glenohumeralJointSubchondralCyst",
                                    },
                                    {
                                      type: "Control",
                                      label: "Marginal Osteophytes",
                                      scope: "#/properties/glenohumeralJointMarginalOsteophytes",
                                    },
                                    {
                                      type: "Control",
                                      label: "Irregular Articular",
                                      scope: "#/properties/glenohumeralJointIrregularArticular",
                                    },
                                    {
                                      type: "Control",
                                      label: "Sclerosis",
                                      scope: "#/properties/glenohumeralJointSclerosis",
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
                  label: 'Acromioclavicular Joint?',
                  scope: "#/properties/acromioclavicularJoint",
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

// export default class Form12 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       schema: _schema,
//     };
//   }

//   componentDidUpdate() { }

//   handleForm(data) {
//     const { schema } = this.state;
//     this.setState(data, () => {
//       this.props.handleChange(data, false);
//     });
//   }

//   render() {
//     const { data, schema } = this.state;
//     return (
//       <JsonForms
//         schema={schema}
//         uischema={uischema}
//         data={data}
//         renderers={materialRenderers}
//         cells={materialCells}
//         ValidationMode="ValidateAndShow"
//         onChange={({ data, _errors }) => this.handleForm(data)}
//       />
//     );
//   }
// }
//Auto data update by Aman Gupta on 23/06/23
export default class Form12 extends Component {
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
			GenderTextFR12: patient.gender,
			AgeTextFR12: patient.age,
			NameTextFR12: patient.PatientName,
			IDTextFR12: patient.PatientId,
			TestDateTextFR12: patient.TestDate,
			ReportDateTextFR12: patient.ReportDate
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