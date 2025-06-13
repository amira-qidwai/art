// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".navbar nav");
  const logo = document.querySelector(".logo a");

  const toggleMenu = () => {
    navMenu.classList.toggle("active");
  };

  hamburgerMenu.addEventListener("click", toggleMenu);
  logo.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
