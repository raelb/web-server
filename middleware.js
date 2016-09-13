

var moment = require('moment');

var middleware = {
	logger: function(req, res, next){
		console.log('Request: [' + moment().format('YYYY-MM-DD hh:mm') + '] ' + 
			req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;
