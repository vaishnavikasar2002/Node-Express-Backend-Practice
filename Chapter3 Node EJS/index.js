//topic : templating
const express = require ("express");
const app = express();
const path = require("path"); 

const port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});


// topic : static files =>static sathi nehmi public folder hav
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));


// topic : using ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req, res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("this is hello");
});


//topic : passing data to EJS localhost:8080/rolldice
app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{diceVal});
});


//topic: instagram EJS (activity) -> localhost:8080/ig/mauu(userename konto pn gheu shakto)
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("instagram.ejs",{username});
});


// topic : loops in EJS ->localhost:8080/iglist/mauu(usernmae konto pn gheu shakto)
app.get("/iglist/:username", (req, res) => {
    const followers = ["vaishnavi", "chetan", "rahul", "aman"];
    let { username } = req.params;
    res.render("instaList.ejs", { username, followers });
});


//topic: instagram page with EJS => localhost:8080/igpage/cats kiva dogs karan te donch data, data.json madhe ahe =>in gitbash output (dusra user nmae serch kela tr no such acc show hoil)
app.get("/igpage/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);

    if(data) {
        res.render("instaPage.ejs",{data});
    } else {
        res.render("error.ejs");
    }
    console.log(instaData);
    console.log(data);
    });


//topic: includes ejs.co learn in website