"use client";

import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function JobVacacny() {
  return (
    <section className="relative bg-[#e5e8ea] w-full z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto max-w-4xl p-6 rounded-2xl shadow-xl bg-white dark:bg-zinc-900"
    >
      <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
        🎨 Graphic Designer Intern
      </h2>

      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          Internship
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Remote / On-site
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          Duration: 3 months
        </div>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        We're looking for a creative and enthusiastic <strong>Graphic Designer Intern</strong> to join our design team. If you have an eye for clean design, love typography, and are excited to build brand visuals — this is for you!
      </p>

      <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">
        Responsibilities
      </h3>
      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-4 space-y-1">
        <li>Assist in creating graphics for social media, web, and print.</li>
        <li>Support the team in building brand identity assets.</li>
        <li>Participate in brainstorming and idea generation sessions.</li>
        <li>Work on illustrations, icons, and visual assets.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">
        Requirements
      </h3>
      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-6 space-y-1">
        <li>Basic knowledge of Adobe Photoshop, Illustrator or Figma.</li>
        <li>Strong sense of visual design and color theory.</li>
        <li>Good communication and collaboration skills.</li>
        <li>Portfolio showcasing your design work is a plus.</li>
      </ul>

      <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300">
        Apply Now
      </button>
    </motion.div>
    </section>
  );
}
