var express     = require('express');
var app         = express();
console.log(app);
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Book        = require('./Book.model');

var db = 'mongodb://localhost:27017/example';
mongoose.connect(db);

// const { MongoClient } = require("mongodb");
// var dbUrl = "mongodb://localhost:27017/example";
// var db = MongoClient.connect(dbUrl, { useNewUrlParser: true });
// console.log(db);

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// /c/Program Files/MongoDB/Server/3.6/bin

var port        = 8088;

app.listen(port, function(){
  console.log('App Listening on Port '+port);
});