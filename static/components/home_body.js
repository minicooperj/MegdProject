import React from "react";
import modal from "./modal";
import navbar from "./navbar";
import leftside from "./leftside";
import rightside from "./rightside";

class HomeBody extends React.Component {
  render() {
    return (
      <div>
        {}
        <navbar />
        <div className="container-fluid" id="main-content">
          <div className="row">
            {}
            <leftside />
            <rightside />
            <modal />
          </div>
          {}
        </div>
      </div>
    );
  }
}

export default HomeBody;
