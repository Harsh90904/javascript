function Sequence() {
    if (this.constructor === Sequence) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
  
  Sequence.prototype.getValue = function (n) {
    throw new Error("Enter A postive Value!!!");
  };
  
  function FS() {
    Sequence.call(this);
  }
  
  FS.prototype.getValue = function (n) {
    if (n <= 0) {
      throw new Error("Invalid input");
    }
  
    if (n === 1 || n === 2) {
      return 1;
    }
  
    let per = 1;
    let cur = 1;
    let next;
  
    for (let i = 3; i <= n; i++) {
      next = per + cur;
      per = cur;
      cur = next;
    }
  
    return cur;
  };
  
  function fib() {
    let n = parseInt(document.getElementById("fibInput").value);
  
    if (isNaN(n) || n <= 0) {
      document.getElementById("dis").textContent =
        " enter a positive number.";
      return;
    }
  
    let fibonacciSequence = new FS();
  
    try {
      let res = fibonacciSequence.getValue(n);
      document.getElementById(
        "dis"
      ).textContent = `The ${n} th Fibonacci number is: ${res}`;
    } catch (err) {
      console.error(err.message);
      document.getElementById(
        "dis"
      ).textContent = `Error: ${err.message}`;
    }
  }