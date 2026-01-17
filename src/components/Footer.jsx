import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-primary py-8 counter-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* 🔹 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">

          {/* LEFT COLUMN */}
          <div>
            <img
              src="/PS3-removebg-preview - Edited.png"
              alt="Perfect Solution Logo"
              className="h-24 w-auto rounded-xl mx-auto md:mx-0"
            />
            <p className="text-primary text-xl font-bold mt-3">
              PERFECT SOLUTION
            </p>
            <p className="text-primary text-xs font-semibold mt-2 max-w-xs mx-auto md:mx-0">
              Every Perfect Idea Comes with One Perfect Thought at a Time
            </p>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className="border-t md:border-t-0 pt-6 md:pt-0 border-secondary">
            <div className="space-y-6">

              {/* Address */}
              <div>
                <h4 className="text-lg font-bold text-secondary mb-2">
                  Address
                </h4>
                <p className="text-sm">Chrislarryus</p>
                <p className="text-sm">600 1st Ave Ste 102 - 2475</p>
                <p className="text-sm">Seattle, WA 98104</p>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-bold text-secondary mb-2">
                  Contact
                </h4>
                <a
                  href="tel:240-455-8148"
                  className="block text-sm hover:text-secondary transition-colors"
                >
                  240-455-8148
                </a>
                <a
                  href="mailto:perfectsolution@chrislarryus.com"
                  className="block text-sm hover:text-secondary transition-colors"
                >
                  perfectsolution@chrislarryus.com
                </a>

                {/* Social */}
                <div className="flex justify-center md:justify-start mt-4">
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
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-secondary pt-6 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center text-center sm:text-left">
          <p className="text-sm font-bold">
            © 2026 Perfect Solution. All Rights Reserved.
          </p>
          <div className="flex justify-center sm:justify-end space-x-6">
            <Link to="/terms-of-use" className="text-sm hover:text-secondary">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="text-sm hover:text-secondary">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
