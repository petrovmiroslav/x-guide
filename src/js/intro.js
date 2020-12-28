import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const introTimeline = gsap.timeline();
const Header = document.querySelector('.page-header');
const Nav = Header.querySelector('.page-header__nav');
const MainSlider = Header.querySelector('.hero__main-slider');
const FirstSlide = MainSlider.querySelector('.swiper-slide');
const SlideLink = FirstSlide.querySelector('.hero__main-slider-item-link');
const ThumbsSlider = Header.querySelector('.hero__thumbs-slider');
const SearchToursForm = Header.querySelector('.search-tours-form');

function init () {
  introTimeline
  .call(()=>{
    FirstSlide.classList.add('slide--visible');
  })
  .to(
    Header,
    { autoAlpha: 1,
      duration: 2 },
  )
  .fromTo(
    Nav,
    { autoAlpha: 0 },
    { autoAlpha: 1,
      duration: 1.5, },
    0.5
  )
  .fromTo(
    SlideLink,
    { autoAlpha: 0 },
    { autoAlpha: 1,
      duration: 1, },
      1.5
  )
  .fromTo(
    ThumbsSlider,
    { autoAlpha: 0 },
    { autoAlpha: 1,
      duration: 1 },
  );

  if (window.matchMedia("(min-width: 768px)").matches) {
    introTimeline.to(
      SearchToursForm,
      { yPercent: -50,
        duration: 1 },
    );
  }

  introTimeline
  .call(()=>{
    FirstSlide.classList.remove('slide--visible');
  });
}

export default {
  init,
};