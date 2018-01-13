const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');
const cookieSession = require('cookie-session');
const passport = require('passport');
const database = require('../database/index.js');
const request = require('request');
const locator = require('../helpers/locator.js');
const config = require('../config.js');
const googleMaps = require('../helpers/googleMaps.js')

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(cookieSession({
	maxAge: 24 * 3600000,
	keys: [config.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

app.get('/restaurant/name/:name', (req, res)=>{
	let name = req.params.name;
	database.searchByRestaurantName(name, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
			//console.log('server get this result from db', results[0])
			let count = 0;
			results.map(restaurant=>{
				restaurant.map = googleMaps.createMapURL(restaurant);
				count++;
                if (count === results.length) {
                	res.status(200).json(results);
                }
			})
		}
	})
});

app.get('/restaurant/category/:category', (req, res)=>{
	let category = req.params.category;
	database.searchByRestaurantCategory(category, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
			//console.log('server get this result from db', results[0])
			let count = 0;
			results.map(restaurant=>{
				restaurant.map = googleMaps.createMapURL(restaurant);
				count++;
                if (count === results.length) {
                	res.status(200).json(results);
                }
			})
		}
	})
});

app.get('/restaurant/near', (req, res) => {
	var options = { 
		method: 'POST',
  		url: 'https://www.googleapis.com/geolocation/v1/geolocate',
  		qs: { key: config.googleGeolocationKey },
  		headers: { 
  			'Postman-Token': '9d7aa36d-eda8-21a1-9c39-b6b391772486',
     		'Cache-Control': 'no-cache' 
     	} 
    };

	request(options, (error, response, body) => {
  		if (error) {
  			res.status(404).send(err);
  		} else {
  			var geo = JSON.parse(body);
  			
  			locator.getCloseRestaurants(geo.location.lat, geo.location.lng, (restaurants) => {
				restaurants.forEach(restaurant => {
					restaurant.map = googleMaps.createMapURL(restaurant);
				});
  				
  				res.status(200).json(restaurants);
  			});
  		}
  	});
});

app.get('/reviews', (req, res) => {
	database.getReviews((err, reviews) => {
		if (err) {
			res.status(404).send(err);
		} else {
			res.status(200).json(reviews);
		}
	});
});

app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'));
});