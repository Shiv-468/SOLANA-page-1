const y = new Date();
const getyear = y.getFullYear();
document.getElementById("year").innerHTML = getyear

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
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
