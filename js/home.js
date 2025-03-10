const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const shadow_one = document.querySelector(".shadow.one")
const shadow_two = document.querySelector(".shadow.two")
hamburger_menu.addEventListener("click", function () {
    container.classList.toggle("active");
})

const navbar = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    //shadow_one.classList.toggle("active")
})

const main = document.querySelector(".home");
main.addEventListener("click", function () {
    container.classList.toggle("active");
    navbar.classList.toggle("active");
})
