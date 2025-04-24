
import { useState } from 'react';
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Command, CommandInput } from './ui/command';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Compassion Bridge</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                <Globe size={20} />
                <span>Select Language</span>
                <ChevronDown size={16} />
              </button>
              <a href="#find-local" className="text-gray-700 hover:text-primary">Find Your Local Branch</a>
              <a href="#news" className="text-gray-700 hover:text-primary">News</a>
              <a href="#partner" className="text-gray-700 hover:text-primary">Partner With Us</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="default">Donate</Button>
              <Button variant="outline">Get Help</Button>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-primary"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 p-4">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search..." />
          </Command>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          <div className="px-4 py-6 space-y-4">
            <button className="flex items-center space-x-2 w-full text-gray-700 hover:text-primary">
              <Globe size={20} />
              <span>Select Language</span>
              <ChevronDown size={16} />
            </button>
            <a href="#find-local" className="block text-gray-700 hover:text-primary">Find Your Local Branch</a>
            <a href="#news" className="block text-gray-700 hover:text-primary">News</a>
            <a href="#partner" className="block text-gray-700 hover:text-primary">Partner With Us</a>
            <div className="flex flex-col space-y-2">
              <Button variant="default" className="w-full">Donate</Button>
              <Button variant="outline" className="w-full">Get Help</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
