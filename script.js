const button = document.querySelector(".view_all");
const slides = Array.from(
  document.querySelectorAll(".slide--invase, .slide__inise--two")
);
const arrows = document.querySelector(".expand-img");

button.addEventListener("click", function () {
  slides.forEach(function (slide) {
    slide.classList.toggle("slide--show");
  });

  if (button.textContent === "Посмотреть все") {
    button.textContent = "Скрыть";
    arrows.style.transform = "rotate(180deg)";
  } else {
    button.textContent = "Посмотреть все";
    arrows.style.transform = "none";
  }
});
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clikable: true,
    dynamicBullets: true,
  },
  spaceBetween: 30,
});
