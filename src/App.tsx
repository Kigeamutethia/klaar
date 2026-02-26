import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CleaningServicesPage from './components/CleaningServicesPage';
import SolarServicesPage from './components/SolarServicesPage';
import ElectricalServicesPage from './components/ElectricalServicesPage';
import PlumbingServicesPage from './components/PlumbingServicesPage';
import MoversServicesPage from './components/MoversServicesPage';
import HealthSafetyPage from './components/HealthSafetyPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    document.title = 'Klaar Solutions Ltd';
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231f4165" rx="15"/><text x="50" y="70" text-anchor="middle" font-size="60" font-weight="bold" fill="white" font-family="Arial, sans-serif">K</text></svg>';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/cleaning" element={<CleaningServicesPage />} />
            <Route path="/services/solar" element={<SolarServicesPage />} />
            <Route path="/services/electrical" element={<ElectricalServicesPage />} />
            <Route path="/services/plumbing" element={<PlumbingServicesPage />} />
            <Route path="/services/movers" element={<MoversServicesPage />} />
            <Route path="/health-safety" element={<HealthSafetyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}