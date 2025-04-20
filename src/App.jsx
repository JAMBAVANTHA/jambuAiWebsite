import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import RecommendationPage from './pages/RecommendationPage'; // 🆕 Import the page
import RecommendationVisualizer from './pages/RecommendationVisualizer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recommendation" element={<RecommendationPage />} /> {/* 🆕 Added */}
          <Route path="/recommendation-visualizer" element={<RecommendationVisualizer />} /> /* 🆕
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
