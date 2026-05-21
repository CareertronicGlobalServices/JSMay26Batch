// console.log("Hello World!");

// // Variables
// let fName = "Sonam";
// const arr = ["x", 1, "y"];
//let arr2 = [1, 2];
// var age = 45;

// console.log(typeof fName);

// console.log(typeof arr);
//console.log(typeof arr2);
// console.log(typeof age);

const obj = {
  name: "Sonam",
  age: 23,
};

console.log(obj.name);
console.log("My name is" + obj.name + "and my age is " + obj.age);
// string interpolation
console.log(`My name is ${obj.name} and my age is ${obj.age}`);

//Operators
//Arithmetic Operators + - * / % **
//relationals - = > < >= <=
//logicals - and ( &&) Or (||) Not(!) ==
//inc dec ++ --

// let a = "5";
// let b = Number("5");
// console.log(a + b);
// console.log(typeof (a + b));
// // when you change the type manually - type conversion
// // type change automatically - type coercion

// var c = "X";
// let d = "y";
// console.log(c + d, typeof (c + d));

// const x = "sonam";
// console.log(x);
// // variable not declared yet can be used but not a good practice
// xy = "Panjwani";
// console.log(xy);

// Scopes --

if (true) {
  let a = 5;
  var b = 7;
  let c = a + b;
  console.log(c);
}
console.log(b);
//console.log(a);

//
