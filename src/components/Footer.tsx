import React from 'react';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import logo from '../public/footer-logo.png';


export function Footer() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div>
                <img src={logo} alt="RecruitU Logo" style={{ height: 350, width: 'auto' }} className="object-contain" />
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Building exceptional teams through strategic recruitment, deep industry expertise, 
              and unwavering commitment to client success.
            </p>
            <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/recruitutalentsolutions" target="_blank" style={{ color: '#1d293d' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#1d293d'} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              {/* <a href="#" style={{ color: '#1d293d' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#1d293d'} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" style={{ color: '#1d293d' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#1d293d'} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a> */}
              <a href="mailto:info@recruitu.co.in" style={{ color: '#1d293d' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#1d293d'} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {/* <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Executive Search</a></li> */}
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Permanent Placement</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contract Staffing</a></li>
              {/* <li><a href="#" className="text-slate-400 hover:text-white transition-colors">RPO Services</a></li> */}
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Technology</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Financial Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Healthcare</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Manufacturing</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">View All</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              {/* <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Our Team</a></li> */}
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              {/* <li><a href="#" className="text-slate-400 hover:text-white transition-colors">News & Insights</a></li> */}
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-400">
              &copy; 2025 RecruitU Talent Solutions Private Limited. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap gap-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
