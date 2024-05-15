function calculateGrade() {
    // Getting input values
    var name = document.getElementById("name").value;
    var standard = document.getElementById("std").value;
    var sub_1 = parseFloat(document.getElementById("ss").value);
    var sub_2 = parseFloat(document.getElementById("eng").value);
    var sub_3 = parseFloat(document.getElementById("guj").value);
    var sub_4 = parseFloat(document.getElementById("math").value);
    var sub_5 = parseFloat(document.getElementById("sci").value);


    if (sub_1 < 33 || sub_2 < 33 || sub_3 < 33 || sub_4 < 33 || sub_5 < 33) {
        document.getElementById("dis").innerHTML = "Failed";
        
    }
    var totalMarks = sub_1 + sub_2 + sub_3 + sub_4 + sub_5;
    var percentage = (totalMarks / 500) * 100;

    
    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    }

    else {
        grade = 'F';
    }

    var table = "<table border='3'>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Standard:</td><td>" + standard + "</td></tr>";
    table += "<tr><td>Total Marks:</td><td>" + totalMarks + "</td></tr>";
    table += "<tr><td>Percentage:</td><td>" + percentage+ "%</td></tr>";
    table += "<tr><td>Grade:</td><td>" + grade + "</td></tr>";
    table += "</table>";

    document.getElementById("dis").innerHTML = table;
}