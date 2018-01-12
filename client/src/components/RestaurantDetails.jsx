import React from 'react';


//NEED TO AT STARS TO OUTPUT
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
<<<<<<< HEAD
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
=======
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
>>>>>>> integrate map and render restaurant list
		)
	}
}

export default RestaurantDetails;