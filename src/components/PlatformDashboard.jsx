import React from 'react';
import { FaStar, FaFire } from 'react-icons/fa';

const platforms = [
  { name: 'Html 5', img: 'https://img.icons8.com/color/48/html-5--v1.png' },
  { name: 'Laravel', img: 'https://img.icons8.com/ios-filled/50/laravel.png' },
  { name: 'Vue Js', img: 'https://img.icons8.com/color/48/vue-js.png' },
  { name: 'CodeIgniter', img: 'https://img.icons8.com/ios/50/codeigniter.png' },
  { name: 'Angular', img: 'https://img.icons8.com/color/48/angularjs.png' },
  { name: 'React', img: 'https://img.icons8.com/color/48/react-native.png', badge: 'New' },
  { name: 'Tailwind', img: 'https://img.icons8.com/color/48/tailwind_css.png', badge: 'New' },
  { name: 'Next Js', img: 'https://img.icons8.com/ios-filled/50/nextjs.png', badge: 'New' },
  { name: 'NodeJs', img: 'https://img.icons8.com/color/48/nodejs.png' },
  { name: 'php', img: 'https://img.icons8.com/officel/48/php-logo.png' },
  { name: 'Cakephp', img: 'https://img.icons8.com/ios-filled/50/cakephp.png' }
];

const dashboards = [
  {
    title: 'Dashboard 1',
    img: 'https://via.placeholder.com/500x300?text=Dashboard+1',
    hot: true
  },
  {
    title: 'Dashboard 2',
    img: 'https://via.placeholder.com/500x300?text=Dashboard+2',
    hot: false
  },
  {
    title: 'Sales Dashboard',
    img: 'https://via.placeholder.com/500x300?text=Sales+Dashboard',
    hot: false
  }
];

const PlatformSupportSection = () => {
  return (
    <section className="bg-[#FFF9F5] py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0c0c2c]">
          Our template is <span className="text-gradient font-bold">built on many platforms</span><br />
          <span className="text-[#1a1a1a]">with the latest versions</span>
        </h2>

        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {platforms.map((p, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-md w-24 text-center relative">
              <img src={p.img} alt={p.name} className="h-10 mx-auto" />
              <p className="text-sm mt-2 font-medium">{p.name}</p>
              {p.badge && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase">
                  {p.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Dashboards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {dashboards.map((dash, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={dash.img} alt={dash.title} className="w-full h-auto" />
              <div className="p-4 flex justify-between items-center">
                <p className="font-semibold text-[#0c0c2c]">{dash.title}</p>
                <div className="flex gap-2 items-center">
                  {dash.hot && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                      <FaFire className="text-xs" /> HOT
                    </span>
                  )}
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">LTR</span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">RTL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 mt-40 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
      Creative Navigation <span class="text-orange-500">Layouts</span>
    </h2>
    <p class="text-gray-500 text-base md:text-lg mb-10">
      Dreampos comes with multiple prebuilt layouts. So you have
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="space-y-4">
        <img src="https://via.placeholder.com/600x400" alt="Mini Layout" class="rounded-xl shadow-md mx-auto" />
        <p class="font-medium text-gray-800">Mini</p>
      </div>

      <div class="space-y-4">
        <img src="https://via.placeholder.com/600x400" alt="Two Column" class="rounded-xl shadow-md mx-auto" />
        <p class="font-medium text-gray-800">Two Column</p>
      </div>

      <div class="space-y-4">
        <img src="https://via.placeholder.com/600x400" alt="Horizontal" class="rounded-xl shadow-md mx-auto" />
        <div class="flex justify-center items-center gap-2">
          <p class="font-medium text-gray-800">Horizontal</p>
          <span class="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
        </div>
      </div>

      <div class="space-y-4">
        <img src="https://via.placeholder.com/600x400" alt="Detached" class="rounded-xl shadow-md mx-auto" />
        <div class="flex justify-center items-center gap-2">
          <p class="font-medium text-gray-800">Detached</p>
          <span class="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
        </div>
      </div>

      <div class="space-y-4">
        <img src="https://via.placeholder.com/600x400" alt="Without Header" class="rounded-xl shadow-md mx-auto" />
        <p class="font-medium text-gray-800">Without Header</p>
      </div>

      <div class="space-y-4">
        <img src="https://via.placeholder.com/600x400" alt="RTL" class="rounded-xl shadow-md mx-auto" />
        <div class="flex justify-center items-center gap-2">
          <p class="font-medium text-gray-800">RTL</p>
          <span class="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default PlatformSupportSection;
