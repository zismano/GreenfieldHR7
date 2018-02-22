const http = require("http");
const GoogleMapsAPI = require('googlemaps');
const config = require('../config.js');

let publicConfig = {
  key: config.googleMapsStaticKey,
  stagger_time:       1000, // for elevationPath 
  encode_polylines:   false,
  secure:             true, // use https 
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
}

module.exports = {
  createMapURL: createMapURL
};

