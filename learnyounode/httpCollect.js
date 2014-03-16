var http = require('http');

var dataString = "";
http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.on('data', function(input){
		dataString = dataString.concat(input);
	});
	res.on('end', function(){
		console.log(dataString.length);
		console.log(dataString);
	});
}).on('error', console.error);
