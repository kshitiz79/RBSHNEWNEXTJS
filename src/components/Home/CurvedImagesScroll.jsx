"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";

const services = [
  { src: "/div/1.png", title: "Web/App Development", delay: 0.04 },
  { src: "/div/2.png", title: "Social Media Marketing", delay: 0.08 },
  { src: "/div/3.png", title: "Packaging Design", delay: 0.12 },
  { src: "/div/8.png", title: "Brand Strategy", delay: 0.16 },
  { src: "/div/4.png", title: "Video Production", delay: 0.2 },
  { src: "/div/5.png", title: "Leads & Performance Marketing", delay: 0.24 },
  { src: "/div/6.png", title: "Creative Photography", delay: 0.28 },
  { src: "/div/7.png", title: "Software As a Service", delay: 0.32 },
];

/* ─────────────────────────────────────────────
   DESKTOP  –  original curved-path animation
───────────────────────────────────────────── */
function DesktopView() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end -40%"],
  });

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
        let localProgress = (progress - delay) * 2.8;
        localProgress = Math.max(0, Math.min(1, localProgress));

        if (localProgress === 0) {
          card.style.left = "-100%";
          card.style.top = "-100%";
          card.style.transform = "translate(-50%, -50%) rotate(0deg)";
          return;
        }

        const easedProgress =
          localProgress < 0.5
            ? 4 * localProgress * localProgress * localProgress
            : 1 - Math.pow(-2 * localProgress + 2, 3) / 2;

        const point = path.getPointAtLength(easedProgress * length);

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
        className="h-[220vh] w-full mx-auto bg-[#e5e8ea] relative z-10"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="sticky top-32 w-full text-center z-10 px-4 py-10">
            <h2 className="text-[#102020] text-3xl font-medium uppercase py-10">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#102020]/90 via-[#102020]/20 to-transparent pointer-events-none" />
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

/* ─────────────────────────────────────────────
   MOBILE  –  vertical card grid with fade-in
───────────────────────────────────────────── */
function MobileView() {
  return (
    <div className="bg-[#e5e8ea] w-full px-4 py-12 relative">
      {/* Section heading */}
      <h2 className="text-[#102020] text-xl font-medium uppercase text-center leading-snug mb-10 px-2">
        From digital platforms to bold brand identities and growth-driven
        solutions, we transform ideas into scalable impact.
      </h2>

      {/* 2-column grid on mobile, single-column on very small screens */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-md aspect-[3/4]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
          >
            <img
              src={service.src}
              alt={service.title}
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102020]/90 via-[#102020]/20 to-transparent" />

            {/* plus button */}
            <div className="absolute top-[40%] left-4 w-9 h-9 border border-white/40 rounded-full flex items-center justify-center text-white text-lg backdrop-blur-sm bg-black/10 font-light">
              +
            </div>

            {/* title */}
            <h3 className="absolute bottom-5 left-4 right-4 text-left text-white text-base font-medium uppercase leading-tight tracking-wide">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* design1 image below the grid */}
      <div className="mt-8 bg-white rounded-xl overflow-hidden">
        <img src="/design1.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT EXPORT  –  switches based on viewport
───────────────────────────────────────────── */
export default function CurvedImagesScroll() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Avoid hydration flash — render nothing until mounted
  if (!mounted) return null;

  return isMobile ? <MobileView /> : <DesktopView />;
}
