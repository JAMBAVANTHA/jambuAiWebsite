import React from 'react';
import { CheckCircle } from 'lucide-react'; // Feather-style icon

const Features = () => {
  const features = [
    "Real-time soil moisture sensing",
    "AI-based irrigation decisions",
    "Weather-aware controls (auto shutoff via OpenWeather API)",
    "Automated fertilization",
    "Mobile app integration (multilingual, real-time alerts, historical trend tracking)"
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-extrabold text-primary mb-10 text-center">Our Smart Agriculture Features</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex items-start p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-primary"
          >
            <CheckCircle className="text-primary mr-4 mt-1" size={24} />
            <p className="text-lg text-gray-800">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
