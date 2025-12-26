const express = require("express");
const app = express();
const port = 2000;
const path = require("path"); // view and public folder index.js file madhe use karaycha asel tar path module import karava lagto

//uuid
const { v4: uuidv4 } = require("uuid");
// edit route
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true })); // data la express kalali pahije mhanun hya line lihito
app.use(methodOverride("_method")); // edit route
app.use(express.json());

app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", path.join(__dirname, "views")); // set the views directory to the "views" folder

app.use(express.static(path.join(__dirname, "public"))); //set the public directory

// topic - index router - simple array
let posts = [
  {
    // id:"1a",
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding",
  },
  {
    // id:"2a",
    id: uuidv4(),
    username: "Chetanpawar",
    content: "He is Datasci and hard work is important to achieve success",
  },
  {
    // id:"3a",
    id: uuidv4(),
    username: "Vaishnavikasar",
    content: "I got seletecd in apnacollege",
  },
];

app.get("/", (req, res) => {
  //create basic router
  res.send("serving working well!"); //localhost:2000/
});

app.get("/posts", (req, res) => {
  //create router for posts
  res.render("index.ejs", { posts });
  //   res.send("i am  post");//localhost:2000/posts
});

// topic :create route //localhost:2000/posts/new (show for form to create new post)
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  //data add karna
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  // res.send("post request working");
  res.redirect("/posts"); //(redirect kely vr posts page direct open hota)
});

// topic - show route - to show single post //localhost:2000/posts/:id (show in terminal)
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id === p.id);
  console.log(post);
  //  res.send("request working"); //res.send kiva res.render 2 nhi madhun ekcha use karaych nhi tr err yeto
  res.render("show.ejs", { post });
});

// topic : Update route

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(id);
  console.log(newContent);
  // console.log(post);
  // res.send("patch request working");
  res.redirect("/posts");
});

// topic : Edit Route

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  //     if (!post) {
  //         return res.status(404).send("Post not found");
  //     }
  res.render("edit.ejs", { post });
});

//  topic : destory route
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  // res.send("delete success");
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
