"use client";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Shared";

const SectionTag = ({ text }: { text: string }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#F26522] text-xs font-bold uppercase tracking-widest mb-4">
    {text}
  </span>
);

export default function AboutOverview() {
  const values = [
    {
      title: "Uncompromising Safety & Compliance",
      text: "Every technician adheres strictly to state regulations and industry best practices."
    },
    {
      title: "Advanced Diagnostic Tools",
      text: "We use the latest technology to pinpoint issues accurately, saving you time and money."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/kas-home/about-kas.webp" 
                alt="Our HVAC Professional Team" 
                className="w-full h-100 md:h-150 object-cover" 
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-[#00AEEF] text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-6xl font-black mb-2">25+</p>
              <p className="font-bold text-lg uppercase tracking-wide leading-tight">
                Years of<br/>Experience
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <SectionTag text="About The Company" />
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Setting the Standard for HVAC Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kailey Air Systems is not just another contractor. We are a dedicated team of certified professionals committed to elevating the comfort and air quality of homes and businesses throughout the region. Our mission is simple: provide honest assessments, flawless execution, and unmatched reliability.
              </p>
            </div>

            <ul className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              {values.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="text-[#00AEEF] mt-1 mr-4 shrink-0" size={24} />
                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">
                      {item.title}
                    </strong>
                    <span className="text-gray-600">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/about">
                <Button
                  variant="outline" 
                  className="group flex items-center border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all py-6 px-8"
                >
                  Read Our Full Story 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}