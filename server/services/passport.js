const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy
const googleClient = require('../../config.js')

passport.serializeUser((user, done) => {
	//invoke done with (err, user.id) where we replace err with null
	//user is the userInfo, user.id is the id in the db
});

passport.deserializeUser((id, done) => {
	//query database for user by id
	//when query in dataase is finished...
		//invoke done(err, user) where we replace err with null
});
passport.use(new googleStrategy({
	clientID: googleClient.googleClientID,
	clientSecret: googleClient.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
	//add user info to db here
	//done needs to be invoked inside callback of db function 
	//done (err, userInfo); userInfo is user's info in db
	console.log(profile);
}));