import React from 'react';


class SearchByRestaurantNearMe extends React.Component {
    constructor(props) {
  		  super(props);
    }

    render() {
  		  return (
            <h3>SearchByRestaurantNearMe</h3>
        )
  	}
}


export default SearchByRestaurantNearMe;

//import Geolocation API
//client:
//create ajax req to get location
//create UI button that triggers ajax req
//server:
//send POST request to https://www.googleapis.com/geolocation/v1/geolocate
//when coordinates are returned...
//invoke helper func
//[ ] (helper):
//
//database:
//