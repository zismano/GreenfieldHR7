const pg = require('pg');
var conString = "pg://localhost:5432/postgres";
const client = new pg.Client({
	connectionString: conString //change to connectionString: process.env.DATABASE_URL when deployed to Heroku
   // ssl: true
});

client.connect();

let searchByRestaurantName = (name, callback) => {
	client.query('SELECT * from restaurants where name = ?',[name] , (err, res) => {
	  if (err) {
	  	callback(err.stack, null);
	  } else {
	    callback(null, res.rows);
	})
	  client.end()
}

let searchByRestaurantCategory = (category, callback) => {
	client.query('SELECT * from restaurants where category = ?',[category] , (err, res) => {
	  if (err) {
	  	callback(err.stack, null);
	  } else {
	    callback(null, res.rows);
	})
	  client.end()
}

module.exports = {
	searchByRestaurantName: searchByRestaurantName,
    searchByRestaurantCategory: searchByRestaurantCategory
}
