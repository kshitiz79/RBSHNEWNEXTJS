


'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const slides = [
  // your slides array same as before...
  {
    id: 1,
    title: "Node.js",
    content: "Fast JavaScript runtime for scalable web applications.",
    logo: "/technology1.webp",
  },
  {
    id: 2,
    title: "React.js",
    content: "Library for building dynamic user interfaces ",
    logo: "/technology5.webp",
  },
  {
    id: 3,
    title: "Adobe Creative Cloud",
    content: "Design and editing tools for creative professionals.",
    logo: "/technology12.webp",
  },
  {
    id: 4,
    title: "Google Trends",
    content: "Explore trending search topics and keyword .",
    logo: "/technology11.webp",
  },
  {
    id: 5,
    title: "Next.js",
    content: "React framework for server-side rendering and.",
    logo: "/technology9.webp",
  },
  {
    id: 6,
    title: "Google Analytics",
    content: "Track and analyze website traffic and performance.",
    logo: "/technology3.webp",
  },
  {
    id: 7,
    title: "DaVinci Resolve",
    content: "Professional editing and color correction software.",
    logo: "/technology2.webp",
  },
  {
    id: 8,
    title: "Mailchimp",
    content: "Email marketing platform for campaigns .",
    logo: "/technology4.webp",
  },
  {
    id: 9,
    title: "HubSpot",
    content: "CRM software for marketing, sales",
    logo: "/technology7.webp",
  },
  {
    id: 10,
    title: "Canva",
    content: "Online tool for designing graphics ",
    logo: "/technology10.webp",
  },
  {
    id: 11,
    title: "Google Ads",
    content: "Advertising platform to reach customers ",
    logo: "/technology8.webp",
  },
  {
    id: 12,
    title: "Facebook Analytics",
    content: "Insights into your audience and engagement.",
    logo: "/technology6.webp",
  },
];


const CARD_GAP = 16;

const TechnologyCarousel = () => {
  const containerRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(5);
  const animationRef = useRef(null);

  useEffect(() => {
    function updateCards() {
      const width = window.innerWidth;
      setCardsToShow(width < 768 ? 3 : 5);
    }
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    // Kill existing animation if any
    if (animationRef.current) {
      animationRef.current.kill();
      gsap.set(container, { x: 0 });
    }

    function animate() {
      animationRef.current = gsap.to(container, {
        x: -totalWidth,
        ease: 'linear',
        duration: totalWidth / 100,
        onComplete: () => {
          gsap.set(container, { x: 0 });
          animate(); // loop again
        },
      });
    }

    animate();

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [cardsToShow]);

  const cardWidthCalc = `calc((100vw - ${(cardsToShow - 1) * CARD_GAP}px) / ${cardsToShow})`;

  return (
    <section className="relative overflow-hidden bg-[#e5e8ea] md:py-8 py-4 -mt-20 md:-mt-0">
      <div
        ref={containerRef}
        className="flex"
        style={{
          gap: `${CARD_GAP}px`,
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {[...slides, ...slides].map(({ id, title, content, logo }, index) => (
          <div
            key={`${id}-${index}`}
            style={{
              flex: `0 0 ${cardWidthCalc}`,
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 16,
              boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            <Image src={logo} alt={title} width={150} height={80} className="mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
            <p className="text-gray-600 text-sm text-center">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyCarousel;

