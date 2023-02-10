// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.min.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { SplitText } from "gsap/SplitText.min.js";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js";
import { MotionPathHelper } from "gsap/MotionPathHelper.min.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  MotionPathPlugin,
  MotionPathHelper,
  MorphSVGPlugin,
  ScrollToPlugin
);

// const slider = gsap.timeline({
//   scrollTrigger:{
//     trigger:".slider",
//     start:"top top",
//     end:"+=2000",
//     pin:true,
//   }
// })

// const sectoins = gsap.utils.toArray(".section");

// gsap.utils.toArray(".text").forEach((item, i) => {
//   item = gsap.timeline({
//     scrollTrigger: {
//       trigger: item,
//       start: "top top",
//       end: "100%",
//       toggleClass: { targets: item, className: "_active" },
//       markers: true,
//       onEnter: () => {
//         sectoins[i].classList.add("_active");
//       },
//       onEnterBack: () => {
//         sectoins[i].classList.add("_active");
//       },
//       onLeave: () => {
//         sectoins[i].classList.remove("_active");
//       },
//       onLeaveBack: () => {
//         sectoins[i].classList.remove("_active");
//       },
//     },
//   });
// });

const texts = gsap.utils.toArray(".text");

const tlSwiper = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider",
    start: "top top",
    end: "+=3000",
    pin: true,
    scrub: true,
    markers: true,
  },
  onComplete:()=>{
    
  }
});

const svg = gsap.utils.toArray(".section");
//уже зашел
gsap.set(svg[0], {
  xPercent: 50,
  yPercent: 50,
});

texts[0].classList.add("active");

for (let i = 0; i < svg.length - 1; i++) {
  for (let j = i + 1; j < i + 2; j++) {
    // заходит
    tlSwiper.fromTo(
      svg[j],
      {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0,
      },
      {
        xPercent: 50,
        yPercent: 50,
        scale: 1.2,
        opacity: 1,
        stagger: 1,
        duration: 2,
        onStart: () => {
          texts[j].classList.add("active");
        },
        onReverseComplete:() => { 
          texts[j].classList.remove("active");
         }
      }
    );
  }
  //выходит
  tlSwiper.to(
    svg[i],
    {
      xPercent: 100,
      yPercent: 100,
      opacity: 0,
      scale: 0,
      stagger: 0.5,
      duration: 2,
      onStart: () => {
        texts[i].classList.remove("active");
      },
      onReverseComplete:() => { 
        texts[i].classList.add("active");
       }
    },
    "<"
  );
}
