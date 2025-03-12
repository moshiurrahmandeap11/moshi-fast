const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");

// Open Menu
hamburgerOpen.addEventListener("click", () => {
  hamburgerMenu.style.left = "0";
});

// Close Menu
hamburgerClose.addEventListener("click", () => {
  hamburgerMenu.style.left = "-100%";
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
});