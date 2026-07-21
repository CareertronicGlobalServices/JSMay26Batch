const user = {
  uname: "Sonam",
  age: 35,
  intro: function () {
    console.log(`${this.uname} is ${this.age} years old`);
  },
};
user.intro();

const person1 = {
  name: "XYZ",
  age: 56,
};
const person2 = {
  name: "ABC",
  age: 58,
};

function greet(city) {
  console.log(`${this.name} is ${this.age} years old and  is from ${city}`);
}
greet("raipur");

greet.call(person1, "Raipur"); // call Right now

// const emp1 = {
//   ename: "Sonam1",
// };
// const emp2 = {
//   ename: "Sonam2",
// };
// const emp3 = {
//   ename: "Sonam3",
// };
// function sal(sal, year) {
//   console.log(`${this.ename} salary ${sal} ic in year ${year}`);
// }
// // sal.call(emp1, 12000, 2026);
// // sal.call(emp2, 15000, 2027);
// // sal.call(emp3, 50000, 2028);

// sal.apply(emp1, [12000, 2026]);

// sal.apply(emp2, [15000, 2027]);
// sal.apply(emp3, [500000, 2025]);

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
//console.log(user.intro());
//setTimeout(user.intro, 2000);
setTimeout(user.intro.bind(user), 4000);
