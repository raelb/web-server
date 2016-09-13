
var express = require('express');
var app = express();
var moment = require('moment');

var middleware = {
	logger: function(req, res, next){
		console.log('Request: [' + moment().format('YYYY-MM-DD hh:mm') + '] ' + 
			req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res){
	res.send('Click <a href="/info">here</a> for more info.');
});

app.get('/info', function(req, res){
	res.send('Info page');
});

var data = {
	name: 'Rael',
	age: 41
};

app.get('/data', function(req, res){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send(data);
});

//console.log(__dirname);
app.listen(3000);
console.log('Server started on port 3000');