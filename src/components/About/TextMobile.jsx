"use client";

const Block = ({ title, text, isFirst }) => (
  <div
    className={`ml-auto px-0 py-8 relative text-left border-white ${
      isFirst ? "" : ""
    }`}
  >
    {/* Top border (only for first block) */}
    {isFirst && <div className="absolute top-0 right-0 h-[1px] bg-white w-full" />}

    {/* Bottom border */}
    <div className="absolute bottom-0 right-0 h-[1px] bg-white w-full" />

    <div className="flex flex-col text-left justify-between items-start px-6 ml-auto max-w-xl">
      <div className="text-left pt-4">
        <h1 className="text-white text-[2rem] md:text-[3rem]">{title}</h1>
      </div>

      <p className="text-white text-left max-w-xl pb-8 text-justify ml-auto pt-8">
        {text}
      </p>
    </div>
  </div>
);

const TextMobile = () => {
  const blocks = [
    {
      title: "What we create",
      text: "We craft engaging digital experiences from websites and apps to brand identities, motion graphics, and videos. Every creation blends creativity, tech, and strategy to help brands stand out and connect meaningfully.",
    },
    {
      title: "What we brainstorm",
      text: "We think beyond the brief. From brand storytelling and UI/UX concepts to digital campaigns and tech stacks, our brainstorming sessions explore what works, what resonates, and what’s next.",
    },
    {
      title: "What we deliver",
      text: "We deliver clean, scalable, and growth ready digital solutions fast-loading websites, standout branding, and high performing campaigns. Everything we build is designed for real world impact.",
    },
  ];

  return (
    <div className="relative w-full py-12 bg-[#0A0D11] md:hidden">
      <section className="w-full bg-[#0A0D11] border-[#0A0D11]">
        <div className="w-full relative">
          {blocks.map((block, idx) => (
            <Block
              key={idx}
              title={block.title}
              text={block.text}
              isFirst={idx === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TextMobile;
