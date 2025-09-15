"use client";


import AboutMobile from '@/components/About/AboutMobile';
import AboutSection from '@/components/About/AboutSection';
import FaqSection from '@/components/About/Faq';
import Text from '@/components/About/Text';
import ValuesSection from '@/components/About/ValueSection';
import WhyRBSH from '@/components/About/WhyRbsh';
import TextMobile from "@/components/About/TextMobile";

const About = () => {
  return (
    <>

        {/* Mobile only */}
          <div className="hidden md:block">
          <AboutSection />
        </div>
        <div className="block md:hidden">
          <AboutMobile />
        </div>
      <ValuesSection />
        {/* Mobile only */}
        <div className="block md:hidden">
          <TextMobile />
        </div>
        {/* Desktop only */}
        <div className="hidden md:block">
          <Text />
        </div>
      <WhyRBSH />
      <FaqSection />
    </>
  );
};

export default About;
