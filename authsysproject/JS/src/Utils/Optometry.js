import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupOptometry";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { AlternateEmailSharp } from "@material-ui/icons";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class Optometry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frmData: {
				// Optometry: false,
				// OptometryNormal: false,
				// OptometryNormalL: false,
				// OptometryNormalR: false,
				// OptometryNormalN: false,
				// OptometryNormalLN: false,
				// OptometryNormalRN: false,
				// OptometryAbnormal: false,
				// OptometryAbnormalL: false,
				// OptometryAbnormalR: false,
				// OptometryAbnormalN: false,
				// OptometryAbnormalLN: false,
				// OptometryAbnormalRN: false,
				// OptometryPrescription: false,
				// //////near/////////
				// OptometryPrescriptionNear: false,
				// OptometryPrescriptionL: false,
				// OptometryPrescriptionLminus: false,
				// OptometryPrescriptionLminusPower: false,
                // OptometryPrescriptionLplus: false,
				// OptometryPrescriptionLplusPower: false,
				// OptometryPrescriptionR: false,
				// OptometryPrescriptionRminus: false,
				// OptometryPrescriptionRminusPower: false,
                // OptometryPrescriptionRplus: false,
				// OptometryPrescriptionRplusPower: false,
				// OptometryPrescriptionRPTypeCylindrical: false,
				// OptometryPrescriptionRPTypeSpherical: false,
				// OptometryPrescriptionRMTypeCylindrical: false,
				// OptometryPrescriptionRMTypeSpherical: false,
				// OptometryPrescriptionLPTypeCylindrical: false,
				// OptometryPrescriptionLPTypeSpherical: false,
				// OptometryPrescriptionLMTypeCylindrical: false,
				// OptometryPrescriptionLMTypeSpherical: false,
				// ////////////////far////////////
				// OptometryPrescriptionFar: false,
				// OptometryPrescriptionLFar: false,
				// OptometryPrescriptionLminusFar: false,
				// OptometryPrescriptionLminusPowerFar: false,
                // OptometryPrescriptionLplusFar: false,
				// OptometryPrescriptionLplusPowerFar: false,
				// OptometryPrescriptionRFar: false,
				// OptometryPrescriptionRminusFar: false,
				// OptometryPrescriptionRminusPowerFar: false,
                // OptometryPrescriptionRplusFar: false,
				// OptometryPrescriptionRplusPowerFar: false,
				// OptometryPrescriptionRPTypeCylindricalFar: false,
				// OptometryPrescriptionRPTypeSphericalFar: false,
				// OptometryPrescriptionRMTypeCylindricalFar: false,
				// OptometryPrescriptionRMTypeSphericalFar: false,
				// OptometryPrescriptionLPTypeCylindricalFar: false,
				// OptometryPrescriptionLPTypeSphericalFar: false,
				// OptometryPrescriptionLMTypeCylindricalFar: false,
				// OptometryPrescriptionLMTypeSphericalFar: false,
				// OptometryOtherText: false,
				// OptometryColor: false,
				// OptometryLColor: false,
				
				// OptometryRColor: false,
				

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


		if (frmData.NameTextFR22 && frmData.IDTextFR22 && frmData.AgeTextFR22 && frmData.GenderTextFR22)
        {
          report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR22 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR22 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR22 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR22 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR22 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR22 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
		  
        }
        
        //test/////////////
        ////all normal//////////
        if (frmData.OptometryNormal) {
			report += "<h5>" +
			"<strong>" +
			"<u>" +
			"OPTOMETRY" +
			"</u>" +
			"</strong>" +
			"</h5>" +
			"<strong>" +
			"<u>" +
			"Observation:" +
			"</u>" +
			"</strong>";
            report += "<table>" + "<tr>" + "<td colspan='9'>" + "<b>" + "Visual Acuity" + "</b>" + "</td>" + "</tr>" + "<tr>" + "<td colspan='5'>" 
			  + "<b>" + "Distance(Far)" + "</b>" + "</td>" + "<td colspan='4'>" + "<b>" + "Reading(Near)" + "</b>" + "</td>" + "</tr>" + "<tr>" + "<td>" + "<b>" + "EYE" + "</b>" + "</td>" + "<td>" + "<b>" + "SPH" 
			  + "</b>" + "</td>" + "<td>" + "<b>" + "CYL" + "</b>" + "</td>" + "<td>" + "<b>" + "AXIS" + "</b>" + "</td>" + "<td>" + "<b>" + "VISION" + "</b>" + "</td>" + "<td>" + "<b>" + "SPH" + "</b>" + "</td>" + "<td>" + "<b>" + "CYL" + "</b>" + "</td>" 
			  + "<td>" + "<b>" + "AXIS" + "</b>" + "</td>"+ "<td>" + "<b>" + "VISION" + "</b>" + "</td>"+ "</tr>" + "<tr>" + "<td>" + "<b>" + "R/E" + "</b>" + "</td>" + "</b>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" 
			  + "<td>" + "N/A" + "</td>" + "<td>" + "6/6" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/6" + "</td>" 
			   + "</tr>" + "<tr>" + "<td>" + "<b>" + "L/E" + "</b>" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "6/6" + "</td>" 
			  + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/6" + "</td>" + "</tr>"  + "</table>";
            
              impression.push("<p>" + "Normal vision in both eye." + "</p>");  
        }

        if (!frmData.OptometryNormal) {
			let arr = [];
			//right far minus-plus spherical
			if (frmData.OptometryPrescriptionRminusPowerTypeFar && !frmData.OptometryPrescriptionRAxisFar) {
				arr.push(frmData.OptometryPrescriptionRminusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRplusPowerTypeFar && !frmData.OptometryPrescriptionRminusPowerTypeFar) {
					arr.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusPowerTypeFar && !frmData.OptometryPrescriptionRAxisFar) {
				arr.push(frmData.OptometryPrescriptionRplusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerTypeFar && !frmData.OptometryPrescriptionRplusPowerTypeFar) {
					arr.push("-");
				}
			}
			//right far minus-plus cylindrical
			let arr1 = [];
			if (frmData.OptometryPrescriptionRminusPowerTypeFar && frmData.OptometryPrescriptionRAxisFar) {
			   arr1.push(frmData.OptometryPrescriptionRminusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerTypeFar && !frmData.OptometryPrescriptionRplusPowerTypeFar) {
					arr1.push("-");
				}
			   
			}
			if (frmData.OptometryPrescriptionRplusPowerTypeFar && frmData.OptometryPrescriptionRAxisFar) {
			   arr1.push(frmData.OptometryPrescriptionRplusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerTypeFar && !frmData.OptometryPrescriptionRplusPowerTypeFar) {
					arr1.push("-");
				}
			}
			//right far minus-plus cylindrical-axis
			let arr2 =[];
			if (frmData.OptometryPrescriptionRminusPowerTypeFar && frmData.OptometryPrescriptionRAxisFar) {
				arr2.push(frmData.OptometryPrescriptionRAxisFar);
			}
			else {
                if(!frmData.OptometryPrescriptionRAxisFar && !frmData.OptometryPrescriptionLAxisFar) {
					arr2.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusPowerTypeFar && frmData.OptometryPrescriptionRAxisFar) {
			    arr2.push(frmData.OptometryPrescriptionRAxisFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxisFar && !frmData.OptometryPrescriptionLAxisFar) {
					arr2.push("-");
				}
			}
			//right near minus-plus spherical
			let arr3 = [];
			if (frmData.OptometryPrescriptionRminusPowerType && !frmData.OptometryPrescriptionRAxis) {
				arr3.push(frmData.OptometryPrescriptionRminusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerType && !frmData.OptometryPrescriptionRplusPowerType) {
					arr3.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusPowerType && !frmData.OptometryPrescriptionRAxis) {
				arr3.push(frmData.OptometryPrescriptionRplusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerType && !frmData.OptometryPrescriptionRplusPowerType) {
					arr3.push("-");
				}
			}
			//right near minus-plus cylindrical
			let arr4 = [];
			if (frmData.OptometryPrescriptionRminusPowerType && frmData.OptometryPrescriptionRAxis) {
			   arr4.push(frmData.OptometryPrescriptionRminusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerType && !frmData.OptometryPrescriptionRplusPowerType) {
					arr4.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusPowerType && frmData.OptometryPrescriptionRAxis) {
			   arr4.push(frmData.OptometryPrescriptionRplusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusPowerType && !frmData.OptometryPrescriptionRplusPowerType) {
					arr4.push("-");
				}
			}
			//right near minus-plus cylindrical-axis
			let arr5 =[];
			if (frmData.OptometryPrescriptionRminusPowerType && frmData.OptometryPrescriptionRAxis) {
				arr5.push(frmData.OptometryPrescriptionRAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxis && !frmData.OptometryPrescriptionLAxis) {
					arr5.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusPowerType && frmData.OptometryPrescriptionRAxis) {
			    arr5.push(frmData.OptometryPrescriptionRAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxis && !frmData.OptometryPrescriptionLAxis) {
					arr5.push("-");
				}
			}
			//////////////left///////////////////
			let arr6 = [];
			//left far minus-plus spherical
			if (frmData.OptometryPrescriptionLminusPowerTypeFar && !frmData.OptometryPrescriptionLAxisFar) {
				arr6.push(frmData.OptometryPrescriptionLminusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerTypeFar && !frmData.OptometryPrescriptionLplusPowerTypeFar) {
					arr6.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusPowerTypeFar && !frmData.OptometryPrescriptionLAxisFar) {
				arr6.push(frmData.OptometryPrescriptionLplusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerTypeFar && !frmData.OptometryPrescriptionLplusPowerTypeFar) {
					arr6.push("-");
				}
			}
			//left far minus-plus cylindrical
			let arr7 = [];
			if (frmData.OptometryPrescriptionLminusPowerTypeFar && frmData.OptometryPrescriptionLAxisFar) {
			   arr7.push(frmData.OptometryPrescriptionLminusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerTypeFar && !frmData.OptometryPrescriptionLplusPowerTypeFar) {
					arr7.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusPowerTypeFar && frmData.OptometryPrescriptionLAxisFar) {
			   arr7.push(frmData.OptometryPrescriptionLplusPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerTypeFar && !frmData.OptometryPrescriptionLplusPowerTypeFar) {
					arr7.push("-");
				}
			}
			//left far minus-plus cylindrical-axis
			let arr8 =[];
			if (frmData.OptometryPrescriptionLminusPowerTypeFar && frmData.OptometryPrescriptionLAxisFar) {
				arr8.push(frmData.OptometryPrescriptionLAxisFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxisFar && !frmData.OptometryPrescriptionLAxisFar) {
					arr8.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusPowerTypeFar && frmData.OptometryPrescriptionLAxisFar) {
			    arr8.push(frmData.OptometryPrescriptionLAxisFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxisFar && !frmData.OptometryPrescriptionLAxisFar) {
					arr8.push("-");
				}
			}
			//left near minus-plus spherical
			let arr9 = [];
			if (frmData.OptometryPrescriptionLminusPowerType && !frmData.OptometryPrescriptionLAxis) {
				arr9.push(frmData.OptometryPrescriptionLminusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerType && !frmData.OptometryPrescriptionLplusPowerType) {
					arr9.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusPowerType && !frmData.OptometryPrescriptionLAxis) {
				arr9.push(frmData.OptometryPrescriptionLplusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerType && !frmData.OptometryPrescriptionLplusPowerType) {
					arr9.push("-");
				}
			}
			//left near minus-plus cylindrical
			let arr10 = [];
			if (frmData.OptometryPrescriptionLminusPowerType && frmData.OptometryPrescriptionLAxis) {
			   arr10.push(frmData.OptometryPrescriptionLminusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerType && !frmData.OptometryPrescriptionLplusPowerType) {
					arr10.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusPowerType && frmData.OptometryPrescriptionLAxis) {
			   arr10.push(frmData.OptometryPrescriptionLplusPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusPowerType && !frmData.OptometryPrescriptionLplusPowerType) {
					arr10.push("-");
				}
			}
			//left near minus-plus cylindrical-axis
			let arr11 =[];
			if (frmData.OptometryPrescriptionLminusPowerType && frmData.OptometryPrescriptionLAxis) {
				arr11.push(frmData.OptometryPrescriptionLAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxis && !frmData.OptometryPrescriptionLAxis) {
					arr11.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusPowerType && frmData.OptometryPrescriptionLAxis) {
			    arr11.push(frmData.OptometryPrescriptionLAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRAxis && !frmData.OptometryPrescriptionLAxis) {
					arr11.push("-");
				}
			}

			let arr12 = [];
			if (frmData.Addition) {
               arr12.push(frmData.Addition);
			}
			else {
				if (!frmData.Addition) {
					arr12.push("N/A");
				 }
			}

            //abnormal vision
            //far///////////
            let arr13 = [];
            if (frmData.OptometryAbnormalLType && !frmData.OptometryAbnormalRType) {
                arr13.push("<b>" + "Far: " + "</b>" + frmData.OptometryAbnormalLType + " vision in left eye. ");
            }
            if (frmData.OptometryAbnormalRType && !frmData.OptometryAbnormalLType) {
                arr13.push("<b>" + "Far: " + "</b>" + frmData.OptometryAbnormalRType + " vision in right eye. ");
            }
            if (frmData.OptometryAbnormalRType && frmData.OptometryAbnormalLType) {
                arr13.push("<b>" + "Far: " + "</b>" + frmData.OptometryAbnormalRType + " vision in right eye- " + frmData.OptometryAbnormalLType + " vision in left eye." + "<br>");
            }
            if (frmData.OptometryAbnormalLTypeN && !frmData.OptometryAbnormalRTypeN) {
                arr13.push("<b>" + "Near: " + "</b>" + frmData.OptometryAbnormalLTypeN + " vision in left eye. ");
            }
            if (frmData.OptometryAbnormalRTypeN && !frmData.OptometryAbnormalLTypeN) {
                arr13.push("<b>" + "Near: " + "</b>" + frmData.OptometryAbnormalRTypeN + " vision in right eye. ");
            }
            if (frmData.OptometryAbnormalRTypeN && frmData.OptometryAbnormalLTypeN) {
                arr13.push("<b>" + "Near: " + "</b>" + frmData.OptometryAbnormalRTypeN + " vision in right eye- " + frmData.OptometryAbnormalLTypeN + " vision in left eye.");
            }
			
			
			
		    report += "<h5>" +
			"<strong>" +
			"<u>" +
			"OPTOMETRY" +
			"</u>" +
			"</strong>" +
			"</h5>" +
			"<strong>" +
			"<u>" +
			"Observation:" +
			"</u>" +
			"</strong>";
			report += "<pre>" + "<b>" + "<header>" + '<table>' + "<tr>" + "<td colspan='9'>" + "Visual Acuity" + "</td>" + "</tr>" + "<tr>" + "<td colspan='5'>" 
			  + "Distance(Far)" + "</td>" + "<td colspan='4'>" + "Reading(Near)" + "</td>" + "</tr>" + "<tr>" + "<td>" + "EYE" + "</td>" + "<td>" + "SPH" 
			  + "</td>" + "<td>" + "CYL" + "</td>" + "<td>" + "AXIS" + "</td>" + "<td>" + "VISION" + "</td>" + "<td>" + "SPH" + "</td>" + "<td>" + "CYL" + "</td>" 
			  + "<td>" + "AXIS" + "</td>"+ "<td>" + "VISION" + "</td>"+ "</tr>" + "<tr>" + "<td>" + "R/E" + "</td>" + "<td>" + arr + "</td>" + "<td>" + arr1 + "</td>" 
			  + "<td>" + arr2 + "</td>" + "<td>" + "6/6" + "</td>" + "<td>" + arr3 + "</td>" + "<td>" + arr4 + "</td>" + "<td>" + arr5 + "</td>" + "<td>" + "N/6" + "</td>" 
			   + "</tr>" + "<tr>" + "<td>" + "L/E" + "</td>" + "<td>" + arr6 + "</td>" + "<td>" + arr7 + "</td>" + "<td>" + arr8 + "</td>" + "<td>" + "6/6" + "</td>" 
			  + "<td>" + arr9 + "</td>" + "<td>" + arr10 + "</td>" + "<td>" + arr11 + "</td>" + "<td>" + "N/6" + "</td>" + "</tr>"  + "</table>" + "</header>" + "</b>" + "</pre>"
			  + "<p>" + "<b>" + "Addition: " + arr12 + "</b>" + "</p>";
		
              impression.push("<p>" + arr13.join("") + "</p>");
        } 

        
		
		
		//Normal both/////////////////////
        if (frmData.OptometryLColorType=="Normal" && frmData.OptometryRColorType=="Normal") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test): " + "</u>" + "</strong>" + "Normal in both eyes." + "</h5>";
        }
        //Total color blindness both//////////////////////
        if (frmData.OptometryLColorType=="Total color blindness" && frmData.OptometryRColorType=="Total color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Total color blindness in both eyes." + "</h5>";
        }
        //Partial both
        //Red
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" && frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red"
        && !(frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green") && !(frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness(both eye): Red." + "</h5>";
        }
        //Green
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" 
        && frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green" && !(frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green") 
        && !(frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness(both eye): Green." + "</h5>";
        }
        //Red-Green
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" 
        && frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green" && !(frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red") && !(frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness(both eye): Red-Green." + "</h5>";
            
        }
        //Left Normal-Right Partial//////////////
        if (frmData.OptometryLColorType=="Normal" && frmData.OptometryRColorType=="Partial color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Normal in left eye." + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Partial color blindness in right eye: " + frmData.OptometryRColorType1 + "." + "</h5>";
        }
        //Left Normal-Right Total//////////////
        if (frmData.OptometryLColorType=="Normal" && frmData.OptometryRColorType=="Total color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Normal in left eye." + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Total color blindness in right eye." + "</h5>";
        }
        //Left Partial-Right Normal//////////////
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Normal") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness in left eye: " + frmData.OptometryLColorType1 + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Normal in right eye." + "</h5>";
        }
        //Left Partial-Right Total//////////////
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Total color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness in left eye: " + frmData.OptometryLColorType1 + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Total color blindness in right eye." + "</h5>";
        }
        //Left Total-Right Normal//////////////
        if (frmData.OptometryLColorType=="Total color blindness" && frmData.OptometryRColorType=="Normal") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Total color blindness in left eye. " + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Normal in right eye." + "</h5>";
        }
        //Left Total-Right Partial//////////////
        if (frmData.OptometryLColorType=="Total color blindness" && frmData.OptometryRColorType=="Partial color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Total color blindness in left eye." + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Partial color blindness in right eye: " + frmData.OptometryRColorType1 + "." + "</h5>";
        }

		//Left partial-Right Partial//////////////
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" && !(frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red") && !(frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green") && !(frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness in left eye: " + frmData.OptometryLColorType1 + "<br>" +  "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Partial color blindness in right eye: " + frmData.OptometryRColorType1 + "." + "</h5>";
        }
		   
		
		




		report +=
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
			"<br>" + "<br>" + 
			user.designation + 
			"</p></p>"

		);
	}

	getImpression(impression, totalCovidPoints) {
		let text = "<strong><u>Visual Acuity</u>:</strong>";
		return text + (impression.join(" ") + "<b>" + " ") + "</b>";
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
						name="Optometry"
					/>
				}
			</div>
		);
	}
}


export default Optometry;
