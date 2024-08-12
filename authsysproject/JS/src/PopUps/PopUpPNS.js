import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form4 from "../Forms/form4";

export default class PopUpPNS extends React.Component {
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



    if (data.PnsSinuses) {
      if (!(data.PnsFrontal || data.PnsMaxillary
        || data.PnsEthmoidal || data.PnsSphenoid)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.PnsFrontalRight || data.PnsFrontalLeft
        || data.PnsMaxillaryRight || data.PnsMaxillaryLeft
        || data.PnsEthmoidalRight || data.PnsEthmoidalLeft
        || data.PnsSphenoidRight || data.PnsSphenoidLeft)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.PnsFrontalRightPneumatization || data.PnsFrontalLeftPneumatization
        || data.PnsFrontalRightMusocalThicking || data.PnsFrontalLeftMusocalThicking
        || data.PnsFrontalRightAirFluid || data.PnsFrontalLeftAirFluid
        || data.PnsFrontalRightFrontoEthmoid || data.PnsFrontalLeftFrontoEthmoid
        || data.PnsFrontalRightBonyErosions || data.PnsFrontalLeftBonyErosions

        || data.PnsMaxillaryRightPneumatization || data.PnsMaxillaryLeftPneumatization
        || data.PnsMaxillaryRightMusocalThicking || data.PnsMaxillaryLeftMusocalThicking
        || data.PnsMaxillaryRightAirFluid || data.PnsMaxillaryLeftAirFluid
        || data.PnsMaxillaryRightOsteomeatalUnit || data.PnsMaxillaryLeftOsteomeatalUnit
        || data.PnsMaxillaryRightBonyErosions || data.PnsMaxillaryLeftBonyErosions
        || data.PnsMaxillaryRightAccessoryOstia || data.PnsMaxillaryLeftAccessoryOstia

        || data.PnsEthmoidalRightPneumatization || data.PnsEthmoidalLeftPneumatization
        || data.PnsEthmoidalRightMusocalThicking || data.PnsEthmoidalLeftMusocalThicking
        || data.PnsEhtmoidalRightAirFluid || data.PnsEhtmoidalLeftAirFluid
        || data.PnsEthmoidalRightBonyErosions || data.PnsEthmoidalLeftBonyErosions
        || data.PnsEthmoidalRightSeptae || data.PnsEthmoidalLeftSeptae
        || data.PnsEhtmoidalRightVarient || data.PnsEhtmoidalLeftVarient

        || data.PnsSphenoidRightPneumatization || data.PnsSphenoidLeftPneumatization
        || data.PnsSphenoidRightMusocalThicking || data.PnsSphenoidLeftMusocalThicking
        || data.PnsSphenoidRightAirFluid || data.PnsSphenoidLeftAirFluid
        || data.PnsSphenoidRightEthmoid || data.PnsSphenoidLeftEthmoid
        || data.PnsSphenoidRightBonyErosions || data.PnsSphenoidLeftBonyErosions)) {

        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    // Pneumatization*****
    if (data.PnsFrontalRightPneumatization || data.PnsFrontalLeftPneumatization
      || data.PnsMaxillaryRightPneumatization || data.PnsMaxillaryLeftPneumatization
      || data.PnsEthmoidalRightPneumatization || data.PnsEthmoidalLeftPneumatization
      || data.PnsSphenoidRightPneumatization || data.PnsSphenoidLeftPneumatization) {

      if (!(data.PnsFrontalRightPneumatizationtype || data.PnsFrontalLeftPneumatizationtype
        || data.PnsMaxillaryRightPneumatizationtype || data.PnsMaxillaryLeftPneumatizationtype
        || data.PnsEthmoidalRightPneumatizationtype || data.PnsEthmoidalLeftPneumatizationtype
        || data.PnsSphenoidRightPneumatizationtype || data.PnsSphenoidLeftPneumatizationtype)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    // Musocal thicking***
    if (data.PnsFrontalRightMusocalThicking || data.PnsFrontalLeftMusocalThicking
      || data.PnsMaxillaryRightMusocalThicking || data.PnsMaxillaryLeftMusocalThicking
      || data.PnsEthmoidalRightMusocalThicking || data.PnsEthmoidalLeftMusocalThicking
      || data.PnsSphenoidRightMusocalThicking || data.PnsSphenoidLeftMusocalThicking) {

      if (!(data.PnsFrontalRightMusocalThickingType || data.PnsFrontalLeftMusocalThickingType
        || data.PnsMaxillaryRightMusocalThickingType || data.PnsMaxillaryLeftMusocalThickingType
        || data.PnsEthmoidalRightMusocalThickingType || data.PnsEthmoidalLeftMusocalThickingType
        || data.PnsSphenoidRightMusocalThickingType || data.PnsSphenoidLeftMusocalThickingType)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.PnsFrontalRightFrontoEthmoid || data.PnsFrontalLeftFrontoEthmoid
      || data.PnsMaxillaryRightOsteomeatalUnit || data.PnsMaxillaryLeftOsteomeatalUnit
      || data.PnsEthmoidalRightSeptae || data.PnsEthmoidalLeftSeptae
      || data.PnsEhtmoidalRightVarient || data.PnsEhtmoidalLeftVarient
      || data.PnsSphenoidRightEthmoid || data.PnsSphenoidLeftEthmoid) {

      if (!(data.PnsFrontalRightFrontoEthmoidType || data.PnsFrontalLeftFrontoEthmoidType
        || data.PnsMaxillaryRightOsteomeatalUnitType || data.PnsMaxillaryLeftOsteomeatalUnitType
        || data.PnsEthmoidalRightSeptaeType || data.PnsEthmoidalLeftSeptaeType
        || data.PnsEhtmoidalRightVarientHaller || data.PnsEhtmoidalLeftVarientHaller
        || data.PnsEhtmoidalRightVarientOnodi || data.PnsEhtmoidalLeftVarientOnodi
        || data.PnsSphenoidRightEthmoidType || data.PnsSphenoidLeftEthmoidType)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.NasalCavity) {
      if (!(data.DNSNasalCavity || data.TurbinatesNasalCavity || data.NasalMusocalThicking)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.DNSNasalCavityType || data.TurbinatesNasalRight || data.TurbinatesNasalLeft
        || data.TurbinatesNasalLeftMiddle || data.TurbinatesNasalRightMiddle
        || data.NasalMusocalThickingRight || data.NasalMusocalThickingLeft)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.DNSNasalCavityType) {
      if (!(data.DNSNasalCavityWithWithoutType)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.TurbinatesNasalRight || data.TurbinatesNasalLeft) {
      if (!(data.TurbinatesNasalRightMiddle || data.TurbinatesNasalLeftMiddle
        || data.TurbinatesNasalRightInferior || data.TurbinatesNasalLeftInferior)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.TurbinatesNasalRightConcha || data.TurbinatesNasalLeftConcha
        || data.TurbinatesNasalRightHypertrophied || data.TurbinatesNasalLeftHypertrophied
        || data.TurbinatesNasalRightParadoxical || data.TurbinatesNasalLeftParadoxical
        || data.TurbinatesNasalRightInferiorHypertrophied || data.TurbinatesNasalLeftInferiorHypertrophied)) {
        document.querySelectorAll('label[id^="#/properties/PnsSinuses"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }























    if (data.MiscellaneousOsteoma) {
      if (!(data.MiscellaneousOsteomaRight || data.MiscellaneousOsteomaLeft)) {
        document.querySelectorAll('label[id^="#/properties/MiscellaneousOsteoma"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.MiscellaneousOsteomaRightText || data.MiscellaneousOsteomaLeftText)) {
        document.querySelectorAll('label[id^="#/properties/MiscellaneousOsteoma"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.MiscellaneousMucocele) {
      if (!(data.MiscellaneousMucoceleRight || data.MiscellaneousMucoceleLeft)) {
        document.querySelectorAll('label[id^="#/properties/MiscellaneousMucocele"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.MiscellaneousMucoceleRightText || data.MiscellaneousMucoceleLeftText)) {
        document.querySelectorAll('label[id^="#/properties/MiscellaneousOsteoma"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.Miscellaneous) {
      if (!(data.MiscellaneousTypeKeros || data.MiscellaneousTypeOpticNerve || data.MiscellaneousAdenoid)) {
        document.querySelectorAll('label[id^="#/properties/MiscellaneousOsteoma"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.MiscellaneousTypeKerosType || data.MiscellaneousTypeOpticNerveType
        || data.MiscellaneousAdenoidyesType)) {
        document.querySelectorAll('label[id^="#/properties/MiscellaneousOsteoma"]').forEach((el) => {
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
          <Form4 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
        </div>
      </Modal>
    );
  }
}
