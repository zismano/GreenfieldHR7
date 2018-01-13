import React from 'react';
import $ from 'jquery';

class LoginButton extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$.ajax({
			url: `/api/current_user`,
			method: 'GET',
			contentType: 'application/json',
			success: (user) => {
				this.props.handleLogin(user);
			},
			error: (err) => {
				console.error('ERROR', err);
			}
		})
	}

	handleLogout() {
		$.ajax({
			url: `/api/logout`,
			method: 'GET',
			contentType: 'application/json',
			success: (user) => {
				this.props.handleLogin(user);
			},
			error: (err) => {
				console.error('ERROR:', err);
			}
		})
	}

	render() {

		var button;
		if (typeof this.props.user === 'string') {
			button = <a className="logIn" href="/auth/google">Login</a>;		
		} else {
			button = <a className="logIn" onClick={this.handleLogout.bind(this)}>Log out</a>;
		}
		return (
			<div>
				{button}	
			</div>
		)
	}
}

export default LoginButton;