const path = require('path');
const db = require('../database/index.js');

let locator = (userLat, userLon, callback) => {
	db.getRestaurants(restaurants => {
		let allResults = {};
		let closestResults = [];

		restaurants.map(restaurant => {
			let resLat = restaurant.longitude;
			let resLon = restaurant.latitude;
			let distance = hypotenator(userLat, userLon, resLat, resLon);

			results[distance] = restaurant;
		});

		for (let key in allResults) {
			let counter = 0;

			while(counter < 10) {
				results.push(allResults[key]);
				counter++;
			}
		}

		callback(closestResults);
	});
}

let hypotenator = (latA, lonA, latB, lonB) => {
	const R = 6371;
	let dLat = deg2rad(latB-latA); 
	let dLon = deg2rad(lonB-lonA); 
	let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(latA)) * Math.cos(deg2rad(latB)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	let d = R * c; 
	return d; // distance in km
};

let deg2rad = (degree) => {
    return degree * (Math.PI/180);
};


module.exports = {
	locator: locator	
};