let asideNav = document.getElementById("aside-nav");
let closeNav = document.getElementById("close-nav");

closeNav.addEventListener("click", toCloseNav());

function openNav() {
    asideNav.style.transform = "translateX(0)";
}

function toCloseNav() {
    asideNav.style.transform = "translateX(-120%)";
}