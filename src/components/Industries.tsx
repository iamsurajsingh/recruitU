import React from "react";
import {
  TrendingUp,
  Heart,
  Factory,
  GraduationCap,
  ShoppingCart,
  Building2,
  Zap,
  ShoppingBag,
  Code,
  FlaskConical,
  MapPinHouse,
  Hospital,
  Hotel,
  HotelIcon,
  CarFront,
  Droplet,
  CogIcon,
  PaintBucket,
  Landmark,
} from "lucide-react";

export function Industries() {
  const [showAll, setShowAll] = React.useState(false);

  const industries = [
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      name: "FMCG & FMCD",
      description:
        "Sales, marketing, operations, compliance, and customer engagement.",
      // stats: '20+ placements',
      roles: [
        "Key Account Manager",
        "ASM TSM RSM",
        "Procurement",
        "Brand Manager",
        "Marketing Manager",
        "Packaging Supervisor",
        "Regulatory/Compliance Executive",
        "Outlet/Store Manager",
      ],
    },
    {
      icon: <Factory className="w-7 h-7" />,
      name: "Manufacturing & Industrial",
      description:
        "Operations, quality control, supply chain continuity, and on-site execution",
      // stats: '190+ placements',
      roles: [
        "Supply Chain Manager",
        "Production Supervisor",
        "Plant Head",
        "Quality Assurance Executive",
        "Site Supervisor",
      ],
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      name: "Financial Services",
      description:
        "Financial planning, compliance, risk management, accounting accuracy, and cash flow operations",
      // stats: '30+ placements',
      roles: [
        "FP&A Analyst",
        "Tax Analyst",
        "AML/KYC Analyst",
        "Accountant",
        "AP/AR Analyst",
      ],
    },
    {
      icon: <Heart className="w-7 h-7" />,
      name: "Healthcare & Life Sciences",
      description: "Product adoption, sales growth, key account management, logistics efficiency, and quality compliance",
      // stats: '220+ placements',
      roles: [
        "Product Specialist",
        "ASM & RSM",
        "Key Account Manager",
        "Logistics Coordinator",
        "QA/QC Specialist",
      ],
    },

    {
      icon: <Code className="w-7 h-7" />,
      name: "IT",
      description: "Analytics, enterprise consulting, IT support, cybersecurity, and delivery management",
      // "Store management, merchandising, digital commerce, and marketing",
      // stats: '165+ placements',
      roles: [
        "Data Analyst",
        "HCM Consultant",
        "Oracle EBS Consultant",
        "IT Support Executive",
        "Cyber Security Analyst",
        "Delivery Manager",
      ],
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      name: "Education & Training",
      description:
        "Academic leadership, instructional design, and educational technology",
      // stats: '140+ placements',
      roles: [
        "Office Coordinator",
        "Admin, Event & Marketing",
        "Chief Manager Accounts",
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      name: "Energy & Utilities",
      description: "Renewable energy, utilities management, and engineering",
      // stats: '125+ placements',
      roles: [
        "Renewable Energy",
        "Grid Management",
        "Sustainability",
        "Engineering",
      ],
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      name: "Chemical",
      description: "Shift supervision, inventory control, and compliance adherence",
      // stats: '125+ placements',
      roles: [
        "Shift Incharge",
        "Warehouse/Inventory Manager",
        "Compliance Officer",
      ],
    },
    {
      icon: <MapPinHouse className="w-7 h-7" />,
      name: "Real Estate",
      description: "Financial underwriting, interior design execution, and effective property management",
      // stats: '125+ placements',
      roles: ["Underwriter", "Interior Designer", "Property Manager"],
    },
    {
      icon: <Hotel className="w-7 h-7" />,
      name: "Hospitality",
      description: "Hotel operations, guest satisfaction, and effective front office management",
      // stats: '125+ placements',
      roles: ["General Manager", "Duty Manager", "Front Office Executive"],
    },
    {
      icon: <CarFront className="w-7 h-7" />,
      name: "Automobile",
      description: "Vehicle production, overall business leadership, and dealership operations to achieve growth and customer satisfaction",
      // stats: '125+ placements',
      roles: ["Production Engineer", "General Manager", "Dealership Head"],
    },
    {
      icon: <Droplet className="w-7 h-7" />,
      name: "Oil & Gas",
      description: "Logistics coordination, safe refinery and process operations, and reliable utility systems in oil and gas operations",
      // stats: '125+ placements',
      roles: [
        "Logistics coordinator",
        "Refinery / Process Engineer",
        "Boiler / Utility Engineer",
      ],
    },
    {
      icon: <CogIcon className="w-7 h-7" />,
      name: "Automation",
      description: "Cost estimation, quality control, panel design, and on-site execution",
      // stats: '125+ placements',
      roles: [
        "Estimation & Cost engineer",
        "QC Engineer",
        "Control Panel Design Engineer",
        "Site Supervisor",
      ],
    },
    {
      icon: <PaintBucket className="w-7 h-7" />,
      name: "Paints & Construction Chemicals",
      description: "Product innovation, sales expansion, procurement efficiency and dealer network development",
      // stats: '125+ placements',
      roles: [
        "R&D / Formulation Chemist",
        "ASM RSM",
        "Purchase Executive",
        "Dealer Development Executive",
      ],
    },
    {
      icon: <Landmark className="w-7 h-7" />,
      name: "Banking",
      description: "Domestic, International and Investment",
      // stats: '125+ placements',
      roles: [
        "Private Equity Analyst",
        "Equity Research Analyst",
        "AML / KYC Analyst",
        "Program Manager",
        "PMO Lead",
        "Branch Manager",
      ],
    },
  ];

  const displayedIndustries = showAll ? industries : industries.slice(0, 8);

  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-900 mb-4">Industry Specializations</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Deep expertise across diverse sectors, backed by dedicated
            recruiters who understand the unique challenges and opportunities in
            each industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedIndustries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 hover:border-slate-200"
            >
              <div className="w-14 h-14 bg-slate-800-fixed text-slate-200 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-800 group-hover:text-blue transition-all">
                {industry.icon}
              </div>

              <h3 className="text-slate-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {industry.description}
              </p>

              <div className="mb-4 pb-4 border-b border-slate-100">
                {/* <span className="text-xs text-slate-500">{industry.stats}</span> */}
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-500 mb-2">Roles:</div>
                <div className="flex flex-wrap gap-1">
                  {industry.roles.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16 padding-top-8 mt-12">
          <button
            className="w-20 px-5 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 cursor-pointer transition-colors"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
