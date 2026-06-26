const btn = document.getElementById("btnColor");
//console.log(btn);

const color = ["Red", "Black", "Blue", "Green", "Aqua", "Orange", "Pink"];

btn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * color.length);
  //console.log(color[randomColor]);

  document.body.style.backgroundColor = color[randomColor];
});
