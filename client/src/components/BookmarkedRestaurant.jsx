import React from 'react';


class BookmarkedRestaurant extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.restaurant)
		let restaurant = this.props.restaurant;
		return(
			<div className="restaurant-box bookmarked">
				<img alt="map" src={restaurant.map} className="restaurant-map"/>
				<p className="restaurant-text">
					<div className="restaurant-name"><b>{restaurant.name}</b></div>
					<br/>
					<b>Address:</b> {restaurant.address}. {restaurant.city}, {restaurant.state} {restaurant.zip}
					<br/>
					<b>Phone:</b> {restaurant.phone}
					<br/>
					<b>Price:</b> {restaurant.price}
				</p>
            </div>
		)
	}
}

export default BookmarkedRestaurant;