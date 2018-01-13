import React from 'react';
import WriteReview from './WriteReview.jsx';
import $ from 'jquery';


class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	handleReviewSubmit(review, event) {
		var reviewInfo = {userId: this.props.user.id, restaurantId: this.props.restaurant.id, reviewComment: review.comment, reviewStars: review.stars}
		$.ajax({
			url: `/user/review`,
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(reviewInfo),
			success: () => {
				console.log('Review post request successfuly sent');
			},
			error: (err) => {
				console.error('ERROR:', err);
			}
		})
		event.preventDefault();
	}

	render() {
		console.log(this.props.restaurant)
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
				<WriteReview handleReviewSubmit={this.handleReviewSubmit.bind(this)}/>
      </div>
		)
	}
}

export default RestaurantDetails;