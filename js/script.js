import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100
});

const mobileMenu = document.querySelector(".header__menu-mobile");
const navMenu = document.querySelector(".header__menu");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
