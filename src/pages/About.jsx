import React from 'react';

const About = () => {
  const team = [
    { name: "Ankit Kumar", role: "Project Lead" },
    { name: "Team Member 2", role: "AI Engineer" },
    { name: "Team Member 3", role: "IoT Specialist" }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-10 text-center">
  <h2 className="text-3xl font-extrabold text-primary mb-6">About Us</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <p className="text-gray-800 font-semibold">Ankit Kumar</p>
      <p className="text-gray-600 text-sm">Lead IoT Engineer</p>
    </div>
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <p className="text-gray-800 font-semibold">Ajay Gupta</p>
      <p className="text-gray-600 text-sm">Full Stack Developer</p>
    </div>
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <p className="text-gray-800 font-semibold">Anusree Naskar</p>
      <p className="text-gray-600 text-sm">Design & Analytics</p>
    </div>
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <p className="text-gray-800 font-semibold">Amit Kumar Choubey</p>
      <p className="text-gray-600 text-sm">Cybersecurity Analyst</p>
    </div>
  </div>
</section>
  );
};

export default About;