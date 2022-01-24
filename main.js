const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle('lock-scroll')
}


navLink.forEach((n) => n.addEventListener("click", closeMenu));
navLink.forEach((n) => n.addEventListener("click", removeOverflow));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
function removeOverflow() {
  document.body.classList.remove('lock-scroll')
}
