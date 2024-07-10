const loaddata = async () => {
    const url = 'https://myanimelist.p.rapidapi.com/v2/manga/search?q=Berserk&n=50&score=0&genre=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '90fe476f49mshe7a5233ff1d00d7p14501djsn3e8dd4ff67bd',
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
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

        let grid_img = document.createElement("div");
        grid_img.classList.add("grid-img");
        let img = document.createElement("img");
        img.src = ele.picture_url;
        img.classList.add("grid-img");

        let grid_text = document.createElement("div");
        grid_text.classList.add("grid-text");
        let title = document.createElement("h4");
        title.textContent = ele.title;
        title.classList.add("cart-h4");

        let des = document.createElement("p");
        des.textContent = ele.description;
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