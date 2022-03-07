//Declare variables for hamburger and menu items
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
const darkBtn = document.querySelectorAll(".dark-btn");
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

// implement dark mode functionality
darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});
