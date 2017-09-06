'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');
    //json = require('./listings.json');

var listingData = undefined;
/* Connect to your database */
//mongoose.connect(config.db.uri);
  //done();

fs.readFile('./listings.json', 'utf8', function(err, data){
  if (err) throw err;
  listingData = JSON.parse(data);
  openDB();
  enterData();
  mongoose.connection.close();
  });

function openDB(){
mongoose.connect(config.db.uri);
}

function enterData(){
for(var i=0; i<listingData.entries.length; i++){
    //console.log(listingData.entries[i]);
    var entry = listingData.entries[i];
    var newEntry = new Listing({
      code: entry.code,
      name: entry.name,
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address
    });
    newEntry.save(function(err){
      if (err) throw err;
    });
  }
}


/*
for(var i=0; i<listingData.entries.length; i++){
  entry = listingData[i];
  var newEntry = new Listing({
    code: entry.code,
    name: entry.name,
    latitude: entry.latitude,
    longitude: entry.longitude,
    address: entry.address
  });
  newEntry.save(function(err){
    if (err) throw err;
  });

}
//done();
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
