"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    id: "01",
    title: "Creatively Curious",
    description:
      "We thrive on the unconventional and champion bold, original ideas. Our love of learning fuels our drive to explore uncharted territories in our designs and thinking",
  },
  {
    id: "02",
    title: "Freedom to Lead",
    description:
      "At our core, we empower and trust one another to take ownership of our roles. We foster a culture that values initiative, encouraging everyone to lead with confidence while feeling comfortable seeking support whenever needed.",
  },
  {
    id: "03",
    title: "Design Excellence",
    description:
      "We are dedicated to our craft and committed to delivering exceptional results in every project we touch. Our shared passion for design ensures that we always bring our best to the table.",
  },
  {
    id: "04",
    title: "Collective Success",
    description:
      "Collective success is driven by unity and purpose. By aligning creativity, expertise, and ambition, we create outcomes that benefit not just brands, but everyone behind them.",
  },
];

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative bg-[#e5e8ea]   py-16 md:py-40 w-full tracking-tight">
      <div className="w-full flex flex-col">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 mb-4">
          <div className="hidden lg:block"></div>
          <div className="lg:pl-12">
            <span className="italic text-[#2f2f2f]/60 text-3xl">
              Our Values
            </span>
          </div>
        </div>

        {/* VALUES LIST */}
        <div className="flex flex-col w-full relative">
          {values.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="group relative w-full cursor-pointer"
            >
              {/* HOVER BORDER */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none">
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{
                    x: activeIndex === index ? "0%" : "54%",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full h-full bg-gray-400"
                />
              </div>

              {/* CONTENT */}
              <div className="max-w-[1400px] mx-auto w-full px-6 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 py-8 md:py-0 items-start">
                {/* LEFT COLUMN (FIXED - NO HEIGHT CHANGE) */}
                <div className="relative min-h-[70px]">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={item.id}
                        initial={{
                          opacity: 0,
                          y: 10,
                          filter: "blur(4px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          filter: "blur(4px)",
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        className="absolute top-0 left-0 max-w-md pt-2"
                      >
                        <p className="text-[#2f2f2f] text-base md:text-lg leading-relaxed font-light z-10">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* RIGHT COLUMN */}
                <div className="relative flex items-start flex-1 py-2 lg:pl-10">
                  <h3
                    className={`
                                    text-4xl md:text-6xl lg:text-[62px] font-light tracking-tighter transition-colors duration-500
                                    ${activeIndex === index ? "text-[#2f2f2f]" : "text-[#2f2f2f]/20"}
                                `}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
