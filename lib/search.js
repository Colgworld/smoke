'use strict';

var Papa = require('papaparse');
var fs = require('fs');

var api_key = "c6bEdVXVLrwHxz-g-HoE7kuKa_qmGsxtCkvIrM1NUayIwFKjKKe9tmQaeon6M5Okk8uRCjs5_zfyaCHyHth8Z1bfTAYiFsDcV2C5TPQw1P0P_yqQiewrpdE-mscSXHYx";
var locationData = require('./parse.js');

const yelp = require('yelp-fusion');
const client = yelp.client(api_key);

// console.log(locations);
const location = locationData.location
var allBusinesses = {}
var csv;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function doSearch() {
	for (var i = location.length - 1; i >= 0; i--) {
		await sleep(86400000);
		yelpify(location[i][0], location[i][1])
	}
}

function yelpify(Latitude, Longitude){
	client.search({
	  term:'smokeshop',
	  latitude: Latitude,
	  longitude: Longitude
	}).then(response => {
		var csv = Papa.unparse(response.jsonBody.businesses);
		fs.writeFile('locations.csv', csv, 'utf8', function(err) {
			if (err) {
				console.log('Not fucking working!!!');
			} else {
				console.log('Got eeeeeeem');
			}
		});
	}).catch(e => {
		console.log(e);
	});

	// return csv;
}
    
doSearch()


