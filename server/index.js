const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/get', (req, res)=>{
	console.log('lalal')
	res.status(200).send('hello world')
})

app.listen(3000, ()=>{
	console.log('server listen on port 3000')
})
