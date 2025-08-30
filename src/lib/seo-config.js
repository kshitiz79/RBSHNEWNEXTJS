export const seoConfig = {
  defaultTitle: "RBSH Studio - Top Web Development & Software Company in Noida Delhi",
  titleTemplate: "%s | RBSH Studio - Leading Tech Company Noida",
  defaultDescription: "Leading web development, software development, AI SaaS solutions & graphic design company in Noida Delhi. Expert in scalable software, VFX, media technology, mobile apps & digital marketing. Top-rated tech studio serving Delhi NCR.",
  siteUrl: "https://rbshstudio.com",
  siteName: "RBSH Studio",
  
  // Primary Keywords for different pages
  keywords: {
    home: "web development company noida, software development delhi, AI development company, SaaS solutions noida, graphic design company delhi, mobile app development, digital marketing agency noida, VFX company delhi, scalable software solutions, tech company noida, chatgpt integration services, gemini ai development, react development company, next.js development, node.js development, python development, cloud solutions provider, startup tech partner, enterprise software development, media technology company",
    
    services: "web development services noida, custom software development delhi, mobile app development company, AI SaaS solutions, graphic design services, VFX animation studio, digital marketing services, UI UX design company, e-commerce development, API development services, database design optimization, cybersecurity solutions, IT consulting services, cloud migration services, chatgpt integration, gemini ai implementation",
    
    about: "about rbsh studio, web development company noida, software development team delhi, tech company profile, creative media technology, innovation driven company, startup friendly tech partner, experienced developers team, noida based tech company, delhi software development",
    
    contact: "contact rbsh studio, web development company noida contact, software development delhi contact, tech company noida address, hire developers noida, get quote software development, contact tech company delhi, rbsh studio location greater noida",
    
    career: "jobs at rbsh studio, web developer jobs noida, software developer careers delhi, tech jobs noida, developer openings, UI UX designer jobs, digital marketing jobs, VFX artist jobs, python developer jobs, react developer jobs, node.js developer jobs"
  },
  
  // Location-based keywords
  locations: [
    "Noida", "Delhi", "Greater Noida", "Gurgaon", "Faridabad", "Ghaziabad", 
    "Delhi NCR", "Uttar Pradesh", "India", "Techzone IV", "Greater Noida West"
  ],
  
  // Service-based keywords
  services: [
    "Web Development", "Software Development", "AI Development", "SaaS Solutions",
    "Mobile App Development", "Graphic Design", "VFX & Animation", "Digital Marketing",
    "UI/UX Design", "E-commerce Development", "API Development", "Cloud Solutions",
    "Database Design", "Cybersecurity", "IT Consulting", "ChatGPT Integration",
    "Gemini AI Development", "React Development", "Next.js Development", 
    "Node.js Development", "Python Development", "DevOps Services"
  ],
  
  // Technology keywords
  technologies: [
    "React", "Next.js", "Node.js", "Python", "JavaScript", "TypeScript",
    "MongoDB", "PostgreSQL", "MySQL", "AWS", "Google Cloud", "Azure",
    "Docker", "Kubernetes", "ChatGPT", "Gemini AI", "OpenAI", "TensorFlow",
    "PyTorch", "Django", "Flask", "Express.js", "Tailwind CSS", "Bootstrap"
  ],
  
  // Social media
  social: {
    facebook: "https://www.facebook.com/rbshstudio",
    linkedin: "https://www.linkedin.com/company/rbshstudio/",
    instagram: "https://www.instagram.com/rbshstudio",
    youtube: "https://www.youtube.com/@rbshstudio",
    twitter: "@rbshstudio"
  },
  
  // Contact information
  contact: {
    phone: "+91-92043-09173",
    email: "info@rbshstudio.com",
    address: "T3-236, Golden-I, Techzone IV, Greater Noida West, UP - 201306",
    coordinates: {
      lat: "28.589836",
      lng: "77.4349397"
    }
  },
  
  // Business information
  business: {
    name: "RBSH Studio Private Limited",
    type: "Technology Company",
    founded: "2020",
    employees: "10-50",
    industry: "Information Technology",
    specialties: [
      "Web Development", "Software Development", "AI Solutions", "SaaS Development",
      "Mobile App Development", "Graphic Design", "VFX", "Digital Marketing"
    ]
  }
};

// Generate structured data for different page types
export const generateStructuredData = (pageType, customData = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.business.name,
    "alternateName": "RBSH Studio",
    "description": seoConfig.defaultDescription,
    "url": seoConfig.siteUrl,
    "logo": `${seoConfig.siteUrl}/logo.png`,
    "image": `${seoConfig.siteUrl}/og-image.jpg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.contact.phone,
      "contactType": "customer service",
      "email": seoConfig.contact.email,
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "T3-236, Golden-I, Techzone IV",
      "addressLocality": "Greater Noida West",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201306",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": seoConfig.contact.coordinates.lat,
      "longitude": seoConfig.contact.coordinates.lng
    },
    "sameAs": Object.values(seoConfig.social),
    "foundingDate": seoConfig.business.founded,
    "numberOfEmployees": seoConfig.business.employees,
    "industry": seoConfig.business.industry,
    "areaServed": seoConfig.locations,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": seoConfig.contact.coordinates.lat,
        "longitude": seoConfig.contact.coordinates.lng
      },
      "geoRadius": "100000"
    }
  };

  switch (pageType) {
    case 'service':
      return {
        ...baseData,
        "@type": ["Organization", "LocalBusiness"],
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "INR",
        "openingHours": "Mo-Fr 09:00-18:00",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development & Software Services",
          "itemListElement": seoConfig.services.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service
            }
          }))
        }
      };
    
    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": customData.title,
        "description": customData.description,
        "author": {
          "@type": "Organization",
          "name": seoConfig.business.name
        },
        "publisher": {
          "@type": "Organization",
          "name": seoConfig.business.name,
          "logo": {
            "@type": "ImageObject",
            "url": `${seoConfig.siteUrl}/logo.png`
          }
        },
        "datePublished": customData.publishDate,
        "dateModified": customData.modifiedDate || customData.publishDate,
        "mainEntityOfPage": customData.url
      };
    
    default:
      return baseData;
  }
};