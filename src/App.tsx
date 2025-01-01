import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Impact />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 Nimbus Green Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;