import React from 'react';
import RecentReview from './RecentReview.jsx';

class FetchRecentReviews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<br/>
				<div className="recent-reveiws-title">
					<br/><b>Recent Activities</b>
				</div>
				{this.props.reviews.map(review => 
					<RecentReview review={review}/>
				)}
			</div>

		);
	}
}

export default FetchRecentReviews;