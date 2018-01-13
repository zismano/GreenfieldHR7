import React from 'react';
import $ from 'jquery';

class WriteReview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviewText: '',
			reviewStars: -1
		}
	}

	handleReviewText(e) {
		this.setState({
			reviewText: e.target.value
		});
	}

	handleStars (number) {
		this.setState({
			reviewStars: number
		});
	}
	render() {

		var starsFormat = "rating medium star-icon direction-ltr value-" + this.state.reviewStars + " half color-negative label-hidden";

		return (
			<div> 
				<div className="reviewText" onChange={this.handleReviewText.bind(this)}>test</div>
					<div className={starsFormat}>
					  <div className="label-value"></div>
					    <div className="star-container">
				        <div className ="star" onClick={this.handleStars.bind(this, 0)}>
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
				        <div className="star" onClick={this.handleStars.bind(this, 1)}>
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
				        <div className="star" onClick={this.handleStars.bind(this, 2)}>
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
				         <div className="star" onClick={this.handleStars.bind(this, 3)}>
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
				         <div className="star" onClick={this.handleStars.bind(this, 4)}>
				            <i className="star-empty"></i>
				            <i className="star-half"></i>
				            <i className="star-filled"></i>
				        </div>
					</div>
					<button>submit</button>
				</div>
			</div>
		)
	}
}

export default WriteReview;