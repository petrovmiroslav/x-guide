import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTextFadeout () {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".about__description-container",
      start: "top 80%",
    }
  });
  
  timeline
    .to('.about__header',
    { autoAlpha: 1,
      duration: 0.25 })
    .to(['.about__text', '.about__link'],
    { autoAlpha: 1,
      duration: 2, },
      '>1');
}