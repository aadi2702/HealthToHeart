import React from 'react';

function CTA() {
  return (
    <section className="bg-teal-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Revolutionize Your Hospital Management?
        </h2>
        <p className="mb-8">Request a demo today and see the difference!</p>
        <a
          href="#contact"
          className="bg-white text-teal-500 px-6 py-3 rounded-full font-semibold hover:bg-teal-100"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
}

export default CTA;