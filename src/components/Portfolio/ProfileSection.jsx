"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";


const categories = [
    "All Projects",
    "Aviation",
    // "Health Care",
    "Pharmaceuticals",
    // "EMS",
    // "Dating App",
    "Fintech",
    "E-commerce",
    "Ad Agency",
    "Education",
    "Electronics",
    "Interior Design",
    // "Real Estate",
    // "Law",
    "Biography"
];

const images = [
    {
        src: "/websites/flyola.gif",
        category: "Aviation",
        title: "Flyola – Flight Booking Platform",
        para: "Smart flight booking platform for quick, easy, hassle-free travel.",
        link: "https://www.flyola.in/"
    },
    {
        src: "/websites/irctc.png",
        category: "Aviation",
        title: "Flyola x IRCTC Integration",
        para: "Seamless Flyola booking platform integrated with IRCTC for streamlined and reliable travel reservations.",
        link: "https://www.air.irctc.co.in/flyola/"
    },
    {
        src: "/websites/iia.gif",
        category: "Aviation",
        title: "Indraprasth Institute of Aeronautics",
        para: "Modern aviation institute website streamlining admissions and inspiring engineers.",
        link: "https://iiagurgaon.com/"
    },
    {
        src: "/websites/gluckscare.png",
        category: "Pharmaceuticals",
        title: "Glucks Care - Pharmaceutical Website",
        para: "Innovative pharmaceutical website showcasing research excellence and healthcare advancements.",
        link: "https://gluckscare.com/"
    },
    {
        src: "/websites/uc.gif",
        category: "Ad Agency",
        title: "Urban Chanakya",
        para: "Strategic political branding platform delivering impactful, data-driven campaigns.",
        link: "https://urbanchanakya.in/"
    },
    {
        src: "/websites/anci.png",
        category: "Interior Design",
        title: "A.N.C.I – Interior Design Website",
        para: "Premium interior design platform transforming commercial spaces with innovative spatial design solutions.",
        link: "https://anci.in/"
    },
    {
        src: "/websites/himtaj.png",
        category: "E-commerce",
        title: "Himtaj Jewelry - E-commerce Website",
        para: "Elegant jewelry e-commerce platform designed for seamless shopping and a premium brand experience.",
        link: "https://himtajjewelry.com/"
    },
    {
        src: "/websites/tnt.png",
        category: "Education",
        title: "TNT Techies Guide - IT Training & Services Website",
        para: "Comprehensive IT training and services platform empowering students and professionals to grow.",
        link: "https://tnttechiesguide.com/"
    },
    {
        src: "/websites/MaheshManzar.png",
        category: "Biography",
        title: "Mahesh Manzar – Author & Book Website",
        para: "Engaging author website crafted to showcase the book, legacy, and literary journey.",
        link: "https://www.maheshmanzar.com/"
    },
    {
        src: "/websites/bkm.png",
        category: "Fintech",
        title: "BKM Global – Trading Solutions Website",
        para: "Advanced financial trading platform delivering global investment and risk management solutions.",
        link: "https://bkmglobal.in/"
    },
    {
        src: "/websites/gluckswealth.gif",
        category: "Fintech",
        title: "Glucks Wealth – Investment Platform",
        para: "Trusted investment platform offering smart financial solutions and fixed deposit opportunities.",
        link: "https://gluckswealth.com/"
    },
    {
        src: "/websites/infods.png",
        category: "Fintech",
        title: "InfoD – Intelligent Trading Platform",
        para: "Smart algorithmic trading website built for strategic investments and currency market solutions.",
        link: "https://www.infoduae.com/"
    },
    {
        src: "/websites/activesine.gif",
        category: "Electronics",
        title: "Activesine - Power Quality Solutions Website",
        para: "Advanced power quality platform delivering efficient and enhanced power factor solutions.",
        link: "https://www.activesine.com/"
    },
    {
        src: "/websites/eps.png",
        category: "Electronics",
        title: "EPS – ELectricals & Services Website",
        para: "Professional Electricals & Services website showcasing products, services, and seamless client support.",
        link: "https://epselectricals.com/"
    },
    {
        src: "/websites/upflair.gif",
        category: "Electronics",
        title: "Upflair Power & Data Center Solutions Website",
        para: "Comprehensive power and data center solutions platform built for reliability, performance, and business continuity.",
        link: "https://www.upflair.in/"
    }

];


function HoverItem({ cat, active, setActive }) {
    const [direction, setDirection] = useState("top");

    const handleMouseEnter = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;

        if (y < rect.height / 2) {
            setDirection("top");
        } else {
            setDirection("bottom");
        }
    };

    return (
        <li
            onClick={() => setActive(cat)}
            onMouseEnter={handleMouseEnter}
            className=" group relative overflow-hidden cursor-pointer border-t border-white/10 text-lg"
        >
            {/* Animated Background */}
            <span
                className={`absolute inset-0 bg-white transform transition-transform duration-500 ease-out
          ${direction === "top"
                        ? "origin-top scale-y-0 group-hover:scale-y-100"
                        : "origin-bottom scale-y-0 group-hover:scale-y-100"
                    }
        `}
            />

            {/* Content */}
            <div
                className={`relative z-10 px-4 py-4 transition-colors duration-300
          ${active === cat
                        ? "hover:text-black font-semibold"
                        : "hover:text-gray-800"
                    }`}
            >
                {cat}
            </div>
        </li>
    );
}

function ProjectCard({ img, index }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - 50); // Offset by half of button width approx
        mouseY.set(e.clientY - rect.top - 20); // Offset by half of button height approx
    };

    return (
        <motion.a
            key={index}
            href={img.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group cursor-pointer block mb-8"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* IMAGE CONTAINER */}
            <div className="relative">
                <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 "
                />
            </div>

            {/* CURSOR FOLLOWER BUTTON */}
            <motion.div
                style={{
                    x,
                    y,
                    pointerEvents: "none",
                }}
                className="absolute top-0 left-0 z-50 pointer-events-none"
            >
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/30 backdrop-blur-sm text-black text-sm font-semibold h-10 w-32 rounded-full overflow-hidden flex items-center justify-center shadow-2xl relative"
                >
                    <motion.div
                        className="flex whitespace-nowrap absolute left-0"
                        initial={{ x: "0%", opacity: 0 }}
                        animate={{
                            x: isHovered ? ["0%", "-50%"] : "0%",
                            opacity: isHovered ? 1 : 0
                        }}
                        transition={isHovered ? {
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 6,
                                ease: "linear"
                            },
                            opacity: { duration: 0.3 }
                        } : { duration: 0.3 }}
                    >
                        <span className="px-4">view project</span>
                        <span className="px-4">view project</span>
                        <span className="px-4">view project</span>
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* HOVER OVERLAY */}
            <div className="absolute bottom-0 w-full h-60 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-bold mb-2 transform transition-transform duration-500 delay-100">
                    {img.title}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2 transform transition-transform duration-500 delay-200">
                    {img.para}
                </p>
            </div>
        </motion.a>
    );
}



export default function ProfileSection() {
    const [active, setActive] = useState("All Projects");

    const filteredImages =
        active === "All Projects"
            ? images
            : images.filter((img) => img.category === active);

    return (
        <section className="w-full min-h-screen py-4">
            <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row">

                {/* LEFT SIDEBAR */}
                <div className="lg:w-[300px] bg-[#2f2f2f] text-white w-full lg:sticky lg:top-20 h-fit lg:h-screen px-6 md:px-10 border-b lg:border-b-0 lg:border-r border-black/10">

                    <ul className="space-y-0 rounded-lg overflow-hidden mt-6">
                        {categories.map((cat) => (
                            <HoverItem
                                key={cat}
                                cat={cat}
                                active={active}
                                setActive={setActive}
                            />
                        ))}
                    </ul>
                </div>

                {/* RIGHT GALLERY */}
                <div className="flex-1 px-6 md:px-12 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {filteredImages.map((img, index) => (
                            <ProjectCard key={index} img={img} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


