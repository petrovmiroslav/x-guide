import polyfills from './polyfills';
import detectTouch from './detectTouch';
import Menu from './menu';
import MenuAccordion from './menu-accordion';
import Intro from './intro';
import Searchform from './search-form';
import SearchToursForm from './search-tours-form';
import Hero from './hero';
import Tabs from './tabs';
import ToursSlider from './tours-slider';
import TabsSlider from './tabs-slider';
import AboutTextFadeout from './about-fadeout';
import TeamSlider from './team-slider';
import GallerySlider from './gallery-slider';
import ReviewsSlider from './reviews-slider';
import MainAccordion from './accordion';
import FormBGParallax from './form-section-parallax';
import PhoneMask from './phoneMask';
import Validation from './validation';
import VideoModal from './video-modal';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    Menu();
    MenuAccordion();
    Intro.init();
    Searchform();
    SearchToursForm.init();
    Hero();
    Tabs.init();
    TabsSlider();
    ToursSlider.init();
    AboutTextFadeout();
    TeamSlider();
    GallerySlider();
    ReviewsSlider();
    MainAccordion();
    FormBGParallax();
    PhoneMask();
    Validation();
    VideoModal();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
