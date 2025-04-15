import React, { useState } from "react";

// Sample data to simulate image paths & categories
const modulesData = [
  {
    category: "Applications",
    title: "Chat",
    image: "/images/chat.png",
  },
  {
    category: "Applications",
    title: "Audio Call",
    image: "/images/audio-call.png",
  },
  {
    category: "Applications",
    title: "Video Call",
    image: "/images/video-call.png",
  },
  {
    category: "Applications",
    title: "Calendar",
    image: "/images/calendar.png",
  },
  {
    category: "Applications",
    title: "File Manager",
    image: "/images/file-manager.png",
  },
  {
    category: "Applications",
    title: "Social Feed",
    image: "/images/social-feed.png",
  },
  {
    category: "Inventory",
    title: "Inventory Dashboard",
    image: "/images/inventory.png",
  },
  {
    category: "Sales",
    title: "Sales Dashboard",
    image: "/images/sales.png",
  },
  {
    category: "HRM",
    title: "HR Management",
    image: "/images/hrm.png",
  },
  {
    category: "Finance & Accounts",
    title: "Finance",
    image: "/images/finance.png",
  },
  {
    category: "Reports",
    title: "Reports Overview",
    image: "/images/reports.png",
  },
  {
    category: "Settings",
    title: "Settings Panel",
    image: "/images/settings.png",
  },
  {
    category: "Other Pages",
    title: "Help Center",
    image: "/images/help-center.png",
  },
];

const categories = [
  "Applications",
  "Inventory",
  "Sales",
  "HRM",
  "Finance & Accounts",
  "Reports",
  "Settings",
  "Other Pages",
];

const AdminModules = () => {
  const [activeCategory, setActiveCategory] = useState("Applications");

  const filteredModules = modulesData.filter(
    (mod) => mod.category === activeCategory
  );

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Unlimited Admin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Modules & Layouts
          </span>
        </h2>
        <p className="text-gray-600 mb-10">
          POS & Inventory Management Admin Dashboard
        </p>

        {/* Filter Tabs */}
        <div className="bg-white shadow-md rounded-md flex flex-wrap justify-center items-center gap-3 px-4 py-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-1 rounded-md text-sm font-medium border ${
                activeCategory === cat
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {filteredModules.map((mod, idx) => (
            <div key={idx} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={mod.image}
                alt={mod.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-3 text-center font-medium text-gray-700">
                {mod.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminModules;
