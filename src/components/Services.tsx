import React from 'react';
import { FileText, Search, Shield, TrendingUp, ClipboardCheck, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-400" />,
      title: "Medical Coding",
      description: "Expert ICD-10, CPT, and HCPCS coding across all medical specialties with 98% accuracy guarantee.",
      features: ["ICD-10-CM/PCS", "CPT Coding", "HCPCS Level II", "Modifier Application"]
    },
    {
      icon: <Search className="h-8 w-8 text-purple-400" />,
      title: "Coding Audits",
      description: "Comprehensive coding audits to identify opportunities for revenue optimization and compliance improvement.",
      features: ["Pre-bill Audits", "Post-bill Reviews", "Compliance Analysis", "Documentation Review"]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Compliance Review",
      description: "Ensure your coding practices meet all regulatory requirements and industry standards.",
      features: ["HIPAA Compliance", "CMS Guidelines", "Payer Requirements", "Risk Assessment"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-pink-400" />,
      title: "Revenue Optimization",
      description: "Maximize reimbursements through accurate coding and identification of missed opportunities.",
      features: ["Denial Management", "Appeal Support", "Revenue Analysis", "Process Improvement"]
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-yellow-400" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to maintain the highest coding accuracy standards.",
      features: ["Multi-level Review", "Error Tracking", "Quality Metrics", "Performance Reports"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cyan-400" />,
      title: "Analytics & Reporting",
      description: "Detailed reporting and analytics to track coding performance and identify trends.",
      features: ["Productivity Reports", "Accuracy Metrics", "Trend Analysis", "Custom Dashboards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive medical coding solutions tailored to meet your healthcare organization's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Revenue Cycle?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how my medical coding expertise can help your organization achieve better accuracy, 
              compliance, and financial performance.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;