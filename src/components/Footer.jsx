import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="bg-white text-primary py-8 counter-base">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* 🔹 3 COLUMN GRID */}
          <div className="grid md:grid-cols-3 gap-8 mb-6 items-start">

            {/* LEFT COLUMN */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-extrabold text-secondary">
                PERFECT SOLUTION
              </h3>
              <p className="text-primary text-base mt-2">
                Every Perfect Idea Comes with One Perfect Thought at a Time
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                <a 
                  href="http://www.linkedin.com/in/larry-boyd-2a01a027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="space-y-6 text-center">
              <h4 className="text-lg font-bold text-secondary mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-secondary">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-secondary">Services</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-secondary">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-secondary">Contact</Link>
                </li>
              </ul>

              <h4 className="text-lg font-bold text-secondary mt-6 mb-4">
                Legal
              </h4>
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:text-secondary"
              >
                Terms & Policy
              </button>
            </div>

            {/* RIGHT COLUMN — LOGO FIXED */}
            <div className="flex justify-center md:justify-center">
              <img
                src="/PS3-removebg-preview.png"
                alt="Perfect Solution Logo"
                className="h-70 w-70 p-4 rounded-xl "
              />
            </div>

          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-secondary pt-6 text-center">
            <p className="text-sm font-bold text-primary">
              © 2026 Perfect Solution. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* TERMS MODAL */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">
                Terms & Policy
              </h3>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <h4 className="text-lg font-bold text-primary mb-3">Terms & Conditions</h4>
            <p className="mb-3">
              Welcome to Perfect Solution. These terms outline the rules for using our services.
            </p>
            <p className="mb-3">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
            <p className="mb-3">
              We reserve the right to update these terms at any time without prior notice.
            </p>
            <h4 className="text-lg font-bold text-primary mb-3 mt-4">Privacy Policy</h4>
            <p className="mb-3">
              We respect your privacy and are committed to protecting your personal information.
            </p>
            <p className="mb-3">
              Any personal information collected will be used solely for the purpose of providing our services.
            </p>
            <p className="mb-3">
              We do not share your information with third parties without your consent.
            </p>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowTermsModal(false)}
                className="bg-secondary text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
