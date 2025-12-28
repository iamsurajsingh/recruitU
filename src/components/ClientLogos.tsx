import React from 'react';

export function ClientLogos() {
  const clients = [
    'TechCorp', 'GlobalFinance', 'MediCare Plus', 'InnovateLab',
    'Enterprise Solutions', 'DataStream', 'CloudTech', 'FinanceFirst',
    'HealthWave', 'Manufacturing Pro', 'RetailEdge', 'EduTech'
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-slate-900 mb-2">Trusted By Industry Leaders</h3>
          <p className="text-slate-600">
            We partner with organizations across industries and sizes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <span className="text-slate-400 text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
