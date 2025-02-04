import { gsap } from "gsap";

export const AnimateTruck = (element: any) => {
    const totalDuration = 15; 

    // Calculate durations and pauses
    const moveDuration = (totalDuration - 8) / 5;
    const pauseDuration = 1;

    const tl = gsap.timeline({ repeat: -1, yoyo: false});

    tl.fromTo(
      element,
      { x: "-100vw" },
      { 
        x: "20vw", 
        duration: moveDuration,
        ease: "linear",
      })
      .to(element, {
        x: "20vw",
        duration: 0,
        delay: pauseDuration,
      })
      .to(element, {
        x: "40vw",
        duration: moveDuration,
        ease: "linear",
      })
      .to(element, {
        x: "40vw",
        duration: 0,
        element,
      })
      .to(element, {
        x: "60vw",
        duration: moveDuration,
        ease: "linear",
      })
      .to(element, {
        x: "60vw",
        duration: 0,
        delay: pauseDuration,
      })
      .to(element, {
        x: "80vw",
        duration: moveDuration,
        ease: "linear",
      })
      .to(element, {
        x: "80vw",
        duration: 0,
        delay: pauseDuration, // 2 seconds pause
      })
      .to(element, {
        x: "100vw",
        duration: moveDuration, 
        ease: "linear",
      });
}