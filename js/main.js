'use strict';

const toggleBtn = document.querySelector(".toggle-btn");
const mobileNav = document.querySelector(".nav-links-mobile")

toggleBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("nav-active")
})