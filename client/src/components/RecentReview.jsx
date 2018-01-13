import React from 'react';

class RecentReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div>{this.props.review.name}</div>
				<div>{this.props.review.star}<span>" "</span>{this.props.review.createddate}</div>
				<div>{`${this.props.review.firstname} ${this.props.review.lastname}: ${this.props.review.comment}`}</div>			
			</div>
		);
	}
}

export default RecentReview;