"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Gallery.module.css";

const images = [
  "/tepo/1.jpg",
  "/tepo/2.jpg",
  "/tepo/3.jpg",
  "/tepo/4.jpg",
  "/tepo/5.jpg",
  "/tepo/6.jpg",
  "/tepo/7.jpg",
  "/tepo/8.jpg",
  "/tepo/9.jpg",
  "/tepo/10.jpg",
  "/tepo/11.jpg",
  "/tepo/12.jpg",
  "/tepo/13.jpg",
  "/tepo/14.jpg",
  "/tepo/15.jpg",
  "/tepo/16.jpg",
  "/tepo/17.jpg",
  "/tepo/18.jpg",
];

const images2 = [
  "/tepo/19.jpg",
  "/tepo/20.jpg",
  "/tepo/21.jpg",
  "/tepo/22.jpg",
  "/tepo/23.jpg",
  "/tepo/24.jpg",
];

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
      x: direction === "left" ? 0 : -scrollWidth,
    });

    const animation = gsap.to(element, {
      x: direction === "left" ? -scrollWidth : scrollWidth,
      duration: 900, // Adjust duration as needed
      ease: "none",
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
      style={{ minWidth: "100%", whiteSpace: "nowrap" }}
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={index}
          className="flex-none responsive-height"
          style={{
            flex: "0 0 auto",
            minWidth: "250px",
            margin: "0 10px",
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
