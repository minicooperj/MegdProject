import React from "react";
import upcomingGames from "./upcoming_games";
import parkmap from "./parkmap";

class leftside extends React.Component {
  render() {
    return (
      <div className="col-6" id="left">
        <div className="row">
          <upcomingGames />
        </div>
        <div className="container-fluid" id="upcoming">
          <div className="row game">
            <div className="col-8">
              <h3 className="text-center">Upcoming Game</h3>
              <table className="table table-sm table-inverse">
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Johnson</td>
                  </tr>
                  <tr>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>Game Creator</td>
                    <td className="text-right">Name Rep</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-4">
              <img className="img-fluid" src="assets/image/field-1.jpg" alt />
            </div>
          </div>
          <div className="row game">
            <div className="col-8">
              <h3 className="text-center">Upcoming Game</h3>
              <div className="row justify-content-between">
                <div className="col-6">Players Joined</div>
                <div className="col-6 text-right">1000</div>
              </div>
            </div>
            <div className="col-4">
              <img
                className="img-fluid"
                src="http://via.placeholder.com/250x150"
                alt
              />
            </div>
          </div>
        </div>
        {}
        <parkmap />
      </div>
    );
  }
}

export default leftside;
