var request = require('request');

var hitokoto = {
	getData : function(callback) {
		request('http://api.hitokoto.us/rand?cat=a&charset=utf-8', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var temp = JSON.parse(body);
				callback({
					id : temp.id,
					content : temp.hitokoto,
					source : temp.source
				});
			} else {
				callback({
					content : "",
					source : ""
				});
			}
		});
	},
}


module.exports = hitokoto;

