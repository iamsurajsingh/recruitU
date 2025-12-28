import React, { useState } from 'react';
import { Briefcase, Users, UserCheck, LineChart, Globe, Building } from 'lucide-react';

export function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    // {
    //   icon: <Briefcase className="w-6 h-6" />,
    //   title: 'Executive Search',
    //   shortDesc: 'C-suite and senior leadership recruitment',
    //   longDesc: 'Our executive search practice specializes in identifying and attracting top-tier leadership talent. We leverage our extensive network and rigorous assessment methodologies to find executives who can drive transformation and growth.',
    //   features: ['Confidential search processes', 'Comprehensive leadership assessment', 'Market mapping and intelligence', 'Onboarding support']
    // },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Permanent Placement',
      shortDesc: 'Full-time hiring across all levels',
      longDesc: 'From entry-level to mid-management positions, our permanent placement services cover the full spectrum of organizational needs. We ensure cultural fit, skills alignment, and long-term success.',
      features: ['Behavioral interviewing', 'Skills verification', 'Background checks', '90-day replacement guarantee']
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Contract & Temporary',
      shortDesc: 'Flexible staffing solutions',
      longDesc: 'Access skilled professionals for project-based work, seasonal demands, or interim coverage. Our contract staffing solutions provide the flexibility modern businesses require.',
      features: ['Immediate availability', 'Vetted candidates', 'Payroll management', 'Contract-to-hire options']
    },
    // {
    //   icon: <LineChart className="w-6 h-6" />,
    //   title: 'RPO Services',
    //   shortDesc: 'Recruitment process outsourcing',
    //   longDesc: 'Scale your recruitment function with our comprehensive RPO solutions. We become an integrated part of your talent acquisition strategy, managing the entire hiring lifecycle.',
    //   features: ['Dedicated recruitment team', 'Custom workflows', 'Technology integration', 'Analytics and reporting']
    // },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Recruitment',
      shortDesc: 'International talent acquisition',
      longDesc: 'Expand your talent search across borders with our global recruitment capabilities. We navigate complex international hiring regulations and cultural nuances.',
      features: ['Multi-country expertise', 'Visa and relocation support', 'Cultural integration', 'Compliance management']
    },
    // {
    //   icon: <Building className="w-6 h-6" />,
    //   title: 'Consulting Services',
    //   shortDesc: 'Strategic talent advisory',
    //   longDesc: 'Beyond recruitment, we provide strategic consulting on talent acquisition strategy, employer branding, compensation benchmarking, and organizational design.',
    //   features: ['Market analysis', 'Compensation studies', 'Employer branding', 'Talent strategy development']
    // }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-900 mb-4">
            Comprehensive Recruitment Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tailored solutions to meet every aspect of your talent acquisition needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeService === index
                    ? 'bg-slate-800 text-blue shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex-shrink-0 ${activeService === index ? 'text-blue' : 'text-slate-600'}`}>
                    {service.icon}
                  </div>
                  <h3 className={activeService === index ? 'text-blue' : 'text-slate-900'}>
                    {service.title}
                  </h3>
                </div>
                <p className={`text-sm ${activeService === index ? 'text-slate-700' : 'text-slate-600'}`}>
                  {service.shortDesc}
                </p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-800-fixed text-white rounded-xl flex items-center justify-center">
                {services[activeService].icon}
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">{services[activeService].title}</h3>
                <p className="text-slate-600">{services[activeService].shortDesc}</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6">
              {services[activeService].longDesc}
            </p>

            <div>
              <h4 className="text-slate-900 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              // style={{color: '#b4f824'}} onMouseEnter={(e) => e.currentTarget.style.color = '#1d293d'} onMouseLeave={(e) => e.currentTarget.style.color = '#b4f824'}
              className="mt-8 px-6 py-3 bg-slate-800-fixed text-white rounded-lg hover:bg-slate-800  hover:text-blue transition-colors"
            >
              Learn More About This Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
