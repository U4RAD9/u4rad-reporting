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
    NameTextFR10: {
      type: "string",
    },
    IDTextFR10: {
      type: "string",
    },
    AgeTextFR10: {
      type: "string",
    },
    GenderTextFR10: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    TestDateTextFR10: {
			type: "string",
		},
    ReportDateTextFR10: {
			type: "string",
		},
    SpineView: {
      type: 'string',
      enum: ['X-Ray View'],
    },
    SpineViewAP: {
      type: "boolean",
    },
    SpineViewLateral: {
      type: "boolean",
    },
    SpineViewFlexion: {
      type: "boolean",
    },
    SpineViewExtension: {
      type: "boolean",
    },
    //1 *****************************************
    NormalSpine: {
      type: "boolean",
    },



    // 2 *******************************************
    CervicalDegenerative: {
      type: "boolean",
    },
    cervicalLordosis: {
      type: "boolean",
    },
    cervicalLordosisType: {
      type: "string",
      enum: ["Maintained", "Straightening", "Exaggerated", "Reversal"],
    },
    CervicalOsteophytes: {
      type: "boolean",
    },
    CervicalOsteophytesC1: {
      type: "boolean",
    },
    CervicalOsteophytesC2: {
      type: "boolean",
    },
    CervicalOsteophytesC3: {
      type: "boolean",
    },
    CervicalOsteophytesC4: {
      type: "boolean",
    },
    CervicalOsteophytesC5: {
      type: "boolean",
    },
    CervicalOsteophytesC6: {
      type: "boolean",
    },
    CervicalOsteophytesC7: {
      type: "boolean",
    },

    CervicalEndplateSclerosis: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC1: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC2: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC3: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC4: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC5: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC6: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC7: {
      type: "boolean",
    },

    CervicalVacuumPhenomenon: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC1: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC2: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC3: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC4: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC5: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC6: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC7: {
      type: "boolean",
    },

    CervicalSchmorlsNode: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC1: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC2: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC3: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC4: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC5: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC6: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC7: {
      type: "boolean",
    },


    CervicalInterVertebralDiscSpace: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC1C2: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC2C3: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC3C4: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC4C5: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC5C6: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC6C7: {
      type: "boolean",
    },
    // 3********************************
    CervicalFracture: {
      type: "boolean",
    },
    CervicalCompressionFracture: {
      type: "boolean",
    },
    CervicalRetropulsion1: {
      type: "boolean",
    },
    CervicalRetropulsion2: {
      type: "boolean",
    },
    CervicalRetropulsion3: {
      type: "boolean",
    },

    CervicalCompressionFractureC1: {
      type: "boolean",
    },
    CervicalCompressionFractureC2: {
      type: "boolean",
    },
    CervicalCompressionFractureC3: {
      type: "boolean",
    },
    CervicalCompressionFractureC4: {
      type: "boolean",
    },
    CervicalCompressionFractureC5: {
      type: "boolean",
    },
    CervicalCompressionFractureC6: {
      type: "boolean",
    },
    CervicalCompressionFractureC7: {
      type: "boolean",
    },
    CervicalCompressionFractureT1: {
      type: "boolean",
    },
    CervicalCompressionFractureT2: {
      type: "boolean",
    },

    CervicalBurstFracture: {
      type: "boolean",
    },
    CervicalRetropulsion: {
      type: "boolean",
    },
    CervicalBurstFractureC1: {
      type: "boolean",
    },
    CervicalBurstFractureC2: {
      type: "boolean",
    },
    CervicalBurstFractureC3: {
      type: "boolean",
    },
    CervicalBurstFractureC4: {
      type: "boolean",
    },
    CervicalBurstFractureC5: {
      type: "boolean",
    },
    CervicalBurstFractureC6: {
      type: "boolean",
    },
    CervicalBurstFractureC7: {
      type: "boolean",
    },
    CervicalBurstFractureT1: {
      type: "boolean",
    },
    CervicalBurstFractureT2: {
      type: "boolean",
    },

    CervicalChanceFracture: {
      type: "boolean",
    },
    CervicalRetropulsion: {
      type: "boolean",
    },
    CervicalChanceFractureC1: {
      type: "boolean",
    },
    CervicalChanceFractureC2: {
      type: "boolean",
    },
    CervicalChanceFractureC3: {
      type: "boolean",
    },
    CervicalChanceFractureC4: {
      type: "boolean",
    },
    CervicalChanceFractureC5: {
      type: "boolean",
    },
    CervicalChanceFractureC6: {
      type: "boolean",
    },
    CervicalChanceFractureC7: {
      type: "boolean",
    },
    CervicalChanceFractureT1: {
      type: "boolean",
    },
    CervicalChanceFractureT2: {
      type: "boolean",
    },

    CervicalFlexionTearDropFracture: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC1: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC2: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC3: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC4: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC5: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC6: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC7: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureT1: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureT2: {
      type: "boolean",
    },

    CervicalExtensionTearDropFracture: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC1: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC2: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC3: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC4: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC5: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC6: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC7: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureT1: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureT2: {
      type: "boolean",
    },

    // dons fractures******************

    CervicalDonsFrature: {
      type: "boolean",
    },
    CervicalDonsFratureType: {
      type: "string",
      enum: ['Type 1', 'Type 2', 'Type 3'],
    },
    // Type 1 **********************
    //CervicalDonsFractureC1: {
    // type: 'boolean',
    //},
    //CervicalDonsFractureC2: {
    // type: 'boolean',
    //},
    //CervicalDonsFractureC3: {
    //type: 'boolean',
    //},
    //CervicalDonsFractureC4: {
    // type: 'boolean',
    //},
    //CervicalDonsFractureC5: {
    //  type: 'boolean',
    //},
    //CervicalDonsFractureC6: {
    // type: 'boolean',
    //},
    //CervicalDonsFractureC7: {
    // type: 'boolean',
    //},
    //CervicalDonsFractureT1: {
    // type: 'boolean',
    //},
    //CervicalDonsFractureT2: {
    // type: 'boolean',
    // },
    //Spinous process fracture************

    CervicalSpinousProcessFracture: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC1: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC2: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC3: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC4: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC5: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC6: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC7: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureT1: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureT2: {
      type: "boolean",
    },
    // Type 2********************

    //4 ********************************

    // ************************
    CerivicalOsteopenia: {
      type: 'boolean',
    },
    // ************************
    CervicalFacetJointDislocationFrature: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureType: {
      type: "string",
      enum: ['Perched', 'Locked', 'Sublaxation'],
    },
    CervicalFacetJointDislocationFratureC1: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC2: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC3: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC4: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC5: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC6: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC7: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureT1: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureT2: {
      type: "boolean",
    },
    // **********************
    CervicalCollapse: {
      type: "boolean",
    },

    CervicalCollapseC1: {
      type: "boolean",
    },
    CervicalCollapseC2: {
      type: "boolean",
    },
    CervicalCollapseC3: {
      type: "boolean",
    },
    CervicalCollapseC4: {
      type: "boolean",
    },
    CervicalCollapseC5: {
      type: "boolean",
    },
    CervicalCollapseC6: {
      type: "boolean",
    },
    CervicalCollapseC7: {
      type: "boolean",
    },
    // **************************


    CervicalText: {
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
              scope: "#/properties/NameTextFR10",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR10",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR10",
            },
            {
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR10",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR10",
						},
          ],

        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR10",
          options: {
            format: "radio",
          },
        },
        // Cervical Type********************
        {
          type: "Control",
          label: "",
          scope: "#/properties/SpineView",
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
              scope: "#/properties/SpineView",
              schema: { enum: ["clear", "", undefined] },
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
                      label: "AP",
                      scope: "#/properties/SpineViewAP",
                    },
                    {
                      type: "Control",
                      label: "LATERAL",
                      scope: "#/properties/SpineViewLateral",
                    },
                    {
                      type: "Control",
                      label: "FLEXION",
                      scope: "#/properties/SpineViewFlexion",
                    },
                    {
                      type: "Control",
                      label: "EXTENSION",
                      scope: "#/properties/SpineViewExtension",
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Normal************ 
        {
          type: "Control",
          label: "Normal Spine Study?",
          scope: "#/properties/NormalSpine",
        },

        // Degenerative****************
        {
          type: "Control",
          label: "Degenerative?",
          scope: "#/properties/CervicalDegenerative",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/CervicalDegenerative",
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
                // Lordsosis
                {
                  type: "Control",
                  label: "Lordosis?",
                  scope: "#/properties/cervicalLordosis",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/cervicalLordosis",
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
                          scope: "#/properties/cervicalLordosisType",
                          options: {
                            format: "radio",
                          },
                        },
                      ],
                    },
                  ],
                },
                // Osteophytes
                {
                  type: "Control",
                  label: "Ostephytes?",
                  scope: "#/properties/CervicalOsteophytes",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalOsteophytes",
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
                              label: "C1",
                              scope: "#/properties/CervicalOsteophytesC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalOsteophytesC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalOsteophytesC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalOsteophytesC4",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalOsteophytesC5",
                            },
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalOsteophytesC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalOsteophytesC7",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //Endplate sclerosis 
                {
                  type: "Control",
                  label: "Endplate sclerosis?",
                  scope: "#/properties/CervicalEndplateSclerosis",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalEndplateSclerosis",
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
                              label: "C1",
                              scope: "#/properties/CervicalEndplateSclerosisC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalEndplateSclerosisC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalEndplateSclerosisC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalEndplateSclerosisC4",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalEndplateSclerosisC5",
                            },
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalEndplateSclerosisC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalEndplateSclerosisC7",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Vacuum Phenomenon
                {
                  type: "Control",
                  label: "Vacuum Phenomenon?",
                  scope: "#/properties/CervicalVacuumPhenomenon",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalVacuumPhenomenon",
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
                              label: "C1",
                              scope: "#/properties/CervicalVacuumPhenomenonC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalVacuumPhenomenonC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalVacuumPhenomenonC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalVacuumPhenomenonC4",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalVacuumPhenomenonC5",
                            },
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalVacuumPhenomenonC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalVacuumPhenomenonC7",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Schmorlâ€™s nodes
                {
                  type: "Control",
                  label: "Schmorl's nodes?",
                  scope: "#/properties/CervicalSchmorlsNode",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalSchmorlsNode",
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
                              label: "C1",
                              scope: "#/properties/CervicalSchmorlsNodeC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalSchmorlsNodeC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalSchmorlsNodeC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalSchmorlsNodeC4",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalSchmorlsNodeC5",
                            },
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalSchmorlsNodeC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalSchmorlsNodeC7",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },

                // Inter Vertebral disc space
                {
                  type: "Control",
                  label: "Reduced Inter Vertebral disc space?",
                  scope: "#/properties/CervicalInterVertebralDiscSpace",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalInterVertebralDiscSpace",
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
                              label: "C1 - C2",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC1C2",
                            },
                            {
                              type: "Control",
                              label: "C2 - C3",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC2C3",
                            },
                            {
                              type: "Control",
                              label: "C3 - C4",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC3C4",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C4 - C5",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC4C5",
                            },
                            {
                              type: "Control",
                              label: "C5 - C6",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC5C6",
                            },
                            {
                              type: "Control",
                              label: "C6 - C7",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC6C7",
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

        // Fracture******************
        {
          type: "Control",
          label: "Fractures?",
          scope: "#/properties/CervicalFracture",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/CervicalFracture",
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
                  label: "Compression Fracture?",
                  scope: "#/properties/CervicalCompressionFracture",
                },

                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalCompressionFracture",
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
                              label: "C1",
                              scope: "#/properties/CervicalCompressionFractureC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalCompressionFractureC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalCompressionFractureC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalCompressionFractureC4",
                            },
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalCompressionFractureC5",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalCompressionFractureC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalCompressionFractureC7",
                            },
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalCompressionFractureT1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalCompressionFractureT2",
                            },
                            {
                              type: "Control",
                              label: "Retropulsion?",
                              scope: "#/properties/CervicalRetropulsion1"
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },

                {
                  type: "Control",
                  label: "Burst Fracture?",
                  scope: "#/properties/CervicalBurstFracture",
                },

                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalBurstFracture",
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
                              label: "C1",
                              scope: "#/properties/CervicalBurstFractureC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalBurstFractureC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalBurstFractureC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalBurstFractureC4",
                            },
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalBurstFractureC5",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalBurstFractureC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalBurstFractureC7",
                            },
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalBurstFractureT1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalBurstFractureT2",
                            },
                            {
                              type: "Control",
                              label: "Retropulsion?",
                              scope: "#/properties/CervicalRetropulsion2"
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "Control",
                  label: "Change Fracture?",
                  scope: "#/properties/CervicalChanceFracture",
                },

                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalChanceFracture",
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
                              label: "C1",
                              scope: "#/properties/CervicalChanceFractureC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalChanceFractureC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalChanceFractureC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalChanceFractureC4",
                            },
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalChanceFractureC5",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalChanceFractureC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalChanceFractureC7",
                            },
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalChanceFractureT1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalChanceFractureT2",
                            },
                            {
                              type: "Control",
                              label: "Retropulsion?",
                              scope: "#/properties/CervicalRetropulsion3"
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },



                {
                  type: "Control",
                  label: "Flexion Tear Drop fracture?",
                  scope: "#/properties/CervicalFlexionTearDropFracture",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalFlexionTearDropFracture",
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
                              label: "C1",
                              scope: "#/properties/CervicalFlexionTearDropFractureC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalFlexionTearDropFractureC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalFlexionTearDropFractureC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalFlexionTearDropFractureC4",
                            },
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalFlexionTearDropFractureC5",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalFlexionTearDropFractureC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalFlexionTearDropFractureC7",
                            },
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalFlexionTearDropFractureT1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalFlexionTearDropFractureT2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },

                {
                  type: "Control",
                  label: "Extension tear drop fracture?",
                  scope: "#/properties/CervicalExtensionTearDropFracture",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalExtensionTearDropFracture",
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
                              label: "C1",
                              scope: "#/properties/CervicalExtensionTearDropFractureC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalExtensionTearDropFractureC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalExtensionTearDropFractureC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalExtensionTearDropFractureC4",
                            },
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalExtensionTearDropFractureC5",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalExtensionTearDropFractureC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalExtensionTearDropFractureC7",
                            },
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalExtensionTearDropFractureT1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalExtensionTearDropFractureT2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },

                {
                  type: "Control",
                  label: "Dens Fracture?",
                  scope: "#/properties/CervicalDonsFrature",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalDonsFrature",
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
                          scope: "#/properties/CervicalDonsFratureType",
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
                  label: "Spinous Process fracture?",
                  scope: "#/properties/CervicalSpinousProcessFracture",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalSpinousProcessFracture",
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
                              label: "C1",
                              scope: "#/properties/CervicalSpinousProcessFractureC1",
                            },
                            {
                              type: "Control",
                              label: "C2",
                              scope: "#/properties/CervicalSpinousProcessFractureC2",
                            },
                            {
                              type: "Control",
                              label: "C3",
                              scope: "#/properties/CervicalSpinousProcessFractureC3",
                            },
                            {
                              type: "Control",
                              label: "C4",
                              scope: "#/properties/CervicalSpinousProcessFractureC4",
                            },
                            {
                              type: "Control",
                              label: "C5",
                              scope: "#/properties/CervicalSpinousProcessFractureC5",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "C6",
                              scope: "#/properties/CervicalSpinousProcessFractureC6",
                            },
                            {
                              type: "Control",
                              label: "C7",
                              scope: "#/properties/CervicalSpinousProcessFractureC7",
                            },
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalSpinousProcessFractureT1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalSpinousProcessFractureT2",
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




        //Facet Joint Dislocation**********

        {
          type: "Control",
          label: "Facet joint Dislocation?",
          scope: "#/properties/CervicalFacetJointDislocationFrature",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/CervicalFacetJointDislocationFrature",
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
                  scope: "#/properties/CervicalFacetJointDislocationFratureType",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },

            {
              type: "Group",
              label: "",
              rule: {
                effect: "HIDE",
                condition: {
                  scope: "#/properties/CervicalFacetJointDislocationFratureType",
                  schema: { enum: ["", undefined] },
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
                          label: "C1",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC1",
                        },
                        {
                          type: "Control",
                          label: "C2",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC2",
                        },
                        {
                          type: "Control",
                          label: "C3",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC3",
                        },
                        {
                          type: "Control",
                          label: "C4",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC4",
                        },
                        {
                          type: "Control",
                          label: "C5",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC5",
                        },
                      ],
                    },
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        
                        {
                          type: "Control",
                          label: "C6",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC6",
                        },
                        {
                          type: "Control",
                          label: "C7",
                          scope: "#/properties/CervicalFacetJointDislocationFratureC7",
                        },
                        {
                          type: "Control",
                          label: "D1",
                          scope: "#/properties/CervicalFacetJointDislocationFratureT1",
                        },
                        {
                          type: "Control",
                          label: "D2",
                          scope: "#/properties/CervicalFacetJointDislocationFratureT2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },



        // Osteopenia************
        {
          type: "Control",
          label: "Osteopenia?",
          scope: "#/properties/CerivicalOsteopenia",
        },
        // Collapse*************
        {
          type: "Control",
          label: "Collapse?",
          scope: "#/properties/CervicalCollapse",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/CervicalCollapse",
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
                      label: "C1",
                      scope: "#/properties/CervicalCollapseC1",
                    },
                    {
                      type: "Control",
                      label: "C2",
                      scope: "#/properties/CervicalCollapseC2",
                    },
                    {
                      type: "Control",
                      label: "C3",
                      scope: "#/properties/CervicalCollapseC3",
                    },
                    {
                      type: "Control",
                      label: "C4",
                      scope: "#/properties/CervicalCollapseC4",
                    },
                  ],
                },
                {
                  type: "VerticalLayout",
                  label: "",
                  elements: [
                    {
                      type: "Control",
                      label: "C5",
                      scope: "#/properties/CervicalCollapseC5",
                    },
                    {
                      type: "Control",
                      label: "C6",
                      scope: "#/properties/CervicalCollapseC6",
                    },
                    {
                      type: "Control",
                      label: "C7",
                      scope: "#/properties/CervicalCollapseC7",
                    },
                  ],
                },
              ],
            },
          ],
        },

        // Text*******************
        {
          type: "Control",
          label: "Additional Findings?",
          scope: "#/properties/CervicalText",
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
// export default class form10 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       schema: _schema
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
//Auto update by Aman Gupta on 23/06/23
export default class Form10 extends Component {
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
			GenderTextFR10: patient.gender,
			AgeTextFR10: patient.age,
			NameTextFR10: patient.PatientName,
			IDTextFR10: patient.PatientId,
			TestDateTextFR10: patient.TestDate,
			ReportDateTextFR10: patient.ReportDate
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