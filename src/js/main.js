import polyfills from './polyfills';
import detectTouch from './detectTouch';
import './about-fadeout';
import MainAccordion from './accordion';
import './form-section-parallax';
import PhoneMask from './phoneMask';
import Validation from './validation';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();

    MainAccordion();
    PhoneMask();
    Validation();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
