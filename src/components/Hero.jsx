import React from "react";
import { Link } from "gatsby";
import heroBg from "../images/hero2.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-end md:items-center"
      id="top"
    >
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight">
            <span className="block">Australia&apos;s Pinnacle of</span>
            <span className="block mt-2 text-[#f0cf63] italic">
              Natural Bodybuilding
            </span>
          </h1>

          <p className="mt-6 text-xs sm:text-sm md:text-base text-white max-w-xl">
            Where <span className="font-semibold">WORLD-CLASS ATHLETES</span>{" "}
            meet <span className="font-semibold">WORLD-CLASS EVENTS</span>,
            united by a commitment to integrity and exceptional standards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/events" className="btn-primary text-center">
              View Upcoming Competitions
            </Link>
            <a href="https://icompetenatural.com" className="btn-outline-light text-center" target="_blank" rel="noopener noreferrer">
              <span>Become an ICN Athlete</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
