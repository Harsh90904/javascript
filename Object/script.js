let employee_data = (e) => {

    let employee_input = {
        name: document.getElementById("name").value,
        fname: document.getElementById("fname").value,
        mname: document.getElementById("mname").value,
        age: document.getElementById("age").vlaue,
        email: document.getElementById("email").value,
    } 

    let tableBody = document.getElementById("tbody");
    let newRow = tableBody.insertRow(-1);
    let name = newRow.insertCell(0);
    let fname = newRow.insertCell(1);
    let mname = newRow.insertCell(2);
    let age = newRow.insertCell(3);
    let email = newRow.insertCell(4);


    name.textContent = employee_input.name;
    fname.textContent = employee_input.fname;
    mname.textContent = employee_input.mname;
    age.textContent = employee_input.age;
    email.textContent = employee_input.email;



}