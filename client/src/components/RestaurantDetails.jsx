import React from 'react';


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
					<div className="restaurant-name"><b>{restaurant.name}</b></div>
					<br/>
					<b>Address:</b> {restaurant.address}. {restaurant.city}, {restaurant.state} {restaurant.zip}
					<br/>
					<b>Phone:</b> {restaurant.phone}
					<br/>
					<b>Price:</b> {restaurant.price}
					<br/>
					<b>Reviews:</b> 
						{restaurant.star === '1' ? <span>☆</span> : ''}
						{restaurant.star === '2' ? <span>☆☆</span> : ''}
						{restaurant.star === '3' ? <span>☆☆☆</span> : ''}
						{restaurant.star === '4' ? <span>☆☆☆☆</span> : ''}
						{restaurant.star === '5' ? <span>☆☆☆☆☆</span> : ''}
					<br/>
					{restaurant.distance ? <div><b>Distance:</b> {restaurant.distance}</div> : ''}
				</p>
            </div>
		)
	}
}

export default RestaurantDetails;