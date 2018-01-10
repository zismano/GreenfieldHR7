import React from 'react';
import $ from 'jquery';
import RestaurantDetails from './RestaurantDetails.jsx';

class SearchByRestaurantName extends React.Component {
	constructor() {
		super()
		this.state = {
			restaurants:[]
		}
	}

	handleSearchClick(name) {
      $.ajax({
      	url: `/restaurant/name/${name}`,
      	method: 'GET',
      	contentType: 'application/json',
      	success: (results)=>{
           this.setState({
           	restaurants: results
           })
      	},
      	error: (err)=>{
      		console.err(err);
      	}
      })
	}

	render() {
		return (
			<div>
			<input type="text" placeholder="name" ref={input=>this.restaurantName = input} />
			<button onClick={this.handleSearchClick(this.restaurantName.value).bind(this)} >Search by Restaurant Name</button>
			{this.restaurants.map(restaurant=>{
				return <RestaurantDetails restaurant={restaurant} key={restaurant.id} />
							
			})}
			</div>

		)

	}
}

module.exports = {

}

