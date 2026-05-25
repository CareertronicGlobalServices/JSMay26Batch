// //DEfining a array
// const a = 5; //variable number
// const x = [1, 2, 4, 5]; //array - number
// const strArr = ["sonam", "gulshan", "shubham", "rahul ", "kunal ", "jayant"]; //number| string
// const objArr = [
//   {
//     name: "kanchan",
//     age: 32,
//   },
//   {
//     name: "Ishan",
//     age: 40,
//   },
// ]; //array of object

// console.log(objArr[1].name);
// console.log(strArr[2]);

// const arrName = [1, 2, 4, 5];
// const spiderman = ["sonam", "shubham", "ishan"];
// //adding a value
// arrName.push(85); //add the elemnt to the last
// arrName.pop(); //remove the last element
// spiderman.unshift("kunal"); //add the elemnet at 1st position
// spiderman.shift(); // remove the first elemnt
// console.log(spiderman.includes("sonam"));
// console.log(spiderman);
// console.log(arrName.includes(5)); // check weather the element is present or not // gives true/false

// console.log(spiderman.indexOf("sonam", "shubham")); // agar value present hai to uska index dega agar value hai hi ni then -1
//for multiple checks it returns the index of first passed value

//slice and splice
// //slice - originl array ko modify nahi karga
// const newArr = [1, 2, 3, 4, 5, 6, 7, 7, 88, 9, 87, 56, 67];
// const slicedArray = newArr.slice(1, 8);
// console.log(slicedArray);
//console.log(newArr);

//splice - original array modify

// console.log(newArr.splice(1, 5));
// console.log(newArr);

//
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(a);

// join
const c = a.concat(b);
console.log(c);
//
//push -- original affect - modify
//concat returns a new array
