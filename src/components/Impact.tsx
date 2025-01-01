import React from 'react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-xl text-gray-600">
            Making a difference across Africa through education and empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
              alt="Students collaborating"
              className="rounded-lg shadow-md"
            />
          </div>
          
          <div className="space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">10,000+</p>
                <p className="mt-2 text-gray-600">Students Reached</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">25</p>
                <p className="mt-2 text-gray-600">African Countries</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">200+</p>
                <p className="mt-2 text-gray-600">Workshops Conducted</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">50+</p>
                <p className="mt-2 text-gray-600">Partner Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}