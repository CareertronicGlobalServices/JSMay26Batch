const inp = document.getElementById("colorInput");
const btn = document.getElementById("addToList");
const list = document.getElementById("list");

// console.log(inp);
// console.log(btn);
// console.log(list);
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = inp.value;
  list.appendChild(li);
  inp.value = "";
});
