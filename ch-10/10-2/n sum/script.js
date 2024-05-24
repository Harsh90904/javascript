function loop(){
    let s = parseInt(document.getElementById("start").value);
    let e = parseInt(document.getElementById("end").value);
    
    sum(s,e);
}
function sum(s,e){
    let ans = document.getElementById("ans");
    ans.innerHTML += s + " ";
    if(s==e){
        sum(s+e);
    }
}
