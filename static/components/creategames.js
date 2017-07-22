import React from "react";
import modal from "./modal";

class creategames extends React.Component {
  render() {
    return (
      <div className="cointainer-fluid games">
        <h1 className="text-center">Create a Game</h1>
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded open-game"
              src="assets/image/field-1.jpg"
              alt
            />
            <button
              className="btn park-title"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Create Game
            </button>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded"
              src="assets/image/field.jpg"
              alt
            />
            <h5 className="park-title">Create Game</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded"
              src="assets/image/field-1.jpg"
              alt
            />
            <h5 className="park-title">Create Game</h5>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src="assets/image/field-1.jpg" alt />
            <h5 className="park-title">Create Game</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src="assets/image/field-1.jpg" alt />
            <h5 className="park-title">Create Game</h5>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src="assets/image/field-1.jpg" alt />
            <h5 className="park-title">Create Game</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default creategames;
