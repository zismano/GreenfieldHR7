const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');
const cookieSession = require('cookie-session');
const googleClient = require('../config.js');
const passport = require('passport');

const app = express();


app.set('port', process.env.PORT || 3000)


app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, '../client/dist')));


app.use(cookieSession({
	maxAge: 24 * 3600000,
	keys: [googleClient.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

app.get('/', function(req, res){
  res.send('hello team 7');
});

app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'))
})
