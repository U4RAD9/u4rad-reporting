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
    
    NameTextFR14: {
      type: "string",
    },
    IDTextFR14: {
      type: "string",
    },
    AgeTextFR14: {
      type: "string",
    },
    GenderTextFR14: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    TestDateTextFR14: {
			type: "string",
		},
    ReportDateTextFR14: {
			type: "string",
		},
    //1 *****************************************
    SpineView: {
      type: 'string',
      enum: ['AP', 'LATERAL', 'AP & LATERAL'],
    },

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
    CervicalOsteophytesC8: {
      type: "boolean",
    },
    CervicalOsteophytesC9: {
      type: "boolean",
    },
    CervicalOsteophytesC10: {
      type: "boolean",
    },
    CervicalOsteophytesC11: {
      type: "boolean",
    },
    CervicalOsteophytesC12: {
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
    CervicalEndplateSclerosisC8: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC9: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC10: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC11: {
      type: "boolean",
    },
    CervicalEndplateSclerosisC12: {
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
    CervicalVacuumPhenomenonC8: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC9: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC10: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC11: {
      type: "boolean",
    },
    CervicalVacuumPhenomenonC12: {
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
    CervicalSchmorlsNodeC8: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC9: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC10: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC11: {
      type: "boolean",
    },
    CervicalSchmorlsNodeC12: {
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
    CervicalInterVertebralDiscSpaceC7C8: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC8C9: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC9C10: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC10C11: {
      type: "boolean",
    },
    CervicalInterVertebralDiscSpaceC11C12: {
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
    CervicalCompressionFractureC8: {
      type: "boolean",
    },
    CervicalCompressionFractureC9: {
      type: "boolean",
    },
    CervicalCompressionFractureC10: {
      type: "boolean",
    },
    CervicalCompressionFractureC11: {
      type: "boolean",
    },
    CervicalCompressionFractureC12: {
      type: "boolean",
    },
    CervicalCompressionFractureL1: {
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
    CervicalBurstFractureC8: {
      type: "boolean",
    },
    CervicalBurstFractureC9: {
      type: "boolean",
    },
    CervicalBurstFractureC10: {
      type: "boolean",
    },
    CervicalBurstFractureC11: {
      type: "boolean",
    },
    CervicalBurstFractureC12: {
      type: "boolean",
    },
    CervicalBurstFractureL1: {
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
    CervicalChanceFractureC8: {
      type: "boolean",
    },
    CervicalChanceFractureC9: {
      type: "boolean",
    },
    CervicalChanceFractureC10: {
      type: "boolean",
    },
    CervicalChanceFractureC11: {
      type: "boolean",
    },
    CervicalChanceFractureC12: {
      type: "boolean",
    },
    CervicalChanceFractureL1: {
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
    CervicalFlexionTearDropFractureC8: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC9: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC10: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC11: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureC12: {
      type: "boolean",
    },
    CervicalFlexionTearDropFractureL1: {
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
    CervicalExtensionTearDropFractureC8: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC9: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC10: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC11: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureC12: {
      type: "boolean",
    },
    CervicalExtensionTearDropFractureL1: {
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
    CervicalSpinousProcessFractureC8: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC9: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC10: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC11: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureC12: {
      type: "boolean",
    },
    CervicalSpinousProcessFractureL1: {
      type: "boolean",
    },

    // Type 2********************

    //4 ********************************
    CervicalSpondylolisthesis: {
      type: "boolean",
    },

    CervicalretrolisthesisOf: {
      type: "boolean",
    },
    CervicalretrolisthesisOfC1: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC2: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC3: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC4: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC5: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC6: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC7: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC8: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC9: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC10: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC11: {
      type: 'boolean',
    },
    CervicalretrolisthesisOfC12: {
      type: 'boolean',
    },


    CervicalanterolisthesisOf: {
      type: "boolean",
    },

    CervicalanterolisthesisOfC1: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC2: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC3: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC4: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC5: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC6: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC7: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC8: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC9: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC10: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC11: {
      type: "boolean",
    },
    CervicalanterolisthesisOfC12: {
      type: "boolean",
    },





    RetroSpondylosis: {
      type: "boolean",
    },
    AntroSpondylosis: {
      type: "boolean",
    },

    

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
      enum: ['Perched', 'Locked', 'Subluxation'],
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
    CervicalFacetJointDislocationFratureC8: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC9: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC10: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC11: {
      type: "boolean",
    },
    CervicalFacetJointDislocationFratureC12: {
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
    CervicalCollapseC8: {
      type: "boolean",
    },
    CervicalCollapseC9: {
      type: "boolean",
    },
    CervicalCollapseC10: {
      type: "boolean",
    },
    CervicalCollapseC11: {
      type: "boolean",
    },
    CervicalCollapseC12: {
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
              scope: "#/properties/NameTextFR14",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR14",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR14",
            },
            {
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR14",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR14",
						},
          ],

        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR14",
          options: {
            format: "radio",
          },
        },
        // Dorsal Type********************
        {
          type: "Control",
          label: "X-Ray View",
          scope: "#/properties/SpineView",
          options: {
            format: "radio",
          },
        },

        // Normal************** 
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
                              label: "D1",
                              scope: "#/properties/CervicalOsteophytesC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalOsteophytesC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalOsteophytesC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalOsteophytesC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalOsteophytesC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalOsteophytesC6",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalOsteophytesC7",
                            },
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalOsteophytesC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalOsteophytesC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalOsteophytesC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalOsteophytesC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalOsteophytesC12",
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
                              label: "D1",
                              scope: "#/properties/CervicalEndplateSclerosisC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalEndplateSclerosisC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalEndplateSclerosisC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalEndplateSclerosisC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalEndplateSclerosisC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalEndplateSclerosisC6",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalEndplateSclerosisC7",
                            },
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalEndplateSclerosisC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalEndplateSclerosisC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalEndplateSclerosisC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalEndplateSclerosisC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalEndplateSclerosisC12",
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
                              label: "D1",
                              scope: "#/properties/CervicalVacuumPhenomenonC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalVacuumPhenomenonC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalVacuumPhenomenonC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalVacuumPhenomenonC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalVacuumPhenomenonC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalVacuumPhenomenonC6",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalVacuumPhenomenonC7",
                            },
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalVacuumPhenomenonC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalVacuumPhenomenonC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalVacuumPhenomenonC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalVacuumPhenomenonC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalVacuumPhenomenonC12",
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
                              label: "D1",
                              scope: "#/properties/CervicalSchmorlsNodeC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalSchmorlsNodeC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalSchmorlsNodeC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalSchmorlsNodeC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalSchmorlsNodeC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalSchmorlsNodeC6",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalSchmorlsNodeC7",
                            },
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalSchmorlsNodeC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalSchmorlsNodeC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalSchmorlsNodeC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalSchmorlsNodeC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalSchmorlsNodeC12",
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
                              label: "D1-D2",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC1C2",
                            },
                            {
                              type: "Control",
                              label: "D2-D3",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC2C3",
                            },
                            {
                              type: "Control",
                              label: "D3-D4",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC3C4",
                            },
                            {
                              type: "Control",
                              label: "D4-D5",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC4C5",
                            },
                            {
                              type: "Control",
                              label: "D5-D6",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC5C6",
                            },
                            {
                              type: "Control",
                              label: "D6-D7",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC6C7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7-D8",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC7C8",
                            },
                            {
                              type: "Control",
                              label: "D8-D9",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC8C9",
                            },
                            {
                              type: "Control",
                              label: "D9-D10",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC9C10",
                            },
                            {
                              type: "Control",
                              label: "D10-D11",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC10C11",
                            },
                            {
                              type: "Control",
                              label: "D11-D12",
                              scope: "#/properties/CervicalInterVertebralDiscSpaceC11C12",
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
                              label: "D1",
                              scope: "#/properties/CervicalCompressionFractureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalCompressionFractureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalCompressionFractureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalCompressionFractureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalCompressionFractureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalCompressionFractureC6",
                            },
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalCompressionFractureC7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalCompressionFractureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalCompressionFractureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalCompressionFractureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalCompressionFractureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalCompressionFractureC12",
                            },
                            {
                              type: "Control",
                              label: "L1",
                              scope: "#/properties/CervicalCompressionFractureL1",
                            },
                            {
                              type: "Control",
                              label: "Retropulsion",
                              scope: "#/properties/CervicalRetropulsion1",
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
                              label: "D1",
                              scope: "#/properties/CervicalBurstFractureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalBurstFractureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalBurstFractureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalBurstFractureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalBurstFractureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalBurstFractureC6",
                            },
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalBurstFractureC7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalBurstFractureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalBurstFractureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalBurstFractureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalBurstFractureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalBurstFractureC12",
                            },
                            {
                              type: "Control",
                              label: "L1",
                              scope: "#/properties/CervicalBurstFractureL1",
                            },
                            {
                              type: "Control",
                              label: "Retropulsion",
                              scope: "#/properties/CervicalRetropulsion2",
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
                              label: "D1",
                              scope: "#/properties/CervicalChanceFractureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalChanceFractureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalChanceFractureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalChanceFractureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalChanceFractureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalChanceFractureC6",
                            },
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalChanceFractureC7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalChanceFractureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalChanceFractureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalChanceFractureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalChanceFractureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalChanceFractureC12",
                            },
                            {
                              type: "Control",
                              label: "L1",
                              scope: "#/properties/CervicalChanceFractureL1",
                            },
                            {
                              type: "Control",
                              label: "Retropulsion",
                              scope: "#/properties/CervicalRetropulsion3",
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
                              label: "D1",
                              scope: "#/properties/CervicalFlexionTearDropFractureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalFlexionTearDropFractureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalFlexionTearDropFractureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalFlexionTearDropFractureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalFlexionTearDropFractureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalFlexionTearDropFractureC6",
                            },
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalFlexionTearDropFractureC7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalFlexionTearDropFractureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalFlexionTearDropFractureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalFlexionTearDropFractureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalFlexionTearDropFractureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalFlexionTearDropFractureC12",
                            },
                            {
                              type: "Control",
                              label: "L1",
                              scope: "#/properties/CervicalFlexionTearDropFractureL1",
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
                              label: "D1",
                              scope: "#/properties/CervicalExtensionTearDropFractureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalExtensionTearDropFractureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalExtensionTearDropFractureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalExtensionTearDropFractureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalExtensionTearDropFractureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalExtensionTearDropFractureC6",
                            },
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalExtensionTearDropFractureC7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalExtensionTearDropFractureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalExtensionTearDropFractureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalExtensionTearDropFractureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalExtensionTearDropFractureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalExtensionTearDropFractureC12",
                            },
                            {
                              type: "Control",
                              label: "L1",
                              scope: "#/properties/CervicalExtensionTearDropFractureL1",
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
                              label: "D1",
                              scope: "#/properties/CervicalSpinousProcessFractureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalSpinousProcessFractureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalSpinousProcessFractureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalSpinousProcessFractureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalSpinousProcessFractureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalSpinousProcessFractureC6",
                            },
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalSpinousProcessFractureC7",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalSpinousProcessFractureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalSpinousProcessFractureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalSpinousProcessFractureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalSpinousProcessFractureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalSpinousProcessFractureC12",
                            },
                            {
                              type: "Control",
                              label: "L1",
                              scope: "#/properties/CervicalSpinousProcessFractureL1",
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


        //Spondylolysis****************
        {
          type: "Control",
          label: "Spondylolysis?",
          scope: "#/properties/CervicalSpondylolisthesis",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/CervicalSpondylolisthesis",
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
                  label: "Retrolisthesis Of/Over?",
                  scope: "#/properties/CervicalretrolisthesisOf",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalretrolisthesisOf",
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
                              label: "D1 Over D2",
                              scope: "#/properties/CervicalretrolisthesisOfC1",
                            },
                            {
                              type: "Control",
                              label: "D2 Over D3",
                              scope: "#/properties/CervicalretrolisthesisOfC2",
                            },
                            {
                              type: "Control",
                              label: "D3 Over D4",
                              scope: "#/properties/CervicalretrolisthesisOfC3",
                            },
                            {
                              type: "Control",
                              label: "D4 Over D5",
                              scope: "#/properties/CervicalretrolisthesisOfC4",
                            },
                            {
                              type: "Control",
                              label: "D5 Over D6",
                              scope: "#/properties/CervicalretrolisthesisOfC5",
                            },
                            {
                              type: "Control",
                              label: "D6 Over D7",
                              scope: "#/properties/CervicalretrolisthesisOfC6",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7 Over D8",
                              scope: "#/properties/CervicalretrolisthesisOfC7",
                            },
                            {
                              type: "Control",
                              label: "D8 Over D9",
                              scope: "#/properties/CervicalretrolisthesisOfC8",
                            },
                            {
                              type: "Control",
                              label: "D9 Over D10",
                              scope: "#/properties/CervicalretrolisthesisOfC9",
                            },
                            {
                              type: "Control",
                              label: "D10 Over D11",
                              scope: "#/properties/CervicalretrolisthesisOfC10",
                            },
                            {
                              type: "Control",
                              label: "D11 Over D12",
                              scope: "#/properties/CervicalretrolisthesisOfC11",
                            },
                            {
                              type: "Control",
                              label: "Spondylosis?",
                              scope: "#/properties/RetroSpondylosis",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },

                // Antro

                {
                  type: "Control",
                  label: "Anterolisthesis Of/Over?",
                  scope: "#/properties/CervicalanterolisthesisOf",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/CervicalanterolisthesisOf",
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
                              label: "D1 Over D2",
                              scope: "#/properties/CervicalanterolisthesisOfC1",
                            },
                            {
                              type: "Control",
                              label: "D2 Over D3",
                              scope: "#/properties/CervicalanterolisthesisOfC2",
                            },
                            {
                              type: "Control",
                              label: "D3 Over D4",
                              scope: "#/properties/CervicalanterolisthesisOfC3",
                            },
                            {
                              type: "Control",
                              label: "D4 Over D5",
                              scope: "#/properties/CervicalanterolisthesisOfC4",
                            },
                            {
                              type: "Control",
                              label: "D5 Over D6",
                              scope: "#/properties/CervicalanterolisthesisOfC5",
                            },
                            {
                              type: "Control",
                              label: "D6 Over D7",
                              scope: "#/properties/CervicalanterolisthesisOfC6",
                            },
                          ],
                        },
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7 Over D8",
                              scope: "#/properties/CervicalanterolisthesisOfC7",
                            },
                            {
                              type: "Control",
                              label: "D8 Over D9",
                              scope: "#/properties/CervicalanterolisthesisOfC8",
                            },
                            {
                              type: "Control",
                              label: "D9 Over D10",
                              scope: "#/properties/CervicalanterolisthesisOfC9",
                            },
                            {
                              type: "Control",
                              label: "D10 Over D11",
                              scope: "#/properties/CervicalanterolisthesisOfC10",
                            },
                            {
                              type: "Control",
                              label: "D11 Over D12",
                              scope: "#/properties/CervicalanterolisthesisOfC11",
                            },
                            {
                              type: "Control",
                              label: "Spondylosis?",
                              scope: "#/properties/AntroSpondylosis",
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
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D1",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC1",
                            },
                            {
                              type: "Control",
                              label: "D2",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC2",
                            },
                            {
                              type: "Control",
                              label: "D3",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC3",
                            },
                            {
                              type: "Control",
                              label: "D4",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC4",
                            },
                            {
                              type: "Control",
                              label: "D5",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC5",
                            },
                            {
                              type: "Control",
                              label: "D6",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC6",
                            },
                          ],
                        },

                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "D7",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC7",
                            },
                            {
                              type: "Control",
                              label: "D8",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC8",
                            },
                            {
                              type: "Control",
                              label: "D9",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC9",
                            },
                            {
                              type: "Control",
                              label: "D10",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC10",
                            },
                            {
                              type: "Control",
                              label: "D11",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC11",
                            },
                            {
                              type: "Control",
                              label: "D12",
                              scope: "#/properties/CervicalFacetJointDislocationFratureC12",
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
                      label: "D1",
                      scope: "#/properties/CervicalCollapseC1",
                    },
                    {
                      type: "Control",
                      label: "D2",
                      scope: "#/properties/CervicalCollapseC2",
                    },
                    {
                      type: "Control",
                      label: "D3",
                      scope: "#/properties/CervicalCollapseC3",
                    },
                    {
                      type: "Control",
                      label: "D4",
                      scope: "#/properties/CervicalCollapseC4",
                    },
                    {
                      type: "Control",
                      label: "D5",
                      scope: "#/properties/CervicalCollapseC5",
                    },
                    {
                      type: "Control",
                      label: "D6",
                      scope: "#/properties/CervicalCollapseC6",
                    },
                  ],
                },
                {
                  type: "VerticalLayout",
                  label: "",
                  elements: [

                    {
                      type: "Control",
                      label: "D7",
                      scope: "#/properties/CervicalCollapseC7",
                    },
                    {
                      type: "Control",
                      label: "D8",
                      scope: "#/properties/CervicalCollapseC8",
                    },
                    {
                      type: "Control",
                      label: "D9",
                      scope: "#/properties/CervicalCollapseC9",
                    },
                    {
                      type: "Control",
                      label: "D10",
                      scope: "#/properties/CervicalCollapseC10",
                    },
                    {
                      type: "Control",
                      label: "D11",
                      scope: "#/properties/CervicalCollapseC11",
                    },
                    {
                      type: "Control",
                      label: "D12",
                      scope: "#/properties/CervicalCollapseC12",
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
// export default class Form14 extends Component {
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
//Auto data update by Aman Gupta on 23/06/23
export default class Form14 extends Component {
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
			GenderTextFR14: patient.gender,
			AgeTextFR14: patient.age,
			NameTextFR14: patient.PatientName,
			IDTextFR14: patient.PatientId,
			TestDateTextFR14: patient.TestDate,
			ReportDateTextFR14: patient.ReportDate
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