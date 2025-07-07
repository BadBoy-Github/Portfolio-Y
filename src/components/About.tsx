import React from 'react';
import { Award, BookOpen, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: "Precision & Accuracy",
      description: "Every code is reviewed meticulously to ensure 100% accuracy and compliance with current guidelines."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
      title: "Continuous Learning",
      description: "Stay updated with the latest coding standards, regulations, and medical advancements."
    },
    {
      icon: <Users className="h-8 w-8 text-pink-400" />,
      title: "Client Partnership",
      description: "Build lasting relationships through transparent communication and reliable service delivery."
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: "Professional Excellence",
      description: "Maintain the highest standards of professionalism in all coding and audit activities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate medical coding professional dedicated to ensuring accuracy, compliance, and excellence in healthcare revenue cycle management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Your Trusted Medical Coding Partner</h3>
            <p className="text-slate-300 leading-relaxed">
              With over 1 year of experience in medical coding, I specialize in transforming clinical documentation 
              into accurate, compliant codes that maximize revenue and minimize audit risk. My expertise spans across 
              multiple specialties including cardiology, orthopedics, gastroenterology, and general surgery.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I hold certifications in CPC, CCS, and RHIA, ensuring I stay current with evolving healthcare 
              regulations and coding standards. My commitment to precision and attention to detail has helped 
              healthcare organizations achieve exceptional coding accuracy rates and improved financial performance.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">CPC Certified</span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium">CCS Certified</span>
              <span className="px-4 py-2 bg-pink-600/20 text-pink-400 rounded-full text-sm font-medium">RHIA Certified</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 backdrop-blur-sm border border-slate-700">
              <div className="h-full w-full rounded-xl bg-slate-900/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍⚕️</div>
                  <div className="text-2xl font-bold text-white mb-2">Yakshana T</div>
                  <div className="text-slate-300">Certified Medical Coder</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;