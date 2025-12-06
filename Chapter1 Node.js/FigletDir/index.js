// npm varun code copy paste kela ahe 
const figlet = require("figlet"); //package sathi dot shalsh nhi lihat ====== ./figlet as dyaychi garj nhi fkt name lihaych

figlet("vaishnavi kasar!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

// got to the folder FigletDir And run node index.js 