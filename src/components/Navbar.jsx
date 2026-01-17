import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white text-primary sticky top-0 z-50 w-full border-b border-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/PS3-removebg-preview - Edited.png"
            alt="Perfect Solution Logo"
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          <div className="leading-tight">
            <h1 className="text-lg sm:text-2xl font-extrabold text-secondary">
              PERFECT SOLUTION
            </h1>
            {/* Hide tagline on mobile */}
            <p className="hidden sm:block text-xs font-medium text-secondary">
              Every Perfect Idea Comes with One Perfect Thought at a Time
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex space-x-6 font-bold">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Shop", path: "/shop" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`pb-1 border-b-2 transition-all duration-300
                ${
                  location.pathname === item.path
                    ? "text-secondary border-secondary"
                    : "border-transparent hover:border-secondary hover:text-secondary"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-secondary">
          <div className="flex flex-col px-6 py-6 space-y-4 font-bold text-center">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Shop", path: "/shop" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-white text-lg transition-colors
                  ${
                    location.pathname === item.path
                      ? "text-secondary"
                      : "hover:text-secondary"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
