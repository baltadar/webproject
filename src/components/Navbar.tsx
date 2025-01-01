import React from 'react';
import { Leaf, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Nimbus Green</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="#programs" className="text-gray-600 hover:text-green-600">Programs</a>
            <a href="#impact" className="text-gray-600 hover:text-green-600">Our Impact</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Join Us
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}