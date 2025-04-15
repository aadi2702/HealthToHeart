import React from "react";
import {
  Shield,
  Lightbulb,
  Link,
  Settings,
  HeadsetIcon,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Security & Compliance",
      description:
        "Streamline operations with real-time data access while maintaining HIPAA compliance and robust data protection.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Intelligent Decision Support",
      description:
        "AI-driven insights help clinical and administrative staff make better decisions with predictive analytics.",
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Seamless Integration",
      description:
        "Effortlessly connects with your existing hospital systems including EHR, billing, and laboratory management.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Highly Customizable",
      description:
        "Tailor the platform to fit your hospital's unique workflows, departments, and specialties.",
    },
    {
      icon: <HeadsetIcon className="h-6 w-6" />,
      title: "24/7 Dedicated Support",
      description:
        "Comprehensive technical support and specialized training included with every implementation.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white"></div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 -mb-32 -mr-32 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-teal-100 opacity-50"></div>
      </div>
      <div className="absolute top-1/3 left-0 -ml-16 hidden lg:block">
        <div className="h-32 w-32 rounded-full bg-teal-200 opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
            Why HealthToHeart
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Why <span className="text-teal-600">Choose Us</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover the unique advantages of our Hospital Management System
            that set us apart from the rest
          </p>
        </div>

        {/* Main content */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column with advantages */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-100 text-teal-600">
                    {reason.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{reason.description}</p>
                </div>
              </div>
            ))}

            {/* <div className="pt-6">
              <a href="#" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
                Learn more about our advantages
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Right column with stats/testimonial */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              {/* Shadow elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="px-6 py-8 sm:p-10">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mx-auto mb-6">
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    Industry-Leading Results
                  </h3>

                  <div className="grid grid-cols-2 gap-8 mt-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600">
                        98%
                      </div>
                      <div className="mt-2 text-gray-500">
                        Customer Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600">
                        35%
                      </div>
                      <div className="mt-2 text-gray-500">
                        Reduction in Admin Time
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600">
                        40+
                      </div>
                      <div className="mt-2 text-gray-500">
                        Hospital Partners
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600">
                        24/7
                      </div>
                      <div className="mt-2 text-gray-500">
                        Support Available
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-100 pt-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="/api/placeholder/48/48"
                          alt="Hospital logo"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-5 w-5 text-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Based on 200+ reviews from our hospital partners
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      Ready to transform your hospital operations?
                    </span>
                    <a
                      href="#contact"
                      className="px-4 py-2 bg-white text-teal-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
