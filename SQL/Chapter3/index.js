// Importing required modules
// const { faker, da } = require ('@faker-js/faker');
// const mysql = require('mysql2');
// const express = require('express');
// const app = express();
// const path = require('path');
// const methodOverride = require("method-override");

// app.use(methodOverride("_method"));
// app.use(express.urlencoded({extended:true})); //fromchya data pass kaenya sathi
// app.set("view engine", "ejs");
// app.set("views",path.join(__dirname, "/views"));

// // create a connection to the database
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     database:'delta_app',
//     password:'MySQL@19'
// });


// let getRandomUser = () => {
//   return [
//      faker.string.uuid(),
//      faker.internet.username(), // before version 9.1.0, use userName()
//      faker.internet.email(),
//      faker.internet.password(),  
// ];
// }
// // console.log(getRandomUser()); 

// //inserting new data 
// // let q ="INSERT IGNORE INTO user(id , username , email ,password) VALUES ?";
// // let users =[[10874613782,"efulkbgvn ","efulkbabmgv@gmail.com","efulkbgv1238734"],[17131975281,"upqnamlgasn","upqnamlg1736@gmail.com","upqnamlg123431uy"]];

// // // insert in bulk using faker
// // let data = [];
// // for (let i = 1; i <= 100; i++) {
// //     data.push(getRandomUser());// 100 fakes user database
// //   }


// // home route
// app.get('/', (req, res) => {
//    let q = `SELECT count(*) FROM user`;
//     try{
//         connection.query(q,(err,result)=>{
//             if(err)throw err;
//             // console.log(result[0]['count(*)' ]);
//             // res.send(result[0]['count(*)' ]); //print in gitbash

//             let count = result[0]['count(*)'];
//             res.render("home.ejs",{count});       
//           });
//     } catch (err) {
//         console.log(err);
//         res.send("some error un DB");
//     }
// });


// //show route
// app.get("/user",(req,res)=>{
//    let q = `SELECT * FROM user`;

//    try{
//         connection.query(q,(err,users)=>{
//             if(err)throw err;
        
//             // console.log(result);
//             // res.send(result);    
            
//             res.render("showuser.ejs",{users});
//           });
//     } catch (err) {
//         console.log(err);
//         res.send("some error un DB");
//     }
// });

// // Edit route 
// app.get("/user/:id/edit",(req,res)=>{
//     let {id} = req.params;
//     let { password: formPass, username: newUsername} = req.body;
//     let q = `SELECT * FROM user WHERE id = '${id}'`;

//     try{
//         connection.query(q,(err,result)=>{
//             if(err)throw err;
//             let user = result[0];
//             // console.log(result);
//             if(formPass != user.password) {
//                 res.send("Wrong Password");
//             }
//             res.render("edit.ejs",{user});
//           });
//     } catch (err) {
//         console.log(err);
//         res.send("some error un DB");
//     }
//     // console.log(id); //print id in gitbash
    
// });

// // update (DB) route
// app.patch("/user/:id",(req,res)=> {
//     let {id} = req.params;
//     let q = `SELECT * FROM user WHERE id = '${id}'`;

//     try{
//         connection.query(q,(err,result)=>{
//             if(err)throw err;
//             let user = result[0];
//             res.send(user);
//           });
//     } catch (err) {
//         console.log(err);
//         res.send("some error un DB");
//     }
// });





// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// connection.query methods

//   try{
//         connection.query(q,[data],(err,result)=>{ // [users] delela data bghaych asel tr
//             if(err)throw err;
//             console.log(result);
              
//           });
//     } catch (err) {
//         console.log(err);
//     }
// connection.end(); // to close the connection


// ------------------------------------------------------------------------------------------------------------------------------









// Importing required modules
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");

// Middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'MySQL@19'
});

// Generate random user
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// Home route
app.get('/', (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// Show all users
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showuser.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// Edit form route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// Update user route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;

    let getUserQuery = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(getUserQuery, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("DB error");
        }

        let user = result[0];
        if (formPass !== user.password) {
            return res.send("Wrong Password");
        }

        let updateQuery = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(updateQuery, (err, result) => {
            if (err) {
                console.log(err);
                return res.send("Update failed");
            }
            res.redirect("/user");
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




