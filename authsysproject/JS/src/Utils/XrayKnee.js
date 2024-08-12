import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpXrayKnee";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { ArrowDropUpSharp, FlashOnRounded, InvertColorsOff } from "@material-ui/icons";

class XrayKnee extends Component {
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
        degenerativeChanges: false,
        osteophytes: false,
        //XrayTypes: false,
        NormalLeft: false,
        //NormalRight: false,
        KneeNormal: false,
        LeftKnee: false,
        RightKnee: false,
        DegenerativeDeformity: false,
        Degenerative: false,
        LeftDegenerative: false,
        LeftJointsSpace: false,
        LeftDegenerative: false,
        RightDegenerative: false,
        RightJointsSpace: false,
        RightDeformity: false,
        LeftDegenerativeDeformity: false,
        RightDegenerativeDeformity: false,
        Fracture: false,
        LeftFracture: false,
        LeftTibia: false,
        LeftFibula: false,
        LeftLowerThirdofFemur: false,
        LeftOrthopaedicImplants: false,
        LeftLinearUndisplacedFracture: false,
        LeftLineardisplacedFracture: false,
        LeftComminutedUndisplacedFracture: false,
        LeftComminuteddisplacedFracture: false,
        LeftComminutedDepressedFracture: false,

        LeftLinearUndisplacedFracture1: false,
        LeftLineardisplacedFracture1: false,
        LeftComminutedUndisplacedFracture1: false,
        LeftComminuteddisplacedFracture1: false,
        LeftComminutedDepressedFracture1: false,

        LeftLinearUndisplacedFracture2: false,
        LeftLineardisplacedFracture2: false,
        LeftComminutedUndisplacedFracture2: false,
        LeftComminuteddisplacedFracture2: false,
        LeftComminutedDepressedFracture2: false,
        RightFracture: false,

        RightTibia: false,
        RightFibula: false,
        RightLowerThirdofFemur: false,
        RightOrthopaedicImplants: false,
        RightLinearUndisplacedFracture: false,
        RightLineardisplacedFracture: false,
        RightComminutedUndisplacedFracture: false,
        RightComminuteddisplacedFracture: false,
        RightComminutedDepressedFracture: false,

        RightLinearUndisplacedFracture1: false,
        RightLineardisplacedFracture1: false,
        RightComminutedUndisplacedFracture1: false,
        RightComminuteddisplacedFracture1: false,
        RightComminutedDepressedFracture1: false,

        RightLinearUndisplacedFracture2: false,
        RightLineardisplacedFracture2: false,
        RightComminutedUndisplacedFracture2: false,
        RightComminuteddisplacedFracture2: false,
        RightComminutedDepressedFracture2: false,

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


  //   // LEFT*************
  //   if (frmData.XrayType === 'AP' && (frmData.LeftDegenerative || frmData.LeftFracture)
  //     && !(frmData.NormalRight || frmData.RightDegenerative || frmData.RightFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE AP VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'LATERAL' && (frmData.LeftDegenerative || frmData.LeftFracture)
  //     && !(frmData.NormalRight || frmData.RightDegenerative || frmData.RightFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE LATREAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'SKYLINE' && (frmData.LeftDegenerative || frmData.LeftFracture)
  //     && !(frmData.NormalRight || frmData.RightDegenerative || frmData.RightFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE SKYLINE VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'AP/LATERAL' && (frmData.LeftDegenerative || frmData.LeftFracture)
  //     && !(frmData.NormalRight || frmData.RightDegenerative || frmData.RightFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE AP/LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }

  //   // RIGHT*************
  //   if (frmData.XrayType === 'AP' && (frmData.RightDegenerative || frmData.RightFracture)
  //     && !(frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE AP VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'LATERAL' && (frmData.RightDegenerative || frmData.RightFracture)
  //     && !(frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'SKYLINE' && (frmData.RightDegenerative || frmData.RightFracture)
  //     && !(frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE SKYLINE VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'AP/LATERAL' && (frmData.RightDegenerative || frmData.RightFracture)
  //   && !(frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //   report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE AP/LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //   report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  // }

  //   // BOTH*************
  //   if (frmData.XrayType === 'AP' && (frmData.RightDegenerative || frmData.RightFracture)
  //     && (frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BOTH KNEES AP VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'LATERAL' && (frmData.RightDegenerative || frmData.FractureR)
  //     && (frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BOTH KNEES LATERAL VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'SKYLINE' && (frmData.RightDegenerative || frmData.FractureR)
  //     && (frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BOTH KNEES SKYLINE VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'AP/LATERAL' && (frmData.RightDegenerative || frmData.FractureR)
  //     && (frmData.NormalLeft || frmData.LeftDegenerative || frmData.LeftFracture)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BOTH KNEES AP/LATERAL VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }


  //   // NORMAL LEFT**
  //   if (frmData.XrayType === 'AP' && (frmData.KneeNormal && frmData.KneeNormalL && !frmData.KneeNormalR)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE AP VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'LATERAL' && (frmData.KneeNormal && frmData.KneeNormalL && !frmData.KneeNormalR)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'SKYLINE' && (frmData.KneeNormal && frmData.KneeNormalL && !frmData.KneeNormalR)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE SKYLINE VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'AP/LATERAL' && (frmData.KneeNormal && frmData.KneeNormalL && !frmData.KneeNormalR)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY LEFT KNEE AP/LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   // NORMAL RIGHT***
  //   if (frmData.XrayType === 'AP' && (frmData.KneeNormal && frmData.KneeNormalR && !frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE AP VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'LATERAL' && (frmData.KneeNormal && frmData.KneeNormalR && !frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'SKYLINE' && (frmData.KneeNormal && frmData.KneeNormalR && !frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE SKYLINE VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'AP/LATERAL' && (frmData.KneeNormal && frmData.KneeNormalR && !frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT KNEE AP/LATERAL VIEW" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   // BOTH**
  //   if (frmData.XrayType === 'AP' && (frmData.KneeNormal && frmData.KneeNormalR && frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BILATERAL KNEE AP VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'LATERAL' && (frmData.KneeNormal && frmData.KneeNormalR && frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BILATERAL KNEE LATERAL VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'SKYLINE' && (frmData.KneeNormal && frmData.KneeNormalR && frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BILATERAL KNEE SKYLINE VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }
  //   if (frmData.XrayType === 'AP/LATERAL' && (frmData.KneeNormal && frmData.KneeNormalR && frmData.KneeNormalL)) {
  //     report += "<h5>" + "<strong>" + "<u>" + "X-RAY BILATERAL KNEE AP/LATERAL VIEWS" + "</u>" + "</strong>" + "</h5>";
  //     report += "<h5>" + "<strong>" + "<u>" + "OBSERVATION:" + "</u>" + "</strong>" + "</h5>";
  //   }

  if (frmData.NameTextFR15 && frmData.IDTextFR15 && frmData.AgeTextFR15 && frmData.GenderTextFR15)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR15 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR15 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR15 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR15 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR15 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR15 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if(frmData.XrayType){
      if(frmData.KneeNormal){
        let arr = []
        if(frmData.KneeNormalL && !frmData.KneeNormalR){
          arr.push('LEFT')
        }
        if(frmData.KneeNormalR && !frmData.KneeNormalL){
          arr.push("RIGHT")
        }
        if(frmData.KneeNormalL && frmData.KneeNormalR){
          arr.push("BILATERAL")
        }
        report += "<h5>" + "<strong>" + "<u>" + text.XrayTypeText.replace("{1}", frmData.XrayType).replace("{2}", arr.join('')) + "</u>" + "</strong>" + "</h5>";
      }
      else{
        let arr = []
        if(frmData.LeftKnee){
          arr.push('LEFT')
        }
        if(frmData.RightKnee){        
          arr.push("RIGHT")
        }
        report += "<h5>" + "<strong>" + "<u>" + text.XrayTypeText.replace("{1}", frmData.XrayType).replace("{2}", arr.join('')) + "</u>" + "</strong>" + "</h5>";
      }
    }


    // *****************************Normals***************************


    //Left Degenerative**********************
    if (frmData.LeftDegenerative) {
      if (frmData.LeftDegenerativeReducedJointSpaces) {
        report += "<p>" + "<b>" + "Degenerative changes are seen in left knee joint in the form of reduced joint spaces." + "</b>" + "</p>";
      }
      if (frmData.LeftDegenerativeMedialJoint) {
        report += "<p>" + "<b>" + "Degenerative changes are seen in left knee joint in the form of medial joint spaces." + "</b>" + "</p>";

      }
      if (frmData.LeftDegenerativelateralJointSpace) {
        report += "<p>" + "<b>" + "Degenerative changes are seen in left knee joint in the form of lateral joint spaces." + "</b>" + "</p>";
      }
      if (frmData.LeftDegenerativeSubchondralSclerosis) {
        report += "<p>" + "<b>" + "Subchondral sclerosis is seen on left side." + "</p>" + "</b>";
      }
      if (frmData.LeftDegenerativeSubchondralSysts) {
        report += "<p>" + "<b>" + "Subchondral cysts are noted on left side. " + "</b>" + "</p>";
      }
      if (frmData.LeftDegenerativeTibialSpiking) {
        report += "<p>" + "<b>" + "Tibial spiking is noted on left side." + "</b>" + "</p>";
      }
      if (frmData.LeftDegenerativeMarginalOsteophytes) {
        report += "<p>" + "<b>" + "Marginal osteophytes seen in articular surfaces of femur and tibia on left side." + "</b>" + "</p>";
      }
      if (frmData.LeftDegenerativeLooseBodies) {
        report += "<p>" + "<b>" + "Loose bodies are present on left side." + "</b>" + "</p>";
      }
      if (frmData.LeftDegenerativeDeformity) {
        if (frmData.LeftDegenerativeDeformityTypes === 'Genu Varus') {
          report += "<p>" + "<b>" + "Genu varus deformity seen on left side." + "</b>" + "</p>";
        }
        else {
          if (frmData.LeftDegenerativeDeformityTypes === 'Genu Valgum') {
            report += "<p>" + "<b>" + "Genu valgum deformity seen on left side." + "</b>" + "</p>";
          }
        }
      }
    }

    //Right Degenerative***********************
    if (frmData.RightDegenerative) {
      let arr = []
      if (frmData.RightDegenerativeReducedJointSpaces) {
        report += "<p>" + "<b>" + "Degenerative changes seen in right knee joint in the form of reduced joint space." + "</b>" + "</p>";
      }
      if (frmData.RightDegenerativeMedialJoint) {
        report += "<p>" + "<b>" + "Degenerative changes seen in right knee joint in the form of medial joint space." + "</b>" + "</p>";

      }
      if (frmData.RightDegenerativelateralJointSpace) {
        report += "<p>" + "<b>" + "Degenerative changes seen in right knee joint in the form of lateral joint space." + "</b>" + "</p>";
      }
      if (frmData.RightDegenerativeSubchondralSclerosis) {
        report += "<p>" + "<b>" + "subchondral sclerosis is seen on right side." + "</p>" + "</b>";
      }
      if (frmData.RightDegenerativeSubchondralSysts) {
        report += "<p>" + "<b>" + "subchondral cysts are noted on right side. " + "</b>" + "</p>";
      }
      if (frmData.RightDegenerativeTibialSpiking) {
        report += "<p>" + "<b>" + "Tibial spiking is noted on right side." + "</b>" + "</p>";
      }
      if (frmData.RightDegenerativeMarginalOsteophytes) {
        report += "<p>" + "<b>" + "Marginal osteophytes seen in articular surfaces of femur and tibia on right side." + "</b>" + "</p>";
      }
      if (frmData.RightDegenerativeLooseBodies) {
        report += "<p>" + "<b>" + "Loose bodies are present on right side." + "</b>" + "</p>";
      }
      if (frmData.RightDegenerativeDeformity) {
        if (frmData.RightDegenerativeDeformityTypes === 'Genu Varus') {
          report += "<p>" + "<b>" + "Genu varus deformity seen on right side." + "</b>" + "</p>";
        }
        else {
          if (frmData.RightDegenerativeDeformityTypes === 'Genu Valgum') {
            report += "<p>" + "<b>" + "Genu valgum deformity seen on right side." + "</b>" + "</p>";
          }
        }
      }
    }

    if (frmData.LeftDegenerative && !frmData.RightDegenerative) {
      impression.push("<p>" + "<b>" + "Degenerative osteoarthritic changes in left knee joint." + "</b>" + "</p>");
    }
    if (frmData.RightDegenerative && !frmData.LeftDegenerative) {
      impression.push("<p>" + "<b>" + "Degenerative osteoarthritic changes in right knee joint." + "</b>" + "</p>");
    }
    if (frmData.LeftDegenerative && frmData.RightDegenerative) {
      impression.push("<p>" + "<b>" + "Degenerative osteoarthritic changes in both knee joints." + "</b>" + "</p>");
    }


    // Left Fracture*************************
    if (frmData.LeftFracture) {
      // Tibia*********************
      if (frmData.LeftTibia) {

        if (frmData.LeftLinearUndisplacedFracture) {
          report += "<p>" + "<b>" + "Linear undisplaced fracture of tibia is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftLineardisplacedFracture) {
          report += "<p>" + "<b>" + "Linear displaced fracture of tibia is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminutedUndisplacedFracture) {
          report += "<p>" + "<b>" + "Comminuted  undisplaced fracture of tibia is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminuteddisplacedFracture) {
          report += "<p>" + "<b>" + "Comminuted displaced fracture of tibia is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminutedDepressedFracture) {
          report += "<p>" + "<b>" + "Comminuted depressed fracture of tibia is seen on left side. " + "</b>" + "</p>";
        }
        impression.push("<p>" + "<b>" + "Fracture of tibia on left side." + "</b>" + "</p>");
      }

      //Fibula*******************
      if (frmData.LeftFibula) {

        if (frmData.LeftLinearUndisplacedFracture1) {
          report += "<p>" + "<b>" + "Linear undisplaced fracture of fibula is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftLineardisplacedFracture1) {
          report += "<p>" + "<b>" + "Linear displaced fracture of fibula is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminutedUndisplacedFracture1) {
          report += "<p>" + "<b>" + "Comminuted undisplaced fracture of fibula is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminuteddisplacedFracture1) {
          report += "<p>" + "<b>" + "Comminuted displaced fracture of fibula is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminutedDepressedFracture1) {
          report += "<p>" + "<b>" + "Comminuted depressed fracture of fibula is seen on left side. " + "</b>" + "</p>";
        }
        impression.push("<p>" + "<b>" + "Fracture of fibula on left side." + "</b>" + "</p>");
      }

      //LowerThirdofFemur*************
      if (frmData.LeftLowerThirdofFemur) {
        if (frmData.LeftLinearUndisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Linear undisplaced fracture of femur is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftLineardisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Linear displaced fracture of femur is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminutedUndisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Comminuted undisplaced fracture of femur is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminuteddisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Comminuted displaced fracture of femur is seen on left side. " + "</b>" + "</p>";
        }
        if (frmData.LeftComminutedDepressedFracture2) {
          report += "<p>" + "<b>" + "	 Comminuted depressed fracture of femur is seen on left side. " + "</b>" + "</p>";
        }
        impression.push("<p>" + "<b>" + "Fracture in femer on left side." + "</b>" + "</p>");
      }

      //patella*******************
      if (frmData.LeftPatella) {
        report += "<p>" + "<b>" + "Patella breaking is noted on left side. " + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + "Fracture of patella on left side." + "</b>" + "</p>");
      }

      //Orthopaedic Implants******************
      if (frmData.LeftOrthopaedicImplants) {

        if (frmData.LeftOrthopaedicTibia) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in tibia on left side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in tibia on left side." + "</b>" + "</p>");
        }
        if (frmData.LeftOrthopaedicFemur) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in femur on left side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in femur on left side." + "</b>" + "</p>");
        }
        if (frmData.LeftOrthopaedicFibula) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in fibula on left side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in fibula on left side." + "</b>" + "</p>");
        }
        if (frmData.LeftOrthopaedicPlateau) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in patella on left side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in patella on left side." + "</b>" + "</p>");
        }
      }

    }

    //Right Fracture*************************

    if (frmData.RightFracture) {
      // Tibia*********************
      if (frmData.RightTibia) {

        if (frmData.RightLinearUndisplacedFracture) {
          report += "<p>" + "<b>" + "Linear undisplaced fracture of tibia is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightLineardisplacedFracture) {
          report += "<p>" + "<b>" + "Linear displaced fracture of tibia is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminutedUndisplacedFracture) {
          report += "<p>" + "<b>" + "Comminuted  undisplaced fracture of tibia is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminuteddisplacedFracture) {
          report += "<p>" + "<b>" + "Comminuted displaced fracture of tibia is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminutedDepressedFracture) {
          report += "<p>" + "<b>" + "Comminuted depressed fracture of tibia is seen on right side. " + "</b>" + "</p>";
        }
        impression.push("<p>" + "<b>" + "Fracture of tibia on right side." + "</b>" + "</p>");
      }

      //Fibula*******************
      if (frmData.RightFibula) {

        if (frmData.RightLinearUndisplacedFracture1) {
          report += "<p>" + "<b>" + "Linear undisplaced fracture of fibula is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightLineardisplacedFracture1) {
          report += "<p>" + "<b>" + "Linear displaced fracture of fibula is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminutedUndisplacedFracture1) {
          report += "<p>" + "<b>" + "Comminuted undisplaced fracture of fibula is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminuteddisplacedFracture1) {
          report += "<p>" + "<b>" + "Comminuted displaced fracture of fibula is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminutedDepressedFracture1) {
          report += "<p>" + "<b>" + "Comminuted depressed fracture of fibula is seen on right side. " + "</b>" + "</p>";
        }
        impression.push("<p>" + "<b>" + "Fracture of fibula on right side." + "</b>" + "</p>");
      }

      //LowerThirdofFemur*************
      if (frmData.RightLowerThirdofFemur) {
        if (frmData.RightLinearUndisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Linear undisplaced fracture of femur is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightLineardisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Linear displaced fracture of femur is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminutedUndisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Comminuted undisplaced fracture of femur is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminuteddisplacedFracture2) {
          report += "<p>" + "<b>" + "	 Comminuted displaced fracture of femur is seen on right side. " + "</b>" + "</p>";
        }
        if (frmData.RightComminutedDepressedFracture2) {
          report += "<p>" + "<b>" + "	 Comminuted depressed fracture of femur is seen on right side. " + "</b>" + "</p>";
        }
        impression.push("<p>" + "<b>" + "Fracture in femur on right side." + "</b>" + "</p>");
      }

      //patella*******************
      if (frmData.RightPatella) {
        report += "<p>" + "<b>" + "Patella breaking is noted on right side. " + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + "Fracture of patella on right side." + "</b>" + "</p>");
      }

      //Orthopaedic Implants******************
      if (frmData.RightOrthopaedicImplants) {

        if (frmData.RightOrthopaedicTibia) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in tibia on right side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in tibia on right side." + "</b>" + "</p>");
        }
        if (frmData.RightOrthopaedicFemur) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in femur on right side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in femur on right side." + "</b>" + "</p>");
        }
        if (frmData.RightOrthopaedicFibula) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in fibula on right side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in fibula on right side." + "</b>" + "</p>");
        }
        if (frmData.RightOrthopaedicPlateau) {
          report += "<p>" + "<b>" + "Orthopaedic implants in situ in patella on right side. " + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Orthopaedic implants in situ in patella on right side." + "</b>" + "</p>");
        }
      }
    }
    if (frmData.RightDegenerative || frmData.LeftDegenerative || frmData.Fracture) {
      report += "<p>" + "No obvious dislocation is seen." + "</p>";
    }
    if(!frmData.LeftFracture && !frmData.RightFracture){
      report += "<p>" + "No obvious fracture is seen." + "</p>";
    }
    if (frmData.LeftFracture || frmData.RightFracture) {
      report += "<p>" + "Rest of the bones under view are normal.<br><br>Soft issues are normal." + "</p>";
    }


    if (frmData.KneeNormalL || frmData.KneeNormalR) {
      report += "<p>" + "Knee joint appears normal.<br><br>Lower end of the femur, patella and upper ends of the tibia and fibula appear normal.<br><br>Alignment is normal.<br><br>No obvious abnormality is seen in the soft tissues." + "</p>";
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
  //TO BE ADDED
  getCorads(user) {
    return (
      "<p><br><img src='" + user.signature + "' height='75' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + "</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "<p><strong>IMPRESSION:</strong></p><p>";
    return (
      text +
      (impression.length && this.handleData !== 0
        ? impression.join("")
        : "<strong>•  No significant abnormality seen.<br><br><br><br></strong>") +
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
            name="X-RAY KNEE"
          />
        }
      </div>
    );
  }
}

export default XrayKnee;

