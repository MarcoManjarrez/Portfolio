require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

//const mongoUrl = "mongodb://127.0.0.1:27017/f1"; a local url
const user = process.env.USER_ID;
const pass = process.env.USER_PASS;
const mongoUrl = `mongodb+srv://${user}:${pass}@cluster0.a84uqoe.mongodb.net/f1?retryWrites=true&w=majority`; //the url to mongo atlas
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Definition of a schema
const teamSchema = new mongoose.Schema({
  id: Number,
  name: String,
  value: String,
  nationality: String,
  url: String,
});
teamSchema.set("strictQuery", true);

const driverSchema = new mongoose.Schema({
  num: Number,
  code: String,
  forename: String,
  surname: String,
  dob: Date,
  nationality: String,
  url: String,
  team: teamSchema,
});
driverSchema.set("strictQuery", true);

const Team = mongoose.model("Team", teamSchema);
const Driver = mongoose.model("Driver", driverSchema);

let countries = [
  { code: "ENG", label: "England" },
  { code: "SPA", label: "Spain" },
  { code: "GER", label: "Germany" },
  { code: "FRA", label: "France" },
  { code: "MEX", label: "Mexico" },
  { code: "AUS", label: "Australia" },
  { code: "FIN", label: "Finland" },
  { code: "NET", label: "Netherlands" },
  { code: "CAN", label: "Canada" },
  { code: "MON", label: "Monaco" },
  { code: "THA", label: "Thailand" },
  { code: "JAP", label: "Japan" },
  { code: "CHI", label: "China" },
  { code: "USA", label: "USA" },
  { code: "DEN", label: "Denmark" },
];

let teamsRaw = [  //used to add things to the database,as an example
  {code: "mercedes", name: "Mercedes", country: "GER"},
  {code: "aston_martin", name: "Aston Martin", country: "ENG"},
  {code: "alpine", name: "Alpine", country: "FRA"},
  {code: "hass_f1", name: "Hass F1 Team", country: "USA"},
  {code: "red_bull", name: "Red Bull Racing", country: "AUS"},
  {code: "alpha_tauri", name: "Alpha Tauri", country: "ITA"},
  {code: "alpha_romeo", name: "Alpha Romeo", country: "ITA"},
  {code: "ferrari", name: "Ferrari", country: "ITA"},
  {code: "williams", name: "Williams", country: "ENG"},
  {code: "mc_laren", name: "McLaren", country: "ENG"},
]

let teams = [];
let drivers = [];

app.use("/", async(req, res, next)=>{
  if(teams.length == 0){
    var team = await Team.find({}).exec();
    if(!Array.isArray(team) || team.length == 0){
      //insert elements
      await Team.insertMany(teamsRaw).then(()=>{ console.log("data loaded");}).catch((error)=>{console.error(error);});
      await Team.find({}).then((docs)=>{console.log("Teams loaded"); teams = docs;}).catch((error)=>{console.error(error);});
    } else {
      teams = team;
    }
  }
})

app.post("/driver", async (req, res) => {
  var team = await Team.findOne({code: {$eq:req.body.team}}).exec();
  //Method 1 - Using the direct model
  /*var driver = {
    num: req.body.num,
    code: req.body.code,
    forename: req.body.name,
    surname: req.body.lname,
    dob: req.body.dob,
    nationality: req.body.nation,
    url: req.body.url,
    team: team,
  };
  await Driver.insertOne(driver).then(()=>{ console.log("Driver recorded")}).catch((err)=>{
    console.error(err);
  });*/
  //Method 2- Indirect use of model

    var driver = new Driver({
    num: req.body.num,
    code: req.body.code,
    forename: req.body.name,
    surname: req.body.lname,
    dob: req.body.dob,
    nationality: req.body.nation,
    url: req.body.url,
    team: team,
  });
  driver.save();
  drivers.push(driver);
  res.redirect("/");
 });

app.get("/", (req, res) => {
 res.render("index", {countries, teams, drivers});
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
