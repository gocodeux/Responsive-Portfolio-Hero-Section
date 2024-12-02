'use strict';

const toggleBtn = document.querySelector(".toggle-btn");
const mobileNav = document.querySelector(".nav-links-mobile")

toggleBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("nav-active")
})


// scroll reveal
const sr = ScrollReveal();

// sr.reveal("header", {
//     distance: "100%",
//     duration: 1000,
//     origin: "top"
// })

sr.reveal(".above-hero-heading", {
    distance: "50px",
    origin: "bottom",
    duration: 500,
    delay: 100
})

sr.reveal(".hero-heading", {
    distance: "50px",
    origin: "bottom",
    duration: 500,
    delay: 200
})

sr.reveal(".below-hero-para", {
    distance: "50px",
    origin: "bottom",
    duration: 500,
    delay: 300
})

sr.reveal(".hero-btn", {
    distance: "50px",
    origin: "bottom",
    duration: 500,
    delay: 400
})

sr.reveal(".hero-graphic-main", {
    duration: 1000,
    scale: 0.5
})

sr.reveal(".stats-1", {
    distance: "50px",
    origin: "left",
    duration: 500,
    delay: 400
})

sr.reveal(".stats-3", {
    distance: "50px",
    origin: "left",
    duration: 500,
    delay: 500
})

sr.reveal(".stats-2", {
    distance: "50px",
    origin: "right",
    duration: 600,
    delay: 600
})

sr.reveal(".service-section-heading", {
    distance: "50px",
    origin: "bottom",
    duration: 500,
    delay: 500
})

sr.reveal(".service-item", {
    distance: "50px",
    origin: "bottom",
    duration: 500,
    delay: 600,
    interval: 100
})