//Basic(3)
// 1.while loop
//do while loop
//for loop

// 1.While loop

// while(condition){
//   statements
//inc/dec
// }

// let i = 10;

// while (i > 0) {
//   console.log(`${i}`);
//   i--;
// }

// //2.do-While
// let i = 10;

// do {
//   console.log(`${i}`);
//   i--;
// } while (i > 10);

//3.For loop

// for (let i = 0; i < 5; i++) {
//   console.log(`number ${i}`);
// }

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i] * 2;
//   arr2.push(element);
//   console.log(element, arr2);
// }
// //General password generator
// function passwordGenerator(length) {
//   let characters =   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_";

//   let password = "";

//   for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     password = password + characters[randomIndex];
//   }
//   return password;
// }
// console.log(passwordGenerator(12));

//Guaranteed Password generator which is fullfilling all rules we want in Password

function passwordGenerator(length) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let numbrs = "0123456789";
  let spcChars = "!@#$%&*_";
  let combined = upper + lower + numbrs + spcChars;

  let password = "";

  password = password + upper[Math.floor(Math.random() * upper.length)]; //M
  password = password + lower[Math.floor(Math.random() * lower.length)]; //Md
  password = password + spcChars[Math.floor(Math.random() * spcChars.length)]; //MD*
  password = password + numbrs[Math.floor(Math.random() * numbrs.length)]; //MD*7

  for (let i = password.length; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * combined.length);
    password = password + combined[randomIndex];
  }
  return password;
}
console.log(passwordGenerator(8));
