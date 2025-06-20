const ham = document.getElementById("hamburger");
const closeNav = document.getElementById("close");
const navBar = document.getElementById("navbar");


document.addEventListener("DOMContentLoaded", () => {
    // your code here
    ham.addEventListener("click", () => {
        navBar.style.transform = "translateX(0)";
    })

    closeNav.addEventListener("click", () => {
        navBar.style.transform = "translateX(100%)";
    })
});

console.log(ham, closeNav, navBar);