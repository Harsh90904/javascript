function mtof(){
    let meter = parseInt(document.getElementById("inp-meter").value); 
    let mtof = meter * 3.28;

    document.getElementById("op-foot").innerHTML = `Foot : ${mtof}`;
}
// foot to meter
function ftom() {
    let foot = parseFloat(document.getElementById("inp-foot").value);
    let ftom = foot / 3.28;

    document.getElementById("op-meter").innerHTML = `meter : ${ftom}`;
}
// meter to km
function mtok() {
    let meter = parseFloat(document.getElementById("inp-meter-km").value);
    let mtok = meter / 1000;

    document.getElementById("op-km").innerHTML = `km : ${mtok}`;
}
// km to meter
function ktom() {
    let km = parseFloat(document.getElementById("inp-km-meter").value);
    let ktom = km * 3280;

    document.getElementById("op-meter-km").innerHTML = `foot : ${ktom}`;
}
// currency

function itoj(){
    let inr = parseInt(document.getElementById("inp-inr").value); 
    let itoj = inr * 1.859;
    document.getElementById("op-jpy").innerHTML = `JPY : ${itoj}`;
}
// india to nepal
function itop() {
    let inr = parseFloat(document.getElementById("inp-inr-npr").value);
    let itop = inr * 1.6012;

    document.getElementById("op-npr").innerHTML = `NPR : ${itop}`;
}
// meter to km
function stou() {
    let sri = parseFloat(document.getElementById("inp-lkr").value);
    let stou =sri * 0.0033;

    document.getElementById("op-usd").innerHTML = `USD : ${stou}`;
}
// km to meter
function atoc() {
    let aus = parseFloat(document.getElementById("inp-aud").value);
    let atoc = aus * 4.7523;

    document.getElementById("op-cny").innerHTML = `Ausralian : ${atoc}`;
}

// temprechar

function ctof(){
    let cel = parseInt(document.getElementById("inp-cel").value); 
    let ctof = cel * 1.8 + 32;
    document.getElementById("op-fah").innerHTML = `Fahrenheit : ${ctof}`;
}
// india to nepal
function ftoc(){
    let fal = parseInt(document.getElementById("inp-fal").value); 
    let ftoc = (fal - 32) / 1.8;
    document.getElementById("op-cal").innerHTML = `Celsius : ${ftoc}`;
}
// meter to km
function ktof() {
    let kel = parseFloat(document.getElementById("inp-kel").value);
    let ktof =kel * 9/5 - 459.67;

    document.getElementById("op-fe").innerHTML = `Fahrenheit : ${ktof}`;
}
// km to meter
function ctok() {
    let cal = parseFloat(document.getElementById("inp-ce").value);
    let ctok = cal + 274.15;

    document.getElementById("op-ke").innerHTML = `kelvin : ${ctok}`;
}
// DATA

function ktom(){
    let kb = parseInt(document.getElementById("inp-kb").value); 
    let ktom = kb / 1024;
    document.getElementById("op-mb").innerHTML = `MB : ${ktom}`;
}
// india to nepal
function mtog(){
    let mb = parseInt(document.getElementById("inp-mb").value); 
    let mtog = mb / 1024 ;
    document.getElementById("op-gb").innerHTML = `GB : ${mtog}`;
}