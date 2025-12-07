import React from "react";

const EventCard = ({
  month,
  dates,
  title,
  subtitle,
  location,
  href
}) => {
  return (
    <article className="flex flex-col justify-between border border-white/20 bg-black/40 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] px-6 py-7 md:px-8 md:py-9 min-w-[260px] md:min-w-[320px]">
      <div>
        <div className="flex flex-col mb-4">
          <span className="text-2xl md:text-3xl font-extrabold uppercase bg-white text-black px-2 py-1 w-max leading-none">
            {month}
          </span>
          <span className="mt-3 text-2xl md:text-3xl font-extrabold">
            {dates}
          </span>
        </div>

        <h3 className="mt-4 text-sm md:text-base font-extrabold uppercase tracking-wide text-[#d4af37]">
          {title}
        </h3>
        <p className="mt-1 text-xs md:text-sm uppercase tracking-wide text-white">
          {subtitle}
        </p>
        <p className="mt-2 text-[11px] md:text-xs text-white/70">
          {location}
        </p>
      </div>

      <div className="mt-6">
        <a
          href={href}
          className="inline-flex items-center justify-between w-full text-xs md:text-sm uppercase tracking-[0.18em] border border-white/40 px-4 py-3 hover:bg-white hover:text-black transition-colors"
        >
          <span>More Event Info</span>
          <span className="text-lg leading-none">↗</span>
        </a>
      </div>
    </article>
  );
};

export default EventCard;
