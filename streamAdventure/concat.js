var concat = require('concat-stream');
var http = require('http');

var server = http.createServer(function(req, res) {
	req.pipe(concat(function(body) {
		var reverseText = body.toString().split("").reverse().join("");
		res.end(reverseText);
		}));
	}
	server.listen(process.argv[2]);
