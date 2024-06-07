let allslider = [
    {
        src:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/09/28170902/lake-kawaguchi.jpg",
        name: "Lake Kawaguchi, Yamanashi",
    },
    {
        src:"https://asiavacationgroup.com/au/wp-content/uploads/sites/4/2-14.png",
        name: "Himeji Castle,Kyoto",
    },
    {
        src:"https://lh7-us.googleusercontent.com/0bJC8ZYYFt_iHzKqYT2DNB7c4seVZ6iu6fyFT8TxIsX536FGv_7i4KyK2V0mgpfdTPVcBiIBOrWAEfkmNO0FnAaKveeAszmNolV5tNxS5naxKA12xiND51zcHsOx77TbLtAr4X_BqhfFVY15N0QLcpw",
        name: "Todaiji Temple,Nara",
    },
    {
        src:"https://lh7-us.googleusercontent.com/kEH3OzQlvxsQBan8U2Na8ZWwe4kUnpQNeIdC64nLnwwVZfrEmg6pYmqybiaVKcHs7CcujRfNXVp1V_WMyr8yR1x-GVBcFyv5q-6RLvMQ6uDNrzKLHPzHc7i01-xrOirF6v0tBiUzXdUCntL97mpKLcI",
        name: "Osaka Castle,Osaka",
    },
    {
        src:"https://www.planetware.com/wpimages/2019/10/japan-in-pictures-most-beautiful-places-miyajima-island.jpg",
        name: "Miyajima Island",
    },
    {
        src:"https://www.tokyoweekender.com/wp-content/uploads/2022/12/shutterstock_248795983-1024x683.jpg",
        name: "KAWAGOE,Tokyo",
    },
]


allslider.forEach((val , index) => {
    let slider = document.getElementById("slider");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let par = document.createElement("h3");

    img.src = val.src;
    par.innerHTML = val.name;
    div.classList.add("slide")
    par.className = "text"


    div.append(img);
    div.append(par);
    slider.append(div);
})
function Slider() {

    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();
