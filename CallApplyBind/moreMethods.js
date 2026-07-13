// const user = {
//   uname: "Sonam",
//   age: 35,
//   intro: function () {
//     console.log(`${this.uname} is ${this.age} years old`);
//   },
// };
// user.intro();

// const person1 = {
//   name: "XYZ",
//   age: 56,
// };
// const person2 = {
//   name: "ABC",
//   age: 58,
// };

// function greet(city) {
//   console.log(`${this.name} is ${this.age} years old and  is from ${city}`);
// }
//greet();

//greet.call(person1, "Raipur"); // call Right now

//Apply --arguments pass as an array
// const person1 = {
//   name: "XYZ",
//   age: 56,
// };
// const person2 = {
//   name: "ABC",
//   age: 58,
// };

// function greet(city, state, country) {
//   console.log(
//     `${this.name} is ${this.age} years old and  is from ${city} ,${state},${country}`,
//   );
// }

// greet.apply(person2, ["Raipur", "Chhattishgarh", "India"]);

const user = {
  uname: "Sonam",
  age: 35,
  intro: function () {
    console.log(`${this.uname} is ${this.age} years old`);
  },
};
setTimeout(user.intro, 2000);
setTimeout(user.intro.bind(user), 4000);
