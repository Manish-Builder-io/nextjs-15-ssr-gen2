"use client";
import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

function Hero({ 
  title = "Welcome to Our Platform", 
  subtitle = "Discover amazing features and possibilities",
  backgroundImage,
  ctaText = "Get Started",
  ctaLink = "#"
}: HeroProps) {
  return (
    <div 
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 bg-cover bg-center bg-no-repeat relative text-white text-center p-8"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
        {ctaText && (
          <a 
            href={ctaLink} 
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-50"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;
