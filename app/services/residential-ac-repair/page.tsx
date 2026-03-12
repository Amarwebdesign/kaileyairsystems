"use client";

import React, { useState } from 'react';
import { 
  Snowflake, Thermometer, Wind, Droplets, Activity, 
  ShieldCheck, Award, Zap, Clock, CheckCircle2, 
  ArrowRight, MapPin, Plus, Minus, Wrench
} from 'lucide-react';

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

export default function ResidentialACRepair() {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 1. HERO / SERVICE INTRODUCTION */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <SectionTag text="Residential Services" color="blue" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Fast & Reliable Residential AC Repair
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            Don't sweat through the summer heat. Our certified technicians quickly diagnose and repair all major air conditioning brands to restore your home's comfort in no time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="primary" className="py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('contact-cta');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Schedule Repair Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 py-5 px-8 text-lg">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Warning Signs" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Common AC Problems We Fix</h2>
            <p className="text-xl text-gray-600">If you notice any of these symptoms, it's time to call in the professionals before a small issue becomes a costly replacement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Thermometer size={32} />, title: "Blowing Warm Air", desc: "Low refrigerant or a failing compressor can cause your system to blow warm instead of cool air." },
              { icon: <Wind size={32} />, title: "Weak Airflow", desc: "Often caused by clogged filters, blocked ductwork, or a failing blower motor." },
              { icon: <Activity size={32} />, title: "Strange Noises", desc: "Grinding, squealing, or banging sounds usually indicate a broken or loose internal component." },
              { icon: <Droplets size={32} />, title: "Water Leaks", desc: "A blocked drain tube or frozen evaporator coil can lead to pooling water around your unit." }
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
            <SectionTag text="How It Works" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our AC Repair Process</h2>
            <p className="text-xl text-gray-600">A streamlined, stress-free experience designed to get your AC back online swiftly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>

            {[
              { step: "01", title: "Schedule", desc: "Book a convenient time slot online or over the phone." },
              { step: "02", title: "Diagnose", desc: "Our certified tech inspects your AC to pinpoint the exact failure." },
              { step: "03", title: "Approve", desc: "We provide an upfront, flat-rate quote before any work begins." },
              { step: "04", title: "Repair", desc: "We fix the issue using premium parts and test the system thoroughly." }
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
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1000" 
                alt="AC Repair Benefits" 
                className="rounded-3xl shadow-2xl object-cover h-125 w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#00AEEF] p-8 rounded-3xl shadow-xl hidden md:block text-white">
                <Snowflake size={40} className="mb-4" />
                <h4 className="font-bold text-xl">Restore Your Comfort</h4>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionTag text="The Value of Timely Repair" color="orange" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Fix Your AC Now?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ignoring a struggling air conditioner won't make the problem go away—it usually makes it worse. Prompt professional repair offers immediate benefits.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { title: "Lower Energy Bills", text: "A repaired, efficient system uses significantly less electricity." },
                  { title: "Extended Lifespan", text: "Fixing minor issues prevents catastrophic system failures." },
                  { title: "Improved Air Quality", text: "Proper airflow and humidity control keep your indoor air healthy." },
                  { title: "Quiet Operation", text: "Eliminate those annoying rattles, bangs, and squeaks." }
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Bay Area's Trusted Choice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Certified Experts", desc: "NATE and EPA certified technicians with factory training." },
              { icon: <Zap size={32} />, title: "Fast Response", desc: "Fully stocked trucks ready for rapid, same-day repairs." },
              { icon: <ShieldCheck size={32} />, title: "Upfront Pricing", desc: "No hidden fees. You know the price before we start." },
              { icon: <Clock size={32} />, title: "24/7 Support", desc: "Round-the-clock emergency service available." }
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
          <h3 className="text-2xl font-black text-gray-900 mb-6">Proudly Repairing ACs Across The Bay Area</h3>
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
            <h2 className="text-4xl font-black text-gray-900">AC Repair FAQs</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {[
              {
                question: "How long does a typical AC repair take?",
                answer: "Most standard repairs, such as replacing a capacitor or unblocking a drain line, can be completed in 1 to 2 hours. More complex issues like replacing a compressor or fixing a severe refrigerant leak may take a half-day or more. Our fully stocked trucks help us complete most jobs on the first visit."
              },
              {
                question: "Should I repair or replace my air conditioner?",
                answer: "A good rule of thumb is the '$5,000 rule'. Multiply the age of your equipment by the estimated repair cost. If the number exceeds $5,000, replacement is usually the better financial choice. We will always give you an honest assessment of whether a repair is worth the investment."
              },
              {
                question: "Why is my AC running but not cooling the house?",
                answer: "This is often caused by a blocked air filter, a dirty evaporator coil, or low refrigerant levels. Turn the unit off to prevent further damage and call a professional to diagnose the exact cause."
              },
              {
                question: "Do you offer warranties on your repair work?",
                answer: "Yes! We stand behind our work. All of our residential AC repairs come with a standard parts and labor warranty, giving you peace of mind that the fix will last."
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need Your AC Fixed Today?</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Our dispatchers are standing by. Book your diagnostic appointment now and let Kailey Air Systems restore your comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="white" className="py-5 px-10 text-lg group">
              Book Online Now
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