import React from "react";

const PageHero = ({ eyebrow, title, tagline }) => {
  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-18 bg-gradient-to-b from-black via-[#111111]/80 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-title mb-3">{eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
          {title}
        </h1>
        {tagline && (
          <p className="mt-4 text-xs md:text-sm text-white/80 max-w-xl">
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
