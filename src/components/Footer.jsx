import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const footerPosition = document.getElementById("footer")?.offsetTop;
      const windowHeight = window.innerHeight;

      if (footerPosition && scrolled > footerPosition - windowHeight + 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case footer is already in view
    setTimeout(() => handleScroll(), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribeStatus("submitting");

    // Simulate subscription
    setTimeout(() => {
      setSubscribeStatus("success");
      setTimeout(() => {
        setSubscribeStatus("idle");
        setEmail("");
      }, 3000);
    }, 1500);
  };

  return (
    <footer
      id="footer"
      className="relative pt-16 pb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-900/20 to-transparent"></div>
      <div className="absolute top-24 right-24 hidden lg:block">
        <div className="h-32 w-32 rounded-full bg-teal-500/10 blur-xl"></div>
      </div>
      <div className="absolute bottom-24 left-24 hidden lg:block">
        <div className="h-40 w-40 rounded-full bg-teal-500/10 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top content */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="ml-3 text-white font-bold text-xl">
                HealthTo<span className="text-teal-600">Heart</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the healthcare revolution with intelligent systems that
              streamline operations, enhance patient experiences, and drive
              better health outcomes.
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/company/requin-solutions-pvt-ltdd/"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/requin_solutions/"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/requin_solutions/"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h5 className="text-base font-semibold text-white mb-5">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors group flex items-center"
                  >
                    <span className="absolute h-1 w-0 bg-teal-400 rounded-full group-hover:w-2 -ml-3 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h5 className="text-base font-semibold text-white mb-5">
              Contact Us
            </h5>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-700 flex items-center justify-center text-teal-400">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h5 className="text-white font-medium">Visit Us</h5>
                  <p className="mt-1 text-white">
                    First Floor, 6/397,
                    <br />
                    opposite north western railway headquarters, Sector 6,
                    <br />
                    Malviya Nagar, Jaipur, Rajasthan 302017
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-700 flex items-center justify-center text-teal-400">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h5 className="text-white font-medium">Call Us</h5>
                  <a
                    href="tel:+919352220187"
                    className="mt-1 text-white hover:text-teal-600 transition-colors"
                  >
                    +91 9352220187
                  </a>
                  <p className="text-sm text-white">Mon-Sat, 10am-6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-700 flex items-center justify-center text-teal-400">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h5 className="text-white font-medium">Email Us</h5>
                  <a
                    href="mailto:info@requinsolutions.com"
                    className="mt-1 text-white hover:text-teal-600 transition-colors"
                  >
                    info@requinsolutions.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HealthToHeart. All rights reserved.
          </p>

          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm relative group"
            >
              Privacy Policy
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm relative group"
            >
              Terms of Service
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm relative group"
            >
              Cookie Policy
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
