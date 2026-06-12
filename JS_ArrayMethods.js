// // // // //DEfining a array
// // // // const a = 5; //variable number
// // // // const x = [1, 2, 4, 5]; //array - number
// // // // const strArr = ["sonam", "gulshan", "shubham", "rahul ", "kunal ", "jayant"]; //number| string
// // // // const objArr = [
// // // //   {
// // // //     name: "kanchan",
// // // //     age: 32,
// // // //   },
// // // //   {
// // // //     name: "Ishan",
// // // //     age: 40,
// // // //   },
// // // // ]; //array of object

// // // // console.log(objArr[1].name);
// // // // console.log(strArr[2]);

// // // // const arrName = [1, 2, 4, 5];
// // // // const spiderman = ["sonam", "shubham", "ishan"];
// // // // //adding a value
// // // // arrName.push(85); //add the elemnt to the last
// // // // arrName.pop(); //remove the last element
// // // // spiderman.unshift("kunal"); //add the elemnet at 1st position
// // // // spiderman.shift(); // remove the first elemnt
// // // // console.log(spiderman.includes("sonam"));
// // // // console.log(spiderman);
// // // // console.log(arrName.includes(5)); // check weather the element is present or not // gives true/false

// // // // console.log(spiderman.indexOf("sonam", "shubham")); // agar value present hai to uska index dega agar value hai hi ni then -1
// // // //for multiple checks it returns the index of first passed value

// // // //slice and splice
// // // // //slice - originl array ko modify nahi karga
// // // // const newArr = [1, 2, 3, 4, 5, 6, 7, 7, 88, 9, 87, 56, 67];
// // // // const slicedArray = newArr.slice(1, 8);
// // // // console.log(slicedArray);
// // // //console.log(newArr);

// // // //splice - original array modify

// // // // console.log(newArr.splice(1, 5));
// // // // console.log(newArr);

// // // //
// // // // const a = [1, 2, 3];
// // // // const b = [4, 5, 6];
// // // //console.log(a);

// // // // join
// // // //const c = a.concat(b);
// // // //console.log(c);
// // // //
// // // //push -- original affect - modify
// // // //concat returns a new array
// // // const x = "7";
// // // const y = 8;
// // // //console.log(x.concat(y));
// // // const depthArray = [1, 2, [3, 4, 5, [6, 7, [8]]], [9, 10]];
// // // const newDepthArray = depthArray.flat(4);
// // // console.log(newDepthArray); //return new array original me koi change nahi karega
// // // //console.log(depthArray);
// // // console.log(newDepthArray.length);

// // // const a = [1, 2];
// // // const b = [3, 4];
// // // const c = [5, 6];
// // // a.push(b)
// // // //treats the b as one elemrnt but not 2 elements of an array // [1,2,[3,4]]

// // // a[2] = undefined;
// // // a[5] = null;
// // // a[4] = 98;
// // // a[3] = 98; // array[index]= value ;
// // // console.log(a);
// // const a = 5;
// // console.log(typeof a);

// // const b = new Number(5); //
// // console.log(typeof b);

// // const str = "I am string";

// // console.log(a + b);
// //last element
// // const arr = [1, 2, 3, 4, 5];
// // console.log(arr[arr.length - 1]);

// const str = "kunal , sonam , gulshan , shubha , rahul";
// const arr = ["kunal", "sonam"];
// //console.log(arr.reverse());
// //str- arry ??
// console.log(str.split(","));

// //split
// //arr-str
// //join
// //console.log(arr.join(",")); //str
// // console.log(str.split("").reverse().join(""));
// // if (str == str.split("").reverse().join("")) {
// //   console.log("Palindrom");
// // } else {
// //   console.log("Not a palindrom");
// // }
// //console.log(Array.isArray(arr)); //boolean true false
// // elemnts array banana hai

// console.log(Array.from({ name: "kunal" }));
// //yad - jab ye array nahi bana pata to empty array deta hai

// const a1 = 500;
// const a2 = {
//   name: "ghg",
// };
// const a3 = {
//   name: "ghg",
// };

// console.log(Array.of(a1, a2, a3));

const numbers = [1, 2, 4, 45, 6, 7, 6];
//numbers.fill(9);
//numbers.fill(value , startindex ,endindex(lst not included))
numbers.fill(9, 2, 5);
console.log(numbers);
