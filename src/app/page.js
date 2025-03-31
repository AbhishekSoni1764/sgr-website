import AboutSection from '@/components/About';
import ApartSection from '@/components/Apart';
import ContactUs from '@/components/Contact';
import HeroSection from '@/components/Hero';
import HomeComponent from '@/components/Home-Component';
import OurProducts from '@/components/Products';
import OurStrengths from '@/components/Strength';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Shyam Global Resources</title>
        <meta
          name="description"
          content="Welcome to Shyam Global Resources, your partner for innovative global solutions and services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Shyam Global Resources, global solutions, innovative services" />
        <meta name="author" content="Shyam Global Resources" />
        <meta property="og:title" content="Shyam Global Resources" />
        <meta
          property="og:description"
          content="Welcome to Shyam Global Resources, your partner for innovative global solutions and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shyamglobalresources.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shyam Global Resources" />
        <meta
          name="twitter:description"
          content="Welcome to Shyam Global Resources, your partner for innovative global solutions and services."
        />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
        <link rel="canonical" href="https://shyamglobalresources.vercel.app/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shyam Global Resources",
            "url": "https://shyamglobalresources.vercel.app/",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "Shyam Global Resources - Delivering cutting-edge global solutions.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9876543210",
              "contactType": "customer service",
              "areaServed": "Worldwide",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.facebook.com/shyamglobal",
              "https://www.linkedin.com/company/shyam-global-resources",
              "https://twitter.com/shyamglobal"
            ]
          })
        }} />
      </Head>

      <HomeComponent />
    </>
  );
}
