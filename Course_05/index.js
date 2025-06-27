/**
 * JS for CSS Variables here
 */

let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let black = rootStyles.getPropertyValue("--black");

console.log("red: " + black);

root.style.setProperty("--black", "rgb(56, 6, 6)");