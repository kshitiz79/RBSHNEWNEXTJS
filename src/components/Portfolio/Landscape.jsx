"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sections = [
    {
        type: "text",
        variant: "split", // special first slide
        heading: "Showcasing Websites for Our Clients",
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

    const totalWidth =
        85 + (sections.length - 1) * 110; // first = 85vw, others 100vw

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["20%", `-${totalWidth - 100}%`]
    );

    return (
        <section
            ref={containerRef}
            className="relative h-[500vh] w-full"
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex h-full"
                >
                    {sections.map((section, index) => {
                        // TEXT ONLY SPLIT (FIRST SLIDE)
                        if (section.variant === "split") {
                            return (
                                <div
                                    key={index}
                                    className="w-[62vw] h-screen bg-[#2f2f2f] text-white flex flex-col justify-between px-20 py-24 flex-shrink-0"
                                >
                                    <h1 className="text-[70px] font-light leading-tight">
                                        {section.heading}
                                    </h1>

                                    <p className="max-w-xl text-lg text-white/80 leading-relaxed">
                                        {section.paragraph}
                                    </p>
                                </div>
                            );
                        }

                        // IMAGE + TEXT SPLIT (THIRD SECTION STYLE)
                        if (section.type === "split-image") {
                            return (
                                <div
                                    key={index}
                                    className="w-screen h-screen bg-[#2f2f2f] flex items-center justify-center flex-shrink-0"
                                >
                                    <div className="w-full max-w-[1400px] flex items-center gap-20 px-16">

                                        {/* LEFT IMAGE */}
                                        <div className="w-[45%]">
                                            <img
                                                src={section.image}
                                                alt="warehouse"
                                                className="w-full h-[70vh] object-cover"
                                            />
                                        </div>

                                        {/* RIGHT TEXT */}
                                        <div className="w-[45%] text-white">
                                            <h2 className="text-[64px] font-light leading-tight mb-8">
                                                {section.heading}
                                            </h2>
                                            {/* <h3>{section.para}</h3> */}

                                            <p className="text-base text-white/80 leading-relaxed">
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
                                    className="w-screen h-screen w-full bg-[#2f2f2f] flex items-center flex-shrink-0 overflow-hidden"
                                >
                                    <div className="container mx-auto relative h-full flex items-center">

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
