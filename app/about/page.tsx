"use client";
import React from 'react';
import { 
  Target, ShieldCheck, Award, Users, Wrench, Clock, 
  CheckCircle2, ArrowRight, Briefcase, Zap, Star
} from 'lucide-react';
import { Button } from '../component/ui/Shared';

type SectionTagProps = {
  text: string;
  color?: "blue" | "orange";
};

const SectionTag = ({ text, color = "blue" }: SectionTagProps) => {
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
export default function AboutUs() {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* 1. HERO / COMPANY OVERVIEW */}
      <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <SectionTag text="Company Overview" color="orange" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Setting the Standard for HVAC Excellence in the Bay Area
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
            For over 25 years, Kailey Air Systems has been the trusted name in residential and commercial climate control. We blend cutting-edge technology with old-fashioned craftsmanship to deliver comfort you can count on.
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-left border-l-4 border-[#00AEEF] pl-4">
              <p className="text-3xl font-black text-white">5k+</p>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Happy Clients</p>
            </div>
            <div className="text-left border-l-4 border-[#F26522] pl-4">
              <p className="text-3xl font-black text-white">25+</p>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="text-left border-l-4 border-[#00AEEF] pl-4 hidden sm:block">
              <p className="text-3xl font-black text-white">24/7</p>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <img 
                src="/images/about/about-img.webp" 
                alt="HVAC Technician" 
                className="rounded-3xl shadow-2xl object-cover h-175 w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block max-w-xs">
                <Target size={40} className="text-[#F26522] mb-4" />
                <h4 className="font-bold text-gray-900 text-xl mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">To provide unparalleled HVAC services that improve indoor air quality, optimize energy efficiency, and ensure absolute comfort.</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionTag text="Core Values" color="blue" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Built on Integrity. Driven by Excellence.</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We don't just fix air conditioners and heaters; we build lasting relationships with our customers based on trust, transparency, and reliable results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 mr-5">
                    <Star size={24} className="text-[#00AEEF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Uncompromising Quality</h4>
                    <p className="text-gray-600">We never cut corners. Every installation and repair is executed to the highest industry standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 mr-5">
                    <ShieldCheck size={24} className="text-[#F26522]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Honest Transparency</h4>
                    <p className="text-gray-600">No hidden fees, no surprise charges. We provide upfront pricing before any work begins.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 mr-5">
                    <Users size={24} className="text-[#00AEEF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Customer First</h4>
                    <p className="text-gray-600">Your comfort is our priority. We treat your home or business with the utmost respect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US & CERTIFICATIONS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag text="The Kailey Difference" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Award size={32} />, title: "Certified Experts", desc: "NATE and EPA certified technicians with continuous factory training.", color: "blue" },
              { icon: <Zap size={32} />, title: "Fast Response", desc: "Fully stocked trucks ready to dispatch for rapid, same-day repairs.", color: "orange" },
              { icon: <ShieldCheck size={32} />, title: "Guaranteed Work", desc: "100% satisfaction guarantee on all labor and installations.", color: "blue" },
              { icon: <Clock size={32} />, title: "24/7 Availability", desc: "Round-the-clock emergency service because breakdowns don't wait.", color: "orange" }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color === 'blue' ? 'bg-[#00AEEF] text-white' : 'bg-[#F26522] text-white'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications Banner */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-black mb-2">Fully Licensed & Certified</h3>
              <p className="text-gray-400">Rest easy knowing your property is in the hands of verified professionals.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
              <div className="flex items-center bg-gray-800 px-6 py-4 rounded-xl border border-gray-700">
                <CheckCircle2 className="text-[#00AEEF] mr-3" size={24} />
                <span className="font-bold">NATE Certified</span>
              </div>
              <div className="flex items-center bg-gray-800 px-6 py-4 rounded-xl border border-gray-700">
                <CheckCircle2 className="text-[#F26522] mr-3" size={24} />
                <span className="font-bold">EPA Approved</span>
              </div>
              <div className="flex items-center bg-gray-800 px-6 py-4 rounded-xl border border-gray-700">
                <CheckCircle2 className="text-[#00AEEF] mr-3" size={24} />
                <span className="font-bold">Licensed & Bonded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionTag text="How We Work" color="blue" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Proven Service Process</h2>
            <p className="text-xl text-gray-600">A streamlined, stress-free experience from your first phone call to the final handshake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-100 z-0"></div>

            {[
              { step: "01", title: "Schedule", desc: "Book online or call our dispatch. We find a time that fits your schedule." },
              { step: "02", title: "Diagnose", desc: "Our tech arrives on time, inspects the system, and pinpoints the exact issue." },
              { step: "03", title: "Approve", desc: "We provide a clear, upfront estimate with no hidden fees for your approval." },
              { step: "04", title: "Execute", desc: "We fix or install the system correctly the first time, cleaning up afterward." }
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

      {/* 5. TEAM & SAFETY */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Safety & Compliance (Left side) */}
            <div className="lg:col-span-5 space-y-8">
              <SectionTag text="Safety First" color="orange" />
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Strict Safety & Compliance</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                HVAC systems involve high voltage, combustible gases, and complex refrigerants. We take safety incredibly seriously. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300 bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <ShieldCheck className="text-[#F26522] mr-4 shrink-0" size={24} />
                  <span>Strict adherence to local building codes & OSHA standards.</span>
                </li>
                <li className="flex items-center text-gray-300 bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <ShieldCheck className="text-[#00AEEF] mr-4 shrink-0" size={24} />
                  <span>Mandatory background checks & drug testing for all staff.</span>
                </li>
                <li className="flex items-center text-gray-300 bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <ShieldCheck className="text-[#F26522] mr-4 shrink-0" size={24} />
                  <span>Continuous safety protocol training and hazard awareness.</span>
                </li>
              </ul>
            </div>

            {/* Meet the Team (Right side - Grid) */}
            <div className="lg:col-span-7">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-3xl font-black">Meet Our Leaders</h3>
                  <p className="text-gray-400 mt-2">The experts behind the comfort.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Team Member 1 */}
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#00AEEF] transition-colors group">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="John Kailey - Founder" className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">John Kailey</h4>
                    <p className="text-[#00AEEF] font-semibold text-sm">Founder & Master Technician</p>
                  </div>
                </div>
                {/* Team Member 2 */}
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#F26522] transition-colors group">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Sarah Miller - Ops Manager" className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">Sarah Miller</h4>
                    <p className="text-[#F26522] font-semibold text-sm">Operations Manager</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CAREERS (Optional Backup Section shown as a CTA) */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl p-10 lg:p-16 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            <div className="md:w-2/3">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Briefcase size={32} className="text-[#F26522]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Join The Kailey Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                We are always looking for driven, skilled, and customer-focused HVAC professionals. If you value quality work and want to grow your career with an industry leader, we want to hear from you.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end w-full">
                <Button
                variant="primary" 
                className="group flex items-center border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all py-6 px-8"
                >
                Read Our Full Story 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}