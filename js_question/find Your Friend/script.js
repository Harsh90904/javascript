function friend(){
    let num = parseInt(document.getElementById('num').value);
    let msg;

    if (num < 13) {
        msg = ("1 Kms");
    } else if (num >= 13 && num < 18) {
        msg = ("5 Kms");
    } else if (num >= 18 && num < 30) {
        msg =("10 Kms");
    } else {
        msg = ("You can have friends from anywhere");
    }

    document.getElementById('dis').innerHTML = msg;
}