"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandingCards from "../../components/Blog/ExapandingCards";

export default function AnimatedIntro() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 100); // Show image after 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Image Section */}
      <AnimatePresence>
        {showImage && (
          <div
            key="image"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src="/blog2.png"
              alt="Visual"
              className="w-full h-screen object-cover"
            />
            <div className="z-[-50]">
              <ExpandingCards />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
