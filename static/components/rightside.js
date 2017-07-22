import React from "react";
import creategames from "./creategames";

class rightside extends React.Component {
  render() {
    return (
      <div className="col-6" id="right">
        <creategames />
      </div>
    );
  }
}

export default rightside;
