"use client";
import React from "react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "primary" | "secondary" | "outline";
  alignment?: "left" | "center" | "right";
}

function CTA({ 
  title = "Ready to get started?",
  description = "Join thousands of users who trust our platform",
  buttonText = "Sign Up Now",
  buttonLink = "#",
  variant = "primary",
  alignment = "center"
}: CTAProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const buttonClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
  };

  return (
    <div className={`p-16 md:p-8 bg-gray-50 rounded-xl my-8 ${alignmentClasses[alignment]}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        <a 
          href={buttonLink} 
          className={`inline-block px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 border-2 border-transparent hover:-translate-y-0.5 hover:shadow-lg ${buttonClasses[variant]}`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default CTA;
