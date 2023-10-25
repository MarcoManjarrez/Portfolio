const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const https= require("https");
const timeout = require("connect-timeout");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(timeout(120000));

const family=["GMan", "Reggie", "The great king of evil ganon"];
let name = "John";

app.get('/', function (req, res) {
  //res.sendFile(__dirname + "/public/html/index.html");
  res.render("index", { name: name }); //purposefully not defining the variable family to test ejs conditionals
});

app.get('/home', function(req, res){
  res.render("home", { name: name} )
})
app.post('/create', (req, res) => {
  const { title, content } = req.body;
  res.write("<h1>New post"+title +": " + content + "</h1>")
  res.redirect('/home');
});

const url = "https://api.toys/api/rock_paper_scissors";    //https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=nsfw,racist";
app.get("/3v3", (req,res)=>{
  var l_url = url + "/rock";
  https.get(l_url, (response)=>{
    //console.log(response);
    console.log(response.statusCode);
    if(response.statusCode==200){
    response.on("data", (data)=>{
      //console.log(data);
      const player = JSON.parse(data);
      //console.log(joke);
      res.write("<h1> On my selection on rock, we get:</h1><br/>");
      res.write("<h2>" + player.cpu +"</h2><br/>");
      res.write("<h1>" + player.move +"</h1><br/>");
      res.send();
    });
  } else {
    throw new Error("Bad response");
  }
  })
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

app
  .route("/bmi")
  .post((req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height**2);
    res.send("<h1>Your bmi is " + bmi + "<h1>");
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
