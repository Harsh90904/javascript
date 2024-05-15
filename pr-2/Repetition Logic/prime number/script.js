function prime() {
    let num = parseInt(document.getElementById('num').value);
    let string = " ", count = " ", i ,j ;
    for(i=1; i <= num ; i++){
        count = 0;
        for(j= 1; j<=i ; j++){
            if(i %j == 0){
                count++;
            }
        }
        if(count == 2){
            string += i + " ";
        }
    }
    document.getElementById('dis').innerHTML = string;
}