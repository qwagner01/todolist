var express = require('express');
var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var db;

const mongoURL = "mongodb://localhost:27017/mytestdb"
const mongoClient = require('mongodb').MongoClient;
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false})
const assert = require('assert')

mongoClient.connect(mongoURL, {useNewUrlParser: true}, function(err,client){
assert.equal(null, err);
console.log("connected")


  db = client.db("mytestdb")

})

app.use(express.static(__dirname + '/public')); //That's a double underscore

app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));


// app.post("/list",function(req,res){
//   db.collections('docs').create({item:req.body});
//
// })

app.post('/list', function(req, res) {

   console.log(req.body);
  db.collection('practice').insertOne(req.body, function (err, result) {
      if (err){
      console.log('error')

      }else{
      console.log('success')

}
  });
});

//the specific route handler below is not really needed anymore since by default express looks to server index.html
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('Great! The server is running and waiting for traffic on port 5000.')
});
