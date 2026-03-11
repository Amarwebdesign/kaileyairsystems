"use client";

import React, { useState } from 'react';
import { PhoneCall, MapPin } from 'lucide-react';
import { Button } from "../ui/Shared";
import { SERVICES_MENU } from '../lib/constants';
import { ChevronDown } from 'lucide-react';

export default function ContactFormSection() {
  const allServices = [
    ...SERVICES_MENU.residential,
    ...SERVICES_MENU.commercial,
    ...SERVICES_MENU.emergency
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our dispatch team will contact you shortly.");
  };

  return (
    <section id="contact-section" className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-200">
        <div className="lg:w-5/12 bg-gray-900 text-white p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Experience Comfort?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Contact us today to schedule a diagnostic, request an estimate, or get immediate emergency help.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0">
                <PhoneCall size={24} className="text-[#F26522]" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Call Us 24/7</h4>
                <a href="tel:5551234567" className="text-2xl font-bold hover:text-[#00AEEF] transition">
                  (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0">
                <MapPin size={24} className="text-[#00AEEF]" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Office Location</h4>
                <p className="text-lg font-medium">123 HVAC Way, Suite 100<br/>San Jose, CA 95131</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 p-8 lg:p-24 bg-gray-50 flex flex-col justify-center">
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-2xl w-full mx-auto">
            <h3 className="text-3xl font-black text-gray-900 mb-2">Schedule Service</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll reach out.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent outline-none transition" 
                    placeholder="John"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent outline-none transition" 
                    placeholder="Doe"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent outline-none transition" 
                    placeholder="(555) 123-4567"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed *</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent outline-none transition appearance-none"
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service...</option>
                      {allServices.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                      <option value="Other">Other / Not Listed</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">How can we help? (Optional)</label>
                <textarea 
                  rows={4} 
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent outline-none transition resize-none" 
                  placeholder="Tell us about your HVAC needs..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <Button type="submit" className="w-full text-lg py-5 mt-4">
                Request Service Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
