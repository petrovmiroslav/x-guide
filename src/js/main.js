import polyfills from './polyfills';
import detectTouch from './detectTouch';
import Selects from './selects';
import Menu from './menu';
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
import Accordions from './accordions';
import FormBGParallax from './form-section-parallax';
import PhoneMask from './phoneMask';
import Validation from './validation';
import VideoModal from './video-modal';
import TourInfo from './tour-info';
import Map from './map';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    Selects();
    Menu();
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
    Accordions();
    FormBGParallax();
    PhoneMask();
    Validation();
    VideoModal();
    TourInfo();
    Map();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
