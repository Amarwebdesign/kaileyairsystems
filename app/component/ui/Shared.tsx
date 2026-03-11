"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "whiteOutline" ;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  href = "#",
  target,
  rel,
}: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 px-6 py-4 text-sm md:text-base";

  const variants = {
    primary:
      "bg-[#F26522] text-white hover:bg-[#d9561a] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5",
    secondary:
      "bg-[#00AEEF] text-white hover:bg-[#009bd6] shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5",
    outline:
      "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    white: "bg-white text-gray-900 hover:bg-gray-50 shadow-md",
    whiteOutline: "border-2 border-white text-white font-bold rounded-lg px-8 py-4 text-lg hover:bg-white hover:text-gray-900 transition-all",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};