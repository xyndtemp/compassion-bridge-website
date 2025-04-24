import { useState } from 'react';
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from './ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from 'react-router-dom';
import PATHS from '@/pages/paths';
import { useSearch } from '@/hooks/use-search';
import { useLanguage, languages } from '@/hooks/use-language';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { search, results } = useSearch();
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary animate-fade-in">
              Compassion Bridge
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                  <Globe size={20} />
                  <span>{currentLanguage.nativeName}</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code}
                      onClick={() => setLanguage(lang)}
                    >
                      {lang.nativeName}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center space-x-4">
                <Link to={PATHS.index} className="text-gray-700 hover:text-primary">Home</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                    <span>About</span>
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to={PATHS.about.mission}>Our Mission</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={PATHS.about.vision}>Our Vision</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={PATHS.about.whatWeDo}>What We Do</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={PATHS.about.goals}>Our Goals</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to={PATHS.gallery} className="text-gray-700 hover:text-primary">Gallery</Link>
                <Link to={PATHS.contact} className="text-gray-700 hover:text-primary">Contact</Link>
              </div>
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
            <CommandInput 
              placeholder="Search..." 
              onValueChange={(value) => search(value)}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {results.length > 0 && (
                <CommandGroup>
                  {results.map((result) => (
                    <CommandItem key={result.link}>
                      <a href={result.link} className="flex flex-col">
                        <span className="font-medium">{result.title}</span>
                        <span className="text-sm text-gray-500">{result.description}</span>
                      </a>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          <div className="px-4 py-6 space-y-4">
            <button className="flex items-center space-x-2 w-full text-gray-700 hover:text-primary">
              <Globe size={20} />
              <span>{currentLanguage.nativeName}</span>
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
