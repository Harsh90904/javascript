function Fibonacci() {
    let n = parseInt(document.getElementById('num').value);
    let msg = " ", i, no1 = 0, no2 = 1, fib;

    for (i = 1; i <= n; i++) {
        msg += no1 + ',';
        fib = no1 + no2;
        no1 = no2;
        no2 = fib;
    }
    document.getElementById('dis').innerHTML = msg;
}