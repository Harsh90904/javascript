let Array_data = Array();

function data() {
    let add_data_array = {
        name: document.getElementById("name").value,
        roll: parseInt(document.getElementById("roll").value),
        mother: document.getElementById("mother").value,
        father: document.getElementById("father").value,
    }
    Array_data.push(add_data_array);
    console.log(add_data_array);
    ui_maker()   
}
function ui_maker(){
    Array_data.map((ele)=>{
        let tr = document.createElement("tr")
        let name = document.createElement("td")
        name.innerHTML = ele.name
        let roll = document.createElement("td")
        roll.innerHTML = ele.roll
        let mother = document.createElement("td")
        mother.innerHTML = ele.mother
        let father = document.createElement("td")
        father.innerHTML = ele.father
        let Dlete_button = document.createElement("button")
        let Dlete_button_msg = document.createTextNode("Delete")
        Dlete_button.append(Dlete_button_msg)
        let Edit_button = document.createElement("button")
        let Edit_button_msg = document.createTextNode("Update")
        Edit_button.append(Edit_button_msg)
        tr.append(name,roll,mother,father,Dlete_button,Edit_button)

    })
}