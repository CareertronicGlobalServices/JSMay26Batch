const form = document.querySelector("form");
const btn = document.getElementById("Reset");
console.log(btn);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);
  console.log(height, weight);

  const result = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<br/>Your BMI is ${bmi}. 
      <p>You are underweight</p>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<br/>Your BMI is ${bmi}. 
      <p>You are fit and fine</p>`;
    } else {
      result.innerHTML = `<br/>Your BMI is ${bmi}. 
      <p>You are Overweight</p>`;
    }
  }
});

btn.addEventListener("click", () => {
  console.log("Button Clicked");
  form.reset();
  result.innerHTML = "";
});
