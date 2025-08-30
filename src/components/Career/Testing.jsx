"use client";

import { useRef } from "react";

const Testing = () => {
  const containerRef = useRef(null);

  const items = [
    { id: 1, src: "/image.png", alt: "Instagram post #1" },
    { id: 2, src: "/image1.png", alt: "Instagram post #2" },
    { id: 3, src: "/image2.png", alt: "Instagram post #3" },
    { id: 4, src: "/image3.png", alt: "Instagram post #4" },
    { id: 5, src: "/image4.png", alt: "Instagram post #5" },
  ];

  return (
    <section
      className="relative w-full md:h-[90vh] h-[90vh] bg-[#e5e8ea]"
      ref={containerRef}
    >
      {/* Responsive Flex Container */}
      <div className="md:sticky md:top-0 w-full h-auto md:h-screen flex flex-col md:flex-row overflow-hidden z-10">
        
        {/* Left Video */}
        <div className="w-full md:w-[30%] h-[250px] md:h-full">
          <video
            src="/videoblog.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover rounded-none md:rounded-l-xl"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[70%] p-4 md:p-8 flex flex-col bg-[#e5e8ea] md:px-20 h-screen">
          {/* Title */}
          <div className="pt-6 md:pt-10 md:px-2">
            <h1 className="text-2xl md:text-4xl font-semibold">
              What sets RBSH Studio Private Limited apart
            </h1>
          </div>

          {/* Description */}
          <div className="mt-4 md:mt-6 px-1 md:px-2">
            <p className="text-base md:text-xl text-gray-700 text-justify">
              It’s not just the work we do — it’s how we do it. At RBSH Studio,
              creativity isn’t confined to a department; it’s the foundation of
              everything we build. We foster a culture where ideas are heard,
              roles are flexible, and growth is continuous. Whether you're
              directing a shoot, designing a brand, or writing a content — you’re
              trusted to take ownership and push boundaries.
            </p>
          </div>

          {/* Instagram Scroll Image */}
          <div className="w-full bg-[#e5e8ea] py-10  overflow-hidden">
            <img src="/careerpage6.png" alt="Instagram Posts Preview" className="w-full h-full cover" />

            {/* Keyframe (still included in case used later) */}
            <style>{`
              @keyframes scrollLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
