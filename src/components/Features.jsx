import React from "react";
import {
  BarChart3,
  Calendar,
  Droplets,
  Building2,
  Bed,
  Utensils,
  Clock,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Dashboard with AI Insights",
      description:
        "View all hospital data with AI-driven recommendations and summaries.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Management",
      description:
        "Easily manage doctor and patient schedules with intuitive calendar views.",
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Blood Bank Management",
      description:
        "Track blood units and groups efficiently with real-time inventory updates.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Department Management",
      description:
        "Oversee departments like billing, inventory, and labs from a single dashboard.",
    },
    {
      icon: <Bed className="h-6 w-6" />,
      title: "Room and Bed Tracking",
      description:
        "Monitor room availability and bed capacity in real-time with visual indicators.",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Meal Plans",
      description:
        "Customize and manage patient meal plans based on dietary requirements.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Appointment Management",
      description:
        "Streamline appointment scheduling with automated reminders and follow-ups.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Reports",
      description:
        "Generate comprehensive financial and operational reports with exportable formats.",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -mt-32 -ml-32 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-teal-50 opacity-70"></div>
      </div>
      <div className="absolute bottom-1/4 right-0 -mr-32 hidden lg:block">
        <div className="h-96 w-96 rounded-full bg-teal-50 opacity-70"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 hidden lg:block">
        <div className="h-16 w-16 rounded-full bg-teal-100 opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
            Comprehensive Solution
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Key <span className="text-teal-600">Features</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to manage your hospital efficiently and enhance
            patient care
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 group hover:border-teal-100"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-100 text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Testimonial or Highlight */}
        <div className="mt-24 bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-sm border border-teal-100">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-100 text-teal-700 mb-5">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                Why Choose HealthToHeart
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted by Leading{" "}
                <span className="text-teal-600">Healthcare</span> Providers
              </h3>
              <p className="text-gray-500 mb-6">
                Our system is designed by healthcare professionals for
                healthcare professionals, combining cutting-edge technology with
                industry best practices.
              </p>

              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 text-teal-600">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Reduce administrative workload by up to 35%
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 text-teal-600">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Improve patient satisfaction scores by 28%
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 text-teal-600">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Decrease operational costs by up to 20%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-25"></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/api/placeholder/48/48"
                      alt="User avatar"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Dr. Sarah Johnson
                      </h4>
                      <p className="text-sm text-gray-500">
                        Chief Medical Officer, Metro Hospital
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "Implementing HealthToHeart has transformed our hospital
                    operations. The intuitive interface and comprehensive
                    features have allowed our staff to focus more on patient
                    care rather than paperwork."
                  </blockquote>

                  <div className="mt-6 flex">
                    <div className="flex text-teal-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
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
