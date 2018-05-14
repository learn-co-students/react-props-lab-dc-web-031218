// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component{

  static propTypes = {
    name: PropTypes.string,
    speed: PropTypes.number,
    hasRockets: PropTypes.boolean,
    colors: PropTypes.array

  }

  static defaultProps = {
   speed: 'slow',
   hasRockets: false,
   colors: ['black', 'red'],
 }

 render() {
   const { name, speed, hasRockets, colors } = this.props;
   return (
     <div>
       <h1>Spaceship Name: {name}</h1>
       <ul>
         <li>speed: {speed}</li>
         <li>rockets: {hasRockets ? "Yes" : "No"}</li>
         <li>colors: {colors.join(", ")}</li>
       </ul>
     </div>
   )
 }
}
