
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Compassion Bridge</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-gray-700 hover:text-primary">Our Mission</a>
            <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
            <a href="#impact" className="text-gray-700 hover:text-primary">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
            <Button className="bg-primary text-white hover:bg-primary/90">Donate Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#mission" className="block px-3 py-2 text-gray-700 hover:text-primary">Our Mission</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
            <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-primary">Impact</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
            <div className="px-3 py-2">
              <Button className="w-full bg-primary text-white hover:bg-primary/90">Donate Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
