// import React, { useState, useEffect } from "react";
// import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       quote:
//         "Hospital X reduced patient wait times by 30% using this system. The dashboard analytics provided real-time insights that helped us identify bottlenecks and streamline our patient flow.",
//       name: "Dr. John Doe",
//       role: "Chief Medical Officer, Hospital X",
//       image: "https://i.ibb.co/nMnG0NRN/john-doe.jpg",
//       rating: 5,
//       hospital: "Metropolitan Medical Center",
//     },
//     {
//       quote:
//         "The AI insights have transformed our decision-making process. We've been able to predict patient admission rates with remarkable accuracy, allowing us to optimize staffing and resources.",
//       name: "Jane Smith",
//       role: "Hospital Administrator, Clinic Y",
//       image: "https://i.ibb.co/gFJ22G4N/jane-smith.jpg",
//       rating: 5,
//       hospital: "Westside Health Clinic",
//     },
//     {
//       quote:
//         "Seamless integration with our existing EHR system was a game-changer. The implementation team was responsive and ensured a smooth transition with minimal disruption to our daily operations.",
//       name: "Michael Johnson",
//       role: "IT Director, Medical Center Z",
//       image: "https://i.ibb.co/s99WGjVq/Michael-Chen.jpg",
//       rating: 5,
//       hospital: "Community Health Network",
//     },
//     {
//       quote:
//         "The blood bank management module has revolutionized how we track and manage our inventory. We've reduced waste by 25% while ensuring critical supplies are always available when needed.",
//       name: "Dr. Sarah Williams",
//       role: "Hematology Department Head",
//       image: "https://i.ibb.co/4wH4YJWy/Sarah-Johnson.jpg",
//       rating: 5,
//       hospital: "University Medical Center",
//     },
//     {
//       quote:
//         "HealthToHeart's appointment management has dramatically decreased our no-show rates. The automated reminders and easy rescheduling options have improved both patient satisfaction and clinic efficiency.",
//       name: "Robert Chen",
//       role: "Operations Manager",
//       image: "https://i.ibb.co/HTVzQHXj/Robert-Chen.jpg",
//       rating: 5,
//       hospital: "Eastern Regional Hospital",
//     },
//     {
//       quote:
//         "The reporting capabilities have given our board unprecedented visibility into hospital performance. We can now make data-driven decisions that improve both patient outcomes and our financial health.",
//       name: "Dr. Emily Rodriguez",
//       role: "Hospital Director",
//       image: "https://i.ibb.co/DfP4pQhz/Jessica-Rodriguez.jpg",
//       rating: 5,
//       hospital: "Pacific Northwest Healthcare",
//     },
//   ];

//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const slidesToShow = 3;
//   const totalSlides = testimonials.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         setActiveSlide(
//           (prev) => (prev + 1) % (totalSlides - (slidesToShow - 1))
//         );
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isPaused, totalSlides]);

//   const nextSlide = () => {
//     setActiveSlide((prev) => Math.min(prev + 1, totalSlides - slidesToShow));
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => Math.max(prev - 1, 0));
//   };

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   const renderStars = (rating) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => (
//         <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//       ));
//   };

//   return (
//     <section
//       id="testimonials"
//       className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-teal-50"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-1/4 -mt-20 hidden lg:block">
//         <div className="h-40 w-40 rounded-full bg-teal-100 opacity-30"></div>
//       </div>
//       <div className="absolute bottom-0 right-1/4 hidden lg:block">
//         <div className="h-64 w-64 rounded-full bg-teal-100 opacity-40"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
//             <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
//             Client Success Stories
//           </div>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
//             What Our <span className="text-teal-600">Clients Say</span>
//           </h2>
//           <p className="mt-4 text-xl text-gray-500">
//             See how healthcare providers across the country are transforming
//             patient care with our system
//           </p>
//         </div>

//         {/* Large quote icon */}
//         <div className="absolute top-40 left-0 transform -translate-x-1/2">
//           <Quote className="h-32 w-32 text-teal-100" />
//         </div>

//         {/* Testimonial slider */}
//         <div className="relative">
//           <div
//             className="overflow-hidden"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${
//                   activeSlide * (100 / slidesToShow)
//                 }%)`,
//               }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
//                   <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-teal-100">
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex">
//                         {renderStars(testimonial.rating)}
//                       </div>
//                       <Quote className="h-6 w-6 text-teal-400" />
//                     </div>

//                     <p className="text-gray-700 mb-8 italic leading-relaxed">
//                       "{testimonial.quote}"
//                     </p>

//                     <div className="flex items-center">
//                       <img
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         className="h-12 w-12 rounded-full object-cover border-2 border-teal-100"
//                       />
//                       <div className="ml-4">
//                         <p className="font-semibold text-gray-900">
//                           {testimonial.name}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {testimonial.role}
//                         </p>
//                         <p className="text-xs text-teal-600 mt-1">
//                           {testimonial.hospital}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation controls */}
//           <div className="flex justify-center mt-10 space-x-4">
//             <button
//               onClick={prevSlide}
//               disabled={activeSlide === 0}
//               className={`p-3 rounded-full shadow-md ${
//                 activeSlide === 0
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-teal-600 hover:bg-teal-50"
//               } transition-colors`}
//             >
//               <ArrowLeft className="h-5 w-5" />
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={activeSlide >= totalSlides - slidesToShow}
//               className={`p-3 rounded-full shadow-md ${
//                 activeSlide >= totalSlides - slidesToShow
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-teal-600 hover:bg-teal-50"
//               } transition-colors`}
//             >
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Indicator dots */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {Array.from({ length: totalSlides - (slidesToShow - 1) }).map(
//               (_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveSlide(index)}
//                   className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                     activeSlide === index ? "bg-teal-500 w-6" : "bg-teal-200"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               )
//             )}
//           </div>
//         </div>

//         {/* CTA card */}
//         <div className="mt-24 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-xl overflow-hidden">
//           <div className="px-8 py-12 md:px-12 md:py-16">
//             <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
//               <div>
//                 <h3 className="text-3xl font-bold text-white mb-4">
//                   Ready to Join Our Success Stories?
//                 </h3>
//                 <p className="text-teal-100 mb-8">
//                   Experience the same transformative results that healthcare
//                   providers across the country are achieving with our hospital
//                   management system.
//                 </p>
//                 <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//                   <a
//                     href="#contact"
//                     className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-teal-700 bg-white hover:bg-gray-50 shadow-md transition-colors"
//                   >
//                     Request a Demo
//                   </a>
//                   {/* <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-teal-500 transition-colors">
//                     Contact Sales
//                   </a> */}
//                 </div>
//               </div>
//               <div className="mt-10 md:mt-0 text-center">
//                 <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//                   <div className="flex items-center justify-center space-x-2">
//                     {[...Array(5)].map((_, i) => (
//                       <div key={i} className="flex items-center">
//                         <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-white font-medium mt-3 text-lg">
//                     Rated 4.9/5 from over 500 reviews
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Hospital X reduced patient wait times by 30% using this system. The dashboard analytics provided real-time insights that helped us identify bottlenecks and streamline our patient flow.",
      name: "Dr. John Doe",
      role: "Chief Medical Officer, Hospital X",
      image: "https://i.ibb.co/nMnG0NRN/john-doe.jpg",
      rating: 5,
      hospital: "Metropolitan Medical Center",
    },
    {
      quote:
        "The AI insights have transformed our decision-making process. We've been able to predict patient admission rates with remarkable accuracy, allowing us to optimize staffing and resources.",
      name: "Jane Smith",
      role: "Hospital Administrator, Clinic Y",
      image: "https://i.ibb.co/gFJ22G4N/jane-smith.jpg",
      rating: 5,
      hospital: "Westside Health Clinic",
    },
    {
      quote:
        "Seamless integration with our existing EHR system was a game-changer. The implementation team was responsive and ensured a smooth transition with minimal disruption to our daily operations.",
      name: "Michael Johnson",
      role: "IT Director, Medical Center Z",
      image: "https://i.ibb.co/s99WGjVq/Michael-Chen.jpg",
      rating: 5,
      hospital: "Community Health Network",
    },
    {
      quote:
        "The blood bank management module has revolutionized how we track and manage our inventory. We've reduced waste by 25% while ensuring critical supplies are always available when needed.",
      name: "Dr. Sarah Williams",
      role: "Hematology Department Head",
      image: "https://i.ibb.co/4wH4YJWy/Sarah-Johnson.jpg",
      rating: 5,
      hospital: "University Medical Center",
    },
    {
      quote:
        "HealthToHeart's appointment management has dramatically decreased our no-show rates. The automated reminders and easy rescheduling options have improved both patient satisfaction and clinic efficiency.",
      name: "Robert Chen",
      role: "Operations Manager",
      image: "https://i.ibb.co/HTVzQHXj/Robert-Chen.jpg",
      rating: 5,
      hospital: "Eastern Regional Hospital",
    },
    {
      quote:
        "The reporting capabilities have given our board unprecedented visibility into hospital performance. We can now make data-driven decisions that improve both patient outcomes and our financial health.",
      name: "Dr. Emily Rodriguez",
      role: "Hospital Director",
      image: "https://i.ibb.co/DfP4pQhz/Jessica-Rodriguez.jpg",
      rating: 5,
      hospital: "Pacific Northwest Healthcare",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = testimonials.length;
  const containerRef = useRef(null);

  // Handle responsive slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveSlide((prev) => {
          const maxSlide = totalSlides - slidesToShow;
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = totalSlides - slidesToShow;
    setActiveSlide((prev) => (prev >= maxSlide ? maxSlide : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-teal-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 -mt-20 hidden lg:block">
        <div className="h-40 w-40 rounded-full bg-teal-100 opacity-30"></div>
      </div>
      <div className="absolute bottom-0 right-1/4 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-teal-100 opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
            Client Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            What Our <span className="text-teal-600">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-500">
            See how healthcare providers across the country are transforming
            patient care with our system
          </p>
        </div>

        {/* Large quote icon */}
        <div className="absolute top-40 left-0 transform -translate-x-1/2 opacity-30 hidden lg:block">
          <Quote className="h-32 w-32 text-teal-100" />
        </div>

        {/* Testimonial slider */}
        <div className="relative" ref={containerRef}>
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`px-2 sm:px-3 md:px-4 flex-shrink-0`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white rounded-lg md:rounded-2xl shadow p-4 md:p-6 lg:p-8 h-full border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-teal-100">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                      <Quote className="h-4 w-4 md:h-6 md:w-6 text-teal-400" />
                    </div>

                    <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 italic leading-relaxed line-clamp-4 md:line-clamp-none">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-teal-100"
                      />
                      <div className="ml-3 md:ml-4">
                        <p className="font-semibold text-sm md:text-base text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-teal-600 mt-0.5 md:mt-1">
                          {testimonial.hospital}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-6 md:mt-10 space-x-4">
            <button
              onClick={prevSlide}
              disabled={activeSlide === 0}
              className={`p-2 md:p-3 rounded-full shadow-md ${
                activeSlide === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-teal-600 hover:bg-teal-50"
              } transition-colors`}
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={activeSlide >= totalSlides - slidesToShow}
              className={`p-2 md:p-3 rounded-full shadow-md ${
                activeSlide >= totalSlides - slidesToShow
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-teal-600 hover:bg-teal-50"
              } transition-colors`}
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-1.5 md:space-x-2">
            {Array.from({ length: totalSlides - slidesToShow + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "bg-teal-500 w-4 md:w-6" : "bg-teal-200"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* CTA card */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 md:px-12 md:py-16">
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-teal-100 mb-6 md:mb-8 text-sm md:text-base">
                  Experience the same transformative results that healthcare
                  providers across the country are achieving with our hospital
                  management system.
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg text-teal-700 bg-white hover:bg-gray-50 shadow-md transition-colors"
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
              <div className="mt-8 md:mt-0 text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4">
                  <div className="flex items-center justify-center space-x-1 md:space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Star className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400" />
                      </div>
                    ))}
                  </div>
                  <p className="text-white font-medium mt-2 md:mt-3 text-base md:text-lg">
                    Rated 4.9/5 from over 500 reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}