// Mobile navigation
// -----------------

const mobileNavEl = document.querySelector(".header-navigation-mobile");
const headerEl = document.querySelector(".section-header");

mobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling
// ----------------

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    // If same-page link
    if (href.startsWith("#")) {
      e.preventDefault();

      if (href === "#") {
        // Scroll back to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll element into view
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile naviagtion
      if (link.classList.contains("header-nav-link"))
        headerEl.classList.toggle("nav-open");
    }
  });
});
