import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const go = (path) => {
    navigate(path);
    setOpen(false); // close the mobile menu after navigating
  };

  const pillBtn =
    "text-white bg-brown-secondary py-2.5 px-4 text-xs rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out whitespace-nowrap";

  return (
    <nav className="w-[99%] fixed top-2 left-1/2 -translate-x-1/2 z-1000 bg-brown-secondary  border-b border-white rounded-xl">
      {/* Main bar */}
      <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6 lg:px-10 max-w-screen-2xl mx-auto">
        {/* Logo (+ brand name on mobile) */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img className="w-6 h-6 sm:w-7 sm:h-7" src="/logo.png" alt="Skillora logo" />
          <span className="md:hidden text-white font-bold tracking-wide">Skillora</span>
        </Link>

        {/* Brand name centered (desktop only) */}
        <span className="hidden md:block text-white font-bold tracking-wide text-lg">
          Skillora
        </span>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <div onClick={() => go("/plans")} className={`${pillBtn} border border-white/10`}>
            Explore Plan -&gt;
          </div>
          {token ? (
            <div
              onClick={() => go("/profile")}
              className="bg-brown-container p-1 rounded-full cursor-pointer"
            >
              <img className="w-8 h-8 rounded-full" src="/image.png" alt="Profile" />
            </div>
          ) : (
            <div onClick={() => go("/login")} className={`${pillBtn} border border-white/10` }>
              Get Started
            </div>
          )}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-60 border-t border-white/20" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 p-4">
          <div onClick={() => go("/plans")} className={`${pillBtn} text-center`}>
            Explore Plan -&gt;
          </div>
          {token ? (
            <div
              onClick={() => go("/profile")}
              className="flex items-center justify-center gap-2 bg-brown-container py-2 rounded-2xl cursor-pointer text-white text-xs"
            >
              <img className="w-6 h-6 rounded-full" src="/image.png" alt="" />
              Profile
            </div>
          ) : (
            <div onClick={() => go("/login")} className={`${pillBtn} text-center`}>
              Get Started
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;