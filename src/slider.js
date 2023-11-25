import Swiper from "swiper";
import { Pagination } from 'swiper/modules'


export const swiper = new Swiper('.swiper_first', {
  modules: [Pagination],
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },
});

export const swiperSecond = new Swiper('.swiper_second', {
  modules: [Pagination],
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },
});
