import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form15 from "../Forms/forms15";

export default class PopUpXrayKnee extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
      },
      err: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
    
  }

  handleChange(data, err) {
    if (!err) {
      this.setState({ data }, () => this.props.handleData(data));
    }

    this.setState({ err });
  }
  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);


    if (!data.XrayType) {
      document.querySelectorAll('label[id^="#/properties/LeftKnee"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.LeftDegenerative) {
      if (!(data.LeftDegenerativeReducedJointSpaces
        || data.LeftDegenerativeMedialJoint
        || data.LeftDegenerativelateralJointSpace
        || data.LeftDegenerativeSubchondralSclerosis
        || data.LeftDegenerativeSubchondralSysts
        || data.LeftDegenerativeTibialSpiking
        || data.LeftDegenerativeMarginalOsteophytes
        || data.LeftDegenerativeLooseBodies
        || data.LeftDegenerativeDeformity)) {
        document.querySelectorAll('label[id^="#/properties/LeftDegenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    if (data.LeftFracture) {
      if (!(data.LeftTibia
        || data.LeftFibula
        || data.LeftLowerThirdofFemur
        || data.LeftPatella
        || data.LeftOrthopaedicImplants)) {
        document.querySelectorAll('label[id^="#/properties/LeftFracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.LeftLinearUndisplacedFracture || data.LeftLineardisplacedFracture
        || data.LeftComminutedUndisplacedFracture || data.LeftComminuteddisplacedFracture
        || data.LeftComminutedDepressedFracture || data.LeftLinearUndisplacedFracture1
        || data.LeftLineardisplacedFracture1 || data.LeftComminutedUndisplacedFracture1
        || data.LeftComminuteddisplacedFracture1 || data.LeftComminutedDepressedFracture1
        || data.LeftLinearUndisplacedFracture2 || data.LeftLineardisplacedFracture2
        || data.LeftComminutedUndisplacedFracture2 || data.LeftComminuteddisplacedFracture2
        || data.LeftComminutedDepressedFracture2 || data.LeftOrthopaedicTibia
        || data.LeftOrthopaedicFemur || data.LeftOrthopaedicFibula
        || data.LeftOrthopaedicPlateau || !FormData.LeftPatella)) {
        document.querySelectorAll('label[id^="#/properties/LeftFracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }


    if (data.RightDegenerative) {
      if (!(data.RightDegenerativeReducedJointSpaces
        || data.RightDegenerativeMedialJoint
        || data.RightDegenerativelateralJointSpace
        || data.RightDegenerativeSubchondralSclerosis
        || data.RightDegenerativeSubchondralSysts
        || data.RightDegenerativeTibialSpiking
        || data.RightDegenerativeMarginalOsteophytes
        || data.RightDegenerativeLooseBodies
        || data.RightDegenerativeDeformity)) {
        document.querySelectorAll('label[id^="#/properties/RightDegenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    if (data.RightFracture) {
      if (!(data.RightTibia
        || data.RightFibula
        || data.RightLowerThirdofFemur
        || data.RightPatella
        || data.RightOrthopaedicImplants)) {
        document.querySelectorAll('label[id^="#/properties/RightFracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.RightLinearUndisplacedFracture || data.RightLineardisplacedFracture
        || data.RightComminutedUndisplacedFracture || data.RightComminuteddisplacedFracture
        || data.RightComminutedDepressedFracture || data.RightLinearUndisplacedFracture1
        || data.RightLineardisplacedFracture1 || data.RightComminutedUndisplacedFracture1
        || data.RightComminuteddisplacedFracture1 || data.RightComminutedDepressedFracture1
        || data.RightLinearUndisplacedFracture2 || data.RightLineardisplacedFracture2
        || data.RightComminutedUndisplacedFracture2 || data.RightComminuteddisplacedFracture2
        || data.RightComminutedDepressedFracture2 || data.RightOrthopaedicTibia
        || data.RightOrthopaedicFemur || data.RightOrthopaedicFibula
        || data.RightOrthopaedicPlateau || !FormData.RightPatella)) {
        document.querySelectorAll('label[id^="#/properties/RightFracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
 




    if (!err) {
      this.props.handleClick();
    }


  }

  // event handling methods go here
  render() {
    const { data, handleClick, name } = this.props;
    const urlSearchParams = new URLSearchParams(window.location.search);
    const patientId = urlSearchParams.get("data-patientid");
    const patientName = urlSearchParams.get("data-patientname");
    const age = urlSearchParams.get("data-age");
    const gender = urlSearchParams.get("data-gender");
    const testDate = urlSearchParams.get("data-testdate");
    const reportDate = urlSearchParams.get("data-reportdate");
    const reportimage = urlSearchParams.get("data-reportimage");

    const formData = {
      NameTextFR15: patientName,
      IDTextFR15: patientId,
      AgeTextFR15: age,
      GenderTextFR15: gender,
      TestDateTextFR15: testDate,
      ReportDateTextFR15: reportDate,
      reportimage: reportimage,
    };
    
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">{name}</h5>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.reload()}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ margin: "9px" }}
              onClick={this.handleDone}
            >
              Done
            </button>
            {/* Add a WhatsApp button */}
            <button
              type="button"
              className="btn btn-danger"
              style={{ margin: "9px" }}
              onClick={this.handleSendWhatsAppMessage}
            >
              Reject
            </button>
          </div>
        </div>
        <div className="modal-body">
          <Form15 data={formData} handleChange={this.handleChange} />
          {reportimage && (
            <div className="image-container">
              <img src={reportimage} alt="Report" className="report-image" />
            </div>
          )}
        </div>
      </Modal>
    );
  }
}
