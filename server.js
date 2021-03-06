
var express = require('express');
var app = express();
var middleware = require('./middleware');
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res){
	res.send('Click <a href="/info">here</a> for more info.');
});

app.get('/info', function(req, res){
	res.send('Info page');
});

var data = {
	name: 'John',
	age: 40
};

// --- send back JSON ---
app.get('/data', function(req, res){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send(data);
});

app.post('/data', function(req, res){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send(data);
});

//console.log(__dirname);
app.listen(PORT);
console.log('Server started on port ' + PORT);