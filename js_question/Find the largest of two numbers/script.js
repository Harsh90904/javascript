function largestnum(){
    let num_1 = parseInt(document.getElementById('num-1').value);
    let num_2 = parseInt(document.getElementById('num-2').value);
    let msg;

    if(num_1 > num_2){
        msg = num_1 + " is a largest number";
    }
    else if(num_1 == num_2){
        msg = " num_1 and num_2 is a some";
    }
    else{
        msg = num_2 + " is a largest number";
    }
    document.getElementById('dis').innerHTML = msg;
}