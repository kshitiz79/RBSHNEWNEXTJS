"use client";
import React from "react";

const Section1 = () => {
  return (
    <section className="md:h-[90vh] h-screen bg-[#e5e8ea] flex flex-col md:flex-row border-t border-b border-black mt-22">
      {/* Left Section */}
      <div className="md:w-[70%] w-full flex flex-col relative order-1 md:order-1 px-12 md:px-0 md:py-0 py-20">
        {/* Main Article Image */}
        <div className="w-full pt-10">
          <img
            src="/blog.png"
            alt="Blog Image"
            className="w-full h-auto cover rounded md:px-6"
          />
        </div>

        {/* Paragraph (below both images on mobile) */}
        <div className="md:absolute md:bottom-4 md:left-4 md:ml-4  md:max-w-md order-3 md:order-2">
          <p className="text-black text-2xl md:text-[2.5rem] leading-tight md:leading-none">
            Maximalist graphic design is back: How to make chaos look cool
          </p>
        </div>
      </div>

      {/* Right Section Image (on mobile appears second) */}
      <div className="md:w-[40%] w-full border-t md:border-t-0 md:border-l border-black order-2 md:order-3">
        <img
          src="/ARTICLE.png"
          alt="Side Visual"
          className="w-full h-full object-cover p-4 md:p-4"
        />
      </div>
    </section>
  );
};

export default Section1;
