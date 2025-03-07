//OLDEST CODE
// const hamburger_menu = document.querySelector(".hamburger-menu");
// const container = document.querySelector(".container");
// const shadow_one = document.querySelector(".shadow.one")
// const shadow_two = document.querySelector(".shadow.two")
// hamburger_menu.addEventListener("click", function () {
//     container.classList.toggle("active");
// })

// const navbar = document.querySelector(".navbar");

// hamburger_menu.addEventListener("click", function () {
//     navbar.classList.toggle("active");
// })

// const main = document.querySelector(".home");
// main.addEventListener("click", function () {
//     container.classList.toggle("active");
//     navbar.classList.toggle("active");
// })
//OLDEST CODE ENDS

// HAMBURGER ICON LINKED TO ONE //
// const hamburger_menu = document.querySelector(".hamburger-menu");
// const container = document.querySelector(".container");
// const navbar = document.querySelector(".navbar");
// const main = document.querySelector(".home");

// const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/";

// // 🔹 Click hamburger menu
// hamburger_menu.addEventListener("click", function (event) {
//     if (!isHomePage) {
//         event.preventDefault(); // Stop default behavior on other pages
//         sessionStorage.setItem("menuOpen", "true"); // Store flag for menu opening
//         window.location.href = "/index.html"; // Redirect to index.html
//     } else {
//         toggleMenu(); // If already on index.html, toggle menu
//     }
// });

// // 🔹 Click anywhere on home to close the menu
// if (isHomePage) {
//     main.addEventListener("click", function () {
//         closeMenu();
//     });
// }

// // ✅ Open menu when page loads (ONLY on index.html)
// window.addEventListener("load", function () {
//     if (isHomePage && sessionStorage.getItem("menuOpen") === "true") {
//         sessionStorage.removeItem("menuOpen"); // Clear flag
//         toggleMenu(); // Open the menu
//     }
// });

// // 🔥 Toggle Menu Function
// function toggleMenu() {
//     console.log("✅ Toggling menu...");

//     let isActive = container.classList.toggle("active");
//     navbar.classList.toggle("active", isActive);

//     if (isActive) {
//         sessionStorage.setItem("menuOpen", "true");
//     } else {
//         sessionStorage.removeItem("menuOpen");
//     }
// }


// // 🔥 Close Menu Function
// function closeMenu() {
//     console.log("✅ Closing menu...");
//     container.classList.remove("active");
//     navbar.classList.remove("active");
//     sessionStorage.removeItem("menuOpen");
// }
//HAMBURGER ICON LINKED TO ONE ENDS//

//HAMBURGER ICON LINKED TO ONE STARTS//

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".home");

const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/";

// 🔹 Click hamburger menu
hamburger_menu.addEventListener("click", function (event) {
    if (!isHomePage) {
        event.preventDefault(); // Stop default behavior on other pages

        // ✅ Store the previous page URL before redirecting
        sessionStorage.setItem("previousPage", window.location.href);
        sessionStorage.setItem("menuOpen", "true"); // Mark that menu should open
        window.location.href = "/index.html"; // Redirect to index.html
    } else {
        toggleMenu(); // If already on index.html, toggle menu
    }
});

// 🔹 Click anywhere on home to close the menu
if (isHomePage) {
    main.addEventListener("click", function () {
        closeMenu();
    });
}

// ✅ Open menu when redirected (ONLY on index.html)
window.addEventListener("load", function () {
    if (isHomePage && sessionStorage.getItem("menuOpen") === "true") {
        sessionStorage.removeItem("menuOpen"); // Clear flag
        toggleMenu(); // Open the menu
    }
});

// 🔥 Toggle Menu Function
function toggleMenu() {
    console.log("✅ Toggling menu...");

    let isActive = container.classList.toggle("active");
    navbar.classList.toggle("active", isActive);

    if (isActive) {
        sessionStorage.setItem("menuOpen", "true");
    } else {
        sessionStorage.removeItem("menuOpen");

        // ✅ If menu is closed, go back to the previous page
        let previousPage = sessionStorage.getItem("previousPage");
        if (previousPage) {
            window.location.href = previousPage;
            sessionStorage.removeItem("previousPage"); // Clear after use
        }
    }
}

// 🔥 Close Menu Function
function closeMenu() {
    console.log("✅ Closing menu...");
    container.classList.remove("active");
    navbar.classList.remove("active");
    sessionStorage.removeItem("menuOpen");

    // ✅ If menu is closed, go back to the previous page
    let previousPage = sessionStorage.getItem("previousPage");
    if (previousPage) {
        window.location.href = previousPage;
        sessionStorage.removeItem("previousPage"); // Clear after use
    }
}
