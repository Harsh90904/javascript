function range()
{
    let num = parseInt(document.getElementById('num').value);
    let rangenum = parseInt(document.getElementById('Rangenum').value);
    let msg="",i;
    
    for( i = 1; i <= num; i++)
        {
            if(i%rangenum==0)
                {
                    msg+=i;
                    msg+="<br>";
                }
        }
    document.getElementById('dis').innerHTML = msg;
}