import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FormBGParallax () {
  ScrollTrigger.create({
    trigger: '.form-section',
    start: 'top 100%',
    end: 'top 40%',
    scrub: 1,
    animation: gsap.fromTo(
      '.form-section__bg',
      { yPercent: 50 },
      { yPercent: 0 }),
  });
}