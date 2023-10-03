import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form27 from "../Forms/forms27";

export default class PopupCampECG extends React.Component {
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


    if (data.ECGcampNormal && (data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia)) {
      document.querySelectorAll('label[id^="#/properties/ECGcampNormal"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.RhythmRBBB && (data.ECGcampNormal || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia)) {
      document.querySelectorAll('label[id^="#/properties/RhythmRBBB"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.TachycardiaRBBB && (data.ECGcampNormal || data.RhythmRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia)) {
      document.querySelectorAll('label[id^="#/properties/TachycardiaRBBB"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.BradycardiaRBBB && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.Bradycardia || data.Tachycardia)) {
      document.querySelectorAll('label[id^="#/properties/BradycardiaRBBB"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.Bradycardia && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Tachycardia)) {
      document.querySelectorAll('label[id^="#/properties/Bradycardia"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.Tachycardia && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia)) {
      document.querySelectorAll('label[id^="#/properties/Tachycardia"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
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
    const HeartRate = urlSearchParams.get("data-heartrate");
    const testDate = urlSearchParams.get("data-testdate");
    const reportDate = urlSearchParams.get("data-reportdate");
    const reportimage = urlSearchParams.get("data-reportimage");

    const formData = {
      NameTextFR21: patientName,
      IDTextFR21: patientId,
      AgeTextFR21: age,
      GenderTextFR21: gender,
      HeartTextFR21: HeartRate,
      TestDateTextFR21: testDate,
      ReportDateTextFR21: reportDate,
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
          </div>
        </div>
        <div className="modal-body">
          <Form27 data={formData} handleChange={this.handleChange} />
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
