// import React from 'react';

// const FeatureCard = ({ icon, title }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-40 w-40">
//       <div className="text-4xl mb-2">{icon}</div>
//       <p className="text-center text-gray-800 font-medium">{title}</p>
//     </div>
//   );
// };

// const FeaturesPage = () => {
//   const features = [
//     { icon: '🇧', title: 'Bootstrap' },
//     { icon: '📱', title: 'Fully Responsive' },
//     { icon: '💻', title: 'Pure Javascript' },
//     { icon: '💬', title: 'Quick Support' },
//     { icon: '📝', title: 'Well Documentation' },
//     { icon: '🌐', title: 'Cross Browser' },
//     { icon: '🛠️', title: 'SASS Support' },
//     { icon: '👤', title: 'Quick Support' },
//     { icon: '🌙', title: 'Dark & Light Layouts' },
//     { icon: '🎨', title: 'Premade Layouts' },
//     { icon: '↔️', title: 'RTL Layout' },
//     { icon: '✏️', title: 'Easy Customization' },
//     { icon: '🔄', title: 'Lifetime Free Updates' },
//     { icon: '💎', title: 'Quality Code' },
//     { icon: '⏱️', title: 'Speed Performance' },
//   ];

//   return (
//     <div className="min-h-screen bg-orange-50 p-10">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-orange-600 mb-2">Features of Template</h1>
//         <p className="text-gray-600 text-lg mb-12">All the features every great theme has.</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} icon={feature.icon} title={feature.title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesPage;

import React from "react";

const features = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", title: "Bootstrap" },
  { icon: "https://img.icons8.com/color/96/responsive.png", title: "Fully Responsive" },
  { icon: "https://img.icons8.com/color/96/javascript--v1.png", title: "Pure Javascript" },
  { icon: "https://img.icons8.com/emoji/96/technologist-light-skin-tone.png", title: "Quick Support" },
  { icon: "https://img.icons8.com/color/96/document--v1.png", title: "Well Documentation" },
  { icon: "https://img.icons8.com/color/96/smartphone-tablet.png", title: "Cross Browser" },
  { icon: "https://img.icons8.com/color/96/sass.png", title: "SASS Support" },
  { icon: "https://img.icons8.com/emoji/96/technologist-light-skin-tone.png", title: "Quick Support" },
  { icon: "https://img.icons8.com/color/96/contrast--v1.png", title: "Dark & Light Layouts" },
  { icon: "https://img.icons8.com/color/96/edit-property.png", title: "Premade Layouts" },
  { icon: "https://img.icons8.com/color/96/switch-layout.png", title: "RTL Layout" },
  { icon: "https://img.icons8.com/color/96/settings--v1.png", title: "Easy Customization" },
  { icon: "https://img.icons8.com/color/96/available-updates.png", title: "Lifetime Free Updates" },
  { icon: "https://img.icons8.com/color/96/source-code.png", title: "Quality Code" },
  { icon: "https://img.icons8.com/color/96/speed.png", title: "Speed Performance" }
];

export default function Features() {
  return (
    <div className="bg-[#fff7f0] py-16 px-6 md:px-16 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f28]">
          Features of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">Template</span>
        </h2>
        <p className="text-gray-500 mt-2">All the features every great theme has.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center justify-center transition duration-300 ease-in-out"
          >
            <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain mb-4" />
            <p className="text-center text-sm text-[#0f0f28] font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
