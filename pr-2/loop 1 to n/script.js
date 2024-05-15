function loop1ton(){
    let n = parseInt(document.getElementById('loop1').value);
    let msg = "";
    for(let i=0; i<=n;i++){
        msg += i;
        msg+="<br>";
    }
    document.getElementById('dis').innerHTML = msg;
}