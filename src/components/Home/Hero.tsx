import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Store from "../../assets/img/store/KM 1.png";
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".hero__bg--stagger", { height: 0 }); // Set initial height for backgrounds
    gsap.set(".hero__bg-img", { autoAlpha: 0 }); // Set initial opacity for background image
    gsap.set(".hero__el--stagger", { y: -100, opacity: 0 }); // Set initial position and opacity for elements

    // GSAP timeline for animations
    tl.to(".hero__bg--stagger", {
      duration: 2,
      height: '100%',
      ease: "power4.out",
      stagger: 0.1,
    })
      .to(
        ".hero__bg-img",
        {
          autoAlpha: 1,
          duration: 5,
          ease: "power4.out",
        },
        "-=1"
      )
      .to(
        ".hero__el--stagger",
        {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=4"
      );

    // Restart animation on button click
    const button = document.querySelector<HTMLButtonElement>('#main-cta');
    if (button) {
      button.addEventListener('click', () => tl.restart());
    }

    // Cleanup event listener
    return () => {
      if (button) button.removeEventListener('click', () => tl.restart());
    };
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[500px] flex flex-col items-center justify-center text-center">
  {/* Background Layers */}
  <div className="absolute inset-0 hero__bg hero__bg--stagger bg-[#FF6709]"></div>
  <div className="absolute inset-0 hero__bg hero__bg--stagger bg-green-400"></div>
  <div className="absolute inset-0 hero__bg hero__bg--stagger bg-white"></div>
  <div
    className="absolute inset-0 hero__bg-img bg-cover bg-center"
    style={{
      backgroundImage: `url(${Store})`,
    }}
  ></div>

  {/* Gradient Overlay - Dark on left */}
  <div 
    className="absolute inset-0 z-5"
    style={{
      background: 'linear-gradient(to right, rgba(0,0,0,0.7) 30%, transparent)'
    }}
  ></div>

  {/* Hero Content */}
  <div className="relative z-10">
    <h1 className="hero__el--stagger text-5xl md:text-7xl font-bold text-[#FF6709]">SUPERMART RETAIL CHAIN</h1>
    <h2 className="hero__el--stagger text-2xl md:text-4xl mt-4 text-green-400">
      Building the best supermarket franchise in India
    </h2>
    <Link to="/franchise">
      <button
        id="main-cta"
        className="hero__el--stagger mt-6 px-8 py-4 bg-[#FF6709] text-black font-bold rounded-full text-lg hover:bg-[#ff7a2a] transition-colors duration-300"
      >
        Apply For Franchise
      </button>
    </Link>
  </div>
</section>
  );
};

export default HeroSection;
