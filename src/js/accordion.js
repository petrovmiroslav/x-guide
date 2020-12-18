import accordionsFactory from './accordionsFactory';

export default function MainAccordion() {
    let factory = null;
    const initializeMainAccordion = () => {
        if (factory) {
            factory.destroy();
            factory = null;
        }
        factory = accordionsFactory(Array.from(document.querySelectorAll('.accordion__item')));

        factory.init();
    };

    window.initializeMainAccordion = initializeMainAccordion;

    initializeMainAccordion();
}