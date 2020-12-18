import polyfills from './polyfills';
import detectTouch from './detectTouch';
import MainAccordion from './accordion';
import './form-section-parallax';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();

    MainAccordion();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
