"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingSection = () => {
  const sectionRef = useRef(null);
  const headingsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // breakpoint for mobile

    if (!isMobile) {
      // Only run GSAP animations on desktop
      headingsRef.current.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    } else {
      // Reset styles for mobile so they're visible without animation
      headingsRef.current.forEach((heading) => {
        if (heading) {
          heading.style.opacity = 1;
          heading.style.transform = "none";
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const data = [
    {
      number: "1",
      title: "Brand Strategy",
      text: "We create a strategy that aligns with your goals and resonates with your audience, making your brand stand out.",
    },
    {
      number: "2",
      title: "Brand Experience",
      text: "Our team designs visual identities, develops brand guidelines, and ensures consistent brand representation, creating customer-focused experiences that engage your audience.",
    },
    {
      number: "3",
      title: "Impactful Advertising",
      text: "We craft campaigns that captivate your audience and deliver results, optimizing and tracking your advertising for efficiency.",
    },
    {
      number: "4",
      title: "AdTech & Data",
      text: "We know you use a lot of tools in your business. That’s why we integrate with great software like Flodesk, WordPress, Shopify, WooCommerce, MemberPress, and much more.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative md:flex md:items-start md:justify-between md:py-16 py-10 px-4 md:px-24 bg-[#e5e8ea] mobile-container"
    >
      {/* Left Heading Section */}
      <div className="mb-10 md:mb-0 md:sticky md:top-16 md:w-1/2 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight uppercase mt-5 sm:mt-14 md:mt-3 lg:mt-28">
          We develop <br /> brands<br />from strategy <br /> to immersive <br /> experience.
        </h1>
      </div>

      {/* Right Floating Text Section */}
      <div className="lg:ml-auto lg:w-1/2 space-y-8 sm:space-y-10 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row mt-5"
            ref={(el) => (headingsRef.current[index] = el)}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mr-0 sm:mr-4 md:mr-6">
              {item.number}
            </h2>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingSection;
