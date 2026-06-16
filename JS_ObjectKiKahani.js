//
// Singleton objects -- unique
//object literals
// let a = 5;
// let obj_user = {
//   name: "sonam",
// };
// // constructor function se object banega - Singleton object

// //
// const user2 = Object.create({
//   name: "sonam",
//   age: 32,
// });
// console.log(user2.name);

// // const user = new Object(); //Singleton
// // user.name = "Kunal";
// // user.age = 25;
//console.log(user);
// //ye tarike haikaise object bante hai

// function kunal(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const shubham = new kunal("shubham", 25);
// console.log(shubham.age);
// const gulshan = new kunal("gulshn", 25);
// console.log(gulshan);
// const user = {};

const user = {
  name: "Sonam",
  age: 25,
  address: {
    city: "Raipur",
    loaction: "Sai Nagr",
  },
  email: "Kdkanchan1@gmail.com",
};
// console.log(user.address.loaction);
// //objects keys
// console.log(Object.keys(user)); //it returns an array
console.log(Object.values(user)); //it returns an array
//console.log(Object.entries(user)); //returns array and entries as array elemts of key value pair
//[[key , value] ,[key ,value],[key ,value]]
//Spread operator use case
// const obj1 = {
//   1: "a",
//   2: "b",
// };
// const obj2 = {
//   3: "c",
//   4: "d",
// };

// //join 2 objects

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// //Spread operators
// const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// //console.log(...obj1); // aise use nahi kr sakte h
// console.log({ ...obj1 });

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(...arr);

// const str = "hello world";
// console.log(...str);

// // spread operator it works on things which are iterable

// console.log(...Object.entries(obj3));
// //
// //if any property is available in the object
// console.log(user.hasOwnProperty("contact"));
//

let userN = {};
console.log(userN);
userN["name"] = "Sonam";
console.log(userN);

let accum = {};
accum["apple"];
if (accum["apple"]) {
  accum["apple"]++;
} else accum["apple"] = 1;
console.log(accum);
