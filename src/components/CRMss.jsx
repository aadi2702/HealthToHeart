import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CRMScreenshots = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
  return (
    <section id="screenshots" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">Explore Our CRM Interface</h2>
        <Slider {...settings}>
          <div><img src="crm-screenshot1.jpg" alt="CRM Dashboard" className="w-full rounded-lg" /></div>
          <div><img src="crm-screenshot2.jpg" alt="CRM Contacts" className="w-full rounded-lg" /></div>
          <div><img src="crm-screenshot3.jpg" alt="CRM Reports" className="w-full rounded-lg" /></div>
        </Slider>
      </div>
    </section>
  );
};

export default CRMScreenshots;