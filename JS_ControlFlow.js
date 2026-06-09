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
// //     console.log("wednesday");
// //     break;

// //   default:
// //     console.log(`choose the  number 1 to 7 `);
// //     break;
// // }
// // = (assignment ) == comapre check === strict checking
// if (2 == "2") console.log(`executed`);

// //check if the array is empty

// const arr = [];
// if (arr.length == 0) console.log(`empty arry`);

// //check if object is empty
// const obj = {
//   name: "kanchan",
// };

// if (Object.keys(obj).length === 0) {
//   console.log("obj is empty");
// } else console.log(`Obj is not empty ${Object.keys(obj).length}`);

// //Nullish Coalesing operator ?? :-

// //avoid your null and undefined
// let val1 = null;
// val1 = null ?? 10;
// console.log(val1);
// val2 = undefined ?? 25;
// console.log(val2);
// //
// //Ternary operators
// 8 < 4 ? console.log(8) : console.log(4);
//condition ? truescenario : falsescenario;
//CAse1 : Customer - premium  40% /std 30%/basic 20% amt>50000

// let userType = "basic";
// let purchaseAmt = 50000;

// if (userType === "premium" && purchaseAmt >= 50000)
//   console.log("40% Discount lelo ");

// if (userType === "std" && purchaseAmt >= 50000)
//   console.log("30% Discount lelo ");

// if (userType === "basic" && purchaseAmt >= 50000)
//   console.log("20% Discount lelo ");

//Logical operators - && || == != ??
//truthy and falsy values

//Short Circuit  in JS with &&
// let isloggedIn = false;

// isloggedIn && console.log("Welcome Paaji");
// // || hamesha vo code run karega

// let user = ""; //falsy
// user && console.log(`welcome ${user}`);

//Short Ciruit with OR

// let user = "";

// let result = user || "Kunal";

// console.log(result);

// let result = false;

// console.log(result ?? "hello"); //nullish coalising

// console.log(result || "Hello");
//--------------------------------

//optional chaining ?.

let user1 = {
  name: "Kunal",
};
let user2 = {};
// console.log(user2.adress?.city);

// console.log("executed");

let ans = user1?.name ?? "GuestUser";
console.log(ans);

console.log(user2?.name ?? "GuestUser");

console.log(!!"hello"); // conversion to boolean

console.log(!!0);
