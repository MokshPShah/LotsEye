// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ModernNavbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ModernNavbar />
      <div className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
