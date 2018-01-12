import React from 'react';


//NEED TO AT STARS TO OUTPUT
class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.restaurant)
		let restaurant = this.props.restaurant;
		return(
			<div className="restaurant-box">
			<img alt="map" src={restaurant.map} className="restaurant-map"/>
			<p className="restaurant-text">
				{restaurant.name}
				<br/>
				{restaurant.address}
				<br/>
				{restaurant.city}, {restaurant.state} {restaurant.zip}
				<br/>
				{restaurant.phone}
				<br/>
				{restaurant.price}
				<br/>
				{restaurant.star}
				<br/>
				{restaurant.distance ? restaurant.distance : ''}
			</p>

            </div>
		)
	}
}

export default RestaurantDetails;