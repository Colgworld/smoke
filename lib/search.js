'use strict';

var api_key = process.env.apiKey;
var locationData = require('./parse.js');

const yelp = require('yelp-fusion');
const client = yelp.client(api_key);

var locations = locationData.final;

var str = JSON.stringify(locations, null, 2)
console.log(locations[1].Longitude);

// var hi = locations
// console.log(hi)
// locations.forEach(function (o) {
//     Object.keys(o).forEach(function (k) {
//         console.log(k, o[k]); // show key and value
//     });
// })

// client.search({
//   term:'smokeshop',
//   location: [{
//   	latitude: 
//   	longitude: 
//   }],
// }).then(response => {
//   console.log(response.jsonBody.businesses[0].name);
// }).catch(e => {
//   console.log(e);
// });