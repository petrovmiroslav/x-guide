import accordionsFactory from './accordionsFactory';

export default function MenuAccordion() {
    let factory = null;
    const initializeMainAccordion = () => {
        if (factory) {
            factory.destroy();
            factory = null;
        }
        factory = accordionsFactory(Array.from(document.querySelectorAll('.nav-links-accordion')));
        
        factory.init();
    };

    window.initializeMainAccordion = initializeMainAccordion;

    initializeMainAccordion();
}