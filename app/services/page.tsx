"use client";

import React from 'react';
import { 
  Snowflake, Flame, Wind, Wrench, ShieldCheck, Award, Zap, 
  Clock, CheckCircle2, ArrowRight, MapPin, Building2, 
  Home as HomeIcon, Settings, Thermometer, PhoneCall
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

// --- SERVICE DATA ---
const RESIDENTIAL_SERVICES = [
  { name: "Residential AC Repair", icon: <Snowflake size={24} /> },
  { name: "Residential AC Installation", icon: <Settings size={24} /> },
  { name: "Residential AC Maintenance", icon: <CheckCircle2 size={24} /> },
  { name: "Residential Heating Repair", icon: <Flame size={24} /> },
  { name: "Residential Heating Installation", icon: <Settings size={24} /> },
  { name: "Residential Heating Maintenance", icon: <CheckCircle2 size={24} /> },
  { name: "Furnace Repair", icon: <Wrench size={24} /> },
  { name: "Heat Pump Services", icon: <Zap size={24} /> },
  { name: "Ductless Mini Split Systems", icon: <Wind size={24} /> },
  { name: "Indoor Air Quality", icon: <ShieldCheck size={24} /> },
  { name: "Thermostat Installation", icon: <Thermometer size={24} /> },
  { name: "Ductwork Services", icon: <Settings size={24} /> }
];

const COMMERCIAL_SERVICES = [
  { name: "Commercial AC Repair", icon: <Snowflake size={24} /> },
  { name: "Commercial AC Installation", icon: <Settings size={24} /> },
  { name: "Commercial Heating Repair", icon: <Flame size={24} /> },
  { name: "Rooftop Unit (RTU) Services", icon: <Building2 size={24} /> },
  { name: "Commercial HVAC Maintenance Plans", icon: <CheckCircle2 size={24} /> },
  { name: "HVAC System Replacement", icon: <Settings size={24} /> },
  { name: "Preventive Maintenance Contracts", icon: <ShieldCheck size={24} /> },
  { name: "Commercial Refrigeration", icon: <Snowflake size={24} /> }
];

export default function ServicesPage() {
  return (
    <div className="animate-fadeInbg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <SectionTag text="Our Capabilities" color="blue" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Comprehensive HVAC Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            From routine residential tune-ups to massive commercial rooftop unit installations, Kailey Air Systems provides end-to-end climate control solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="primary" className="py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('contact-cta');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Schedule Service
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 py-5 px-8 text-lg" onClick={() => {
              const el = document.getElementById('residential-services');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* 2. RESIDENTIAL HVAC SERVICES */}
      <section id="residential-services" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
            <div className="lg:w-2/3">
              <SectionTag text="Home Comfort" color="blue" />
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 flex items-center">
                <HomeIcon className="mr-4 text-[#00AEEF]" size={48} />
                Residential HVAC Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Keep your home comfortable year-round with our full suite of residential heating, cooling, and air quality services.
              </p>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end">
              <Button variant="outline" className="text-[#00AEEF] border-[#00AEEF] hover:bg-[#00AEEF] group">
                View Maintenance Plans <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {RESIDENTIAL_SERVICES.map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#00AEEF] hover:shadow-lg transition-all group cursor-pointer flex items-center">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00AEEF] shadow-sm mr-4 group-hover:bg-[#00AEEF] group-hover:text-white transition-colors shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-md font-bold text-gray-900 group-hover:text-[#00AEEF] transition-colors">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMMERCIAL HVAC SERVICES */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
            <div className="lg:w-2/3">
              <SectionTag text="Business Solutions" color="orange" />
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 flex items-center">
                <Building2 className="mr-4 text-[#F26522]" size={48} />
                Commercial HVAC Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Robust, heavy-duty climate control solutions designed to keep your business operating smoothly and your energy costs down.
              </p>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end">
              <Button variant="outline" className="text-[#F26522] border-[#F26522] hover:bg-[#F26522] hover:border-[#F26522] group">
                Commercial Contracts <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_SERVICES.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#F26522] hover:shadow-lg transition-all group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-[#F26522] mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-500 font-medium group-hover:text-[#F26522] flex items-center transition-colors">
                  Learn more <ArrowRight size={14} className="ml-1" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY HVAC SERVICES */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-150 h-150 bg-red-600 rounded-full blur-[150px] opacity-20 -mr-75 -mt-75"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-6 text-red-500 bg-red-500/10 border border-red-500/20">
              Immediate Response
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Emergency HVAC Services</h2>
            <p className="text-xl text-gray-400">
              Breakdowns don't happen on a schedule. Our emergency dispatch team is ready to respond immediately to critical heating and cooling failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 transition-colors flex items-center">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mr-6 shrink-0">
                <Snowflake size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">24/7 AC Repair</h3>
                <p className="text-gray-400">Immediate relief from extreme heat and critical AC system failures.</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 transition-colors flex items-center">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mr-6 shrink-0">
                <Flame size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">24/7 Heating Repair</h3>
                <p className="text-gray-400">Fast response to restore warmth and safety to your property.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="tel:8773384199" className="inline-flex items-center justify-center bg-red-600 text-white font-bold text-lg py-5 px-10 rounded-xl hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1">
              <PhoneCall size={24} className="mr-3" /> Call Emergency Dispatch Now
            </a>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="Kailey Air Systems" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">The Bay Area's Trusted Choice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Certified Experts", desc: "NATE and EPA certified technicians with factory training." },
              { icon: <Zap size={32} />, title: "Fast Response", desc: "Fully stocked trucks ready for rapid, same-day repairs." },
              { icon: <ShieldCheck size={32} />, title: "Upfront Pricing", desc: "No hidden fees. You know the price before we start." },
              { icon: <Clock size={32} />, title: "24/7 Support", desc: "Round-the-clock emergency service available." }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="text-[#00AEEF] mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICE AREAS */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-6">Proudly Serving The Greater Bay Area</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Los Gatos", "Campbell", "Fremont", "Gilroy", "Morgan Hill"].map((city) => (
              <span key={city} className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium text-sm shadow-sm">
                <MapPin size={14} className="text-[#F26522] mr-2" /> {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section id="contact-cta" className="py-24 bg-[#00AEEF] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready for Reliable Comfort?</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Whether it's a minor repair or a major commercial installation, our experts are ready to help. Book your service appointment today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button variant="white" className="py-5 px-10 text-lg group">
              Schedule Service
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