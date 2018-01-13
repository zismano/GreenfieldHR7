import React from 'react';
import $ from 'jquery';

import SearchByRestaurantName from './SearchByRestaurantName.jsx';
import SearchByRestaurantCategory from './SearchByRestaurantCategory.jsx';
import SearchByRestaurantNearMe from './SearchByRestaurantNearMe.jsx';
import RestaurantDetails from './RestaurantDetails.jsx';
import FetchRecentReviews from './FetchRecentReviews.jsx';


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state={restaurants: [], reviews: []};

		this.handleSearchResults = this.handleSearchResults.bind(this);
	}

	handleSearchResults(restaurants) {
		this.setState({restaurants: restaurants});
	}

	componentWillMount() {
		this.getReviews();
	}

	getReviews() {
		$.ajax({
			url: '/reviews',
			type: "GET",
			success: (reviews) => {
				console.log(reviews);
				this.setState({
					reviews: reviews
				})
			},
			error: (err) => {
				console.log(err);
			}
		});		
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
				<FetchRecentReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default Search;