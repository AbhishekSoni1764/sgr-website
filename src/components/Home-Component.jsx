'use client'
import AboutSection from "./About";
import ApartSection from "./Apart";
import ContactUs from "./Contact";
import HeroSection from "./Hero";
import OurProducts from "./Products";
import OurStrengths from "./Strength";

const HomeComponent = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ApartSection />
            <OurProducts />
            <OurStrengths />
            <ContactUs />
        </>
    );
};

export default HomeComponent;