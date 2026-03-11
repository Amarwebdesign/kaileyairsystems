"use client";
import { CreditCard, Wrench, CheckCircle2, LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  accentColor: string;
}

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description, 
  items, 
  buttonText, 
  accentColor 
}: ValueCardProps) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-14 hover:bg-white/10 transition duration-500 flex flex-col h-full group">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${accentColor}`}>
      <Icon size={32} className="text-white" />
    </div>
    
    <h3 className="text-3xl font-black mb-4 text-white">{title}</h3>
    <p className="text-gray-400 text-lg mb-8 leading-relaxed">{description}</p>
    
    <div className="space-y-4 mb-10 grow">
      {items.map((item, i) => (
        <div key={i} className="flex items-center text-gray-300">
          <CheckCircle2 className="mr-3 text-white opacity-40" size={20}/> 
          <span className="font-medium">{item}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full sm:w-max px-10 py-4 rounded-xl font-bold text-white transition-all shadow-lg ${accentColor} hover:brightness-125 active:scale-95`}>
      {buttonText}
    </button>
  </div>
);

export default function ValueAdded() {
  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative"> 
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F26522]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <ValueCard 
          title="Flexible Financing"
          icon={CreditCard}
          accentColor="bg-[#00AEEF]"
          description="Upgrade to a high-efficiency system today without breaking the bank. We offer tailored payment solutions to fit any budget."
          items={["Zero down options", "Instant approval", "Utility energy rebates"]}
          buttonText="Learn How to Apply"
        />
        <ValueCard 
          title="Maintenance Plans"
          icon={Wrench}
          accentColor="bg-[#F26522]"
          description="The best way to save money on HVAC is to never let it break. Join our priority club for peace of mind year-round."
          items={["Priority 24/7 scheduling", "15% Parts discounts", "Bi-annual deep tuning"]}
          buttonText="View Plan Benefits"
        />
      </div>
    </section>
  );
}