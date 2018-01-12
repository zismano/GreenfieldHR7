const pg = require('pg');
var conString = "pg://localhost:5432/postgres";
const client = new pg.Client({
	connectionString: conString //change to connectionString: process.env.DATABASE_URL when deployed to Heroku
   // ssl: true
});

client.connect();

let searchByRestaurantName = (name, callback) => {
	const text = 'SELECT * from (select restaurants.*, round(avg(reviews.star)) as star from restaurants join reviews on restaurants.id=reviews.restaurant_id group by restaurants.id) a where a.name like $1::text';
	client.query(text,[`%${name}%`] , (err, res) => {
	  if (err) {
	  	callback(err.stack, null);
	  } else {
	  	// if (res.rows.length === 0) {
	  	// 	client.query(text, ['Burgers'], (err, resTwo)=>{
	  	// 		if(!err) {
	  	// 			callback(null, resTwo.rows)
	  	// 		}
	  	// 	})
	  	// } else {
	  		callback(null, res.rows);	
	  	//}
	  }
    })
}

let searchByRestaurantCategory = (category, callback) => {
	const text = 'SELECT * from (select restaurants.*, round(avg(reviews.star)) as star from restaurants join reviews on restaurants.id=reviews.restaurant_id group by restaurants.id) a where a.category like $1::text';
	client.query(text,[`%${category}%`] , (err, res) => {
	  if (err) {
	  	callback(err.stack, null);
	  } else {
	   //  if (res.rows.length === 0) {
	  	// 	client.query(text, ['Burgers'], (err, resTwo)=>{
	  	// 		if(!err) {
	  	// 			callback(null, resTwo.rows)
	  	// 		}
	  	// 	})
	  	// } else {
	  		callback(null, res.rows);	
	  	// }
	  }
	})
}

module.exports = {
	searchByRestaurantName: searchByRestaurantName,
    searchByRestaurantCategory: searchByRestaurantCategory
}
