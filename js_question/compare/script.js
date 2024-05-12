function compare(){
    let a = parseInt(document.getElementById('num-1').value);
    let b = parseInt(document.getElementById('num-2').value);
    let c = parseInt(document.getElementById('num-3').value);
    let msg;
    document.getElementById('flase').innerHTML = Boolean(a > b);

    a = a + c; 

    document.getElementById('dis').innerHTML = Boolean(a > b);

}