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
    NameTextFR7: {
      type: "string",
    },
    IDTextFR7: {
      type: "string",
    },
    AgeTextFR7: {
      type: "string",
    },
    GenderTextFR7: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    Normal: {
      type: "string",
      enum: ['X-RAY PELVIS WITH BOTH HIPS AP?',
        'X-RAY PELVIS AP?',
        'X-RAY RIGHT WRIST AP/LATERAL?',
        'X-RAY RIGHT ELBOW AP/LATERAL?',
        'X-RAY RIGHT ELBOW & FOREARM AP/LATERAL?',
        'X-RAY CERVICAL NORMAL',
        'X-RAY LUMBER NORMAL',
        'X-RAY DORSAL NORMAL'],
    },
  },
  required: [],
};

const uischema = {
  type: "HorizontalLayout",
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
              scope: "#/properties/NameTextFR7",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR7",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR7",
            },
            
          ],

        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR7",
          options: {
            format: "radio",
          },
        },
        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "Control",
              label: "Normals",
              scope: "#/properties/Normal",
              options: {
                format: "radio",
              },
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

export default class Form7 extends Component {
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