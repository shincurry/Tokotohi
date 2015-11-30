var request = require('request');

var blockedWords = [];

function isBlocked(word) {
	var len = blockedWords.length;
	for (var i = 0; i < len; i++) {
		if (RegExp(blockedWords[i]).test(word)) {
			return true;
		}
	}
	return false;
}
function requestData(callback) {
	request('http://api.hitokoto.us/rand?cat=a&charset=utf-8', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var temp = JSON.parse(body);
			if (isBlocked(temp.hitokoto) || isBlocked(temp.source)) {
				requestData(callback);
			} else {
				callback({
					id : temp.id,
					content : temp.hitokoto,
					source : temp.source
				});
			}
		} else {
			callback({
				id : "404",
				content : "记一次失败的 HTTP 请求",
				source : "_(:зゝ∠)_"
			});
		}
	});
}

var hitokoto = {
	getData : function(callback) {
		requestData(function(data) {
			callback(data);
		});
	},
	setBlockedWords : function(words) {
		blockedWords = words;
	}
}

module.exports = hitokoto;

