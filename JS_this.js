"use strict";
//function  definition
function greet() {
  console.log(this);
}
greet();

//function expression
const greeting = function () {
  console.log("welocme");
};

//Arrow Function
const greetArrow = () => {
  console.log(this);
};
greetArrow();
console.log(this);
