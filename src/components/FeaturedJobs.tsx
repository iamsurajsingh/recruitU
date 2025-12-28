import React, { useState } from 'react';
import { MapPin, DollarSign, Clock, Bookmark, ChevronRight } from 'lucide-react';

export function FeaturedJobs() {
  const [filter, setFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      category: 'technology',
      posted: '2 days ago',
      description: 'Leading cloud infrastructure team, designing scalable systems for millions of users.'
    },
    {
      id: 2,
      title: 'Chief Financial Officer',
      company: 'Global Finance Group',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$250,000 - $350,000',
      category: 'finance',
      posted: '1 week ago',
      description: 'Strategic financial leadership for a rapidly growing fintech company.'
    },
    {
      id: 3,
      title: 'Healthcare Operations Director',
      company: 'MediCare Partners',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      category: 'healthcare',
      posted: '3 days ago',
      description: 'Overseeing operations across multiple healthcare facilities with focus on efficiency.'
    },
    {
      id: 4,
      title: 'Product Marketing Manager',
      company: 'Innovation Labs',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$95,000 - $130,000',
      category: 'marketing',
      posted: '5 days ago',
      description: 'Drive go-to-market strategy for cutting-edge SaaS products.'
    },
    {
      id: 5,
      title: 'Data Science Lead',
      company: 'Analytics Pro',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      category: 'technology',
      posted: '1 day ago',
      description: 'Build and lead data science team, implementing ML solutions at scale.'
    },
    {
      id: 6,
      title: 'VP of Human Resources',
      company: 'Enterprise Solutions Inc',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$160,000 - $210,000',
      category: 'hr',
      posted: '4 days ago',
      description: 'Shape organizational culture and talent strategy for 2,000+ employee company.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'technology', label: 'Technology' },
    { id: 'finance', label: 'Finance' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'hr', label: 'Human Resources' }
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.category === filter);

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-slate-900 mb-4">
            Featured Opportunities
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore current openings from our network of premier employers
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-lg transition-all ${
                filter === cat.id
                  ? 'bg-slate-800 text-blue'
                  : 'bg-slate-200 hover:bg-slate-800-fixed hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div 
              key={job.id}
              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-1 group-hover:text-slate-700">
                    {job.title}
                  </h3>
                  <p className="text-slate-600">{job.company}</p>
                </div>
                <button className="p-2 hover:bg-slate-800-fixed group-hover:text-white rounded-lg transition-colors">
                  <Bookmark size={20} style={{color: '#90a1b9'}} onMouseEnter={(e) => e.currentTarget.style.color = '#b4f824'} onMouseLeave={(e) => e.currentTarget.style.color = '#90a1b9'} />
                </button>
              </div>

              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={16} />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{job.type}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-sm text-slate-500">Posted {job.posted}</span>
                <button className="flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors">
                  View Details
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors">
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
