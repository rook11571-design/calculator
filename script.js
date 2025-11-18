class Calculator {
  constructor(startingValue = NaN) {
    this.value = startingValue;
    this.result = this.result;
  }
  set(value) {
    this.value = value;
    return this;
  }
  add(x) {
    console.log(x);
    this.value += x;
    return this;
  }

  subtract(x) {
    this.value = this.value - x;
    return this;
  }

  multiply(x) {
    this.value *= x;
    return this;
  }

  divide(x) {
    this.value /= x;
    return this;
  }
  getResult() {
    return this.value;
  }
}
const num = [1,2,3,4,5,6,7,8,9,0];
num.forEach((n)=>{
    const numberDiv = document.createElement("div");
    numberDiv.textContent = n;
    numberDiv.addEventListener("click",()=>{
        if(result){
            text.value = "";
            result = 0;
        }
        text.value+=numberDiv.textContent;
    })
    document.body.appendChild(numberDiv);
})
const calculator = new Calculator();
const text = document.createElement("input");
const equalBtn = document.createElement("button");
const addBtn = document.createElement("button");
addBtn.classList.add("operator");
addBtn.textContent = "+";
const subBtn = document.createElement("button");
subBtn.classList.add("operator");
subBtn.textContent = "-";
const multiBtn = document.createElement("button");
multiBtn.classList.add("operator");
multiBtn.textContent = "×";
const divBtn = document.createElement("button");
divBtn.classList.add("operator");
divBtn.textContent = "÷";
let operator = "";
let result = 0;
document.body.appendChild(addBtn);
document.body.appendChild(subBtn);
document.body.appendChild(multiBtn);
document.body.appendChild(divBtn);
document.body.appendChild(equalBtn);
text.type = "text";
document.body.appendChild(text);
document.addEventListener("DOMContentLoaded", () => {
  const operatorBtn = document.querySelectorAll(".operator");
  console.log(operatorBtn);
  operatorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(`previous operator is ${operator}`);
      const currentNumber = Number(text.value);
      if (operator) {
        operate(operator, currentNumber);
      } else {
        calculator.set(currentNumber);
        text.value = "";
      }
      operator = btn.textContent;
    });
  });
  equalBtn.textContent = "=";
  equalBtn.addEventListener("click", () => {
    if (!operator) {
      return;
    }
    const currentNumber = Number(text.value);
    operate(operator, currentNumber);
    text.value = calculator.getResult();
    operator = "";
  });
});
const operate = (operator, number) => {
  switch (operator) {
    case "+":
      calculator.add(number);
      break;
    case "-":
      calculator.subtract(number);
      break;
    case "×":
      calculator.multiply(number);
      break;
    case "÷":
      calculator.divide(number);
      break;
    default:
      text.value = "NaN";
      break;
  }
  text.value = calculator.getResult();
  result = text.value;
};
