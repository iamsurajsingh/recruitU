import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Katherine Morrison',
      role: 'Managing Partner',
      specialty: 'Executive Search',
      bio: '20+ years in executive recruitment, former VP of Talent at Fortune 100 companies',
      initials: 'KM'
    },
    {
      name: 'David Chen',
      role: 'Partner',
      specialty: 'Technology & Engineering',
      bio: 'Former tech executive with deep expertise in software engineering and product roles',
      initials: 'DC'
    },
    {
      name: 'Sarah Williams',
      role: 'Senior Director',
      specialty: 'Financial Services',
      bio: 'Investment banking background, specializing in finance and fintech placements',
      initials: 'SW'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director',
      specialty: 'Healthcare & Life Sciences',
      bio: 'Healthcare administration expert with extensive clinical and pharmaceutical network',
      initials: 'MR'
    },
    {
      name: 'Emily Thompson',
      role: 'Senior Consultant',
      specialty: 'Marketing & Sales',
      bio: 'Former CMO with expertise in placing marketing leadership and revenue roles',
      initials: 'ET'
    },
    {
      name: 'James Patterson',
      role: 'Consultant',
      specialty: 'Operations & Supply Chain',
      bio: 'Operations background with focus on manufacturing and logistics placements',
      initials: 'JP'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Experienced professionals dedicated to understanding your needs and delivering 
            exceptional results. Each team member brings deep industry knowledge and an 
            extensive network of relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-slate-800 text-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <span>{member.initials}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-slate-600 mb-1">{member.role}</p>
                  <p className="text-xs text-slate-500">{member.specialty}</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {member.bio}
              </p>
              
              <div className="flex gap-2 pt-4 border-t border-slate-200">
                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                  <Linkedin size={18} className="text-slate-600" />
                </button>
                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                  <Mail size={18} className="text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
