import React from "react";

const bulletClasses =
  "text-xs md:text-sm text-white/80 leading-relaxed";

const CategoriesSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#111111] to-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-3 mb-8">
          <h2 className="section-heading text-center">
            Categories
          </h2>
          <p className="text-xs md:text-sm text-center text-white/80 max-w-3xl mx-auto">
            Explore the ICN categories and see where your physique
            best fits. Athletes can enter multiple eligible divisions
            under ICN crossover rules, helping you maximise stage time
            and competitive opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div>
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] mb-3 text-[#d4af37]">
              Men&apos;s Divisions
            </h3>
            <ul className="space-y-1.5">
              <li className={bulletClasses}>Bodybuilding</li>
              <li className={bulletClasses}>Physique</li>
              <li className={bulletClasses}>Classic</li>
              <li className={bulletClasses}>Rookie & First Timer</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] mb-3 text-[#d4af37]">
              Women&apos;s Divisions
            </h3>
            <ul className="space-y-1.5">
              <li className={bulletClasses}>Bikini</li>
              <li className={bulletClasses}>Fitness</li>
              <li className={bulletClasses}>Figure</li>
              <li className={bulletClasses}>Mommy / 30+ / 40+</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] mb-3 text-[#d4af37]">
              Pathways
            </h3>
            <ul className="space-y-1.5">
              <li className={bulletClasses}>Junior & Teen</li>
              <li className={bulletClasses}>Novice & Open</li>
              <li className={bulletClasses}>Pro Qualifiers</li>
              <li className={bulletClasses}>Team / Mixed pairs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
