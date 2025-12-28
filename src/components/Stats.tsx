import React from 'react';
import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '12,000+',
      label: 'Active Candidates',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: '850+',
      label: 'Partner Companies',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '95%',
      label: 'Placement Rate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '15+',
      label: 'Years Experience',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 bg-white -mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
