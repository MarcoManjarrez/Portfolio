const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    res.send("<h1>Not a readable API</h1>")
})

app.post("/login", (req,res)=>{
    var user = req.body.user;
    var pass = req.body.password;
    var response = {
        user:user,
        access: "Denied",
        authorization : -1
    }
    if (user === "Gabriel" && pass === "12345") {
        console.log(
          "Yoou are an idiot. I mean, you logged in with the easiest password ever"
        );
        response.access = "Granted";
        response.authorization = 1;
    } else {
        console.log("worng data")
    }
    res.json(response);
})

app.listen(5000, ()=> {
    console.log("Listening on port 5000");
})