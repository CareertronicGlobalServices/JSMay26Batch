//Math functions

const num1 = 5.689789526;
//round off - 3
// console.log(Math.floor(num1)); //lowerside
// console.log(Math.ceil(num1)); //upper
// console.log(Math.round(num1)); //maths function
// console.log(num1.toFixed(2)); //decimal place define
/////
console.log(typeof num1.toPrecision());
// console.log(num1.toLocaleString(5));
// console.log(Math.random()); // 0-1

const random = Math.floor(Math.random() * 10) + 1;
//console.log(random);
//
//50-100
//min -max (min=50 max=100)
//Array of 8 names index=0 ;lstelement=7 th position
let maxN = 7;
let minN = 0;
//array question
const arrEight = [
  "sonam",
  "viraj ",
  "vedika",
  "shubham",
  "gulshan",
  "rahul",
  "kunal",
  "jayant",
];

const index = Math.floor(Math.random() * (maxN - minN + 1) + minN);
//console.log(arrEight[index]);
console.log(index);
// random color generator

//rgb (0-256 ,)
//255

let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);

let color = `rgb(${red},${green},${blue})`;
console.log(color);
