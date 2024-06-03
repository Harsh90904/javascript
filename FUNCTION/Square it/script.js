function getint(id){
    return parseInt(document.getElementById(id).value);
}
function squaresum(number){
    return number * number;
}
function square(){
    let a = getint("num");
    let msg =squaresum(a);
    document.getElementById("dis").innerHTML = msg;
}