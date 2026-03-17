"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "../ui/Shared";
import Image from "next/image";

interface HeroSectionProps {
  onBookClick?: () => void;
  onExploreClick?: () => void;
}

export default function HeroSection({ onBookClick, onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Image 
          width={1920}
          height={1080}
          src="/images/home/banner.webp" 
          alt="HVAC Solutions" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-5">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center bg-[#F26522] text-white px-5 py-2.5 rounded-full font-bold
           text-[12px] mb-4 shadow-lg shadow-orange-500/20">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-ping"></span>
            24/7 EMERGENCY HVAC DISPATCH
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-[1.1] tracking-tight">
            Total Climate Control <br/>
            <span className="text-[#00AEEF]">Perfected.</span>
          </h1>
          
          <p className="text-xl md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
            Expert heating, cooling, and air quality solutions for residential and commercial properties across the Bay Area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
             <Button href="" variant="primary">Book a Service Call</Button>
             <Button href="" variant="whiteOutline"> Explore Our Services</Button>
        
          </div>
        <div className="mt-8 flex items-center space-x-8 border-t border-gray-700/50 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-gray-900 overflow-hidden bg-gray-700">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-[#F26522] mb-1">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-gray-300">Over 5,000+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}