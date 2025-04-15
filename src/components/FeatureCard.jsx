import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-teal-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-teal-500 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard; 