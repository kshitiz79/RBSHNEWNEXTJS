"use client";
import { useRef } from "react";
import { IoArrowDownOutline } from "react-icons/io5";

// Simplified Mobile Block
const MobileBlock = ({ title, text, image }) => (
  <div className="block md:hidden w-full px-4 py-8 border-b border-black">
    <h1 className="text-black text-2xl font-semibold mb-4">{title}</h1>
    <div className="w-full rounded overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <p className="text-black text-base">{text}</p>
  </div>
);

const ScrollAnimationMobile = () => {
  const blocks = [
    {
      title: "Web/App Development",
      image: "/service/1.png",
      text: "Your website is your brand's digital face . we make sure it impresses. Our modern, responsive sites blend design and performance to deliver seamless user experiences that engage and convert. Each build is a custom mix of creativity and tech, made to stand out.",
    },
    {
      title: "Social Media Marketing",
      image: "/service/5.png",
      text: "Maximize your brand's visibility with our expert social media strategies. We craft engaging content, manage platforms end-to-end, and run targeted ad campaigns that boost engagement and drive real growth. From Instagram Reels to LinkedIn marketing, we help your brand stay relevant and connect meaningfully with your audience.",
    },
    {
      title: "Packaging Design",
      image: "/service/10.png",
      text: "Packaging is your product's first impression. we make it count. Our designs balance visual appeal with functionality, crafted to stand out on shelves and connect with consumers at a glance.",
    },
    {
      title: "Brand Strategy",
      image: "/service/6.png",
      text: "Your brand is more than a logo . It's an experience. We build identities that reflect your values, connect with your audience, and stay consistent across every platform. From logos to full brand strategy, we craft presence that stands out.",
    },
    {
      title: "Video Production",
      image: "/service/7.png",
      text: "From storytelling to motion graphics, we bring your brand vision to life with compelling videos. Whether it's promos, social media, or corporate films, we craft high-impact visuals that engage and resonate.",
    },
    {
      title: "Leads & Performance Marketing",
      image: "/service/4.png",
      text: "Boost leads and conversions with our data-driven marketing. We create targeted campaigns, SEO strategies, and optimized funnels that turn visitors into loyal customers. From paid ads to organic growth, every plan is personalized, performance-tracked, and built for results.",
    },
    {
      title: "Creative Photography",
      image: "/service/8.png",
      text: "Our professional photography services capture your brand's essence with high-quality images tailored for websites, social media, and advertising campaigns. Whether it's product photography, corporate shoots, or lifestyle imagery, we help you tell a story that resonates.",
    },
    {
      title: "Software As a Service",
      image: "/service/9.png",
      text: "We design scalable SaaS solutions that solve real problems. From product strategy to launch, we turn ideas into intuitive, cloud-based platforms that drive growth and user engagement.",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="bg-[#e5e8ea] md:h-[90vh] h-[72vh] pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-[20rem] font-bold text-gray-900 mb-8">
            <img
              src="https://atolldigital.com/wp-content/uploads/2025/01/title-services.svg"
              alt="Services"
            />
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 md:mb-12 md:w-[60%] mx-auto md:mt-40">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-gray-900 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  <IoArrowDownOutline />
                </span>
              </div>
            </div>
            <p className="text-gray-900 text-lg md:text-2xl max-w-lg text-center md:text-left">
              Our services blend strategy, design, and technology to bring brands to life. From digital platforms to bold identities and growth-driven solutions—we help ideas scale with clarity and impact.
            </p>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-[#e5e8ea] border-b border-black">
        <section className="w-full bg-[#e5e8ea]">
          <div className="w-full relative">
            {blocks.map((block, idx) => (
              <MobileBlock
                key={idx}
                title={block.title}
                text={block.text}
                image={block.image}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollAnimationMobile;