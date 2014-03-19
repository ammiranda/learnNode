var request = require('request');
var r = request.post('http://localhost:8000/');
var input = process.stdin;
var output = process.stdout;

input.pipe(r).pipe(output);

	
