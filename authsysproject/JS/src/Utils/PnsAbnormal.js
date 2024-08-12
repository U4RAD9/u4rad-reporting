import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpPNS";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { FlashOnRounded, ImageRounded, InvertColorsOff, ReportOutlined } from "@material-ui/icons";
import { findMatchingUISchema } from "@jsonforms/core";
import { textCellTester } from "@jsonforms/vanilla-renderers";

class PnsAbnormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmData: {
        name: "John Doe",
        description: "",
        measurements: 0,
        done: true,
        recurrence: "Daily",
        rating: 3,

        PnsSinuses: false,

        PnsFrontal: false,
        PnsFrontalRight: false,
        PnsFrontalLeft: false,
        PnsFrontalRightPneumatization: false,
        PnsFrontalLeftPneumatization: false,
        PnsFrontalRightMusocalThicking: false,
        PnsFrontalLeftMusocalThicking: false,
        PnsFrontalRightFrontoEthmoid: false,
        PnsFrontalLeftFrontoEthmoid: false,

        PnsMaxillary: false,
        PnsMaxillaryRight: false,
        PnsMaxillaryLeft: false,
        PnsMaxillaryRightPneumatization: false,
        PnsMaxillaryLeftPneumatization: false,
        PnsMaxillaryRightMusocalThicking: false,
        PnsMaxillaryLeftMusocalThicking: false,
        PnsMaxillaryRightOsteomeatalUnit: false,
        PnsMaxillaryLeftOsteomeatalUnit: false,

        PnsEthmoidal: false,
        PnsEthmoidalRight: false,
        PnsEthmoidalLeft: false,
        PnsEthmoidalRightPneumatization: false,
        PnsEthmoidalLeftPneumatization: false,
        PnsEthmoidalRightMusocalThicking: false,
        PnsEthmoidalLeftMusocalThicking: false,
        PnsEthmoidalRightSeptae: false,
        PnsEthmoidalLeftSeptae: false,
        PnsEhtmoidalRightVarient: false,
        PnsEhtmoidalLeftVarient: false,

        PnsSphenoid: false,
        PnsSphenoidRight: false,
        PnsSphenoidLeft: false,
        PnsSphenoidRightPneumatization: false,
        PnsSphenoidLeftPneumatization: false,
        PnsSphenoidRightMusocalThicking: false,
        PnsSphenoidLeftMusocalThicking: false,
        PnsSphenoidRightEthmoid: false,
        PnsSphenoidLeftEthmoid: false,


        NasalCavity: false,
        DNSNasalCavity: false,
        TurbinatesNasalCavity: false,
        TurbinatesNasalRight: false,
        TurbinatesNasalLeft: false,
        TurbinatesNasalRightMiddle: false,
        TurbinatesNasalLeftMiddle: false,
        TurbinatesNasalRightConcha: false,
        TurbinatesNasalLeftConcha: false,

        TurbinatesNasalRightInferior: false,
        TurbinatesNasalLeftInferior: false,

        NasalMusocalThicking: false,

        Miscellaneous: false,
        MiscellaneousTypeKeros: false,
        MiscellaneousTypeOpticNerve: false,
        MiscellaneousbonyPneumatization: false,
        MiscellaneousbonyPneumatizationRight: false,
        MiscellaneousbonyPneumatizationLeft: false,

        MiscellaneousMastoid: false,
        MiscellaneousMastoidRight: false,
        MiscellaneousMastoidLeft: false,
        MiscellaneousMastoidLeftSoftTissue: false,
        MiscellaneousMastoidRightSoftTissue: false,

        MiscellaneousPosterior: false,
        MiscellaneousPosteriorRight: false,
        MiscellaneousPosteriorLeft: false,
        MiscellaneousPosteriorStenosisRight: false,
        MiscellaneousPosteriorStenosisLeft: false,

        MiscellaneousOsteoma: false,
        MiscellaneousOsteomaRight: false,
        MiscellaneousOsteomaLeft: false,

        MiscellaneousMucocele: false,
        MiscellaneousMucoceleRight: false,
        MiscellaneousMucoceleLeft: false,
        MiscellaneousAdenoid: false,



      },
    };
    this.handleData = this.handleData.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  async handleData(data) {
    console.log("====data index", data);
    this.setState({ frmData: data }, async () => {
      await this.formatData();
    });
  }




  async formatData() {
    const { frmData } = this.state;
    let report = this.props.generatePatientTable;
    const impression = [];
    let pageBreak = 0;
    let totalCovidPoints = 0;

    if (frmData.NameTextFR4 && frmData.IDTextFR4 && frmData.AgeTextFR4 && frmData.GenderTextFR4)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR4 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR4 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR4 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR4 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR4 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR4 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }
    if (frmData.Normalsinus) {
      report += "<h5>" + "<strong>" + "<u>" + "LOW DOSE CT REPORT - PARANASAL SINUSES" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "TECHNIQUE:" + "</u>" + "</strong>" + " Sequential scans of paranasal sinuses were done in both coronal and axial planes without intravenous contrast." + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
    }
    else {
      if (frmData.PnsSinuses || frmData.NasalCavity || frmData.Miscellaneous) {
        report += "<h5>" + "<strong>" + "<u>" + "LOW DOSE CT REPORT - PARANASAL SINUSES" + "</u>" + "</strong>" + "</h5>";
        report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
      }
    }


    // Normal
    if (frmData.Normalsinus) {
      report += "<p>" + "The frontal sinus is normal on both sides. Frontal recess is patent on both sides.<br><br>Right maxillary sinus is normal. Osteomeatal unit is patent.<br><br>Left maxillary sinus is normal. Osteomeatal unit is patent.<br><br>The ethmoidal cells are normal.<br><br>The sphenoid sinus and spheno-ethmoid recess are normal.<br><br>No evidence of osteitis, bone sclerosis or bone erosion is visualized.<br><br>The nasal septum is within normal limits.<br><br>The nasal turbinates appear normal.<br><br>The nasopharynx is normal.<br><br>Mastoid air cells are normal. No evidence of soft tissue density in both middle ears.<br><br>No adenoid hypertrophy." + "</p>";
    }




    // Sinuses
    if (frmData.PnsSinuses) {
      // Frontal
      if (frmData.PnsFrontal) {
        // right
        if (frmData.PnsFrontalRight) {
          if (frmData.PnsFrontalRightPneumatization) {
            if (frmData.PnsFrontalRightPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsFrontalPeumatizationR.replace("{1}", frmData.PnsFrontalRightPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsFrontalPeumatizationR.replace("{1}", frmData.PnsFrontalRightPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsFrontalRightMusocalThicking) {
            if (frmData.PnsFrontalRightMusocalThickingType && !frmData.PnsFrontalRightHyperdense) {
              report += "<p>" + "<b>" + text.PnsFrontalMusocalthickingR.replace("{1}", frmData.PnsFrontalRightMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsFrontalMusocalthickingR.replace("{1}", frmData.PnsFrontalRightMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsFrontalRightMusocalThickingType && frmData.PnsFrontalRightHyperdense) {
                report += "<p>" + "<b>" + text.PnsFrontalMusocalthickingR.replace("{1}", frmData.PnsFrontalRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsFrontalMusocalthickingR.replace("{1}", frmData.PnsFrontalRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }
          }
          if (frmData.PnsFrontalRightAirFluid) {
            report += "<p>" + "<b>" + "Air fluid levels seen in right frontal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluids level seen in right frontal sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsFrontalRightFrontoEthmoid) {
            if (frmData.PnsFrontalRightFrontoEthmoidType === 'patent') {
              report += "<p>" + "<b>" + "fronto-ethmoid recess is patent in right frontal sinus. " + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "fronto-ethmoid recess is patent in right frontal sinus. " + "</b>" + "</p>");
            }
            if (frmData.PnsFrontalRightFrontoEthmoidType === 'partial narrowing') {
              report += "<p>" + "<b>" + "There is partial narrowing of right fronto-ethmoid recess. " + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is partial narrowing of right fronto-ethmoid recess. " + "</b>" + "</p>");
            }
            if (frmData.PnsFrontalRightFrontoEthmoidType === 'complete occlusion') {
              report += "<p>" + "<b>" + "Complete occlusion of right fronto-ethmoid recess seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Complete occlusion of right fronto-ethmoid recess seen." + "</b>" + "</p>");
            }
          }
          if (frmData.PnsFrontalRightBonyErosions) {
            report += "<p>" + "<b>" + "Bony erosion seen on right side of frontal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Bony erosion seen on right side of frontal sinus." + "</b>" + "</p>");
          }
        }
        // left
        if (frmData.PnsFrontalLeft) {
          if (frmData.PnsFrontalLeftPneumatization) {
            if (frmData.PnsFrontalLeftPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsFrontalPeumatizationL.replace("{1}", frmData.PnsFrontalLeftPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsFrontalPeumatizationL.replace("{1}", frmData.PnsFrontalLeftPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsFrontalLeftMusocalThicking) {
            if (frmData.PnsFrontalLeftMusocalThickingType && !frmData.PnsFrontalLeftHyperdense) {
              report += "<p>" + "<b>" + text.PnsFrontalMusocalthickingL.replace("{1}", frmData.PnsFrontalLeftMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsFrontalMusocalthickingL.replace("{1}", frmData.PnsFrontalLeftMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsFrontalLeftMusocalThickingType && frmData.PnsFrontalLeftHyperdense) {
                report += "<p>" + "<b>" + text.PnsFrontalMusocalthickingL.replace("{1}", frmData.PnsFrontalLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsFrontalMusocalthickingL.replace("{1}", frmData.PnsFrontalLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }
          }
          if (frmData.PnsFrontalLeftAirFluid) {
            report += "<p>" + "<b>" + "Air fluid levels seen in left frontal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluid levels seen in left frontal sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsFrontalLeftFrontoEthmoid) {
            if (frmData.PnsFrontalLeftFrontoEthmoidType === 'patent') {
              report += "<p>" + "<b>" + "fronto-ethmoid recess is patent in left frontal sinus. " + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "fronto-ethmoid recess is patent in left frontal sinus. " + "</b>" + "</p>");
            }
            if (frmData.PnsFrontalLeftFrontoEthmoidType === 'partial narrowing') {
              report += "<p>" + "<b>" + "There is partial narrowing of left fronto-ethmoid recess. " + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is partial narrowing of left fronto-ethmoid recess. " + "</b>" + "</p>");
            }
            if (frmData.PnsFrontalLeftFrontoEthmoidType === 'complete occlusion') {
              report += "<p>" + "<b>" + "Complete occlusion of left fronto-ethmoid recess seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Complete occlusion of left fronto-ethmoid recess seen." + "</b>" + "</p>");
            }
          }
          if (frmData.PnsFrontalLeftBonyErosions) {
            report += "<p>" + "<b>" + "Bony erosion seen on left side of frontal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Bony erosion seen on left side of frontal sinus." + "</b>" + "</p>");
          }
        }
      }

      // Maxillary
      if (frmData.PnsMaxillary) {
        // right
        if (frmData.PnsMaxillaryRight) {
          if (frmData.PnsMaxillaryRightPneumatization) {
            if (frmData.PnsmaxillaryRightPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsmaxillaryPeumatizationR.replace("{1}", frmData.PnsmaxillaryRightPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsmaxillaryPeumatizationR.replace("{1}", frmData.PnsmaxillaryRightPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsMaxillaryRightMusocalThicking) {
            if (frmData.PnsMaxillaryRightMusocalThickingType && !frmData.PnsMaxillaryRightHyperdense) {
              report += "<p>" + "<b>" + text.PnsmaxillaryMusocalthickingR.replace("{1}", frmData.PnsMaxillaryRightMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsmaxillaryMusocalthickingR.replace("{1}", frmData.PnsMaxillaryRightMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsMaxillaryRightMusocalThickingType && frmData.PnsMaxillaryRightHyperdense) {
                report += "<p>" + "<b>" + text.PnsmaxillaryMusocalthickingR.replace("{1}", frmData.PnsMaxillaryRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsmaxillaryMusocalthickingR.replace("{1}", frmData.PnsMaxillaryRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }
          }
          if (frmData.PnsMaxillaryRightAirFluid) {
            report += "<p>" + "<b>" + "Air fluid levels seen in right maxillary sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluid levels seen in right maxillary sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsMaxillaryRightOsteomeatalUnit) {
            if (frmData.PnsMaxillaryRightOsteomeatalUnitType) {
              report += "<p>" + "<b>" + text.PnsMaxillaryRightOsteomeatalUnitText.replace("{1}", frmData.PnsMaxillaryRightOsteomeatalUnitType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsMaxillaryRightOsteomeatalUnitText.replace("{1}", frmData.PnsMaxillaryRightOsteomeatalUnitType) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsMaxillaryRightBonyErosions) {
            report += "<p>" + "<b>" + "Erosions seen in bony walls of right maxillary sinus." + "</b>" + "</p>";
            impression.push("<p>" + "</b>" + "Erosions seen in bony walls of right maxillary sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsMaxillaryRightAccessoryOstia) {
            report += "<p>" + "<b>" + "Accessory ostia of right maxillary sinus seen." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Accessory ostia of right maxillary sinus seen." + "</b>" + "</p>");
          }
        }
        // left
        if (frmData.PnsMaxillaryLeft) {
          if (frmData.PnsMaxillaryLeftPneumatization) {
            if (frmData.PnsmaxillaryLeftPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsmaxillaryPeumatizationL.replace("{1}", frmData.PnsmaxillaryLeftPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsmaxillaryPeumatizationL.replace("{1}", frmData.PnsmaxillaryLeftPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsMaxillaryLeftMusocalThicking) {
            if (frmData.PnsMaxillaryLeftMusocalThickingType && !frmData.PnsMaxillaryLeftHyperdense) {
              report += "<p>" + "<b>" + text.PnsmaxillaryMusocalthickingL.replace("{1}", frmData.PnsMaxillaryLeftMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsmaxillaryMusocalthickingL.replace("{1}", frmData.PnsMaxillaryLeftMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsMaxillaryLeftMusocalThickingType && frmData.PnsMaxillaryLeftHyperdense) {
                report += "<p>" + "<b>" + text.PnsmaxillaryMusocalthickingL.replace("{1}", frmData.PnsMaxillaryLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsmaxillaryMusocalthickingL.replace("{1}", frmData.PnsMaxillaryLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }

          }
          if (frmData.PnsMaxillaryLeftAirFluid) {
            report += "<p>" + "<b>" + "Air fluid levels seen in left maxillary sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluid levels seen in left maxillary sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsMaxillaryLeftOsteomeatalUnit) {
            if (frmData.PnsMaxillaryLeftOsteomeatalUnitType) {
              report += "<p>" + "<b>" + text.PnsMaxillaryLeftOsteomeatalUnitText.replace("{1}", frmData.PnsMaxillaryLeftOsteomeatalUnitType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsMaxillaryLeftOsteomeatalUnitText.replace("{1}", frmData.PnsMaxillaryLeftOsteomeatalUnitType) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsMaxillaryLeftBonyErosions) {
            report += "<p>" + "<b>" + "Erosions seen in bony walls of left maxillary sinus." + "</b>" + "</p>";
            impression.push("<p>" + "</b>" + "Erosions seen in bony walls of left maxillary sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsMaxillaryLeftAccessoryOstia) {
            report += "<p>" + "<b>" + "Accessory ostia of left maxillary sinus seen." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Accessory ostia of left maxillary sinus seen." + "</b>" + "</p>");
          }
        }

      }

      // Ehtomidal
      if (frmData.PnsEthmoidal) {
        // right
        if (frmData.PnsEthmoidalRight) {
          if (frmData.PnsEthmoidalRightPneumatization) {
            if (frmData.PnsEthmoidalRightPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsEthmoidalRightPneumatizationText.replace("{1}", frmData.PnsEthmoidalRightPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsEthmoidalRightPneumatizationText.replace("{1}", frmData.PnsEthmoidalRightPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsEthmoidalRightMusocalThicking) {
            if (frmData.PnsEthmoidalRightMusocalThickingType && !frmData.PnsEhtmoidalRightHyperdense) {
              report += "<p>" + "<b>" + text.PnsEthmoidalRightMusocalThickingText.replace("{1}", frmData.PnsEthmoidalRightMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsEthmoidalRightMusocalThickingText.replace("{1}", frmData.PnsEthmoidalRightMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsEthmoidalRightMusocalThickingType && frmData.PnsEhtmoidalRightHyperdense) {
                report += "<p>" + "<b>" + text.PnsEthmoidalRightMusocalThickingText.replace("{1}", frmData.PnsEthmoidalRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsEthmoidalRightMusocalThickingText.replace("{1}", frmData.PnsEthmoidalRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }
          }
          if (frmData.PnsEhtmoidalRightAirFluid) {
            report += "<p>" + "<b>" + "Air fluid levels seen in right ethmoidal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluids level seen in right ethmoidal sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsEthmoidalRightBonyErosions) {
            report += "<p>" + "<b>" + "Erosions seen in bony walls of right ethmoidal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "</b>" + "Erosions seen in bony walls of right ethmoidal sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsEthmoidalRightSeptae) {
            if (frmData.PnsEthmoidalRightSeptaeType) {
              report += "<p>" + "<b>" + text.PnsEthmoidalRightSeptaeText.replace("{1}", frmData.PnsEthmoidalRightSeptaeType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsEthmoidalRightSeptaeText.replace("{1}", frmData.PnsEthmoidalRightSeptaeType) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsEhtmoidalRightVarient) {
            if (frmData.PnsEhtmoidalRightVarientHaller) {
              report += "<p>" + "<b>" + "Haller cells present on right side." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Haller cells present on right side." + "</b>" + "</p>");
            }
            if (frmData.PnsEhtmoidalRightVarientOnodi) {
              report += "<p>" + "<b>" + "Onodi cells present on right side." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Onodi cells present on right side." + "</b>" + "</p>");
            }
          }




        }
        // left
        if (frmData.PnsEthmoidalLeft) {
          if (frmData.PnsEthmoidalLeftPneumatization) {
            if (frmData.PnsEthmoidalLeftPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsEthmoidalLeftPneumatizationText.replace("{1}", frmData.PnsEthmoidalLeftPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsEthmoidalLeftPneumatizationText.replace("{1}", frmData.PnsEthmoidalLeftPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsEthmoidalLeftMusocalThicking) {
            if (frmData.PnsEthmoidalLeftMusocalThickingType && !frmData.PnsEhtmoidalLeftHyperdense) {
              report += "<p>" + "<b>" + text.PnsEthmoidalLeftMusocalThickingText.replace("{1}", frmData.PnsEthmoidalLeftMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsEthmoidalLeftMusocalThickingText.replace("{1}", frmData.PnsEthmoidalLeftMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsEthmoidalLeftMusocalThickingType && frmData.PnsEhtmoidalLeftHyperdense) {
                report += "<p>" + "<b>" + text.PnsEthmoidalLeftMusocalThickingText.replace("{1}", frmData.PnsEthmoidalLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsEthmoidalLeftMusocalThickingText.replace("{1}", frmData.PnsEthmoidalLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }
          }
          if (frmData.PnsEhtmoidalLeftAirFluid) {
            report += "<p>" + "<b>" + "Air fluid level seen in left ethmoidal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluid level seen in left ethmoidal sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsEthmoidalLeftBonyErosions) {
            report += "<p>" + "<b>" + "Erosions seen in bony walls of left ethmoidal sinus." + "</b>" + "</p>";
            impression.push("<p>" + "</b>" + "Erosions seen in bony walls of left ethmoidal sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsEthmoidalLeftSeptae) {
            if (frmData.PnsEthmoidalLeftSeptaeType) {
              report += "<p>" + "<b>" + text.PnsEthmoidalLeftSeptaeText.replace("{1}", frmData.PnsEthmoidalLeftSeptaeType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsEthmoidalLeftSeptaeText.replace("{1}", frmData.PnsEthmoidalLeftSeptaeType) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsEhtmoidalLeftVarient) {
            if (frmData.PnsEhtmoidalLeftVarientHaller) {
              report += "<p>" + "<b>" + "Haller cells present on left side." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Haller cells present on left side." + "</b>" + "</p>");
            }
            if (frmData.PnsEhtmoidalLeftVarientOnodi) {
              report += "<p>" + "<b>" + "Onodi cells present on left side." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Onodi cells present on left side." + "</b>" + "</p>");
            }
          }
        }
      }

      // shpenoid
      if (frmData.PnsSphenoid) {
        // right
        if (frmData.PnsSphenoidRight) {
          if (frmData.PnsSphenoidRightPneumatization) {
            if (frmData.PnsSphenoidRightPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsSphenoidRightPneumatizationText.replace("{1}", frmData.PnsSphenoidRightPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsSphenoidRightPneumatizationText.replace("{1}", frmData.PnsSphenoidRightPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsSphenoidRightMusocalThicking) {
            if (frmData.PnsSphenoidRightMusocalThickingType && !frmData.PnsSphenoidRightHyperdense) {
              report += "<p>" + "<b>" + text.PnsSphenoidRightMusocalThickingText.replace("{1}", frmData.PnsSphenoidRightMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsSphenoidRightMusocalThickingText.replace("{1}", frmData.PnsSphenoidRightMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsSphenoidRightMusocalThickingType && frmData.PnsSphenoidRightHyperdense) {
                report += "<p>" + "<b>" + text.PnsSphenoidRightMusocalThickingText.replace("{1}", frmData.PnsSphenoidRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsSphenoidRightMusocalThickingText.replace("{1}", frmData.PnsSphenoidRightMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }
          }
          if (frmData.PnsSphenoidRightAirFluid) {
            report += "<p>" + "<b>" + "Air fluid level seen in right sphenoid sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluid level seen in right sphenoid sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsSphenoidRightEthmoid) {
            if (frmData.PnsSphenoidRightEthmoidType === 'patent') {
              report += "<p>" + "<b>" + "Sphenoid-ethmoid recess is patent in right frontal sinus." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "sphenoid-ethmoid recess is patent in right frontal sinus." + "</b>" + "</p>");
            }
            if (frmData.PnsSphenoidRightEthmoidType === 'partial narrowing') {
              report += "<p>" + "<b>" + "There is partial narrowing of right sphenoid-ethmoid recess." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is partial narrowing of right Sphenoid-ethmoid recess." + "</b>" + "</p>");
            }
            if (frmData.PnsSphenoidRightEthmoidType === 'complete occlusion') {
              report += "<p>" + "<b>" + "Complete occlusion of right sphenoid-ethmoid recess seen. " + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Complete occlusion of right sphenoid-ethmoid recess seen." + "</b>" + "</p>");
            }
          }
          if (frmData.PnsSphenoidRightBonyErosions) {
            report += "<p>" + "<b>" + "Erosions seen in bony walls of right sphenoid sinus." + "</b>" + "</p>";
            impression.push("<p>" + "</b>" + "Erosions seen in bony walls of right sphenoid sinus." + "</b>" + "</p>");
          }
        }
        // left
        if (frmData.PnsSphenoidLeft) {
          if (frmData.PnsSphenoidLeftPneumatization) {
            if (frmData.PnsSphenoidLeftPneumatizationtype) {
              report += "<p>" + "<b>" + text.PnsSphenoidLeftPneumatizationText.replace("{1}", frmData.PnsSphenoidLeftPneumatizationtype) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsSphenoidLeftPneumatizationText.replace("{1}", frmData.PnsSphenoidLeftPneumatizationtype) + "</b>" + "</p>");
            }
          }
          if (frmData.PnsSphenoidLeftMusocalThicking) {
            if (frmData.PnsSphenoidLeftMusocalThickingType && !frmData.PnsSphenoidLeftHyperdense) {
              report += "<p>" + "<b>" + text.PnsSphenoidLeftMusocalThickingText.replace("{1}", frmData.PnsSphenoidLeftMusocalThickingType) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + text.PnsSphenoidLeftMusocalThickingText.replace("{1}", frmData.PnsSphenoidLeftMusocalThickingType) + "</b>" + "</p>");
            }
            else {
              if (frmData.PnsSphenoidLeftMusocalThickingType && frmData.PnsSphenoidLeftHyperdense) {
                report += "<p>" + "<b>" + text.PnsSphenoidLeftMusocalThickingText.replace("{1}", frmData.PnsSphenoidLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.PnsSphenoidLeftMusocalThickingText.replace("{1}", frmData.PnsSphenoidLeftMusocalThickingType) + " with hyperdense." + "</b>" + "</p>");
              }
            }

          }
          if (frmData.PnsSphenoidLeftAirFluid) {
            report += "<p>" + "<b>" + "Air fluid level seen in left sphenoid sinus." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Air fluid level seen in left sphenoid sinus." + "</b>" + "</p>");
          }
          if (frmData.PnsSphenoidLeftEthmoid) {
            if (frmData.PnsSphenoidLeftEthmoidType === 'patent') {
              report += "<p>" + "<b>" + "Sphenoid-ethmoid recess is patent in left frontal sinus." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Sphenoid-ethmoid recess is patent in left frontal sinus.." + "</b>" + "</p>");
            }
            if (frmData.PnsSphenoidLeftEthmoidType === 'partial narrowing') {
              report += "<p>" + "<b>" + "There is partial narrowing of left sphenoid-ethmoid recess." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is partial narrowing of left sphenoid-ethmoid recess." + "</b>" + "</p>");
            }
            if (frmData.PnsSphenoidLeftEthmoidType === 'complete occlusion') {
              report += "<p>" + "<b>" + "Complete occlusion of left sphenoid-ethmoid recess seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Complete occlusion of left sphenoid-ethmoid recess seen." + "</b>" + "</p>");
            }
          }
          if (frmData.PnsSphenoidLeftBonyErosions) {
            report += "<p>" + "<b>" + "Erosions seen in bony walls of left sphenoid sinus." + "</b>" + "</p>";
            impression.push("<p>" + "</b>" + "Erosions seen in bony walls of left sphenoid sinus." + "</b>" + "</p>");
          }
        }
      }
    }
    // Nasal Cavity
    if (frmData.NasalCavity) {
      // DNS
      if (frmData.DNSNasalCavity) {
        if (frmData.DNSNasalCavityType === 'With bony spur') {
          if (frmData.DNSNasalCavityWithWithoutType === 'right') {
            report += "<p>" + "<b>" + "DNS toward right seen with bony spur." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "DNS toward right seen with bony spur." + "</b>" + "</p>");
          }
          if (frmData.DNSNasalCavityWithWithoutType === 'left') {
            report += "<p>" + "<b>" + "DNS toward left seen with bony spur." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "DNS toward left seen with bony spur." + "</b>" + "</p>");
          }
          if (frmData.DNSNasalCavityWithWithoutType === "'S' shaped") {
            report += "<p>" + "<b>" + "DNS 'S' shaped seen with bony spur." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "DNS 'S' shaped seen with bony spur." + "</b>" + "</p>");
          }
        }
        else {
          if (frmData.DNSNasalCavityWithWithoutType === 'right') {
            report += "<p>" + "<b>" + "DNS toward right seen." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "DNS toward right seen." + "</b>" + "</p>");
          }
          if (frmData.DNSNasalCavityWithWithoutType === 'left') {
            report += "<p>" + "<b>" + "DNS toward left seen." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "DNS toward left." + "</b>" + "</p>");
          }
          if (frmData.DNSNasalCavityWithWithoutType === "'S' shaped") {
            report += "<p>" + "<b>" + "DNS 'S' shaped seen." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "DNS 'S' shaped seen." + "</b>" + "</p>");
          }
        }

      }
      // Turbinate
      if (frmData.TurbinatesNasalCavity) {
        // right
        if (frmData.TurbinatesNasalRight) {
          if (frmData.TurbinatesNasalRightMiddle) {
            if (frmData.TurbinatesNasalRightConcha) {
              if (frmData.TurbinatesNasalRightConchaType) {
                report += "<p>" + "<b>" + text.TurbinatesNasalRightConchaText.replace("{1}", frmData.TurbinatesNasalRightConchaType) + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.TurbinatesNasalRightConchaText.replace("{1}", frmData.TurbinatesNasalRightConchaType) + "</b>" + "</p>")
              }
            }
            if (frmData.TurbinatesNasalRightHypertrophied) {
              report += "<p>" + "<b>" + "There is hypertrophied right middle turbinate." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is hypertrophied right middle turbinate." + "</b>" + "</p>");
            }
            if (frmData.TurbinatesNasalRightParadoxical) {
              report += "<p>" + "<b>" + "Paradoxical right middle turbinate is seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Paradoxical right middle turbinate is seen." + "</b>" + "</p>");
            }

          }
          if (frmData.TurbinatesNasalRightInferior) {
            if (frmData.TurbinatesNasalRightInferiorHypertrophied) {
              report += "<p>" + "<b>" + "There is hypertrophied right inferior turbinate." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is hypertrophied right inferior turbinate." + "</b>" + "</p>");
            }
          }
        }
        // left
        if (frmData.TurbinatesNasalLeft) {
          if (frmData.TurbinatesNasalLeftMiddle) {
            if (frmData.TurbinatesNasalLeftConcha) {
              if (frmData.TurbinatesNasalLeftConchaType) {
                report += "<p>" + "<b>" + text.TurbinatesNasalLeftConchaText.replace("{1}", frmData.TurbinatesNasalLeftConchaType) + "</b>" + "</p>";
                impression.push("<p>" + "<b>" + text.TurbinatesNasalLeftConchaText.replace("{1}", frmData.TurbinatesNasalLeftConchaType) + "</b>" + "</p>")
              }
            }
            if (frmData.TurbinatesNasalLeftHypertrophied) {
              report += "<p>" + "<b>" + "There is hypertrophied left middle turbinate." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is hypertrophied left middle turbinate." + "</b>" + "</p>");
            }
            if (frmData.TurbinatesNasalLeftParadoxical) {
              report += "<p>" + "<b>" + "Paradoxical left middle turbinate is seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Paradoxical left middle turbinate is seen." + "</b>" + "</p>");
            }
          }
          if (frmData.TurbinatesNasalLeftInferior) {
            if (frmData.TurbinatesNasalLeftInferiorHypertrophied) {
              report += "<p>" + "<b>" + "There is hypertrophied left inferior turbinate." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "There is hypertrophied left inferior turbinate." + "</b>" + "</p>");
            }
          }
        }
      }
      if (frmData.TurbinatesNasalLeftMiddle && !frmData.TurbinatesNasalRightMiddle) {
        if (!(frmData.TurbinatesNasalLeftConcha && frmData.TurbinatesNasalLeftHypertrophied && frmData.TurbinatesNasalLeftParadoxical)) {
          report += "<p>" + "Rest of the middle turbinates are normal." + "</p>";
        }
      }
      if (frmData.TurbinatesNasalRightMiddle && !frmData.TurbinatesNasalLeftMiddle) {
        if (!(frmData.TurbinatesNasalRightConcha && frmData.TurbinatesNasalRightHypertrophied && frmData.TurbinatesNasalRightParadoxical)) {
          report += "<p>" + "Rest of the middle turbinates are normal." + "</p>";
        }
      }

      // Musocal Thicking
      if (frmData.NasalMusocalThicking) {
        if (frmData.NasalMusocalThickingRight) {
          report += "<p>" + "<b>" + "Mucosal thickening seen in right nasal cavity." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Mucosal thickening seen in right nasal cavity." + "</b>" + "</p>");
        }
        if (frmData.NasalMusocalThickingLeft) {
          report += "<p>" + "<b>" + "Mucosal thickening seen in left nasal cavity." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Mucosal thickening seen in left nasal cavity." + "</b>" + "</p>");
        }
      }
    }
    // Miscellaneous
    if (frmData.Miscellaneous) {
      if (frmData.MiscellaneousTypeKeros) {
        if (frmData.MiscellaneousTypeKerosType) {
          report += "<p>" + "<b>" + text.MiscellaneousTypeKerosText.replace("{1}", frmData.MiscellaneousTypeKerosType) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.MiscellaneousTypeKerosText.replace("{1}", frmData.MiscellaneousTypeKerosType) + "</b>" + "</p>");
        }
      }
      if (frmData.MiscellaneousTypeOpticNerve) {
        if (frmData.MiscellaneousTypeOpticNerveType) {
          report += "<p>" + "<b>" + text.MiscellaneousTypeOpticNerveText.replace("{1}", frmData.MiscellaneousTypeOpticNerveType) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.MiscellaneousTypeOpticNerveText.replace("{1}", frmData.MiscellaneousTypeOpticNerveType) + "</b>" + "</p>");
        }
      }
      if (frmData.MiscellaneousbonyPneumatization) {
        // right
        if (frmData.MiscellaneousbonyPneumatizationRight) {
          if (frmData.MiscellaneousbonyPneumatizationAnteriorRight) {
            report += "<p>" + "<b>" + "Pneumatization of anterior clinoid process seen on right side." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Pneumatization of anterior clinoid process seen on right side." + "</b>" + "</p>");
          }
          if (frmData.MiscellaneousbonyPneumatizationPterygoidRight) {
            report += "<p>" + "<b>" + "Pneumatization of pterygoid plate seen on right side." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Pneumatization of pterygoid plate seen on right side." + "</b>" + "</p>");
          }
        }
        // left
        if (frmData.MiscellaneousbonyPneumatizationLeft) {
          if (frmData.MiscellaneousbonyPneumatizationAnteriorLeft) {
            report += "<p>" + "<b>" + "Pneumatization of anterior clinoid process seen on left side." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Pneumatization of anterior clinoid process seen on left side." + "</b>" + "</p>");
          }
          if (frmData.MiscellaneousbonyPneumatizationPterygoidRight) {
            report += "<p>" + "<b>" + "Pneumatization of pterygoid plate seen on left side." + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + "Pneumatization of pterygoid plate seen on left side." + "</b>" + "</p>");
          }
        }
      }
      if (frmData.MiscellaneousAdenoid) {
        if (frmData.MiscellaneousAdenoidyesType) {
          report += "<p>" + "<b>" + text.MiscellaneousAdenoidyesText.replace("{1}", frmData.MiscellaneousAdenoidyesType) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.MiscellaneousAdenoidyesText.replace("{1}", frmData.MiscellaneousAdenoidyesType) + "</b>" + "</p>");
        }
      }
      if (frmData.MiscellaneousMastoid) {
        // right
        if (frmData.MiscellaneousMastoidRight) {
          if (frmData.MiscellaneousMastoidRightSoftTissue) {
            if (frmData.MiscellaneousMastoidRightSoftTissueType === 'partial') {
              report += "<p>" + "<b>" + "Soft tissue density seen in some of the right mastoid air cells." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Soft tissue density seen in some of the right mastoid air cells." + "</b>" + "</p>");
            }
            if (frmData.MiscellaneousMastoidRightSoftTissueType === 'complete') {
              report += "<p>" + "<b>" + "Soft tissue density seen in all the right mastoid air cells." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Soft tissue density seen in all the right mastoid air cells." + "</b>" + "</p>");
            }
          }
        }
        // left
        if (frmData.MiscellaneousMastoidLeft) {
          if (frmData.MiscellaneousMastoidLeftSoftTissue) {
            if (frmData.MiscellaneousMastoidLeftSoftTissueType === 'partial') {
              report += "<p>" + "<b>" + "Soft tissue density seen in some of the left mastoid air cells." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Soft tissue density seen in some of the left mastoid air cells." + "</b>" + "</p>");
            }
            if (frmData.MiscellaneousMastoidLeftSoftTissueType === 'complete') {
              report += "<p>" + "<b>" + "Soft tissue density seen in all the left mastoid air cells." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Soft tissue density seen in all the left mastoid air cells." + "</b>" + "</p>");
            }

          }
        }

      }
      if (frmData.MiscellaneousPosterior) {
        // right
        if (frmData.MiscellaneousPosteriorRight) {
          if (frmData.MiscellaneousPosteriorStenosisRight) {
            if (frmData.MiscellaneousPosteriorStenosisRightType === 'bony') {
              report += "<p>" + "<b>" + "Bony stenosis of right posterior choana seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Bony stenosis of right posterior choana seen." + "</b>" + "</p>");
            }
            if (frmData.MiscellaneousPosteriorStenosisRightType === 'membranous') {
              report += "<p>" + "<b>" + "Membranous stenosis of right posterior choana seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Membranous stenosis of right posterior choana seen." + "</b>" + "</p>");
            }
          }
        }
        // left
        if (frmData.MiscellaneousPosteriorLeft) {
          if (frmData.MiscellaneousPosteriorStenosisLeft) {
            if (frmData.MiscellaneousPosteriorStenosisLeftType === 'bony') {
              report += "<p>" + "<b>" + "Bony stenosis of left posterior choana seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Bony stenosis of left posterior choana seen." + "</b>" + "</p>");
            }
            if (frmData.MiscellaneousPosteriorStenosisLeftType === 'membranous') {
              report += "<p>" + "<b>" + "Membranous stenosis of left posterior choana seen." + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + "Membranous stenosis of left posterior choana seen." + "</b>" + "</p>");
            }

          }
        }

      }
      if (frmData.MiscellaneousOsteoma) {
        if (frmData.MiscellaneousOsteomaRight) {
          let arr = []
          if (frmData.MiscellaneousOsteomaRightFrontal) {
            arr.push('frontal')
          }
          if (frmData.MiscellaneousOsteomaRightEthmoidal) {
            arr.push('ethmoidal')
          }
          if (frmData.MiscellaneousOsteomaRightMaxillary) {
            arr.push('maxillary')
          }
          if (frmData.MiscellaneousOsteomaRightSphenoid) {
            arr.push('sphenoid')
          }
          report += "<p>" + "<b>" + text.OsteomaText.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousOsteomaRightText) + '</b>' + "</p>";
          impression.push("<p>" + "<b>" + text.OsteomaText.replace("{1}", arr.join(', ')) + '</b>' + "</p>");
        }

        if (frmData.MiscellaneousOsteomaLeft) {
          let arr = []
          if (frmData.MiscellaneousOsteomaLeftFrontal) {
            arr.push('frontal')
          }
          if (frmData.MiscellaneousOsteomaLeftEthmoidal) {
            arr.push('ethmoidal')
          }
          if (frmData.MiscellaneousOsteomaLeftMaxillary) {
            arr.push('maxillary')
          }
          if (frmData.MiscellaneousOsteomaLeftSphenoid) {
            arr.push('sphenoid')
          }
          report += "<p>" + "<b>" + text.OsteomaText1.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousOsteomaLeftText) + '</b>' + "</p>";
          impression.push("<p>" + "<b>" + text.OsteomaText1.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousOsteomaLeftText) + '</b>' + "</p>");
        }
      }
      if (frmData.MiscellaneousMucocele) {
        if (frmData.MiscellaneousMucoceleRight) {
          let arr = []
          if (frmData.MiscellaneousMucoceleRightFrontal) {
            arr.push('frontal')
          }
          if(frmData.MiscellaneousMucoceleRightEthmoidal){
            arr.push('ethmoidal')
          }
          if(frmData.MiscellaneousMucoceleRightMaxillary){
            arr.push('maxillary')
          }
          if(frmData.MiscellaneousMucoceleRightSphenoid){
            arr.push('sphenoid')
          }
          report += "<p>" + "<b>" + text.MucoceleText.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousMucoceleRightText) + '</b>' + "</p>";
          impression.push("<p>" + "<b>" + text.MucoceleText.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousMucoceleRightText) + '</b>' + "</p>");
        }
        if (frmData.MiscellaneousMucoceleLeft) {
          let arr = []
          if (frmData.MiscellaneousMucoceleLeftFrontal) {
            arr.push('frontal')
          }
          if(frmData.MiscellaneousMucoceleLeftEthmoidal){
            arr.push('ethmoidal')
          }
          if(frmData.MiscellaneousMucoceleLeftMaxillary){
            arr.push('maxillary')
          }
          if(frmData.MiscellaneousMucoceleLeftSphenoid){
            arr.push('sphenoid')
          }
          report += "<p>" + "<b>" + text.MucoceleText.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousMucoceleLeftText) + '</b>' + "</p>";
          impression.push("<p>" + "<b>" + text.MucoceleText.replace("{1}", arr.join(', ')).replace("{2}", frmData.MiscellaneousMucoceleLeftText) + '</b>' + "</p>");
        }
      }
    }

    // Frontal
    if (!frmData.PnsFrontalRightAirFluid && !frmData.PnsFrontalLeftAirFluid
      && !frmData.PnsMaxillaryRightAirFluid && !frmData.PnsMaxillaryLeftAirFluid
      && !frmData.PnsEthmoidalRightAirFluid && !frmData.PnsEthmoidalLeftAirFluid
      && !frmData.PnsSphenoidRightAirFluid && !frmData.PnsSphenoidLeftAirFluid && !frmData.Normalsinus) {
      report += "<p>" + "No air fluid levels seen in both frontal, maxillary, ethmoidal, sphenoid sinus." + "</p>";
    }

    if (!frmData.PnsFrontalRightBonyErosions
      && !frmData.PnsFrontalLeftBonyErosions
      && !frmData.PnsMaxillaryRightBonyErosions
      && !frmData.PnsMaxillaryLeftBonyErosions
      && !frmData.PnsEthmoidalRightBonyErosions
      && !frmData.PnsEthmoidalLeftBonyErosions
      && !frmData.PnsSphenoidRightBonyErosions
      && !frmData.PnsSphenoidLeftBonyErosions
      && !frmData.Normalsinus) {
      report += "<p>" + "No bony erosion seen." + "</p>";
    }

    if (!frmData.TurbinatesNasalCavity && !frmData.Normalsinus) {
      report += "<p>" + "Middle and inferior turbinate are normal on both sides." + "</p>";
    }

    if (!frmData.TurbinatesNasalLeftMiddle && frmData.TurbinatesNasalRightMiddle && !frmData.Normalsinus) {
      report += "<p>" + "Middle turbinate are normal on left side." + "</p>";
    }
    if (!frmData.TurbinatesNasalRightMiddle && frmData.TurbinatesNasalLeftMiddle && !frmData.Normalsinus) {
      report += "<p>" + "Middle turbinate are normal on right side." + "</p>";
    }

    if (frmData.TurbinatesNasalRight || frmData.TurbinatesNasalLeft) {
      if (!frmData.TurbinatesNasalLeftInferior && !frmData.TurbinatesNasalRightInferior) {
        report += "<p>" + "Inferior turbinate are normal on both sides." + "</p>";
      }
    }

    if (frmData.TurbinatesNasalRight || frmData.TurbinatesNasalLeft) {
      if (!frmData.TurbinatesNasalLeftMiddle && !frmData.TurbinatesNasalRightMiddle) {
        report += "<p>" + "Middle turbinate are normal on both sides." + "</p>";
      }
    }

    if (!frmData.TurbinatesNasalRightInferior && frmData.TurbinatesNasalLeftInferior && !frmData.Normalsinus) {
      report += "<p>" + "Inferior turbinate is normal on right side." + "</p>";
    }
    if (!frmData.TurbinatesNasalLeftInferior && frmData.TurbinatesNasalRightInferior && !frmData.Normalsinus) {
      report += "<p>" + "Inferior turbinate is normal on left side." + "</p>";
    }

    if (!frmData.MiscellaneousMastoid && !frmData.Normalsinus) {
      report += "<p>" + "Mastoid air cells are normal on both sides." + "</p>";
    }

    if (!frmData.MiscellaneousPosterior && !frmData.Normalsinus) {
      report += "<p>" + "Posterior choana is normal on both sides." + "</p>";
    }

    var current_user = JSON.parse(document.getElementById("current-user").textContent);

    report +=
      this.pageBreak() +

      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user); // TO BE ADDED

    this.setState({ reportFrmData: report }, () => {
      this.props.generateReport(report);
    });
  }



  pageBreak() {
    return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
  }
  //TO BE ADDED
  getCorads(user) {
    return (
      "<p><br><img src='" + user.signature + "' height='75' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + ", MBBS</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "<p><strong>IMPRESSION:</strong></p><p>";
    return (
      text +
      (impression.length !== 0
        ? impression.join("")
        : "<strong>• No significant abnormality in the paranasal sinuses.</strong>") +
      "</p>"
    );
  }

  render() {
    const { frmData } = this.state;
    return (
      <div>
        {
          <PopUp
            handleClick={this.props.handleClick}
            data={frmData}
            handleData={this.handleData}
            name="CT PARANASAL SINUSES"
          />
        }
      </div>
    );
  }
}

export default PnsAbnormal;

