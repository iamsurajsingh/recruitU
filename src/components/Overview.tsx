import React from 'react';
import { Target, Award, Handshake, TrendingUp } from 'lucide-react';

export function Overview() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision Matching',
      description: 'Our proprietary assessment framework ensures we find candidates who align with both role requirements and organizational culture.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Industry Expertise',
      description: 'Specialized recruiters with deep knowledge across technology, finance, healthcare, and executive leadership sectors.'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Partnership Approach',
      description: 'We act as an extension of your team, taking time to understand your unique challenges and long-term objectives.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: 'Consistently delivering quality placements with a 92% candidate retention rate after 12 months.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-slate-900 mb-4">
            Why Organizations Choose RecruitU
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We've been the trusted recruitment partner for our clients. Our success is built on relationships, 
            expertise, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800-fixed text-white rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-blue transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
