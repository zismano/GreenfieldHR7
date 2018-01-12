import React from 'react';


//NEED TO AT STARS TO OUTPUT
class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let restaurant = this.props.restaurant;
		return(
			<div className="restaurant-box">
			<img src="" />
			<p>
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
				{restaurant.stars}
				<br/>
				{restaurant.distance ? restaurant.distance : ''}
			</p>
            </div>
		)
	}
}

export default RestaurantDetails;