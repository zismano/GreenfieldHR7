const http = require("http");
const GoogleMapsAPI = require('googlemaps');
const googleMapsKey = require('../config/config.js');

let publicConfig = {
  key: process.env.GOOGLE_MAPS_STATIC_KEY || googleMapsKey.GOOGLE_MAPS_STATIC_KEY,
  stagger_time:       1000, // for elevationPath 
  encode_polylines:   false,
  secure:             true, // use https 
//  proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests 
};

let createMapURL = (rest) => {
  const gmAPI = new GoogleMapsAPI(publicConfig);
  let latitude = rest.latitude;
  let longitude = rest.longitude;
  let params = {
    center: `${rest.latitude},${rest.longitude}`,
    zoom: 15,
    size: '400x300',
    maptype: 'roadmap',
    markers: [
      {
	  	location: `${latitude},${longitude}`,
	    label   : '',
	    color   : 'red',
	    shadow  : true
	  }]
	};
  return gmAPI.staticMap(params); // return static map URL 
	// gmAPI.staticMap(params, function(err, binaryImage) {
	//   // fetch asynchronously the binary image
	//   if (err) {
	//   	console.log(err);
	//   } else {
	//   	callback(binaryImage);
	//   } 
	// });
}

module.exports = {
  createMapURL,
};

