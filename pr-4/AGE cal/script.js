function ageCalculator() {
    let age = document.getElementById("dob").value;
    let dob = new Date(person_age);

    if(age==null || age=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";   
    } 
    else {
    
    let month = Date.now() - dob;
    
    let age_date = new Date(month);   
    let year = age_date.getUTCFullYear();
    let age = (year - 1970);


    return document.getElementById("dis").innerHTML =  
        "Age is: " + age;
    }
}
