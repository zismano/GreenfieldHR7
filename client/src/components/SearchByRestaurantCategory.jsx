import React from 'react';
import $ from 'jquery';
import RestaurantDetails from './RestaurantDetails.jsx';

class SearchByRestaurantCategory extends React.Component {
	constructor(props) {
		super(props)
	}

	handleSearchClick(category) {
      $.ajax({
      	url: `/restaurant/category/${category}`,
      	method: 'GET',
      	contentType: 'application/json',
      	success: (results) => {
      	    console.log('front end get data from server', results[0])
            this.props.handleSearchResults(results);
      	},
      	error: (err) => {
      		console.log(err);
      	}
      })
	}

	render() {
		return (
			<div className="col">
				<input type="text" placeholder="category" ref={input=>this.restaurantCategory = input} /><br/>
				<button onClick={() => this.handleSearchClick(this.restaurantCategory.value)} >Search by Restaurant Category</button>
			</div>
		)
	}
}

export default SearchByRestaurantCategory;