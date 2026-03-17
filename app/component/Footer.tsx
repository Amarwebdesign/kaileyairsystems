import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, ChevronRight, PhoneCall, Mail } from 'lucide-react';
import { SERVICES_MENU } from '../lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Maintenance Plans', href: '/maintenance-plans' },
    { name: 'Financing', href: '/financing' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const featuredServices = [
    SERVICES_MENU.residential[0], 
    SERVICES_MENU.residential[3], 
    SERVICES_MENU.commercial[3],  
    SERVICES_MENU.emergency[0],   
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
          <div className="mb-8 flex">
              <Image 
                src="/images/footer-logo.webp"
                width="100" 
                height={120}  
                alt="Kailey Air Systems" 
                className="h-25 object-contain self-start" 
              />
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed pr-8">
              Your trusted partner for comprehensive residential and commercial HVAC services 
              across the Greater Bay Area. Quality you can feel.
            </p>
            <div className="flex items-center p-4 bg-gray-900 rounded-xl border border-gray-800">
              <Clock size={24} className="text-[#F26522] mr-4" />
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  24/7 Dispatch
                </p>
                <a href="tel:5551234567" className="text-lg font-bold text-[#F26522] hover:opacity-80 transition">
                  (877) 338-4199
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-[#00AEEF] transition flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-2 text-gray-700 group-hover:text-[#00AEEF] transition-colors" /> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white">Top Services</h4>
            <ul className="space-y-4">
              {featuredServices.map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services/${slugify(service)}`} 
                    className="text-sm text-gray-400 hover:text-[#F26522] transition flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-2 text-gray-700 group-hover:text-[#F26522] transition-colors" /> 
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
  <h4 className="text-lg font-bold mb-6 text-white">Headquarters</h4>
  <ul className="space-y-6"> 
    <li className="flex items-start">
      <MapPin size={20} className="text-[#00AEEF] mt-0.5 mr-4 shrink-0" />
      <span className="text-gray-400 text-sm leading-relaxed">
        <span className="block font-bold text-white mb-1 text-xs uppercase tracking-widest">Visit Us</span>
        San Jose CA
      </span>
    </li>

    <li className="flex items-start">
      <PhoneCall size={20} className="text-[#00AEEF] mt-0.5 mr-4 shrink-0" />
      <Link href="tel:8773384199" className="text-gray-400 text-sm leading-relaxed">
        <span className="block font-bold text-white mb-1 text-xs uppercase tracking-widest">Main Office</span>
        (877) 338-4199
      </Link>
    </li>

    <li className="flex items-start">
      <Mail size={20} className="text-[#00AEEF] mt-0.5 mr-4 shrink-0" />
      <Link href="mailto:kaileyairsystems@gmail.com" className="text-gray-400 text-sm leading-relaxed">
        <span className="block font-bold text-white mb-1 text-xs uppercase tracking-widest">Email</span>
         kaileyairsystems@gmail.com
      </Link>
    </li>
  </ul>
</div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kailey Air Systems. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}