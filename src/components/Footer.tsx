import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Medical Coding',
    'Coding Audits',
    'Compliance Review',
    'Revenue Optimization',
    'Quality Assurance',
    'Analytics & Reporting',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MedCoder Pro
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional medical coding services with 8+ years of experience in ICD-10, CPT, and HCPCS coding. 
              Specializing in accuracy, compliance, and revenue optimization.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-sm font-bold">CPC</span>
              </div>
              <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                <span className="text-purple-400 text-sm font-bold">CCS</span>
              </div>
              <div className="w-8 h-8 bg-pink-600/20 rounded-full flex items-center justify-center">
                <span className="text-pink-400 text-sm font-bold">RHIA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:yakshanat@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                yakshanat@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+919952679603" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +91 99526 79603
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Chennai, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © {currentYear} Yakshana T. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://panda-productions.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
              Panda Productions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;