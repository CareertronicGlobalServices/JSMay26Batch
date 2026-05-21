//Memory in JS

//Data types - Primitive and Non-Primitive
//Primitive - String , number , boolean , bigInt , symbol , null , undefined

// //non primitive
// Objs , arrays , functions

//stack memory (primitive)
//we always cann get a copy of a variable

let x = 10;
let y = x;
console.log(y);
y = 20;
console.log(y);
console.log(x);

//heap memory (non primitive )
const obj = {};
