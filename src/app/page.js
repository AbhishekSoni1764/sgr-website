import HeroSection from '@/components/Hero';
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
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      {/* Main Content */}
      <HeroSection />
    </>
  );
}
