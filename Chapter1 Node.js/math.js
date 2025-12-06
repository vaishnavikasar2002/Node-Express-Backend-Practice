// topic : module.exports 

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// module.exports nhi kela tr by default{} empty object jato
module.exports="hello";


// OR
let obj = {
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,
};
module.exports=obj;

// ---------------------------------------------------------------------------------------------------------

//import module

//  export const sum1 = (a,b)=>a+b;
//  export const mul1 = (a,b)=>a*b;
//  export const g1=9.8;
//  export const PI1=3.14;

// ---------------------------------------------------------------------------------------------------------------------

// Note:
// import module cha code run karaycha asel tr package.json madhe type define karne
// ,
//   "type": "module"