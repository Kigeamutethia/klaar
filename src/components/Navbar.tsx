import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/da8270f0209152507968e766f06d8e9c76a4d8bc.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Klaar Solutions - Your Space, Our Sparkle" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#1f4165] font-semibold' : 'text-gray-700 hover:text-[#1f4165]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-[#1f4165] font-semibold' : 'text-gray-700 hover:text-[#1f4165]'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1f4165] transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                  >
                    <Link
                      to="/services/cleaning"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1f4165] transition-colors"
                    >
                      Professional Cleaning
                    </Link>
                    <Link
                      to="/services/solar"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1f4165] transition-colors"
                    >
                      Solar Installation
                    </Link>
                    <Link
                      to="/services/electrical"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1f4165] transition-colors"
                    >
                      Electrical Services
                    </Link>
                    <Link
                      to="/services/plumbing"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1f4165] transition-colors"
                    >
                      Plumbing Services
                    </Link>
                    <Link
                      to="/services/movers"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1f4165] transition-colors"
                    >
                      Moving Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/health-safety"
              className={`transition-colors ${
                isActive('/health-safety') ? 'text-[#1f4165] font-semibold' : 'text-gray-700 hover:text-[#1f4165]'
              }`}
            >
              Health & Safety
            </Link>
            
            <Link
              to="/#contact"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#1f4165] text-white px-6 py-2 rounded-lg hover:bg-[#1e40af] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#1f4165]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-[#1f4165]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-[#1f4165]"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="py-2">
                <div className="text-gray-900 font-semibold mb-2">Services</div>
                <Link
                  to="/services/cleaning"
                  className="block py-2 pl-4 text-gray-600 hover:text-[#1f4165]"
                  onClick={() => setIsOpen(false)}
                >
                  Professional Cleaning
                </Link>
                <Link
                  to="/services/solar"
                  className="block py-2 pl-4 text-gray-600 hover:text-[#1f4165]"
                  onClick={() => setIsOpen(false)}
                >
                  Solar Installation
                </Link>
                <Link
                  to="/services/electrical"
                  className="block py-2 pl-4 text-gray-600 hover:text-[#1f4165]"
                  onClick={() => setIsOpen(false)}
                >
                  Electrical Services
                </Link>
                <Link
                  to="/services/plumbing"
                  className="block py-2 pl-4 text-gray-600 hover:text-[#1f4165]"
                  onClick={() => setIsOpen(false)}
                >
                  Plumbing Services
                </Link>
                <Link
                  to="/services/movers"
                  className="block py-2 pl-4 text-gray-600 hover:text-[#1f4165]"
                  onClick={() => setIsOpen(false)}
                >
                  Moving Services
                </Link>
              </div>
              <Link
                to="/health-safety"
                className="block py-2 text-gray-700 hover:text-[#1f4165]"
                onClick={() => setIsOpen(false)}
              >
                Health & Safety
              </Link>
              <Link
                to="/#contact"
                className="block mt-4 bg-[#1f4165] text-white px-6 py-2 rounded-lg text-center"
                onClick={(e) => {
                  setIsOpen(false);
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}