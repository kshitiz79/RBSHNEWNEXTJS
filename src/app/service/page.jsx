"use client";

import { lazy } from "react";

const ScrollAnimationBlock = lazy(() => import("../../components/Service/ScrollAnimationBlock"));
const MobileServices = lazy(() => import("../../components/Service/ScrollAnimationMobile"));

const Services = () => {



  return (
    <>
    <div className="block md:hidden">
      <MobileServices /> </div>
      <div className="hidden md:block">
      <ScrollAnimationBlock />
      </div>
   
    </>
  );
};

export default Services;
