function min_max()
{
    let min = parseInt(document.getElementById('minnum').value);
    let max = parseInt(document.getElementById('maxnum').value);
    let msg="" ,i;
    
    for( i = min; i < max; i++)
        {
            msg+=i;
            msg+="<br>";
        }
    document.getElementById('dis').innerHTML = msg;
}