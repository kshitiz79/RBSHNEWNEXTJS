"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const row1Clients = [
  { name: "Active Sine", logo: "/clients8.png", alt: "Active Sine logo" },
  { name: "Glucks Finance", logo: "/clients10.png", alt: "Glucks Finance logo" },
  { name: "Glucks Finance", logo: "/clients11.png", alt: "Glucks Finance logo" },
  { name: "Client 7", logo: "/clients13.png", alt: "Client 7 logo" },
  { name: "Client 8", logo: "/clients14.png", alt: "Client 8 logo" },
  { name: "Glucks Wealth", logo: "/clients12.png", alt: "Glucks Wealth logo" },
  { name: "Client 10", logo: "/clients16.png", alt: "Client 10 logo" },
];

const row2Clients = [
  { name: "Client 12", logo: "/clients18.png", alt: "Client 12 logo" },
  { name: "Client 11", logo: "/clients20.png", alt: "Client 11 logo" },
  { name: "Client 12", logo: "/clients22.png", alt: "Client 12 logo" },
  { name: "Client 12", logo: "/clients23.png", alt: "Client 12 logo" },
  { name: "Client 12", logo: "/clients25.png", alt: "Client 12 logo" },
  { name: "Client 12", logo: "/client29.png", alt: "Client 12 logo" },
  { name: "Client 12", logo: "/clients21.png", alt: "Client 12 logo" },
];

const ClientSection = () => {
  return (
    <section className="relative bg-[#e5e8ea] md:py-10 py-4 w-full text-center relative">
      {/* Row 1 - Scroll Left */}
      <div className="logo-slider">
        <Marquee gradient={false} speed={50}>
          {row1Clients.map((client, index) => (
            <div key={`row1-${index}`} className="mx-6 flex items-center">
              <img
                src={client.logo}
                alt={client.alt}
                className="mx-auto h-16 w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="logo-slider md:-mt-26 -mt-20">
        <Marquee gradient={false} speed={50} direction="right">
          {row2Clients.map((client, index) => (
            <div key={`row2-${index}`} className="mx-6 flex items-center">
              <img
                src={client.logo}
                alt={client.alt}
                className="py-10 w-36 md:w-40 lg:w-56 mx-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientSection;
