import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import CustomCursor from "@/components/Global/CustomCusor";

export const metadata = {
  title: {
    default: "RBSH Studio -  Creative Design & Software Company Agency | AI SaaS Solutions",
    template: "RBSH Studio - Leading Tech Company Noida"
  },
  description: "Leading web development, software development, AI SaaS solutions & graphic design company in Noida Delhi. Expert in scalable software, VFX, media technology, mobile apps & digital marketing. Top-rated tech studio serving Delhi NCR.",
  keywords: [
    "web development company noida",
    "software development delhi",
    "AI development company",
    "SaaS solutions noida",
    "graphic design company delhi",
    "mobile app development",
    "digital marketing agency noida",
    "VFX company delhi",
    "scalable software solutions",
    "tech company noida",
    "custom software development",
    "UI UX design services",
    "e-commerce development",
    "chatgpt integration services",
    "gemini ai development",
    "machine learning solutions",
    "cloud solutions provider",
    "startup tech partner",
    "enterprise software development",
    "media technology company",
    "post production services",
    "3D animation studio",
    "branding agency noida",
    "SEO services delhi",
    "social media marketing",
    "content management systems",
    "API development services",
    "database design optimization",
    "cybersecurity solutions",
    "IT consulting services"
  ].join(", "),
  authors: [{ name: "RBSH Studio" }],
  creator: "RBSH Studio",
  publisher: "RBSH Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rbshstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RBSH Studio - Premier Web Development & AI Solutions Company Noida Delhi",
    description: "Transform your business with cutting-edge web development, AI SaaS solutions, and creative media services. Leading tech company in Noida Delhi specializing in scalable software, VFX, and digital innovation.",
    url: 'https://rbshstudio.com',
    siteName: 'RBSH Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RBSH Studio - Web Development & AI Solutions Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBSH Studio - Top Tech Company Noida | Web Development & AI Solutions',
    description: 'Leading web development, AI SaaS solutions & creative media company in Noida Delhi. Expert in scalable software, VFX & digital innovation.',
    images: ['/twitter-image.jpg'],
    creator: '@rbshstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", sizes: "16x16 32x32 64x64 128x128 256x256", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RBSH Studio",
              "description": "Leading web development, software development, AI SaaS solutions & graphic design company in Noida Delhi",
              "url": "https://rbshstudio.com",
              "logo": "https://rbshstudio.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-92043-09173",
                "contactType": "customer service",
                "email": "info@rbshstudio.com",
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
                "latitude": "28.589836",
                "longitude": "77.4349397"
              },
              "sameAs": [
                "https://www.facebook.com/rbshstudio",
                "https://www.linkedin.com/company/rbshstudio/",
                "https://www.instagram.com/rbshstudio",
                "https://www.youtube.com/@rbshstudio"
              ],
              "services": [
                "Web Development",
                "Software Development", 
                "AI & SaaS Solutions",
                "Graphic Design",
                "VFX & Animation",
                "Mobile App Development",
                "Digital Marketing",
                "UI/UX Design"
              ],
              "areaServed": ["Noida", "Delhi", "Gurgaon", "Faridabad", "Ghaziabad", "India"]
            })
          }}
        />
      </head>
      <body>
        <CustomCursor/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}