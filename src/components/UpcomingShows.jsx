import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    month: "Mar",
    dates: "21-22",
    title: "ICN VIC",
    subtitle: "2025 Australasian Championships",
    location: ">> Melbourne Convention Centre, Southbank, VIC",
    href: "#"
  },
  {
    month: "Apr",
    dates: "19",
    title: "ICN NSW",
    subtitle: "2025 North Coast Classic",
    location: ">> NEX Convention Centre, Newcastle, NSW",
    href: "#"
  },
  {
    month: "Apr",
    dates: "25",
    title: "ICN WA",
    subtitle: "2025 West Coast Supershow",
    location: ">> Perth Convention & Exhibition Centre, Perth, WA",
    href: "#"
  }
];

const UpcomingShows = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 border-y border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
            <span>
              Upcoming <span className="text-[#f0cf63]">Shows</span>
            </span>
          </h1>
          <p className="mt-2 text-white">
            Experience a <span className="font-semibold">WORLD-CLASS</span>{" "}
            experience at every level.
          </p>
        </div>

        {/* Cards row – scrollable on mobile like a carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 md:overflow-visible md:grid md:grid-cols-3">
            {events.map(event => (
              <EventCard key={event.subtitle} {...event} />
            ))}
          </div>

          {/* Decorative chevrons (desktop) */}
          <div className="hidden md:flex items-center justify-between absolute inset-y-0 -left-10 -right-10 pointer-events-none">
            <div className="pointer-events-auto bg-black/60 rounded-full p-2 border border-white/20">
              <div className="rotate-180 text-white/70 text-3xl font-light">
                ❯
              </div>
            </div>
            <div className="pointer-events-auto bg-black/60 rounded-full p-2 border border-white/20">
              <div className="text-white/70 text-3xl font-light">
                ❯
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;
