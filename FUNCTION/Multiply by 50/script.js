function getint(id){
    return parseInt(document.getElementById(id).value);
}
function sum(num){
    return num * 50;
}
function multiply(){
    let number = getint("number");
     let msg= sum(number);
     document.getElementById("dis").innerHTML = msg;
}