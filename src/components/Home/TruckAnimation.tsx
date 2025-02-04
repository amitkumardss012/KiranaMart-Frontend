import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaTruck } from "react-icons/fa";

interface TruckAnimationFiveProps {
  stepsRef: React.MutableRefObject<HTMLDivElement[]>;
}

export const TruckAnimationFive: React.FC<TruckAnimationFiveProps> = ({ stepsRef }) => {
  const truckRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const totalDuration = 18; // Total animation duration
    const numSteps = 6; // Number of steps
    const pauseDuration = 2; // Pause at each step
    const moveDuration = (totalDuration - numSteps * pauseDuration) / numSteps; // Time to move between steps

    const tl = gsap.timeline({ repeat: -1 });

    stepsRef.current.forEach((stepElement) => {
      if (!stepElement || !truckRef.current) return;

      const stepCenter =
        stepElement.getBoundingClientRect().left +
        stepElement.offsetWidth / 2;

      tl.to(truckRef.current, {
        x: stepCenter - truckRef.current.offsetWidth / 2,
        duration: moveDuration,
        ease: "linear",
        onStart: () => {
          stepElement.classList.add("hovered");
        },
        onComplete: () => {
          stepElement.classList.remove("hovered");
        },
      });

      tl.to({}, { duration: pauseDuration }); // Pause at each step
    });
  }, [stepsRef]);

  return (
    <div className="relative w-full h-32 overflow-hidden mt-10">
      <div ref={truckRef} className="absolute top-0 left-0 text-4xl text-green-400">
        <FaTruck className="text-2xl md:text-3xl lg:text-4xl" />
      </div>
    </div>
  );
};

