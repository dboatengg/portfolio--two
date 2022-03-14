//Declare variables for hamburger and menu items
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
const darkBtn = document.querySelector(".dark-btn");
const arrow = document.querySelector(".arrow");
const logo = document.getElementById("logo");
// const body = document.getElementsByTagName("body");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("lock-scroll");
}
hamburger.addEventListener("click", mobileMenu);

//Add a click event on to the close and each menu item to remove overflow effect
navLink.forEach((n) => n.addEventListener("click", closeMenu));
navLink.forEach((n) => n.addEventListener("click", removeOverflow));

//Add a function to remove close button
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//add the overflow function
function removeOverflow() {
  document.body.classList.remove("lock-scroll");
}

/******change logo and arrow in dark mode*******/
darkBtn.addEventListener("click", () => {
  logo.src = "/assets/logoo-dark.svg";
});
darkBtn.addEventListener("click", () => {
  arrow.src = "/assets/down-arrow-dark.svg";
});

const html = document.querySelector("html");
html.dataset.theme = `theme-light`;

function switchTheme(theme) {
  html.dataset.theme = `theme-${theme}`;
}
