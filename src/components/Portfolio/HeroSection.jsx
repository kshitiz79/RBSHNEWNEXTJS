"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
    return (
        <section className="relative w-full overflow-hidden ">

            {/* Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">

                {/* Big Heading */}
                <div className="flex justify-center">
                    <img 
                        src="/portfolio/image1.png" 
                        alt="Services Heading"
                        className="w-full object-contain"
                    />
                </div>

                {/* Paragraph */}
                <div className="mt-16 text-center flex justify-center">
                    <p className="max-w-6xl text-slate-600 text-lg md:text-lg leading-relaxed">
                       Our portfolio showcases strong capabilities in web, mobile, and backend development delivering scalable, high-performance digital solutions. Using technologies like React, Flutter, Node.js, Next.js, modern databases, and cloud infrastructure, we build each project with a focus on performance, security, and seamless user experience.
                    </p>
                </div>

               

                {/* Icons Grid */}
                <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-12 gap-8 place-items-center">
                    {[...Array(12)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-black/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={`/iconsoftcopy/${index + 1}.png`}
                                alt={`Service Icon ${index + 1}`}
                                className="w-10 md:w-12 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
