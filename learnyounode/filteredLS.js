function filterFiles(dir, ext, callback) {
	var fs = require('fs');
	var ext = '.' + process.argv[3];	

	fs.readdir(dir, function(err, files) {
		var fileList = [];
		if (err) return callback(err);

		files.forEach(function (file) {
			var fext = file.slice(-1 * ext.length);
			if (fext === ext) {
				fileList.push(file);
			}
		});
		return callback(null, fileList);
	});
}

module.exports = filterFiles;

