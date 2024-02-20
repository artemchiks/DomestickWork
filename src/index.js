document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".view__all");
  const slides = Array.from(
    document.querySelectorAll(".slide--invase, .slide__inise--two")
  );
  const arrows = document.querySelector(".expands-img");
  const bttClos = document.querySelector(".menu-close");
  const btnCloseForm = document.querySelector(".close-img");
  const menu = document.querySelector(".burger__menu");
  const blockForm = document.querySelector(".open");
  const message = document.querySelector(".say_img");
  const call = document.querySelector(".call__img");
  const formCall = document.querySelector(".open--call");
  const callImg = document.querySelector(".call__close-img");
  const btnlaptop = document.querySelector(".view__all-check");
  const laptops = Array.from(document.querySelectorAll(".laptop--invase"));

  let isHidden = true;

  btnlaptop.addEventListener("click", function () {
    laptops.forEach(function (laptop) {
      if (isHidden) {
        laptop.style.display = "flex";
      } else {
        laptop.style.display = "none";
      }
    });

    if (isHidden) {
      btnlaptop.textContent = "Скрыть";
    } else {
      btnlaptop.textContent = "Посмотреть все";
    }

    isHidden = !isHidden;
  });
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
  bttClos.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
  call.addEventListener("click", function () {
    formCall.style.display = "grid";
  });
  callImg.addEventListener("click", function () {
    formCall.style.display = "none";
  });
  message.addEventListener("click", function () {
    blockForm.style.display = "grid";
  });
  btnCloseForm.addEventListener("click", function () {
    blockForm.style.display = "none";
    formCall.style.display = "none";
  });

  document.querySelector(".menu-img").addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  //Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  const swiperLaptop = new Swiper("swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
});
