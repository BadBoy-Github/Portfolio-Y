import React from 'react';
import { ExternalLink, TrendingUp, Shield, FileText } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Multi-Specialty Coding Implementation",
      client: "Regional Healthcare Network",
      category: "System Implementation",
      description: "Led the implementation of standardized coding protocols across 12 specialty departments, resulting in improved accuracy and reduced claim denials.",
      results: [
        "35% reduction in claim denials",
        "98.5% coding accuracy rate",
        "$2M annual revenue recovery",
        "15% faster claim processing"
      ],
      technologies: ["ICD-10", "CPT", "HCPCS", "Epic EMR"],
      icon: <FileText className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Revenue Cycle Optimization",
      client: "Metropolitan Medical Center",
      category: "Process Improvement",
      description: "Comprehensive audit and optimization of the revenue cycle process, focusing on coding accuracy and compliance improvements.",
      results: [
        "25% increase in clean claims",
        "50% reduction in audit findings",
        "$1.5M recovered revenue",
        "Improved payer relationships"
      ],
      technologies: ["Coding Audits", "Compliance Review", "Staff Training"],
      icon: <TrendingUp className="h-8 w-8 text-green-400" />
    },
    {
      title: "Compliance Program Development",
      client: "Surgical Associates Group",
      category: "Compliance",
      description: "Developed and implemented comprehensive compliance program for surgical coding with focus on OIG guidelines and payer requirements.",
      results: [
        "Zero compliance violations",
        "95% staff certification rate",
        "Improved documentation quality",
        "Reduced audit risk by 60%"
      ],
      technologies: ["HIPAA", "OIG Guidelines", "CMS Requirements"],
      icon: <Shield className="h-8 w-8 text-purple-400" />
    }
  ];

  const metrics = [
    { label: "Total Cases Coded", value: "50,000+", color: "text-blue-400" },
    { label: "Average Accuracy", value: "98.2%", color: "text-green-400" },
    { label: "Revenue Recovered", value: "$5.2M", color: "text-purple-400" },
    { label: "Client Satisfaction", value: "100%", color: "text-pink-400" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio & Results
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Proven results in medical coding accuracy, compliance, and revenue optimization across diverse healthcare organizations.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-colors">
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
              <div className="text-slate-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Project Cases */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex items-center text-slate-400">
                        <span className="font-medium">{project.client}</span>
                        <div className="mx-2">•</div>
                        <span className="text-sm bg-slate-700 px-2 py-1 rounded">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                  <ul className="space-y-3">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-slate-300">
                        <TrendingUp className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Client Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {"★".repeat(5)}
                </div>
                <p className="text-slate-300 italic">
                  "Yakshana's expertise in medical coding transformed our revenue cycle. Her attention to detail and 
                  commitment to accuracy resulted in significant improvements in our clean claims rate."
                </p>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">Dr. Michael Chen</div>
                <div className="text-slate-400 text-sm">Chief Medical Officer, Regional Healthcare Network</div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {"★".repeat(5)}
                </div>
                <p className="text-slate-300 italic">
                  "The compliance program Yakshana developed has been instrumental in maintaining our excellent 
                  audit record. Her knowledge of regulatory requirements is exceptional."
                </p>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">Lisa Rodriguez</div>
                <div className="text-slate-400 text-sm">Practice Administrator, Surgical Associates Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;