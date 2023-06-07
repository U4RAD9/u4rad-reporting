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
    NameTextFR5: {
      type: "string",
    },
    IDTextFR5: {
      type: "string",
    },
    AgeTextFR5: {
      type: "string",
    },
    GenderTextFR5: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    allNormal: {
      type: "string",
      enum: ["Normal"],
    },
    brainParenchyma: {
      type: "string",
      enum: ["Normal"],
    },
    grayWhiteMatterDifferentiation: {
      type: "string",
      enum: ["Normal"],
    },
    bilateralMesial: {
      type: "string",
      enum: ["Normal"],
    },
    amygdala: {
      type: "string",
      enum: ["Normal"],
    },
    bilateralBasal: {
      type: "string",
      enum: ["Normal"],
    },
    bilateralThalami: {
      type: "string",
      enum: ["Normal"],
    },
    internalCapsules: {
      type: "string",
      enum: ["Normal"],
    },
    corpusCallosum: {
      type: "string",
      enum: ["Normal"],
    },
    cerebellum: {
      type: "string",
      enum: ["Normal"],
    },
    cpAngle: {
      type: "string",
      enum: ["Normal"],
    },
    brainstem: {
      type: "string",
      enum: ["Normal"],
    },
    ventricles: {
      type: "string",
      enum: ["Normal"],
    },
    basalCisterns: {
      type: "string",
      enum: ["Normal"],
    },
    corticalSulcifissures: {
      type: "string",
      enum: ["Normal"],
    },

    vascularFlowVoids: {
      type: "string",
      enum: ["Normal"],
    },
    CVJ: {
      type: "string",
      enum: ["Normal"],
    },

    bonyCalvarium: {
      type: "string",
      enum: ["Normal"]
    },
    sella: {
      type: "string",
      enum: ["Normal"],
    },
    extraCalvarialStructures: {
      type: "string",
      enum: ["Normal"],
    },

    paranasalSinuses: {
      type: "string",
      enum: ["Normal"],
    },
    pituitaryGland: {
      type: "string",
      enum: ["Normal"],
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
              scope: "#/properties/NameTextFR5",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR5",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR5",
            },
            
          ],
        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR5",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "All Normal?",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Brain Parenchyma",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },  
        },
        {
          type: "Control",
          label: "Gray-white matter differentiation",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Bilateral mesial temporal structures including Hippocampus",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Amygdala",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Bilateral basal ganglia",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Bilateral Thalami",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Internal Capsules",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Corpus Callosum",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Cerebellum",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Brainstem",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "CP Angle",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Ventricles",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Basal Cisterns",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Cortical Sulci and Syvlian fissures",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },

        {
          type: "Control",
          label: "Vascular Flow Voids",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "CVJ",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },

        {
          type: "Control",
          label: "Bony Calvarium",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Sella",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Extra Calvarial Structures",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },

        {
          type: "Control",
          label: "Paranasal Sinuses",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Pituitary Gland",
          scope: "#/properties/allNormal",
          options: {
            format: "radio",
          },
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
export default class Form5 extends Component {
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
