"use client";

import React, { useState } from 'react';
import { 
  Flame, Thermometer, AlertTriangle, 
  ShieldCheck, Award, Zap, Clock, CheckCircle2, 
  ArrowRight, MapPin, Plus, Minus, Wrench, 
  Wind, Activity, Snowflake, Settings
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

export default function HeatPumpServices() {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 1. HERO / SERVICE INTRODUCTION */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl mt-12">
          <SectionTag text="Year-Round Comfort" color="blue" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Expert Heat Pump Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            Enjoy highly efficient heating and cooling from a single system. Our certified technicians specialize in heat pump repair, maintenance, and complete system installations tailored for Bay Area homes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="primary" className="py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('contact-cta');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Schedule Service Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 py-5 px-8 text-lg" onClick={() => window.location.href = 'tel:8773384199'}>
              Call (877) 338-4199
            </Button>
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS / WARNING SIGNS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Troubleshooting" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Common Heat Pump Problems</h2>
            <p className="text-xl text-gray-600">Because heat pumps run year-round, they experience more wear and tear than standard ACs or furnaces. Watch out for these common issues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Snowflake size={32} />, title: "Stuck in One Mode", desc: "If your heat pump won't switch from cooling to heating (or vice versa), the reversing valve is likely stuck or broken and needs replacement." },
              { icon: <AlertTriangle size={32} />, title: "Outdoor Unit Freezing", desc: "While a light frost is normal in winter, a solid block of ice indicates a failing defrost control board, low refrigerant, or bad fan motor." },
              { icon: <Activity size={32} />, title: "Constant Cycling", desc: "Short cycling can be caused by a severely clogged air filter, thermostat issues, or leaking refrigerant preventing proper pressure." },
              { icon: <Wind size={32} />, title: "Blowing Tepid Air", desc: "If the air isn't warm enough in winter or cool enough in summer, you likely have a compressor issue or a refrigerant leak." }
            ].map((issue, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#00AEEF] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#00AEEF] mb-6 shadow-sm group-hover:scale-110 transition-transform">
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Heat Pump Service Process</h2>
            <p className="text-xl text-gray-600">Whether you need a quick repair or a full system replacement, our process is designed to be smooth and transparent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>

            {[
              { step: "01", title: "Schedule", desc: "Book an appointment online or call us. We offer flexible scheduling and 24/7 emergency dispatch." },
              { step: "02", title: "Diagnose", desc: "Our certified tech performs a full electrical and refrigerant inspection to find the root cause." },
              { step: "03", title: "Approve", desc: "We explain your options (repair vs. replace) and provide a flat-rate, upfront quote." },
              { step: "04", title: "Execute", desc: "We complete the repair or installation using premium parts and test the system in both heating and cooling modes." }
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

      {/* 4. BENEFITS OF HEAT PUMPS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1521579730302-127e94e5a07c?auto=format&fit=crop&q=80&w=1000" 
                alt="Heat Pump Benefits" 
                className="rounded-3xl shadow-2xl object-cover h-125 w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#F26522] p-8 rounded-3xl shadow-xl hidden md:block text-white">
                <Settings size={40} className="mb-4" />
                <h4 className="font-bold text-xl">Ultimate Efficiency</h4>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionTag text="Why Upgrade?" color="orange" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">The Heat Pump Advantage</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Heat pumps are the most energy-efficient HVAC solution available today. Because they move heat rather than generating it, they offer incredible benefits for Bay Area homeowners.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { title: "Two-in-One System", text: "A heat pump acts as both a high-efficiency air conditioner in the summer and a powerful heater in the winter." },
                  { title: "Massive Energy Savings", text: "Heat pumps can deliver up to three times more heat energy to a home than the electrical energy they consume." },
                  { title: "Eco-Friendly Comfort", text: "By running entirely on electricity, heat pumps eliminate the need to burn fossil fuels like natural gas in your home." },
                  { title: "Consistent, Even Heat", text: "Unlike the harsh blasts of a gas furnace, heat pumps provide a steady, gentle warmth that eliminates cold spots." }
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Bay Area's Heat Pump Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Certified Techs", desc: "Our technicians undergo specialized training for complex heat pump refrigeration cycles." },
              { icon: <Zap size={32} />, title: "Rapid Dispatch", desc: "Fully stocked trucks ready to roll for fast, same-day repairs." },
              { icon: <ShieldCheck size={32} />, title: "Upfront Pricing", desc: "Clear, detailed estimates with absolutely no hidden fees before we start." },
              { icon: <Clock size={32} />, title: "24/7 Support", desc: "Round-the-clock emergency service for sudden heating or cooling failures." }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="text-[#00AEEF] mb-6">{feature.icon}</div>
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
          <h3 className="text-2xl font-black text-gray-900 mb-6">Servicing Heat Pumps Across The Bay Area</h3>
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
            <h2 className="text-4xl font-black text-gray-900">Heat Pump FAQs</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {[
              {
                question: "How does a heat pump actually work?",
                answer: "Instead of generating heat by burning fuel, a heat pump uses electricity and refrigerant to absorb ambient heat from the outside air and transfer it into your home. In the summer, it reverses this process, acting exactly like a standard air conditioner to remove heat from your home."
              },
              {
                question: "Why is my heat pump blowing cold air in the winter?",
                answer: "This is a very common concern. Often, the heat pump is just in 'defrost mode', temporarily blowing cooler air to melt ice off the outdoor unit. If it blows cold air constantly, it could indicate a stuck reversing valve or low refrigerant, which requires a professional repair."
              },
              {
                question: "Are heat pumps effective in the Bay Area?",
                answer: "Yes, they are the perfect solution! Heat pumps are incredibly efficient in moderate climates like ours where winters rarely drop below freezing. They provide all the heat you need while slashing your energy bills compared to a gas furnace."
              },
              {
                question: "How long does a heat pump usually last?",
                answer: "Because a heat pump is used year-round for both heating and cooling, its lifespan is typically 10 to 15 years—slightly shorter than a dedicated furnace or AC unit. Regular bi-annual maintenance is critical to maximizing its lifespan."
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need Heat Pump Service Today?</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            From emergency repairs to high-efficiency system installations, our experts are ready to restore your comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="white" className="py-5 px-10 text-lg group">
              Book an Appointment
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