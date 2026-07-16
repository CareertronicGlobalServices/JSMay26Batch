const arr = [10, 20, 30];
console.log(...arr);

const student1 = {
  sname: "Rahul",
  age: 25,
};

const user2 = {
  ...student1,
};

user2.age = 45;
console.log(student1);
console.log(user2);
//rest operators
const arr2 = [10, 20, 30, 40, 50];
const [first, ...rest] = arr2;
console.log(first);
console.log(rest);

function score(name, grade, ...marks) { 
  console.log(name);
  console.log(grade);
  console.log(marks);
}

score("Rahul", 4, 25, 25, 25, 25, 25, 26);
