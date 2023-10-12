const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

const family=["GMan", "Reggie", "The great king of evil ganon"];
let name = "John";

app.get('/', function (req, res) {
  //res.sendFile(__dirname + "/public/html/index.html");
  res.render("index", { name: name }); //purposefully not defining the variable family to test ejs conditionals
});

app.get('/about', (req, res, next) =>{ // in here we are forcing a 400 error for show of local error handlers. It can be altered in many ways to see different properties
  var loc_name = req.query.name;
  
  //res.send("<h1>Whadaya want, dont talk to me unless you are " + name + "</h1>");
  if(!loc_name){
    const error = new Error("Missing name value");
    error.status = 400;
    next(error);
  } else {
    name = loc_name;
    res.redirect("/");
  }
 
},
(err,req,res,next) => { //local error handler, only applies for this app.get
  console.error(err.stack);
  res.status(500).render("error", {
    message: err.status + " " + err.message,
  });
}
); 

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
  
app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).render("error", { message: "500"}); //this, in conjunction with error.ejs, will send an error to the user in a separate page
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
