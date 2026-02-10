import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🌿</span>
              </div>
              <span className="text-xl font-semibold text-white">Warner Brothers Lawn Care</span>
            </div>
            <p className="text-sm mb-4">
              Professional lawn care and landscaping services to transform your outdoor spaces into beautiful, sustainable environments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">Lawn Mowing</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Garden Design</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Tree Care</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Irrigation</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Hardscaping</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" />
                <span>P.O. Box 762<br />West Jordan, Utah 84084</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <a href="tel:+13852260894" className="hover:text-green-500 transition-colors">(385) 226-0894</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500" />
                <a href="mailto:wblco4@gmail.com" className="hover:text-green-500 transition-colors">wblco4@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 Warner Brothers Lawn Care. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}