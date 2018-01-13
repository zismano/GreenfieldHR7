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

  		//change user to this.props.user after Jimmy finishes his work
		this.state={
			restaurants: [],
			reviews: [],
			restaurantDetailView: false,
			user: {id: 1}
		};

		this.handleSearchResults = this.handleSearchResults.bind(this);
	}

	handleSearchResults(restaurants) {
		this.setState({
			restaurantDetailView: true,
			restaurants: restaurants,
			reviews: []
		});
		$( ".recent-reveiws-title" ).remove();
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
				reviews = this.getDatePattern(reviews);
				this.setState({
					reviews: reviews
				})
			},
			error: (err) => {
				console.log(err);
			}
		});		
	}

	getDatePattern(reviews) {
		for (var i = 0; i < reviews.length; i++) {
			reviews[i].createddate = reviews[i].createddate.split("T")[0];
		}
		return reviews;
	}

	render() {
		return (
			<div>
				<SearchByRestaurantName handleSearchResults={this.handleSearchResults} />
				<SearchByRestaurantCategory handleSearchResults={this.handleSearchResults} />
				<SearchByRestaurantNearMe handleSearchResults={this.handleSearchResults} />
				{this.state.restaurantDetailView && this.state.restaurants.map(restaurant=>{
					return <RestaurantDetails restaurant={restaurant} key={restaurant.id} user={this.props.user}/>
				})}

				<FetchRecentReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default Search;