var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'yowl'
});

connection.connect();

// insert a restaurant to DB if not missing fields nor is already in DB
let checkAndInsertRestToDB = (rest) => {
	if (rest.name && rest.categories[0].title && rest.phone && rest.price && 
		rest.coordinates.latitude && rest.coordinates.longitude && 
		rest.location.city === "San Francisco" && rest.location["address1"] && 
		rest.location.state === "CA" && rest.location.zip_code) {
		findRestInDB(rest, (err, results) => {
			if (err) {
				console.log(`Error finding rest in DB ${err}`);
			} else if (!results.length) {
				insertRestToDB(rest);		
			} else {
				console.log(`${rest} is already in DB`);	
			}
		});
	} else {
		console.log(`Restaurant ${rest} is missing field(s) and wasn't inserted`);
	}
};

// returns restaurant based on its name and address (check for duplicates)
let findRestInDB = (rest, callback) => {
	const query = 'SELECT * FROM restaurants WHERE name=? AND address=?';
	connection.query(query, [rest.name, rest.location["address1"]], (err, results) => {
		callback(err, results);
	});
}; 

// inserts restaurant to DB
let insertRestToDB = (rest) => {
	const query = 'INSERT INTO restaurants \
		(name, category, phone, price, latitude, longitude, city, address, state, zip) \
		VALUES (?, ?, ? ,?, ?, ?, ?, ?, ?, ?)';
	params = [rest.name, rest.categories[0].title, rest.phone, rest.price, 
		rest.coordinates.latitude, rest.coordinates.longitude, rest.location.city,
		rest.location["address1"], rest.location.state, Number(rest.location.zip_code)];
	connection.query(query, params, function (error, results) {
  		if (error) {
  			console.log(`Error insert ${rest} to DB`);
  		} else {
	  		console.log(`Insert ${rest.name} to DB`);			
  		}
	});			
};

module.exports = {
	checkAndInsertRestToDB
};
