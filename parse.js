var csv = require('ya-csv');

var reader = csv.createCsvStreamReader(process.openStdin());
var writer = csv.createCsvStreamWriter(process.stdout);
var sys = require('util');

var located = [];

function location(latitude, longitute) {
		this.latitude = latitude;
		this.longitute = longitute;
	return located;
	console
};

// equivalent of csv.createCsvFileReader('data.csv') 
var reader = csv.createCsvFileReader('latLongs.csv');
reader.setColumnNames([ 'Lat', 'Long' ]);
reader.addListener('data', function(data) {
	let located = new location(data.Lat, data.Long);
    console.log(location.latitude)
});

exports.located = located;
