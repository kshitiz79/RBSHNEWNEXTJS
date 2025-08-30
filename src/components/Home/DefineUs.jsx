'use client';

import { useState, useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import { throttle } from 'lodash';

const DefineUs = () => {
  const [rotation, setRotation] = useState(0);
  const iconContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isWhiteBg, setIsWhiteBg] = useState(false);

  useEffect(() => {
    const handleMouseMove = throttle((event) => {
      if (iconContainerRef.current) {
        const iconRect = iconContainerRef.current.getBoundingClientRect();
        const iconCenterX = iconRect.left + iconRect.width / 2;
        const iconCenterY = iconRect.top + iconRect.height / 2;

        const deltaX = event.clientX - iconCenterX;
        const deltaY = event.clientY - iconCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const degree = angle * (180 / Math.PI);

        setRotation(degree + 360);
      }
    }, 200);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      handleMouseMove.cancel();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWhiteBg(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`transition-colors duration-700 ease-in-out flex flex-col md:flex-row items-center justify-between py-10 md:py-36 px-4 md:px-10 z-10 relative ${
        isWhiteBg ? 'bg-[#e5e8ea]' : 'bg-[#e5e8ea]'
      }`}
      aria-labelledby="define-us-heading"
    >
      {/* Left Section */}
      <article className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-8 md:mb-0 z-10">
        <header>
          <h2
            id="define-us-heading"
            className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 z-10 uppercase text-center md:text-left"
          >
            <span className="font-light">What</span> <br /> defines us
          </h2>
        </header>

        <figure
          ref={iconContainerRef}
          className="relative w-32 h-32 md:w-48 md:h-48 z-20"
          aria-hidden="true"
        >
          <Image
            src="/icon/1.webp"
            alt="Hero representing creativity and innovation"
            fill
            className="object-contain"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.1s linear',
              transformOrigin: 'center center',
            }}
          />
        </figure>
      </article>

      {/* Right Section */}
      <aside className="md:w-1/2 flex flex-col items-center md:items-start md:text-center text-start md:text-left w-full px-4 md:text-justify">
        <h3
          className="text-[1.7rem] md:text-[2rem] font-semibold mb-7 z-20 font-mozilla md:leading-tight leading-none"
      
        >
          We’re brand builders at heart, creators by <br /> design, tech enthusiasts in practice, and integrated at our core.
        </h3>

        <p className="text-gray-500 mb-6 z-20 text-base md:text-xl animated-para font-Mozilla">
          We’re on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger
          to create tangible impact for your business, we work with in-house specialists, industry partners, and
          technology leaders to push the boundaries of creativity and put your brand on the global stage.
        </p>
      </aside>
    </section>
  );
};

export default memo(DefineUs);
