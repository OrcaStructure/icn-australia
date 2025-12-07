import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/logo-icn.png";

const navLinks = [
  { to: "/events", label: "Events" },
  { to: "/categories", label: "Categories" },
  { to: "/become-a-pro", label: "Become a Pro" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-gradient-to-b from-black/90 via-black/70 to-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 lg:py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="ICN Australia"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.18em]">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              activeClassName="text-[#d4af37]"
              className="hover:text-[#d4af37] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA (hamburger takes its place on mobile) */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-[2px] w-6 bg-white transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="py-1"
                activeClassName="text-[#d4af37]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
