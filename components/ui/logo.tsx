'use client';

import * as React from "react";
import Image from "next/image";

export function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`relative ${className || ''} flex items-center justify-center`} {...props}>
      {!imgError ? (
        <Image 
          src="/logo.png" 
          alt="Safehands Logo" 
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-contain"
          onError={() => setImgError(true)}
          priority
        />
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 200 200" 
          className="w-full h-full"
        >
          <defs>
            <mask id="stencil-cut">
              <rect width="200" height="200" fill="white" />
              {/* The distinct horizontal cuts seen in the original SSF logo */}
              <rect x="0" y="145" width="200" height="4" fill="black" />
            </mask>
          </defs>
          
          {/* Solid white backing for dark/light mode consistency */}
          <circle cx="100" cy="100" r="95" fill="#ffffff" />
          
          {/* The thick dark blue outer ring */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#003366" strokeWidth="10" />
          
          {/* The letters "SSF" using a thick serif font with the mask to mimic the stencil */}
          <g mask="url(#stencil-cut)">
            {/* Using generic fallback heavily-serifed fonts that render close to the original */}
            <text 
              x="25" 
              y="142" 
              fontFamily="Impact, Georgia, 'Times New Roman', serif" 
              fontSize="85" 
              fontWeight="900" 
              fill="#003366"
              letterSpacing="-2"
            >
              S
            </text>
            <text 
              x="75" 
              y="142" 
              fontFamily="Impact, Georgia, 'Times New Roman', serif" 
              fontSize="85" 
              fontWeight="900" 
              fill="#003366"
              letterSpacing="-2"
            >
              S
            </text>
            <text 
              x="125" 
              y="142" 
              fontFamily="Impact, Georgia, 'Times New Roman', serif" 
              fontSize="85" 
              fontWeight="900" 
              fill="#5A8011"
            >
              F
            </text>
          </g>
        </svg>
      )}
    </div>
  );
}
