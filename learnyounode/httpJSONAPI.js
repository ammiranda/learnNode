var http = require('http');
var moment = require('moment');
var url = require('url');

var server = http.createServer(function(req, res) {
	var req_url = url.parse(req.url, true);
	var path = req_url.pathname;

	if (!(time = getTimeOrError(req_url.query.iso, res))) return;

	res.writeHead(200, {'Content-Type': 'application/json'});

	if (path == '/api/parsetime') {
		res.end(JSON.stringify({
			hour: time.format('h'),
			minute: time.format('m'),
			second: time.format('s')
		}))
	}

	if (path == '/api/unixtime') {
		res.end(JSON.stringify({unixtime: time.valueOf() }));
	}

	res.end('invalid url, try /api/parsetime or /api/unixtime')
	}).listen(process.argv[2]);

	function getTimeOrError(iso, res) {
		if (!iso) {
			res.end('invalid query params, try iso=somedate');
			return;
		}

		time = moment(req_url.query.iso);

		if (!time.isValid()) {
			res.end('invalid time, try 2014-03-18')
			return;
		}
		return time;
	}

