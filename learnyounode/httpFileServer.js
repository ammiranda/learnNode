var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	var filename = process.argv[3];
	var readStream = fs.createReadStream(filename);
	readStream.on('open', function() {
		readStream.pipe(res);
	});

	readStream.on('error', function(err) {
		res.end(err);
	});	


})
	server.listen(process.argv[2]);
