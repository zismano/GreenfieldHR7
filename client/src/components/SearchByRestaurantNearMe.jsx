import React from 'react';


class SearchByRestaurantNearMe extends React.Component {
    constructor(props) {
  		  super(props);
    }

//import Geolocation API
//client:
	//create ajax req to get location
	//create UI button that triggers ajax req
//server:
	//send POST request to https://www.googleapis.com/geolocation/v1/geolocate
	//when coordinates are returned...
	//invoke helper func, passing it long and lat data
		//...when helper func returns the data, return the restaurant objects to the client
//locator (helper):
	//invoke db query to get all restaurant objects
	//loop through each restaurant and calculate distance between user and restaurant
		// store array containing restaurant object in object with distance as key
	//return first 10 restaurant objects to server
//database:
	//write query that returns all restaurant objects
		


    render() {
  		  return (
            <h3>SearchByRestaurantNearMe</h3>
        )
  	}
}


export default SearchByRestaurantNearMe;