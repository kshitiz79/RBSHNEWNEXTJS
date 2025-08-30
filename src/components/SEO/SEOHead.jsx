"use client";

import Head from 'next/head';

const SEOHead = ({ 
  title = "RBSH Studio - Top Web Development & Software Company in Noida Delhi",
  description = "Leading web development, software development, AI SaaS solutions & graphic design company in Noida Delhi. Expert in scalable software, VFX, media technology, mobile apps & digital marketing.",
  keywords = "web development company noida, software development delhi, AI development company, SaaS solutions noida, graphic design company delhi, mobile app development, digital marketing agency noida, VFX company delhi, scalable software solutions, tech company noida",
  canonical = "",
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData = null
}) => {
  const fullTitle = title.includes('RBSH Studio') ? title : `${title} | RBSH Studio`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="RBSH Studio" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="RBSH Studio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@rbshstudio" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida, Delhi NCR" />
      <meta name="geo.position" content="28.589836;77.4349397" />
      <meta name="ICBM" content="28.589836, 77.4349397" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="T3-236, Golden-I, Techzone IV" />
      <meta name="business:contact_data:locality" content="Greater Noida West" />
      <meta name="business:contact_data:region" content="Uttar Pradesh" />
      <meta name="business:contact_data:postal_code" content="201306" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-92043-09173" />
      <meta name="business:contact_data:email" content="info@rbshstudio.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEOHead;