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
    NameTextFR26: {
      type: "string",
    },
    IDTextFR26: {
      type: "string",
    },
    AgeTextFR26: {
      type: "string",
    },
    GenderTextFR26: {
      type: "string",
      enum: ["Male", "Female", "Others"],
    },
    TestDateTextFR26: {
      type: "string",
    },
    ReportDateTextFR26: {
      type: "string",
    },
    Optometry: {
      type: "boolean",
    },
    ///////////////Normal vision///////////////
    OptometryNormal: {
      type: "boolean",
    },
    
    ////////////////Abnormal Vision (far)////////////////
    
    OptometryAbnormalLType: {
      type: "string",
      enum: ["6/6", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9"],
    },
    OptometryAbnormalRType: {
      type: "string",
      enum: ["6/6", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9"],
    },
    ////////////////Abnormal vision (near)////////////////////
    
    OptometryAbnormalLTypeN: {
      type: "string",
      enum: ["N/6", "N/36", "N/24", "N/18", "N/12", "N/10", "N/8"],
    },
    OptometryAbnormalRTypeN: {
      type: "string",
      enum: ["N/6", "N/36", "N/24", "N/18", "N/12", "N/10", "N/8"],
    },
    ///////////other//////////////
    OptometryOtherText: {
      type: "boolean",
    },
    OptometryOtherTextField: {
      type: "string",
    },
    OptometryLColor: {
      type: "boolean",
    },
    OptometryLColorType: {
      type: "string",
      enum: ["Normal", "Partial color blindness", "Total color blindness"],
    },
    OptometryLColorType1: {
      type: "string",
      enum: ["Red", "Green", "Red-Green"],
    },
    OptometryRColor: {
      type: "boolean",
    },
    OptometryRColorType: {
      type: "string",
      enum: ["Normal", "Partial color blindness", "Total color blindness"],
    },
    OptometryRColorType1: {
      type: "string",
      enum: ["Red", "Green", "Red-Green"],
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
              scope: "#/properties/NameTextFR26",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR26",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR26",
            },
            {
              type: "Control",
              label: "Test date",
              scope: "#/properties/TestDateTextFR26",
            },
            {
              type: "Control",
              label: "Report date",
              scope: "#/properties/ReportDateTextFR26",
            },
          ],
        },

        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR26",
          options: {
            format: "radio",
          },
        },

        /////////////////////for all/////////////////

        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "VerticalLayout",
              label: " ",
              elements: [
                /////////////////NOrmal vision (both)/////////////////////////
                {
                  type: "Control",
                  label: "Normal Vision (both eye)",
                  scope: "#/properties/OptometryNormal",
                },
                
              ],
            },
          ],
        },
        // Abnormal****************
        /////////////////AbnOrmal vision (far)/////////////////////////
        // left**************
        {
          type: "VerticalLayout",
          label: "Left eye vision abnormal(far)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Left eye vision abnormal(far)2",
              elements: [
                {
                  type: "Control",
                  label: "Left eye vision abnormal(far)",
                  scope:
                    "#/properties/OptometryAbnormalLType",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },
        //rght abnormal(far)            
        {
          type: "VerticalLayout",
          label: "Right eye vision abnormal(far)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Right eye vision abnormal(far)2",
              elements: [
                {
                  type: "Control",
                  label: "Right eye vision abnormal(far)",
                  scope:
                    "#/properties/OptometryAbnormalRType",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },            
        // left**************near abnormal
        {
          type: "VerticalLayout",
          label: "Left eye vision abnormal(near)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Left eye vision abnormal(near)2",
              elements: [
                {
                  type: "Control",
                  label: "Left eye vision abnormal(near)",
                  scope:
                    "#/properties/OptometryAbnormalLTypeN",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },
        //rght****************near abnormal
        {
          type: "VerticalLayout",
          label: "Right eye vision abnormal(near)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Right eye vision abnormal(near)2",
              elements: [
                {
                  type: "Control",
                  label: "Right eye vision abnormal(near)",
                  scope:
                    "#/properties/OptometryAbnormalRTypeN",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },             
        
        ////////////////// OTHERS/////////////////////
        {
          type: "Control",
          label: "Others finding",
          scope: "#/properties/OptometryOtherText",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/OptometryOtherText",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            {
              type: "HorizontalLayout",
              label: "Findings",
              elements: [
                {
                  "type": "Control",
                  "label": "Findings",
                  "scope": "#/properties/OptometryOtherTextField",
                  "options": {
                    "slider": true
                  }
                },
              ],
            },
          ],
        },
        /////////////color blindness////////////////
        {
          type: "HorizontalLayout",
          label: " ",
          elements: [
            {
              type: "VerticalLayout",
              label: " ",
              elements: [
                /////////////////////////Left eye color/////////////////////
                {
                  type: "Control",
                  label: "Left eye color blindness",
                  scope: "#/properties/OptometryLColorType",
                  options: {
                    format: "radio",
                  },
                }, 
                {
                  type: "Control",
                  label: "Partial color blindness",
                  scope: "#/properties/OptometryLColorType1",
                  options: {
                    format: "radio",
                  },
                  rule: {
                    effect: "SHOW",
                    condition: {
                      scope: "#/properties/OptometryLColorType",
                      schema: {
                        const: "Partial color blindness",
                      },
                    },
                  },
                },
                
                ////////////////Right eye color//////////////////
                {
                  type: "Control",
                  label: "Right eye color blindness",
                  scope: "#/properties/OptometryRColorType",
                  options: {
                    format: "radio",
                  },
                },  
                {
                  type: "Control",
                  label: "Partial color blindness",
                  scope: "#/properties/OptometryRColorType1",
                  options: {
                    format: "radio",
                  },
                  rule: {
                    effect: "SHOW",
                    condition: {
                      scope: "#/properties/OptometryRColorType",
                      schema: {
                        const: "Partial color blindness",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
//Auto data update by Aman Gupta on 23/06/23
export default class Form26 extends Component {
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
