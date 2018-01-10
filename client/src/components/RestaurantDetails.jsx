import React from 'react';
import $ from 'jquery';
import WriteReview from './WriteReview.jsx'

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
				{restaurant.address1}
				<br/>
				{restaurant.city} {restaurant.zip_code}
				<br/>
				{restaurant.number}
				<br/>
				{restaurant.dollar}
				<br/>
				{restaurant.stars}
			</p>
			<WriteReview />
            </div>
		)
	}
}

export default RestaurantDetails;