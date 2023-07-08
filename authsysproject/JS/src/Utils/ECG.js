import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupECG";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { AlternateEmailSharp } from "@material-ui/icons";

var current_user = JSON.parse(
  document.getElementById("current-user").textContent
);
class ECG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmData: {
        ECGNormal: false,
        Rhythm: false,
        AbnormalRhythm: false,
        Axis: false,
        AbnormalAxis: false,
        QRSBroad: false,
        TInversion: false,
        STFattening: false,
        STFlatteningTInversion: false,
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

    if (frmData.NameTextFR20 && frmData.IDTextFR20 && frmData.AgeTextFR20 && frmData.GenderTextFR20)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR20 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR20 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR20 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR20 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR20 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR20 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if (
      frmData.ECGNormal ||
      frmData.STElevation ||
      frmData.STDepression ||
      frmData.QRSBroad ||
      frmData.QRSTall ||
      frmData.TInversion ||
      frmData.Axis ||
      frmData.Rhythm
    ) {
      report +=
        "<p style={{'text-center'}}>" +
        "<strong>" +
        "<u>" +
        "ECG" +
        "</u>" +
        "</strong>" +
        "</p>";
      report +=
        "<h5>" +
        "<strong>" +
        "<u>" +
        "OBSERVATIONS:" +
        "</u>" +
        "</strong>" +
        "</h5>";
    }

    if(frmData.ECGNormal){
		if(frmData.NormalText === 1 && frmData.NormalText === 300){
			report += "<p>" + "<b>" + "valid" + "</b>" + "</p>";

		}

	}

    report +=
      this.pageBreak() +
      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user);

    this.setState({ reportFrmData: report }, () => {
      this.props.generateReport(report);
    });
  }

  pageBreak() {
    return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
  }

  getCorads(user) {
    return (
      "<p><br><img src='" +
      user.signature +
      "' height='50' /><p>" +
      user.full_name +
      "<br>" +
      user.designation +
      "</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "</br><p><strong><u>IMPRESSION:</u></strong></p><p>";
    return text + (impression.join(" ") + "<b>" + " ") + "</b>" + "</p> ";
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
            name="ECG"
          />
        }
      </div>
    );
  }
}

export default ECG;
