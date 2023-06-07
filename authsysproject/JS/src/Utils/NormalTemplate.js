import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpTemplate";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";

class NormalTemplate extends Component {
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

    if (frmData.NameTextFR7 && frmData.IDTextFR7 && frmData.AgeTextFR7 && frmData.GenderTextFR7)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR7 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR7 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR7 + "</td>" + "<td>" + "Gender: " + frmData.GenderTextFR7 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }
    if (frmData.Normal === 'X-RAY PELVIS WITH BOTH HIPS AP?') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY PELVIS WITH BOTH HIPS AP" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY PELVIS AP?') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY PELVIS AP" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY RIGHT WRIST AP/LATERAL?') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT WRIST AP/LATERAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY RIGHT ELBOW AP/LATERAL?') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT ELBOW AP/LATERAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY RIGHT ELBOW & FOREARM AP/LATERAL?') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY RIGHT ELBOW AP/LATERAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY CERVICAL NORMAL') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY CERVICAL NORMAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY LUMBER NORMAL') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY LUMBER NORMAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }
    if (frmData.Normal === 'X-RAY DORSAL NORMAL') {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY DORSAL NORMAL" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }


    if (frmData.Normal === 'X-RAY PELVIS WITH BOTH HIPS AP?') {
      report +=  "Bones under view are normal<br><br>Both hip joints are normal.<br><br>Both sacroiliac joints are normal.<br><br>No obvious bony injury is seen<br><br>No radio opaque calculus or calcification seen in pelvis.<br><br><h5><strong>IMPRESSION:<br><br> No significant abnormality seen.</strong></h5>"
    }

    if (frmData.Normal === 'X-RAY PELVIS AP?') {
      report += "Bones under view are normal<br><br>Both hip joints are normal.<br><br>Both sacroiliac joints are normal.<br><br>No radio opaque calculus or calcification seen in pelvis.<br><br><h5><strong>IMPRESSION:<br><br> No significant abnormality seen.</strong></h5>"
    }

    if (frmData.Normal === 'X-RAY RIGHT WRIST AP/LATERAL?') {
      report += "Carpal and metacarpal bones are normal.<br><br>Distal radius and ulna are normal.<br><br>No obvious fracture or dislocation seen.<br><br><h5><strong>IMPRESSION:<br><br> No significant abnormality seen.</strong></h5>"
    }

    if (frmData.Normal === 'X-RAY RIGHT ELBOW AP/LATERAL?') {
      report += "Distal part of humerus and proximal radius & ulna are normal.<br><br>Elbow joint is normal.<br><br>Proximal radio ulnar joint is normal.<br><br>No obvious fracture or dislocation seen.<br><br><h5><strong>IMPRESSION:<br><br>No obvious abnormality seen.</strong></h5>"
    }
    if(frmData.Normal === 'X-RAY RIGHT ELBOW & FOREARM AP/LATERAL?'){
      report += "Distal part of humerus and proximal radius & ulna are normal.<br><br>Elbow joint is normal.<br><br>Proximal radio ulnar joint is normal.<br><br>No obvious fracture or dislocation seen.<br><br><h5><strong>IMPRESSION:<br><br>No obvious abnormality seen.</strong></h5>"
    }

    if(frmData.Normal === 'X-RAY CERVICAL NORMAL'){
      report += "<p>" + "Normal Cervical curvature is maintained.<br><br>Bodies and pedicles of cervical Vertebrae are normal.<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter Vertebral disc spaces are normal.<br><br>Pre Vertebral spaces are normal.<br><br>No bony cervical rib seen.<br><br>Visualized Paranasal sinuses appears normal.<br><br><h5><strong>IMPRESSION:<br><br> No significant abnormality seen.</strong></h5>" + "</p>";
    }
    if(frmData.Normal === 'X-RAY DORSAL NORMAL'){
      report += "<p>" + " Normal  curvature is maintained<br><br>Bodies and pedicles of dorsal vertebrae are normal<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter Vertebral disc spaces are normal.<br><br>Pre Vertebral spaces are normal.<br><br><h5><strong>IMPRESSION:<br><br> No significant abnormality seen.</strong></h5>" + "</p>";
    }
    if(frmData.Normal === 'X-RAY LUMBER NORMAL'){
      report += "<p>" + " Normal lumber curvature is maintained<br><br>Bodies and pedicles of lumber vertebrae are normal<br><br>Transverse processes and Spinous processes are normal.<br><br>Inter Vertebral disc spaces are normal.<br><br>Pre Vertebral spaces are normal.<br><br>Both psaos shadow are normal.<br><br><h5><strong>IMPRESSION:<br><br> No significant abnormality seen.</strong></h5>" + "</p>";
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

  getCorads(user) {
    return (
      "<p><br><img src='" + user.signature + "' height='50' /><p>" + user.full_name + "<br>" + user.designation + ", MBBS</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "</br><p><strong></strong></p><p>";
    return (
      text +
      (impression.length !== 0
        ? impression.join("")
        : "<strong></strong>") +
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
            name="Normal Templates"
          />
        }
      </div>
    );
  }
}

export default NormalTemplate;