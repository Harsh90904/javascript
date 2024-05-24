function calbutton(data){
    let disp = document.getElementById("ans");
    let value = document.getElementById("ans").innerHTML;

    if(data == "="){
        disp.innerHTML = eval(value);
    }
    else{
        disp.innerHTML += data;
    }
}