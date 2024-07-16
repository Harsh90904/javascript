document.getElementById("sbm").addEventListener("click", function (e) {
    e.preventDefault();

    let state = document.getElementById("inp-sta").value;
    let url = `https://covid-19-data.p.rapidapi.com/country?name=${state}&format=json`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '90fe476f49mshe7a5233ff1d00d7p14501djsn3e8dd4ff67bd',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById("forecast").innerHTML = '';

            if (data.length > 0) {
                data.forEach(country => {
                    let div = document.createElement("div");
                    div.classList.add("forecast-item");
                    div.innerHTML = `
                    <h3>${country.country}</h3>
                    <p>Active Cases: ${country.confirmed}</p>
                    <p>Active recovered: ${country.recovered}</p>
                    <p>Active deaths: ${country.deaths}</p>
                    <hr>
                `;
                    document.getElementById("forecast").appendChild(div);
                });
            } else {
                document.getElementById("forecast").innerHTML = `<p>No data found for ${state}</p>`;
            }
        })
});
