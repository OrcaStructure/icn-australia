import React from "react";
import { Link } from "gatsby";
import heroBg from "../images/hero-bg.png";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <p className="section-title mb-4">
            Australia&apos;s
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight">
            <span className="block">Pinnacle of</span>
            <span className="block mt-2 text-[#f0cf63]">
              Natural
            </span>
            <span className="block">Bodybuilding.</span>
          </h1>

          <p className="mt-6 text-xs sm:text-sm md:text-base text-white/80 max-w-xl">
            Where <span className="font-semibold">world-class athletes</span>{" "}
            meet <span className="font-semibold">world-class events</span>,
            united by a commitment to integrity and exceptional standards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/events" className="btn-primary text-center">
              View Upcoming Competitions
            </Link>
            <Link to="/become-a-pro" className="btn-outline-light text-center">
              Become an ICN Athlete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
