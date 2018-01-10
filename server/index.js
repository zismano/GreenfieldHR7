const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
const app = express();
app.set('port', process.env.PORT || 3000)


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res){
	console.log('environment is ', process.env)
  res.send('hello team 7');
});

app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'))
})

// example