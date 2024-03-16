"use client"
import React, { useRef, useEffect } from 'react';
import Organizations from "@/constants/OrganizersConstants.json";
import Image from 'next/image';

export default function Organizers() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Clone the logos to create an infinite loop
    container.innerHTML += container.innerHTML;

    let animationId;
    
    // Function to scroll the container to the left
    const scroll = () => {
      container.scrollLeft += 1;
    };

    // Start scrolling animation
    const startScrolling = () => {
      animationId = setInterval(scroll, 20);
    };

    // Stop scrolling animation
    const stopScrolling = () => {
      clearInterval(animationId);
    };

    // Start animation on mount
    startScrolling();

    // Cleanup
    return () => {
      stopScrolling();
    };
  }, []);

  return (
    <div className='bg-orange-500 p-4 overflow-hidden'>
      <h1 className="text-white text-2xl font-bold mb-4">ORGANISERS</h1>
      <div className="flex items-center justify-center" ref={containerRef} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {Organizations.map((organization, index) => (
          <div key={index} className="inline-block mr-4">
            <Image
              src={organization.imageUrl}
              alt={organization.organizationName}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
