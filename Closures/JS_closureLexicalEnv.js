// // //lexical environment

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
let test = outer();
console.log(test);
test();
test();

// // //console.log(count);

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// console.log(counter);
// counter();
// counter();
// counter();

// // // let planet = "Earth"; //global scope
// // // function add() {
// // //   let country = "India"; // grandparent scope
// // //   function state() {
// // //     let state = "C.G"; //parent scope
// // //     function city() {
// // //       let city1 = "Raipur"; // self child
// // //       console.log(planet);
// // //       console.log(country);
// // //       console.log(state);
// // //       console.log(city1);
// // //     }
// // //     city();
// // //   }
// // //   state();
// // // }
// // // add();
// // // console.log(country);

// const counter = function () {
//   count++;
//   console.log(count);
// };
// console.log(counter());
