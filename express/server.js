const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get('/about', (req, res) =>{
  var name = req.query.name;
  
  res.send("<h1>Whadaya want, dont talk to me unless you are " + name + "</h1>");
});

app.get('/stupid', function (req, res) {
    res.send('You stupid');
  });
  

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});