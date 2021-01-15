import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTextFadeout () {
  
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      let tl = gsap.timeline({scrollTrigger: {
        trigger: '.about__description-container',
        start: 'top 80%',
      }});

      tl.to('.about__header',
      { autoAlpha: 1,
        duration: 0.25 })
      .to(['.about__text', '.about__link'],
      { autoAlpha: 1,
        duration: 2, },);
    },
  });
}