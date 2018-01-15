import React from 'react';
import $ from 'jquery';

class FilterRestaurants extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="filter-dropbox">	
			    Pick Price:		
			    <select value="$" onChange={this.props.handleFilter}>
				    <option value="$">$</option>
	                <option value="$$">$$</option>
	                <option value="$$$">$$$</option>
	                <option value="$$$$">$$$$</option>
			    </select>
			    <br/>
			    Pick Rating Star:
			    <select value="☆" onChange={this.props.handleFilter}>
				    <option value="1">☆</option>
	                <option value="2">☆☆</option>
	                <option value="3">☆☆☆</option>
	                <option value="4">☆☆☆☆</option>
	                <option value="5">☆☆☆☆☆</option>
			    </select>
			</div>
		)
	}
}

export default FilterRestaurants;