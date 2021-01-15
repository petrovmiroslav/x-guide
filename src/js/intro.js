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
const SearchToursForm = document.querySelector('.search-tours-form__accordion');

function init () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    //return;
    introTimeline
    .set(
      document.body,
      { autoAlpha: 1},
    )
    .set(
      SearchToursForm,
      { opacity: 1},
    );
    return;
  }

  introTimeline
  .call(()=>{
    FirstSlide.classList.add('slide--visible');
  })
  .to(
    document.body,
    { autoAlpha: 1,
      duration: 1 },
  )
  .fromTo(
    Nav,
    { autoAlpha: 0 },
    { autoAlpha: 1,
      duration: 1, },
    0.5
  )
  .fromTo(
    SlideLink,
    { autoAlpha: 0 },
    { autoAlpha: 1,
      duration: 1, },
      0.5
  )
  .fromTo(
    ThumbsSlider,
    { autoAlpha: 0 },
    { autoAlpha: 1,
      duration: 1 },
  )
  .fromTo(
    SearchToursForm,
    { opacity: 0 },
    { opacity: 1,
      duration: 0.25 },
  )
  .fromTo(
    SearchToursForm,
    { yPercent: 0 },
    { yPercent: -50,
      duration: 1 },
    '<',
  )
  .call(()=>{
    FirstSlide.classList.remove('slide--visible');
  });
}

export default {
  init,
};