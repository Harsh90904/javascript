function wood(){
    let a = parseInt(document.getElementById('num').value);
    let msg;

    if( a % 3 == 0){
        msg = "YES";
    }
    else{
        msg = "NO";
    }
    document.getElementById("dis").innerHTML = msg;
}