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

  if (passwoard != com_passwoard) {
    alert("Plase Enter a Valid Password");
  } else {
    document.getElementById(
      "signpage"
    ).innerHTML = `<a href="../home.html">Sign</a>`;
  }
  signup.push({
    email: Email,
    passwoard: passwoard,
  });

  window.localStorage.setItem("data", JSON.stringify(signup));
}

function Login() {
  let Email = document.getElementById("login-emil").value;
  let passwoard = document.getElementById("login-pass").value;

  JSON.parse(window.localStorage.getItem(signup));

  if (Email != Email || passwoard != passwoard) {
    alert("Plase Enter a Valid Email and Password");
  } else {
    document.getElementById(
      "loginpage"
    ).innerHTML = `<a href="../home.html">Sign</a>`;
  }
}
