import React from 'react';
import { Award, Clock, Shield, ThumbsUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Committed to the highest standards in recruitment'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Transparent and ethical in all our practices'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Efficiency',
      description: 'Fast turnaround without compromising quality'
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: 'Partnership',
      description: 'Building long-term relationships with clients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY2MDEzOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business partnership"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-gray-900 mb-6">About TalentBridge</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in talent acquisition, TalentBridge has become a trusted 
              partner for companies seeking top-tier professionals. Our deep industry expertise and 
              extensive network enable us to connect the right people with the right opportunities.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that successful recruitment goes beyond matching skills to job descriptions. 
              It's about understanding company culture, career aspirations, and creating lasting partnerships.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-3">
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg h-fit">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
