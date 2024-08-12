import React from "react";
import Modal from "react-bootstrap4-modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import Form12 from "../Forms/forms12";

export default class PopUpXrayLeftShoulder extends React.Component {
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

    

    if (data.fracture) {
      document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.dislocation) {
      document.querySelectorAll('label[id^="#/properties/dislocation"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.degenerative) {
      document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    this.setState({ err });
  }

  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);

    if(!data.XrayType){
      document.querySelectorAll('label[id^="#/properties/XrayType"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    } 

    if (data.Normal) {
      if ((data.fracture || data.dislocation) && data.Normal){
        document.querySelectorAll('label[id^="#/properties/Normal"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.fracture) {
      if (!data.humerus && !data.clavicle && !data.scapula && !data.ribText) {
        document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!data.linearFracture && !data.comminutedFracture
        && !data.obliqueFracture && data.clavicle && data.scapula && data.ribText) {
        document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!data.LinearHead && !data.LinearNeck && !data.LinearProximal
        && !data.comminutedHead && !data.comminutedNeck && !data.comminutedProximal
        && !data.obliqueHead && !data.obliqueNeck && !data.obliqueProximal
        && !data.clavicleMidShaft && !data.clavicleProximalShaft && !data.clavicleDistalShaft
        && !data.scapulaBody && !data.scapulaSpine && !data.scapulaGlenoid && !data.ribText) {
        document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    if (data.dislocation) {
      if (!data.acromioclavicularJoint && !data.shoulderJoint) {
        document.querySelectorAll('label[id^="#/properties/dislocation"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    if (data.degenerative && !data.acromioclavicularJoint) {
      if (!data.glenohumeralJoint) {
        document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if(!(data.glenohumeralJointType && (data.glenohumeralJointJointSpace 
                                          || data.glenohumeralJointSubchondralCyst
                                          || data.glenohumeralJointMarginalOsteophytes
                                          || data.glenohumeralJointIrregularArticular
                                          || data.glenohumeralJointSclerosis))){
        document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }


    if (!err) {
      // Make an API call to update the isDone field
      const urlSearchParams = new URLSearchParams(window.location.search);
      const patientId = urlSearchParams.get("data-patientid");

      // Get the CSRF token from cookies
      const csrftoken = document.cookie.match(/csrftoken=([\w-]+)/)[1];

      // Make a POST request to your Django backend to update the isDone field
      fetch(`/api/update_patient_done_status_xray/${patientId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,  // Include CSRF token in headers
          // Add any additional headers as needed
        },
        body: JSON.stringify({ isDone: true }),
      })
      .then(response => {
        if (response.ok) {
          // Close the popup after the API call
          this.setState({ isDone: true }, () => {
            this.props.handleClick();
          });
        } else {
          // Handle errors
          console.error('Failed to update isDone status');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }



    this.setState({ isDone: true }, () => {
      this.props.handleClick();
    });
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
      NameTextFR12: patientName,
      IDTextFR12: patientId,
      AgeTextFR12: age,
      GenderTextFR12: gender,
      TestDateTextFR12: testDate,
      ReportDateTextFR12: reportDate,
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
          <Form12 data={formData} handleChange={this.handleChange} />
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

