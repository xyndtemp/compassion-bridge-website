
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="/our-history" className="hover:text-secondary">Our History</a></li>
              <li><a href="/mission" className="hover:text-secondary">Our Mission and Values</a></li>
              <li><a href="/leadership" className="hover:text-secondary">Our Leadership</a></li>
              <li><a href="/reporting" className="hover:text-secondary">Public Reporting</a></li>
              <li><a href="/opportunities" className="hover:text-secondary">Contract Opportunities</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsroom</h3>
            <ul className="space-y-2">
              <li><a href="/news" className="hover:text-secondary">News</a></li>
              <li><a href="/in-the-news" className="hover:text-secondary">In the News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Media</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
              <li><a href="/press" className="hover:text-secondary">Press Releases</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">More Resources</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-secondary">FAQ</a></li>
              <li><a href="/careers" className="hover:text-secondary">Careers</a></li>
              <li><a href="/get-involved" className="hover:text-secondary">Get Involved</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-sm">&copy; 2024 Compassion Bridge Initiative</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-secondary"><Facebook size={24} /></a>
              <a href="#" className="hover:text-secondary"><Twitter size={24} /></a>
              <a href="#" className="hover:text-secondary"><Instagram size={24} /></a>
              <a href="#" className="hover:text-secondary"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-secondary"><Youtube size={24} /></a>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="/privacy" className="hover:text-secondary">Privacy Policy</a>
              <a href="/terms" className="hover:text-secondary">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
