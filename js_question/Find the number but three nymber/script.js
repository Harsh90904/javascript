function threenum(){
    let a = parseInt(document.getElementById('number-1').value);
    let b = parseInt(document.getElementById('number-2').value);
    let c = parseInt(document.getElementById('number-3').value);
    let msg;

    if(a >= b && a >= c){
        msg = a;
    }
    else if(b >= a && b >= c){
        msg = b;
    }
    else{
        msg = c;
    }

    document.getElementById('display').innerHTML = msg +"  is a largest number"
}