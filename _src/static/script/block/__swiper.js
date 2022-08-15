const swiper = new Swiper('.blog-slider__slider', {
  navigation: {
    nextEl: '.blog-slider__btn-next',
    prevEl: '.blog-slider__btn-prev',
  },
  slidesPerView: "auto",
  loop: true,

  spaceBetween: 20,

  breakpoints: {

    577: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
