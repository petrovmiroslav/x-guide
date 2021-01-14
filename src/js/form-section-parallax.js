import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FormBGParallax () {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      let tl = gsap.timeline({scrollTrigger: {
        trigger: '.form-section',
        start: 'top 100%',
        end: 'top 40%',
        scrub: 1,
      }});
      tl.fromTo(
        '.form-section__bg',
        { yPercent: 50 },
        { yPercent: 0 },
      );
    },
  });
}