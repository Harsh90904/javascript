function getint(id){
    return parseInt(document.getElementById(id).value);
}
function getname(id){
    return document.getElementById(id).value
}
function nameandage(){
    let name = getname("name");
    let number = getint("num");
    document.getElementById("dis").innerHTML = name + "<br>" + number;
}