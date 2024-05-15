function evenum()
{
    let num = parseInt(document.getElementById('num').value);
    let msg="",sum=0 , i;

    for( i=1; i<=num; i++)
        {
            if(i>=0 && i%2==0)
                {
                    msg+=i;
                    sum+=i;
                    msg+="<br>";
                }
        }
    document.getElementById('dis').innerHTML = msg; 
    document.getElementById('sum').innerHTML = sum; 
}