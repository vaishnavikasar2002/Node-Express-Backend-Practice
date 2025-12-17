const express = require("express");
const app = express();
const port = 8080;

//middlewares
app.use(express.urlencoded({extended:true})); //post req use karta na nehmi lihito
app.use(express.json()); //he line nhi lihile tr undefine print hoil in gitbash

// index.html chi file run karun form madhe data send karaycha asel tar
// jr postman madhe GET/post request karaycha asel tar konti req karaychi te select karaychi then path takaych aani body(raw) madhe data takaycha {"user":"apna"}

// get post request example
app.get("/register",(req,res)=>{
    let {user ,password} = req.query;
    res.send(`standard GET response. Welcome ${user}!`);   
});

app.post("/register",(req,res)=>{
    let {user ,password} = req.body;
    // console.log(req.body)
    res.send(`standard post response. Welcome ${user}!`);     
});

app.listen(port,() =>{
    console.log(`listening to port ${port}`);
});