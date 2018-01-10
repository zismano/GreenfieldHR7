import React from 'react';
import $ from 'jquery';
import RestaurantDetails from './RestaurantDetails.jsx';

class SearchByRestaurantCategory extends React.Component {
	constructor() {
		super()
		this.state = {
			restaurants:[]
		}
	}

	handleSearchClick(category) {
      $.ajax({
      	url: `/restaurant/category/${category}`,
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
			<input type="text" placeholder="name" ref={input=>this.restaurantCategory = input} />
			<button onClick={this.handleSearchClick(this.restaurantCategory.value).bind(this)} >Search by Restaurant Category</button>
			{this.restaurants.map(restaurant=>{
				return <RestaurantDetails restaurant={restaurant} key={restaurant.id} />
							
			})}
			</div>

		)

	}
}

module.exports = {

}

