import React from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const BecomeAProPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Athletes"
        title="Become an ICN Athlete"
        tagline="Step on stage with Australia’s pinnacle of natural bodybuilding and start your ICN journey."
      />

      <section className="bg-black py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-xs md:text-sm text-white/80">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
              How to Get Started
            </h2>
            <p>
              Register for an ICN membership, choose your division and select an
              upcoming show. Your coach or local ICN representative can help
              confirm the most suitable categories for your physique and
              experience level.
            </p>
            <p>
              From posing classes to show-day logistics, the ICN community is
              built to support first-time competitors as well as established
              athletes chasing pro status.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>→ Membership & Registration</li>
              <li>→ Athlete Handbook</li>
              <li>→ Rules & Regulations</li>
              <li>→ Contact Your State President</li>
            </ul>
            <button className="btn-primary w-full mt-4">
              Join ICN Australia
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#111111] to-black py-12 md:py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-xs md:text-sm text-white/80 space-y-3">
          <p className="uppercase tracking-[0.18em] text-[#d4af37] text-xs">
            Pro Pathway
          </p>
          <p>
            Pro cards are awarded at selected ICN events. Athletes who achieve
            consistent, outstanding results at the top of their divisions may be
            invited to compete as ICN professionals.
          </p>
          <p>
            Stay updated with the latest qualification criteria and pro-qualifying
            show announcements via ICN channels.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeAProPage;

export const Head = () => <title>Become a Pro | ICN Australia</title>;
