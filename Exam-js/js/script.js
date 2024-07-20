
let Arrayd = JSON.parse(window.localStorage.getItem("data")) || [];

function data() {
    let add_data_array = {
        name: document.getElementById("name").value,
        ingre: document.getElementById("ingre").value,
        instr: document.getElementById("instr").value,
        cuis: document.getElementById("cuis").value,
        image: document.getElementById("img").value,
    };

    Arrayd.push(add_data_array);

    window.localStorage.setItem("data", JSON.stringify(add_data_array));

    ui_maker();
}

function ui_maker()  {
    let itemContainer = document.getElementById("additems");
    if (itemContainer) {
        itemContainer.innerHTML = "";

        Arrayd.forEach((item, index) => {
            let div = document.createElement("div");
            div.classList.add("grid-item", "align-center", "padding-10");

            let grid_img = document.createElement("div");
            grid_img.classList.add("grid-img");
            let img = document.createElement("img");
            img.src = item.image;
            img.classList.add("grid-img");

            let grid_text = document.createElement("div");
            grid_text.classList.add("grid-text");
            let title = document.createElement("h4");
            title.textContent = item.name;
            title.classList.add("cart-h4");

            let des = document.createElement("p");
            des.textContent = item.ingre;
            des.classList.add("grid-p");

            let instr = document.createElement("p");
            instr.textContent = item.instr;
            instr.classList.add("grid-p");

            let cuis = document.createElement("p");
            cuis.textContent = item.cuis;
            cuis.classList.add("grid-p");

            let buttonContainer = document.createElement("div");

            let btndiv = document.createElement("div");
            let delete_button = document.createElement("button");
            delete_button.classList.add("delete");
            delete_button.textContent = "Delete";
            delete_button.addEventListener("click", () => delete_data(index));

            let edit_button = document.createElement("button");
            edit_button.classList.add("edit");
            edit_button.textContent = "Edit";
            edit_button.addEventListener("click", () => update_data(index));

            btndiv.appendChild(delete_button);
            btndiv.appendChild(edit_button);

            grid_img.appendChild(img);
            grid_text.appendChild(title);
            grid_text.appendChild(des);
            grid_text.appendChild(instr);
            grid_text.appendChild(cuis);
            grid_text.appendChild(buttonContainer);
            buttonContainer.appendChild(btndiv);

            div.appendChild(grid_img);
            div.appendChild(grid_text);
            itemContainer.appendChild(div);
        });
    } else {
        console.error('Element with ID "additems" not found');
    }
}

function delete_data(index) {
    Arrayd.splice(index, 1);
    window.localStorage.setItem("data", JSON.stringify(Arrayd));
    ui_maker();
}

function update_data(index) {
    let newData = {
        name: prompt("Enter new name", Arrayd[index].name),
        ingre: prompt("Enter new ingredients", Arrayd[index].ingre),
        instr: prompt("Enter new instructions", Arrayd[index].instr),
        cuis: prompt("Enter new cuisine", Arrayd[index].cuis),
        image: prompt("Enter new image URL", Arrayd[index].image),
    };
    Arrayd[index] = newData;
    window.localStorage.setItem("data", JSON.stringify(Arrayd));
    ui_maker();
}

document.addEventListener('DOMContentLoaded', ui_maker);
