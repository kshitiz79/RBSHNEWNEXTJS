"use client";

import { lazy, Suspense } from "react";
import useIsMobile from "../../hooks/UserIsMobile";

const ScrollAnimationBlock = lazy(() => import("../../components/Service/ScrollAnimationBlock"));
const MobileServices = lazy(() => import("../../components/Service/ScrollAnimationMobile"));


const Services = () => {
  const isMobile = useIsMobile();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <MobileServices /> : <ScrollAnimationBlock />}
    </Suspense>
  );
};

export default Services;
