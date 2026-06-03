// // let userName= "Sonam "
// // console.log(userName);

// //function declaration
// // function funactionKaNaam(parameters ){
// //   console.log()    ///function definition
// // }

// //sayMyName(arguments); //function call /execution
// // // print the name
// // function sayMyName(userName) {
// //   console.log(userName);
// // }

// // sayMyName("kanchan");

// // // dummy usecase
// // function add(math, sci, eng) {
// //   let total = math + sci + eng;
// //   let percentge = (total / 300) * 100;
// //   console.log(percentge);
// // }
// // add(85, 85, 74);
// // //
// // function sum(a, b) {
// //   return a + b;
// //   //console.log(a + b);
// // }
// // const value = sum(2, 3);
// // console.log(value);
// // // //
// // const kunal = newFunction(100, 100, 85, 89, 78);
// // console.log(kunal);

// // const newFunction = function (math, sci, social, hindi, eng) {
// //   let total = math + sci + social + hindi + eng;
// //   let percentge = (total / 500) * 100;
// //   return percentge;
// // };
// //newFunction(100, 85, 85, 74, 89);

// //const rahul = newFunction(78, 71, 100, 100, 100);
// //console.log(kunal);
// // console.log(sum(85, 52));
// // let value = sum(85, 1004);
// // console.log(value);
// // function sum(a, b) {
// //   return a + b;
// // // }
// let obj = {
//   name: "Kanchan",
//   age: 25,
// };
// function handleObj(obj) {
//   console.log(obj.age);
// }
// handleObj(obj);

// //
// //scopes
// //global scope //block scope

// let a = 15;
// let b = 15;

// function add2() {
//   let c = a + b;
//   //console.log(c);
// }

// //add2();
// console.log(c);
// //
// // this
// const objUser = {
//   name: "sonam",
//   age: 34,
//   //common mistake
//   //setting welcomemsg : `welcome ${this.name}` directly kaam ni karega it should be in a fucntin with return
//   // welcomemsg() {
//   //   return `welcome ${this.name}`;
//   // },
//   msg: function welcomemsg() {
//     return `welcome ${this.name}`;
//   },
// };
// console.log(objUser.welcomemsg());
// objUser.name = "kunal";
// console.log(objUser.name, objUser.welcomemsg());

// console.log(this);
//Arrow function
//implicit return
//single line code plus return keyword likhne ki jarurat nahi padti
//()=>()
const add1 = (a, b) => a + b;
console.log(add1(5, 6));
//function declare definition
//square of a number
const sqr = (num) => num * num;
console.log(sqr(5));
//explicit return
//return keyword ka need rehta hai
//()=>{}
const add = (a, b) => {
  let c = a + b;
  return c;
};
console.log(add(8, 8));
const obj = () => ({
  name: "sonam",
});
console.log(obj());

const newUSer = {
  name: "kunal",
  msg: (greet = () => {
    return `welcome ${newUSer.name}`;
  }),
};
console.log(newUSer.msg());
