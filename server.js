var express = require('express');
var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public')); //That's a double underscore

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.post("/list",function(req,res){
  data = req.body;
  console.log(req.body)
  console.log(data[0])
})

//the specific route handler below is not really needed anymore since by default express looks to server index.html
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('Great! The server is running and waiting for traffic on port 5000.')
});
