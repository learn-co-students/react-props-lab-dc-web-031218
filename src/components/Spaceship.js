import React from "react";
import ReactDOM from "react-dom";

class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <div> {this.props.name} </div>
        <h2>{this.props.speed}</h2>
        <div> {this.props.hasRockets} </div>
        <div> {this.props.colors} </div>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default Spaceship;
