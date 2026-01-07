// ✅ DAY 2 TASK
// Create these routes in your server:

// / → “Home Page”

// /about → “About Page”

// /contact → “Contact Page”

// /user/:name → “Hello, [name]!”

// /search → take query ?q= and show Searching for: [q]

// Test all routes in browser & Postman

// Answer:

const express = require('express');
const app = express();

app.get("/",(req,res)=> {
    res.send("Home page");
})
app.get("/about",(req,res)=> {
    res.send("About page");
})

app.get("/contact",(req,res)=> {
    res.send("Contact page");
})

app.get("/user/:name",(req,res)=> {
    res.send(`Hellow, ${req.params.name}`);
})

// http://localhost:5000/search?q=react
app.get("/search",(req,res)=> {
    res.send(`Searching for: ${req.query.q}`);
})

app.listen(5000,()=> {
    console.log("Server is running on port 5000");
})