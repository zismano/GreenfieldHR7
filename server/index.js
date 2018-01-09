const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const app = express();
const PORT= process.env.PORT || 5000


app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res){
	console.log('haha')
  res.send('hello world');
});



app.listen(PORT, ()=>{
  console.log(`server listen on port ${PORT}`)
})
