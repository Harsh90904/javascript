const loaddata = async () => {
    const url = 'https://movies-api14.p.rapidapi.com/shows';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '90fe476f49mshe7a5233ff1d00d7p14501djsn3e8dd4ff67bd',
		'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	load(result.movies);
} catch (error) {
	console.error(error);
}
}

const load = (data) => {

    let itemContainer = document.getElementById("char");
    data.map((ele) => {
        let div = document.createElement("div");
        div.classList.add("grid-item", "align-center", "padding-10");


        let grid_img = document.createElement("div");
        grid_img.classList.add("grid-img");
        let img = document.createElement("img");
        img.src = ele.poster_path;
        img.classList.add("grid-img");

        let grid_text = document.createElement("div");
        grid_text.classList.add("grid-text");
        let title = document.createElement("h4");
        title.textContent = ele.original_title;
        title.classList.add("cart-h4");

        let des = document.createElement("p");
        des.textContent = ele.overview;
        des.classList.add("grid-p");
        let av = document.createElement("p");
        des.textContent = ele.overview;
        des.classList.add("grid-p");
        let con = document.createElement("p");
        des.textContent = ele.first_aired;
        des.classList.add("grid-p");
        


        grid_img.append(img);
        grid_text.append(title);
        grid_text.append(des);
        grid_text.append(av);
        grid_text.append(con);
        div.append(grid_img);
        div.append(grid_text);
        itemContainer.append(div);
    })
}
loaddata();