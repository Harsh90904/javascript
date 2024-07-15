document.getElementById("sbm").addEventListener("click", function (e) {
     e.preventDefault();

     let city = document.getElementById("inp-city").value;
     let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=217d9466fcece181f108ef7574f237b4`;
     let weatherdate = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=217d9466fcece181f108ef7574f237b4`
     fetch(api)
          .then(response => response.json())
          .then(data => {

               document.getElementById("res").innerHTML = data.weather[0].main;
               let icon = document.getElementById("icon");

               let iconurl =
                    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

               icon.src = iconurl;
          });
     fetch(weatherdate)
          .then(response => response.json())
          .then(data => {

               for (let i = 0; i < data.list.length; i++) {
                    let div = document.createElement("div");
                    div.innerHTML = `
                <h3>${data.list[i].dt_txt.slice(0, 10)}</h3>
                <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">
                <p>${data.list[i].weather[0].description}</p>
                <p>Temperature: ${data.list[i].main.temp}°C</p>
                <p>deg: ${data.list[i].wind.deg}</p>
                <hr>
                
                `;
                    document.getElementById("forecast").appendChild(div);
               }
          });
});