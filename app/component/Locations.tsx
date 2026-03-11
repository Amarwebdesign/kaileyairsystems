"use client";
import { MapPin } from "lucide-react";
import { LOCATIONS_LIST } from "../lib/constants";

export default function Locations() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <span className="text-[#00AEEF] bg-cyan-50 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-6 inline-block">
          Locations
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Serving The Greater Bay Area
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 font-light">
          Fast, reliable heating and air conditioning service delivered to homes 
          and businesses throughout the region.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {LOCATIONS_LIST.map((city) => (
            <div
              key={city}
              className="group bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center hover:border-[#00AEEF] hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 cursor-default"
            >
              <MapPin 
                size={18} 
                className="text-[#F26522] mr-2 transition-transform duration-300 group-hover:-translate-y-1" 
              />
              <span className="text-gray-700 font-semibold">{city}</span>
            </div>
          ))}

          <div className="bg-linear-to-br from-cyan-50 to-white border border-cyan-100 rounded-xl p-4 flex items-center justify-center font-bold text-[#00AEEF] shadow-sm italic">
            & Many More Areas
          </div>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          Don't see your city? <a href="/contact" className="text-[#F26522] font-bold hover:underline">Contact us</a> to see if we can reach you.
        </div>
      </div>
    </section>
  );
}