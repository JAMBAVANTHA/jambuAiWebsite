import React from "react";
import { CheckCircle, Globe, Users, Calendar, Phone, Mail } from "lucide-react";

const Home = () => {
  const sections = [
    {
      icon: <CheckCircle size={28} className="text-primary mr-3" />,
      title: "Features / Solutions",
      content: [
        "Real‑time soil moisture sensing",
        "AI‑powered irrigation decisions",
        "Weather‑aware controls (auto shutoff via OpenWeather API)",
        "Automated fertilization",
        "Mobile app integration (multilingual, real‑time alerts, historical trend tracking)",
      ],
      image:
        "https://imgs.search.brave.com/Oe08Z6hEo2-LH7QWGnKLF_TKffBoop0f9uGbi30uZIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MTUxMzUwMS9waG90/by9hdXRvbWF0aWMt/aXJyaWdhdGlvbi1p/bi1mYXJtLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Mc3dI/dGlnc2tPTU9laE1u/Z29kNmw2dkowTGlY/RXVRUm1NRWs5dG5N/VjNNPQ",
    },
    {
      icon: <Users size={28} className="text-primary mr-3" />,
      title: "Social Impact",
      content: [
        "Empowering smallholder farmers",
        "Collaborations with governments and NGOs",
        "Poverty reduction and better rural livelihoods",
      ],
      image:
        "https://imgs.search.brave.com/SwHAHiAxRxNQEWXR6GXBFAMRYFke3fO-veFkhWlA99A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmVt/b25zeXN0ZW1zLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8xMC8zLmslQzMl/QTlwX1RydXRpbmEt/aXJyaWdhdGlvbi1z/eXN0ZW0taW1wbGVt/ZW50YXRpb24tb24t/YS10b21hdG8tZmFy/bS0xMDI0eDc2OC5q/cGc",
      reverse: true,
    },
    {
      icon: <Calendar size={28} className="text-primary mr-3" />,
      title: "Future Roadmap",
      content: [
        "Nationwide scaling",
        "Pest & disease prediction using AI",
        "Offline & voice‑based farmer access",
      ],
      image:
        "https://imgs.search.brave.com/VzuADO6SxVleLFQOreKBi283sOIIL6UOCkgvLliWz4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmVt/b25zeXN0ZW1zLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8xMC8xLmslQzMl/QTlwX0lycmlnYXRp/b24tc3lzdGVtLW9u/LWEtdmVnZXRhYmxl/LWZhcm0tMTAyNHg1/MTYuanBn",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
  <img
    src="https://imgs.search.brave.com/6keQ-E832LeYDzZ4eK7Kjvixl2MbqvsHccGC0fT1U6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk3/NzM5ODUwL3Bob3Rv/L2Zhcm0taXJyaWdh/dGlvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UEpqM25Y/WUdOOVFKWlpXd1BP/aWFacGRPN3U5eUQ4/MlQzV0VYeVlRYUxn/OD0"
    alt="Smart Farming"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  />
  <div className="absolute inset-20 bg-gradient-to-b from-white via-white/80 to-transparent" />
  
  <div className="relative max-w-4xl mx-auto text-center py-28 px-6">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-6 drop-shadow-sm">
      Jambavantha Smart Irrigation
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 font-medium mb-6">
      Revolutionizing Modern Agriculture with AI & IoT
    </p>
    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
      We harness the power of real-time AI and IoT to optimize irrigation and soil nutrition
      management — ensuring higher yields, sustainable practices, and prosperity for farmers.
    </p>
  </div>
</section>


      {/* Content Sections */}
      <div className="max-w-5xl mx-auto space-y-16 py-16 px-4 md:px-0">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden ${
              sec.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={sec.image}
              alt={sec.title}
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <div className="p-8 flex-1">
              <div className="flex items-center mb-4">
                {sec.icon}
                <h2 className="text-2xl font-bold text-primary">{sec.title}</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                {sec.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Our Mission */}
        {/* Our Mission */}
<section className="bg-white rounded-2xl shadow-lg p-10 text-center mb-8">
  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full">
    <Globe size={28} className="text-primary" />
  </div>
  <h2 className="text-3xl font-extrabold text-primary mb-4">Our Mission</h2>
  <p className="text-gray-700 text-lg leading-relaxed mb-4">
    At <strong>Jambavantha</strong>, we harness the power of AI, IoT, and data science
    to make farming sustainable, productive, and profitable for every farmer.
  </p>
  <p className="text-gray-700 text-lg leading-relaxed">
    By providing real-time insights, automated irrigation, and smart fertilization,
    we empower farmers to conserve critical resources like water and boost yields.
  </p>
</section>

{/* About Us */}
<section className="bg-white rounded-2xl shadow-lg p-10 text-center">
  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full">
    <Users size={28} className="text-primary" />
  </div>
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


        {/* Contact */}
        <section className="bg-primary text-white rounded-2xl shadow-md p-8 text-center">
          <Phone size={32} className="mx-auto mb-2" />
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">
            <strong>Phone:</strong> +91 91109 66189
          </p>
          <p>
            <Mail className="inline mr-2" size={18} />
            ankit.kumar.iotcs27@heritageit.edu.in
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
