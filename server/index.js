const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy
const app = express();

passport.use(new googleStrategy({
	clientID: 'PLACEHOLDERID',
	clientSecret: 'PLACEHOLDERSECRET',
	callbackURL: 'auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
	console.log(profile);
}));

app.set('port', process.env.PORT || 3000)


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'))
})
