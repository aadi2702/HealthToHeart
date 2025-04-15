import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="ml-3 text-gray-800 font-bold text-xl">
                  HealthTo<span className="text-teal-600">Heart</span>
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#"
              className="text-gray-800 hover:text-teal-600 font-medium transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#features"
              className="text-gray-800 hover:text-teal-600 font-medium transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#pricing"
              className="text-gray-800 hover:text-teal-600 font-medium transition-colors relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-teal-600 font-medium transition-colors relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* <a href="#" className="px-5 py-2 font-medium text-teal-600 hover:text-teal-700 transition-colors">
              Log in
            </a> */}
            <a
              href="#contact"
              className="px-5 py-2 font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="px-4 py-3 space-y-2">
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
            >
              About
            </a>
            <div className="pt-2 space-y-2">
              <a
                href="#"
                className="block w-full px-4 py-2 text-center font-medium text-teal-600 hover:text-teal-700 transition-colors"
              >
                Log in
              </a>
              <a
                href="#"
                className="block w-full px-4 py-2 text-center font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-colors shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
