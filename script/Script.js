const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", !expanded);
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});
