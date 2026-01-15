import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-primary px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg w-full border-b border-secondary">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/PS3-removebg-preview - Edited.png" alt="Perfect Solution Logo" className="h-10 w-10" />
        <div>
          <h1 className="text-2xl font-extrabold text-secondary">PERFECT SOLUTION</h1>
          <p className="text-xs font-medium text-secondary">Every Perfect Idea Comes with One Perfect Thought at a Time</p>
        </div>
      </Link>

      {/* Desktop Navigation - Hidden on Mobile */}
      <div className="hidden md:flex space-x-6 font-bold">
        <Link to="/" className={`hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1 ${location.pathname === '/' ? 'text-secondary' : ''}`}>Home</Link>
        <Link to="/services" className={`hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1 ${location.pathname === '/services' ? 'text-secondary' : ''}`}>Services</Link>
        <Link to="/shop" className={`hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1 ${location.pathname === '/shop' ? 'text-secondary' : ''}`}>Shop</Link>
        <Link to="/about" className={`hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1 ${location.pathname === '/about' ? 'text-secondary' : ''}`}>About</Link>
        <Link to="/contact" className={`hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1 ${location.pathname === '/contact' ? 'text-secondary' : ''}`}>Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMenu}
          className="text-primary focus:outline-none p-2 rounded-lg hover:bg-secondary hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Hidden by default */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-primary py-4 px-6 shadow-lg z-50">
          <div className="flex flex-col space-y-4 font-bold">
            <Link 
              to="/" 
              className={`text-white hover:text-secondary transition-colors duration-300 ${location.pathname === '/' ? 'text-secondary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-white hover:text-secondary transition-colors duration-300 ${location.pathname === '/services' ? 'text-secondary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/shop" 
              className={`text-white hover:text-secondary transition-colors duration-300 ${location.pathname === '/shop' ? 'text-secondary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-secondary transition-colors duration-300 ${location.pathname === '/about' ? 'text-secondary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-white hover:text-secondary transition-colors duration-300 ${location.pathname === '/contact' ? 'text-secondary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
