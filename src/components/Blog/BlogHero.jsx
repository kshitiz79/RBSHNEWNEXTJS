
import AnimatedIntro from "../../components/Blog/AnimatedInrto";

import Section1 from "../../components/Blog/Section1";

const BlogHero = () => {
  return (
    <>
      <Section1 />
      <div>
        <section className="bg-[#e5e8ea] py-10 px-4 md:pt-40 pt-20">
          <div className=" max-w-4xl font-extrabold ">
            <h1 id="design"  className="md:text-[4rem] text-[2.5rem] leading-none ml-4">
              {" "}
              <span className="text-green-600">The 2025 Design Shift: </span>{" "} <br />
              What’s Defining the Future of Graphic Design?
            </h1>
          </div>
        </section>
      </div>
      <AnimatedIntro />

      <div>
        <section className="bg-[#e2e5ea] py-10 mx-auto  px-8 md:text-justify">
          <section>
          <div className="max-w-4xl mx-auto text-lg">
            <p className="font-semibold text-2xl py-4 md:text-justify">
              {" "}
              <span className="text-green-600">
                The world of graphic design is evolving faster than ever and
                in 2025,{" "}
              </span>
              we’re seeing a powerful collision of minimalism, AI-generated
              creativity, and emotionally intelligent branding.
            </p>
            <br />
            <p>Here’s what’s shaping the future of design right now:</p>
            <br />
            <p>
              AI Meets Imagination AI tools like Midjourney, Adobe Firefly, and
              DALL·E have redefined what’s possible not as replacements, but
              as collaborators. Designers who embrace these tools are able to
              ideate faster, iterate better, and push creative boundaries. The
              key? Keeping your human intuition at the center.
            </p>
            <br />
            <p>
              Bold Type. Brave Color. Big Impact. Forget safe palettes and
              subtle fonts 2025 is about grabbing attention. Think
              super saturated neons, oversized fonts, and unapologetic visuals.
              Brands are going louder and bolder, especially in digital spaces
              where scroll stopping matters most.
            </p>
            <br />

            <p>
              Retro-Tech & Nostalgia Designers are bringing back pixel art,
              skeuomorphism, and 90s grunge in a polished way giving digital
              experiences a touch of analog warmth. It’s not just aesthetic
              it’s storytelling through memory.
            </p>

            <p>
              {" "}
              Motion as the New Static From microinteractions to scroll-based
              animations, static design is fading. Websites, social posts, and
              even logos are becoming kinetic. If it doesn’t move, it might not
              stand out.
            </p>
            <br />

            <p>
              Purpose-Driven Aesthetics Whether it’s eco-conscious packaging or
              inclusive visual language, brands are finally designing with
              intention  not just for clicks. Users care why something looks
              the way it does, and designers are responding with meaning, not
              just style.
            </p>
          </div>
          <div className="max-w-7xl mx-auto md:pt-20 pt-10 text-xl">
            <img
              src="/blog1.png"
              alt=""
              className="md:rounded-xl"
            />

           
          </div>
          </section>
          <section id="marketing">
          <div className="border-t border-white mt-12 ">
            <div className="max-w-4xl mx-auto items-center text-center">
             <h1  className=" md:text-[3.5rem] text-[2.5rem] leading-none md:pt-16 pt-10 font-semibold">
            <span className="text-green-600"> The Future of Digital Marketing:</span>  7 Trends Shaping 2025
            </h1>
            <p className="py-10 md:text-2xl text-xl pb-20 ">
              In the fast-moving world of digital marketing, staying ahead isn’t
              optional it’s essential. As we settle into 2025, brands face a
              more fragmented, more competitive, and more opportunity-rich
              landscape than ever before.
            </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-4 gap-4 md:rounded-md md:pt-0 -mt-10">
            <div className="md:w-[50%] w-full">
              <img
                src="/blog3.png"
                alt=""
                className="md:rounded-md"
              />
            </div>
            <div className="md:w-[50%] w-full">
              <img
                src="/blog4.png"
                alt=""
                className="rounded-md"
              />
            </div>
          </div>

          <div className=" md:px-6 md:py-20 py-10 text-[#0a0f1c] md:max-w-4xl max-w-7xl mx-auto space-y-4 text-xl">
            {/* 1. Micro-Communities */}
            <div>
              <h2 className="font-bold mb-4 ">The Age of Micro-Communities</h2>
              <p className="">
                Large audiences are splintering into passionate
                micro-communities whether it’s niche Reddit threads, Telegram
                groups, or Discord servers. Instead of broadcasting generic
                content, successful brands are embedding themselves in these
                spaces, speaking directly to highly engaged segments.
              </p>
            </div>

            {/* 2. AI-Generated Content */}
            <div>
              <h2 className="font-bold mb-4">
                AI-Generated Content with a Human Touch
              </h2>
              <p className="">
                <span className="text-blue-600">
                Generative AI tools </span>can now produce text, video, and images in
                seconds. But raw AI content often feels soulless. Leading brands
                are combining AI efficiency with skilled human editing to
                maintain authenticity and quality.
              </p>
            </div>

            {/* 3. Interactive Content */}
            <div>
              <h2 className=" font-bold mb-4">
                Interactive Content Wins Attention
              </h2>
              <p className="">
                Static posts are easy to ignore.   <span className="text-blue-600">Interactive
                experiences quizzes, polls, calculators, AR filters invite  </span>
                participation and keep audiences engaged longer.
              </p>
            </div>

            {/* 4. Voice & Conversational Commerce */}
            <div>
              <h2 className="font-bold mb-4">
                Voice and Conversational Commerce
              </h2>
              <p className="">
                Voice search adoption is surging, and chatbots are rapidly
                evolving into intelligent virtual sales reps. Customers expect
                immediate, natural-feeling support.
              </p>
            </div>

            {/* 5. Sustainability & Purpose */}
            <div>
              <h2 className=" font-bold mb-4">
                Sustainability and Purpose-Driven Storytelling
              </h2>
              <p className="">
                Consumers want to buy from brands that align with their values.
                Clear, credible communication about <span className="text-blue-600"> sustainability and social
                impact</span> is no longer a nice-to-have it's a competitive
                differentiator.
              </p>
            </div>
          </div>
          </section>
         
          <section id="frontend" className="md:py-10" >
             <div className="border-t border-white"></div>
          <div className="max-w-4xl mx-auto md:py-20 py-10">
            <h1  className="md:text-[4rem] text-[2.5rem] leading-none text-center  font-bold">
             <span className="text-blue-600 "> The Future of Frontend: </span> <br />Why Developers Are Choosing Next.js in
              2025
            </h1>
            <p className="py-4 md:mt-4 md:text-xl text-lg text-center md:px-12 md:mb-10 ">
              From startups to enterprises, everyone’s betting on Next.js and
              for good reason. In 2025, it’s not just a React framework. It’s
              the backbone of some of the most high-performance websites and
              apps on the internet.
            </p>
            <img
              src="/blog5.png"
              alt=""
              className="w-full mt-4"
            />
          </div>

          <div className="md:px-6 md:py-2 md:pb-20 text-[#0a0f1c] max-w-4xl mx-auto space-y-4 text-xl">
            {/* 1. Micro-Communities */}
            <div>
              <h2 className="font-bold mb-4">App Router Revolution</h2>
              <p className="">
              The new file-based routing system in Next.js 14+ makes scalable routing effortless.
              </p>
            </div>

            {/* 2. AI-Generated Content */}
            <div>
              <h2 className="font-bold mb-4">
              Built-in SEO & Server-Side Rendering
              </h2>
              <p className="">
              Perfect for performance and discoverability.
              </p>
            </div>

            {/* 3. Interactive Content */}
            <div>
              <h2 className=" font-bold mb-4">
              Vercel Integration
              </h2>
              <p className="">
                1-click deploys, edge functions, and analytics make life easier.
              </p>
            </div>

            {/* 4. Voice & Conversational Commerce */}
            <div>
              <h2 className="font-bold mb-4">
              Support for AI, Streaming, and Edge
              </h2>
              <p className="">
              Next.js now supports React Server Components, AI APIs, and edge caching natively.
              </p>
            </div>
            

            {/* 5. Sustainability & Purpose */}
       
          </div>
        
          </section>
        </section>
      </div>
    </>
  );
};

export default BlogHero;
