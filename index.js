let three = document.getElementById("three");
let operands = document.querySelectorAll(".operands");
let operators = document.querySelectorAll(".operator");
let finalValue = document.getElementById("finalvalue");
let allClear = document.getElementById("allclear");
let all = "";

operands.forEach(button => {
  button.addEventListener("click", () => {
    all += button.innerText;
    three.innerText = all;
  });
});

operators.forEach(button => {
  button.addEventListener("click", () => {
    all += button.innerText;
    three.innerText = all;
  });
});

allClear.addEventListener("click", () => {
  all = "";
  three.innerText = "";
});

finalValue.addEventListener("click", () => {
  try {
    let answer = eval(all);
    three.innerText = (answer % 1 === 0) ? answer : answer.toFixed(5);
  } catch {
    three.innerText = "Error";
  }
});
