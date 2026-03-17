"use client";

import React, { useState } from 'react';
import { 
  Snowflake, Thermometer, Activity, 
  ShieldCheck, Award, Zap, Clock, CheckCircle2, 
  ArrowRight, MapPin, Plus, Minus, Wrench, Settings,
  TrendingDown, ThumbsUp
} from 'lucide-react';

// --- LOCAL UI COMPONENTS (For copy-paste ease) ---
const Button = ({ children, variant = 'primary', className = '', ...props }: { children: React.ReactNode, variant?: string, className?: string, [key: string]: any }) => {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 px-8 py-4 text-sm md:text-base";
  const variants: Record<string, string> = {
    primary: "bg-[#F26522] text-white hover:bg-[#d9561a] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5",
    secondary: "bg-[#00AEEF] text-white hover:bg-[#009bd6] shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    white: "bg-white text-gray-900 hover:bg-gray-50 shadow-md"
  };
  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionTag = ({ text, color = 'blue' }: { text: string, color?: string }) => {
  const colorClass = color === 'blue' ? 'text-[#00AEEF] bg-cyan-50' : 'text-[#F26522] bg-orange-50';
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-6 ${colorClass}`}>
      {text}
    </span>
  );
};

// Local FAQ Component
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-[#00AEEF]' : 'text-gray-900 group-hover:text-[#F26522]'}`}>
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          {isOpen ? <Minus size={18} className="text-[#F26522]" /> : <Plus size={18} className="text-[#00AEEF]" />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function ResidentialACInstallation() {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 1. HERO / SERVICE INTRODUCTION */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl mt-14">
          <SectionTag text="Residential Services" color="blue" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Professional Residential AC Installation
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            Upgrade your home's comfort with a high-efficiency air conditioning system. We provide expert load calculation, flawless installation, and tailored financing options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="primary" className="py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('contact-cta');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get a Free Estimate
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 py-5 px-8 text-lg">
              View Financing Options
            </Button>
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS / SIGNS YOU NEED REPLACEMENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Time For An Upgrade?" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Signs You Need a New AC</h2>
            <p className="text-xl text-gray-600">Sometimes repairing an old unit costs more than it's worth. Look out for these key indicators that it's time for an AC replacement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={32} />, title: "System is 10-15+ Years Old", desc: "Air conditioners lose efficiency over time. If yours is over a decade old, a modern unit will drastically reduce energy consumption." },
              { icon: <Wrench size={32} />, title: "Frequent Costly Repairs", desc: "If you're constantly calling for repairs, or facing a massive bill for a new compressor, replacing the unit is a smarter investment." },
              { icon: <TrendingDown size={32} />, title: "Rising Energy Bills", desc: "An unexplained spike in your summer electricity bills is a strong sign your current system is working too hard to cool your home." },
              { icon: <Thermometer size={32} />, title: "Uneven Cooling", desc: "Hot spots in certain rooms or a system that struggles to reach your thermostat setting indicates it's losing its cooling capacity." }
            ].map((issue, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#00AEEF] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#F26522] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {issue.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{issue.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionTag text="Precision Installation" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Installation Process</h2>
            <p className="text-xl text-gray-600">We don't just swap boxes. A proper installation ensures your system lasts longer and performs at its peak efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>

            {[
              { step: "01", title: "Consultation & Sizing", desc: "We perform a strict Manual J load calculation to ensure your new AC is perfectly sized for your home." },
              { step: "02", title: "System Selection", desc: "We present good, better, and best options that fit your budget and energy efficiency goals." },
              { step: "03", title: "Expert Installation", desc: "Our certified technicians safely remove your old unit and install the new system flawlessly." },
              { step: "04", title: "Testing & Handover", desc: "We calibrate the system, walk you through the new thermostat, and leave your home spotless." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 shadow-xl rounded-full flex items-center justify-center text-3xl font-black text-[#00AEEF] mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <img 
                src="/images/ac-installation/ac-system.webp" 
                alt="New AC Installation Benefits" 
                className="rounded-3xl shadow-2xl object-cover botom-center h-200 w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#F26522] p-8 rounded-3xl shadow-xl hidden md:block text-white">
                <Settings size={40} className="mb-4" />
                <h4 className="font-bold text-xl">High-Efficiency Systems</h4>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionTag text="The Upgrade Advantage" color="orange" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Benefits of a New AC System</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Upgrading your air conditioner is an investment in your home's value and your family's daily comfort. Modern systems offer incredible advantages over older models.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { title: "Slash Energy Costs", text: "Modern SEER2-rated air conditioners consume up to 40% less energy." },
                  { title: "Smart Home Integration", text: "Control your comfort from anywhere with Wi-Fi enabled smart thermostats." },
                  { title: "Whisper-Quiet Operation", text: "Variable-speed technology ensures your new AC cools without the noise." },
                  { title: "Iron-Clad Warranties", text: "Enjoy up to 10 years of peace of mind with comprehensive manufacturer warranties." }
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-[#00AEEF] mr-4 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{benefit.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Kailey Air Systems" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Bay Area's Trusted Installers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Certified Experts", desc: "NATE and EPA certified technicians with factory training." },
              { icon: <ThumbsUp size={32} />, title: "Proper Sizing", desc: "We never guess. We calculate exact loads for perfect efficiency." },
              { icon: <ShieldCheck size={32} />, title: "Upfront Quotes", desc: "Clear, detailed estimates with absolutely no hidden fees." },
              { icon: <Activity size={32} />, title: "Flexible Financing", desc: "Affordable monthly payment plans with approved credit." }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="text-[#F26522] mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICE AREAS */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-6">Installing Comfort Across The Bay Area</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Los Gatos", "Campbell", "Fremont", "Gilroy", "Morgan Hill"].map((city) => (
              <span key={city} className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-medium text-sm">
                <MapPin size={14} className="text-[#F26522] mr-2" /> {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <SectionTag text="Questions?" color="blue" />
            <h2 className="text-4xl font-black text-gray-900">AC Installation FAQs</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {[
              {
                question: "How long does a new AC installation take?",
                answer: "In most residential cases, a standard AC replacement takes about one full day (4 to 8 hours). If we need to modify ductwork or it is a highly complex installation, it may take slightly longer, but we will always communicate the timeline upfront."
              },
              {
                question: "How do I know what size AC I need?",
                answer: "Bigger is not always better. An oversized AC will cycle on and off too quickly, failing to remove humidity. We perform a 'Manual J' load calculation taking into account your home's square footage, insulation, windows, and layout to recommend the perfect size."
              },
              {
                question: "Should I replace my furnace at the same time as my AC?",
                answer: "Often, yes. Your AC and furnace share the same blower motor and indoor coil. If your furnace is over 10 years old, replacing both at the same time ensures the systems communicate perfectly, maximizes energy efficiency, and saves you money on overlapping labor costs."
              },
              {
                question: "Do you offer financing options for new systems?",
                answer: "Yes, we offer a variety of flexible financing options with approved credit. We can help you find a monthly payment plan that fits your budget comfortably, sometimes with 0% interest promotions."
              }
            ].map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section id="contact-cta" className="py-24 bg-[#00AEEF] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready for a Free In-Home Estimate?</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Take the first step toward ultimate home comfort. Contact our experts today to schedule your consultation and find the perfect AC for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="white" className="py-5 px-10 text-lg group">
              Get Your Free Quote
              <ArrowRight size={20} className="ml-3 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="primary" className="py-5 px-10 text-lg bg-gray-900 hover:bg-black border-none text-white shadow-none">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}