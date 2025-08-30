"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoHeight = useTransform(scrollYProgress, [0, 0.5], [300, 400]);
  const leftTranslateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "-100%"]
  );
  const rightWidth = useTransform(scrollYProgress, [0, 0.5], ["34%", "100%"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={sectionRef} className="relative w-full md:h-[250vh] h-screen">
      {/* This is the fixed animated section */}
      <section className="fixed md:top-12 left-0 w-full h-screen bg-[#e5e8ea] text-[#0A0D11] border-t border-[#0A0D11] mt-10">
        <div className="w-full h-full ">
          {/* Left Side */}
          <motion.div
            style={{ x: leftTranslateX }}
            className="absolute md:mt-4 -mt-80 left-0 h-full w-[60%] justify-center px-10 z-0 hidden md:flex"
          >
            {/* Main SVG Text Block (Already present) */}
            <div className="left-0 md:left-4 w-full flex justify-center md:justify-start">
              <svg
                className="mt-2 w-[280px] sm:w-[400px] md:w-[600px] lg:w-[870px] rotate-0 origin-top-left"
                width="870"
                height="261"
                viewBox="0 0 870 261"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="letter-path"
                  d="M64.44 260.32C28.8 260.32 0.719971 240.16 0.719971 204.16C0.719971 167.08 29.16 156.64 74.16 144.76C102.96 136.84 122.4 133.24 122.4 118.12C122.4 104.8 109.44 94.7198 84.96 94.7198C60.12 94.7198 44.28 105.16 42.12 126.04H6.11997C10.8 93.2798 38.16 68.7998 85.32 68.7998C131.76 68.7998 158.76 88.9598 158.76 125.68V256H124.56V223.24C118.08 243.4 99 260.32 64.44 260.32ZM74.52 234.4C105.84 234.4 123.84 207.4 123.84 176.8V142.6C119.52 153.04 106.56 158.8 85.32 164.92C56.88 172.84 38.16 181.12 38.16 203.08C38.16 223.24 53.64 234.4 74.52 234.4Z"
                  fill="#091423"
                />
                <path
                  className="letter-path"
                  d="M288.911 260.32C261.911 260.32 242.471 247.72 230.951 227.2V256H195.311V0.399414H230.951V101.92C242.471 81.3994 261.911 68.7994 288.911 68.7994C336.071 68.7994 366.671 109.12 366.671 164.56C366.671 220.36 336.071 260.32 288.911 260.32ZM279.191 232.24C310.871 232.24 328.511 204.16 328.511 164.56C328.511 124.96 310.871 96.8794 279.191 96.8794C247.871 96.8794 230.231 124.96 230.231 164.56C230.231 204.16 247.871 232.24 279.191 232.24Z"
                  fill="#091423"
                />
                <path
                  className="letter-path"
                  d="M474.834 260.32C420.114 260.32 384.474 219.64 384.474 164.2C384.474 109.48 420.114 68.7998 474.834 68.7998C529.194 68.7998 564.834 109.48 564.834 164.2C564.834 219.64 529.194 260.32 474.834 260.32ZM474.834 232.6C507.594 232.6 526.674 204.16 526.674 164.2C526.674 124.6 507.594 96.5198 474.834 96.5198C441.714 96.5198 422.634 124.6 422.634 164.2C422.634 204.16 441.714 232.6 474.834 232.6Z"
                  fill="#091423"
                />
                <path
                  className="letter-path"
                  d="M650.728 260.32C612.928 260.32 590.968 236.56 590.968 199.84V72.4004H626.608V192.64C626.608 216.76 637.768 230.8 663.688 230.8C688.528 230.8 708.688 210.64 708.688 178.24V72.4004H744.328V256H709.048V225.76C700.048 244.12 682.768 260.32 650.728 260.32Z"
                  fill="#091423"
                />
                <g className="letter-path">
                  <path
                    d="M869.279 99.0395H828.959V206.68C828.959 223.6 831.839 228.64 847.319 228.64H869.279V256H836.519C802.679 256 792.959 240.88 792.959 209.2V99.0395H764.879V72.3995H792.959V23.4395H828.959V72.3995H869.279V99.0395Z"
                    fill="#091423"
                  />
                  <path
                    className="triangle"
                    d="M839.335 99.0361V145.52L792.852 99.0362L839.335 99.0361Z"
                    fill="#E6E8EA"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
          <motion.div
            style={{ x: leftTranslateX }}
            className="absolute bottom-20 left-0 w-[60%] z-0 hidden md:block"
          >
            <div className="p-4 flex justify-center md:justify-start">
              <svg
                className="w-16 h-auto md:w-24"
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="65.9049"
                  height="11.0499"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.4478 20.1602)"
                  fill="#091423"
                />
                <rect
                  width="39.5625"
                  height="11.0499"
                  transform="matrix(0 1 1 0 19.9021 27.0142)"
                  fill="#091423"
                />
                <rect
                  width="39.8299"
                  height="11.0499"
                  transform="matrix(-1 0 0 1 67.554 63.3491)"
                  fill="#091423"
                />
                <path
                  d="M31.0078 55.6006L38.8213 63.4141L46.6348 55.6006L31.0078 55.6006Z"
                  fill="#E6E8EA"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right Side */}
          {/* Right Panel Content */}
          <motion.div
            style={{ width: rightWidth }}
            className="absolute top-0 right-0 h-full flex-col bg-[#e5e8ea] border-l border-[#0A0D11] z-10 hidden md:flex"
          >
            {/* Top border that fades */}
            <motion.div
              style={{ opacity: borderOpacity }}
              className="absolute top-0 left-0 w-full z-20 bg-[#0A0D11]"
            />

            {/* Expanding Video */}
            {/* Video Section - 40% of height */}
            <motion.div
              style={{ height: videoHeight }}
              className="md:h-[40vh] h-[60vh]  border-b border-[#0A0D11] "
            >
              <motion.video
                src="/ABOUTUS.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ height: "100%" }}
                className="w-full object-cover p-6 rounded-lg"
              />
            </motion.div>

            {/* Text Section - 60% of height, sticky within */}
            <div className="h-[60vh] px-6">
              <div className="h-full flex flex-col justify-between max-w-2xl ml-auto">
                <h2 className="text-[2.4rem] leading-none pt-8">
                  We Don’t Just Build We Create Impact
                </h2>
                <p className="text-lg pb-28 text-justify">
                  We collaborate with visionary brands to help them evolve and
                  succeed. By transforming brand culture into passionate
                  advocacy, we leverage digital strategies to create a loyal and
                  engaged customer community. We craft compelling narratives
                  that resonate deeply, turning brand stories into excellent
                  experiences.
                </p>
              </div>
            </div>
          </motion.div>


          {/* Mobile-only content */}
          <div className="md:hidden absolute -bottom-60 left-0 w-full h-screen bg-[#e5e8ea] z-20 flex flex-col">
            <div className="-ml-12">
              <motion.div
                className="md:mt-4 -mt-40 right-0 h-full w-[20%] items-centerx justify-center px-10 z-0  md:flex"
              >
                {/* Main SVG Text Block (Already present) */}
                <div className="">
                  <svg
                    className=" sm:w-[70px] sm:rotate-0 origin-top-left"
                    width="370"
                    height="80"
                    viewBox="0 0 870 261"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="letter-path"
                      d="M64.44 260.32C28.8 260.32 0.719971 240.16 0.719971 204.16C0.719971 167.08 29.16 156.64 74.16 144.76C102.96 136.84 122.4 133.24 122.4 118.12C122.4 104.8 109.44 94.7198 84.96 94.7198C60.12 94.7198 44.28 105.16 42.12 126.04H6.11997C10.8 93.2798 38.16 68.7998 85.32 68.7998C131.76 68.7998 158.76 88.9598 158.76 125.68V256H124.56V223.24C118.08 243.4 99 260.32 64.44 260.32ZM74.52 234.4C105.84 234.4 123.84 207.4 123.84 176.8V142.6C119.52 153.04 106.56 158.8 85.32 164.92C56.88 172.84 38.16 181.12 38.16 203.08C38.16 223.24 53.64 234.4 74.52 234.4Z"
                      fill="#091423"
                    />
                    <path
                      className="letter-path"
                      d="M288.911 260.32C261.911 260.32 242.471 247.72 230.951 227.2V256H195.311V0.399414H230.951V101.92C242.471 81.3994 261.911 68.7994 288.911 68.7994C336.071 68.7994 366.671 109.12 366.671 164.56C366.671 220.36 336.071 260.32 288.911 260.32ZM279.191 232.24C310.871 232.24 328.511 204.16 328.511 164.56C328.511 124.96 310.871 96.8794 279.191 96.8794C247.871 96.8794 230.231 124.96 230.231 164.56C230.231 204.16 247.871 232.24 279.191 232.24Z"
                      fill="#091423"
                    />
                    <path
                      className="letter-path"
                      d="M474.834 260.32C420.114 260.32 384.474 219.64 384.474 164.2C384.474 109.48 420.114 68.7998 474.834 68.7998C529.194 68.7998 564.834 109.48 564.834 164.2C564.834 219.64 529.194 260.32 474.834 260.32ZM474.834 232.6C507.594 232.6 526.674 204.16 526.674 164.2C526.674 124.6 507.594 96.5198 474.834 96.5198C441.714 96.5198 422.634 124.6 422.634 164.2C422.634 204.16 441.714 232.6 474.834 232.6Z"
                      fill="#091423"
                    />
                    <path
                      className="letter-path"
                      d="M650.728 260.32C612.928 260.32 590.968 236.56 590.968 199.84V72.4004H626.608V192.64C626.608 216.76 637.768 230.8 663.688 230.8C688.528 230.8 708.688 210.64 708.688 178.24V72.4004H744.328V256H709.048V225.76C700.048 244.12 682.768 260.32 650.728 260.32Z"
                      fill="#091423"
                    />
                    <g className="letter-path">
                      <path
                        d="M869.279 99.0395H828.959V206.68C828.959 223.6 831.839 228.64 847.319 228.64H869.279V256H836.519C802.679 256 792.959 240.88 792.959 209.2V99.0395H764.879V72.3995H792.959V23.4395H828.959V72.3995H869.279V99.0395Z"
                        fill="#091423"
                      />
                      <path
                        className="triangle"
                        d="M839.335 99.0361V145.52L792.852 99.0362L839.335 99.0361Z"
                        fill="#E6E8EA"
                      />
                    </g>
                  </svg>
                </div>
              </motion.div>
            </div>
            {/* Top Text - 20vh */}


            <div className=" border-t border-[#0A0D11] -mt-10">
              <video
                src="/ABOUTUS.mp4"
                autoPlay
                muted
                loop
                style={{ height: "100%" }}
                playsInline
                className="w-full h-full object-fill p-2 rounded-lg"
              />
            </div>

            <div className=" px-4 py-4 flex items-center justify-center border-t border-[#0A0D11]">
              <h2 className="text-lg font-semibold leading- text-center text-[#0A0D11]">
                We Don't Just Build We Create Impact
              </h2>
            </div>


            {/* Bottom Text - 40vh */}
            <div className="px-4 py-4 border-t border-[#0A0D11] flex items-center">

              <p className="text-sm text-[#0A0D11] leading-relaxed text-justify">
                We collaborate with visionary brands to help them evolve and succeed. By
                transforming brand culture into passionate advocacy, we leverage digital
                strategies to create a loyal and engaged customer community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;




