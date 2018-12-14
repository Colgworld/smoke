var fs = require('fs');
var Papa = require('papaparse');
var file = './sources/latLongsTest.csv';

var content = fs.readFileSync(file, "utf8");

var located;
var final = [];
var counter = 0;
var portion = {};

Papa.parse(content, {
    header: true,
    complete: function(results) {
    	located = results.data;
    }
});

var values = Object.values(located);

for (var key in located) {
  if (counter !== 0 && counter % 3 === 0) {
    final.push(portion);
    portion = {};
  }
  portion[key] = values[counter];
  counter++
}
final.push(portion);

module.exports.final = final; 




