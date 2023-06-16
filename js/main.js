// DOM Selection
const menuShowBtn = document.getElementById("show"),
  menuCloseBtn = document.getElementById("hide"),
  mobileNav = document.querySelector(".mobile-navbar");

const navlinks = document.querySelectorAll(".mobile-navbar header ul a");

// Click Events
// Showing Mobile Nav
menuShowBtn.addEventListener("click", () => {
  mobileNav.style.left = "0";
});

const closeNav = () => {
  mobileNav.style.left = "-100%";
};
// Hiding Mobile Nav
menuCloseBtn.addEventListener("click", closeNav);

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", closeNav);
});
