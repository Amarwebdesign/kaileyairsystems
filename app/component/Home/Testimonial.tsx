import React from "react";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  type: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    location: "San Jose, CA",
    text: "My AC broke down during the hottest weekend of the year. Kailey Air Systems had a tech out within 2 hours. Fast, professional, and transparent pricing. Highly recommend!",
    type: "Residential"
  },
  {
    name: "David Chen",
    location: "Sunnyvale, CA",
    text: "We use them for our commercial property maintenance. Their preventive program has saved us thousands in potential RTU breakdowns. The technicians are always top-notch.",
    type: "Commercial"
  },
  {
    name: "Emily Rodriguez",
    location: "Santa Clara, CA",
    text: "Installed a new high-efficiency heat pump. The team explained everything clearly, helped with rebates, and left the workspace spotless. Truly a 5-star experience.",
    type: "Installation"
  }
];

type SectionTagProps = {
  text: string;
  color?: "blue" | "orange";
};

const SectionTag: React.FC<SectionTagProps> = ({ text, color = "blue" }) => {
  const colorClass =
    color === "blue"
      ? "text-[#00AEEF] bg-cyan-50"
      : "text-[#F26522] bg-orange-50";

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-6 ${colorClass}`}
    >
      {text}
    </span>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag text="Client Stories" color="orange" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600">
            See what your neighbors and local business owners have to say about
            our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                size={48}
                className="text-[#00AEEF] opacity-10 absolute top-8 right-8"
              />

              <div className="flex text-[#F26522] mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-gray-500 mr-4">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} •{" "}
                    <span className="text-[#00AEEF] font-medium">
                      {testimonial.type}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}