import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form18 from "../Forms/forms18";

export default class PopUpCtHead extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "John Doe",
        description: "Confirm if you have passed the subject\nHereby ...",
        done: true,
        recurrence: "Daily",
        rating: 3,
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
      NameTextFR18: patientName,
      IDTextFR18: patientId,
      AgeTextFR18: age,
      GenderTextFR18: gender,
      TestDateTextFR18: testDate,
      ReportDateTextFR18: reportDate,
      reportimage: reportimage,
    };
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">{name}</h5>
          <div>
            <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Back</button>
            <button type="button" className="btn btn-primary" style={{ margin: '9px' }} onClick={this.handleDone}>Done</button>
          </div>
        </div>
        <div className="modal-body">
          <Form18 data={formData} handleChange={this.handleChange} />
          {reportimage && (
            <div className="image-container">
              <img src={reportimage} alt="Report" className="report-image" />
            </div>
          )}
        </div>
        <div className="modal-footer">
        </div>
      </Modal>
    );
  }
}
