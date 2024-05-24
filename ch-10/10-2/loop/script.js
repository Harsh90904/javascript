function loop(){
    let s = parseInt(document.getElementById("start").value);
    let e = parseInt(document.getElementById("end").value);
    
    incremet(s,e);
    decremet(s,e);
}
function incremet(s,e){
    let ans = document.getElementById("ans");
    ans.innerHTML += s + " ";
    s++;
    if(s<=e){
        incremet(s,e);
    }
}
function decremet(s,e){
    let ans = document.getElementById("ans");
    ans.innerHTML += s + " ";
    s--;
    if(s>=e){
        decremet(s,e);
    }
}