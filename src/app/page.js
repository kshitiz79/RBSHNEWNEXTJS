import ClientSection from "@/components/Home/ClientSection";
import DefineUs from "@/components/Home/DefineUs";
import FloatingSection from "@/components/Home/FloatingSection";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import HorizontalScrollCard from "@/components/Home/HorizontalScrollingCard";
import Tablet from "@/components/Home/Tablet";
import Technology from "@/components/Home/Technology";
import VideoSection from "@/components/Home/VideoSection";

export const metadata = {
  title: "RBSH Studio - Premier Web Development & AI Solutions Company Noida Delhi",
  description: "Transform your business with cutting-edge web development, AI SaaS solutions, and creative media services. Leading tech company in Noida Delhi specializing in scalable software, VFX, and digital innovation. Expert in ChatGPT, Gemini AI integration.",
  keywords: "web development company noida, software development delhi, AI development company, SaaS solutions noida, graphic design company delhi, mobile app development, digital marketing agency noida, VFX company delhi, scalable software solutions, tech company noida, chatgpt integration, gemini ai development, react development, next.js development, node.js development, python development, cloud solutions, startup tech partner",
  openGraph: {
    title: "RBSH Studio - Premier Web Development & AI Solutions Company Noida Delhi",
    description: "Transform your business with cutting-edge web development, AI SaaS solutions, and creative media services. Leading tech company in Noida Delhi.",
    images: ['/og-home.jpg'],
  },
};

export default function Home() {
  return (
    <>
      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h1>RBSH Studio - Leading Web Development & Software Company in Noida Delhi</h1>
        <p>
          RBSH Studio is a premier web development, software development, AI SaaS solutions, and graphic design company 
          based in Noida Delhi. We specialize in creating scalable software solutions, VFX, media technology, mobile apps, 
          and comprehensive digital marketing services. Our expert team delivers cutting-edge solutions using the latest 
          technologies including React, Next.js, Node.js, Python, ChatGPT integration, and Gemini AI development.
        </p>
        <p>
          Services: Web Development Noida, Software Development Delhi, AI & SaaS Solutions, Mobile App Development, 
          Graphic Design, VFX & Animation, Digital Marketing, UI/UX Design, E-commerce Development, Cloud Solutions, 
          API Development, Database Design, Cybersecurity Solutions, IT Consulting Services.
        </p>
        <p>
          Serving: Noida, Delhi, Gurgaon, Faridabad, Ghaziabad, and clients across India with innovative technology solutions.
        </p>
      </div>
      
      <Hero/>
      <DefineUs/>
      <VideoSection/>
      <Tablet/>
      <FloatingSection/>
      <Gallery/>
      <HorizontalScrollCard/>
      <ClientSection/>
      <Technology/>
    </>
  );
}
