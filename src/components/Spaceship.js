// Code The Spaceship Component Here
import React from 'react';
class Spaceship extends React.Component {
	render(){

		return (
			<div>
			<p>{this.props.name}</p>
			<p>{this.props.speed}</p>
			<p>{this.props.hasRockets}</p>
			<p>{this.props.colors}</p>
			</div>
			)
		}
}

Spaceship.defaultProps = {
		speed: "slow",
		colors: ['black', 'red'],
		hasRockets: false,
}

export default Spaceship;