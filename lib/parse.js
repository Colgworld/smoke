var fs = require('fs');
var Papa = require('papaparse');
var file = './sources/latLongs.csv';
var content = fs.readFileSync(file, "utf8");

var location;

Papa.parse(content.replace(/^\uFEFF/, ''), {
    // header: true,
    complete: function(results) {
      location = results.data;
    }
});

module.exports.location = location; 




