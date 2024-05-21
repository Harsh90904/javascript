function getint(id){
    return parseInt(document.getElementById(id).value);
}
function display( a ,b,c){
    return  a+b+c;
}
function sum(){
    let n1 = getint("num-1"), n2 = getint("num-2"), n3 = getint("num-3");
    document.getElementById("dis").innerHTML = display(n1,n2,n3);
}