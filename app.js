var express     = require('express');
var app         = express();
// console.log(app);
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Book        = require('./Book.model');

var db = 'mongodb://localhost:27017/example';
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(request, response){
  response.send("Welcome To The WhollyCoder Show...");
});

app.get('/books', function(request, response){
  console.log('Getting All Books...');
  Book.find({}).exec(function(err, books){
    if(err){
      response.send("An ERROR has occured!!!");
    }else{
      console.log(books);
      response.json(books);
    }
  });
});

app.get('/books/:id', function(request, response){
  console.log('Getting One Book...');
  Book.findOne({

    _id: request.params.id

  }).exec(function(err, book){
    if(err){
      response.send("An ERROR has occured!!!");
    }else{
      console.log(book);
      response.json(book);
    }
  });
});

var port = 8088;

app.listen(port, function(){
  console.log('App Listening on Port '+port);
});