import React from 'react';

class RecentReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let review = this.props.review;
		return (
			<div>
				<div className="recent-reviews-box">
					<p className="restaurant-text">
						<div className="restaurant-name"><b>{review.name}</b></div>
						<br/>
						<b>Stars:</b> {review.star} {review.createddate}
						<br/><br/>
						<b>{review.firstname} {review.lastname}:</b> {review.comment}
					</p>
	      		</div>
	      	</div>

		);
	}
}

export default RecentReview;