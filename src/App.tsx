import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Overview } from './components/Overview';
import { Services } from './components/Services';
import { FeaturedJobs } from './components/FeaturedJobs';
import { Industries } from './components/Industries';
import { Team } from './components/Team';
import { Insights } from './components/Insights';
import { ClientLogos } from './components/ClientLogos';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <About /> */}
      <Overview />
      <Services />
      {/* <FeaturedJobs /> */}
      <Industries />
      {/* <Team /> */}
      {/* <ClientLogos /> */}
      {/* <Insights /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
