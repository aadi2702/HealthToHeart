import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds of showing success
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50 py-24"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-teal-100 opacity-20 blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-200 opacity-20 blur-3xl -ml-48 -mb-48"></div>
      <div className="absolute top-1/3 left-1/4 h-16 w-16 rounded-full bg-teal-300 opacity-20 blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5 border border-teal-100 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Contact <span className="text-teal-600">Our Team</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We're here to answer your questions about our hospital management
            system and help you transform your healthcare facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full transform transition-all hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-md">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Call Us
                    </p>
                    <a
                      href="tel:+919352220187"
                      className="mt-1 text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      +91 9352220187
                    </a>
                    <p className="text-sm text-gray-500">Mon-Sat, 10am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-md">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@requinsolutions.com"
                      className="mt-1 text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      info@requinsolutions.com
                    </a>
                    <p className="text-sm text-gray-500">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-md">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Visit Us
                    </p>
                    <p className="mt-1 text-gray-600">
                      First Floor, 6/397,
                      <br />
                      opposite north western railway headquarters, Sector 6,
                      <br />
                      Malviya Nagar, Jaipur, Rajasthan 302017
                    </p>
                    <p className="text-sm text-gray-500">
                      Open for appointments: 10am-7pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/requin_solutions/"
                    className="h-12 w-12 rounded-full bg-white border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-md flex items-center justify-center text-teal-600 transition-all duration-300 hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/requin_solutions/"
                    className="h-12 w-12 rounded-full bg-white border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-md flex items-center justify-center text-teal-600 transition-all duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/requin-solutions-pvt-ltdd/"
                    className="h-12 w-12 rounded-full bg-white border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-md flex items-center justify-center text-teal-600 transition-all duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all hover:shadow-2xl">
              <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-5 px-6">
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                  <h3 className="ml-3 text-xl font-semibold text-white">
                    Send us a message
                  </h3>
                </div>
              </div>

              <div className="p-8">
                {formStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="flex justify-center mb-6">
                      <div className="h-20 w-20 bg-teal-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-10 w-10 text-teal-600" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                      Thank You!
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Your message has been sent successfully.
                    </p>
                    <p className="text-gray-500">
                      Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          required
                        >
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Technical Support">
                            Technical Support
                          </option>
                          <option value="Demo Request">Demo Request</option>
                          <option value="Pricing Question">
                            Pricing Question
                          </option>
                          <option value="Partnership">Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto ${
                          formStatus === "submitting"
                            ? "opacity-75 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {formStatus === "submitting" ? (
                          <>Processing...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-5 px-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-white" />
                <h3 className="ml-3 text-xl font-semibold text-white">
                  Find Us
                </h3>
              </div>
            </div>

            {/* Map with better height and cleaner look */}
            <div className="w-full h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.921530995783!2d75.8135947!3d26.842447999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66c82889ff3%3A0x84819a30be0867b1!2sRequin%20solutions%20pvt.%20ltd!5e0!3m2!1sen!2sin!4v1744185383499!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
