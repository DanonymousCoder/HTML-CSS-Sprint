const ham = document.getElementById("hamburger");
const closeNav = document.getElementById("close");
const navBar = document.getElementById("navbar");

ham.addEventListener("click", () => {
    console.log("Showing")
    navBar.classList.add("show");
    console.log("Shown")
});

closeNav.addEventListener("click", () => {
    navBar.classList.remove("show");
});
