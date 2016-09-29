var express = require('express');
var	app = express();
var	path = require('path');
var	bodyParser = require('body-parser');
var	mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
	console.log('listening to port 8000');
})