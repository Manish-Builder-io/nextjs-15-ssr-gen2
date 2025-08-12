"use client";
import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "elevated" | "outlined";
}

function Card({ 
  title = "Card Title",
  description = "This is a sample card description that provides more details about the card content.",
  image,
  imageAlt = "Card image",
  buttonText,
  buttonLink = "#",
  variant = "default"
}: CardProps) {
  const variantClasses = {
    default: "border border-gray-200 shadow-md",
    elevated: "border-0 shadow-xl",
    outlined: "border-2 border-gray-200 shadow-none"
  };

  return (
    <div className={`bg-white rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col hover:-translate-y-1 ${variantClasses[variant]} hover:shadow-2xl`}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4 flex-1">
          {description}
        </p>
        {buttonText && (
          <a 
            href={buttonLink} 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 self-start mt-auto hover:bg-indigo-700 hover:-translate-y-0.5"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
