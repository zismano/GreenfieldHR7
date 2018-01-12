import React from 'react';
import WriteReview from './WriteReview.jsx';


class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.restaurant)
<<<<<<< HEAD
		let restaurant = this.props.restaurant;
		return(
			<div className="restaurant-box">
				<img alt="map" src={restaurant.map} className="restaurant-map"/>
				<p className="restaurant-text">
					<div className="restaurant-name"><b>{restaurant.name}</b></div>
					<br/>
					<b>Address:</b> {restaurant.address}. {restaurant.city}, {restaurant.state} {restaurant.zip}
					<br/>
					<b>Phone:</b> {restaurant.phone}
					<br/>
					<b>Price:</b> {restaurant.price}
					<br/>
					<b>Reviews:</b> {restaurant.star}
					<br/>
					{restaurant.distance ? <div><b>Distance:</b> {restaurant.distance}</div> : ''}
				</p>
=======
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
>>>>>>> integrate map and render restaurant list
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