import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>React Component</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));