//Topic - Basic Routes
const express = require("express");
const app = express();

// Homepage
app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

// About page
app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// Contact page
app.get("/contact", (req, res) => {
  res.send("Contact us at xyz@mail.com");
});
// ------------------------------------------------------------------------------------------------------

// Topic -Route Parameters
// Route parameter = dynamic value in URL
// Example: /user/:id → id is dynamic
// Test = http://localhost:3000/user/123 → “User ID is 123”
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);

});

// ------------------------------------------------------------------------------
// Topic -Query Parameters
// Query params = extra info in URL after ?
// Example: /search?name=vaishnavi
// Test = http://localhost:3000/search?name=vaishnavi → “Search for: vaishnavi”
app.get("/search", (req, res) => {
  res.send(`Search for: ${req.query.name}`);
});

// ------------------------------------------------------------------------------

// Topic - HTTP Methods
// | Method | Use         |
// | ------ | ----------- |
// | GET    | Get data    |
// | POST   | Send data   |
// | PUT    | Update data |
// | DELETE | Delete data |

app.post("/add", (req, res) => {
  res.send("Data added successfully!");
});

// ------------------------------------------------------------------------------

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// ----------------------------------------------------------------------------------



