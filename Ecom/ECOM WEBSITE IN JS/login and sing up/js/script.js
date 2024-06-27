function displayLogin() {
  document.getElementById("displaylo").style.display = "block";
  document.getElementById("displaysi").style.display = "none";
}

function displaySignUp() {
  document.getElementById("displaylo").style.display = "none";
  document.getElementById("displaysi").style.display = "block";
}
let signup = JSON.parse(window.localStorage.getItem("signup")) || [];


function SignUp() {
  let Email = document.getElementById("sign-emil").value;
  let passwoard = document.getElementById("sign-pass").value;
  let com_passwoard = document.getElementById("sign-com-pass").value;

  if (passwoard != com_passwoard ) {
    alert("Plase Enter a Valid Password");
  } else { 
    document.getElementById(
      "nexthome"
    ).innerHTML = `<a href="../home.html"style="text-decoration: none;color: antiquewhite;font-size: 20px;">Sign</a>`;
  }
  signup.push({
    email: Email,
    passwoard: passwoard,
  });

  document.getElementById("sign-emil").value = "";
  document.getElementById("sign-pass").value = "";
  document.getElementById("sign-com-pass").value = "";
  window.localStorage.setItem("data", JSON.stringify(signup));
}

function Login() {
    let Email = document.getElementById("login-emil").value;
    let password = document.getElementById("login-pass").value;
    
    let storedSignup = JSON.parse(window.localStorage.getItem("data")) || [];
  
    let user = storedSignup.find(user => user.email === Email && user.passwoard === password);
  
    if (!user) {
      alert("Invalid email or password. ");
    } else  {
      document.getElementById("loginpage").innerHTML = `<a href="../home.html" style="text-decoration: none;color: antiquewhite;font-size: 20px;">Login</a>`;
    }
  }