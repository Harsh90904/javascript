function getint(id){
    return parseInt(document.getElementById(id).value);
}

function prime(){
    let n =getint("num");

    let count = 0 , msg = "";
    for(let i=0; i<=n/2 ; i++){
        if(n% i == 0){
            count++;
        }
    }
    msg = count == 1 ? "prime number" : "not prime number ";
    document.getElementById('dis').innerHTML = msg;
}