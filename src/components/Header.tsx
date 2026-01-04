import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../public/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-white text-sm">RU</span>
              </div>
              <div>
                <div className="text-slate-900">RecuitU</div>
                <div className="text-xs text-slate-500">Talent</div>
              </div> */}
              <img src={logo} alt="RecruitU Logo" style={{ height: 224, width: 'auto', cursor: 'pointer' }} className="object-contain" onClick={() => scrollToSection('hero')} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="ml-left-auto mr-right-10 hidden lg:flex items-flex-end gap-1">
            <button 
              onClick={() => scrollToSection('services')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50-fixed rounded-lg transition-all"
            >
              Services
            </button>
            {/* <button 
              onClick={() => scrollToSection('jobs')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50-fixed rounded-lg transition-all"
            >
              Opportunities
            </button> */}
            <button 
              onClick={() => scrollToSection('industries')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50-fixed rounded-lg transition-all"
            >
              Industries
            </button>
            {/* <button 
              onClick={() => scrollToSection('team')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50-fixed rounded-lg transition-all"
            >
              Our Team
            </button> */}
            {/* <button 
              onClick={() => scrollToSection('insights')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50-fixed rounded-lg transition-all"
            >
              Insights
            </button> */}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* <button className="px-5 py-2 text-slate-700 hover:text-slate-900 transition-colors">
              Sign In
            </button> */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-slate-800-fixed text-white rounded-lg transition-colors hover:text-lime"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('jobs')} className="px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                Opportunities
              </button>
              <button onClick={() => scrollToSection('industries')} className="px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                Industries
              </button>
              <button onClick={() => scrollToSection('team')} className="px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                Our Team
              </button>
              <button onClick={() => scrollToSection('insights')} className="px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                Insights
              </button>
              {/* <button className="px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                Sign In
              </button> */}
              <button 
                onClick={() => scrollToSection('contact')}
                style={{cursor: 'pointer'}}
                className="px-4 py-2 bg-slate-800 text-blue rounded-lg text-left mx-4"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
