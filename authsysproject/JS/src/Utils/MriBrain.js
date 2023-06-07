import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpMriBrain";

import text from "../Forms/text_hrct_chest.json";


class MriBrain extends Component {
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
        tonsillarHerniation: false,
        bonyCalvarium: false,
        
      },
    };
    this.handleData = this.handleData.bind(this);
    this.formatData = this.formatData.bind(this);
  }
  pageBreak(user) {
    return ("<img src='" + user.companylogo + "' height='' width='300' />");
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

    if (frmData.NameTextFR5 && frmData.IDTextFR5 && frmData.AgeTextFR5 && frmData.GenderTextFR5)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR5 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextF5 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR5 + "</td>" + "<td>" + "Gender: " + frmData.GenderTextFR5 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }
    var current_user = JSON.parse(document.getElementById("current-user").textContent);
    if (frmData.allNormal || frmData.tonsillarHerniation || frmData.bonyCalvarium) {
      report += this.pageBreak(current_user) + "<h5>" + "<strong>" + "<u>" + "MRI-BRAIN" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "FINDINGS:" + "</strong>" + "</h5>";
    }

     


    if (frmData.allNormal) {
      let brainParenchyma = text.brainParenchyma.replace("{1}", "normal");
      report += "<p>" + brainParenchyma + "</p>";
       
    }



    if (frmData.allNormal) {
      report += "<p>" + text.normal.replace("{1}", "Basal ganglia, thalami and internal capsules") + "</p>";
      
    }


    if (frmData.allNormal) {
      report += "<p>" + text.unremarkable.replace("{1}", "Corpus callosum") + "</p>";
      
    }
    if (frmData.allNormal && frmData.allNormal) {
      report += "<p>" + text.cerebellum.replace("{1}", "Cerebellum and brainstem") + "</p>";
       
    }
    else {
      if (frmData.allNormal) {
        let cerebellum = text.cerebellum.replace("{1}", "Cerebellum");
        report += "<p>" + cerebellum + "</p>";
         
      }
      if (frmData.allNormal) {
        let brainstem = text.brainstem.replace("{1}", "Brainstem");
        report += "<p>" + brainstem + "</p>";
         
      }
    }

    if (frmData.allNormal) {
      let ventricles = text.unremarkable.replace("{1}", "Fourth ventricle, third and lateral ventricles");
      report += "<p>" + ventricles + "</p>";
       
    }
    if (frmData.allNormal) {
      report += "<p>" + text.unremarkable.replace("{1}", "Basal cisterns") + "</p>";
      ;
    }
    if (frmData.allNormal) {
      report += "<p>" + text.unremarkable1 + "</p>";
      
    }
    if (frmData.allNormal) {
      let vascularFlowVoids = text.unremarkable.replace("{1}", "Intracranial major vascular flow void");
      report += "<p>" + vascularFlowVoids + "</p>";
       
    }
    if (frmData.allNormal && frmData.tonsillarHerniation) {
      report += "<p>" + text.normal.replace("{1}", "The cranio-vertebral junction") + ' ' + text.tonsillarHerniation + "</p>";
       
    }
    else {
      if (frmData.allNormal) {
        let CVJ = text.CVJnormal.replace("{1}", "The cranio-vertebral junction");
        report += "<p>" + CVJ + "</p>";
      }
    }
    if (frmData.allNormal) {
      let bonyCalvarium = text.normal.replace("{1}", "Bony calvarium");
      report += "<p>" + bonyCalvarium + "</p>";
       
    }
    if (frmData.allNormal) {
      report += "<p>" + text.sella + "</p>";
       
    }
    if (frmData.allNormal) {
      report += "<p>" + text.normal.replace("{1}", "Extra-Calvarial Structures") + "</p>";
       
    }

    if (frmData.allNormal) {
      let paranasalSinuses = text.normal.replace(
        "{1}", "Paranasal sinuses"
      );
      report += "<p>" + paranasalSinuses + "</p>";
       
    }
    if (frmData.allNormal) {
      let pituitaryGland = text.normal.replace(
        "{1}", "Pituitary gland"
      );
      report += "<p>" + pituitaryGland + "</p>";
       
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
    let text = "</br><p><strong>IMPRESSION:</strong></p><p>";
    return text + (impression.length !== 0 ? impression.join(" ") : " <b>No Significant Abnormality is seen.</b>") + "</p>";
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
            name="MRI BRAIN"
          />
        }
      </div>
    );
  }
}

export default MriBrain;
