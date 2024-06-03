function getint(id){
    return parseInt(document.getElementById(id).value);
}
function sum(num1,num2,num3,num4,num5){
    return num1+num2+num3+num4+num5;
}
function product(){
    let n1 = getint("n1");
    let n2 = getint("n2");
    let n3 = getint("n3");
    let n4 = getint("n4");
    let n5 = getint("n5");
    let msg =  sum(n1,n2,n3,n4,n5);
    document.getElementById("dis").innerHTML = msg;
}