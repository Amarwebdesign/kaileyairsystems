"use client";

import React, { useState } from 'react';
import { 
  Flame, Thermometer, AlertTriangle, 
  ShieldCheck, Award, Zap, Clock, CheckCircle2, 
  ArrowRight, MapPin, Plus, Minus, Wrench, 
  Wind, Activity
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

export default function FurnaceRepair() {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 1. HERO / SERVICE INTRODUCTION */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden mt-12">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <SectionTag text="Expert Heating Services" color="orange" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Fast & Professional Furnace Repair
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            When your furnace fails, you need an immediate solution. Our certified technicians accurately diagnose and repair all gas, electric, and oil furnaces to safely restore your home's warmth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="primary" className="py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('contact-cta');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Schedule Repair Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 py-5 px-8 text-lg" onClick={() => window.location.href = 'tel:8773384199'}>
              Call (877) 338-4199
            </Button>
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS AVOIDED / WARNING SIGNS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Warning Signs" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Common Furnace Problems</h2>
            <p className="text-xl text-gray-600">A malfunctioning furnace is a serious safety concern. If you notice any of these signs, turn your unit off and call our professionals immediately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wind size={32} />, title: "Blowing Cold Air", desc: "This often points to a malfunctioning limit switch, a dirty flame sensor, or an extinguished pilot light preventing burner ignition." },
              { icon: <AlertTriangle size={32} />, title: "Strange Noises", desc: "Squealing, banging, or rumbling sounds indicate mechanical wear, such as a failing blower motor or loose internal components." },
              { icon: <Flame size={32} />, title: "Yellow Burner Flame", desc: "A healthy gas flame should be crisp and blue. A flickering yellow flame indicates a dangerous mix of gas and oxygen, potentially creating carbon monoxide." },
              { icon: <Activity size={32} />, title: "Short Cycling", desc: "If your furnace turns on and shuts off rapidly without heating your home, it is overheating, usually due to a severely clogged air filter." }
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
            <SectionTag text="How It Works" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Furnace Repair Process</h2>
            <p className="text-xl text-gray-600">A streamlined, stress-free process designed to quickly get your heating system back online safely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>

            {[
              { step: "01", title: "Schedule", desc: "Book your appointment online or call us directly. We offer 24/7 emergency dispatch for total heating failures." },
              { step: "02", title: "Diagnose", desc: "Our certified technician performs a thorough safety and mechanical inspection to find the exact root cause." },
              { step: "03", title: "Approve", desc: "We explain the issue in plain English and provide a flat-rate, upfront quote before starting any work." },
              { step: "04", title: "Repair", desc: "We execute the repair using high-quality parts, verify all safety controls, and test the furnace cycle." }
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
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000" 
                alt="Furnace Repair Benefits" 
                className="rounded-3xl shadow-2xl object-cover h-125 w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#F26522] p-8 rounded-3xl shadow-xl hidden md:block text-white">
                <ShieldCheck size={40} className="mb-4" />
                <h4 className="font-bold text-xl">Protect Your Home</h4>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionTag text="The Value of Timely Repair" color="orange" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Fix Your Furnace Now?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Postponing furnace repairs doesn't save money—it typically leads to massive breakdowns during freezing nights. Prompt attention ensures safety and efficiency.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { title: "Prevent Carbon Monoxide Leaks", text: "A cracked heat exchanger or blocked flue is deadly. We test for and eliminate CO risks." },
                  { title: "Restore Consistent Warmth", text: "Stop dealing with freezing rooms and constantly adjusting the thermostat. Get even heat back." },
                  { title: "Lower Energy Consumption", text: "A repaired, correctly cycling furnace stops wasting expensive natural gas or electricity." },
                  { title: "Avoid Premature Replacement", text: "Fixing a minor issue like a failing limit switch prevents the system from overheating and destroying the entire unit." }
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Bay Area's Furnace Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Certified Techs", desc: "Our NATE-certified technicians are experts in diagnosing complex gas and electric furnace issues." },
              { icon: <Zap size={32} />, title: "Rapid Dispatch", desc: "Fully stocked trucks ready to roll for fast, same-day heating repairs." },
              { icon: <ShieldCheck size={32} />, title: "Upfront Pricing", desc: "Clear, detailed estimates with absolutely no hidden fees before we start." },
              { icon: <Clock size={32} />, title: "24/7 Support", desc: "Round-the-clock emergency furnace service for those freezing winter nights." }
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
          <h3 className="text-2xl font-black text-gray-900 mb-6">Repairing Furnaces Across The Bay Area</h3>
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
            <h2 className="text-4xl font-black text-gray-900">Furnace Repair FAQs</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {[
              {
                question: "How much does a furnace repair typically cost?",
                answer: "Repair costs vary widely depending on the issue. Replacing a simple flame sensor or capacitor is relatively inexpensive, while replacing a control board or draft inducer motor costs more. We always provide a flat-rate, upfront quote before any work begins so there are no surprises."
              },
              {
                question: "Is it a bad sign if my furnace smells like burning?",
                answer: "A burning dust smell is very common the first time you turn on your heater for the season, as it burns off settled dust. However, if the smell persists for more than a day, smells like burning plastic, or smells like rotten eggs (gas leak), shut the system off immediately and call us."
              },
              {
                question: "Why is my furnace blowing cold air?",
                answer: "First, check your thermostat to ensure the fan is set to 'Auto' rather than 'On'. If it's set correctly, the issue could be an unlit pilot light, a dirty flame sensor preventing the burners from igniting, or a triggered limit switch. This requires professional diagnosis."
              },
              {
                question: "How do I know if my heat exchanger is cracked?",
                answer: "A cracked heat exchanger is extremely dangerous as it leaks carbon monoxide. Signs include soot buildup inside the furnace, a yellow (rather than blue) burner flame, or your home's CO detectors going off. Only a professional inspection can confirm a crack, which typically requires a full furnace replacement for safety."
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need Your Furnace Fixed Now?</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Don't let a broken furnace compromise your family's comfort and safety. Our dispatchers are standing by.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="white" className="py-5 px-10 text-lg group">
              Book a Diagnostic
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