//Animation of hamburger
var mob_menu = document.getElementById("mobile-ul");
function hamburger(x) {
    x.classList.toggle("change-hamburger");
    mob_menu.classList.toggle("mobile-ul-active");
};