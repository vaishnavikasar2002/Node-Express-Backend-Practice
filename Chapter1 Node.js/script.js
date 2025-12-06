// topic process

// example 1 :
// let n = 5;
// for (let i=0;i<n;i++){
//     console.log("hello, ",i);
// }
// console.log("bye!");

// process argv => node madhe run kartana node script.js hii mauu he he 2 argument pass kele tr te pn print hotil
// console.log(process.argv);

//example 2 :
// let args = process.argv; //promts use karto tsch
// for(let i = 2; i < args.length; i++){
//     console.log("hello  to",args[i]);
// }

// -----------------------------------------------------------------------------------------------------------------

// topic : module.exports 

const someValue = require('./math.js');
console.log(someValue); //hello //exports nasel kela tr {} empty object print hoto


// OR code ithe ahe(math.js)

const math = require('./math.js');
console.log(math.sum(2,3));
console.log(math.mul(4, 5));
console.log(math.g);
console.log(math.PI);


// ------------------------------------------------------------------------------------------------------------------------------------------------------

//topic : export in directories 

const info = require ("./Fruits");
console.log(info);
console.log(info[0]);
console.log(info[0].name);

// --------------------------------------------------------------------------------------------------------------------------------------------------

// topic : check = global or local

const figlet = require("figlet");
figlet("Globaly Install !", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

// -------------------------------------------------------------------------------------------------------------------------------------------------

// import kiva require 2 nhi madhun ch 1ch use karaych code madhe (ha code run karaych varcha all code commit karne)
//import module

// import {sum1,PI1} from "./math.js";
// import {generate} from "random-words"; //package

// console.log(sum1(2,2));
// console.log(PI1);
// console.log(generate());



