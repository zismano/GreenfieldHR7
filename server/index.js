const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const app = express();
const database = require('../database/index.js')
app.set('port', process.env.PORT || 3000)


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res){
<<<<<<< HEAD
	console.log('environment is ', process.env.GOOGLEMAP_KEY)
||||||| merged common ancestors
=======
	console.log('environment is ', process.env)
>>>>>>> 86827ece6487b6e2bfffd4fec00a552179df3d2a
  res.send('hello team 7');
});

<<<<<<< HEAD
app.get('/restaurant/name/:name', (req, res)=>{
	let name = req.params.name;
	database.searchByRestaurantName(name, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
            res.status(200).json(results);
		}
	})
});

app.get('/restaurant/category/:category', (req, res)=>{
	let category = req.params.category;
	database.searchByRestaurantCategory(category, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
			console.log('server get this result from db', results[0])
            res.status(200).json(results);
		}
	})
});

||||||| merged common ancestors
=======
app.get('/restaurant/name/:name', (req, res)=>{
	let name = req.params.name;
	database.searchByRestaurantName(name, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
            res.status(200).json(results);
		}
	})
});

app.get('/restaurant/category/:category', (req, res)=>{
	let category = req.params.category;
	database.searchByRestaurantCategory(category, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
            res.status(200).json(results);
		}
	})
});

>>>>>>> 86827ece6487b6e2bfffd4fec00a552179df3d2a
app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'))
})

// example