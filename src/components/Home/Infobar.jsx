import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// If you're using ScrollTrigger in the future, you can keep this import
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register GSAP plugins if needed

const ScrollText = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
 
    // Ensure the element has loaded and has a width
    if (!element) return;

    const totalWidth = element.scrollWidth / 2; // Since we have two copies

    // GSAP animation for infinite scrolling
    gsap.to(element, {
      x: -totalWidth,
      duration: 1800, // Adjust duration to control speed
      ease: 'linear',
      repeat: -1, // Infinite loop
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) % totalWidth),
      },
    });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(element);
    };
  }, []);

  // Define the text items
  const textItems = ['Create', 'Innovate', 'Grow', 'Succeed', 'Build', 'Trend'];

  // Create the scrolling items with icons between them and after the last item
  const scrollingItems = textItems.map((item, index) => (
    <span key={`text-${index}`} className="lg:text-xl flex items-center">
      <span className="font-semibold text-white">{item}</span>
      <i
        key={`icon-${index}`}
        className="fas fa-star-of-life text-yellow-500 ml-8"
      ></i>
    </span>
  ));

  return (
    <div className="bg-black text-white lg:py-6 py-2 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex items-center space-x-8 whitespace-nowrap uppercase"
      >
        {/* Duplicate the scrolling items for seamless loop */}
        {Array(110).fill(scrollingItems)}
        {/* {scrollingItems}
        {scrollingItems} */}
      </div>
    </div>
  );
};

export default ScrollText;
