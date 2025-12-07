import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-white/60">
        <p>© {new Date().getFullYear()} ICN Australia. All rights reserved.</p>
        <p className="uppercase tracking-[0.18em]">
          Natural • Drug Tested • World-Class Events
        </p>
      </div>
    </footer>
  );
};

export default Footer;
