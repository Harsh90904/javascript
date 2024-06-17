class Calculator {
    constructor(displayElement) {
      this.displayElement = displayElement;
      this.clear();
    }
  
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
      this.updateDisplay();
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
      this.updateDisplay();
    }
  
    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
      this.updateDisplay();
    }

    setOperator(operator) {
      if (this.currentOperand === "") return;
      if (this.previousOperand !== "") {
        this.calculate();
      }
      this.operation = operator;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
      this.updateDisplay();
    }
  
    calculate() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "/":
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation.toString();
      this.operation = undefined;
      this.previousOperand = "";
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.displayElement.value = this.currentOperand;
    }
  }
  
  const displayElement = document.getElementById("display");
  const calculator = new Calculator(displayElement);
  
  function appendNumber(number) {
    calculator.appendNumber(number);
  }

  
  function setOperator(operator) {
    calculator.setOperator(operator);
  }
  
  function calculate() {
    calculator.calculate();
  }
  
  function clearCalculator() {
    calculator.clear();
  }