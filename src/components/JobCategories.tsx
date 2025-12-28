import React from 'react';
import { Code, DollarSign, Hammer, Heart, Palette, LineChart } from 'lucide-react';

export function JobCategories() {
  const categories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technology',
      openings: 45
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Finance',
      openings: 32
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Healthcare',
      openings: 28
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Marketing',
      openings: 21
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Engineering',
      openings: 38
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative',
      openings: 19
    }
  ];

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Job Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across diverse industries and specializations
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-blue-600 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900">{category.title}</h3>
                    <p className="text-gray-500 text-sm">{category.openings} positions</p>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
