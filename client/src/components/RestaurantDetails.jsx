import React from 'react';
import $ from 'jquery';

class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.restaurant)
		let rest = this.props.restaurant;
		return(
			<div className="restaurant-box">
			<img alt="map" src={rest.map} />
			<p>
				{rest.name}
				<br/>
				{rest.address}
				<br/>
				{rest.city}, {rest.state} {rest.zip}
				<br/>
				{rest.phone}
				<br/>
				{rest.price}
				<br/>
				{rest.star}
				<br/>
				{rest.distance ? rest.distance : ''}
			</p>

            </div>
		)
	}
}

export default RestaurantDetails;