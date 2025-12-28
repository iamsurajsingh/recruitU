import React from 'react';
import { MessageSquare, Filter, UserCheck, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Consultation',
      description: 'We discuss your hiring needs, company culture, and ideal candidate profile.'
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: 'Candidate Sourcing',
      description: 'Our AI-powered platform identifies and screens top talent from our network.'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Interview & Selection',
      description: 'We facilitate interviews and provide detailed assessments of each candidate.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Onboarding Support',
      description: 'Continuous support to ensure successful placement and integration.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm mb-4">
            Our Process
          </div>
          <h2 className="text-gray-900 mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A streamlined, efficient process that delivers results
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-indigo-200 to-pink-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-gray-900 text-center mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
