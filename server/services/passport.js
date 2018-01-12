const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy
const config = require('../../config.js')
const database = require('../../database/index.js')

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	database.searchUser(id, function(err, user) {
		if (err) {
			console.error('ERROR:', err);
		} else {
			done(null, user);
		}
	});
});

passport.use(new googleStrategy({
	clientID: config.googleClientID,
	clientSecret: config.googleClientSecret,
	callbackURL: config.googleClientCallBackURL
}, (accessToken, refreshToken, profile, done) => {
	database.addUser(profile, function(err, users) {
		if (err) {
			console.error('ERROR:', err);
		} else {
			done(null, users[0]);
		}
	});
}));