'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


import './Gallery.module.css';

const images = ["/assets/1.webp", "/assets/2.webp", "/assets/3.webp", "/assets/4.webp","/assets/5.webp",  "/assets/6.webp",  "/assets/7.webp","/assets/8.webp" ,"/assets/9.webp", "/assets/11.webp", "/assets/12.webp", "/assets/13.webp", "/assets/14.webp", "/assets/15.webp", "/assets/16.webp","/assets/17.webp", "/assets/18.webp", "/assets/9.webp" ];
const images2 = ["/assets/19.webp", "/assets/11.webp", "/assets/12.webp", "/assets/13.webp", "/assets/14.webp", "/assets/15.webp", "/assets/16.webp", "/assets/17.webp", "/assets/18.webp", "/assets/9.webp"  ];

const Gallery = () => {
  return (
    <div className="bg-black py-8 overflow-hidden relative">
      <div className="w-full space-y-4">

        <MovingRow images={images} direction="left" />
     
        <MovingRow images={images2} direction="left" />
      </div>
    </div>
  );
};

const MovingRow = ({ images, direction }) => {
  const rowRef = useRef(null);

  // Adjusted to 10 duplications for performance
  const totalImages = 10; 
  const duplicatedImages = Array(totalImages).fill(images).flat(); 

  useEffect(() => {
    const element = rowRef.current;
    const scrollWidth = element.scrollWidth;

    // Set the initial position based on direction
    gsap.set(element, {
      x: direction === 'left' ? 0 : -scrollWidth,
    });

   


    const animation = gsap.to(element, {
      x: direction === 'left' ? -scrollWidth : scrollWidth,
      duration: 900, // Adjust duration as needed
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) % scrollWidth),
      },
    });

    
    // Cleanup on unmount
    return () => {

      animation.kill();
    };
  }, [direction, duplicatedImages]);

  return (
    <div
      ref={rowRef}
      className="flex"
      style={{ minWidth: '100%', whiteSpace: 'nowrap' }}
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={index}
          className="flex-none responsive-height"
          style={{
            flex: '0 0 auto',
            minWidth: '250px', 
            margin: '0 10px',
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
            
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;