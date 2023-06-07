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
    NameTextFR19: {
      type: "string",
    },
    IDTextFR19: {
      type: "string",
    },
    AgeTextFR19: {
      type: "string",
    },
    GenderTextFR19: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    AudiometryNormal: {
      type: "boolean",
    },
    AudiometryNormalL: {
      type: "boolean",
    },

    AudiometryNormalR: {
      type: "boolean",
    },
    AudiometryAbnormalL: {
      type: "boolean",
    },
    AudiometryAbnormalLType: {
      type: 'string',
      enum: ['21-40 dB', '41-55 dB', '56-70 dB', '71-90 dB', '91-Above dB'],
    },

    AudiometryAbnormalR: {
      type: "boolean",
    },
    AudiometryAbnormalRType: {
      type: 'string',
      enum: ['21-40 dB', '41-55 dB', '56-70 dB', '71-90 dB', '91-Above dB'],
    }

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
              scope: "#/properties/NameTextFR19",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR19",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR19",
            },
          ],
        },

        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR19",
          options: {
            format: "radio",
          },
        },

        // Normal******************

        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "VerticalLayout",
              label: "",
              elements: [

                {
                  type: "VerticalLayout",
                  label: " ",
                  elements: [
                    {
                      type: "Control",
                      label: "Normal Audiometry?",
                      scope: "#/properties/AudiometryNormal",
                    },
                    {
                      type: "Group",
                      label: " ",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/AudiometryNormal",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: " ",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: " ",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Left Normal?",
                                  scope: "#/properties/AudiometryNormalL",
                                },
                                {
                                  type: "Control",
                                  label: "Right Normal?",
                                  scope: "#/properties/AudiometryNormalR",
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

        // Abnormal****************
        // left**************
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
                  label: "Left Ear hearing loss?",
                  scope: "#/properties/AudiometryAbnormalL",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/AudiometryAbnormalL",
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
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/AudiometryAbnormalLType",
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

            // Right**************

            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "Right Ear hearing loss?",
                  scope: "#/properties/AudiometryAbnormalR",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/AudiometryAbnormalR",
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
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/AudiometryAbnormalRType",
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
};
export default class Form19 extends Component {
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
