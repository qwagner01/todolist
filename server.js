require('dotenv').load();
var express = require('express');
var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var db;
var name;
var key;
var obj;
//const mongoURL = "mongodb://staples:staples1@ds245082.mlab.com:45082/exampledb"
//const mongoURL = "mongodb://localhost:27017/mytestdb"
const mongoURL = process.env.DBPATH
const mongoClient = require('mongodb').MongoClient;
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false})
const assert = require('assert')




mongoClient.connect(mongoURL, {useNewUrlParser: true}, function(err,client){
assert.equal(null, err);
console.log("connected")


  db = client.db("exampledb")

})

app.use(express.static(__dirname + '/public')); //That's a double underscore

app.use(bodyParser.json());


app.post('/list', function(req, res) {
  db.collection('docs').insertOne(req.body, function (err, result) {
//db.collection('practice')
//       if (err){
//       console.log('error')
//
//       }else{
//       console.log('success')
//
// }
  });
});


app.post('/name', function(req, res) {
 obj = req.body.key;
});





app.get('/respo', function(req, res) {
db.collection('docs').find({"key": obj }).toArray(function (err, result){
//db.collection('practice')
res.send(result);

})


})



app.post('/del', function(req, res) {
db.collection('docs').deleteOne({"key": obj})
//db.collection('practice')
})



// app.get('/', function(req, res) {
//   res.sendFile('index.html');
// });

app.listen(port, function() {
  console.log(port)
});
