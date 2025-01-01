import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-green-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1552799446-159ba9523315?auto=format&fit=crop&q=80"
          alt="African students learning"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empowering African Youth for a Sustainable Future
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Through education and engagement, we're building a generation of climate-conscious leaders
          who will drive positive environmental change across Africa.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
            Join Our Programs
          </button>
          <button className="bg-white text-green-900 px-8 py-3 rounded-md hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}