// function toggleNav() {
//   var navMenu = document.getElementById("openMenuButton");
//   var mobileContainer = document.querySelector(".mobile-menu-list");
//   navMenu.addEventListener("click", function () {
//     console.log("close");
//     mobileContainer.classList.toggle("mobile");
//     // navMenu.textContent.toggle("close");
//   });
//   // Toggle the "mobile" class on the menu element
// }

// document.addEventListener("DOMContentLoaded", function () {
//   toggleNav();
// });

// function toggleNav() {
//   var navOpen = document.getElementById("mobile-open");
//   var navClose = document.getElementById("mobile-close");
//   var mobileContainer = document.getElementById("mobile-menu-list");
//   mobileContainer.classList.add("open");

//   console.log("close");
// }

var navOpen = document.getElementById("mobile-open");
var navClose = document.getElementById("mobile-close");
var mobileContainer = document.getElementById("mobile-menu-list");

function openNav() {
  mobileContainer.style.display = "block";
  navClose.style.display = "block";
  navOpen.style.display = "none";
}
function closeNav() {
  mobileContainer.style.display = "none";
  navClose.style.display = "none";
  navOpen.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  var navOpen = document.getElementById("mobile-open");
  var navClose = document.getElementById("mobile-close");
  var mobileContainer = document.getElementById("mobile-menu-list");

  navOpen.addEventListener("click", openNav);
  navClose.addEventListener("click", closeNav);
});
