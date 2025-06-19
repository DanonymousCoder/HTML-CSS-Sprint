const menu = document.getElementById("menu");
const filter = document.getElementById("filter");
const panelStyles = window.getComputedStyle(filter);
const like = document.querySelectorAll(".bxr");


menu.addEventListener('click', () => {

    if (panelStyles.getPropertyValue('clip-path') === 'circle(0% at 100% 0%)') {
        filter.style.clipPath = 'circle(100% at 50% 50%)'
    }

    else {
        filter.style.clipPath = 'circle(0% at 100% 0%)'
    }
})

document.addEventListener("mouseup", (event) => {
    if (!menu.contains(event.target) && !filter.contains(event.target)) {
        filter.style.clipPath = 'circle(0% at 100% 0%)';
    }
})

function toLike(r) {
    r.classList.toggle("bxs-heart");
    r.classList.toggle("bx-heart");
}

/**
 * menu.addEventListener("click", () => {
    if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%") {
        filter.style.clipPath = "circle(100% at 50% 50%";
    }
})
 */
