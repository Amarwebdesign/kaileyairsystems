"use client";

import {
  Home as HomeIcon,
  Building2,
  Zap,
  ChevronRight,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  variant: "orange" | "blue" | "dark";
  onLinkClick?: () => void;
  ctaText?: string;
}

const ExpertiseCard = ({
  title,
  description,
  items,
  icon: Icon,
  variant,
  onLinkClick,
  ctaText,
}: ExpertiseCardProps) => {
  const isDark = variant === "dark";

  const accentColor =
    variant === "orange"
      ? "text-[#F26522]"
      : variant === "blue"
        ? "text-[#00AEEF]"
        : "text-red-500";

  const bgColor = isDark
    ? "bg-gray-900 hover:bg-black"
    : "bg-gray-50 hover:shadow-2xl";

  const hoverBgColor =
    variant === "orange"
      ? "hover:bg-[#F26522]"
      : variant === "blue"
        ? "hover:bg-[#00AEEF]"
        : "";

  return (
    <div
      className={`group rounded-3xl p-10 transition-all duration-500 ${bgColor} ${!isDark ? hoverBgColor : ""} hover:-translate-y-2 flex flex-col h-full`}
    >
      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-colors duration-300 ${
          isDark
            ? "bg-gray-800 border border-gray-700"
            : "bg-white group-hover:bg-white/20"
        }`}
      >
        <Icon
          size={40}
          className={`${accentColor} ${!isDark ? "group-hover:text-white" : ""} transition-colors`}
        />
      </div>

      <h3
        className={`text-2xl font-black mb-4 transition-colors ${
          isDark ? "text-white" : "text-gray-900 group-hover:text-white"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mb-8 leading-relaxed text-lg grow ${
          isDark ? "text-gray-400" : "text-gray-600 group-hover:text-white/90"
        }`}
      >
        {description}
      </p>

      <ul
        className={`space-y-3 mb-10 font-medium ${
          isDark ? "text-gray-300" : "text-gray-700 group-hover:text-white"
        }`}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <ChevronRight
              size={16}
              className={`mr-2 shrink-0 ${accentColor} ${!isDark ? "group-hover:text-white" : ""}`}
            />
            {item}
          </li>
        ))}
      </ul>

      {ctaText && (
        <button
          onClick={onLinkClick}
          className={`font-bold flex items-center underline-offset-4 hover:underline transition-colors w-fit ${
            isDark ? "text-red-500" : "text-current group-hover:text-white"
          }`}
        >
          {ctaText} <ArrowRight size={16} className="ml-2" />
        </button>
      )}
    </div>
  );
};

export default function Expertise() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
        <span className="text-[#00AEEF] bg-cyan-50 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-6 inline-block">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Comprehensive HVAC Solutions
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpertiseCard
          title="Residential Services"
          variant="blue"
          icon={HomeIcon}
          description="Full-service home comfort including AC repair, furnace installs, and ductless systems tailored for your family's needs."
          items={[
            "Air Conditioning",
            "Heating & Furnaces",
            "Indoor Air Quality",
          ]}
          ctaText="Explore Residential"
        />
        <ExpertiseCard
          title="Commercial HVAC"
          variant="orange"
          icon={Building2}
          description="Robust solutions for businesses, heavy-duty RTU systems, and high-efficiency maintenance contracts for facilities."
          items={[
            "RTU Installation",
            "System Replacements",
            "Preventive Contracts",
          ]}
          ctaText="Explore Commercial"
        />
        <ExpertiseCard
          title="24/7 Emergency"
          variant="dark"
          icon={Zap}
          description="HVAC breakdowns don't wait for business hours. Our rapid-response dispatch is ready 24/7 for critical repairs."
          items={[
            "24/7 AC Repair",
            "Fully Stocked Trucks",
            "Emergency Heating",
          ]}
          ctaText="Call Emergency Line"
        />
      </div>
    </section>
  );
}
