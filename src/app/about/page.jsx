'use client';
import { lazy, Suspense } from "react";
import useIsMobile from "../../hooks/UserIsMobile";

import AboutMobile from '@/components/About/AboutMobile';
import AboutSection from '@/components/About/AboutSection';
import FaqSection from '@/components/About/Faq';

import Text from '@/components/About/Text';
import ValuesSection from '@/components/About/ValueSection';
import WhyRBSH from '@/components/About/WhyRbsh';
import React from 'react';
import TextMobile from "@/components/About/TextMobile";

const about = () => {
    const isMobile = useIsMobile();
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {isMobile ? <AboutMobile /> : <AboutSection />}
            </Suspense>
     
            <ValuesSection />
                 <Suspense fallback={<div>Loading...</div>}>
                {isMobile ? <TextMobile /> : <Text />}
            </Suspense>
            <WhyRBSH />
            <FaqSection />
          
        </div>
    );
};

export default about;