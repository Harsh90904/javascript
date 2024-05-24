  function fig() {
  let n = parseInt(document.getElementById("num").value);
  document.getElementById("dis").innerHTML += "0 " + "1 ";
  fibonacci(n, 0, 1);
}
function fibonacci(n, n1, n2) {
  let n3 = n1 + n2;
  document.getElementById("dis").innerHTML += n3 + " ";
  n1 = n2;
  n2 = n3;
  n--;
  if (n >= 1) {
    fibonacci(n, n1, n2);
  }
}
