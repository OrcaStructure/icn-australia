import React from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CategoriesSection from "../components/CategoriesSection";

const CategoriesPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Categories"
        title="Divisions & Pathways"
        tagline="From first timers to seasoned pros, ICN categories are designed to showcase every natural physique."
      />
      <CategoriesSection />

      <section className="bg-black py-12 md:py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-xs md:text-sm text-white/80">
          <div>
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] mb-3 text-[#d4af37]">
              Eligibility & Guidelines
            </h2>
            <p className="mb-3">
              Each division has specific criteria for muscularity, conditioning,
              stage presence and posing. Athletes should review category
              guidelines carefully to ensure the best division selection.
            </p>
            <p>
              Crossover into multiple suitable divisions can maximise your stage
              time and exposure to judges.
            </p>
          </div>
          <div>
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] mb-3 text-[#d4af37]">
              Natural & Drug-Tested
            </h2>
            <p className="mb-3">
              ICN maintains strict banned substance lists and testing protocols
              to protect athletes and the integrity of the sport.
            </p>
            <p>
              Further details, including specific drug-testing processes and
              sanction information, can be found in the official ICN rules.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoriesPage;

export const Head = () => <title>Categories | ICN Australia</title>;
