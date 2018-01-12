import React from 'react';

import SearchByRestaurantName from './SearchByRestaurantName.jsx';
import SearchByRestaurantCategory from './SearchByRestaurantCategory.jsx';
import SearchByRestaurantNearMe from './SearchByRestaurantNearMe.jsx';
import RestaurantDetails from './RestaurantDetails.jsx';


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			restaurants: [],
			restaurantDetailView: false
		};

		this.handleSearchResults = this.handleSearchResults.bind(this);
	}

	handleSearchResults(restaurants) {
		this.setState({
			restaurantDetailView: true,
			restaurants: restaurants
		});
	}

	render() {
		return (
			<div>
				<SearchByRestaurantName handleSearchResults={this.handleSearchResults} />
				<SearchByRestaurantCategory handleSearchResults={this.handleSearchResults} />
				<SearchByRestaurantNearMe handleSearchResults={this.handleSearchResults} />
				{this.state.restaurantDetailView && this.state.restaurants.map(restaurant=>{
					return <RestaurantDetails restaurant={restaurant} key={restaurant.id} />
				})}


			</div>
		)
	}
}

export default Search;