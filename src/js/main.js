import polyfills from './polyfills';
import detectTouch from './detectTouch';
import AboutTextFadeout from './about-fadeout';
import ReviewsSlider from './reviews-slider';
import MainAccordion from './accordion';
import FormBGParallax from './form-section-parallax';
import PhoneMask from './phoneMask';
import Validation from './validation';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();

    AboutTextFadeout();
    ReviewsSlider();
    MainAccordion();
    FormBGParallax();
    PhoneMask();
    Validation();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
