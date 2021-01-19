import Swiper from 'swiper';

export default function TabsSlider () {
  /*tabs nav slider*/
  const TabsSliderContainer = document.querySelector('.js-tabs-slider');
  if (!TabsSliderContainer)
    return;

  let tabsNavSwiper = new Swiper(TabsSliderContainer, {
    speed: 400,
    slidesPerView: 'auto',
    watchOverflow: true,
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    
    breakpoints: {
        768: {
            navigation: {
                nextEl: '.tours-slider__tabs-nav-buttons-container .slider__nav-button--next',
                prevEl: '.tours-slider__tabs-nav-buttons-container .slider__nav-button--prev',
            },
        },
    }
  });
}