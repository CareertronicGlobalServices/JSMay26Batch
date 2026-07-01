const grandparent = document.querySelector("#Grandparent");
const parent = document.querySelector("#parent");
const childBtn = document.querySelector("#child");

grandparent.addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked");
  },
  true,
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true,
);

childBtn.addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true,
);
