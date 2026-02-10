import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { PriceCalculator } from './components/PriceCalculator';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🌿</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Warner Brothers Lawn Care</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('services')}
                className={`text-sm font-medium transition-colors ${activeSection === 'services' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Services
              </button>
              <button 
                onClick={() => setActiveSection('gallery')}
                className={`text-sm font-medium transition-colors ${activeSection === 'gallery' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Gallery
              </button>
              <button 
                onClick={() => setActiveSection('calculator')}
                className={`text-sm font-medium transition-colors ${activeSection === 'calculator' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Price Calculator
              </button>
              <button 
                onClick={() => setActiveSection('booking')}
                className={`text-sm font-medium transition-colors ${activeSection === 'booking' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Book Now
              </button>
            </div>

            <button 
              onClick={() => setActiveSection('booking')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {activeSection === 'home' && <Hero onBookNow={() => setActiveSection('booking')} />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'gallery' && <Gallery />}
        {activeSection === 'calculator' && <PriceCalculator />}
        {activeSection === 'booking' && <BookingForm />}
      </main>

      <Footer />
    </div>
  );
}