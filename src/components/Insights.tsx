import React from 'react';
import { Calendar, ArrowRight, TrendingUp, Users, Briefcase } from 'lucide-react';

export function Insights() {
  const articles = [
    {
      category: 'Market Trends',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Tech Talent Market Analysis Q4 2024',
      excerpt: 'Comprehensive analysis of hiring trends, salary benchmarks, and in-demand skills across the technology sector.',
      date: 'December 15, 2024',
      readTime: '8 min read'
    },
    {
      category: 'Best Practices',
      icon: <Users className="w-5 h-5" />,
      title: 'Building High-Performance Teams in Hybrid Environments',
      excerpt: 'Strategies for recruiting, onboarding, and retaining talent in the new era of distributed work.',
      date: 'December 10, 2024',
      readTime: '6 min read'
    },
    {
      category: 'Industry Insights',
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Executive Search: What Boards Look For in 2025',
      excerpt: 'Key qualities and experiences that make executives stand out in today\'s competitive leadership market.',
      date: 'December 5, 2024',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-slate-900 mb-4">
              Industry Insights & Resources
            </h2>
            <p className="text-lg text-slate-600">
              Expert perspectives on recruitment trends, market intelligence, and best practices
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-100 hover:border-slate-200"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                  <div className="p-1.5 bg-slate-200 rounded">
                    {article.icon}
                  </div>
                  <span>{article.category}</span>
                </div>
                
                <h3 className="text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <button className="flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 transition-colors">
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <button className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors mx-auto">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
