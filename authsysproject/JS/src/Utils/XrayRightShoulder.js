import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpXrayRightShoulder";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { FlareSharp, FlashOnRounded, ImportExport, InvertColorsOff } from "@material-ui/icons";

class XrayRightShoulder extends Component {
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
        Normal: false,
        NormalHCS: false,
        NormalLA: false,
        NormalR: false,
        NormalS: false,
        fracture: false,
        humerus: false,
        clavicle: false,
        scapula: false,

        dislocation: false,
        degenerative: false

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

    if (frmData.NameTextFR12 && frmData.IDTextFR12 && frmData.AgeTextFR12 && frmData.GenderTextFR12)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR12 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR12 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR12 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR12 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR12 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR12 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if ((frmData.XrayType === 'AP' || frmData.Normal || frmData.fracture || frmData.dislocation
      || frmData.degenerative) && !(frmData.XrayType === 'AXIAL' || frmData.XrayType === 'LATERAL')) {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT-SHOULDER AP" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }

    if ((frmData.XrayType === 'AXIAL' || frmData.Normal || frmData.fracture || frmData.dislocation
      || frmData.degenerative) && !(frmData.XrayType === 'AP' || frmData.XrayType === 'LATERAL')) {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT-SHOULDER AXIAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }

    if ((frmData.XrayType === 'LATERAL' || frmData.Normal || frmData.fracture || frmData.dislocation
      || frmData.degenerative) && !(frmData.XrayType === 'AP' || frmData.XrayType === 'AXIAL')) {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT-SHOULDER LATERAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }

    if (frmData.fracture) {
      if (frmData.humerus) {
        if (frmData.linearFracture || !(frmData.comminutedFracture && frmData.obliqueFracture)) {
          if (frmData.LinearHead && !frmData.LinearNeck && !frmData.LinearProximal) {
            report += "<p>" + "<b>" + text.LinearFractureText.replace("{1}", 'head') + "</b>" + "</p>";
          }
          if (frmData.LinearNeck && !frmData.LinearHead && !frmData.LinearProximal) {
            report += "<p>" + "<b>" + text.LinearFractureText.replace("{1}", 'neck') + "</b>" + "</p>";
          }
          if (frmData.LinearProximal && !frmData.LinearHead && !frmData.LinearNeck) {
            report += "<p>" + "<b>" + text.LinearFractureText.replace("{1}", 'proximal disphysis') + "</b>" + "</p>";
          }
          if (frmData.LinearHead && frmData.LinearNeck && !frmData.LinearProximal) {
            report += "<p>" + "<b>" + "Linear fractures of head and neck of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.LinearHead && frmData.LinearProximal && !frmData.LinearNeck) {
            report += "<p>" + "<b>" + "Linear fractures of head and proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.LinearNeck && frmData.LinearProximal && !frmData.LinearHead) {
            report += "<p>" + "<b>" + "Linear fractures of neck and proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.LinearNeck && frmData.LinearProximal && frmData.LinearHead) {
            report += "<p>" + "<b>" + "Linear fractures of head, neck and proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
        }

        if (frmData.comminutedFracture || !(frmData.linearFracture && frmData.obliqueFracture)) {
          if (frmData.comminutedHead && !frmData.comminutedNeck && !frmData.comminutedProximal) {
            report += "<p>" + "<b>" + text.ComminutedFractureText.replace("{1}", 'head') + "</b>" + "</p>";
          }
          if (frmData.comminutedNeck && !frmData.comminutedHead && !frmData.comminutedProximal) {
            report += "<p>" + "<b>" + text.ComminutedFractureText.replace("{1}", 'neck') + "</b>" + "</p>";
          }
          if (frmData.comminutedProximal && !frmData.comminutedHead && !frmData.comminutedNeck) {
            report += "<p>" + "<b>" + text.ComminutedFractureText.replace("{1}", 'proximal disphysis') + "</b>" + "</p>";
          }
          if (frmData.comminutedHead && frmData.comminutedNeck && !frmData.comminutedProximal) {
            report += "<p>" + "<b>" + "Comminuted fractures of head and neck of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.comminutedHead && frmData.comminutedProximal && !frmData.comminutedNeck) {
            report += "<p>" + "<b>" + "Comminuted fractures of head and proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.comminutedNeck && frmData.comminutedProximal && !frmData.comminutedHead) {
            report += "<p>" + "<b>" + "Comminuted fractures of neck and proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.comminutedNeck && frmData.comminutedProximal && frmData.comminutedHead) {
            report += "<p>" + "<b>" + "Comminuted fractures of head, neck and proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
        }

        if (frmData.obliqueFracture || !(frmData.linearFracture && frmData.comminutedFracture)) {
          if (frmData.obliqueHead && !frmData.obliqueNeck && !frmData.obliqueProximal) {
            report += "<p>" + "<b>" + text.ObliqueFractureText.replace("{1}", 'head') + "</b>" + "</p>";
          }
          if (frmData.obliqueNeck && !frmData.obliqueHead && !frmData.obliqueProximal) {
            report += "<p>" + "<b>" + text.ObliqueFractureText.replace("{1}", 'neck') + "</b>" + "</p>";
          }
          if (frmData.obliqueProximal && !frmData.obliqueHead && !frmData.obliqueNeck) {
            report += "<p>" + "<b>" + text.ObliqueFractureText.replace("{1}", 'proximal disphysis') + "</b>" + "</p>";
          }
          if (frmData.obliqueHead && frmData.obliqueNeck && !frmData.obliqueProximal) {
            report += "<p>" + "<b>" + "Oblique fractures of head, neck of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.obliqueHead && frmData.obliqueProximal && !frmData.obliqueNeck) {
            report += "<p>" + "<b>" + "Oblique fractures of head, proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.obliqueNeck && frmData.obliqueProximal && !frmData.obliqueHead) {
            report += "<p>" + "<b>" + "Oblique fractures of neck, proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
          if (frmData.obliqueNeck && frmData.obliqueProximal && frmData.obliqueHead) {
            report += "<p>" + "<b>" + "Oblique fractures of head, neck, proximal disphysis of humerus are seen." + "</b>" + "</p>";
          }
        }

        if (frmData.humerus) {
          if ((frmData.linearFracture && frmData.comminutedFracture && frmData.obliqueFracture) &&
            !(frmData.clavicle && frmData.scapula)) {
            if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
              || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
              || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
              && !(frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
              && !(frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
              impression.push("<p>" + "<b>" + "Humerus- Linear, comminuted and oblique Fracture." + "</b>" + "</p>");
            }
          }

          if (frmData.linearFracture && frmData.comminutedFracture) {
            if (!(frmData.linearFracture && frmData.comminutedFracture && frmData.obliqueFracture)
              && !(frmData.clavicle && frmData.scapula)) {
              if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
                || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal)
                && !(frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
                && !(frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
                impression.push("<p>" + "<b>" + "Humerus- Linear and comminuted Fracture." + "</b>" + "</p>");
              }
            }
          }

          if (frmData.comminutedFracture && frmData.obliqueFracture) {
            if (!(frmData.linearFracture && frmData.comminutedFracture && frmData.obliqueFracture)) {
              if ((frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
                || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
                && !(frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
                && !(frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
                impression.push("<p>" + "<b>" + "Humerus- Comminuted and oblique Fracture." + "</b>" + "</p>");
              }
            }
          }

          if (frmData.linearFracture && frmData.obliqueFracture) {
            if (!(frmData.linearFracture && frmData.comminutedFracture && frmData.obliqueFracture)) {
              if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
                || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
                && !(frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
                && !(frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
                impression.push("<p>" + "<b>" + "Humerus- Linear and oblique Fracture." + "</b>" + "</p>");
              }
            }
          }
        }
      }

      if (frmData.linearFracture && !frmData.comminutedFracture && !frmData.obliqueFracture
        && !frmData.clavicle && !frmData.scapula) {
        if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal)
          && !(frmData.comminutedHead && frmData.comminutedNeck && frmData.comminutedProximal)
          && !(frmData.obliqueHead && frmData.obliqueNeck && frmData.obliqueProximal)
          && !(frmData.clavicleMidShaft && frmData.clavicleProximalShaft && frmData.clavicleDistalShaft)
          && !(frmData.scapulaBody && frmData.scapulaGlenoid && frmData.scapulaSpine)
          && !(frmData.humerus && frmData.scapula && frmData.clavicle)) {
          impression.push("<p>" + "<b>" + "Humerus- Linear Fracture." + "</b>" + "</p>");
        }
      }

      if (frmData.comminutedFracture && !frmData.linearFracture && !frmData.obliqueFracture
        && !frmData.clavicle && !frmData.scapula) {
        if ((frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal)
          && !(frmData.LinearHead && frmData.LinearNeck && frmData.LinearProximal)
          && !(frmData.obliqueHead && frmData.obliqueNeck && frmData.obliqueProximal)
          && !(frmData.clavicleMidShaft && frmData.clavicleProximalShaft && frmData.clavicleDistalShaft)
          && !(frmData.scapulaBody && frmData.scapulaGlenoid && frmData.scapulaSpine)
          && !(frmData.humerus && frmData.scapula && frmData.clavicle)) {
          impression.push("<p>" + "<b>" + "Humerus- Comminuted Fracture." + "</b>" + "</p>");
        }
      }

      if (frmData.obliqueFracture && !frmData.linearFracture && !frmData.comminutedFracture
        && !frmData.clavicle && !frmData.scapula) {
        if ((frmData.obliqueNeck || frmData.obliqueHead || frmData.obliqueProximal)
          && !(frmData.LinearHead && frmData.LinearNeck && frmData.LinearProximal)
          && !(frmData.comminutedHead && frmData.comminutedNeck && frmData.comminutedProximal)
          && !(frmData.clavicleMidShaft && frmData.clavicleProximalShaft && frmData.clavicleDistalShaft)
          && !(frmData.scapulaBody && frmData.scapulaGlenoid && frmData.scapulaSpine)
          && !(frmData.humerus && frmData.scapula && frmData.clavicle)) {
          impression.push("<p>" + "<b>" + "Humerus- Oblique Fracture." + "</b>" + "</p>");
        }
      }

      if (frmData.linearFracture || frmData.comminutedFracture || frmData.obliqueFracture || frmData.clavicle) {
        if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
          || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
          || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
          && (frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
          && !(frmData.humerus && frmData.scapula && frmData.clavicle)) {
          impression.push("<p>" + "<b>" + "Humerus, clavicle- Fracture seen." + "</b>" + "</p>");
        }
      }

      if (frmData.linearFracture || frmData.comminutedFracture || frmData.obliqueFracture || frmData.scapula) {
        if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
          || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
          || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
          && (frmData.scapulaBody || frmData.scapulaGlenoid || frmData.scapulaSpine)
          && !(frmData.humerus && frmData.scapula && frmData.clavicle)) {
          impression.push("<p>" + "<b>" + "Humerus, scapula- Fracture seen." + "</b>" + "</p>");
        }
      }

      if (frmData.clavicle || frmData.scapula) {
        if ((frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
          && (frmData.scapulaBody || frmData.scapulaGlenoid || frmData.scapulaSpine)
          && !(frmData.humerus && frmData.scapula && frmData.clavicle)) {
          impression.push("<p>" + "<b>" + "Clavicle, scapula- Fracture seen." + "</b>" + "</p>");
        }
      }

      if (frmData.humerus && frmData.clavicle && frmData.scapula) {
        impression.push("<p>" + "<b>" + "Humerus, clavicle and scapula- fracture seen." + "</b>" + "</p>");
      }


      // ************************************Clavicle **************************************************
      if (frmData.clavicle) {
        if (frmData.clavicleMidShaft && !frmData.clavicleProximalShaft && !frmData.clavicleDistalShaft) {
          report += "<p>" + "<b>" + text.ClavicleFractureText.replace("{1}", "middle one third") + "</b>" + "</p>";
        }
        if (frmData.clavicleProximalShaft && !frmData.clavicleMidShaft && !frmData.clavicleDistalShaft) {
          report += "<p>" + "<b>" + text.ClavicleFractureText.replace("{1}", 'proximal one third') + "</b>" + "</p>";
        }
        if (frmData.clavicleDistalShaft && !frmData.clavicleMidShaft && !frmData.clavicleProximalShaft) {
          report += "<p>" + "<b>" + text.ClavicleFractureText.replace("{1}", 'distal one third') + "</b>" + "</p>";
        }

        if (frmData.clavicleMidShaft && frmData.clavicleProximalShaft && !frmData.clavicleDistalShaft) {
          report += "<p>" + "<b>" + "Fractures of proximal and middle One Third of clavicle are seen." + "</b>" + "</p>";
        }
        if (frmData.clavicleMidShaft && frmData.clavicleDistalShaft && !frmData.clavicleProximalShaft) {
          report += "<p>" + "<b>" + "Fractures of middle and distal One Third of clavicle are seen." + "</b>" + "</p>";
        }
        if (!frmData.clavicleMidShaft && frmData.clavicleDistalShaft && frmData.clavicleProximalShaft) {
          report += "<p>" + "<b>" + "Fractures of proximal and distal One Third of clavicle are seen." + "</b>" + "</p>";
        }
        if (frmData.clavicleMidShaft && frmData.clavicleDistalShaft && frmData.clavicleProximalShaft) {
          report += "<p>" + "<b>" + "Fractures of proximal, middle and distal One Third of clavicle are seen." + "</b>" + "</p>";
        }
      }
      if (frmData.scapula) {
        if (frmData.scapulaBody && !frmData.scapulaSpine && !frmData.scapulaGlenoid) {
          report += "<p>" + "<b>" + text.ScapulaFractureText.replace("{1}", "body") + "</b>" + "</p>";
        }
        if (frmData.scapulaSpine && !frmData.scapulaBody && !frmData.scapulaGlenoid) {
          report += "<p>" + "<b>" + text.ScapulaFractureText.replace("{1}", "spine") + "</b>" + "</p>";
        }
        if (frmData.scapulaGlenoid && !frmData.scapulaBody && !frmData.scapulaSpine) {
          report += "<p>" + "<b>" + text.ScapulaFractureText.replace("{1}", "glenoid") + "</b>" + "</p>";
        }
        if (frmData.scapulaBody && frmData.scapulaSpine && !frmData.scapulaGlenoid) {
          report += "<p>" + "<b>" + "Fractures of body, spine of scapula are seen." + "</b>" + "</p>";
        }

        if (!frmData.scapulaBody && frmData.scapulaSpine && frmData.scapulaGlenoid) {
          report += "<p>" + "<b>" + "Fractures of spine, glenoid of scapula are seen." + "</b>" + "</p>";
        }
        if (frmData.scapulaBody && frmData.scapulaSpine && frmData.scapulaGlenoid) {
          report += "<p>" + "<b>" + "Fractures of body, spine, glenoid of scapula are seen." + "</b>" + "</p>";
        }
      }

      if (frmData.clavicle && !frmData.scapula && !frmData.humerus) {
        impression.push("<p>" + "<b>" + "Clavicle Fracture" + "</b" + "</p>");
      }
      if (frmData.scapula && !frmData.clavicle && !frmData.humerus) {
        impression.push("<p>" + "<b>" + "Scapula Fracture" + "</b" + "</p>");
      }


      if (frmData.ribText) {
        report += "<p>" + "<b>" + frmData.ribText + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + frmData.ribText + "</b>" + "</p>");
      }
    }


    if (frmData.dislocation) {
      if (frmData.acromioclavicularJoint) {
        if (frmData.acromioclavicularJointType === 'dislocated') {
          report += "<p>" + "<b>" + text.dislocationAcro.replace("{1}", 'dislocation') + "</b>" + "</p>";
        }
        if (frmData.acromioclavicularJointType === 'subluxated') {
          report += "<p>" + "<b>" + text.dislocationAcro.replace("{1}", 'subluxation') + "</b>" + "</p>";
        }
      }
      if (frmData.shoulderJoint) {
        if (frmData.shoulderJointType === 'anterior') {
          report += "<p>" + "<b>" + text.dislocationShoulder.replace("{1}", 'anterior') + "</b>" + "</p>";
        }
        if (frmData.shoulderJointType === 'posterior') {
          report += "<p>" + "<b>" + text.dislocationShoulder.replace("{1}", 'posterior') + "</b>" + "</p>";
        }
        if (frmData.shoulderJointType === 'inferior') {
          report += "<p>" + "<b>" + text.dislocationShoulder.replace("{1}", 'inferior') + "</b>" + "</p>";
        }
      }
      if (frmData.acromioclavicularJoint) {
        if (frmData.acromioclavicularJointType === 'dislocated') {
          impression.push("<p>" + "<b>" + "Dislocation of acromioclavicular joint." + "</b>" + "</p>");
        }
        if (frmData.acromioclavicularJointType === 'subluxated') {
          impression.push("<p>" + "<b>" + "Subluxation of acromioclavicular joint." + "</b>" + "</p>");
        }
      }
      if (frmData.shoulderJoint) {
        if (frmData.shoulderJointType === 'anterior') {
          impression.push("<p>" + "<b>" + "Anterior of shoulder joint." + "</b>" + "</p>");
        }
        if (frmData.shoulderJointType === 'posterior') {
          impression.push("<p>" + "<b>" + "Posterior of shoulder joint." + "</b>" + "</p>");
        }
        if (frmData.shoulderJointType === 'inferior') {
          impression.push("<p>" + "<b>" + "Inferior  of shoulder joint." + "</b>" + "</p>");
        }
      }
    }


    if (frmData.degenerative) {
      if (frmData.glenohumeralJoint) {
        let arr = []
        // ********************Single OpacitiesType*****************Date: 05/03/22 Hitesh Mishra******
        if (frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push("reduced joint spaces")
        }
        if (frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push("Subchondral cyst");
        }
        if (frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push("marginal osteophytes");
        }
        if (frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointSclerosis) {
          arr.push("irregular articular");
        }
        if (frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular) {
          arr.push("sclerosis");
        }

        // **************************2 Combinations*************************
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push("reduced joint spaces, subchondral cyst.");
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push("reduced joint spaces, marginal osteophytes.");
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes) {
          arr.push('reduced joint spaces, irregular articular.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular) {
          arr.push("reduced joint spaces, sclerosis.");
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push('subchondral cyst, marginal osteophytes.');
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointJointSpace) {
          arr.push('subchondral cyst, irregular articular.');
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointMarginalOsteophytes) {
          arr.push('subchondral cyst, sclerosis.');
        }
        if (frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointSclerosis) {
          arr.push('marginal ostephytes, irregular articular.');
        }
        if (frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSubchondralCyst) {
          arr.push('marginal osteophytes, sclerosis.');
        }
        if (frmData.glenohumeralJointIrregularArticular && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointMarginalOsteophytes) {
          arr.push('irregular articular, sclerosis.');
        }

        // ************************ 3 Combinations******************************
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push('reduced joint spaces, subchondral cyst, marginal osteophytes .');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointSclerosis) {
          arr.push('reduced joint spaces, subchondral cyst, irregular articular.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointMarginalOsteophytes && !frmData.glenohumeralJointIrregularArticular) {
          arr.push('reduced joint spaces, subchondral cyst, sclerosis.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointSclerosis) {
          arr.push('reduced joint spaces, marginal osteophytes, irregular articular.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointIrregularArticular) {
          arr.push('reduced joint spaces, marginal osteophytes, sclerosis.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointIrregularArticular && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointSubchondralCyst && !frmData.glenohumeralJointMarginalOsteophytes) {
          arr.push('reduced joint spaces, irregular articular, joint sclerosis.');
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace) {
          arr.push('subchondral cyst, marginal osteophytes, irregular articular.');
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointIrregularArticular) {
          arr.push('subchondral cyst, marginal osteophytes, sclerosis.');
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointIrregularArticular && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointMarginalOsteophytes) {
          arr.push('subchondral cyst, irregular articular, sclerosis.');
        }
        if (frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace && !frmData.glenohumeralJointSubchondralCyst) {
          arr.push('marginal osteophytes, irregular articular, sclerosis.');
        }




        // ***************************4 Combination.************************************
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSclerosis) {
          arr.push('reduced joint spaces, subchondral cyst, marginal osteophytes, irregular articular.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointIrregularArticular) {
          arr.push('reduced joint spaces, subchondral cyst, marginal osteophytes, sclerosis.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointSclerosis && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointMarginalOsteophytes) {
          arr.push('reduced joint spaces, subchondral cyst, sclerosis, irregular articular.');
        }
        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointSclerosis && frmData.glenohumeralJointIrregularArticular && !frmData.glenohumeralJointSubchondralCyst) {
          arr.push('reduced joint spaces, marginal ostephytes, sclerosis, irregular articular.');
        }
        if (frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && frmData.glenohumeralJointSclerosis && !frmData.glenohumeralJointJointSpace) {
          arr.push('subchondral cyst, marginal osteophytes, irregular articular, sclerosis.');
        }

        // ****************************************5 Combination*************************************

        if (frmData.glenohumeralJointJointSpace && frmData.glenohumeralJointSubchondralCyst && frmData.glenohumeralJointMarginalOsteophytes && frmData.glenohumeralJointIrregularArticular && frmData.glenohumeralJointSclerosis) {
          arr.push('reduced joint space, subchondral cyst, marginal osteophytes, irregular articular, sclerosis.');
        }

        report += "<p>" + "<b>" + text.degenerativeText.replace("{1}", frmData.glenohumeralJointType).replace("{2}", arr.join(', ')) + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + "Degenerative changes are seen in glenohumeral joint." + "</b>" + "</p>");
        pageBreak++;

      }
      if (frmData.acromioclavicularJoint) {
        report += "<p>" + "<b>" + text.degenerativeAcro + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + text.degenerativeAcro + "</b>" + "</p>");
      }
    }

    if (frmData.Normal) {
      report += "<p>" + "Humerus, clavicle and scapula are normal.<br><br>Shoulder joint and acromioclavicular joint are normal.<br><br>Ribs under view are normal.<br><br>Soft tissues are normal." + "</p>"
    }

    if (frmData.fracture) {

      if (frmData.humerus && !(frmData.clavicle || frmData.scapula)) {
        if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal)
          && (frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal)
          && (frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
          && !(frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft
            || frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
          report += "<p>" + "Clavicle and scapula are normal." + "</p>";
        }
        else {
          report += "<p>" + "Clavicle and scapula are normal." + "</p>";
        }
      }

      if (frmData.clavicle && !(frmData.humerus || frmData.scapula)) {
        if (frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft
          && !(frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
            || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
            || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal
            || frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
          report += "<p>" + "Humerus and scapula are normal." + "</p>";
        }
        else {
          report += "<p>" + "Humerus, clavicle, scapula are normal." + "</p>";
        }
      }

      if (frmData.scapula && !(frmData.humerus || frmData.clavicle)) {
        if ((frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)
          && !(frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
            || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
            || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal
            || frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)) {
          report += "<p>" + "Humerus and clavicle are normal." + "</p>";
        }
        else {
          report += "<p>" + "Humerus, clavicle and scapula are normal." + "</p>";
        }
      }
      // Double combinations****************************************************

      if (frmData.humerus && frmData.clavicle && !(frmData.scapula)) {
        if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal)
          && (frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal)
          && (frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
          && (frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
          && !(frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)) {
          report += "<p>" + "Scapula is normal." + "</p>";
        }
        else {
          report += "<p>" + "Scapula is normal." + "</p>";
        }
      }

      if (frmData.humerus && frmData.scapula && !(frmData.clavicle)) {
        if ((frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal)
          && (frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal)
          && (frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)
          && (frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)
          && !(frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)) {
          report += "<p>" + "Clavicle is normal." + "</p>";
        }
        else {
          report += "<p>" + "Clavicle is normal." + "</p>";
        }
      }

      if (frmData.clavicle && frmData.scapula && !(frmData.humerus)) {
        if ((frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)
          && (frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
          && !(frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal
            || frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal
            || frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)) {
          report += "<p>" + "Humerus is normal." + "</p>";
        }
        else {
          report += "<p>" + "Humerus is normal." + "</p>";
        }
      }

      if (frmData.clavicle && frmData.scapula && frmData.humerus) {
        if ((frmData.scapulaBody || frmData.scapulaSpine || frmData.scapulaGlenoid)
          && (frmData.clavicleMidShaft || frmData.clavicleProximalShaft || frmData.clavicleDistalShaft)
          && (frmData.LinearHead || frmData.LinearNeck || frmData.LinearProximal)
          && (frmData.comminutedHead || frmData.comminutedNeck || frmData.comminutedProximal)
          && (frmData.obliqueHead || frmData.obliqueNeck || frmData.obliqueProximal)) {
        }

      }
    }

    if (frmData.dislocation) {
      if (frmData.acromioclavicularJointType && !frmData.shoulderJointType) {
        report += "<p>" + "Shoulder joint is normal." + "</p>";
      }
      if (!frmData.acromioclavicularJointType && frmData.shoulderJointType) {
        report += "<p>" + "Acromioclavicular joint is normal." + "</p>";
      }
    }

    // **************************Default Normal**************************************
    if (!(frmData.fracture || frmData.Normal)) {
      report += "<p>" + "Humerus, clavicle and scapula are normal." + "</p>"
    }

    if (!(frmData.dislocation || frmData.Normal)) {
      report += "<p>" + "Shoulder joint and acromioclavicular joint are normal." + "</p>"
    }

    if (frmData.fracture || frmData.dislocation || frmData.degenerative) {
      report += "<p>" + "Ribs under view are normal.<br><br>Soft tissues are normal." + "</p>"
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
    let text = "</br><p><strong>IMPRESSION:</strong></p><p>";
    return (
      text +
      (impression.length !== 0
        ? impression.join("")
        : "<strong>NORMAL RIGHT-SHOULDER X-RAY.</strong>") +
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
            name="X-RAY RIGHT-SHOULDER"
          />
        }
      </div>
    );
  }
}

export default XrayRightShoulder;
