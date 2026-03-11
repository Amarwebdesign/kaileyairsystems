"use client";
import { Award, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: <Award size={32} className="text-[#00AEEF] mb-3" />,
    title: "Licensed & Insured",
    desc: "Full state compliance",
  },
  {
    icon: <Clock size={32} className="text-[#F26522] mb-3" />,
    title: "Rapid Response",
    desc: "We arrive on time",
  },
  {
    icon: <ShieldCheck size={32} className="text-[#00AEEF] mb-3" />,
    title: "Upfront Pricing",
    desc: "No hidden fees",
  },
  {
    icon: <ThumbsUp size={32} className="text-[#F26522] mb-3" />,
    title: "Guaranteed Work",
    desc: "100% satisfaction",
  },
];

export default function FeatureBar() {
  return (
    <section className="relative -mt-12 z-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl py-8 px-6 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x md:divide-gray-100">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="px-4 flex flex-col items-center text-center group"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}