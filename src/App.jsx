// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ModernNavbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

function AnimatedRoutes() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <AnimatePresence mode="wait">
      <div className={isHomePage ? '' : 'pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8'}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ModernNavbar />
      <AnimatedRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
