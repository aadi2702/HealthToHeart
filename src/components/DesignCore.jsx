import React from "react";
import { FaMobileAlt, FaCode, FaWeightHanging, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt className="text-white text-xl" />,
    title: "Compatible to All Mobile Devices",
    desc: "Application being compatible with a wide array of mobile devices, providing a consistent and user-friendly experience for all users.",
    bgColor: "bg-blue-600",
  },
  {
    icon: <FaCode className="text-white text-xl" />,
    title: "Clean & Well Commented Codes",
    desc: "Adhering to best practices, Our developers created codes are clean & well-commented but also easier to understand.",
    bgColor: "bg-indigo-700",
  },
  {
    icon: <FaWeightHanging className="text-white text-xl" />,
    title: "Powerful & Lightweight",
    desc: "Creating powerful & lightweight app involves a careful balance between providing robust features & ensuring optimal performance.",
    bgColor: "bg-fuchsia-600",
  },
  {
    icon: <FaGlobe className="text-white text-xl" />,
    title: "Cross Browser Compatible",
    desc: "Regular testing on mobile browsers (Chrome, Safari, Firefox, Edge) ensures consistent performance and appearance.",
    bgColor: "bg-green-600",
  },
];

const DesignAtTheCore = () => {
  return (
    <section className="bg-[#fff6f1] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-10">
          <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mb-4 border-4 border-orange-200"></span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Design at the core:{" "}
            <span className="text-orange-500">built-in</span>,{" "}
            <span className="text-red-500">not bolted on</span>.
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Conduct testing operations on SaaS, on-premise or private cloud models. Meet industry privacy regulations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left flex gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor}`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-md mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignAtTheCore;
