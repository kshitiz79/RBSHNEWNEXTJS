'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const images = [
    '/service/1.png',
    '/service/2.png',
    '/service/3.png',
    '/service/4.png',
    '/service/5.png',
    '/service/6.png',
    '/service/7.png',
    '/service/8.png',
    '/service/9.png',
];

export default function HorizontalImageScrollCards() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    // viewport width (Next.js safe)
    const [vw, setVw] = useState(0);

    useEffect(() => {
        setVw(window.innerWidth);
    }, []);

    // total width of cards
    const totalWidth = images.length * 420;

    // start from RIGHT → move LEFT
    const x = useTransform(scrollYProgress, [0, 1], [vw, -totalWidth]);
    // const y = useTransform(progress, [-1, 0, 1], [30, 0, 30]);

    // smooth motion
    const smoothX = useSpring(x, {
        stiffness: 80,
        damping: 20,
    });

    // Global curve (arc motion)
    const arcY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [120, 0, 120] // bottom → center → bottom
    );

    // smooth it
    const smoothY = useSpring(arcY, {
        stiffness: 80,
        damping: 20,
    });

    return (
        <section ref={ref} className="h-[150vh] bg-white relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Heading */}
                <div className="absolute top-10 text-center max-w-4xl px-4">
                    <h2 className="text-xl md:text-3xl font-semibold tracking-wide uppercase">
                        YOUR COMPLETE PARTNER FOR LUXURY YACHT TRANSFORMATIONS AND OUTSTANDING SUPPORT
                    </h2>
                </div>

                {/* Horizontal Track */}
                <motion.div
                    style={{ x: smoothX, y: smoothY }}
                    className="flex items-center gap-16"
                >
                    {images.map((src, i) => {
                        // per-card animation
                        const progress = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [i * -0.15, 1 - i * 0.15]
                        );

                        const scale = useTransform(progress, [-1, 0, 1], [0.85, 1.1, 0.85]);
                        const y = useTransform(progress, [-1, 0, 1], [60, 0, 60]);
                        const xOffset = useTransform(progress, [-1, 0, 1], [-60, 0, 60]);
                        const opacity = useTransform(progress, [-1, 0, 1], [0.5, 1, 0.5]);

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    scale,
                                    y,
                                    x: xOffset,
                                    opacity,
                                }}
                                className="min-w-[300px] md:min-w-[420px] h-[400px] md:h-[520px] relative"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute bottom-6 left-6 text-white font-semibold text-lg md:text-xl">
                                    SAMPLE TITLE
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}