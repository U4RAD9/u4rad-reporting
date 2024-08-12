import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpXraySpineLumber";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";

class XraySpineLumber extends Component {
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
        Cervical: false,
        CervicalNormal: false,
        CervicalDegenerative: false,
        cervicalLordosis: false,
        CervicalOsteophytes: false,
        CervicalEndplateSclerosis: false,
        CervicalVacuumPhenomenon: false,
        CervicalSchmorlsNode: false,
        CervicalReducedDiscHeight: false,
        CervicalCompressionFracture: false,
        CervicalRetropultionFracture: false,
        CervicalBurstFracture: false,
        CervicalChanceFracture: false,
        CervicalFlexionTearDropFracture: false,
        CervicalExtensionTearDropFracture: false,
        CervicalDonsFrature: false,
        CervicalSpinousProcessFracture: false,
        CervicalFracture: false,
        CervicalSpondylolisthesis: false,
        Cervicalretrolisthesis: false,
        CervicalretrolisthesisOver: false,
        Cervicalanterolisthesis: false,
        CervicalanterolisthesisOver: false,
        CervicalretrolisthesisOf: false,
        CervicalanterolisthesisOf: false,
        CervicalanterolisthesisOver: false,
        CervicalFacetJointDislocationFrature: false,
        CervicalOssification: false,
        CervicalCollapse: false,
        CervicalGibbusDeformity: false,
        CervicalInterVertebralDiscSpace: false,



        CervicalanterolisthesisOfC1: false,
        CervicalanterolisthesisOfC2: false,
        CervicalanterolisthesisOfC3: false,
        CervicalanterolisthesisOfC4: false,
        CervicalanterolisthesisOfC5: false,
        CervicalanterolisthesisOfC6: false,
        CervicalanterolisthesisOfC7: false,

        CervicalEndplateSclerosisC1: false,
        CervicalEndplateSclerosisC2: false,
        CervicalEndplateSclerosisC3: false,
        CervicalEndplateSclerosisC4: false,
        CervicalEndplateSclerosisC5: false,
        CervicalEndplateSclerosisC6: false,
        CervicalEndplateSclerosisC7: false,

        CervicalInterVertebralDiscSpaceC1C2: false,
        CervicalInterVertebralDiscSpaceC2C3: false,
        CervicalInterVertebralDiscSpaceC3C4: false,
        CervicalInterVertebralDiscSpaceC4C5: false,
        CervicalInterVertebralDiscSpaceC5C6: false,
        CervicalEndplateSclerosisC6: false,
        CervicalEndplateSclerosisC7: false,

        CervicalVacuumPhenomenonC1: false,
        CervicalVacuumPhenomenonC2: false,
        CervicalVacuumPhenomenonC3: false,
        CervicalVacuumPhenomenonC4: false,
        CervicalVacuumPhenomenonC5: false,
        CervicalVacuumPhenomenonC6: false,
        CervicalVacuumPhenomenonC7: false,

        CervicalSchmorlsNodeC1: false,
        CervicalSchmorlsNodeC2: false,
        CervicalSchmorlsNodeC3: false,
        CervicalSchmorlsNodeC4: false,
        CervicalSchmorlsNodeC5: false,
        CervicalSchmorlsNodeC6: false,
        CervicalSchmorlsNodeC7: false,


      }
    }
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

    if (frmData.NameTextFR13 && frmData.IDTextFR13 && frmData.AgeTextFR13 && frmData.GenderTextFR13)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR13 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR13 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR13 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR13 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR13 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR13 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if (frmData.SpineView) {
      let arr = []
      if (frmData.SpineViewAP) {
        arr.push('AP')
      }
      if (frmData.SpineViewLateral) {
        arr.push('Lateral')
      }
      if (frmData.SpineViewFlexion) {
        arr.push('Flexion')
      }
      if (frmData.SpineViewExtension) {
        arr.push('Extension')
      }
      report += "<h5>" + "<strong>" + "<u>" + text.SpineViewTextCervical.replace("{1}", arr.join('/')) + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
    }


    // Cervical Degenerative**********
    if (frmData.CervicalDegenerative) {

      // Cervical Losrosis*********
      if (frmData.cervicalLordosis) {
        if (frmData.cervicalLordosisType === 'Maintained') {
          report += "<p>" + "<b>" + "Lordosis is maintained.<br><br> Loss of normal curvature is seen." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Lordosis is maintained." + "</b>" + "</p>");
        }
        if (frmData.cervicalLordosisType === 'Straightening') {
          report += "<p>" + "<b>" + "Straightening of spine is seen.<br><br> Loss of normal curvature is seen." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Straightening of spine is seen." + "</b>" + "</p>");
        }
        if (frmData.cervicalLordosisType === 'Exaggerated') {
          report += "<p>" + "<b>" + "Exaggeration of spine is seen.<br><br> Loss of normal curvature is seen." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Exaggeration of spine is seen." + "</b>" + "</p>");
        }
        if (frmData.cervicalLordosisType === 'Reversal') {
          report += "<p>" + "<b>" + "Reversal of spine is seen.<br><br> Loss of normal curvature is seen." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Reversal of spine is seen." + "</b>" + "</p>");
        }
      }
      // Osteophytes*************
      if (frmData.CervicalOsteophytes) {
        let arr = []
        if (frmData.CervicalOsteophytesC1) {
          arr.push('L1')
        }
        if (frmData.CervicalOsteophytesC2) {
          arr.push('L2')
        }
        if (frmData.CervicalOsteophytesC3) {
          arr.push('L3')
        }
        if (frmData.CervicalOsteophytesC4) {
          arr.push('L4')
        }
        if (frmData.CervicalOsteophytesC5) {
          arr.push('L5')
        }
        if (frmData.CervicalOsteophytesC6) {
          arr.push('L6')
        }
        if (frmData.CervicalOsteophytesC7) {
          arr.push('L7')
        }

        report += "<p>" + "<b>" + text.CervicalOsteophytesText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.LumberOsteophytesImpression + "</b>" + "</p>");

      }
      // EndplatesSclerosis************
      if (frmData.CervicalEndplateSclerosis) {
        let arr = []
        if (frmData.CervicalEndplateSclerosisC1) {
          arr.push('L1')
        }
        if (frmData.CervicalEndplateSclerosisC2) {
          arr.push('L2')
        }
        if (frmData.CervicalEndplateSclerosisC3) {
          arr.push('L3')
        }
        if (frmData.CervicalEndplateSclerosisC4) {
          arr.push('L4')
        }
        if (frmData.CervicalEndplateSclerosisC5) {
          arr.push('L5')
        }
        if (frmData.CervicalEndplateSclerosisC6) {
          arr.push('L6')
        }
        if (frmData.CervicalEndplateSclerosisC7) {
          arr.push('L7')
        }


        report += "<p>" + "<b>" + text.CervicalEndPlatesText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.LumberEndPlatesImpression + "</b>" + "</p>");

      }
      // Vacuum Phenomenon************
      if (frmData.CervicalVacuumPhenomenon) {
        let arr = []
        if (frmData.CervicalVacuumPhenomenonC1) {
          arr.push("L1")
        }
        if (frmData.CervicalVacuumPhenomenonC2) {
          arr.push("L2")
        }
        if (frmData.CervicalVacuumPhenomenonC3) {
          arr.push("L3")
        }
        if (frmData.CervicalVacuumPhenomenonC4) {
          arr.push("L4")
        }
        if (frmData.CervicalVacuumPhenomenonC5) {
          arr.push("L5")
        }
        if (frmData.CervicalVacuumPhenomenonC6) {
          arr.push("L6")
        }
        if (frmData.CervicalVacuumPhenomenonC7) {
          arr.push("L7")
        }
        report += "<p>" + "<b>" + text.CervicalVacuumPhenomenonText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalVacuumPhenomenonImpression + "</b>" + "</p>");

      }
      // schmorl's nodes***************
      if (frmData.CervicalSchmorlsNode) {
        let arr = []
        if (frmData.CervicalSchmorlsNodeC1) {
          arr.push('L1')
        }
        if (frmData.CervicalSchmorlsNodeC2) {
          arr.push('L2')
        }
        if (frmData.CervicalSchmorlsNodeC3) {
          arr.push('L3')
        }
        if (frmData.CervicalSchmorlsNodeC4) {
          arr.push('L4')
        }
        if (frmData.CervicalSchmorlsNodeC5) {
          arr.push('L5')
        }
        if (frmData.CervicalSchmorlsNodeC6) {
          arr.push('L6')
        }
        if (frmData.CervicalSchmorlsNodeC7) {
          arr.push('L7')
        }

        report += "<p>" + "<b>" + text.CervicalSchmorlNodesText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalSchmorlNodesImpression + "</b>" + "</p>");

      }
      // Inter Vertebral disc space************
      if (frmData.CervicalInterVertebralDiscSpace) {

        let arr = []
        // ********************Single OpacitiesType*****************Date: 05/03/22 Hitesh Mishra******
        if (frmData.CervicalInterVertebralDiscSpaceC1C2) {
          arr.push('L1-L2')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC2C3) {
          arr.push('L2-L3')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC3C4) {
          arr.push('L3-L4')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC4C5) {
          arr.push('L4-L5')
        }
        report += "<p>" + "<b>" + text.CervicalInterVertebralDiscSpaceText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalInterVertebralDiscSpaceImpression.replace("{1}", arr.join(", ")) + "</b>" + "</p>");
      }
    }


    // Cervical Fracture************
    if (frmData.CervicalFracture) {


      // Cervical Compression fracture**********
      if (frmData.CervicalCompressionFracture) {
        let arr = []
        if (frmData.CervicalCompressionFractureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalCompressionFractureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalCompressionFractureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalCompressionFractureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalCompressionFractureC5) {
          arr.push('L5')
        }
        report += "<p>" + "<b>" + text.CervicalCompressionFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalCompressionFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>");
      }

      //  Cervical Burst farcture**********
      if (frmData.CervicalBurstFracture) {
        let arr = []
        if (frmData.CervicalBurstFractureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalBurstFractureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalBurstFractureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalBurstFractureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalBurstFractureC5) {
          arr.push('L5')
        }

        report += "<p>" + "<b>" + text.CervicalBurstFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalBurstFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>");
      }

      // Cervical Change fracture*********
      if (frmData.CervicalChanceFracture) {
        let arr = []
        if (frmData.CervicalChanceFractureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalChanceFractureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalChanceFractureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalChanceFractureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalChanceFractureC5) {
          arr.push('L5')
        }

        report += "<p>" + "<b>" + text.CervicalChangeFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalChangeFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>");
      }

      // Flexion Tear drop fracture**********
      if (frmData.CervicalFlexionTearDropFracture) {
        let arr = []
        if (frmData.CervicalFlexionTearDropFractureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalFlexionTearDropFractureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalFlexionTearDropFractureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalFlexionTearDropFractureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalFlexionTearDropFractureC5) {
          arr.push('L5')
        }

        report += "<p>" + "<b>" + text.CervicalFlexionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalFlexionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>");
      }

      // Extension tear drop fracture*********
      if (frmData.CervicalExtensionTearDropFracture) {
        let arr = []
        if (frmData.CervicalExtensionTearDropFractureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalExtensionTearDropFractureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalExtensionTearDropFractureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalExtensionTearDropFractureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalExtensionTearDropFractureC5) {
          arr.push('L5')
        }

        report += "<p>" + "<b>" + text.CervicalExtensionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalExtensionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>");
      }
      // Dens fracture****************
      if (frmData.CervicalDonsFrature) {
        if (frmData.CervicalDonsFratureType === 'Type 1'
          || frmData.CervicalDonsFratureType === 'Type 2'
          || frmData.CervicalDonsFratureType === 'Type 3') {
          report += "<p>" + "<b>" + text.CervicalDonsFractureText.replace("{1}", frmData.CervicalDonsFratureType) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalDonsFractureText.replace("{1}", frmData.CervicalDonsFratureType) + "</b>" + "</p>");
        }
      }
      // Spinous Process Fracture*********
      if (frmData.CervicalSpinousProcessFracture) {
        let arr = []

        if (frmData.CervicalSpinousProcessFractureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalSpinousProcessFractureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalSpinousProcessFractureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalSpinousProcessFractureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalSpinousProcessFractureC5) {
          arr.push('L5')
        }

        report += "<p>" + "<b>" + text.CervicalSpinousProcessText.replace("{1}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalSpinousProcessText.replace("{1}", arr.join(', ')) + "</b>" + "</p>");
      }
    }

    // Cervical Spondylolisthesis************
    if (frmData.CervicalSpondylolisthesis) {

      if (frmData.CervicalretrolisthesisOf) {
        let arr = []
        if (frmData.CervicalretrolisthesisOfC1) {
          arr.push('L1 Over L2')
        }
        if (frmData.CervicalretrolisthesisOfC2) {
          arr.push('L2 Over L3')
        }
        if (frmData.CervicalretrolisthesisOfC3) {
          arr.push('L3 Over L4')
        }
        if (frmData.CervicalretrolisthesisOfC4) {
          arr.push('L4 Over L5')
        }


        if (!frmData.RetroSpondylosis) {
          report += "<p>" + "<b>" + text.CervicalretrolisthesisOfWithText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalretrolisthesisOfWithText.replace("{1}", arr.join(", ")) + "</b>" + "</p>");
        }
        else {
          report += "<p>" + "<b>" + text.CervicalretrolisthesisOfWithText1.replace("{1}", arr.join(", ")) + ' with spondylosis.' + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalretrolisthesisOfWithText1.replace("{1}", arr.join(", ")) + ' with spondylosis.' + "</b>" + "</p>");
        }
      }
      if (frmData.CervicalanterolisthesisOf) {
        let arr = []
        if (frmData.CervicalanterolisthesisOfC1) {
          arr.push('L1 Over L2')
        }
        if (frmData.CervicalanterolisthesisOfC2) {
          arr.push('L2 Over L3')
        }
        if (frmData.CervicalanterolisthesisOfC3) {
          arr.push('L3 Over L4')
        }
        if (frmData.CervicalanterolisthesisOfC4) {
          arr.push('L4 Over L5')
        }

        if (!frmData.AntroSpondylosis) {
          report += "<p>" + "<b>" + text.CervicalanterolisthesOfWithText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalanterolisthesOfWithText.replace("{1}", arr.join(", ")) + "</b>" + "</p>");
        }
        else {
          report += "<p>" + "<b>" + text.CervicalanterolisthesOfWithText1.replace("{1}", arr.join(", ")) + ' with spondylosis.' + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalanterolisthesOfWithText.replace("{1}", arr.join(", ")) + ' with spondylosis.' + "</b>" + "</p>");
        }
      }
    }

    // FacetJoint Dislocation Frature*********
    if (frmData.CervicalFacetJointDislocationFrature) {
      //***************
      if (frmData.CervicalFacetJointDislocationFratureType) {
        let arr = []
        if (frmData.CervicalFacetJointDislocationFratureC1) {
          arr.push('L1')
        }
        if (frmData.CervicalFacetJointDislocationFratureC2) {
          arr.push('L2')
        }
        if (frmData.CervicalFacetJointDislocationFratureC3) {
          arr.push('L3')
        }
        if (frmData.CervicalFacetJointDislocationFratureC4) {
          arr.push('L4')
        }
        if (frmData.CervicalFacetJointDislocationFratureC5) {
          arr.push('L5')
        }

        report += "<p>" + "<b>" + text.CervicalFacetJointDislocationText.replace("{1}", frmData.CervicalFacetJointDislocationFratureType).replace("{2}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalFacetJointDislocationText.replace("{1}", frmData.CervicalFacetJointDislocationFratureType).replace("{2}", arr.join(', ')) + "</b>" + "</p>");
      }
    }



    // Cervical Ostepenia***************
    if (frmData.CerivicalOsteopenia) {
      report += "<p>" + "<b>" + "Osteopenia is seen." + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + "Osteopenia is seen." + "</b>" + "</p>");
    }

    // Collapse*************
    if (frmData.CervicalCollapse) {
      let arr = []
      if (frmData.CervicalCollapseC1) {
        arr.push('L1')
      }
      if (frmData.CervicalCollapseC2) {
        arr.push('L2')
      }
      if (frmData.CervicalCollapseC3) {
        arr.push('L3')
      }
      if (frmData.CervicalCollapseC4) {
        arr.push('L4')
      }
      if (frmData.CervicalCollapseC) {
        arr.push('L5')
      }

      report += "<p>" + "<b>" + text.CervicalCoolapseText.replace("{1}", arr.join(", ")) + "</b>" + "</p>"
    }


    //Text
    if (frmData.CervicalText) {
      report += "<p>" + "<b>" + frmData.CervicalText + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + frmData.CervicalText + "</b>" + "</p>")
    }


    if (frmData.CervicalInterVertebralDiscSpace) {
      report += "<p>" + "Rest of the Inter vertebral disc space are normal." + "</p>";
    }


    // cervical Normal************
    if (frmData.NormalSpine) {
      report += "<p>" + "Normal lumber curvature is maintained.<br><br>Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>"
    }



    // Degenerative without Inter Vertebral
    if (frmData.CervicalDegenerative && !frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture && !frmData.CervicalSpondylolisthesis
      && !frmData.CervicalFacetJointDislocationFrature && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
      report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
    }
    // With Inter Vertebral 
    else {
      if (frmData.CervicalDegenerative && frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture && !frmData.CervicalSpondylolisthesis
        && !frmData.CervicalFacetJointDislocationFrature && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
      }
    }

    // Degenerative without Inter Vertebral and rest line.
    if (frmData.CervicalDegenerative && !frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
      || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
      report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
    }
    // Degenerative with Inter Vertebral and rest line.
    else {
      if (frmData.CervicalDegenerative && frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
        || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
      }
    }


    // Fracture without spinous Process
    if (frmData.CervicalFracture && !frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative &&
      !frmData.CervicalSpondylolisthesis && !frmData.CervicalFacetJointDislocationFrature
      && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
      report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
    }
    // Fracture with spinous Process
    else {
      if (frmData.CervicalFracture && frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative &&
        !frmData.CervicalSpondylolisthesis && !frmData.CervicalFacetJointDislocationFrature
        && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
      }
    }

    // Fracture without spinous Process and rest
    if (frmData.CervicalFracture && !frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
      || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
      report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
    }
    // Fracture with spinous Process rest
    else {
      if (frmData.CervicalFracture && frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
        || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes is normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
      }
    }



    // Fracture and Degenerative
    if (frmData.CervicalFracture && frmData.CervicalDegenerative) {
      if (frmData.CervicalSpinousProcessFracture && !frmData.CervicalInterVertebralDiscSpace) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
      }
      else {
        if (frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalSpinousProcessFracture
          && !(frmData.CervicalFacetJointDislocationFrature || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
          report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
        }
      }
      if (!(frmData.CervicalSpinousProcessFracture || frmData.CervicalInterVertebralDiscSpace)
        && !(frmData.CervicalFacetJointDislocationFrature || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
      }
      if (frmData.CervicalInterVertebralDiscSpace && frmData.CervicalSpinousProcessFracture) {
        report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";

      }
    }


    if ((frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)
      && !(frmData.CervicalFracture || frmData.CervicalDegenerative)) {
      report += "<p>" + "Bodies and pedicles of lumber vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal.<br><br>Both psoas shadows are normal." + "</p>";
    }

    var current_user = JSON.parse(document.getElementById("current-user").textContent);

    report +=
      this.pageBreak() +

      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user); // TO BE ADDED

      if (frmData.reportimage) {
        report += "<div class='image-container'>" +
          "<img src='" + frmData.reportimage + "' alt='Report' class='report-image' />" +
          "</div>";
      }

    this.setState({ reportFrmData: report }, () => {
      this.props.generateReport(report);
    });
  }

  pageBreak() {
    return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
  }

  getCorads(user) {
    return (
      "<p><br><img src='" + user.signature + "' height='75' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + "</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "<p><strong>IMPRESSION:</strong></p><p>";
    return (
      text +
      (impression.length !== 0
        ? impression.join(" ")
        : "<strong>No Obvious Abnormality Seen</strong>") +
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
            name="X-RAY SPINE(Lumber)"
          />
        }
      </div>
    );
  }
}

export default XraySpineLumber;