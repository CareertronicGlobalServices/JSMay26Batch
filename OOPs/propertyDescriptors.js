// // const a=4;
// // let b=9;
// // b=10;
// const des = Object.getOwnPropertyDescriptors(Math, "PI");
// console.log(des);

const obj = {
  name: "Sonam",
};
Object.defineProperty(obj, "name", {
  writable: true,
  configurable: true,
});
//let x=8;
const des2 = Object.getOwnPropertyDescriptor(obj, "name");
console.log(des2);

console.log(obj.name);
obj.name = "Kanchan";
console.log(obj.name);
