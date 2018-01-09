const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res)=>{
	res.status(200).json('hello world')
})

app.listen(3000, ()=>{
	console.log('server listen on port 3000')
})
