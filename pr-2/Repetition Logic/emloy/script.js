

function addEmployee() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let salary = parseInt(document.getElementById("salary").value);
    let totalSalary = 0;
    let tableBody = document.getElementById("employeeBody");
    let newRow = tableBody.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = role;
    cell3.textContent = salary;

    totalSalary += salary;
    document.getElementById("total").textContent = totalSalary;
}