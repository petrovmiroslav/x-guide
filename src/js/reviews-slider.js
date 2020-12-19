import { Swiper, Autoplay, Navigation, EffectFade } from 'swiper';
Swiper.use([Autoplay, Navigation, EffectFade]);


export default function ReviewsSlider () {
  const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

  elements.forEach(element => {
    const container = element.querySelector('.swiper-container');

    new Swiper(container, {
        // watchOverflow: true,
        // slidesPerView: 'auto',
        speed: 700,
        // centeredSlides: true,
        loop: true,
        // loopedSlides: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
            nextEl: element.querySelector('.slider__nav-button--next'),
            prevEl: element.querySelector('.slider__nav-button--prev')
        },


        /* updateOnWindowResize: true, */
        /* virtualTranslate: true, */
    });
  })
}