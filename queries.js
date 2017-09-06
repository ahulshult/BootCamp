/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  Listing.find({name: 'Library West'}, function(err, entry){
    if (err) throw err;
    console.log(entry);
  });
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
};
var removeCable = function() {
  Listing.find({code: 'CABL'}, function(err, entry){
    if (err) throw err;
    var temp = entry
    Listing.remove(function(err){
      if (err) throw err;
      var str = temp + " successfully removed!";
      console.log(str);
    });
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsMemorial = function() {
  Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "701 N Broadway, Sleepy Hollow, NY 10591"}, function(err, entry){
    console.log(entry);
    if (err) throw err;
    var temp = "Successfully Updated: "+ entry;

    console.log(temp);
  });
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, entry){
    if (err) throw err;
    console.log(entry);
    mongoose.connection.close();
  });
  /*
    Retrieve all listings in the database, and log them to the console.
   */
};
var fs = require('fs'),
    mongoose = require('mongoose'),
    config = require('./config');
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js');
  mongoose.connect(config.db.uri);

  findLibraryWest();
  removeCable();
  updatePhelpsMemorial();
  retrieveAllListings();
