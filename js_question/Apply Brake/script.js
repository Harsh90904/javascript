function speed(){
    let d = parseInt(document.getElementById('num-1').value);
    let t = parseInt(document.getElementById('num-2').value);
    let speed = d/t;
    let msg;

    if(speed  > 40){
        msg = "Apply Brake";
    }
    else{
        msg = "Keep Going";
    }
    document.getElementById('dis').innerHTML = msg;
}