import React from 'react';
import ReactDOM from 'react-dom';

// Code The Spaceship Component Here
export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
        <p>Our Speed: {this.props.speed}</p>
        <p>Do we have rockets: {this.props.hasRockets}</p>
        <p>Ship colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps= {
  speed: 'slow',
  hasRockets: false,
  colors: `['black', 'red']`
};
