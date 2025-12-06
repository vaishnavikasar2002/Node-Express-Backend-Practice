// console.log(process);
// console.log(process.argv);

//in terminal  - node app.js I am vaishnavi (he argv suddha print hotil)

// --------------------another example

let args = process.argv;

for(let i = 0; i<args.length; i++){
    console.log("hello to", args[i]);
}

// in terminal -  node app.js omkar chetan sayli asmita vaishnavi
//output -
    // hello to C:\Program Files\nodejs\node.exe
    // hello to C:\Users\Lenovo\Desktop\ApnaClg Sigma\Backend\chapter1 Node.js\process\app.js
    // hello to omkar
    // hello to chetan
    // hello to sayli
    // hello to asmita
    // hello to vaishnavi