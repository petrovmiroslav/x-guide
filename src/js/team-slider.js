import { Swiper, Autoplay, Navigation } from 'swiper';
Swiper.use([Autoplay, Navigation]);


export default function TeamSlider () {
  const elements = Array.from(document.querySelectorAll('.js-team-slider'));

  elements.forEach(element => {
    const container = element.querySelector('.swiper-container');

    new Swiper(container, {
      // updateOnWindowResize: true,
      // speed: 700,
      loop: true,
      loopedSlides: 3,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
        nextEl: element.querySelector('.slider__nav-button--next'),
        prevEl: element.querySelector('.slider__nav-button--prev'),
      },
    });
  })
}