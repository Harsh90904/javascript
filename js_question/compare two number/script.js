function comparetwo(){
    let a = parseInt(document.getElementById('num-1').value);
    let b = parseInt(document.getElementById('num-2').value);
    let msg;

    document.getElementById('flase').innerHTML = Boolean(a > b);
    document.getElementById('true').innerHTML = Boolean(a < b);
    document.getElementById('dis').innerHTML = Boolean(a == b);
}