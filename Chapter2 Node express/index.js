// topic : getting start with express
const express = require("express");
const app = express(); // express la exicute karnay sathi aapn app navach variable karto, dusr pn name deu shakto pn mostly app ch name deta

// console.dir(app);  //funtion n method

let port = 8000; // 1st incomming request
app.listen(port, () => {
  console.log("app is listening on port " + port); //showing for the start of server
});

//topic: handling request   // resonse send karaych asel tr kasa karaych // eka time la 1ch response send karu shakto

// app.use((req, res) => {
//   // console.log(req); //print req obj
//   console.log("request received");  //showing in terminal
//   console.log("new incoming request")  //showing in terminal

// topic : sending response
// res.send("this is  a basic response");  //showing in browser

// or  //object
//   res.send({
//         name:"apple",
//         color:"red",
//  }); //showing in browser

// or // sending response html format
//       let code="<h1>Fruits</h1> <ul><li>mango</li> <li>mango</li> </ul>";
//       res.send(code);
// });

// --------------------------------------------------------------------------------------------------------------------------------------------------

//topic : routing  => localhost:8000/ => showing in browser =>output =>you contacted root path
//  app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// });

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });

// app.get("*",(req,res)=>{ // * means all other paths
//     res.send("this path does not exits");
// });

// app.post("/post",(req,res)=>{
//     res.send("you send a post request");
// });

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//topic => path parameters
app.get("/", (req, res) => {
  res.send("hello, i am root here");
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params); //localhost:8000/mauu/1234 =>print in terminal (username and id)
  res.send("hello, i am root");

  //     // or same as above(2nd way)
  //     let {username, id} = req.params;
  //     res.send(`Welcome to the page of @${username}.`);
});

// //topic: query strings

app.get("/search", (req, res) => {
  // // localhost:8000/search?q=apple => print in terminal { q: 'apple' }
  //  console.log(req.query);
  //  res.send("no result");

  // // if stml write kela n q lihilach nhi tr no serach query provided show hoil ex => localhost:8000/search
  // let{q}=req.query;
  // if(!q) {
  //   res.send("no search query provided");
  // }
  // res.send(`search results for query: ${q}`);

  //or q = apple search kela tr search box madhe apple show hoil (ex npm website ch try karun baghu shakte)

  let { q } = req.query;
  res.send(`search results for query: ${q}`);
});
