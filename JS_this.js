"use strict";

function greet() {
  console.log(this);
}
greet();

const greetArrow = () => {
  console.log(this);
};
greetArrow();
console.log(this);
