import polyfills from './polyfills';
import detectTouch from './detectTouch';
import Searchform from './search-form';
import Hero from './hero';
import Tabs from './tabs';
import ToursSlider from './tours-slider';
import AboutTextFadeout from './about-fadeout';
import TeamSlider from './team-slider';
import ReviewsSlider from './reviews-slider';
import MainAccordion from './accordion';
import FormBGParallax from './form-section-parallax';
import PhoneMask from './phoneMask';
import Validation from './validation';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    Searchform();
    Hero();
    Tabs.init();
    ToursSlider.init();
    AboutTextFadeout();
    TeamSlider();
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
