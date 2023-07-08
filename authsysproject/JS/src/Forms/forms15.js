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
    NameTextFR15: {
      type: "string",
    },
    IDTextFR15: {
      type: "string",
    },
    AgeTextFR15: {
      type: "string",
    },
    GenderTextFR15: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    TestDateTextFR15: {
			type: "string",
		},
    ReportDateTextFR15: {
			type: "string",
		},
    LeftKnee: {
      type: "boolean",
    },
    RightKnee: {
      type: "boolean",
    },
    XrayType: {
      type: "string",
      enum: ['AP', 'LATERAL', 'SKYLINE', 'AP/LATERAL'],
    },
    KneeNormal: {
      type: "boolean",
    },
    KneeNormalL: {
      type: "boolean",
    },
    KneeNormalR: {
      type: "boolean",
    },

    //NormalLeftBones: {
    //type: "boolean",
    //},
    //NormalLeftFracture: {
    //type: "boolean",
    //},
    //NormalLeftDislocation: {
    //type: "boolean",
    //},
    //NormalLeftJointSpace: {
    //type: "boolean",
    //},


    //Degenerative******************


    LeftDegenerative: {
      type: "boolean",
    },
    RightDegenerative: {
      type: "boolean",
    },
    LeftDegenerativeReducedJointSpaces: {
      type: "boolean",
    },
    LeftDegenerativeMedialJoint: {
      type: "boolean",
    },
    LeftDegenerativelateralJointSpace: {
      type: "boolean",
    },
    LeftDegenerativeSubchondralSclerosis: {
      type: "boolean",
    },
    LeftDegenerativeSubchondralSysts: {
      type: "boolean",
    },
    LeftDegenerativeTibialSpiking: {
      type: "boolean",
    },
    LeftDegenerativeMarginalOsteophytes: {
      type: "boolean",
    },
    LeftDegenerativeLooseBodies: {
      type: "boolean",
    },
    LeftDegenerativeDeformity: {
      type: "boolean",
    },
    LeftDegenerativeDeformityTypes: {
      type: "string",
      enum: ['Genu Varus', 'Genu Valgum'],
    },
    RightDegenerativeReducedJointSpaces: {
      type: "boolean",
    },
    RightDegenerativeMedialJoint: {
      type: "boolean",
    },
    RightDegenerativelateralJointSpace: {
      type: "boolean",
    },
    RightDegenerativeSubchondralSclerosis: {
      type: "boolean",
    },
    RightDegenerativeSubchondralSysts: {
      type: "boolean",
    },
    RightDegenerativeTibialSpiking: {
      type: "boolean",
    },
    RightDegenerativeMarginalOsteophytes: {
      type: "boolean",
    },
    RightDegenerativeLooseBodies: {
      type: "boolean",
    },
    RightDegenerativeDeformity: {
      type: "boolean",
    },
    RightDegenerativeDeformityTypes: {
      type: "string",
      enum: ['Genu Varus', 'Genu Valgum'],
    },


    //Fracture************************


    LeftFracture: {
      type: "boolean",
    },

    RightFracture: {
      type: "boolean",
    },

    LeftTibia: {
      type: "boolean",
    },
    LeftFibula: {
      type: "boolean",
    },
    LeftLowerThirdofFemur: {
      type: "boolean",
    },
    LeftPatella: {
      type: "boolean",
    },
    LeftOrthopaedicImplants: {
      type: "boolean",
    },



    LeftLinearUndisplacedFracture: {
      type: "boolean",
    },
    LeftLineardisplacedFracture: {
      type: "boolean",
    },
    LeftComminutedUndisplacedFracture: {
      type: "boolean",
    },
    LeftComminuteddisplacedFracture: {
      type: "boolean",
    },
    LeftComminutedDepressedFracture: {
      type: "boolean",
    },




    LeftLinearUndisplacedFracture1: {
      type: "boolean",
    },
    LeftLineardisplacedFracture1: {
      type: "boolean",
    },
    LeftComminutedUndisplacedFracture1: {
      type: "boolean"
    },
    LeftComminuteddisplacedFracture1: {
      type: "boolean"
    },
    LeftComminutedDepressedFracture1: {
      type: "boolean",
    },

    LeftLinearUndisplacedFracture2: {
      type: "boolean",
    },
    LeftLineardisplacedFracture2: {
      type: "boolean",
    },
    LeftComminutedUndisplacedFracture2: {
      type: "boolean",
    },
    LeftComminuteddisplacedFracture2: {
      type: "boolean",
    },
    LeftComminutedDepressedFracture2: {
      type: "boolean",
    },


    LeftOrthopaedicTibia: {
      type: "boolean",
    },
    LeftOrthopaedicFemur: {
      type: "boolean",
    },
    LeftOrthopaedicFibula: {
      type: "boolean",
    },
    LeftOrthopaedicPlateau: {
      type: "boolean",

    },





    RightTibia: {
      type: "boolean",
    },
    RightFibula: {
      type: "boolean",
    },
    RightLowerThirdofFemur: {
      type: "boolean",
    },
    RightPatella: {
      type: "boolean",
    },
    RightOrthopaedicImplants: {
      type: "boolean",
    },


    RightLinearUndisplacedFracture: {
      type: "boolean",
    },
    RightLinearMedialPlateau1: {
      type: "boolean",
    },
    RightLinearLateralPlateau1: {
      type: "boolean",
    },
    RightLinearoIntercondylarEminence1: {
      type: "boolean",
    },
    RightLinearProximalDiaphysis1: {
      type: "boolean",
    },

    RightLineardisplacedFracture: {
      type: "boolean",
    },
    RightLinearMedialPlateau2: {
      type: "boolean",
    },
    RightLinearLateralPlateau2: {
      type: "boolean",
    },
    RightLinearoIntercondylarEminence2: {
      type: "boolean",
    },
    RightLinearProximalDiaphysis2: {
      type: "boolean",
    },

    RightComminutedUndisplacedFracture: {
      type: "boolean",
    },
    RightLinearMedialPlateau3: {
      type: "boolean",
    },
    RightLinearLateralPlateau3: {
      type: "boolean",
    },
    RightLinearoIntercondylarEminence3: {
      type: "boolean",
    },
    RightLinearProximalDiaphysis3: {
      type: "boolean",
    },

    RightComminuteddisplacedFracture: {
      type: "boolean",
    },
    RightLinearMedialPlateau4: {
      type: "boolean",
    },
    RightLinearLateralPlateau4: {
      type: "boolean",
    },
    RightLinearoIntercondylarEminence4: {
      type: "boolean",
    },
    RightLinearProximalDiaphysis4: {
      type: "boolean",
    },

    RightComminutedDepressedFracture: {
      type: "boolean",
    },
    RightLinearMedialPlateau5: {
      type: "boolean",
    },
    RightLinearLateralPlateau5: {
      type: "boolean",
    },
    RightLinearoIntercondylarEminence5: {
      type: "boolean",
    },
    RightLinearProximalDiaphysis5: {
      type: "boolean",
    },



    RightLinearUndisplacedFracture1: {
      type: "boolean",
    },
    RightHeadOfFibula: {
      type: "boolean",
    },
    RightProximalShaftOfFibula: {
      type: "boolean",
    },

    RightLineardisplacedFracture1: {
      type: "boolean",
    },
    RightHeadOfFibula1: {
      type: "boolean",
    },
    RightProximalShaftOfFibula1: {
      type: "boolean",
    },

    RightComminutedUndisplacedFracture1: {
      type: "boolean"
    },
    RightHeadOfFibula2: {
      type: "boolean",
    },
    RightProximalShaftOfFibula2: {
      type: "boolean",
    },

    RightComminuteddisplacedFracture1: {
      type: "boolean"
    },
    RightHeadOfFibula3: {
      type: "boolean",
    },
    RightProximalShaftOfFibula3: {
      type: "boolean",
    },

    RightComminutedDepressedFracture1: {
      type: "boolean",
    },
    RightHeadOfFibula4: {
      type: "boolean",
    },
    RightProximalShaftOfFibula4: {
      type: "boolean",
    },


    RightLinearUndisplacedFracture2: {
      type: "boolean",
    },
    RightLinearMedialCondyle: {
      type: "boolean",
    },
    RightLinearoLateralCondyle: {
      type: "boolean",
    },
    RightLinearoDistalShaftofFemur: {
      type: "boolean",
    },

    RightLineardisplacedFracture2: {
      type: "boolean",
    },
    RightLinearMedialCondyle1: {
      type: "boolean",
    },
    RightLinearoLateralCondyle1: {
      type: "boolean",
    },
    RightLinearoDistalShaftofFemur1: {
      type: "boolean",
    },

    RightComminutedUndisplacedFracture2: {
      type: "boolean",
    },
    RightLinearMedialCondyle2: {
      type: "boolean",
    },
    RightLinearoLateralCondyle2: {
      type: "boolean",
    },
    RightLinearoDistalShaftofFemur2: {
      type: "boolean",
    },

    RightComminuteddisplacedFracture2: {
      type: "boolean",
    },
    RightLinearMedialCondyle3: {
      type: "boolean",
    },
    RightLinearoLateralCondyle3: {
      type: "boolean",
    },
    RightLinearoDistalShaftofFemur3: {
      type: "boolean",
    },

    RightComminutedDepressedFracture2: {
      type: "boolean",
    },
    RightLinearMedialCondyle4: {
      type: "boolean",
    },
    RightLinearoLateralCondyle4: {
      type: "boolean",
    },
    RightLinearoDistalShaftofFemur4: {
      type: "boolean",
    },

    RightOrthopaedicTibia: {
      type: "boolean",
    },
    RightOrthopaedicFemur: {
      type: "boolean",
    },
    RightOrthopaedicFibula: {
      type: "boolean",
    },
    RightOrthopaedicPlateau: {
      type: "boolean",
    },










    //1 ****************************************
  },
  required: ['XrayType'],
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
              scope: "#/properties/NameTextFR15",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR15",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR15",
            },
            {
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR15",
						},
            {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR15",
						},
          ],
        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR15",
          options: {
            format: "radio",
          },
        },
        // Normals*********************
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
                  label: "X-Ray View",
                  scope: "#/properties/XrayType",
                  options: {
                    format: "radio",
                  },
                },


                {
                  type: "VerticalLayout",
                  label: " ",
                  elements: [
                    {
                      type: "Control",
                      label: "Normal X-Ray?",
                      scope: "#/properties/KneeNormal",
                    },
                    {
                      type: "Group",
                      label: " ",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/KneeNormal",
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
                                  scope: "#/properties/KneeNormalL",
                                },
                                {
                                  type: "Control",
                                  label: "Right Normal?",
                                  scope: "#/properties/KneeNormalR",
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
                  label: "Finding Left Knee?",
                  scope: "#/properties/LeftKnee",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/LeftKnee",
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
                              label: "Degenerative?",
                              scope: "#/properties/LeftDegenerative",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/LeftDegenerative",
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
                                          label: "Medial Joint?",
                                          scope: "#/properties/LeftDegenerativeMedialJoint",
                                        },
                                        {
                                          type: "Control",
                                          label: "Lateral Joint Space?",
                                          scope: "#/properties/LeftDegenerativelateralJointSpace",
                                        },
                                        {
                                          type: "Control",
                                          label: "Subchondral Sclerosis?",
                                          scope: "#/properties/LeftDegenerativeSubchondralSclerosis",
                                        },
                                        {
                                          type: "Control",
                                          label: "Subchondral Cysts?",
                                          scope: "#/properties/LeftDegenerativeSubchondralSysts",
                                        },
                                        {
                                          type: "Control",
                                          label: "Tibial Spiking?",
                                          scope: "#/properties/LeftDegenerativeTibialSpiking",
                                        },
                                        {
                                          type: "Control",
                                          label: "Marginal Osteophytes?",
                                          scope: "#/properties/LeftDegenerativeMarginalOsteophytes",
                                        },
                                        {
                                          type: "Control",
                                          label: "Loose Bodies?",
                                          scope: "#/properties/LeftDegenerativeLooseBodies",
                                        },
                                        {
                                          type: "Control",
                                          label: "Deformity?",
                                          scope: "#/properties/LeftDegenerativeDeformity",
                                        },
                                        {
                                          type: "Group",
                                          label: "",
                                          rule: {
                                            effect: "HIDE",
                                            condition: {
                                              scope: "#/properties/LeftDegenerativeDeformity",
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
                                                  scope: "#/properties/LeftDegenerativeDeformityTypes",
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

                        // Fracture********************
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Fracture?",
                              scope: "#/properties/LeftFracture",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/LeftFracture",
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
                                      label: "Tibia?",
                                      scope: "#/properties/LeftTibia",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/LeftTibia",
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
                                              label: "Linear Undisplaced Fracture?",
                                              scope: "#/properties/LeftLinearUndisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftLinearUndisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/LeftLinearMedialPlateau1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/LeftLinearLateralPlateau1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/LeftLinearoIntercondylarEminence1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/LeftLinearProximalDiaphysis1",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Linear Displaced Fracture?",
                                              scope: "#/properties/LeftLineardisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftLineardisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/LeftLinearMedialPlateau2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/LeftLinearLateralPlateau2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/LeftLinearoIntercondylarEminence2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/LeftLinearProximalDiaphysis2",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Undisplaced Fracture?",
                                              scope: "#/properties/LeftComminutedUndisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminutedUndisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/LeftLinearMedialPlateau3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/LeftLinearLateralPlateau3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/LeftLinearoIntercondylarEminence3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/LeftLinearProximalDiaphysis3",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Displaced Fracture?",
                                              scope: "#/properties/LeftComminuteddisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminuteddisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/LeftLinearMedialPlateau4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/LeftLinearLateralPlateau4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/LeftLinearoIntercondylarEminence4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/LeftLinearProximalDiaphysis4",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Depressed Fracture?",
                                              scope: "#/properties/LeftComminutedDepressedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminutedDepressedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/LeftLinearMedialPlateau5",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/LeftLinearLateralPlateau5",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/LeftLinearoIntercondylarEminence5",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/LeftLinearProximalDiaphysis5",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Fibula?",
                                      scope: "#/properties/LeftFibula",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/LeftFibula",
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
                                              label: "Linear Undisplaced Fracture?",
                                              scope: "#/properties/LeftLinearUndisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftLinearUndisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/LeftHeadOfFibula",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/LeftProximalShaftOfFibula",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Linear Displaced Fracture?",
                                              scope: "#/properties/LeftLineardisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftLineardisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/LeftHeadOfFibula1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/LeftProximalShaftOfFibula1",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Undisplaced Fracture?",
                                              scope: "#/properties/LeftComminutedUndisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminutedUndisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/LeftHeadOfFibula2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/LeftProximalShaftOfFibula2",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Displaced Fracture?",
                                              scope: "#/properties/LeftComminuteddisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminuteddisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/LeftHeadOfFibula3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/LeftProximalShaftOfFibula3",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Depressed Fracture?",
                                              scope: "#/properties/LeftComminutedDepressedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminutedDepressedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/LeftHeadOfFibula4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/LeftProximalShaftOfFibula4",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Lower Third of Femur?",
                                      scope: "#/properties/LeftLowerThirdofFemur",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/LeftLowerThirdofFemur",
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
                                              label: "Linear Undisplaced Fracture?",
                                              scope: "#/properties/LeftLinearUndisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftLinearUndisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/LeftLinearMedialCondyle",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/LeftLinearoLateralCondyle",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/LeftLinearoDistalShaftofFemur",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },

                                            {
                                              type: "Control",
                                              label: "Linear Displaced Fracture?",
                                              scope: "#/properties/LeftLineardisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftLineardisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/LeftLinearMedialCondyle1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/LeftLinearoLateralCondyle1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/LeftLinearoDistalShaftofFemur1",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Undisplaced Fracture?",
                                              scope: "#/properties/LeftComminutedUndisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminutedUndisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/LeftLinearMedialCondyle2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/LeftLinearoLateralCondyle2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/LeftLinearoDistalShaftofFemur2",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Displaced Fracture?",
                                              scope: "#/properties/LeftComminuteddisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminuteddisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/LeftLinearMedialCondyle3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/LeftLinearoLateralCondyle3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/LeftLinearoDistalShaftofFemur3",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Depressed Fracture?",
                                              scope: "#/properties/LeftComminutedDepressedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/LeftComminutedDepressedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/LeftLinearMedialCondyle4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/LeftLinearoLateralCondyle4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/LeftLinearoDistalShaftofFemur4",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Patella?",
                                      scope: "#/properties/LeftPatella",
                                    },
                                    {
                                      type: "Control",
                                      label: "Orthopaedic Implants?",
                                      scope: "#/properties/LeftOrthopaedicImplants",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/LeftOrthopaedicImplants",
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
                                              label: "Tibia?",
                                              scope: "#/properties/LeftOrthopaedicTibia",
                                            },
                                            {
                                              type: "Control",
                                              label: "Femur?",
                                              scope: "#/properties/LeftOrthopaedicFemur",
                                            },
                                            {
                                              type: "Control",
                                              label: "Fibula?",
                                              scope: "#/properties/LeftOrthopaedicFibula",
                                            },
                                            {
                                              type: "Control",
                                              label: "Patella?",
                                              scope: "#/properties/LeftOrthopaedicPlateau",
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
                },
              ],
            },

            // Right*************************************
            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "Finding Right Knee?",
                  scope: "#/properties/RightKnee",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/RightKnee",
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


                        // Degenerative *********************
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Degenerative?",
                              scope: "#/properties/RightDegenerative",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/RightDegenerative",
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
                                          label: "Medial Joint?",
                                          scope: "#/properties/RightDegenerativeMedialJoint",
                                        },
                                        {
                                          type: "Control",
                                          label: "Lateral Joint Space?",
                                          scope: "#/properties/RightDegenerativelateralJointSpace",
                                        },
                                        {
                                          type: "Control",
                                          label: "Subchondral Sclerosis?",
                                          scope: "#/properties/RightDegenerativeSubchondralSclerosis",
                                        },
                                        {
                                          type: "Control",
                                          label: "Subchondral Cysts?",
                                          scope: "#/properties/RightDegenerativeSubchondralSysts",
                                        },
                                        {
                                          type: "Control",
                                          label: "Tibial Spiking?",
                                          scope: "#/properties/RightDegenerativeTibialSpiking",
                                        },
                                        {
                                          type: "Control",
                                          label: "Marginal Osteophytes?",
                                          scope: "#/properties/RightDegenerativeMarginalOsteophytes",
                                        },
                                        {
                                          type: "Control",
                                          label: "Loose Bodies?",
                                          scope: "#/properties/RightDegenerativeLooseBodies",
                                        },
                                        {
                                          type: "Control",
                                          label: "Deformity?",
                                          scope: "#/properties/RightDegenerativeDeformity",
                                        },
                                        {
                                          type: "Group",
                                          label: "",
                                          rule: {
                                            effect: "HIDE",
                                            condition: {
                                              scope: "#/properties/RightDegenerativeDeformity",
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
                                                  scope: "#/properties/RightDegenerativeDeformityTypes",
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

                        // Fracture********************
                        // Right Fracture*********************
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Fracture?",
                              scope: "#/properties/RightFracture",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/RightFracture",
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
                                      label: "Tibia?",
                                      scope: "#/properties/RightTibia",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/RightTibia",
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
                                              label: "Linear Undisplaced Fracture?",
                                              scope: "#/properties/RightLinearUndisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightLinearUndisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/RightLinearMedialPlateau1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/RightLinearLateralPlateau1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/RightLinearoIntercondylarEminence1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/RightLinearProximalDiaphysis1",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Linear Displaced Fracture?",
                                              scope: "#/properties/RightLineardisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightLineardisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/RightLinearMedialPlateau2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/RightLinearLateralPlateau2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/RightLinearoIntercondylarEminence2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/RightLinearProximalDiaphysis2",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Undisplaced Fracture?",
                                              scope: "#/properties/RightComminutedUndisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminutedUndisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/RightLinearMedialPlateau3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/RightLinearLateralPlateau3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/RightLinearoIntercondylarEminence3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/RightLinearProximalDiaphysis3",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Displaced Fracture?",
                                              scope: "#/properties/RightComminuteddisplacedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminuteddisplacedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/RightLinearMedialPlateau4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/RightLinearLateralPlateau4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/RightLinearoIntercondylarEminence4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/RightLinearProximalDiaphysis4",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Depressed Fracture?",
                                              scope: "#/properties/RightComminutedDepressedFracture",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminutedDepressedFracture",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Plateau",
                                            //           scope: "#/properties/RightLinearMedialPlateau5",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Plateau",
                                            //           scope: "#/properties/RightLinearLateralPlateau5",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Intercondylar Eminence",
                                            //           scope: "#/properties/RightLinearoIntercondylarEminence5",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Diaphysis",
                                            //           scope: "#/properties/RightLinearProximalDiaphysis5",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Fibula?",
                                      scope: "#/properties/RightFibula",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/RightFibula",
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
                                              label: "Linear Undisplaced Fracture?",
                                              scope: "#/properties/RightLinearUndisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightLinearUndisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/RightHeadOfFibula",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/RightProximalShaftOfFibula",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Linear Displaced Fracture?",
                                              scope: "#/properties/RightLineardisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightLineardisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/RightHeadOfFibula1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/RightProximalShaftOfFibula1",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Unisplaced Fracture?",
                                              scope: "#/properties/RightComminutedUndisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminutedUndisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/RightHeadOfFibula2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/RightProximalShaftOfFibula2",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Displaced Fracture?",
                                              scope: "#/properties/RightComminuteddisplacedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminuteddisplacedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/RightHeadOfFibula3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/RightProximalShaftOfFibula3",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Depressed Fracture?",
                                              scope: "#/properties/RightComminutedDepressedFracture1",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminutedDepressedFracture1",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Head Of Fibula?",
                                            //           scope: "#/properties/RightHeadOfFibula4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Proximal Shaft Of Fibula?",
                                            //           scope: "#/properties/RightProximalShaftOfFibula4",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Lower Third of Femur?",
                                      scope: "#/properties/RightLowerThirdofFemur",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/RightLowerThirdofFemur",
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
                                              label: "Linear Undisplaced Fracture?",
                                              scope: "#/properties/RightLinearUndisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightLinearUndisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/RightLinearMedialCondyle",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/RightLinearoLateralCondyle",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/RightLinearoDistalShaftofFemur",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },

                                            {
                                              type: "Control",
                                              label: "Linear Displaced Fracture?",
                                              scope: "#/properties/RightLineardisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightLineardisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/RightLinearMedialCondyle1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/RightLinearoLateralCondyle1",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/RightLinearoDistalShaftofFemur1",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Undisplaced Fracture?",
                                              scope: "#/properties/RightComminutedUndisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminutedUndisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/RightLinearMedialCondyle2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/RightLinearoLateralCondyle2",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/RightLinearoDistalShaftofFemur2",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Displaced Fracture?",
                                              scope: "#/properties/RightComminuteddisplacedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminuteddisplacedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/RightLinearMedialCondyle3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/RightLinearoLateralCondyle3",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/RightLinearoDistalShaftofFemur3",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: "Control",
                                              label: "Comminuted Depressed Fracture?",
                                              scope: "#/properties/RightComminutedDepressedFracture2",
                                            },
                                            // {
                                            //   type: "Group",
                                            //   label: "",
                                            //   rule: {
                                            //     effect: "HIDE",
                                            //     condition: {
                                            //       scope: "#/properties/RightComminutedDepressedFracture2",
                                            //       schema: {
                                            //         const: false,
                                            //       },
                                            //     },
                                            //   },
                                            //   elements: [
                                            //     {
                                            //       type: "VerticalLayout",
                                            //       label: "",
                                            //       elements: [
                                            //         {
                                            //           type: "Control",
                                            //           label: "Medial Condyle",
                                            //           scope: "#/properties/RightLinearMedialCondyle4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Lateral Condyle",
                                            //           scope: "#/properties/RightLinearoLateralCondyle4",
                                            //         },
                                            //         {
                                            //           type: "Control",
                                            //           label: "Distal Shaft of Femur",
                                            //           scope: "#/properties/RightLinearoDistalShaftofFemur4",
                                            //         },
                                            //       ],
                                            //     },
                                            //   ],
                                            // },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Patella?",
                                      scope: "#/properties/RightPatella",
                                    },
                                    {
                                      type: "Control",
                                      label: "Orthopaedic Implants?",
                                      scope: "#/properties/RightOrthopaedicImplants",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/RightOrthopaedicImplants",
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
                                              label: "Tibia?",
                                              scope: "#/properties/RightOrthopaedicTibia",
                                            },
                                            {
                                              type: "Control",
                                              label: "Femur?",
                                              scope: "#/properties/RightOrthopaedicFemur",
                                            },
                                            {
                                              type: "Control",
                                              label: "Fibula?",
                                              scope: "#/properties/RightOrthopaedicFibula",
                                            },
                                            {
                                              type: "Control",
                                              label: "Patella?",
                                              scope: "#/properties/RightOrthopaedicPlateau",
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
// export default class Form15 extends Component {
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
export default class Form15 extends Component {
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
			GenderTextFR15: patient.gender,
			AgeTextFR15: patient.age,
			NameTextFR15: patient.PatientName,
			IDTextFR15: patient.PatientId,
			TestDateTextFR15: patient.TestDate,
			ReportDateTextFR15: patient.ReportDate
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