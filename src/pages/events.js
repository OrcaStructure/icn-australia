import React from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import UpcomingShows from "../components/UpcomingShows";

const EventsPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Events"
        title="Upcoming Competitions"
        tagline="Explore the calendar of ICN events across Australia, from first-timer friendly shows to pro-level championships."
      />
      <UpcomingShows />
      <section className="bg-black py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-xs md:text-sm text-white/75 space-y-3">
          <p>
            Full event details including eligibility, running orders and stage
            times are released closer to each show date. Follow ICN Australia
            channels for announcements and updates.
          </p>
          <p>
            All events are strictly natural and drug-tested in line with ICN
            rules and regulations.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;

export const Head = () => <title>Events | ICN Australia</title>;
