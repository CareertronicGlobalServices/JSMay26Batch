// function add2(num) {
//   return num + 2;
// }
// add2.power = 2;
// console.log(add2(5));
// console.log(add2.power);
// add2.Sonam = 5;
// console.log(add2);

// const objUser = {};
// objUser.username = "Kanchan";
// objUser.Age = 35;
// console.log(objUser);
function createUser(username, age) {
  this.username = username;
  this.age = age;
  console.log(this.username);
}

createUser.prototype.increment = function () {
  this.age++;
};
createUser.prototype.print = function () {
  console.log(`${this.username} and age is ${this.age}`);
};
const shubham = new createUser("Shubham", 25);
const gulshan = new createUser("Gulshan", 30);
shubham.increment();
shubham.print();
gulshan.increment();
gulshan.print();
