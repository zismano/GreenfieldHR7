import React from 'react';

import SearchByRestaurantName from './SearchByRestaurantName.jsx';
import SearchByRestaurantCategory from './SearchByRestaurantCategory.jsx';
import SearchByRestaurantNearMe from './SearchByRestaurantNearMe.jsx';

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<SearchByRestaurantName />
				<SearchByRestaurantCategory />
				<SearchByRestaurantNearMe />
			</div>
		)
	}
}

export default Search;