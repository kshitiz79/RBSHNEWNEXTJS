"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const sections = [
    {
        type: "text",
        variant: "split", // special first slide
        heading: "Showcasing",
        heading2: "Client's Websites",
        paragraph:
            "We build fast, secure, and easy-to-use websites for businesses across industries from booking systems and billing platforms to payroll, healthcare, and online stores. Every site is designed to be simple, reliable, and built to support your growth.",
    },
    {
        type: "image",
        src: "/websites/Websites-Ui.png",
    },
    {
        type: "split-image",
        image:
            "/websites/ios-app-UI-.png",
        heading: "iOS Applications",
        para: "iOS Applications",
        paragraph:
            "We develop refined iOS applications that combine powerful performance with intuitive design. Reliable, responsive, and ready to grow with your business.",
    },

    {
        type: "overlay-realestate",
        smallImage:
            "/websites/lap.png",
        bigImage:
            "/websites/iPad-Mockup.png",
        heading: "Android & Tablet Applications",
        para: "Android & Tablet Applications",
        paragraph:
            "Our Android and Tablet applications are designed for smooth performance across multiple screen sizes, ensuring cross-platform compatibility, strong security, and an optimized user experience for every device.",
    },
];

export default function HorizontalScrollSections() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Total width of all sections pinned
    const firstWidth = 85; // 85vw
    const otherWidth = 100; // 100vw
    // On mobile, the 4th section is 200vw (2 slides)
    const extraWidth = isMobile ? 100 : 0;
    const totalWidthVw = firstWidth + (sections.length - 1) * otherWidth + extraWidth;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Use spring for smoother scrolling and to eliminate jitter/flicker
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Percentage of the container width to move
    const movePercentage = ((totalWidthVw - 100) / totalWidthVw) * 100;

    const x = useTransform(
        smoothProgress,
        [0, 0.05, 1], // Delay horizontal scroll for vertical entrance
        ["0%", "0%", `-${(((totalWidthVw - 100) / totalWidthVw) * 100)}%`]
    );

    // Vertical animation for the first slide content
    const verticalY = useTransform(
        smoothProgress,
        [0, 0.05],
        ["100px", "0px"]
    );

    const verticalOpacity = useTransform(
        smoothProgress,
        [0, 0.04],
        [0, 1]
    );

    return (
        <section
            ref={containerRef}
            className="relative h-[600vh] w-full"
            style={{ contain: "paint" }}
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{
                        x,
                        width: `${totalWidthVw}vw`,
                        willChange: "transform",
                        transformStyle: "preserve-3d"
                    }}
                    className="flex h-full"
                >
                    {sections.map((section, index) => {
                        // TEXT ONLY SPLIT (FIRST SLIDE)
                        if (section.variant === "split") {
                            return (
                                <div
                                    key={index}
                                    style={{ width: `${firstWidth}vw` }}
                                    className="h-screen bg-[#2f2f2f] text-white flex flex-col justify-between px-6 py-12 md:px-20 md:py-24 flex-shrink-0"
                                >
                                    <motion.div
                                        className="flex flex-col h-full justify-center md:justify-between"
                                    >
                                        <div>
                                            <h1 className="text-4xl sm:text-5xl md:text-[70px] font-light leading-tight">
                                                {section.heading}
                                            </h1>
                                            <h2 className="text-4xl sm:text-5xl md:text-[70px] font-light leading-tight">
                                                {section.heading2}
                                            </h2>
                                        </div>

                                        <p className="max-w-xl text-base md:text-lg text-white/80 leading-relaxed mt-8 md:mt-0">
                                            {section.paragraph}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        }

                        // IMAGE + TEXT SPLIT (THIRD SECTION STYLE)
                        if (section.type === "split-image") {
                            return (
                                <div
                                    key={index}
                                    className="w-screen h-screen bg-[#2f2f2f] flex items-center justify-center flex-shrink-0 p-6 md:p-0"
                                >
                                    <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                                        {/* IMAGE */}
                                        <div className="w-full lg:w-[45%]">
                                            <img
                                                src={section.image}
                                                alt="warehouse"
                                                className="w-full h-[35vh] lg:h-[70vh] object-cover rounded-lg lg:rounded-none"
                                            />
                                        </div>

                                        {/* TEXT */}
                                        <div className="w-full lg:w-[45%] text-white">
                                            <h2 className="text-3xl sm:text-4xl md:text-[64px] font-light leading-tight mb-4 md:mb-8">
                                                {section.heading}
                                            </h2>

                                            <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                                {section.paragraph}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        // REAL ESTATE OVERLAY SECTION (4TH SECTION)
                        if (section.type === "overlay-realestate") {
                            return (
                                <div
                                    key={index}
                                    style={{ width: isMobile ? "200vw" : "100vw" }}
                                    className="h-screen flex-shrink-0 flex overflow-hidden"
                                >
                                    {/* MOBILE VIEW: Two separate slides */}
                                    {isMobile ? (
                                        <div className="flex w-full h-full">
                                            {/* Part 1: Text Only (Matches Section 1 style) */}
                                            <div className="w-[100vw] h-full bg-[#2f2f2f] text-white flex flex-col justify-center px-6 py-12 flex-shrink-0">
                                                <div>
                                                    <h1 className="text-4xl font-light leading-tight">
                                                        {section.heading}
                                                    </h1>
                                                    {section.para && section.para !== section.heading && (
                                                        <h2 className="text-4xl font-light leading-tight">
                                                            {section.para}
                                                        </h2>
                                                    )}
                                                </div>
                                                <p className="max-w-xl text-base text-white/80 leading-relaxed mt-8">
                                                    {section.paragraph}
                                                </p>
                                            </div>

                                            {/* Part 2: Image Only (Matches Section 2 style) */}
                                            <div className="w-[100vw] h-full flex-shrink-0">
                                                <img
                                                    src={section.bigImage}
                                                    alt="background"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        /* DESKTOP VIEW: Overlay Layout */
                                        <div className="hidden md:flex container bg-[#2f2f2f] mx-auto relative h-full items-center px-6 md:px-20 min-w-full">
                                            {/* BIG CENTER IMAGE */}
                                            <div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center">
                                                <img
                                                    src={section.bigImage}
                                                    alt="big"
                                                    className="h-[110vh] w-[520px] object-cover"
                                                />
                                            </div>

                                            {/* SMALL OVERLAY IMAGE (Left Floating) */}
                                            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
                                                <img
                                                    src={section.smallImage}
                                                    alt="small"
                                                    className="w-[360px] h-[360px] object-cover shadow-2xl"
                                                />
                                            </div>

                                            {/* TEXT CONTENT (Right Side) */}
                                            <div className="ml-auto -mr-10 max-w-xs text-white z-30">
                                                <h2 className="text-[34px] font-light leading-tight mb-8">
                                                    {section.heading}
                                                </h2>

                                                <p className="text-sm text-white/70 leading-relaxed">
                                                    {section.paragraph}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }


                        // DEFAULT FULL IMAGE
                        return (
                            <div
                                key={index}
                                className="w-screen h-screen flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={section.src}
                                    alt={`section-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        );
                    })}

                </motion.div>
            </div>
        </section>
    );
}
