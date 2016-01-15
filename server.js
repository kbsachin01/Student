var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var morgan = require('morgan');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


mongoose.connect(config.database, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Connected to the database');
	}
}); 
 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app, express, io);
app.use('/api', api);


app.get('*', function (req, res) {
  res.sendfile('./public/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})