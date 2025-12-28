import React from "react";
import { ArrowRight, Search, Building2, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-700">
                Trusted by 500+ Companies
              </span>
            </div>

            <h1 className="text-slate-900 mb-6 leading-tight">
              Building Teams That Drive Success
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in connecting exceptional talent with
              forward-thinking organizations. Our comprehensive recruitment
              solutions combine industry expertise, extensive networks, and a
              personalized approach to deliver results that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => {
                  const element = document.getElementById("industries");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-blue rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
              >
                Explore Opportunities
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-800-fixed hover:text-white transition-colors"
              >
                For Employers
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Users size={20} className="text-slate-600" />
                  <span>50+</span>
                </div>
                <div className="text-sm text-slate-600">Placements Made</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Building2 size={20} className="text-slate-600" />
                  <span>10+</span>
                </div>
                <div className="text-sm text-slate-600">Partner Companies</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Search size={20} className="text-slate-600" />
                  <span>92%</span>
                </div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-2xl -z-10"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758599543154-af711da44cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwxfHx8fDE3NjYwMTc5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional team"
              className="rounded-xl shadow-xl w-full h-auto"
            />

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
              <div className="text-sm text-slate-600 mb-1">
                Average Time to Hire
              </div>
              <div className="text-slate-900">7 - 15 Days</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
              <div className="text-sm text-slate-600 mb-1">
                Client Satisfaction
              </div>
              <div className="text-slate-900">4.95/5.0 ⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
