"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = ["/careerpage2.png", "/careerpage1.png", "/careerpage3.png"];

const CareerPage = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(images.length - 2) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#e5e8ea] min-h-screen md:h-[200vh]"
    >
      {/* --- Desktop Layout --- */}
      {!isMobile ? (
        <div className="fixed top-0 left-0 w-full h-screen flex overflow-hidden z-10">
          {/* Left Video */}
          <div className="w-[30%] relative h-full">
            <video
              src="/videoblog.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover rounded-l-xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-[70%] p-14 flex flex-col bg-[#e5e8ea]">
            {/* Title */}
            <div className="h-[40%] flex items-center pt-20">
              <img src="/careerfont.png" alt="Career Font" />
            </div>

            {/* Horizontal Scroll Images */}
            <div className="pt-20" />
            <div className="h-[60%] overflow-hidden relative">
              <motion.div
                className="flex gap-8 absolute bottom-0 left-0 h-full"
                style={{ x }}
              >
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="md:w-[700px] w-[600px] h-auto "
                  >
                    <img
                      src={src}
                      alt={`card-${index + 1}`}
                      className="w-full h-full cover rounded"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        // --- Mobile Layout ---
        <div className="flex flex-col pt-16">
          {/* Video */}
          <div className="w-full">
            <video
              src="/videoblog.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[240px] object-cover rounded-md"
            />
          </div>

          {/* Title */}
          <div className="p-4 flex justify-center">
            <img
              src="/careerfont.png"
              alt="Career Font"
              className="w-full max-w-xs"
            />
          </div>

          {/* Vertical Images */}
          <div className="flex flex-col gap-6 px-4 pb-10">
            {images.map((src, index) => (
              <div key={index} className="w-full overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={`card-${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerPage;
