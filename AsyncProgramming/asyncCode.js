console.log(1 % 3);
console.log(2 % 3);

console.log("Order Food");
setTimeout(() => {
  console.log("Food is here");
}, 3000);
console.log("Work in Progress");

// // //setInterval();

let colors = ["Red", "Yellow", "Green"];
let index = 0;

let signal = setInterval(() => {
  console.log(colors[index]);
  index = (index + 1) % colors.length;
}, 2000);
//0//red
//(0+1)%3= 1%3=

setTimeout(() => {
  clearInterval(signal);
  console.log("Traffic Signal Off");
}, 12000);
// //
