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
const text = document.querySelector("input");
const num = [1,2,3,4,5,6,7,8,9,".",0,"<"];
const container = document.querySelector("#container");
num.forEach((n)=>{
    const numberDiv = document.createElement("div");
    numberDiv.textContent = n;
    numberDiv.addEventListener("click",(e)=>{
        if(result){
            text.value = "";
            result = 0;
        }
        if(text.value.includes('.')&&e.target.textContent=='.'){
            return;
        }
        if(e.target.textContent == "<"){
            text.value= text.value.slice(0,-1);
            return;
        }
        text.value+=numberDiv.textContent;
    })
    container.appendChild(numberDiv);
})

const symbols = ["+","-","×","÷"]
const btnDiv = document.createElement("div");
btnDiv.id = "operation";

symbols.forEach((symbol)=>{
    const btn = document.createElement("div");
    console.log(symbol)
    btn.textContent = symbol;
    btn.classList.add("operator");
    btnDiv.appendChild(btn);
})


const calculator = new Calculator();
const equalBtn = document.createElement("div");
const resetBtn = document.createElement("div");
resetBtn.textContent = "AC";
btnDiv.appendChild(equalBtn);
btnDiv.appendChild(resetBtn);
document.body.appendChild(btnDiv);

let operator = "";
let result = 0;


const div = document.querySelectorAll('div');
div.forEach((elem)=>{
    elem.classList.add("button");
})

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
  resetBtn.addEventListener("click",()=>{
    text.value = "";
    calculator.set(0);
  })
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
