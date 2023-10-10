const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

const family=["GMan", "Reggie", "The great king of evil ganon"];

app.get('/', function (req, res) {
  //res.sendFile(__dirname + "/public/html/index.html");
  res.render("index", { name: "hi" , family: family});
});

app.get('/about', (req, res) =>{
  var name = req.query.name;
  
  res.send("<h1>Whadaya want, dont talk to me unless you are " + name + "</h1>");
});

app.get('/about/:name', (req, res) =>{
  var name = req.params.name;
  
  res.send("<h1>Dont click on that, its for " + name + " only!!!!</h1>");
});

app
  .route("/login")
  .get((req, res) =>{
    var name = req.query.username;
    var pass = req.query.password;
    
    res.send("<h1>Oh, its just you " + name + "</h1>");})
  .post((req,res)=>{
    var name = req.body.username;
    var pass = req.body.password;
    res.send("<h1>Oh, its just you " + name + "</h1>");
});

app.get('/stupid', function (req, res) {
    res.send('You stupid');
  });
  

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
