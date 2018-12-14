'use strict';

var api_key = process.env.apiKey;
var locationData = require('./parse.js');
var located = locationData.located;

const yelp = require('yelp-fusion');
const client = yelp.client(api_key);

let position = 1;

client.search({
  term:'smokeshop',
  location: [{
  	latitude: located.latitude[position],
  	longitute: located.longitute[position]
  }],
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});