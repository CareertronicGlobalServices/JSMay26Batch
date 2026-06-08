// Control
//Conditional statements
//If else //switch case //Ternary operators((condition)?true:false)

//implicit and explicit
// let a = 9;
// let b = 10;
// //implicit
// if (a > b)
//   console.log("a is greater than b ");
// else console.log("b is greater than a ");

//explicit

// if (true) {
//   const a = 15;
//   console.log(`i am ${a}`);
// }

// console.log(`i am ${a}`);

//truthy values and falsy values
//falsy values (false , 0 , undefined , null ,Nan,"",-0,)
//switch case
// let ch = 3;
// switch (ch) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;

//   default:
//     console.log(`choose the  number 1 to 7 `);
//     break;
// }
// = (assignment ) == comapre check === strict checking
if (2 == "2") console.log(`executed`);

//check if the array is empty

const arr = [];
if (arr.length == 0) console.log(`empty arry`);

//check if object is empty
const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("obj is empty");
}

//Nullish Coalesing operator ?? :-

//avoid your null and undefined
let val1 = null;
val1 = null ?? 10;
console.log(val1);
val2 = undefined ?? 25;
console.log(val2);
//
//Ternary operators
8 < 4 ? console.log(8) : console.log(4);
//condition ? truescenario : falsescenario;
