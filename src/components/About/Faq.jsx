
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What makes your digital marketing services unique?",
    answer:
      "We tailor our strategies to each client’s specific needs and goals, ensuring your brand stands out in a crowded market.",
  },
  {
    id: 2,
    question: "How can branding & design services help my business grow?",
    answer:
      "Branding and design services help your business establish a strong identity and connect with your target audience effectively.",
  },
  {
    id: 3,
    question: "What types of videos do you specialize in for video editing services?",
    answer:
      "We specialize in promotional, explainer, and social media videos tailored to your brand’s needs.",
  },
  {
    id: 4,
    question: "Why is a social media strategy important for my business?",
    answer:
      "A social media strategy helps you reach your target audience, engage with them, and grow your business presence online.",
  },
  {
    id: 5,
    question: "How do your lead generation & SEO services work?",
    answer:
      "Our services focus on driving traffic and converting visitors into leads through targeted SEO and lead generation tactics.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-[#e5e8ea] px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-42">
        {/* <h2 className="text-5xl font-black uppercase text-black  drop-shadow-[1px_1px_0_black] text-center">FAQs</h2> */}

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b py-10 group cursor-pointer text-black">
              <button
                className="w-full flex justify-between items-start text-left transition-all"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex gap-6 transform transition-transform duration-300 group-hover:translate-x-4">
                  <span className="text-gray-300 text-4xl font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-black md:text-4xl text-xl font-light">
                    {faq.question}
                  </span>
                </div>
                <div className="md:w-12 w-6 md:h-12 h-6 p-2 flex items-center justify-center border border-black rounded-full md:text-3xl text-lg text-black font-light transition-transform duration-300 group-hover:scale-110">
                  {openId === faq.id ? "−" : "+"}
                </div>

              </button>


              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    className="pl-[4.5rem] mt-4 text-gray-600 md:text-2xl text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
