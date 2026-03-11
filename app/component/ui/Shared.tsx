"use client";

import React from "react";

// ==========================================
// Button Component
// ==========================================

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 px-8 py-4 text-sm md:text-base";

  const variants = {
    primary:
      "bg-[#F26522] text-white hover:bg-[#d9561a] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5",
    secondary:
      "bg-[#00AEEF] text-white hover:bg-[#009bd6] shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5",
    outline:
      "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    white: "bg-white text-gray-900 hover:bg-gray-50 shadow-md",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


type SectionTagProps = {
  text: string;
  color?: "blue" | "orange";
};

export const SectionTag = ({ text, color = "blue" }: SectionTagProps) => {
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


type PageHeaderProps = {
  title: string;
  subtitle?: string;
  bgImage?: string;
};

export const PageHeader = ({
  title,
  subtitle,
  bgImage = "/ui-img/ui-header.webp",
}: PageHeaderProps) => {
  return (
    <div className="bg-gray-900 pt-48 pb-32 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 capitalize">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
