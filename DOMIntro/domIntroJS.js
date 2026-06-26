// const head = document.getElementById("headTest");
// console.log(head);
//.innerText
//.textContent
//.innerHTML

// console.log(head.innerText);
// console.log(head.textContent);
// console.log(head.innerHTML);
//head.innerText = "Mai change ho gya ";
//console.log(head.innertext);
// const para = document.getElementsByClassName("para");
//console.log(para);//html collection
//console.log(typeof para);
//const paraArray = Array.from(para);
//console.log(paraArray, typeof paraArray);
// console.log(paraArray[1].textContent);
// console.log(paraArray[1].innerText);
// console.log(paraArray[1].innerHTML);

const head = document.querySelector("#headTest");
console.log(head);
const para = document.querySelector(".para");
console.log(para); //first elememt ko retrurn karega
const paraAllElements = document.querySelectorAll(".para");
console.log(paraAllElements); //node list
//create element
//html collection - live update []
//nodelist - static[]
///nodelist se array me change karna hai to??
const arrNewList = Array.from(paraAllElements);
console.log(arrNewList);
