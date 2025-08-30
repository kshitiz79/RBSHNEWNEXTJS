"use client";

import { useRef, useEffect, useState, memo } from "react";

const VideoSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  // Intersection Observer for desktop view
  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[30vh] md:h-[60vh] lg:h-screen overflow-hidden bg-[#e2e5ea] z-0"
    >
      {(isMobile || isVisible) && (
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover z-80 transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/video-poster.webp"
          aria-hidden="true"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/video3.webm" type="video/webm" />
          <source src="/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default memo(VideoSection);
