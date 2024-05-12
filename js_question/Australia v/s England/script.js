function win(){
    let a = parseInt(document.getElementById('num-1').value);
    let e = parseInt(document.getElementById('num-2').value);
    let msg;

    if(a > e){
        msg = "Australia";
    }
    else if(a == e){
        msg = "Tie";
    }
    else{
        msg = "England";
    }
    document.getElementById('dis').innerHTML = msg;
}