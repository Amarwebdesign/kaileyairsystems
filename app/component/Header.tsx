"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clock,
  MapPin,
  ChevronDown,
  HomeIcon,
  Building2,
  PhoneCall,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/Shared";
import { SERVICES_MENU } from "../lib/constants";

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const scrollToContact = () => {
    closeMenus();
    setTimeout(() => {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex bg-gray-900 text-gray-300 text-xs py-2 px-6 justify-between items-center z-50 relative">
        <div className="flex space-x-6">
          <span className="flex items-center">
            <Clock size={14} className="mr-2 text-[#00AEEF]" />
            24/7 Emergency Service Available
          </span>
          <span className="flex items-center">
            <MapPin size={14} className="mr-2 text-[#F26522]" />
            Serving the Greater Bay Area
          </span>
        </div>

        <div className="flex space-x-6">
          <Link href="/financing" className="hover:text-white transition">
            Financing
          </Link>
          <Link href="/maintenance" className="hover:text-white transition">
            Maintenance Plans
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "top-0 lg:top-8 bg-white py-5 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" onClick={closeMenus}>
            <img
              src="/kas-home/kas-logo.png"
              alt="Kailey Air Systems"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center space-x-8 h-full">
            <Link
              href="/"
              className={`text-sm font-bold hover:text-[#00AEEF] ${
                pathname === "/" ? "text-[#00AEEF]" : "text-gray-800"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-bold hover:text-[#00AEEF] ${
                pathname === "/about" ? "text-[#00AEEF]" : "text-gray-800"
              }`}
            >
              About Us
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative h-full py-4"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center text-sm font-bold hover:text-[#00AEEF] ${
                  pathname.startsWith("/services")
                    ? "text-[#00AEEF]"
                    : "text-gray-800"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`ml-1 transition-transform ${
                    isMegaMenuOpen ? "rotate-180 text-[#00AEEF]" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-212.5 bg-white shadow-2xl rounded-2xl border border-gray-100 p-8 transition-all duration-300 ${
                  isMegaMenuOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                <div className="grid grid-cols-3 gap-8">

                  {/* Residential */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4 text-[#00AEEF]">
                      <HomeIcon size={20} className="mr-2" />
                      <h4 className="font-bold text-lg">Residential</h4>
                    </div>

                    <ul className="space-y-2">
                      {SERVICES_MENU.residential.map((item: string, i: number) => (
                        <li key={i}>
                          <Link
                            onClick={closeMenus}
                            href={`/services/${slugify(item)}`}
                            className="text-sm text-gray-600 hover:text-[#00AEEF]"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Commercial */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4 text-[#F26522]">
                      <Building2 size={20} className="mr-2" />
                      <h4 className="font-bold text-lg">Commercial</h4>
                    </div>

                    <ul className="space-y-2">
                      {SERVICES_MENU.commercial.map((item: string, i: number) => (
                        <li key={i}>
                          <Link
                            onClick={closeMenus}
                            href={`/services/${slugify(item)}`}
                            className="text-sm text-gray-600 hover:text-[#F26522]"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Emergency */}
                  <div className="flex flex-col h-full">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6 grow">
                      <div className="flex items-center mb-4 text-red-600">
                        <PhoneCall size={20} className="mr-2" />
                        <h4 className="font-bold text-lg">Emergency</h4>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {SERVICES_MENU.emergency.map((item: string, i: number) => (
                          <li key={i}>
                            <Link
                              href={`/services/${slugify(item)}`}
                              className="text-sm font-semibold hover:text-red-600"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="tel:5551234567"
                        className="block bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700"
                      >
                        Call (877) 338-4199
                      </a>
                    </div>

                    <Link
                      href="/services"
                      className="flex items-center justify-center text-gray-900 font-bold hover:text-[#00AEEF] p-4 bg-gray-50 rounded-xl border"
                    >
                      View All Services
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            <Link href="/locations" className="text-sm font-bold">
              Locations
            </Link>

            <Link href="/financing" className="text-sm font-bold">
              Financing
            </Link>

            <Link href="/maintenance" className="text-sm font-bold">
              Maintenance
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <div className="mr-6 text-right hidden xl:block">
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Need Service Now?
              </p>
              <a
                href="tel:5551234567"
                className="text-xl font-black hover:text-[#F26522]"
              >
                (877) 338-4199
              </a>
            </div>

            <Button href="" variant="primary">Schedule Online</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={closeMenus}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity xl:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 xl:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={closeMenus}>
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6">

          <Link href="/" onClick={closeMenus} className="font-bold text-lg">
            Home
          </Link>

          <Link href="/about" onClick={closeMenus} className="font-bold text-lg">
            About Us
          </Link>

          {/* Services Dropdown */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between font-bold text-lg"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="space-y-6">

              {/* Residential */}
              <div>
                <div className="flex items-center mb-2 text-[#00AEEF]">
                  <HomeIcon size={18} className="mr-2" />
                  <span className="font-semibold">Residential</span>
                </div>

                <ul className="space-y-2 text-sm">
                  {SERVICES_MENU.residential.map((item: string, i: number) => (
                    <li key={i}>
                      <Link
                        href={`/services/${slugify(item)}`}
                        onClick={closeMenus}
                        className="text-gray-600 hover:text-[#00AEEF]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <div className="flex items-center mb-2 text-[#F26522]">
                  <Building2 size={18} className="mr-2" />
                  <span className="font-semibold">Commercial</span>
                </div>

                <ul className="space-y-2 text-sm">
                  {SERVICES_MENU.commercial.map((item: string, i: number) => (
                    <li key={i}>
                      <Link
                        href={`/services/${slugify(item)}`}
                        onClick={closeMenus}
                        className="text-gray-600 hover:text-[#F26522]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency */}
              <div>
                <div className="flex items-center mb-2 text-red-600">
                  <PhoneCall size={18} className="mr-2" />
                  <span className="font-semibold">Emergency</span>
                </div>

                <ul className="space-y-2 text-sm mb-4">
                  {SERVICES_MENU.emergency.map((item: string, i: number) => (
                    <li key={i}>
                      <Link
                        href={`/services/${slugify(item)}`}
                        onClick={closeMenus}
                        className="font-semibold hover:text-red-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:5551234567"
                  className="block bg-red-600 text-white text-center py-2 rounded-lg font-bold"
                >
                  Call (877) 338-4199
                </a>
              </div>

              <Link
                href="/services"
                onClick={closeMenus}
                className="flex items-center font-bold"
              >
                View All Services
                <ArrowRight size={16} className="ml-2" />
              </Link>

            </div>
          )}

          <Link href="/locations" onClick={closeMenus} className="font-bold text-lg">
            Locations
          </Link>

          <Link href="/financing" onClick={closeMenus} className="font-bold text-lg">
            Financing
          </Link>

          <Link href="/maintenance" onClick={closeMenus} className="font-bold text-lg">
            Maintenance
          </Link>

          {/* Contact Number */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-500 mb-1">Need Service Now?</p>
            <a href="tel:5551234567" className="text-xl font-black">
              (877) 338-4199
            </a>
          </div>

          <Button href="" className="w-full mt-2">
            Schedule Online
          </Button>

        </nav>
      </div>
    </>
  );
}