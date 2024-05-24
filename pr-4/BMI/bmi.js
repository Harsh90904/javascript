function bmi()
{
    let heightin = document.getElementById('height').value;
    let weightin = document.getElementById("weight").value;
    bmical(heightin,weightin,age);
}

function bmical(heightin,weightin){
    
    let BMI, height, weight,msg;

    height = heightin;
    weight = weightin;
    BMI = weight / (height * height);

    
    if (BMI < 18.5) 
    {
        msg = "BMI is Underweight";
    }
     else if (BMI > 18.5 && BMI < 24.9) 
    {
        msg = "BMI is Normal weight";
    } 
    else if (BMI > 25 && BMI < 29.9) 
    {
        msg = "BMI is overweight";
    } 
    else if(BMI > 30)
    {
        msg = "BMI is Obesity";
    }
    else 
    {
        msg = "ERROR: Enter the correct data";
    }

    document.getElementById('dis').innerHTML = msg;

}