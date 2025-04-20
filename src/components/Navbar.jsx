import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-gray-100 transition duration-300">
          Jambavantha
        </Link>
        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-gray-200 transition duration-200">Home</Link>
          <Link to="/features" className="hover:text-gray-200 transition duration-200">Features</Link>
          <Link to="/recommendation" className="hover:text-gray-200 transition duration-200">Recommendation</Link>
          <Link to="/recommendation-visualizer" className="hover:text-gray-200 transition duration-200">Visualization</Link>
          <Link to="/about" className="hover:text-gray-200 transition duration-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200 transition duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
