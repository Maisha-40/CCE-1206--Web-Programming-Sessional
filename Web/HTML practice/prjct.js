// Select nav links and menu buttons
const navLinks = document.querySelectorAll(".nav-menu .nav-link"); // Corrected class name to .nav-link
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button"); // Added missing menuCloseButton selection

// Toggle mobile menu visibility when the open button is clicked
menuOpenButton.addEventListener("click", () => {
  // Toggle the 'show-mobile-menu' class on the body element
  document.body.classList.toggle("show-mobile-menu");
});

// Close the menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  // Simulate a click on the open button to close the menu
  menuOpenButton.click();
});

// Close the menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Simulate a click on the open button to close the menu
    menuOpenButton.click();
  });
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true, // Corrected to dynamicBullets
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1, // For mobile, display 1 slide at a time
    },
    768: {
      slidesPerView: 2, // For tablets, display 2 slides at a time
    },
    1024: {
      slidesPerView: 3, // For desktops, display 3 slides at a time
    },
  },
});
