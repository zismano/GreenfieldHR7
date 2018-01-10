const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const app = express();
const database = require('../database/index.js')
app.set('port', process.env.PORT || 3000)


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res){
	console.log('environment is ', process.env)
  res.send('hello team 7');
});

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

app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'))
})

// example