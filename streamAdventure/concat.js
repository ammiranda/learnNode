var concat = require('concat-stream');

process.stdin.pipe(concat(function(body){
	var reverseText = body.toString().split("").reverse().join("");
	console.log(reverseText);
	}));
