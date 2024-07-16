document.getElementById("sbm").addEventListener("click", function (e) {
    e.preventDefault();

    let staste = document.getElementById("inp-sta").value;
    let date = document.getElementById("inp-date").value;
    let api = `https://data.covid19india.org/state_district_wise.json`

    fetch(weatherdate)
    .then(response => response.json())
    .then(data => {
        document.getElementById("forecast").innerHTML = ''; 
        for (let i = 0; i < data.$(staste).length; i++) {
            let div = document.createElement("div");
            div.classList.add("forecast-item"); 
            div.innerHTML = `
                <h3>${data.list[i].dt_txt.slice(0, 10)}</h3>
                <p>${data.list[i].weather[0].description}</p>
                <p>Temperature: ${data.list[i].main.temp}°C</p>
                <p>Wind Degree: ${data.list[i].wind.deg}</p>
                <hr>
            `;
            document.getElementById("forecast").appendChild(div);
        }
    });
    })        