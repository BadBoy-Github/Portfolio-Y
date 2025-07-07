import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Medical Coder",
      company: "Premier Healthcare Solutions",
      location: "New York, NY",
      duration: "2020 - Present",
      description: "Lead medical coding specialist responsible for complex multi-specialty coding and audit oversight.",
      achievements: [
        "Maintained 98.5% coding accuracy rate across 2,000+ monthly encounters",
        "Reduced claim denials by 35% through proactive coding reviews",
        "Mentored team of 8 junior coders, improving overall team performance by 25%",
        "Implemented new quality assurance protocols saving $150K annually"
      ]
    },
    {
      title: "Medical Coding Specialist",
      company: "Regional Medical Center",
      location: "Boston, MA",
      duration: "2018 - 2020",
      description: "Specialized in emergency medicine and surgical coding with focus on compliance and accuracy.",
      achievements: [
        "Processed 500+ emergency department cases monthly with 97% accuracy",
        "Participated in successful Joint Commission audit with zero coding deficiencies",
        "Developed coding protocols for new surgical procedures",
        "Collaborated with physicians to improve documentation quality"
      ]
    },
    {
      title: "Junior Medical Coder",
      company: "Healthcare Coding Associates",
      location: "Philadelphia, PA",
      duration: "2016 - 2018",
      description: "Entry-level position focused on outpatient coding and learning advanced coding techniques.",
      achievements: [
        "Achieved CPC certification within first 6 months",
        "Maintained 95% accuracy rate on initial coding assignments",
        "Completed advanced training in cardiology and orthopedic coding",
        "Assisted in implementation of new coding software system"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Professional Coder (CPC)",
      issuer: "AAPC",
      year: "2016",
      status: "Active"
    },
    {
      title: "Certified Coding Specialist (CCS)",
      issuer: "AHIMA",
      year: "2018",
      status: "Active"
    },
    {
      title: "Registered Health Information Administrator (RHIA)",
      issuer: "AHIMA",
      year: "2020",
      status: "Active"
    },
    {
      title: "Certified Professional Compliance Officer (CPCO)",
      issuer: "AAPC",
      year: "2022",
      status: "Active"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Credentials
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A proven track record of excellence in medical coding and healthcare revenue cycle management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="h-6 w-6 text-blue-400 mr-3" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-slate-700"></div>
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center text-slate-300 mb-4">
                      <div className="font-medium">{exp.company}</div>
                      <div className="mx-2">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-slate-400">
                          <TrendingUp className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="h-6 w-6 text-purple-400 mr-3" />
              Certifications & Education
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <span className="text-sm text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="font-medium">{cert.issuer}</span>
                    <div className="mx-2">•</div>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 backdrop-blur-sm border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">Continuing Education</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Annual AAPC Regional Conference Attendance</li>
                <li>• ICD-10 Updates and Revisions Training</li>
                <li>• HIPAA Compliance and Privacy Regulations</li>
                <li>• Medical Terminology and Anatomy Refreshers</li>
                <li>• Specialty-Specific Coding Workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;