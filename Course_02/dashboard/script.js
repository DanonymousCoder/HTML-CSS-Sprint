let ham = document.getElementById("ham");
let asideNav = document.getElementById("aside-nav");
let closeNav = document.getElementById("close-nav");

ham.addEventListener("click", openNav());
closeNav.addEventListener("click", toCloseNav());

function openNav() {
    asideNav.classList.add("active");
}

function toCloseNav() {
    asideNav.classList.remove("active");
}