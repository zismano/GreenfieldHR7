const path = require('path');
const db = require('../database/index.js');

var getCloseRestaurants = (userLat, userLon, callback) => {
	db.getAllRestaurants((err, restaurants) => {
		var allResults = {};
		var distances = [];
		var closestResults = [];

		restaurants.forEach(restaurant => {
			var resLat = parseFloat(restaurant.latitude);
			var resLon = parseFloat(restaurant.longitude);
			var distance = hypotenator(userLat, userLon, resLat, resLon);

			allResults[distance] = restaurant;
			distances.push(distance);
		});

		var distancesSorted = distances.sort();
		
		for (var i = 0; i < 10; i++) {
			var restaurant = allResults[distancesSorted[i]];
			
			// restaurant[distance] = distancesSorted[i];
			closestResults.push(restaurant);
		}

		callback(closestResults);
	});
}

var hypotenator = (latA, lonA, latB, lonB) => {
	const R = 6371;
	var dLat = degreeToRadians(latB-latA); 
	var dLon = degreeToRadians(lonB-lonA); 
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degreeToRadians(latA)) * Math.cos(degreeToRadians(latB)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; 
	return d;
};

var degreeToRadians = (degree) => {
    return degree * (Math.PI/180);
};


module.exports = {
	getCloseRestaurants: getCloseRestaurants	
};