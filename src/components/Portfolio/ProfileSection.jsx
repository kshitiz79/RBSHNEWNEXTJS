"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const categories = [
  "All Projects",
  "Aviation",
  "Pharmaceuticals",
  "Fintech",
  "E-commerce",
  "Ad Agency",
  "Education",
  "Electronics",
  "Interior Design",
  "Biography",
];
const images = [
  {
    src: "/websites/flyola.gif",
    category: "Aviation",
    title: "Flyola – Flight Booking Platform",
    para: "Smart flight booking platform for quick, easy, hassle-free travel.",
    link: "https://www.flyola.in/",
  },
  {
    src: "/websites/irctc.png",
    category: "Aviation",
    title: "Flyola x IRCTC Integration",
    para: "Seamless Flyola booking platform integrated with IRCTC for streamlined and reliable travel reservations.",
    link: "https://www.air.irctc.co.in/flyola/",
  },
  {
    src: "/websites/iia.gif",
    category: "Aviation",
    title: "Indraprasth Institute of Aeronautics",
    para: "Modern aviation institute website streamlining admissions and inspiring engineers.",
    link: "https://iiagurgaon.com/",
  },
  {
    src: "/websites/gluckscare.png",
    category: "Pharmaceuticals",
    title: "Glucks Care - Pharmaceutical Website",
    para: "Innovative pharmaceutical website showcasing research excellence and healthcare advancements.",
    link: "https://gluckscare.com/",
  },
  {
    src: "/websites/uc.gif",
    category: "Ad Agency",
    title: "Urban Chanakya",
    para: "Strategic political branding platform delivering impactful, data-driven campaigns.",
    link: "https://urbanchanakya.in/",
  },
  {
    src: "/websites/anci.png",
    category: "Interior Design",
    title: "A.N.C.I – Interior Design Website",
    para: "Premium interior design platform transforming commercial spaces with innovative spatial design solutions.",
    link: "https://anci.in/",
  },
  {
    src: "/websites/himtaj.png",
    category: "E-commerce",
    title: "Himtaj Jewelry - E-commerce Website",
    para: "Elegant jewelry e-commerce platform designed for seamless shopping and a premium brand experience.",
    link: "https://himtajjewelry.com/",
  },
  {
    src: "/websites/tnt.png",
    category: "Education",
    title: "TNT Techies Guide - IT Training & Services Website",
    para: "Comprehensive IT training and services platform empowering students and professionals to grow.",
    link: "https://tnttechiesguide.com/",
  },
  {
    src: "/websites/MaheshManzar.png",
    category: "Biography",
    title: "Mahesh Manzar – Author & Book Website",
    para: "Engaging author website crafted to showcase the book, legacy, and literary journey.",
    link: "https://www.maheshmanzar.com/",
  },
  {
    src: "/websites/bkm.png",
    category: "Fintech",
    title: "BKM Global – Trading Solutions Website",
    para: "Advanced financial trading platform delivering global investment and risk management solutions.",
    link: "https://bkmglobal.in/",
  },
  {
    src: "/websites/gluckswealth.gif",
    category: "Fintech",
    title: "Glucks Wealth – Investment Platform",
    para: "Trusted investment platform offering smart financial solutions and fixed deposit opportunities.",
    link: "https://gluckswealth.com/",
  },
  {
    src: "/websites/infods.png",
    category: "Fintech",
    title: "InfoD – Intelligent Trading Platform",
    para: "Smart algorithmic trading website built for strategic investments and currency market solutions.",
    link: "https://www.infoduae.com/",
  },
  {
    src: "/websites/activesine.gif",
    category: "Electronics",
    title: "Activesine - Power Quality Solutions Website",
    para: "Advanced power quality platform delivering efficient and enhanced power factor solutions.",
    link: "https://www.activesine.com/",
  },
  {
    src: "/websites/eps.png",
    category: "Electronics",
    title: "EPS – ELectricals & Services Website",
    para: "Professional Electricals & Services website showcasing products, services, and seamless client support.",
    link: "https://epselectricals.com/",
  },
  {
    src: "/websites/upflair.gif",
    category: "Electronics",
    title: "Upflair Power & Data Center Solutions Website",
    para: "Comprehensive power and data center solutions platform built for reliability, performance, and business continuity.",
    link: "https://www.upflair.in/",
  },
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
          ${
            direction === "top"
              ? "origin-top scale-y-0 group-hover:scale-y-100"
              : "origin-bottom scale-y-0 group-hover:scale-y-100"
          }
        `}
      />

      {/* Content */}
      <div
        className={`relative z-10 px-4 py-4 transition-colors duration-300
          ${
            active === cat
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

  return (
    <motion.a
      href={img.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden group cursor-pointer block mb-6 md:mb-8"
      onMouseMove={(e) => {
        if (window.innerWidth >= 1024) {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left - 50);
          mouseY.set(e.clientY - rect.top - 20);
        }
      }}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setIsHovered(false);
      }}
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={img.src}
          alt={img.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* DESKTOP HOVER BUTTON */}
      <motion.div
        style={{ x, y }}
        className="hidden lg:block absolute top-0 left-0 z-50 pointer-events-none"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          className="bg-green-100 text-black text-sm h-10 w-32 rounded-full flex items-center justify-center"
        >
          view project
        </motion.button>
      </motion.div>

      {/* MOBILE CONTENT (always visible) */}
      <div className="lg:hidden p-4 bg-white">
        <h3 className="text-black text-lg font-medium">{img.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{img.para}</p>
      </div>

      {/* DESKTOP OVERLAY */}
      <div className="hidden lg:flex absolute bottom-0 w-full h-60 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-2">{img.title}</h3>
        <p className="text-gray-200 text-sm line-clamp-2">{img.para}</p>
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
        {/* ✅ MOBILE CATEGORY TABS */}
        <div className="lg:hidden px-4 py-3 overflow-x-auto flex gap-3 border-b">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ DESKTOP SIDEBAR (UNCHANGED) */}
        <div className="hidden lg:block lg:w-[300px] bg-[#2f2f2f] text-white sticky top-20 h-screen px-10 border-r">
          <ul className="mt-6">
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

        {/* ✅ GALLERY */}
        <div className="flex-1 px-4 md:px-12 mt-4 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {filteredImages.map((img, index) => (
              <ProjectCard key={index} img={img} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
