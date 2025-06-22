const ham = document.getElementById("hamburger");
const closeNav = document.getElementById("close");
const navBar = document.getElementById("navbar");

ham.addEventListener('click', () => {
    navBar.style.transform = 'translateX(0)';
})

closeNav.addEventListener("click", () => {
    navBar.classList.remove("show");
});
