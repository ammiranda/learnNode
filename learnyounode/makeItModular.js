var modular = require('./filteredLS.js');
var dir = process.argv[2];
var ext = process.argv[3];

function callback(err, data) {
	if (err) throw err;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
}

modular(dir, ext, callback);

