let openNav = document.getElementById("open-nav");
let closeNav = document.getElementById("close-nav");
let navBar = document.querySelector(".nav-links");

openNav.addEventListener("click", () => {
    navBar.style.transform = "translateX(0%)";
})

closeNav.addEventListener("click", () => {
    navBar.style.transform = "translateY(100%)";
})