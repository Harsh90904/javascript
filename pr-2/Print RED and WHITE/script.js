function red_and_white(){
    let n = parseInt(document.getElementById('name').value);
    let msg= "";
    for (let i = 1; i <= n; i++) {
        msg +="RED and WHITE" + "<br>";
    }
    document.getElementById('dis').innerHTML = msg;
}

