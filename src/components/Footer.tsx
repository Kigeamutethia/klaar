import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import logo from 'figma:asset/006882a5f5a55745cb26ce181e07abb343babf7d.png';

// TikTok icon component (lucide-react doesn't have TikTok, so we'll create a custom SVG)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1f4165] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Klaar Solutions - Your Space, Our Sparkle" className="h-12 w-auto mb-4" />
            <p className="text-blue-100 mb-4">
              Integrated Cleaning, Solar & Technical Solutions You Can Trust
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61588320780763" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#93c5fd] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/klaar-solutions-136bb93b0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#93c5fd] transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/klaar_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#93c5fd] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@klaar.solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#93c5fd] transition-colors"
                aria-label="Visit our TikTok page"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/health-safety" className="text-blue-100 hover:text-white transition-colors">
                  Health & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cleaning" className="text-blue-100 hover:text-white transition-colors">
                  Professional Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/solar" className="text-blue-100 hover:text-white transition-colors">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link to="/services/electrical" className="text-blue-100 hover:text-white transition-colors">
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="text-blue-100 hover:text-white transition-colors">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link to="/services/movers" className="text-blue-100 hover:text-white transition-colors">
                  Moving Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+254791515131" className="text-blue-100 hover:text-white transition-colors block">
                    +254 791 515 131
                  </a>
                  <a href="tel:+254757598186" className="text-blue-100 hover:text-white transition-colors block">
                    +254 757 598 186
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@klaarsolutions.co.ke" className="text-blue-100 hover:text-white transition-colors">
                  info@klaarsolutions.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Klaar Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}