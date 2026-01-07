// 3️⃣ Installing Express
// Step 1: Create folder
// mkdir Task1
// cd Task1
// Step 2: Initialize npm
// npm init -y ->
// Step 3: Install express 
// npm install express
// Step 4: Create test.js 


// ---------------------------------------------------

// Create First Express Server

// const express = require("express");

// const app = express();

// // route 
// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });

// app.get("/user", (req, res) => {
//   res.send("User Page");
// });


// // Server
// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });

// ------------------------------------------------------------------------------

// ✅ DAY 1 TASK (Must Do)
// 📝 Task:
// Create an Express server
// Create 2 routes:
// / → “Welcome to Express”
// /about → “This is About Page”


const express = require('express');
const app = express();

// route

app.get("/",(req,res)=>{
    res.send("Welcome to Express");
});

app.get("/about",(req,res)=>{
    res.send("This is about page ");
});

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})

 