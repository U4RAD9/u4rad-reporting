import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpXraySpineDorsal";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";

class XraySpineDorsal extends Component {
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

    if (frmData.NameTextFR14 && frmData.IDTextFR14 && frmData.AgeTextFR14 && frmData.GenderTextFR14)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR14 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR14 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR14 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR14 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR14 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR14 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if (frmData.SpineView === 'AP') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY SPINE-DORSAL AP" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
    }
    if (frmData.SpineView === 'LATERAL') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY SPINE-DORSAL LATERAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";

    }
    if (frmData.SpineView === 'AP & LATERAL') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY SPINE-DORSAL AP & LATERAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";

    }


    // Cervical Degenerative**********
    if (frmData.CervicalDegenerative) {

      // Cervical Losrosis*********
      if (frmData.cervicalLordosis) {
        if (frmData.cervicalLordosisType === 'Maintained') {
          report += "<p>" + "<b>" + "Lordosis is maintained.<br><br> Loss of normal curvature is seen." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Dorsal Spondylolysis changes." + "</b>" + "</p>");
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
          arr.push('D1')
        }
        if (frmData.CervicalOsteophytesC2) {
          arr.push('D2')
        }
        if (frmData.CervicalOsteophytesC3) {
          arr.push('D3')
        }
        if (frmData.CervicalOsteophytesC4) {
          arr.push('D4')
        }
        if (frmData.CervicalOsteophytesC5) {
          arr.push('D5')
        }
        if (frmData.CervicalOsteophytesC6) {
          arr.push('D6')
        }
        if (frmData.CervicalOsteophytesC7) {
          arr.push('D7')
        }
        if (frmData.CervicalOsteophytesC8) {
          arr.push('D8')
        }
        if (frmData.CervicalOsteophytesC9) {
          arr.push('D9')
        }
        if (frmData.CervicalOsteophytesC10) {
          arr.push('D10')
        }
        if (frmData.CervicalOsteophytesC11) {
          arr.push('D11')
        }
        if (frmData.CervicalOsteophytesC12) {
          arr.push('D12')
        }
        report += "<p>" + "<b>" + text.CervicalOsteophytesText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.DorsalOsteophytesImpression + "</b>" + "</p>");
      }

      // EndplatesSclerosis************
      if (frmData.CervicalEndplateSclerosis) {
        let arr = []
        if (frmData.CervicalEndplateSclerosisC1) {
          arr.push('D1')
        }
        if (frmData.CervicalEndplateSclerosisC2) {
          arr.push('D2')
        }
        if (frmData.CervicalEndplateSclerosisC3) {
          arr.push('D3')
        }
        if (frmData.CervicalEndplateSclerosisC4) {
          arr.push('D4')
        }
        if (frmData.CervicalEndplateSclerosisC5) {
          arr.push('D5')
        }
        if (frmData.CervicalEndplateSclerosisC6) {
          arr.push('D6')
        }
        if (frmData.CervicalEndplateSclerosisC7) {
          arr.push('D7')
        }
        if (frmData.CervicalEndplateSclerosisC8) {
          arr.push('D8')
        }
        if (frmData.CervicalEndplateSclerosisC9) {
          arr.push('D9')
        }
        if (frmData.CervicalEndplateSclerosisC10) {
          arr.push('D10')
        }
        if (frmData.CervicalEndplateSclerosisC11) {
          arr.push('D11')
        }
        if (frmData.CervicalEndplateSclerosisC12) {
          arr.push('D12')
        }
        report += "<p>" + "<b>" + text.CervicalEndPlatesText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.DorsalEndPlatesImpression + "</b>" + "</p>");
      }
      // Vacuum Phenomenon************
      if (frmData.CervicalVacuumPhenomenon) {
        let arr = []
        if (frmData.CervicalVacuumPhenomenonC1) {
          arr.push('D1')
        }
        if (frmData.CervicalVacuumPhenomenonC2) {
          arr.push('D2')
        }
        if (frmData.CervicalVacuumPhenomenonC3) {
          arr.push('D3')
        }
        if (frmData.CervicalVacuumPhenomenonC4) {
          arr.push('D4')
        }
        if (frmData.CervicalVacuumPhenomenonC5) {
          arr.push('D5')
        }
        if (frmData.CervicalVacuumPhenomenonC6) {
          arr.push('D6')
        }
        if (frmData.CervicalVacuumPhenomenonC7) {
          arr.push('D7')
        }
        if (frmData.CervicalVacuumPhenomenonC8) {
          arr.push('D8')
        }
        if (frmData.CervicalVacuumPhenomenonC9) {
          arr.push('D9')
        }
        if (frmData.CervicalVacuumPhenomenonC10) {
          arr.push('D10')
        }
        if (frmData.CervicalVacuumPhenomenonC11) {
          arr.push('D11')
        }
        if (frmData.CervicalVacuumPhenomenonC12) {
          arr.push('D12')
        }
        report += "<p>" + "<b>" + text.CervicalVacuumPhenomenonText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.DorsalVacuumPhenomenonImpression + "</b>" + "</p>");
      }
      // schmorl's nodes***************
      if (frmData.CervicalSchmorlsNode) {
        let arr = []
        if (frmData.CervicalSchmorlsNodeC1) {
          arr.push('D1')
        }
        if (frmData.CervicalSchmorlsNodeC2) {
          arr.push('D2')
        }
        if (frmData.CervicalSchmorlsNodeC3) {
          arr.push('D3')
        }
        if (frmData.CervicalSchmorlsNodeC4) {
          arr.push('D4')
        }
        if (frmData.CervicalSchmorlsNodeC5) {
          arr.push('D5')
        }
        if (frmData.CervicalSchmorlsNodeC6) {
          arr.push('D6')
        }
        if (frmData.CervicalSchmorlsNodeC7) {
          arr.push('D7')
        }
        if (frmData.CervicalSchmorlsNodeC8) {
          arr.push('D8')
        }
        if (frmData.CervicalSchmorlsNodeC9) {
          arr.push('D9')
        }
        if (frmData.CervicalSchmorlsNodeC10) {
          arr.push('D10')
        }
        if (frmData.CervicalSchmorlsNodeC11) {
          arr.push('D11')
        }
        if (frmData.CervicalSchmorlsNodeC12) {
          arr.push('D12')
        }
        report += "<p>" + "<b>" + text.CervicalSchmorlNodesText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.DorsalSchmorlNodesImpression + "</b>" + "</p>");
      }
      // Inter Vertebral disc space************
      if (frmData.CervicalInterVertebralDiscSpace) {
        let arr = []
        if (frmData.CervicalInterVertebralDiscSpaceC1C2) {
          arr.push('D1-D2')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC2C3) {
          arr.push('D2-D3')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC3C4) {
          arr.push('D3-D4')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC4C5) {
          arr.push('D4-D5')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC5C6) {
          arr.push('D5-D6')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC6C7) {
          arr.push('D6-D7')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC7C8) {
          arr.push('D7-D8')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC8C9) {
          arr.push('D8-D9')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC9C10) {
          arr.push('D9-D10')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC10C11) {
          arr.push('D10-D11')
        }
        if (frmData.CervicalInterVertebralDiscSpaceC11C12) {
          arr.push('D11-D12')
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
          arr.push('D1')
        }
        if (frmData.CervicalCompressionFractureC2) {
          arr.push('D2')
        }
        if (frmData.CervicalCompressionFractureC3) {
          arr.push('D3')
        }
        if (frmData.CervicalCompressionFractureC4) {
          arr.push('D4')
        }
        if (frmData.CervicalCompressionFractureC5) {
          arr.push('D5')
        }
        if (frmData.CervicalCompressionFractureC6) {
          arr.push('D6')
        }
        if (frmData.CervicalCompressionFractureC7) {
          arr.push('D7')
        }
        if (frmData.CervicalCompressionFractureC8) {
          arr.push('D8')
        }
        if (frmData.CervicalCompressionFractureC9) {
          arr.push('D9')
        }
        if (frmData.CervicalCompressionFractureC10) {
          arr.push('D10')
        }
        if (frmData.CervicalCompressionFractureC11) {
          arr.push('D11')
        }
        if (frmData.CervicalCompressionFractureC12) {
          arr.push('D12')
        }
        if (frmData.CervicalCompressionFractureL1) {
          arr.push('L1')
        }
        if (!frmData.CervicalRetropulsion1) {
          report += "<p>" + "<b>" + text.CervicalCompressionFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalCompressionFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>");
        }
        else {
          report += "<p>" + "<b>" + text.CervicalCompressionFractureText.replace("{1}", arr.join(', ')) + " vertebral body with retropulsion." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalCompressionFractureText.replace("{1}", arr.join(', ')) + " vertebral body with retropulsion." + "</b>" + "</p>");
        }


      }

      //  Cervical Burst farcture**********
      if (frmData.CervicalBurstFracture) {
        let arr = []

        if (frmData.CervicalBurstFractureC1) {
          arr.push('D1')
        }
        if (frmData.CervicalBurstFractureC2) {
          arr.push('D2')
        }
        if (frmData.CervicalBurstFractureC3) {
          arr.push('D3')
        }
        if (frmData.CervicalBurstFractureC4) {
          arr.push('D4')
        }
        if (frmData.CervicalBurstFractureC5) {
          arr.push('D5')
        }
        if (frmData.CervicalBurstFractureC6) {
          arr.push('D6')
        }
        if (frmData.CervicalBurstFractureC7) {
          arr.push('D7')
        }
        if (frmData.CervicalBurstFractureC8) {
          arr.push('D8')
        }
        if (frmData.CervicalBurstFractureC9) {
          arr.push('D9')
        }
        if (frmData.CervicalBurstFractureC10) {
          arr.push('D10')
        }
        if (frmData.CervicalBurstFractureC11) {
          arr.push('D11')
        }
        if (frmData.CervicalBurstFractureC12) {
          arr.push('D12')
        }
        if (frmData.CervicalBurstFractureL1) {
          arr.push('L1')
        }
        if (!frmData.CervicalRetropulsion2) {
          report += "<p>" + "<b>" + text.CervicalBurstFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalBurstFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>");
        }
        else {
          report += "<p>" + "<b>" + text.CervicalBurstFractureText.replace("{1}", arr.join(', ')) + " vertebral body with retropulsion." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalBurstFractureText.replace("{1}", arr.join(', ')) + " vertebral body with retropulsion." + "</b>" + "</p>");
        }


      }

      // Cervical Change fracture*********
      if (frmData.CervicalChanceFracture) {
        let arr = []
        if (frmData.CervicalChanceFractureC1) {
          arr.push('D1')
        }
        if (frmData.CervicalChanceFractureC2) {
          arr.push('D2')
        }
        if (frmData.CervicalChanceFractureC3) {
          arr.push('D3')
        }
        if (frmData.CervicalChanceFractureC4) {
          arr.push('D4')
        }
        if (frmData.CervicalChanceFractureC5) {
          arr.push('D5')
        }
        if (frmData.CervicalChanceFractureC6) {
          arr.push('D6')
        }
        if (frmData.CervicalChanceFractureC7) {
          arr.push('D7')
        }
        if (frmData.CervicalChanceFractureC8) {
          arr.push('D8')
        }
        if (frmData.CervicalChanceFractureC9) {
          arr.push('D9')
        }
        if (frmData.CervicalChanceFractureC10) {
          arr.push('D10')
        }
        if (frmData.CervicalChanceFractureC11) {
          arr.push('D11')
        }
        if (frmData.CervicalChanceFractureC12) {
          arr.push('D12')
        }
        if (frmData.CervicalChanceFractureL1) {
          arr.push('L1')
        }
        if (!frmData.CervicalRetropulsion3) {
          report += "<p>" + "<b>" + text.CervicalChangeFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalChangeFractureText.replace("{1}", arr.join(', ')) + " vertebral body." + "</b>" + "</p>");
        }
        else {
          report += "<p>" + "<b>" + text.CervicalChangeFractureText.replace("{1}", arr.join(', ')) + " vertebral body with retropulsion." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalChangeFractureText.replace("{1}", arr.join(', ')) + " vertebral body with retropulsion." + "</b>" + "</p>");
        }
      }

      // Flexion Tear drop fracture**********
      if (frmData.CervicalFlexionTearDropFracture) {
        let arr = []
        if (frmData.CervicalFlexionTearDropFractureC1) {
          arr.push('D1')
        }
        if (frmData.CervicalFlexionTearDropFractureC2) {
          arr.push('D2')
        }
        if (frmData.CervicalFlexionTearDropFractureC3) {
          arr.push('D3')
        }
        if (frmData.CervicalFlexionTearDropFractureC4) {
          arr.push('D4')
        }
        if (frmData.CervicalFlexionTearDropFractureC5) {
          arr.push('D5')
        }
        if (frmData.CervicalFlexionTearDropFractureC6) {
          arr.push('D6')
        }
        if (frmData.CervicalFlexionTearDropFractureC7) {
          arr.push('D7')
        }
        if (frmData.CervicalFlexionTearDropFractureC8) {
          arr.push('D8')
        }
        if (frmData.CervicalFlexionTearDropFractureC9) {
          arr.push('D9')
        }
        if (frmData.CervicalFlexionTearDropFractureC10) {
          arr.push('D10')
        }
        if (frmData.CervicalFlexionTearDropFractureC11) {
          arr.push('D11')
        }
        if (frmData.CervicalFlexionTearDropFractureC12) {
          arr.push('D12')
        }
        if (frmData.CervicalFlexionTearDropFractureL1) {
          arr.push('L1')
        }
        report += "<p>" + "<b>" + text.CervicalFlexionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalFlexionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>");

      }

      // Extension tear drop fracture*********
      if (frmData.CervicalExtensionTearDropFracture) {
        let arr = []
        if (frmData.CervicalExtensionTearDropFractureC1) {
          arr.push("D1")
        }
        if (frmData.CervicalExtensionTearDropFractureC2) {
          arr.push("D2")
        }
        if (frmData.CervicalExtensionTearDropFractureC3) {
          arr.push("D3")
        }
        if (frmData.CervicalExtensionTearDropFractureC4) {
          arr.push("D4")
        }
        if (frmData.CervicalExtensionTearDropFractureC5) {
          arr.push("D5")
        }
        if (frmData.CervicalExtensionTearDropFractureC6) {
          arr.push("D6")
        }
        if (frmData.CervicalExtensionTearDropFractureC7) {
          arr.push("D7")
        }
        if (frmData.CervicalExtensionTearDropFractureC8) {
          arr.push("D8")
        }
        if (frmData.CervicalExtensionTearDropFractureC9) {
          arr.push("D9")
        }
        if (frmData.CervicalExtensionTearDropFractureC10) {
          arr.push("D10")
        }
        if (frmData.CervicalExtensionTearDropFractureC11) {
          arr.push("D11")
        }
        if (frmData.CervicalExtensionTearDropFractureC12) {
          arr.push("D12")
        }
        if (frmData.CervicalExtensionTearDropFractureL1) {
          arr.push("L1")
        }
        report += "<p>" + "<b>" + text.CervicalExtensionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.CervicalExtensionFractureText.replace("{1}", arr.join(', ')) + "</b>" + "</p>");
      }

      // Dens fracture****************
      if (frmData.CervicalDonsFrature) {

        if (frmData.CervicalDonsFratureType === 'Type 1'
          || frmData.CervicalDonsFratureType === 'Type 2'
          || frmData.CervicalDonsFratureType === 'Type 3') {
          let arr = []
          report += "<p>" + "<b>" + text.CervicalDonsFractureText.replace("{1}", frmData.CervicalDonsFratureType).replace("{2}", arr.join(',')) + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + text.CervicalDonsFractureText.replace("{1}", frmData.CervicalDonsFratureType).replace("{2}", arr.join(',')) + "</b>" + "</p>");
        }
      }

      // Spinous Process Fracture*********
      if (frmData.CervicalSpinousProcessFracture) {
        let arr = []
        if (frmData.CervicalSpinousProcessFractureC1) {
          arr.push('D1')
        }
        if (frmData.CervicalSpinousProcessFractureC2) {
          arr.push('D2')
        }
        if (frmData.CervicalSpinousProcessFractureC3) {
          arr.push('D3')
        }
        if (frmData.CervicalSpinousProcessFractureC4) {
          arr.push('D4')
        }
        if (frmData.CervicalSpinousProcessFractureC5) {
          arr.push('D5')
        }
        if (frmData.CervicalSpinousProcessFractureC6) {
          arr.push('D6')
        }
        if (frmData.CervicalSpinousProcessFractureC7) {
          arr.push('D7')
        }
        if (frmData.CervicalSpinousProcessFractureC8) {
          arr.push('D8')
        }
        if (frmData.CervicalSpinousProcessFractureC9) {
          arr.push('D9')
        }
        if (frmData.CervicalSpinousProcessFractureC10) {
          arr.push('D10')
        }
        if (frmData.CervicalSpinousProcessFractureC11) {
          arr.push('D11')
        }
        if (frmData.CervicalSpinousProcessFractureC12) {
          arr.push('D12')
        }
        if (frmData.CervicalSpinousProcessFractureL1) {
          arr.push('L1')
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
          arr.push('D1 Over D2')
        }
        if (frmData.CervicalretrolisthesisOfC2) {
          arr.push('D2 Over D3')
        }
        if (frmData.CervicalretrolisthesisOfC3) {
          arr.push('D3 Over D4')
        }
        if (frmData.CervicalretrolisthesisOfC4) {
          arr.push('D4 Over D5')
        }
        if (frmData.CervicalretrolisthesisOfC5) {
          arr.push('D5 Over D6')
        }
        if (frmData.CervicalretrolisthesisOfC6) {
          arr.push('D6 Over D7')
        }
        if (frmData.CervicalretrolisthesisOfC7) {
          arr.push('D7 Over D8')
        }
        if (frmData.CervicalretrolisthesisOfC8) {
          arr.push('D8 Over D9')
        }
        if (frmData.CervicalretrolisthesisOfC9) {
          arr.push('D9 Over D10')
        }
        if (frmData.CervicalretrolisthesisOfC10) {
          arr.push('D10 Over D11')
        }
        if (frmData.CervicalretrolisthesisOfC11) {
          arr.push('D11 Over D12')
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
          arr.push('D1 Over D2')
        }
        if (frmData.CervicalanterolisthesisOfC2) {
          arr.push('D2 Over D3')
        }
        if (frmData.CervicalanterolisthesisOfC3) {
          arr.push('D3 Over D4')
        }
        if (frmData.CervicalanterolisthesisOfC4) {
          arr.push('D4 Over D5')
        }
        if (frmData.CervicalanterolisthesisOfC5) {
          arr.push('D5 Over D6')
        }
        if (frmData.CervicalanterolisthesisOfC6) {
          arr.push('D6 Over D7')
        }
        if (frmData.CervicalanterolisthesisOfC7) {
          arr.push('D7 Over D8')
        }
        if (frmData.CervicalanterolisthesisOfC8) {
          arr.push('D8 Over D9')
        }
        if (frmData.CervicalanterolisthesisOfC9) {
          arr.push('D9 Over D10')
        }
        if (frmData.CervicalanterolisthesisOfC10) {
          arr.push('D10 Over D11')
        }
        if (frmData.CervicalanterolisthesisOfC11) {
          arr.push('D11 Over D12')
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
          arr.push('D1')
        }
        if (frmData.CervicalFacetJointDislocationFratureC2) {
          arr.push('D2')
        }
        if (frmData.CervicalFacetJointDislocationFratureC3) {
          arr.push('D3')
        }
        if (frmData.CervicalFacetJointDislocationFratureC4) {
          arr.push('D4')
        }
        if (frmData.CervicalFacetJointDislocationFratureC5) {
          arr.push('D5')
        }
        if (frmData.CervicalFacetJointDislocationFratureC6) {
          arr.push('D6')
        }
        if (frmData.CervicalFacetJointDislocationFratureC7) {
          arr.push('D7')
        }
        if (frmData.CervicalFacetJointDislocationFratureC8) {
          arr.push('D8')
        }
        if (frmData.CervicalFacetJointDislocationFratureC9) {
          arr.push('D9')
        }
        if (frmData.CervicalFacetJointDislocationFratureC10) {
          arr.push('D10')
        }
        if (frmData.CervicalFacetJointDislocationFratureC11) {
          arr.push('D11')
        }
        if (frmData.CervicalFacetJointDislocationFratureC12) {
          arr.push('D12')
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
        arr.push('D1')
      }
      if (frmData.CervicalCollapseC2) {
        arr.push('D2')
      }
      if (frmData.CervicalCollapseC3) {
        arr.push('D3')
      }
      if (frmData.CervicalCollapseC4) {
        arr.push('D4')
      }
      if (frmData.CervicalCollapseC) {
        arr.push('D5')
      }
      if (frmData.CervicalCollapseC6) {
        arr.push('D6')
      }
      if (frmData.CervicalCollapseC7) {
        arr.push('D7')
      }
      if (frmData.CervicalCollapseC8) {
        arr.push('D8')
      }
      if (frmData.CervicalCollapseC9) {
        arr.push('D9')
      }
      if (frmData.CervicalCollapseC10) {
        arr.push('D10')
      }
      if (frmData.CervicalCollapseC11) {
        arr.push('D11')
      }
      if (frmData.CervicalCollapseC12) {
        arr.push('D12')
      }
      report += "<p>" + "<b>" + text.CervicalCoolapseText.replace("{1}", arr.join(", ")) + "</b>" + "</p>";
    }

    //Text
    if (frmData.CervicalText) {
      report += "<p>" + "<b>" + frmData.CervicalText + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + frmData.CervicalText + "</b>" + "</p>")
    }

    
    if (frmData.CervicalInterVertebralDiscSpace) {
      report += "<p>" + "Rest of the Inter vertebral disc space is normal." + "</p>";
    }



    // cervical Normal************
    if (frmData.NormalSpine) {
      report += "<p>" + "Normal dorsal curvature is maintained.<br><br>Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>"
    }


    // Degenerative without Inter Vertebral
    if (frmData.CervicalDegenerative && !frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture && !frmData.CervicalSpondylolisthesis
      && !frmData.CervicalFacetJointDislocationFrature && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
      report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
    }
    // With Inter Vertebral 
    else {
      if (frmData.CervicalDegenerative && frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture && !frmData.CervicalSpondylolisthesis
        && !frmData.CervicalFacetJointDislocationFrature && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
    }

    // Degenerative without Inter Vertebral and rest line.
    if (frmData.CervicalDegenerative && !frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture  && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
      || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
      report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
    }
    // Degenerative with Inter Vertebral and rest line.
    else {
      if (frmData.CervicalDegenerative && frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalFracture  && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
        || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
    }


    // Fracture without spinous Process
    if (frmData.CervicalFracture && !frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative &&
      !frmData.CervicalSpondylolisthesis && !frmData.CervicalFacetJointDislocationFrature
      && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
      report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
    }
    // Fracture with spinous Process
    else {
      if (frmData.CervicalFracture && frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative &&
        !frmData.CervicalSpondylolisthesis && !frmData.CervicalFacetJointDislocationFrature
        && !frmData.CerivicalOsteopenia && !frmData.CervicalCollapse) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes is normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
    }

    // Fracture without spinous Process and rest
    if (frmData.CervicalFracture && !frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
      || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
      report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
    }
    // Fracture with spinous Process rest
    else {
      if (frmData.CervicalFracture && frmData.CervicalSpinousProcessFracture && !frmData.CervicalDegenerative && (frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature
        || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes is normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
    }



    // Fracture and Degenerative
    if (frmData.CervicalFracture && frmData.CervicalDegenerative) {
      if (frmData.CervicalSpinousProcessFracture && !frmData.CervicalInterVertebralDiscSpace) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
      else {
        if (frmData.CervicalInterVertebralDiscSpace && !frmData.CervicalSpinousProcessFracture
          && !(frmData.CervicalFacetJointDislocationFrature || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
          report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Pre vertebral spaces are normal. " + "</p>";
        }
      }
      if (!(frmData.CervicalSpinousProcessFracture || frmData.CervicalInterVertebralDiscSpace)
        && !(frmData.CervicalFacetJointDislocationFrature || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
      if (frmData.CervicalInterVertebralDiscSpace && frmData.CervicalSpinousProcessFracture) {
        report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
      }
    }


    if ((frmData.CervicalSpondylolisthesis || frmData.CervicalFacetJointDislocationFrature || frmData.CerivicalOsteopenia || frmData.CervicalCollapse)
      && !(frmData.CervicalFracture || frmData.CervicalDegenerative)) {
      report += "<p>" + "Bodies and pedicles of dorsal vertebrae are normal.<br><br>Transverse processes and spinous processes are normal.<br><br>Inter vertebral disc spaces are normal.<br><br>Pre vertebral spaces are normal." + "</p>";
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
      "<p><br><img src='" + user.signature + "' height='50' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + "</p></p>"
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
            name="X-RAY SPINE(Dorsal)"
          />
        }
      </div>
    );
  }
}

export default XraySpineDorsal;