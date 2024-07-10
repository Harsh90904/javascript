const loaddata = async () => {
    const url = 'https://scappperanime.p.rapidapi.com/new-seasons?page=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Not Authorized',
		'x-rapidapi-host': 'scappperanime.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    load(result);
    
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
        img.src = ele.oster_path;
        img.classList.add("grid-img");

        let grid_text = document.createElement("div");
        grid_text.classList.add("grid-text");
        let title = document.createElement("h4");
        title.textContent = ele.title;
        title.classList.add("cart-h4");

        let des = document.createElement("p");
        des.textContent = ele.date_time;
        des.classList.add("grid-p");
        let av = document.createElement("p");
        des.textContent = ele.delivery;
        des.classList.add("grid-p");
        let con = document.createElement("p");
        des.textContent = ele.product_star_rating;
        des.classList.add("grid-p");
        


        grid_img.append(img);
        grid_text.append(title);
        grid_text.append(des);
        div.append(grid_img);
        div.append(grid_text);
        itemContainer.append(div);
    })
}
loaddata();