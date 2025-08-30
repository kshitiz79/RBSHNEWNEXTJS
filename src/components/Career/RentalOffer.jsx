"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
const Card = ({ heading, paragraph, bgColor }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border border-gray-500 min-h-[220px] overflow-hidden group cursor-pointer hover:text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background overlay animation */}
      <div
        className={clsx(
          "absolute inset-x-0 bottom-0 h-full transition-all duration-500 z-0",
          hovered ? "translate-y-0" : "translate-y-full"
        )}
        style={{ backgroundColor: bgColor }}
      />

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Heading */}
        <h3
          className={clsx(
            "font-bold mb-4 transition-all duration-300",
            hovered ? "text-3xl" : "text-3xl"
          )}
        >
          {heading}
        </h3>

        {/* Paragraph + Icon */}
        <div className="flex items-end justify-between mt-auto text-justify">
          <p
            className={clsx(
              "transition-opacity duration-300 max-w-[90%]",
              hovered ? "opacity-100" : "opacity-0"
            )}
          >
            {paragraph}
          </p>
          <span className="text-4xl font-bold">{hovered ? "−" : "+"}</span>
        </div>
      </div>
    </div>
  );
};


export default function RentalOffer() {
  return (
    <section className="relative w-full h-auto bg-[#e5e8ea] z-10 md:pt-10">
      <section className="relative bg-[#e5e8ea] text-black  px-6 md:py-16 md:px-20">
        <div className="w-full ">
          <h1 className="text-[2.8rem] md:text-6xl md:font-bold font-semibold leading-none mb-6 max-w-4xl">
            Create Bold. Think Beyond. <br />
            Work Together
          </h1>

          <div className="mb-12">
            <Link href={"/openings"} className="inline-flex items-center gap-2 bg-[#ea4335] text-white px-5 py-2 text-lg ">
            <button className="flex items-center gap-2 bg-[#ea4335] text-white px-5 py-2 text-xl ">
             See all openings
             <IoArrowForwardCircleOutline className="text-2xl" />
            </button>
            </Link>
          </div>


          <div className=" max-w-4xl ml-auto">

          <div className="grid md:grid-cols-2 gap-8  ">
            <Card
              heading="RBSH Studio is where ideas turn into visuals, and visuals turn into impact."
              paragraph="We’re a creative house driven by a simple belief — bold storytelling can shape how people think, feel, and connect. From concept to execution, we work across mediums and industries to craft stories that matter."
              bgColor="#ea4335"
            />
            <Card
              heading="Here, you don’t just have a role — you have a voice."
              paragraph="We foster a work culture that’s collaborative yet independent, ambitious yet grounded. Whether you're just starting out or sharpening your tenth reel, this is a space to experiment, challenge yourself, and do work you're proud of."
              bgColor="#F0c21F"
            />
            <Card
              heading="We believe teams work best when they reflect the world around them."
              paragraph="At RBSH Studio, inclusion isn’t a buzzword — it’s the backbone of how we build. Our team brings together diverse experiences, backgrounds, and ways of thinking, and that’s what makes our work stronger."
              bgColor="#4384f2"
            />
            <Card
              heading="Sound like your kind of team?"
              paragraph="We’re always on the lookout for new talent, fresh perspectives, and passionate creators. Send your resume and portfolio to careers@rbshstudio.com or browse current openings on our LinkedIn page. Let’s build something unforgettable."
              bgColor="#2b9e44"
            />
          </div>
          </div>
        </div>
      </section>
    </section>
  );
}
