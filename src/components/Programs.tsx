import React from 'react';
import { Video, Users, BookOpen } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "Interactive Webinars",
      description: "Live sessions with climate experts and environmental leaders from across Africa.",
      icon: Video,
    },
    {
      title: "Hands-on Workshops",
      description: "Practical workshops focusing on local environmental challenges and solutions.",
      icon: Users,
    },
    {
      title: "Online Courses",
      description: "Comprehensive courses on climate science, sustainability, and environmental leadership.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Programs</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive educational initiatives designed to create lasting impact
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <program.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              <p className="mt-4 text-gray-600">{program.description}</p>
              <button className="mt-6 text-green-600 font-medium hover:text-green-700">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}