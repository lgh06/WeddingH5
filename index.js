import anime from 'animejs/lib/anime.es.js';

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
  },
  // // Disable preloading of all images
  preloadImages: true,
  // // Enable lazy loading
  lazy: true,
  mousewheel: true,
  keyboard: true,
  // simulateTouch: false,
  // threshold: 20,
  loop: false,
});