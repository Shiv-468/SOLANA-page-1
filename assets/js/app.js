const y = new Date();
const getyear = y.getFullYear();
document.getElementById("year").innerHTML = getyear

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
$('.logo_slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
    infinite: true,
    dots: false,
    arrows: false,
    variableWidth: true,
    slidesToShow: 4,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                cssEase: 'linear'

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                cssEase: 'linear'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                cssEase: 'linear'
            }
        }
    ]
});
const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const navlink = document.querySelectorAll(".nav-links")
navlink.forEach(a => a.addEventListener("click", () => {
    menulist.classList.remove("show");
    document.body.classList.remove("overflow-hidden");
    menuicon.classList.toggle("show");
}))
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});
<<<<<<< HEAD
=======
const tabcontant = document.querySelectorAll(".tabcontant");
const firstcontant = document.querySelector(".tabcontant");
const fistactivetab = document.querySelector(".allbtn button");
tabcontant.forEach(e => e.style.display = "none");
firstcontant.style.display = "block";
fistactivetab.classList.add("active");
function clickhere(tabs) {
    tabcontant.forEach(e => e.style.display = "none");
    const selectcontant = document.getElementById(tabs)
    selectcontant.style.display = "block";
    const tabsactive = document.querySelectorAll(".allbtn button")
    tabsactive.forEach(e => e.classList.remove("active"))
    const selecttab = document.querySelector(`button[onclick="clickhere('${tabs}')"]`)
    selecttab.classList.add("active")
}
>>>>>>> fe2805cb8e9d153c24807fcd2d907fd0fb436734
