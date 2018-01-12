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
<<<<<<< HEAD
			<img alt="map" src={rest.map} />
=======
			<img alt="map" src={restaurant.map} />
>>>>>>> integrate map and render restaurant list
			<p>
				{rest.name}
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
<<<<<<< HEAD
      </div>
=======

            </div>
>>>>>>> integrate map and render restaurant list
		)
	}
}

export default RestaurantDetails;