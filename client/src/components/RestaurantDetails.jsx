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
			<img alt="map" src={restaurant.map} />
			<p>
				{restaurant.name}
||||||| merged common ancestors
			<img alt="map" src={rest.map} />
			<p>
				{rest.name}
=======
			<img alt="map" src={rest.map} className="restaurant-map"/>
			<p className="restaurant-text">
				{rest.name}
>>>>>>> integrate map and render restaurant list
				<br/>
<<<<<<< HEAD
				{restaurant.address}
||||||| merged common ancestors
<<<<<<< HEAD
				{restaurant.address}
||||||| merged common ancestors
				{restaurant.address1}
=======
				{rest.address}
>>>>>>> integrate map and render restaurant list
=======
				{rest.address}
>>>>>>> integrate map and render restaurant list
				<br/>
<<<<<<< HEAD
				{restaurant.city}, {restaurant.state} {restaurant.zip}
||||||| merged common ancestors
<<<<<<< HEAD
				{restaurant.city}, {restaurant.state} {restaurant.zip}
||||||| merged common ancestors
				{restaurant.city} {restaurant.zip_code}
=======
				{rest.city}, {rest.state} {rest.zip}
>>>>>>> integrate map and render restaurant list
=======
				{rest.city}, {rest.state} {rest.zip}
>>>>>>> integrate map and render restaurant list
				<br/>
<<<<<<< HEAD
				{restaurant.phone}
||||||| merged common ancestors
<<<<<<< HEAD
				{restaurant.phone}
||||||| merged common ancestors
				{restaurant.number}
=======
				{rest.phone}
>>>>>>> integrate map and render restaurant list
=======
				{rest.phone}
>>>>>>> integrate map and render restaurant list
				<br/>
<<<<<<< HEAD
				{restaurant.price}
||||||| merged common ancestors
<<<<<<< HEAD
				{restaurant.price}
||||||| merged common ancestors
				{restaurant.dollar}
=======
				{rest.price}
>>>>>>> integrate map and render restaurant list
=======
				{rest.price}
>>>>>>> integrate map and render restaurant list
				<br/>
<<<<<<< HEAD
				{restaurant.stars}
				<br/>
				{restaurant.distance ? restaurant.distance : ''}
||||||| merged common ancestors
<<<<<<< HEAD
				{restaurant.stars}
				<br/>
				{restaurant.distance ? restaurant.distance : ''}
||||||| merged common ancestors
				{restaurant.stars}
=======
				{rest.star}
				<br/>
				{rest.distance ? rest.distance : ''}
>>>>>>> integrate map and render restaurant list
=======
				{rest.star}
				<br/>
				{rest.distance ? rest.distance : ''}
>>>>>>> integrate map and render restaurant list
			</p>

            </div>
		)
	}
}

export default RestaurantDetails;