"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";
import arrowImg from "../../../public/arrow.jpeg";

const Footer = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const initialTextArray = [
    "Partner With Us For Innovative Strategies And Standout Campaigns",
  ];

  const repeatFactor = Math.ceil(1000 / initialTextArray.length);
  const textArray = Array.from({ length: repeatFactor }, () => initialTextArray).flat();
  const totalItems = textArray.length;

  useEffect(() => {
    const element = textRef.current;
    gsap.to(element, {
      xPercent: -100,
      repeat: -1,
      duration: totalItems * 0.03,
      ease: "linear",
    });

    return () => {
      gsap.killTweensOf(element);
    };
  }, [totalItems]);

  const words = [
    { text: "project", symbol: "→" },
    { text: "success", symbol: "→" },
    { text: "idea", symbol: "→" },
  ];

  const symbols = ["#", "@", "!", "&", "%", "$", "{", "*", "}"];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(words[0].text);
  const [scrambling, setScrambling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambling(true);

      let scrambleCount = 0;
      const scrambleInterval = setInterval(() => {
        setDisplayedText(() =>
          Array(words[index].text.length)
            .fill(0)
            .map(() => symbols[Math.floor(Math.random() * symbols.length)])
            .join("")
        );

        scrambleCount++;
        if (scrambleCount > 5) {
          clearInterval(scrambleInterval);
          const nextIndex = (index + 1) % words.length;
          setIndex(nextIndex);
          setDisplayedText(words[nextIndex].text);
          setScrambling(false);
        }
      }, 60);
    }, 1500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <section className="fixed bottom-0 left-0 relative bg-[#e5e8ea] text-[#0a0f1c] px-4 md:pt-24 md:pb-32 py-4 md:py-0 z-20">
        <div className="px-4 flex md:flex-row flex-col">
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6.2rem] font-semibold leading-none">
            <span className="block tracking-tight">let’s discuss your</span>
            <span className="block">
              <span className="mr-2 sm:mr-4">next</span>
              <span className="inline-block align-middle translate-y-[-2px] text-xl sm:text-3xl md:text-6xl md:px-20">
                <Image src={arrowImg} alt="arrow" className="w-8 sm:w-12 md:w-20 inline" />
              </span>
              <span className="ml-1 sm:ml-2">{displayedText}</span>
            </span>
          </h1>
          <div className="max-w-[60rem]  md:py-0 px-0 md:px-10 text-xl justify-center mx-auto mr-2 md:pt-0 pt-10">
            <div className="sm:pt-10 px-2 sm:px-0 text-xl ">
              <p className="md:text-3xl">Big ambitions?</p>
              <p className="md:text-3xl">We match the energy.</p>
              <br />
              <Link href="/contact">
                <button className="bg-black text-white rounded-md p-3 px-4 hover:bg-gray-500 md:text-xl font-semibold md:mt-4">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div ref={containerRef} className="overflow-hidden relative w-full py-6 sm:py-8 md:py-10 lg:py-12 bg-black z-10">
        <div ref={textRef} className="whitespace-nowrap flex text-white font-bold">
          {textArray.map((text, index) => (
            <span key={index} className="uppercase px-2 sm:px-4 md:px-6 lg:px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {text}
            </span>
          ))}
        </div>

        <div className="absolute top-0 left-0 h-full w-1/6 sm:w-1/8 md:w-1/6 lg:w-6/12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-1/6 sm:w-1/8 md:w-1/6 lg:w-6/12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>

      <footer className="fixed bottom-0 left-0 h-auto z-20 bg-black text-white py-10 lg:py-10 relative">
        <div className="container max-w-full px-4 md:px-0 lg:px-8 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/logo2.png"
                alt="RBSH Studio Logo"
                width={240}
                height={80}
                className="mb-4 -ml-16 w-[27rem]"
              />
              <div className="flex space-x-7 md:space-x-2 mt-4 mr-8 text-xl">
                <a href="https://www.facebook.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" className="text-gray-400 hover:text-white border rounded-full p-3">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/company/rbshstudio/" target="_blank" rel="noopener noreferrer" title="Connect with us on LinkedIn" className="text-gray-400 hover:text-white border rounded-full p-3">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram" className="text-gray-400 hover:text-white border rounded-full p-3">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@rbshstudio" target="_blank" rel="noopener noreferrer" title="Subscribe to our YouTube channel" className="text-gray-400 hover:text-white border rounded-full p-3">
                  <FaYoutube />
                </a>
              </div>
            </div>


            <div>
              <h5 className="text-lg font-semibold mb-4">Find It Fast</h5>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
                <li><Link href="/service" className="hover:text-yellow-500">Services</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
                <li><Link href="/blog" className="hover:text-yellow-500">Blogs</Link></li>
                <li><Link href="/about" className="hover:text-yellow-500">FAQ</Link></li>
                <li><Link href="/career" className="hover:text-yellow-500">Career</Link></li>
              </ul>
            </div>

                <div>
              <h5 className="text-lg font-semibold mb-4">Consumer Policy</h5>
              <ul className="space-y-2">
                <li><Link href="/termsofuse" className="hover:text-yellow-500">Privacy Policy</Link></li>
                <li><Link href="/cancellation" className="hover:text-yellow-500">Cancelation Policy</Link></li>
                <li><Link href="/terms" className="hover:text-yellow-500">Terms of use</Link></li>
                <li><Link href="/security" className="hover:text-yellow-500">security</Link></li>
                <li><Link href="/refundPolicy" className="hover:text-yellow-500">Refund Policy</Link></li>
                <li><Link href="/greivance" className="hover:text-yellow-500">Grievance Redressal</Link></li>
              </ul>
            </div>

            <div className="md:max-w-full max-w-xs mx-auto items-center md:items-start">
              <a href="https://www.google.com/maps/place/RBSH+Studio+Private+Limited/@28.5898407,77.4323648,17z/data=!3m1!4b1!4m6!3m5!1s0x390cefad06d601e1:0x303b7a964c90ee8!8m2!3d28.589836!4d77.4349397!16s%2Fg%2F11x220jxdb?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:text-yellow-500">
                T3-236, Golden-I, Techzone IV, Greater Noida West, UP - 201306
              </a>
              <a href="mailto:info@rbshstudio.com" className="block hover:text-yellow-500 mt-5">
                info@rbshstudio.com
              </a>
              <a href="tel:+919204309173" className="block hover:text-yellow-500 mt-5">
                +91 92043 09173
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2025 Copyright rbshstudio. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
