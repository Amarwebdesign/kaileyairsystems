import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  bgImage?: string;
};

export default function PageHeader({
  title,
  subtitle,
  bgImage = "/ui-img/ui-header.webp",
}: PageHeaderProps) {
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
}