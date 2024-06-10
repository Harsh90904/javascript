
let Array_data = [];

function data() {
    let add_data_array = {
        name: document.getElementById("name").value,
        roll: parseInt(document.getElementById("roll").value),
        mother: document.getElementById("mother").value,
        father: document.getElementById("father").value,
    };
    Array_data.push(add_data_array);
    console.log(add_data_array);
    ui_maker();
}

function ui_maker() {
    document.getElementById("tbody").innerHTML = " ";
    Array_data.map((ele, index) => {
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        name.innerHTML = ele.name;
        let roll = document.createElement("td");
        roll.innerHTML = ele.roll;
        let mother = document.createElement("td");
        mother.innerHTML = ele.mother;
        let father = document.createElement("td");
        father.innerHTML = ele.father;
        let delete_button = document.createElement("button");
        delete_button.setAttribute("class" , "delete")
        let delete_button_msg = document.createTextNode("Delete");
        delete_button.append(delete_button_msg);
        let edit_button = document.createElement("button");
        edit_button.setAttribute("class" , "delete")
        let edit_button_msg = document.createTextNode("Update");
        edit_button.append(edit_button_msg);
        document.getElementById("tbody").append(tr);
        tr.append(name, roll, mother, father, delete_button, edit_button);

        delete_button.addEventListener("click", () => delete_data(index));
        edit_button.addEventListener("click", () => update_data(index));
    });
}

function delete_data(index) {
    Array_data.splice(index, 1);
    ui_maker();
}

function update_data(index) {
    let newData = {
        name: prompt("Enter new name", Array_data[index].name),
        roll: parseInt(prompt("Enter new roll", Array_data[index].roll)),
        mother: prompt("Enter new mother's name", Array_data[index].mother),
        father: prompt("Enter new father's name", Array_data[index].father),
    };
    Array_data[index] = newData;
    ui_maker();
}
