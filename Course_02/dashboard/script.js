let asideNav = document.getElementById("aside-nav");
let closeNav = document.getElementById("close-nav");
let ham = document.getElementById("ham");

closeNav.addEventListener("click", toCloseNav());
ham.addEventListener("click", openNav());

function openNav() {
    asideNav.style.transform = "translateX(0)";
}

function toCloseNav() {
    asideNav.style.transform = "translateX(-200%)";
}