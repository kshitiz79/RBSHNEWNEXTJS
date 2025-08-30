"use client";
import { useState } from "react";
import Image from "next/image";

export default function HoverAnimationImage() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-[#e5e8ea] w-full h-[102vh] "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Main Image */}
      <Image
        src="/aboutpage.webp"
        alt="Hover Image"
        fill
        className="object-cover relative"
      />

      {/* Canva Animation (video overlay) */}
      {hover && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/canva-animation.webm" type="video/webm" />
          <source src="/story.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
