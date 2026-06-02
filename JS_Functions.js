// let userName= "Sonam "
// console.log(userName);

//function declaration
// function funactionKaNaam(parameters ){
//   console.log()    ///function definition
// }

//sayMyName(arguments); //function call /execution
// // print the name
// function sayMyName(userName) {
//   console.log(userName);
// }

// sayMyName("kanchan");

// // dummy usecase
// function add(math, sci, eng) {
//   let total = math + sci + eng;
//   let percentge = (total / 300) * 100;
//   console.log(percentge);
// }
// add(85, 85, 74);
// //
// function sum(a, b) {
//   return a + b;
//   //console.log(a + b);
// }
// const value = sum(2, 3);
// console.log(value);
// // //
// const kunal = newFunction(100, 100, 85, 89, 78);
// console.log(kunal);

// const newFunction = function (math, sci, social, hindi, eng) {
//   let total = math + sci + social + hindi + eng;
//   let percentge = (total / 500) * 100;
//   return percentge;
// };
//newFunction(100, 85, 85, 74, 89);

//const rahul = newFunction(78, 71, 100, 100, 100);
//console.log(kunal);
// console.log(sum(85, 52));
// let value = sum(85, 1004);
// console.log(value);
// function sum(a, b) {
//   return a + b;
// // }
let obj = {
  name: "Kanchan",
  age: 25,
};
function handleObj(obj) {
  console.log(obj.age);
}
handleObj(obj);

//
//scopes
//global scope //block scope

let a = 15;
let b = 15;

function add2() {
  let c = a + b;
  //console.log(c);
}

//add2();
console.log(c);
