function Factorial() {
    let num = document.getElementById('num').value;
    let ans = factorial(num);
    document.getElementById('dis').innerHTML = ans;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}