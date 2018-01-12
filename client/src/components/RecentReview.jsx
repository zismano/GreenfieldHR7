import React from 'react';

class RecentReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>{this.props.review}</div>
		);
	}
}

export default RecentReview;