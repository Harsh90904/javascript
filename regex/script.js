
function regex(){
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let password = document.querySelector("#password").value;

    // Name valdation
    if(name == null || name == ""){
        alert("Enter a Name");
    }
    else{
        console.log(name);
    }


    // Email valdation
    if(email == null || email == ""){
        alert("Enter a eamil");
    }
    else{
        let reg =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        let ifeamil = reg.test(email);

        if(ifeamil){

        }
        else{
            alert("Enter A Vaild Email");
        }
    }

     // Phone  valdation
     if(number == null || number == ""){
        document.querySelector("#numberError").innerHTML = "Enter A vaild Phone Number !!";
        document.querySelector("#numberError").style.fontSize = "18px";
        document.querySelector("#numberError").style.color = "red";
    }
    else{
        let reg = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/

        let ifnumber = reg.test(number);

    }

     // password valdation
     if(password == null || password == ""){
        document.querySelector("#passwordError").innerHTML = "Enter A vaild Password !!";
        document.querySelector("#passwordError").style.fontSize = "18px";
        document.querySelector("#passwordError").style.color = "red";
    }
    else{
        let reg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

        let ifpassword = reg.test(password);

        if(ifpassword){

        }
        else{
            alert("Enter A Vaild password");
        }
    }


    // res

    document.querySelector("#res").innerHTML = "Hello," + name + "<br>" + " walcome to Website";
}