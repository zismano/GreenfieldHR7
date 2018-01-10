const fs = require('fs');
const pg = require('pg');
var conString = "pg://localhost:5432/postgres";
const client = new pg.Client({
	connectionString: conString //change to connectionString: process.env.DATABASE_URL when deployed to Heroku
   // ssl: true
});

client.connect();

let insertRestToDB = (restaurants) => {
	const text = 'INSERT INTO restaurants \
		(name, category, phone, price, latitude, longitude, city, address, state, zip) \
		VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10)';
	restaurants.map(restaurant=>{
		const values = [restaurant.name, restaurant.categories[0].title, restaurant.phone, restaurant.price, 
			restaurant.coordinates.latitude, restaurant.coordinates.longitude, restaurant.location.city,
			restaurant.location["address1"], restaurant.location.state, Number(restaurant.location.zip_code)];
		client.query(text, values, (error, results) => {
	  		if (error) {
	  			console.log(`Error insert ${restaurant} to DB`);
	  		} else {
		  		console.log(`Insert ${restaurant.name} to DB`);			
	  		}
		});			
		
	})
};

// fs.readFile('./categories/burgers.txt','utf-8' ,(err, data)=>{
// 	if (err) {
// 		console.log(err);
// 	} else {
// 	    insertRestToDB(JSON.parse(data).businesses)
// 	}
// })
fs.readFile('./categories/chinese.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}})

fs.readFile('./categories/indian.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}}); 

fs.readFile('./categories/italian.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/japanese.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/latin.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/mexican.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/seafood.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/steak.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/vegan.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./categories/vegeterian.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./neighborhoods/Alamo_Square.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./neighborhoods/Civic_Center.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./neighborhoods/Haight_Ashbury.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./neighborhoods/Telegraph_Hill.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./neighborhoods/Tenderloin.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});

fs.readFile('./neighborhoods/Twin_Peaks.txt','utf-8' ,(err, data)=>{
	if (!err) {insertRestToDB(JSON.parse(data).businesses)}});