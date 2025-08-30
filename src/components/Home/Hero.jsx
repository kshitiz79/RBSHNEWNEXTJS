"use client";

import React, { useState, useEffect, memo, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Static files must be in public/ directory in Next.js
import mobileBottomBg from "../../../public/mobilebottombg.webp";
import mobileTopBg from "../../../public/mobiletopbg.png";

const Hero = () => {
  const words = useMemo(
    () => [
      { word: "clean", symbols: { left: "#", right: "#" } },
      { word: "quality", symbols: { left: "@", right: "@" } },
      { word: "creative", symbols: { left: "$", right: "$" } },
    ],
    []
  );

  const keywords = [
    "creative design solutions",
    "React website development",
    "digital marketing Noida",
    "branding and marketing agency",
    "web development company NCR",
    "GSAP animations services",
    "top creative studio India",
    "website redesign services",
    "custom website solutions",
    "best digital marketing firm Noida ",
    // Add the remaining keywords here
  ];

  const chunkedKeywords = (arr, size) =>
    arr.length > size ? arr.slice(0, size) : arr;

  const colors = useMemo(
    () => ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500"],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  const backgroundStyle1 = useMemo(
    () => ({
      backgroundImage: `url('/background.webp')`,
      width: "100%",
      height: "100%",
      aspectRatio: "16 / 9",
    }),
    []
  );

  const backgroundStyle2 = useMemo(
    () => ({
      backgroundImage: `url('/image1.webp')`,
      width: "100%",
      height: "100%",
      aspectRatio: "16 / 9",
    }),
    []
  );

useEffect(() => {
  const scrollingBg = document.querySelectorAll(".scrolling-bg");
  const animate = () => {
    scrollingBg.forEach(bg => {
      bg.style.backgroundPosition = `${parseFloat(bg.style.backgroundPosition || '0') - 0.01}% 0`;
    });
    requestAnimationFrame(animate);
  };
  animate();
}, []);


  return (
    <>

      {/* Mobile Top BG */}
      <div
        className="relative sm:hidden h-[31vh] bg-repeat-x bg-cover scrolling-bg bg-[#e5e8ea]"
        style={{ backgroundImage: `url(${mobileBottomBg.src})` }}
      ></div>

      <div className="relative lg:h-screen h-[45vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-fixed bg-no-repeat -z-1"
          style={backgroundStyle1}
          aria-hidden="true"
        ></div>

        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat -z-40 overflow-hidden"
          style={backgroundStyle2}
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 flex flex-col justify-center items-center md:mb-96 mb-10 lg:mb-0 mt-18 lg:mt-0 md:mt-0">
          <h1
            className="hero text-center font-black text-black md:mt-28 mt-0 text-2xl sm:text-sm md:text-lg lg:text-xl xl:text-5xl"
            style={{ lineHeight: "1.2" }}
          >
            TRANSFORM <span className="font-medium uppercase">Your</span> BRAND <br />
            <span className="font-medium uppercase"> WITH </span> CREATIVITY <br />
            <span className="font-extrabold"> MEDIA</span> <span className="font-medium">&</span>{" "}
            <span className="font-extrabold"> TECHNOLOGY</span>
          </h1>

          <p
            className="text-center lg:mt-7 md:mt-5 mt-4 md:text-xl text-xs lg:text-xl lg:px-0 px-7 "
            style={{ lineHeight: "1.4rem" }}
          >
            RBSH Studio delivers{" "}
            <span className="symbol">
              <span className="inline-block transition-all duration-500 ease-in-out">
                {words[currentWordIndex].symbols.left}
              </span>{" "}
              <span
                className={`font-bold inline-block transition-all duration-500 ease-in-out  ${
                  colors[currentWordIndex % colors.length]
                }`}
                style={{ minWidth: "10px", textAlign: "center" }}
              >
                {words[currentWordIndex].word}
              </span>{" "}
              <span className="inline-block transition-all duration-500 ease-in-out">
                {words[currentWordIndex].symbols.right}
              </span>
            </span>{" "}
            designs that <br />
             bring your vision to life and set your brand apart.
          </p>

          <Link
            href="/contact"
            className="inline-block border border-black px-8 py-2 sm:p-3 sm:px-12 md:px-16 lg:px-20 text-lg sm:text-xl lg:text-2xl md:mt-12 mt-6 rounded-full uppercase hover:text-white hover:bg-black transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Bottom BG */}
      <div
        className="relative sm:hidden h-[32vh] bg-repeat-x shadow-2xl bg-cover scrolling-bg bg-[#e5e8ea]"
        style={{ backgroundImage: `url(${mobileTopBg.src})` }}
      ></div>
    </>
  );
};

export default memo(Hero);
