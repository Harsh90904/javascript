function palindrome(){
    let num = parseInt(document.getElementById('number').value);
    let rem = 0, tmp = num, msg="", ans = 0;
		while (tmp!=0)
		{
		rem = tmp % 10;
		ans = ans * 10 + rem;
		tmp = parseInt(tmp/10)
		}
        msg = ans;
        if(num == ans){
            msg += "the number palindrome";
        }
        else{
            msg += "the number not palindrome";
        }
        document.getElementById('dis').innerHTML = msg;
}
