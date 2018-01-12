import React from 'react';
import $ from 'jquery';

class WriteReview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviewText: ''
		}
	}

	handleReviewText(e) {
		this.setState({
			reviewText: e.target.value
		});
	} 

	render() {
		return (
			<div> 
				<textarea onChange={this.handleReviewText.bind(this)}>test</textarea>
				<div>
					stars
					<div className="rating large star-icon direction-rtl value-1 half color-default label-top">
					  <div className="label-value">1.5</div>
					    <div className="star-container">
				        <div className="star">
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
				        <div className="star">
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
				        <div className="star">
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
					  </div>
					</div>
					<button>submit</button>
				</div>
			</div>
		)
	}
}

export default WriteReview;