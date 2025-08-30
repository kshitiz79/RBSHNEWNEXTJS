'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import styles from './style.module.css'; // Optional if you have custom styles

gsap.registerPlugin(ScrollToPlugin);

const COLOR_CLASSES = [
  'bg-[#4384f2]',
  'bg-[#2b9e44]',
  'bg-[#f0c21f]',
  'bg-[#ea4335]',
  'bg-[#4384f2]',
  'bg-[#2b9e44]',

];

const MObile_COLOR_CLASSES = [
   'bg-[#4384f2]',
  'bg-[#2b9e44]',
  'bg-[#f0c21f]',
  'bg-[#ea4335]',
  'bg-[#4384f2]',
  'bg-[#2b9e44]',
  
];

const PATHS = [
  '/service',
  '/service',
  '/service',
  '/service',
   '/service',
  '/service',
];

const CARDS = [
  {
    title: 'Brand Strategy',
    description: 'We create distinctive brand identities with digital and print design.',
  },
  {
    title: 'Video Production',
    description: 'We turn raw footage into captivating visuals.',
  },
  {
    title: 'Lead Optimization',
    description: 'Drive leads and rank higher with focused SEO strategies',
  },
  {
    title: 'Social Media',
    description: 'Boost your brand with smart social media strategies.',
  },
  {
    title: 'Web Development',
    description: 'Crafting seamless web experiences with expert design and development.',
  },
  {
    title: 'Creative Photography',
    description: 'Inspire and captivate with exceptional content and photography.',
  },
];

const HorizontalScrollCard = () => {
  const scrollContainerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  useEffect(() => {
    buttonRefs.current.forEach((button) => {
      if (button) {
        gsap.set(button, { x: -200, opacity: 0 });
      }
    });
  }, []);

  const handleMouseEnter = useCallback((index) => {
    gsap.to(scrollContainerRef.current, {
      scrollTo: { x: index * 400 },
      duration: 1,
      ease: 'power4.out',
    });

    setHoveredCard(index);

    if (buttonRefs.current[index]) {
      gsap.to(buttonRefs.current[index], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  const handleMouseLeave = useCallback((index) => {
    setHoveredCard(null);

    if (buttonRefs.current[index]) {
      gsap.to(buttonRefs.current[index], {
        x: -200,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, []);

  const handleViewMoreClick = useCallback((index) => {
    if (PATHS[index]) {
      router.push(PATHS[index]);
    }
  }, [router]);

  return (
    <div className="bg-[#e5e8ea] py-10 relative">
     <div
  ref={scrollContainerRef}
  className="flex overflow-x-auto items-center h-full scrollbar-hide relative bg-[#e5e8ea] no-scrollbar"
  style={{ scrollBehavior: 'smooth', overflowY: 'hidden' }} // <== add this
>

        {CARDS.map((card, index) => {
          const titleWords = card.title.split(' ');
          return (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`group min-w-[300px] w-[425px] h-[44rem] flex-shrink-0 rounded-lg ${MObile_COLOR_CLASSES[index % MObile_COLOR_CLASSES.length]} 
                flex flex-col justify-center items-center scroll-smooth
                ${hoveredCard === index ? COLOR_CLASSES[index % COLOR_CLASSES.length] : 'md:bg-transparent ${MObile_COLOR_CLASSES[index % MObile_COLOR_CLASSES.length]}`}'}
                transition-colors duration-300 ease-in-out relative md:text-zinc-400 text-white`}
            >
              <h2
                className={`text-5xl font-lato font-bold uppercase leading-snug text-center text-white ${
                  hoveredCard === index ? 'text-white' : 'md:text-zinc-400 text-white'
                }`}
                style={{
                  lineHeight: '1',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                {titleWords.map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h2>

              <p
                className="hidden group-hover:block font-lato text-center uppercase px-10 text-white transition-opacity duration-500"
                onClick={() => handleViewMoreClick(index)}
              >
                {card.description}
              </p>

              <div className="mt-2 text-center h-20 flex flex-col items-center justify-center">
                <button
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => handleViewMoreClick(index)}
                  className="w-16 h-16 bg-white rounded-full mt-36 text-black absolute flex items-center justify-center"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
