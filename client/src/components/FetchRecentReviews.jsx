import React from 'react';
import RecentReview from './RecentReview.jsx';

class FetchRecentReviews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			this.props.reviews.map(review => 
				<RecentReview review={review}/>
			)
		);
	}
}

export default FetchRecentReviews;