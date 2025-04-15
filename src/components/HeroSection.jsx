// import React from 'react';
// import { ArrowRight, Check, Activity, ShieldCheck, BarChart2 } from 'lucide-react';
// import HMS from '../assets/HMS_Dash.png'; 

// export default function HeroSection() {
//   return (
//     <div className="relative overflow-hidden bg-white">
//       {/* Background elements */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-white opacity-70"></div>
//       <div className="absolute bottom-0 left-0 -mb-32 -ml-32 hidden lg:block">
//         <div className="h-64 w-64 rounded-full bg-teal-50 opacity-70"></div>
//       </div>
//       <div className="absolute top-1/4 right-1/4 hidden lg:block">
//         <div className="h-16 w-16 rounded-full bg-teal-100 opacity-50"></div>
//       </div>
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 lg:pr-8">
//             <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
//               <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
//               Next-Gen Hospital Management
//             </div>
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//               Transform Your <span className="text-teal-600">Healthcare</span> Operations
//             </h1>
//             <p className="mt-6 text-lg text-gray-500 leading-relaxed">
//               Our intelligent hospital management system streamlines your workflows, 
//               enhances patient care, and brings unparalleled efficiency to your healthcare facility.
//             </p>
            
//             <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//               <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300">
//                 Get Started 
//               </a>
//               <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300">
//                 See how it works <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//             </div>
            
//             <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
//                     <Activity className="h-5 w-5" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-base font-medium text-gray-900">Real-time Analytics</p>
//                   <p className="mt-1 text-sm text-gray-500">Make data-driven decisions</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
//                     <ShieldCheck className="h-5 w-5" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-base font-medium text-gray-900">HIPAA Compliant</p>
//                   <p className="mt-1 text-sm text-gray-500">Secure and protected data</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
//                     <BarChart2 className="h-5 w-5" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-base font-medium text-gray-900">Performance Tracking</p>
//                   <p className="mt-1 text-sm text-gray-500">Optimize your operations</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
//                     <Check className="h-5 w-5" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-base font-medium text-gray-900">24/7 Support</p>
//                   <p className="mt-1 text-sm text-gray-500">Always available for you</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right section with image instead of dashboard */}
//           <div className="mt-16 lg:mt-0 lg:col-span-6">
//             <div className="relative mx-auto max-w-lg lg:max-w-none">
//               {/* Shadow elements */}
//               <div className="absolute top-6 -left-6 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 lg:w-40 lg:h-40"></div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 lg:w-40 lg:h-40"></div>
              
//               {/* Image placeholder - replace with your actual image */}
//               <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
//                 <img 
//                   src={HMS} 
//                   alt="Hospital Management System" 
//                   className="w-full h-auto object-cover rounded-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { ArrowRight, Check, Activity, ShieldCheck, BarChart2 } from 'lucide-react';
import HMS from '../assets/HMS_Dash.png'; 


export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-white opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-teal-50 opacity-70"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 hidden lg:block">
        <div className="h-16 w-16 rounded-full bg-teal-100 opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:pr-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
              Next-Gen Hospital Management
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Transform Your <span className="text-teal-600">Healthcare</span> Operations
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Our intelligent hospital management system streamlines your workflows, 
              enhances patient care, and brings unparalleled efficiency to your healthcare facility.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Free
              </a>
              <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300">
                Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Real-time Analytics</p>
                  <p className="mt-1 text-sm text-gray-500">Make data-driven decisions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">HIPAA Compliant</p>
                  <p className="mt-1 text-sm text-gray-500">Secure and protected data</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Performance Tracking</p>
                  <p className="mt-1 text-sm text-gray-500">Optimize your operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">24/7 Support</p>
                  <p className="mt-1 text-sm text-gray-500">Always available for you</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right section with image instead of dashboard */}
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Shadow elements */}
              <div className="absolute top-6 -left-6 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 lg:w-40 lg:h-40"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 lg:w-40 lg:h-40"></div>
              
              {/* Image placeholder - replace with your actual image */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img 
                  src={HMS} 
                  alt="Hospital Management System" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}