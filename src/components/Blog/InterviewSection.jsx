// components/InterviewSection.js
export default function InterviewSection() {
  const dialogue = [
    {
      speaker: "DESIGN",
      text: ` Figma / Framer — Where Ideas Begin\nDesign is no longer a handoff it’s a conversation.\n\nFigma has become the industry standard for collaborative design. Teams co-create in real time, annotate flows, and export responsive assets directly for development. Designers and developers can now work side-by-side instead of in silos.\n\nFramer brings in motion. With interactive prototypes and live previewing, it allows teams to visualize animations, transitions, and user flows early in the process before a single line of code is written.\n\n`,
    },
    {
      speaker: "UI",
      text: ` Next.js + Tailwind CSS — Modern UI Development\nOnce the designs are locked, development kicks in with speed and flexibility at the core.\n\nNext.js is more than a React framework now. It offers:\n\n- Hybrid rendering (static + server-side)\n- API routes\n- React Server Components\n- Edge-ready performance\n- File-system routing with App Router\n\nPair it with Tailwind CSS, and you get scalable, utility-first styling without bloated CSS files. Developers can rapidly prototype and implement pixel-perfect layouts without ever leaving their components.\n\n`,
    },
    {
      speaker: "CMS",
      text: `  Sanity / Strapi — Headless CMS That Grows With You\nIn 2025, content is dynamic and the CMS must match.\n\nSanity and Strapi offer customizable APIs, real-time content updates, and flexible schema control, enabling marketers and editors to update content without touching code.\n\nThis decoupling of content from code means developers can build frontend logic once, and editors can push updates independently.\n\n`,
    },
    {
      speaker: "DEPLOY",
      text: ` Vercel — Effortless Deployment and Hosting\nGone are the days of FTP uploads and server configs. Vercel handles deployment the modern way:\n\n- Auto-deploy from GitHub\n- Edge caching\n- Instant rollback\n- Global CDN\n- Preview URLs for every pull request\n\nYou can deploy a high-performance production site in under 60 seconds.\n\n`,
    },
    {
      speaker: "ANALYTICS",
      text: ` PostHog / Hotjar — Understand Your Users\nWhat happens after launch matters just as much.\n\nPostHog and Hotjar provide behavior analytics, including:\n\n- Heatmaps\n- Funnel analysis\n- Session replays\n- Conversion tracking\n\nThis is how smart teams identify UX bottlenecks and improve user flow without guesswork.\n\n`,
    },
    {
      speaker: "MONITORING",
      text: ` Sentry / LogRocket — Monitor, Debug, Improve\nEven the best code breaks. The real question is: How fast can you fix it?\n\nSentry and LogRocket offer full-stack error monitoring. They capture:\n\n- Real-time exceptions\n- Stack traces\n- User actions leading to the error\n- Browser/environment info\n\nSome tools even replay the exact user session that triggered the bug.\n\n.`,
    },
  ];

  return (
    <section className="bg-[#e5e8ea] relative min-h-screen text-black font-sans px-6 border-b border-black md:text-justify md:-mt-20">
         <div className="">
        <div className="md:w-full h-auto 2xl:items-center flex justify-center items-center">
            <img src="/blog8.png" alt="" className="object-fill"/>
          </div>
   
        <p className="text-xl md:text-3xl md:font-light md:leading-none mt-10 ">
          <span className="text-blue-600">
            From Design to Deployment: A 2025 Developer Workflow Guide{" "} 
          </span>
          In 2025, development is less about isolated tools and more about
          creating a smooth, end-to-end workflow that supports rapid iteration,
          performance, and user-first design. Whether you're a solo dev, part of
          a product team, or scaling an agency, this modern stack keeps you
          agile and efficient.
        </p>

        <div className="grid grid-cols-5 md:gap-4 text-sm md:text-base max-w-2xl mx-auto  mt-10">
          {dialogue.map((entry, index) => (
            <div key={index} className="contents ">
              <div className="md:col-span-1  text-gray-700 font-medium">
                {entry.speaker}
              </div>
              <div className="md:col-span-4 col-span-5 mb-10">{entry.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
