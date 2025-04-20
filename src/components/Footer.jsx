import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center p-4">
      &copy; {new Date().getFullYear()} Jambavantha Smart Irrigation System
    </footer>
  );
};

export default Footer;