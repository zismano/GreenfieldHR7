import React from 'react';

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

	handleReview(reviewText, event) {
		var stars = this.state.reviewStars + 1;
		var review = {comment: reviewText, stars: stars}
		this.props.handleReviewSubmit(review, event);
	}

	render() {

		var starsFormat = "rating medium star-icon direction-ltr value-" + this.state.reviewStars + " half color-negative label-hidden";

		return (
			<form> 
				<textarea className="reviewText" type="text" placeholder="Add a review here!" ref={input => this.review = input}/>
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
				<button className="reviewSubmit" onClick={(event) => this.handleReview(this.review.value, event)}> Submit </button>
				</div>
			</form>
		)
	}
}

export default WriteReview;