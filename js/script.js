///////////////////////////////////////////////////////////
// Make mobile navigation work

const mobileNavEl = document.querySelector(".header-navigation-mobile");
const headerEl = document.querySelector(".section-header");

mobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
