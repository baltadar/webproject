import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-600" />
                <span className="ml-3 text-gray-600">contact@nimbusgreen.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-600" />
                <span className="ml-3 text-gray-600">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600" />
                <span className="ml-3 text-gray-600">123 Green Street, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}