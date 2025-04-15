import React from 'react';

function Benefits() {
  const benefits = [
    'Improved operational efficiency',
    'Enhanced patient satisfaction',
    'Real-time data access',
    'AI-driven insights for better decision-making',
    'Scalable and customizable to your hospital’s needs',
  ];

  return (
    <section className="bg-teal-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-8">
          Benefits of Using Our System
        </h2>
        <ul className="list-disc list-inside mx-auto max-w-2xl text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2">{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;