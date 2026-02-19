"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExcellenceSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={ref}
            className="relative w-full bg-[#f3f3f3] py-40"
        >
            <motion.div
                style={{ y, opacity }}
                className="max-w-[1600px] mx-auto px-12"
            >
                <div className="grid grid-cols-12 gap-20">

                    <div className="col-span-5">
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                            className="w-full"
                        />
                    </div>

                    <div className="col-span-5 col-start-8">
                        <h2 className="text-3xl italic mb-6">
                            BUILDING POSSIBILITIES
                        </h2>
                        <p className="text-gray-600">
                            Karyan Group is reshaping real estate with intelligent,
                            innovative and experience-led developments.
                        </p>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
