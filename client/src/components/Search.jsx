import React from 'react';

import SearchByRestaurantName from './SearchByRestaurantName.jsx';
import SearchByRestaurantCategory from './SearchByRestaurantCategory.jsx';
import SearchByRestaurantNearMe from './SearchByRestaurantNearMe.jsx';
//import RestaurantDetails from './RestaurantDetails.jsx';
import FetchRecentReviews from './FetchRecentReviews.jsx';


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state={restaurants: ['baba', 'gaga', 'mama']};

		this.handleSearchResults = this.handleSearchResults.bind(this);
	}

	handleSearchResults(restaurants) {
		this.setState({restaurants: restaurants});
	}

	render() {
		return (
			<div>
				<SearchByRestaurantName handleSearchResults={this.handleSearchResults} />
				<SearchByRestaurantCategory handleSearchResults={this.handleSearchResults} />
				<SearchByRestaurantNearMe handleSearchResults={this.handleSearchResults} />
				{this.state.restaurants.map(restaurant => 
					<RestaurantDetails 
						key={restaurant.id}
						restaurant={restaurant}
					/>
				)}
				<FetchRecentReviews reviews={this.state.restaurants} />
			</div>
		)
	}
}

export default Search;