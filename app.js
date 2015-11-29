var express = require('express');
var app = express();

var hitokoto = require('./modules/hitokoto');

app.get('/', function(req, res) {
	res.sendfile('./views/index.html');
});

app.get('/hitokoto', function(req, res) {
	hitokoto.getData(function(data) {
		res.jsonp(data);
	});
});

app.listen(3002, "127.0.0.1", function() {
	console.log("app run in 127.0.0.1:3002");
});