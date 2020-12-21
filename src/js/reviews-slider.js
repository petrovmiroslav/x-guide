import { Swiper, Autoplay, Navigation, EffectFade } from 'swiper';
Swiper.use([Autoplay, Navigation, EffectFade]);


export default function ReviewsSlider () {
  const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

  elements.forEach(element => {
    const container = element.querySelector('.swiper-container');

    new Swiper(container, {
      updateOnWindowResize: true,
      speed: 700,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: element.querySelector('.slider__nav-button--next'),
        prevEl: element.querySelector('.slider__nav-button--prev'),
      },
    });
  })
}