




"use client";
import { useEffect } from "react";
import HoverEffect from "hover-effect";
import HoverAnimationImage from "@/components/Global/Chromaticwave";

import displacement from "../../../public/whyrbsh.webp"; // stored in /public

export default function WhyRBSH() {
  useEffect(() => {
    new HoverEffect({
      parent: document.getElementById("image_story"),
      intensity: 0.4,
      speedIn: 1.0,
      speedOut: 1.0,
      easing: "easeInOut",
      image1: "/whyrbsh.webp",
      image2: "/whyrbsh.webp",
      displacementImage: displacement,
      hover: true,
    });
  }, []);

  return (
    <section className="relative bg-[#0A0D11] md:h-[120vh] text-white px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[600px]">
        {/* Left content */}
        <div className="w-full md:w-[70%] flex flex-col justify-center space-y-8 pr-6 pb-12">
          <div>
            <h1 className="text-2xl font-light md:text-[3rem] md:leading-none ">
              We partner with ambitious brands to shape culture, ignite
              advocacy, and drive success. Through strategic storytelling and
              digital innovation, we create connections and deliver brand
              experiences that truly resonate.
            </h1>
          </div>
          <div className="leading-relaxed md:w-[56%] self-end md:py-20 py-2 ">
            <button className="mt-4 px-6 py-2 bg-white text-black text-2xl font-light rounded-md flex items-center hover:bg-gray-200 transition">
              OUR VISION
            </button>
            <p className="text-gray-300 text-[1.11rem] md:text-justify mt-8">
              We collaborate with visionary brands to help them evolve and
              succeed. By transforming brand culture into passionate advocacy,
              we leverage digital strategies to create a loyal and engaged
              customer community. We craft compelling narratives that resonate
              deeply, turning brand stories into excellent experiences. Our
              innovative approaches bridge the gap between technology and
              emotion, driving meaningful engagement. Together, we redefine
              possibilities, building a future where your brand not only
              thrives but leads the way.
            </p>
          </div>
        </div>

        {/* Right image with shader distortion */}
        <div className="w-full md:w-[40%] relative md:h-full h-full rounded-xl overflow-hidden mt-0 md:mt-4 mb-12 md:ml-2">
          <HoverAnimationImage />
          {/* <img src="/aboutpage.webp" alt="" /> */}
        </div>
      </div>
    </section>
  );
}
