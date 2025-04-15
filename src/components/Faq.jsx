import React, { useState, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation timelines vary based on your facility size and specific requirements. Small clinics can be up and running in as little as 2-4 weeks, while larger hospitals typically take 4-8 weeks. Our implementation specialists work closely with your team to create a custom migration plan that minimizes disruption to your operations.",
    },
    {
      question: "What kind of support do you offer after implementation?",
      answer:
        "We provide 24/7 technical support through multiple channels including phone, email, and live chat. All plans include comprehensive onboarding training for your staff. Pro and Enterprise plans also include a dedicated account manager who conducts quarterly reviews to ensure you are getting maximum value from the system.",
    },
    {
      question: "Is the system compliant with healthcare regulations?",
      answer:
        "Yes, our Hospital Management System is fully compliant with HIPAA, GDPR, HL7, and other regional healthcare regulations. We maintain SOC 2 Type II certification and undergo regular security audits. Our compliance team stays current with regulatory changes to ensure your system remains compliant as requirements evolve.",
    },
    {
      question:
        "Can your system integrate with our existing EHR and other software?",
      answer:
        "Absolutely. We support seamless integrations with major EHR systems like Epic, Cerner, AllScripts, and Meditech. Our open API architecture also allows for custom integrations with laboratory systems, billing software, pharmacy management systems, and other healthcare applications your facility may use.",
    },
    {
      question: "How customizable is your Hospital Management System?",
      answer:
        "Our HMS is highly customizable to accommodate your specific workflows. You can configure dashboards, reports, user roles, department structures, and more. Enterprise customers receive access to our professional services team for advanced customizations and development of specialized modules tailored to your unique requirements.",
    },
    {
      question: "What happens to our existing data during migration?",
      answer:
        "We take data migration very seriously. Our process includes thorough data mapping, validation, and testing before the final migration. We preserve your historical records while ensuring data integrity and security. After migration, we run parallel systems temporarily to ensure everything transitions smoothly with no data loss.",
    },
    {
      question: "How secure is your Hospital Management System?",
      answer:
        "Security is our top priority. We implement bank-level encryption for data at rest and in transit, role-based access controls, multi-factor authentication, and detailed audit logs of all system activities. Our infrastructure features redundant backups, disaster recovery protocols, and regular penetration testing to identify and address potential vulnerabilities.",
    },
    {
      question: "Do you offer flexible pricing options for different budgets?",
      answer:
        "Yes, we understand healthcare organizations have varying budgets and needs. Beyond our standard pricing tiers, we offer flexible payment options including monthly or annual billing. Non-profit healthcare providers and rural hospitals may qualify for special pricing programs. Contact our sales team for a personalized quote.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-32 bg-gradient-to-b from-white to-teal-50/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-teal-50/80 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-tl from-teal-50/80 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-24 right-12 hidden lg:block">
        <div className="h-24 w-24 rounded-full bg-teal-100/50 blur-xl"></div>
      </div>
      <div className="absolute bottom-24 left-12 hidden lg:block">
        <div className="h-32 w-32 rounded-full bg-teal-100/50 blur-xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 hidden lg:block">
        <div className="h-16 w-16 rounded-full bg-teal-200/30 blur-md"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with improved styling */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-50 text-teal-700 shadow-sm mb-6 border border-teal-100">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
            Got Questions?
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
            Frequently Asked <span className="text-teal-600 relative">Questions
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-teal-500/30 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our Hospital Management
            System. If you don't see what you're looking for, our team is just a
            click away.
          </p>
        </div>

        {/* Enhanced FAQ accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-100 ${
                index === faqs.length - 1 ? "border-b-0" : ""
              } ${openIndex === index ? "bg-teal-50/30" : "hover:bg-gray-50/80"} transition-all duration-300`}
            >
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none group transition-all"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors flex items-start">
                  <span className="text-teal-500 mr-4 mt-1 opacity-80">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 p-2 rounded-full ${openIndex === index ? "bg-teal-500 text-white" : "text-teal-500 bg-teal-50"} transition-all duration-300 transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                ref={el => contentRefs.current[index] = el}
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-9 border-l-2 border-teal-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}