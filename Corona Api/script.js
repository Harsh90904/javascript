let api = `https://api.rootnet.in/covid19-in/stats/latest`;

const fetchData = async (api) => {
        const response = await fetch(api);
        const data = await response.json();

        document.getElementById("forecast").innerHTML = '';

        data.data.regional.forEach(region => {
            let div = document.createElement("div");
            div.classList.add("forecast-item");
            div.innerHTML = `
                <h1>${region.loc}</h1>
                <p>confirmedCasesIndian: ${region.confirmedCasesIndian}</p>
                <p>confirmedCasesForeign: ${region.confirmedCasesForeign}</p>
                <p>discharged: ${region.discharged}</p>
                <p>deaths: ${region.deaths}</p>
                <p>totalConfirmed: ${region.totalConfirmed}</p>
                <hr>
            `;
            document.getElementById("forecast").appendChild(div);
        });

    
}

fetchData(api);
