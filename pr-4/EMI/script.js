function emi() {

    let amount = parseInt(document.getElementById("amount").value);
    let rate = parseInt(document.getElementById("rate").value);
    let month = parseInt(document.getElementById("month").value);

    calculate(amount,rate,month);
}

function calculate(amount,rate,month)
{
    let interest = (amount * (rate * 0.01)) / month;
     
    let total = ((amount / month) + interest).toFixed(2);
 
    document.getElementById("dis").innerHTML = "EMI : (₹)" + total;
}