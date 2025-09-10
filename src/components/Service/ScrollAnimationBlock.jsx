"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoArrowDownOutline } from "react-icons/io5";

// Single Service Block
const Block = ({
  title,
  text,
  image,
  height,
  widthTransform,
  bwidthTransform,
  paragraphOpacity,
  paragraphY,
  imageWidth,
}) => {
  return (
    <>
      <motion.div
        className="absolute w-full top-0 right-0 h-[1px] bg-black origin-right "/>

    <motion.div
      style={{ height, width: widthTransform }}
      className="ml-auto px-8 md:py-8 relative"
    >
      {/* Border appears first */}
      <motion.div
        className="absolute top-0 right-0 h-[1px] bg-black origin-right"
        style={{ width: bwidthTransform }}
      />

      {/* Content appears after */}
      <motion.div
        className="absolute inset-0 flex md:flex-row flex-col px-4 gap-40 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Title */}
        <div className="w-[35%] text-left">
          <h1 className="text-black text-[32px] md:text-[2.77vw] leading-none font-semibold pt-4 max-w-5xl px-4">
            {title}
          </h1>
        </div>

        {/* Image */}
        <motion.div
          className="w-[35%] md:h-[240px] h-[100px] rounded-md flex items-center justify-center md:pt-4 flex-shrink-0"
          style={{ width: imageWidth }}
        >
          <img
            src={image}
            alt={title}
            className="md:w-[120vh] w-[100px] h-full object-cover rounded-md"
          />
        </motion.div>

        {/* Paragraph */}
        <motion.div
          className="w-[50%] md:pt-4 overflow-hidden"
          style={{
            opacity: paragraphOpacity,
            y: paragraphY,
          }}
        >
          <p className="text-justify text-black text-lg  mr-10">{text}</p>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );

};

// Main Component
const ScrollAnimationBlock = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const blockCount = 10;

  // Width of each block container
  const widthTransforms = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      ["30%", "100%"],
      { clamp: true }
    )
  );

  // ✅ Border animates first
  const bwidthTransforms = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [(i + 0.1) / blockCount, (i + 0.3) / blockCount],
      ["100%", "120%"],
      { clamp: true }
    )
  );

  // Content appears after border
  const paragraphOpacitys = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [(i + 0.3) / blockCount, (i + 0.5) / blockCount],
      [0, 1],
      { clamp: true }
    )
  );

  const paragraphYs = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [(i + 0.3) / blockCount, (i + 0.5) / blockCount],
      [20, 0],
      { clamp: true }
    )
  );

  // Constant height
  const heights = Array.from({ length: blockCount }).map(() =>
    useTransform(scrollYProgress, [0, 1], [272, 282])
  );

  // Image width animation
  const imageWidth = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      [155, 450],
      { clamp: true }
    )
  );

  // Content blocks
  const blocks = [
    {
      title: "Web/App Development",
      image: "/service/1.png",
      text: "Your website is your brand’s digital face. We make sure it impresses. Our modern, responsive sites blend design and performance to deliver seamless user experiences that engage and convert. Each build is a custom mix of creativity and tech, made to stand out.",
    },
    {
      title: "Social Media Marketing",
      image: "/service/5.png",
      text: "Maximize your brand’s visibility with our expert social media strategies. We craft engaging content, manage platforms end-to-end, and run targeted ad campaigns that boost engagement and drive real growth. From Instagram Reels to LinkedIn marketing.",
    },
    {
      title: "Packaging Design",
      image: "/service/10.png",
      text: "Packaging is your product’s first impression we make it count. Our designs balance visual appeal with functionality, crafted to stand out on shelves and connect with consumers at a glance.",
    },
    {
      title: "Brand Strategy",
      image: "/service/6.png",
      text: "Your brand is more than a logo. It’s an experience. We build identities that reflect your values, connect with your audience, and stay consistent across every platform. From logos to full brand strategy, we craft presence that stands out.",
    },
    {
      title: "Video Production",
      image: "/service/7.png",
      text: "From storytelling to motion graphics, we bring your brand vision to life with compelling videos. Whether it’s promos, social media, or corporate films, we craft high-impact visuals that engage and resonate",
    },
    {
      title: "Leads & Performance Marketing",
      image: "/service/4.png",
      text: "Boost leads and conversions with our data-driven marketing. We create targeted campaigns, SEO strategies, and optimized funnels that turn visitors into loyal customers. From paid ads to organic growth, every plan is personalized, performance-tracked, and built for results.",
    },
    {
      title: "Creative Photography",
      image: "/service/8.png",
      text: "Our professional photography services capture your brand’s essence with high-quality images tailored for websites, social media, and advertising campaigns. Whether it’s product photography, corporate shoots, or lifestyle imagery, we help you tell a story that resonates.",
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
      <section className="bg-[#e5e8ea] md:h-[90vh] h-[50vh] pt-32 ">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-[20rem] font-bold text-gray-900 mb-40">
            <img
              src="https://atolldigital.com/wp-content/uploads/2025/01/title-services.svg"
              alt="Services"
            />
          </h1>

          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 md:mb-62 md:w-[60%] mx-auto">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-gray-900 flex items-center justify-center ">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 ">
                  <IoArrowDownOutline />
                </span>
              </div>
            </div>
            <p className="text-gray-900 text-lg md:text-2xl max-w-lg ">
              Our services blend strategy, design, and technology to bring brands to life. From digital platforms to bold identities and growth driven solutions we help ideas scale with clarity and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll-Aware Animated Blocks */}
      <div ref={sectionRef} className="relative w-full md:h-[262vh] 2xl:h-[230vh]  h-[370vh] bg-[#e5e8ea] border-b border-black ">
        <section className="w-full h-screen bg-[#e5e8ea]">
          <div className="w-full h-full relative">
            {blocks.map((block, idx) => (
              <Block
                key={idx}
                title={block.title}
                text={block.text}
                image={block.image}
                height={heights[idx]}
                widthTransform={widthTransforms[idx]}
                bwidthTransform={bwidthTransforms[idx]}
                paragraphOpacity={paragraphOpacitys[idx]}
                paragraphY={paragraphYs[idx]}
                imageWidth={imageWidth[idx]}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollAnimationBlock;

