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

var navOpen = document.getElementById('mobile-open');
var navClose = document.getElementById('mobile-close');
var mobileContainer = document.getElementById('mobile-menu-list');

function openNav() {
  mobileContainer.style.display = 'flex';
  document.body.style.position = 'fixed';
  navClose.style.display = 'block';
  navOpen.style.display = 'none';
}
function closeNav() {
  mobileContainer.style.display = 'none';
  document.body.style.position = '';
  navClose.style.display = 'none';
  navOpen.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var navOpen = document.getElementById('mobile-open');
  var navClose = document.getElementById('mobile-close');
  var mobileContainer = document.getElementById('mobile-menu-list');

  navOpen.addEventListener('click', openNav);
  navClose.addEventListener('click', closeNav);
});

// slides
// let currentIndex = 0;
// const slideCount = document.querySelectorAll('.carousel-item').length;
// let autoSlideInterval;

// function showSlide(index) {
//   const carouselContent = document.getElementById('carouselContent');
//   const slideWidth = document.querySelector('.carousel-item').offsetWidth;

//   const transformValue = -index * slideWidth;
//   carouselContent.style.transform = `translateX(${transformValue}px)`;
//   currentIndex = index;

//   const dots = document.querySelectorAll('.slider-dot');
//   dots.forEach((dot, i) => {
//     dot.classList.toggle('active', i === index);
//   });
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//   showSlide(currentIndex);
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slideCount;
//   showSlide(currentIndex);
// }

// function startAutoSlide() {
//   return setInterval(() => {
//     nextSlide();
//   }, 5000);
// }

// autoSlideInterval = startAutoSlide();

// const dots = document.querySelectorAll('.slider-dot');
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     showSlide(index);
//   });
// });

// showSlide(currentIndex);

let currentIndex = 0;
const carouselContent = document.getElementById('carouselContent');
const slides = document.querySelectorAll('.carousel-item');
const slideCount = slides.length;
let autoSlideInterval;

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slideCount - 1].cloneNode(true);

carouselContent.appendChild(firstClone);
carouselContent.insertBefore(lastClone, slides[0]);

// Update slides after cloning
const updatedSlides = document.querySelectorAll('.carousel-item');
const slideWidth = slides[0].offsetWidth;

// Adjust initial position
carouselContent.style.transform = `translateX(${-slideWidth}px)`;

function updateDots(index) {
  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function showSlide(index, instant = false) {
  const transitionStyle = instant ? 'none' : 'transform 0.5s ease';
  carouselContent.style.transition = transitionStyle;

  const transformValue = -(index + 1) * slideWidth;
  carouselContent.style.transform = `translateX(${transformValue}px)`;
  currentIndex = index;

  // Handle infinite looping effect
  if (index === -1) {
    setTimeout(() => {
      carouselContent.style.transition = 'none';
      carouselContent.style.transform = `translateX(${
        -slideCount * slideWidth
      }px)`;
      currentIndex = slideCount - 1;
    }, 500);
    updateDots(slideCount - 1); // Update dots to last slide
  } else if (index === slideCount) {
    setTimeout(() => {
      carouselContent.style.transition = 'none';
      carouselContent.style.transform = `translateX(${-slideWidth}px)`;
      currentIndex = 0;
    }, 500);
    updateDots(0); // Update dots to first slide
  } else {
    updateDots(index);
  }
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function startAutoSlide() {
  return setInterval(() => {
    nextSlide();
  }, 5000);
}

autoSlideInterval = startAutoSlide();

const dots = document.querySelectorAll('.slider-dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Initial display
showSlide(currentIndex);

// Event listeners for previous and next buttons
document.querySelector('.prev-button')?.addEventListener('click', prevSlide);
document.querySelector('.next-button')?.addEventListener('click', nextSlide);

// frequent questions
// script.js

function toggleFaq(element) {
  const faqItem = element.closest('.faq-item');
  const answer = faqItem.querySelector('.faq-answer');
  const icon = element.querySelector('.icon');

  // Toggle the answer visibility
  answer.classList.toggle('hidden');
  answer.classList.toggle('show');

  // Update the icon
  if (answer.classList.contains('show')) {
    icon.src = './images/-.png'; // Path to your minus icon
  } else {
    icon.src = './images/+.png'; // Path to your plus icon
  }

  // Close other FAQ items
  document.querySelectorAll('.faq-item').forEach((item) => {
    if (item !== faqItem) {
      item.querySelector('.faq-answer').classList.add('hidden');
      item.querySelector('.faq-answer').classList.remove('show');
      item.querySelector('.icon').src = './images/+.png'; // Reset other icons to plus
    }
  });
}
