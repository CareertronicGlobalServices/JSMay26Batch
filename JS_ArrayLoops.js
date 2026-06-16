//Javascript Array Iterations

//foreach loop 🌟🌟🌟

const arr1 = [1, 2, 3, 4, 5, 6, 7];
//perform the function for evvery element
// array.foreach((value,index,array)=>{
//console.log(Value,index);})  return =undefined

// const result = arr1.forEach((element, i) => {
// //   console.log(`array element ${element} , index at ${i} ,${element * 2}`);
// // });
// // console.log(result);
// // console.log(arr1);

// arr1.forEach((element, i) => {
//   if (i >= 3) {
//     console.log(`array element ${element} , index at ${i} ,${element * 2}`);
//   }
// });

//Que.1 Take an array to find the total of it .
// const arr1 = [1, 2, 3, 4, 5, 6, 7];

//Que.2 Count the number of even and odd numbers present in the array using for each

//Que.3Predict the output
// let arr = [1, 2, 3];
// let result = arr.forEach((num) => {
//   return num * 2;
// });

// console.log(result);

// //return a new squared array
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let sqrArray = [];
// arr2.forEach((element) => {
//   sqrArray.push(element * element);
// });
// console.log(sqrArray);

//Forof loop
//const arr = [1, 2, 4, 4, 6, 4, 3, 6];

// //i is not a index but its an element

// //for(let element of arr){statements }

// for (let spiderman of arr) {
//   console.log(spiderman);
// }

// //console.log(arr.entries());
// for (let [index, element] of arr.entries()) {
//   console.log(`array element ${element} and index is ${index}`);
// }
//array k upar methods
//map   🌟🌟🌟
//arr.map(element , index, array){} //value return array
//  const arr = [1, 2, 4, 4, 6, 4, 3, 6];

// const result1 = arr.map((element) => {
//   return element * element;
// });

// const result2 = arr.map((element) => {
//   return element * element;
// });
// console.log(result2);

// const arrObj = [
//   {
//     name: "sonam",
//     age: 35,
//   },
//   {
//     name: "kanchan",
//     age: 35,
//   },

//   {
//     name: "kanchan",
//     age: 35,
//   },

//   {
//     name: "kanchan",
//     age: 35,
//   },

//   {
//     name: "kanchan",
//     age: 35,
//   },
// ];
// let names = arrObj.map((user) => user.name);
// console.log(names);
// //filter 🌟🌟🌟
// const arr = [1, 2, 4, 4, 6, 4, 3, 6];
// //takes filter((elemet ,index, arr)=>{})  returns a new array
// let result = arr.filter((element, index) => {
//   return element > 4;
// });1
// console.log(result);
//
//reduce 🌟🌟🌟
// //very important  respect with to interviews
// const arr = [, 2, 4, 4, 6, 4, 3, 6];
// //  array.reduce((accumulator , currentValue , index ,array)=>{},0 )
// const result = arr.reduce((accum, element) => {
//   accum = accum + element;
//   return accum;
// }, 0);
// console.log(result);

// const arrNew = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const result = arrNew
//   .filter((element) => {
//     return element > 50;
//   })
//   .reduce((accu, element) => {
//     accu = accu + element;
//     return accu;
//   }, 0);
// console.log(result);

// Shopping
// let cart = [
//   { item: "phone", price: 20000 },
//   { item: "cover", price: 500 },
//   { item: "msc", price: 1200 },
// ];
// //paynow
// //order ka total
// const orderTotal = cart.reduce((total, item) => {
//   total = total + item.price;
//   return total;
// }, 0);
// console.log(orderTotal);

//Fruit Cart
const fruitArray = [
  "apple",
  "banana",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "kiwi",
  "mango",
  "mango",
  "banana",
  "kiwi",
  "mango",
  "mango",
  "kiwi",
  "kiwi",
  "mango",
  "grapes",
];

// //o/p sample
// {
//   apple:number,
//   mango:number,
// }
//obj[]

const resultObj = fruitArray.reduce((accum, fruitElement) => {
  if (accum[fruitElement]) {
    accum[fruitElement]++;
  } else accum[fruitElement] = 1;

  return accum;
}, {});
console.log(resultObj);

// //Questions
// let products = [
//   {name:"Laptop", price:70000, available:true},
//   {name:"Phone", price:30000, available:false},
//   {name:"Tablet", price:20000, available:true},
//   {name:"TV", price:90000, available:true}
// ];
// find products
// 1.which are available?
// 2.total
// 3.prices >30000
