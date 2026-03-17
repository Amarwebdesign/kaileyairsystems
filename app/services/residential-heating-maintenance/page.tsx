"use client";

import React, { useState } from 'react';
import { 
  Flame, Thermometer, Activity, 
  ShieldCheck, Award, Zap, Clock, CheckCircle2, 
  ArrowRight, MapPin, Plus, Minus, Wrench, Settings,
  Wind, ClipboardCheck
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

export default function ResidentialHeatingMaintenance() {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 1. HERO / SERVICE INTRODUCTION */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl mt-12">
          <SectionTag text="Residential Services" color="orange" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Professional Heating Maintenance & Tune-Ups
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            Keep your furnace or heat pump running smoothly and safely all winter long. Our comprehensive maintenance checks prevent breakdowns, lower energy bills, and extend the lifespan of your unit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="primary" className="py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('contact-cta');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Schedule a Tune-Up
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 py-5 px-8 text-lg" onClick={() => window.location.href = 'tel:8773384199'}>
              Call (877) 338-4199
            </Button>
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS AVOIDED / WHY IT MATTERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Preventative Care" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Don't Wait for a Breakdown</h2>
            <p className="text-xl text-gray-600">Neglecting your heater puts unnecessary stress on the system and risks your family's safety. Routine maintenance helps you avoid these costly issues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wind size={32} />, title: "Clogged Filters & Ducts", desc: "Restricted airflow forces your furnace to work overtime, increasing wear and tear while driving up your heating costs." },
              { icon: <Flame size={32} />, title: "Dirty Burners & Sensors", desc: "Soot buildup can cause the flame sensor to fail or burners to ignite improperly, leaving you without heat." },
              { icon: <ShieldCheck size={32} />, title: "Carbon Monoxide Risks", desc: "A cracked heat exchanger is a silent danger. Annual inspections ensure no toxic gases are leaking into your home." },
              { icon: <Activity size={32} />, title: "Worn Electrical Parts", desc: "Loose connections or failing motors can cause the blower to short out unexpectedly during the coldest nights." }
            ].map((issue, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#F26522] hover:shadow-lg transition-all group">
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
            <SectionTag text="Thorough Inspection" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Maintenance Checklist</h2>
            <p className="text-xl text-gray-600">We perform a deep, multi-point inspection to ensure every component of your furnace or heat pump is operating safely and optimally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>

            {[
              { step: "01", title: "Inspect & Test", desc: "We test thermostat calibration, measure electrical voltage, and inspect all crucial safety controls." },
              { step: "02", title: "Deep Cleaning", desc: "We carefully clean the burner assembly, flame sensor, and blower motor, and check standard filters." },
              { step: "03", title: "Tune & Adjust", desc: "We tighten electrical connections, adjust gas pressure, and lubricate moving parts for smooth operation." },
              { step: "04", title: "Report & Advise", desc: "You receive a detailed system health report and honest advice on any recommended proactive repairs." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 shadow-xl rounded-full flex items-center justify-center text-3xl font-black text-[#F26522] mb-6">
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
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Heating Maintenance Benefits" 
                className="rounded-3xl shadow-2xl object-cover h-125 w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#F26522] p-8 rounded-3xl shadow-xl hidden md:block text-white">
                <ShieldCheck size={40} className="mb-4" />
                <h4 className="font-bold text-xl">Protect Your Investment</h4>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionTag text="The Value of Maintenance" color="orange" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Annual Tune-Ups Matter</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Regular heating maintenance pays for itself. A system that is tuned and cleaned annually performs better, breaks down less, and costs less to operate.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { title: "Maximum Safety", text: "We detect invisible dangers like carbon monoxide leaks before they threaten your family." },
                  { title: "Lower Energy Bills", text: "A clean, well-adjusted furnace uses significantly less gas or electricity to heat your home." },
                  { title: "Longer Equipment Lifespan", text: "Routine care reduces internal wear and can add 3 to 5 years of functional life to your heater." },
                  { title: "Warranty Compliance", text: "Most major manufacturers require proof of annual maintenance to keep their equipment warranties valid." }
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-[#F26522] mr-4 shrink-0 mt-1" size={24} />
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Bay Area's Maintenance Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Certified Techs", desc: "Our NATE-certified technicians are trained to safely service all major heating brands." },
              { icon: <ClipboardCheck size={32} />, title: "Thorough Checklists", desc: "We don't cut corners. Every tune-up follows a strict multi-point protocol." },
              { icon: <ShieldCheck size={32} />, title: "Honest Advice", desc: "We provide transparent health reports without pushy sales tactics." },
              { icon: <Activity size={32} />, title: "Maintenance Plans", desc: "Join our club for priority scheduling and exclusive repair discounts." }
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
          <h3 className="text-2xl font-black text-gray-900 mb-6">Providing Tune-Ups Across The Bay Area</h3>
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
            <h2 className="text-4xl font-black text-gray-900">Heating Maintenance FAQs</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {[
              {
                question: "How often should I have my heater maintained?",
                answer: "We highly recommend having your heating system professionally serviced at least once a year. The best time to schedule this is in the fall, right before the cold winter weather begins."
              },
              {
                question: "What exactly happens during a heating tune-up?",
                answer: "During a tune-up, our technicians clean the burner assembly, inspect the heat exchanger for cracks, test the flame sensor and ignitor, check gas pressure, lubricate the blower motor, and ensure all safety mechanisms are fully operational."
              },
              {
                question: "Do you offer a maintenance plan or membership?",
                answer: "Yes! We offer preventive maintenance contracts that include your bi-annual tune-ups (Heating in fall, AC in spring), priority scheduling, and discounts on any necessary repairs."
              },
              {
                question: "Can I just do the maintenance myself?",
                answer: "You should absolutely change your indoor air filters regularly! However, the deep internal cleaning, gas pressure testing, carbon monoxide checks, and electrical diagnostics require specialized tools and should only be performed by a licensed professional to ensure safety."
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Secure Your Winter Comfort</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Don't let a preventable breakdown leave you in the cold. Schedule your annual heating tune-up with our certified experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="white" className="py-5 px-10 text-lg group">
              Schedule Maintenance
              <ArrowRight size={20} className="ml-3 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="primary" className="py-5 px-10 text-lg bg-gray-900 hover:bg-black border-none text-white shadow-none" onClick={() => window.location.href = 'tel:8773384199'}>
              Call (877) 338-4199
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}