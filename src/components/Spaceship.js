import React from 'react';
import ReactDOM from 'react-dom';

// Code The Spaceship Component Here
class Spaceship extends React.Component{
	render(){
		return(
			<div>
				<p>name: {this.props.name}</p>
				<p>speed: {this.props.speed}</p>
				<p>hasRockets: {this.props.hasRockets}</p>
				<p>colors: {this.props.colors.join(', ')}</p>
			</div>
		)
	}
}


let defaultColors = ['black', 'red'];

Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: defaultColors
};

export default Spaceship;