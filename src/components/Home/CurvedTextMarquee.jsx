"use client";

import { useRef, useEffect } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

const services = [
  { src: "/div/1.png", title: "Web/App Development", delay: 0.04 },
  {
    src: "/div/2.png",
    title: "Social Media Marketing",
    delay: 0.08,
  },
  {
    src: "/div/3.png",
    title: "Packaging Design",
    delay: 0.12,
  },
  { src: "/div/8.png", title: "Brand Strategy", delay: 0.16 },
  { src: "/div/4.png", title: "Video Production", delay: 0.2 },
  {
    src: "/div/5.png",
    title: "Leads & Performance Marketing",
    delay: 0.24,
  },
  {
    src: "/div/6.png",
    title: "Creative Photography",
    delay: 0.28,
  },
  {
    src: "/div/7.png",
    title: "Software As a Service",
    delay: 0.32,
  },
];

export default function CurvedImagesScroll() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);

  // ✅ track only this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end -40%"],
  });

  // smooth scroll
  const smooth = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 18,
  });

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    return smooth.on("change", (progress) => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const delay = services[i].delay;

        // 🎯 staggered entry
        let localProgress = (progress - delay) * 2.8;

        // clamp (no loop)
        localProgress = Math.max(0, Math.min(1, localProgress));

        // 🔥 before entering → keep on right side
        if (localProgress === 0) {
          card.style.left = "-100%";
          card.style.top = "-100%";
          card.style.transform = "translate(-50%, -50%) rotate(0deg)";
          return;
        }

        // 🌊 Apply easing to bunch up at the ends and spread in the middle
        const easedProgress =
          localProgress < 0.5
            ? 4 * localProgress * localProgress * localProgress
            : 1 - Math.pow(-2 * localProgress + 2, 3) / 2;

        // 🔥 move along path
        const point = path.getPointAtLength(easedProgress * length);

        // rotation (tangent)
        const p1 = path.getPointAtLength(
          Math.max(0, easedProgress * length - 1),
        );
        const p2 = path.getPointAtLength(
          Math.min(length, easedProgress * length + 1),
        );

        const angle =
          Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI) + 180;

        card.style.left = `${(point.x / 1440) * 100}%`;
        card.style.top = `${(point.y / 800) * 100}%`;
        card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      });
    });
  }, [smooth]);

  return (
    <>
      <div
        ref={sectionRef}
        className="h-[220vh] w-full mx-auto bg-[#e5e8ea] relative"
      >
        {/* sticky */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="sticky top-24 w-full text-center z-10 px-4">
            <h2 className="text-[#102020] text-3xl font-medium uppercase">
              From digital platforms to bold brand identities and <br />
              growth-driven solutions, we transform ideas into scalable impact.
            </h2>
          </div>
          <div className="relative w-full h-[60vh] min-h-[800px]">
            <svg
              viewBox="0 0 1440 800"
              className="absolute w-full h-full pointer-events-none"
            >
              <path
                ref={pathRef}
                d="M 1800 800 Q 720 0 -360 800"
                fill="transparent"
              />
            </svg>
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="absolute w-[385px] h-[510px] shadow-lg overflow-hidden group"
                style={{
                  // ← INITIAL OFF-SCREEN POSITION (prevents flash)
                  left: "-100%",
                  top: "-100%",
                  transform: "translate(-50%, -50%) rotate(0deg) translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={service.src}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />

                {/* rest of your overlay, + button, title ... remains exactly the same */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102020]/90 via-[#102020]/20 to-transparent pointer-events-none"></div>

                <div className="absolute top-[45%] left-8 w-12 h-12 border border-white/40 rounded-full flex items-center justify-center text-white text-xl backdrop-blur-sm bg-black/10 font-light cursor-pointer hover:bg-white hover:text-black transition-colors">
                  +
                </div>

                <h3 className="absolute bottom-10 left-8 right-8 text-left text-white text-4xl font-medium uppercase leading-[1.1] tracking-wide">
                  {service.title.split("\n").map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white relative">
        <img src="/design1.png" alt="" className="w-full h-full" />
      </div>
    </>
  );
}
